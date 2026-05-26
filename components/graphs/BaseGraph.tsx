"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

export interface DraggableCurveProps {
  id: string;
  label: string;
  color: string;
  /** Initial shift, default 0 */
  initialShift?: number;
  /** Whether dragging affects the curve. */
  draggable?: boolean;
  /** Bounds for the shift value */
  minShift?: number;
  maxShift?: number;
}

interface BaseGraphProps {
  xLabel: string;
  yLabel: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
  /** Pixels per shift unit (controls drag sensitivity & translation) */
  pxPerUnit?: number;
}

interface CurveContextValue {
  shifts: Record<string, number>;
  setShift: (id: string, v: number) => void;
  pxPerUnit: number;
}

export const CurveContext = React.createContext<CurveContextValue | null>(null);

export function useCurveContext() {
  const ctx = React.useContext(CurveContext);
  if (!ctx) throw new Error("Curve components must be inside a BaseGraph.");
  return ctx;
}

export interface GraphHandle {
  reset: () => void;
  getState: () => Record<string, number>;
}

interface GraphProviderProps {
  initial: Record<string, number>;
  pxPerUnit: number;
  onStateChange?: (state: Record<string, number>) => void;
  children: (state: Record<string, number>) => React.ReactNode;
}

export const GraphProvider = React.forwardRef<GraphHandle, GraphProviderProps>(
  function GraphProvider({ initial, pxPerUnit, onStateChange, children }, ref) {
    const [shifts, setShifts] = useState<Record<string, number>>(initial);

    const setShift = useCallback((id: string, v: number) => {
      setShifts((prev) => ({ ...prev, [id]: v }));
    }, []);

    React.useImperativeHandle(
      ref,
      () => ({
        reset: () => setShifts(initial),
        getState: () => shifts,
      }),
      [initial, shifts]
    );

    useEffect(() => {
      onStateChange?.(shifts);
    }, [shifts, onStateChange]);

    return (
      <CurveContext.Provider value={{ shifts, setShift, pxPerUnit }}>
        {children(shifts)}
      </CurveContext.Provider>
    );
  }
);

export function BaseGraph({
  xLabel,
  yLabel,
  width = 480,
  height = 360,
  children,
}: BaseGraphProps) {
  const pad = { top: 24, right: 36, bottom: 44, left: 56 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="graph-svg w-full max-w-xl bg-white rounded-md border"
    >
      {/* axes */}
      <g transform={`translate(${pad.left},${pad.top})`}>
        {/* y-axis */}
        <line x1={0} y1={0} x2={0} y2={plotH} stroke="#0f172a" strokeWidth={1.5} />
        {/* x-axis */}
        <line x1={0} y1={plotH} x2={plotW} y2={plotH} stroke="#0f172a" strokeWidth={1.5} />
        {/* arrow heads */}
        <polygon points={`0,-2 -4,8 4,8`} fill="#0f172a" />
        <polygon
          points={`${plotW},${plotH} ${plotW - 8},${plotH - 4} ${plotW - 8},${plotH + 4}`}
          fill="#0f172a"
        />
        {/* axis labels */}
        <text x={-8} y={-10} fontSize={12} textAnchor="end" fill="#0f172a">
          {yLabel}
        </text>
        <text x={plotW} y={plotH + 28} fontSize={12} textAnchor="end" fill="#0f172a">
          {xLabel}
        </text>
        {/* plot area context */}
        <PlotAreaProvider width={plotW} height={plotH}>
          {children}
        </PlotAreaProvider>
      </g>
    </svg>
  );
}

interface PlotAreaCtx {
  width: number;
  height: number;
}
const PlotAreaContext = React.createContext<PlotAreaCtx | null>(null);
function PlotAreaProvider({
  width,
  height,
  children,
}: PlotAreaCtx & { children: React.ReactNode }) {
  return (
    <PlotAreaContext.Provider value={{ width, height }}>{children}</PlotAreaContext.Provider>
  );
}
export function usePlot() {
  const v = React.useContext(PlotAreaContext);
  if (!v) throw new Error("Need PlotArea");
  return v;
}

/**
 * Draggable downward-sloping (demand-style) curve.
 * x = price/rate (y axis on graph), y = quantity (x axis on graph)
 * Renders a line from (0, top) to (plotW, bottom) shifted horizontally by `shift * pxPerUnit`.
 */
export function DraggableLine({
  id,
  label,
  color,
  slope, // "down" or "up"
  draggable = true,
  axis = "horizontal", // "horizontal" = shift left/right, "vertical" = up/down (for LRAS, LRPC)
  vertical = false, // pure vertical line (e.g. LRAS at Y*)
  fractionX0 = 0.15,
  fractionX1 = 0.85,
  fractionY0 = 0.15,
  fractionY1 = 0.85,
  labelOffset = { x: 6, y: -6 },
}: {
  id: string;
  label: string;
  color: string;
  slope: "up" | "down" | "flat";
  draggable?: boolean;
  axis?: "horizontal" | "vertical";
  vertical?: boolean;
  fractionX0?: number;
  fractionX1?: number;
  fractionY0?: number;
  fractionY1?: number;
  labelOffset?: { x: number; y: number };
}) {
  const { shifts, setShift, pxPerUnit } = useCurveContext();
  const { width: plotW, height: plotH } = usePlot();
  const shift = shifts[id] ?? 0;
  const dragRef = useRef<{ startClient: number; startShift: number } | null>(null);

  const dx = axis === "horizontal" ? shift * pxPerUnit : 0;
  const dy = axis === "vertical" ? -shift * pxPerUnit : 0;

  let x0: number, y0: number, x1: number, y1: number;
  if (vertical) {
    const xc = plotW * 0.5;
    x0 = x1 = xc;
    y0 = 0;
    y1 = plotH;
  } else if (slope === "down") {
    x0 = plotW * fractionX0;
    y0 = plotH * fractionY0;
    x1 = plotW * fractionX1;
    y1 = plotH * fractionY1;
  } else if (slope === "up") {
    x0 = plotW * fractionX0;
    y0 = plotH * fractionY1;
    x1 = plotW * fractionX1;
    y1 = plotH * fractionY0;
  } else {
    x0 = plotW * fractionX0;
    x1 = plotW * fractionX1;
    y0 = y1 = plotH * 0.5;
  }

  const onPointerDown = (e: React.PointerEvent<SVGGElement>) => {
    if (!draggable) return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    dragRef.current = {
      startClient: axis === "horizontal" ? e.clientX : e.clientY,
      startShift: shift,
    };
  };
  const onPointerMove = (e: React.PointerEvent<SVGGElement>) => {
    if (!dragRef.current) return;
    const cur = axis === "horizontal" ? e.clientX : e.clientY;
    const delta = cur - dragRef.current.startClient;
    const newShift =
      dragRef.current.startShift + (axis === "horizontal" ? delta : -delta) / pxPerUnit;
    const bounded = Math.max(-2.5, Math.min(2.5, newShift));
    setShift(id, bounded);
  };
  const onPointerUp = (e: React.PointerEvent<SVGGElement>) => {
    (e.currentTarget as Element).releasePointerCapture?.(e.pointerId);
    dragRef.current = null;
  };

  const labelX = (x0 + x1) / 2 + dx + labelOffset.x;
  const labelY = (y0 + y1) / 2 + dy + labelOffset.y;

  return (
    <g
      className={draggable ? "curve-handle" : undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* hit area */}
      <line
        x1={x0 + dx}
        y1={y0 + dy}
        x2={x1 + dx}
        y2={y1 + dy}
        stroke="transparent"
        strokeWidth={20}
      />
      {/* visible line */}
      <line
        x1={x0 + dx}
        y1={y0 + dy}
        x2={x1 + dx}
        y2={y1 + dy}
        stroke={color}
        strokeWidth={2.5}
      />
      <text x={labelX} y={labelY} fontSize={13} fill={color} fontWeight={600}>
        {label}
      </text>
    </g>
  );
}

/** Equilibrium dot at the intersection of two lines. Decorative only. */
export function MidMarker({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={3} fill="#0f172a" />
      {label && (
        <text x={x + 6} y={y - 6} fontSize={11} fill="#475569">
          {label}
        </text>
      )}
    </g>
  );
}

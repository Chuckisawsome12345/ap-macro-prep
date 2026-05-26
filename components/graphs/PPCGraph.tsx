"use client";

import React from "react";
import { BaseGraph, GraphHandle, GraphProvider, useCurveContext, usePlot } from "./BaseGraph";

interface Props {
  onStateChange?: (state: Record<string, number>) => void;
  goodX?: string;
  goodY?: string;
}

/** PPC drawn as a concave curve from (0, top) to (right, bottom). Shift = outward growth. */
export const PPCGraph = React.forwardRef<GraphHandle, Props>(function PPCGraph(
  { onStateChange, goodX = "Good X", goodY = "Good Y" },
  ref
) {
  const initial = { PPC: 0 };
  return (
    <GraphProvider ref={ref} initial={initial} pxPerUnit={30} onStateChange={onStateChange}>
      {() => (
        <BaseGraph xLabel={goodX} yLabel={goodY}>
          <PPCCurve />
        </BaseGraph>
      )}
    </GraphProvider>
  );
});

function PPCCurve() {
  const { shifts, setShift, pxPerUnit } = useCurveContext();
  const { width, height } = usePlot();
  const shift = shifts.PPC ?? 0;
  const dragRef = React.useRef<{ startX: number; startShift: number } | null>(null);

  const baseX1 = width * 0.7;
  const baseY0 = height * 0.3;
  const extension = shift * pxPerUnit * 0.5;
  const x1 = baseX1 + extension;
  const y0 = baseY0 - extension;

  // Concave outward bow via quadratic bezier
  const d = `M 0 ${y0} Q ${x1 * 0.6} ${y0 * 0.6} ${x1} ${height}`;

  const onPointerDown = (e: React.PointerEvent<SVGGElement>) => {
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    dragRef.current = { startX: e.clientX, startShift: shift };
  };
  const onPointerMove = (e: React.PointerEvent<SVGGElement>) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    setShift("PPC", Math.max(-2, Math.min(2, dragRef.current.startShift + dx / pxPerUnit)));
  };
  const onPointerUp = (e: React.PointerEvent<SVGGElement>) => {
    (e.currentTarget as Element).releasePointerCapture?.(e.pointerId);
    dragRef.current = null;
  };

  return (
    <g
      className="curve-handle"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <path d={d} fill="none" stroke="transparent" strokeWidth={20} />
      <path d={d} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <text x={x1 - 10} y={y0 - 8} fontSize={13} fill="#2563eb" fontWeight={600}>
        PPC
      </text>
    </g>
  );
}

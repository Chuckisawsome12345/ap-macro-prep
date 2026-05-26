"use client";

import React from "react";
import { BaseGraph, DraggableLine, GraphHandle, GraphProvider } from "./BaseGraph";

interface Props {
  onStateChange?: (state: Record<string, number>) => void;
  showLRPC?: boolean;
}

export const PhillipsCurveGraph = React.forwardRef<GraphHandle, Props>(function PhillipsCurveGraph(
  { onStateChange, showLRPC = true },
  ref
) {
  const initial = { SRPC: 0, LRPC: 0 };
  return (
    <GraphProvider ref={ref} initial={initial} pxPerUnit={30} onStateChange={onStateChange}>
      {() => (
        <BaseGraph xLabel="Unemployment Rate" yLabel="Inflation Rate">
          {showLRPC && (
            <DraggableLine id="LRPC" label="LRPC" color="#16a34a" slope="flat" vertical />
          )}
          <DraggableLine id="SRPC" label="SRPC" color="#2563eb" slope="down" />
        </BaseGraph>
      )}
    </GraphProvider>
  );
});

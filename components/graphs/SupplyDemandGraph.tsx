"use client";

import React from "react";
import { BaseGraph, DraggableLine, GraphHandle, GraphProvider } from "./BaseGraph";

interface Props {
  onStateChange?: (state: Record<string, number>) => void;
  goodLabel?: string;
}

export const SupplyDemandGraph = React.forwardRef<GraphHandle, Props>(function SupplyDemandGraph(
  { onStateChange, goodLabel = "Good" },
  ref
) {
  const initial = { S: 0, D: 0 };
  return (
    <GraphProvider ref={ref} initial={initial} pxPerUnit={30} onStateChange={onStateChange}>
      {() => (
        <BaseGraph xLabel={`Quantity of ${goodLabel}`} yLabel="Price">
          <DraggableLine id="S" label="S" color="#16a34a" slope="up" />
          <DraggableLine id="D" label="D" color="#2563eb" slope="down" />
        </BaseGraph>
      )}
    </GraphProvider>
  );
});

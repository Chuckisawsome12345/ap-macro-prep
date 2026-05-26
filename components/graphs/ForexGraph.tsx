"use client";

import React from "react";
import { BaseGraph, DraggableLine, GraphHandle, GraphProvider } from "./BaseGraph";

interface Props {
  onStateChange?: (state: Record<string, number>) => void;
  currencyLabel?: string;
}

export const ForexGraph = React.forwardRef<GraphHandle, Props>(function ForexGraph(
  { onStateChange, currencyLabel = "USD" },
  ref
) {
  const initial = { S_fx: 0, D_fx: 0 };
  return (
    <GraphProvider ref={ref} initial={initial} pxPerUnit={30} onStateChange={onStateChange}>
      {() => (
        <BaseGraph
          xLabel={`Quantity of ${currencyLabel}`}
          yLabel={`Exchange Rate (of ${currencyLabel})`}
        >
          <DraggableLine id="S_fx" label={`S(${currencyLabel})`} color="#16a34a" slope="up" />
          <DraggableLine id="D_fx" label={`D(${currencyLabel})`} color="#2563eb" slope="down" />
        </BaseGraph>
      )}
    </GraphProvider>
  );
});

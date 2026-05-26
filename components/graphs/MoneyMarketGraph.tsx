"use client";

import React from "react";
import { BaseGraph, DraggableLine, GraphHandle, GraphProvider } from "./BaseGraph";

interface Props {
  onStateChange?: (state: Record<string, number>) => void;
}

export const MoneyMarketGraph = React.forwardRef<GraphHandle, Props>(function MoneyMarketGraph(
  { onStateChange },
  ref
) {
  const initial = { MS: 0, MD: 0 };
  return (
    <GraphProvider ref={ref} initial={initial} pxPerUnit={30} onStateChange={onStateChange}>
      {() => (
        <BaseGraph xLabel="Quantity of Money" yLabel="Nominal Interest Rate (i)">
          <DraggableLine id="MS" label="MS" color="#16a34a" slope="flat" vertical />
          <DraggableLine id="MD" label="MD" color="#2563eb" slope="down" />
        </BaseGraph>
      )}
    </GraphProvider>
  );
});

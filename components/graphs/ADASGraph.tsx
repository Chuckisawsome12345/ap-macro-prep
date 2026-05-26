"use client";

import React from "react";
import { BaseGraph, DraggableLine, GraphHandle, GraphProvider } from "./BaseGraph";

interface Props {
  onStateChange?: (state: Record<string, number>) => void;
  showLRAS?: boolean;
}

export const ADASGraph = React.forwardRef<GraphHandle, Props>(function ADASGraph(
  { onStateChange, showLRAS = true },
  ref
) {
  const initial = { AD: 0, SRAS: 0, LRAS: 0 };
  return (
    <GraphProvider ref={ref} initial={initial} pxPerUnit={30} onStateChange={onStateChange}>
      {() => (
        <BaseGraph xLabel="Real GDP (Y)" yLabel="Price Level (PL)">
          {showLRAS && (
            <DraggableLine id="LRAS" label="LRAS" color="#16a34a" slope="flat" vertical />
          )}
          <DraggableLine id="SRAS" label="SRAS" color="#d97706" slope="up" />
          <DraggableLine id="AD" label="AD" color="#2563eb" slope="down" />
        </BaseGraph>
      )}
    </GraphProvider>
  );
});

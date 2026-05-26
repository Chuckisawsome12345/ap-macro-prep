"use client";

import React from "react";
import { BaseGraph, DraggableLine, GraphHandle, GraphProvider } from "./BaseGraph";

interface Props {
  onStateChange?: (state: Record<string, number>) => void;
}

export const LoanableFundsGraph = React.forwardRef<GraphHandle, Props>(function LoanableFundsGraph(
  { onStateChange },
  ref
) {
  const initial = { S_LF: 0, D_LF: 0 };
  return (
    <GraphProvider ref={ref} initial={initial} pxPerUnit={30} onStateChange={onStateChange}>
      {() => (
        <BaseGraph xLabel="Quantity of Loanable Funds" yLabel="Real Interest Rate (r)">
          <DraggableLine id="S_LF" label="S(LF)" color="#16a34a" slope="up" />
          <DraggableLine id="D_LF" label="D(LF)" color="#2563eb" slope="down" />
        </BaseGraph>
      )}
    </GraphProvider>
  );
});

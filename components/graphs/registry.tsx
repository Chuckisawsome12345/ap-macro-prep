"use client";

import React from "react";
import { GraphHandle } from "./BaseGraph";
import { ADASGraph } from "./ADASGraph";
import { MoneyMarketGraph } from "./MoneyMarketGraph";
import { LoanableFundsGraph } from "./LoanableFundsGraph";
import { PhillipsCurveGraph } from "./PhillipsCurveGraph";
import { ForexGraph } from "./ForexGraph";
import { PPCGraph } from "./PPCGraph";
import { SupplyDemandGraph } from "./SupplyDemandGraph";

export type GraphKind = "adas" | "money" | "loanable" | "phillips" | "forex" | "ppc" | "sd";

export const GRAPH_NAMES: Record<GraphKind, string> = {
  adas: "AD/AS Model",
  money: "Money Market",
  loanable: "Loanable Funds Market",
  phillips: "Phillips Curve",
  forex: "Foreign Exchange (FOREX)",
  ppc: "Production Possibilities Curve",
  sd: "Supply & Demand",
};

interface RenderProps {
  kind: GraphKind;
  onStateChange?: (state: Record<string, number>) => void;
  innerRef?: React.Ref<GraphHandle>;
  options?: Record<string, unknown>;
}

export function RenderGraph({ kind, onStateChange, innerRef, options }: RenderProps) {
  switch (kind) {
    case "adas":
      return <ADASGraph ref={innerRef} onStateChange={onStateChange} {...options} />;
    case "money":
      return <MoneyMarketGraph ref={innerRef} onStateChange={onStateChange} {...options} />;
    case "loanable":
      return <LoanableFundsGraph ref={innerRef} onStateChange={onStateChange} {...options} />;
    case "phillips":
      return <PhillipsCurveGraph ref={innerRef} onStateChange={onStateChange} {...options} />;
    case "forex":
      return <ForexGraph ref={innerRef} onStateChange={onStateChange} {...options} />;
    case "ppc":
      return <PPCGraph ref={innerRef} onStateChange={onStateChange} {...options} />;
    case "sd":
      return <SupplyDemandGraph ref={innerRef} onStateChange={onStateChange} {...options} />;
  }
}

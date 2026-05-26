"use client";

import React from "react";
import { BlockMath } from "react-katex";

interface Formula {
  label: string;
  latex: string;
  note?: string;
}

export function FormulaSheet({ formulas }: { formulas: Formula[] }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
      <h4 className="font-semibold text-ink">Key formulas</h4>
      <ul className="space-y-2">
        {formulas.map((f) => (
          <li key={f.label} className="border-b last:border-0 pb-2 last:pb-0">
            <div className="text-xs text-slate-500 mb-1">{f.label}</div>
            <BlockMath math={f.latex} />
            {f.note && <p className="text-xs text-slate-500">{f.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

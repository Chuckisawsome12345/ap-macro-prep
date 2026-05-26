"use client";

import React, { useRef, useState } from "react";
import { GraphHandle } from "@/components/graphs/BaseGraph";
import { GRAPH_NAMES, RenderGraph } from "@/components/graphs/registry";
import { evaluateChallenge, EvaluationResult } from "@/lib/graphLogic";
import type { GraphChallenge } from "@/content/graphing/challenges";

interface Props {
  challenge: GraphChallenge;
  onResult?: (passed: boolean) => void;
}

export function GraphingChallenge({ challenge, onResult }: Props) {
  const graphRef = useRef<GraphHandle>(null);
  const [state, setState] = useState<Record<string, number>>({});
  const [result, setResult] = useState<EvaluationResult | null>(null);

  const handleCheck = () => {
    const r = evaluateChallenge(challenge.expectation, state);
    setResult(r);
    onResult?.(r.passed);
  };

  const handleReset = () => {
    graphRef.current?.reset();
    setResult(null);
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm space-y-4">
      <header className="space-y-1">
        <div className="text-xs text-slate-500 uppercase tracking-wide">
          {GRAPH_NAMES[challenge.graph]} · Unit {challenge.unit}
        </div>
        <h3 className="text-lg font-semibold text-ink">{challenge.title}</h3>
        <p className="text-sm text-slate-700 whitespace-pre-line">{challenge.scenario}</p>
        <p className="text-sm font-medium text-accent">Task: {challenge.task}</p>
      </header>

      <div className="flex justify-center">
        <RenderGraph
          kind={challenge.graph}
          innerRef={graphRef}
          onStateChange={setState}
          options={challenge.graphOptions}
        />
      </div>

      <p className="text-xs text-slate-500 text-center">
        Drag any curve horizontally (vertical curves shift left/right; vertical lines & curves with
        vertical axes shift up/down). Click Reset to start over.
      </p>

      <div className="flex gap-2 justify-end">
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-md border border-slate-300 text-slate-700"
        >
          Reset
        </button>
        <button onClick={handleCheck} className="px-4 py-2 rounded-md bg-accent text-white">
          Check
        </button>
      </div>

      {result && (
        <div
          className={`rounded-md p-4 text-sm space-y-2 ${
            result.passed ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"
          }`}
        >
          <p className="font-semibold">
            {result.passed ? "Correct! Curves shifted as expected." : "Not quite. Check below:"}
          </p>
          <ul className="text-sm space-y-1">
            {result.perCurve.map((c) => (
              <li key={c.curveId}>
                {c.ok ? "✓" : "✗"} <strong>{c.curveId}</strong>: expected {c.expected}, got{" "}
                {c.actual}
                {c.rationale ? ` — ${c.rationale}` : ""}
              </li>
            ))}
            {result.extraMovementOn.length > 0 && (
              <li>
                ⚠ You moved curves that should not have shifted: {result.extraMovementOn.join(", ")}
              </li>
            )}
          </ul>
          {challenge.explanation && <p className="mt-2 text-slate-700">{challenge.explanation}</p>}
        </div>
      )}
    </div>
  );
}

"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GRAPH_CHALLENGES } from "@/content/graphing/challenges";
import { GraphingChallenge } from "@/components/practice/GraphingChallenge";
import { useProgress, UnitId } from "@/lib/progress";

function GraphingPracticeInner() {
  const params = useSearchParams();
  const initialUnit = params.get("unit");
  const recordGraph = useProgress((s) => s.recordGraph);
  const [filterUnit, setFilterUnit] = useState<UnitId | "all">(
    initialUnit ? (Number(initialUnit) as UnitId) : "all"
  );
  const [index, setIndex] = useState(0);

  const visible = useMemo(
    () =>
      filterUnit === "all"
        ? GRAPH_CHALLENGES
        : GRAPH_CHALLENGES.filter((c) => c.unit === filterUnit),
    [filterUnit]
  );

  const current = visible[index];

  const handleResult = (passed: boolean) => {
    if (!current) return;
    recordGraph({
      challengeId: current.id,
      unit: current.unit,
      passed,
      timestamp: Date.now(),
    });
  };

  const next = () => setIndex((i) => (i + 1) % visible.length);
  const prev = () => setIndex((i) => (i - 1 + visible.length) % visible.length);

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Graphing practice</h1>
        <p className="text-sm text-slate-600">
          Read the scenario, drag the correct curve(s), and click Check.
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase text-slate-500">Filter:</span>
          <button
            onClick={() => {
              setFilterUnit("all");
              setIndex(0);
            }}
            className={`px-3 py-1 rounded text-xs border ${
              filterUnit === "all"
                ? "bg-accent text-white border-accent"
                : "bg-white text-slate-700 border-slate-300"
            }`}
          >
            All
          </button>
          {([1, 2, 3, 4, 5, 6] as UnitId[]).map((u) => (
            <button
              key={u}
              onClick={() => {
                setFilterUnit(u);
                setIndex(0);
              }}
              className={`px-3 py-1 rounded text-xs border ${
                filterUnit === u
                  ? "bg-accent text-white border-accent"
                  : "bg-white text-slate-700 border-slate-300"
              }`}
            >
              Unit {u}
            </button>
          ))}
        </div>
      </header>

      {!current ? (
        <p className="text-sm text-slate-600">No challenges for the selected unit yet.</p>
      ) : (
        <>
          <GraphingChallenge
            key={current.id}
            challenge={current}
            onResult={handleResult}
          />
          <div className="flex justify-between text-sm">
            <button onClick={prev} className="px-3 py-1.5 rounded border">
              ← Previous
            </button>
            <span className="text-slate-500">
              {index + 1} / {visible.length}
            </span>
            <button
              onClick={next}
              className="px-3 py-1.5 rounded bg-accent text-white"
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function GraphingPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <GraphingPracticeInner />
    </Suspense>
  );
}

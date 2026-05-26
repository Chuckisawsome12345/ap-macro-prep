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
  const graphResults = useProgress((s) => s.graphResults);
  const [filterUnit, setFilterUnit] = useState<UnitId | "all">(
    initialUnit ? (Number(initialUnit) as UnitId) : "all"
  );
  const [index, setIndex] = useState(0);
  const [showCompleted, setShowCompleted] = useState(false);

  const passedIds = useMemo(
    () => new Set(graphResults.filter((r) => r.passed).map((r) => r.challengeId)),
    [graphResults]
  );

  const allInFilter = useMemo(
    () =>
      filterUnit === "all"
        ? GRAPH_CHALLENGES
        : GRAPH_CHALLENGES.filter((c) => c.unit === filterUnit),
    [filterUnit]
  );

  const allPassed = allInFilter.length > 0 && allInFilter.every((c) => passedIds.has(c.id));

  const visible = useMemo(() => {
    if (showCompleted || allPassed) return allInFilter;
    return allInFilter.filter((c) => !passedIds.has(c.id));
  }, [allInFilter, passedIds, showCompleted, allPassed]);

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

  const changeFilter = (u: UnitId | "all") => {
    setFilterUnit(u);
    setIndex(0);
  };

  const next = () => setIndex((i) => (i + 1) % visible.length);
  const prev = () => setIndex((i) => (i - 1 + visible.length) % visible.length);

  const passedCount = allInFilter.filter((c) => passedIds.has(c.id)).length;
  const isPassed = current ? passedIds.has(current.id) : false;

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
            onClick={() => changeFilter("all")}
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
              onClick={() => changeFilter(u)}
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

        <div className="flex items-center justify-between pt-1">
          <p className="text-xs text-slate-500">
            {passedCount} of {allInFilter.length} passed
          </p>
          {allPassed ? (
            <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded px-2 py-1">
              All challenges passed — showing all
            </p>
          ) : (
            <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={(e) => {
                  setShowCompleted(e.target.checked);
                  setIndex(0);
                }}
                className="rounded"
              />
              Show completed
            </label>
          )}
        </div>
      </header>

      {!current ? (
        <p className="text-sm text-slate-600">No challenges for the selected unit yet.</p>
      ) : (
        <>
          {isPassed && (
            <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2">
              <span>✓ You&apos;ve already passed this challenge.</span>
            </div>
          )}
          <GraphingChallenge
            key={current.id}
            challenge={current}
            onResult={handleResult}
          />
          <div className="flex justify-between text-sm items-center">
            <button
              onClick={prev}
              disabled={visible.length <= 1}
              className="px-3 py-1.5 rounded border disabled:opacity-40"
            >
              ← Previous
            </button>
            <span className="text-slate-500">
              {index + 1} / {visible.length}
            </span>
            <button
              onClick={next}
              disabled={visible.length <= 1}
              className="px-3 py-1.5 rounded bg-accent text-white disabled:opacity-40"
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

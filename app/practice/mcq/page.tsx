"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MCQ_BANK, MCQItem } from "@/content/mcq/questions";
import { MCQQuestion } from "@/components/practice/MCQQuestion";
import { useProgress, UnitId } from "@/lib/progress";

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function MCQSessionInner() {
  const params = useSearchParams();
  const initialUnit = params.get("unit");
  const [selectedUnits, setSelectedUnits] = useState<Set<UnitId>>(
    initialUnit
      ? new Set([Number(initialUnit) as UnitId])
      : new Set<UnitId>([1, 2, 3, 4, 5, 6])
  );
  const [count, setCount] = useState<number>(10);
  const [session, setSession] = useState<MCQItem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [includeRepeats, setIncludeRepeats] = useState(false);
  const recordMCQ = useProgress((s) => s.recordMCQ);
  const mcqAttempts = useProgress((s) => s.mcqAttempts);

  const seenIds = useMemo(
    () => new Set(mcqAttempts.map((a) => a.questionId)),
    [mcqAttempts]
  );

  const allInSelection = useMemo(
    () => MCQ_BANK.filter((q) => selectedUnits.has(q.unit)),
    [selectedUnits]
  );

  const unseenInSelection = useMemo(
    () => allInSelection.filter((q) => !seenIds.has(q.id)),
    [allInSelection, seenIds]
  );

  const allSeen = unseenInSelection.length === 0 && allInSelection.length > 0;

  const pool = useMemo(
    () => (includeRepeats || allSeen ? allInSelection : unseenInSelection),
    [includeRepeats, allSeen, allInSelection, unseenInSelection]
  );

  const start = () => {
    const sample = shuffle(pool).slice(0, Math.min(count, pool.length));
    setSession(sample);
    setIndex(0);
    setCorrectCount(0);
  };

  const toggleUnit = (u: UnitId) => {
    setSelectedUnits((prev) => {
      const next = new Set(prev);
      if (next.has(u)) next.delete(u);
      else next.add(u);
      return next;
    });
  };

  const handleAnswer = (correct: boolean) => {
    const q = session![index];
    recordMCQ({
      questionId: q.id,
      unit: q.unit,
      topic: q.topic,
      correct,
      timestamp: Date.now(),
    });
    if (correct) setCorrectCount((c) => c + 1);
  };

  const handleNext = () => {
    if (index + 1 < session!.length) setIndex(index + 1);
    else setSession(null);
  };

  if (!session) {
    return (
      <div className="space-y-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold">MCQ practice</h1>
        <p className="text-sm text-slate-600">
          Original AP-style multiple-choice questions. Pick units and session length.
        </p>

        <div className="rounded-lg border bg-white p-5 space-y-4">
          <div>
            <label className="text-xs uppercase text-slate-500">Units</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {([1, 2, 3, 4, 5, 6] as UnitId[]).map((u) => (
                <button
                  key={u}
                  onClick={() => toggleUnit(u)}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    selectedUnits.has(u)
                      ? "bg-accent text-white border-accent"
                      : "bg-white text-slate-700 border-slate-300"
                  }`}
                >
                  Unit {u}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs uppercase text-slate-500">Questions per session</label>
            <div className="flex gap-2 mt-1">
              {[5, 10, 20, 30].map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    count === n
                      ? "bg-accent text-white border-accent"
                      : "bg-white text-slate-700 border-slate-300"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {allSeen ? (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded px-3 py-2">
                You&apos;ve answered all {allInSelection.length} question{allInSelection.length === 1 ? "" : "s"} in this selection. Showing all questions again.
              </p>
            ) : (
              <p className="text-xs text-slate-500">
                {unseenInSelection.length} unseen · {allInSelection.length} total in selection
              </p>
            )}
            {!allSeen && (
              <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeRepeats}
                  onChange={(e) => setIncludeRepeats(e.target.checked)}
                  className="rounded"
                />
                Include already-answered questions
              </label>
            )}
          </div>
          <button
            onClick={start}
            disabled={pool.length === 0}
            className="w-full px-4 py-2 rounded-md bg-accent text-white disabled:opacity-40"
          >
            Start session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <MCQQuestion
        key={session[index].id}
        question={session[index]}
        index={index}
        total={session.length}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
      <div className="text-xs text-slate-500 text-right">
        Score so far: {correctCount} / {index + (index === session.length - 1 ? 1 : 0)}
      </div>
    </div>
  );
}

export default function MCQPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <MCQSessionInner />
    </Suspense>
  );
}

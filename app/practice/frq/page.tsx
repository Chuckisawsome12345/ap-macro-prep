"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FRQ_BANK } from "@/content/frq/prompts";
import { FRQPrompt } from "@/components/practice/FRQPrompt";
import { useProgress, UnitId } from "@/lib/progress";

function FRQPracticeInner() {
  const params = useSearchParams();
  const initialUnit = params.get("unit");
  const recordFRQ = useProgress((s) => s.recordFRQ);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (!initialUnit) return FRQ_BANK;
    const u = Number(initialUnit) as UnitId;
    return FRQ_BANK.filter((f) => f.units.includes(u));
  }, [initialUnit]);

  const current = visible.find((f) => f.id === selectedId);

  if (current) {
    const total = current.parts.reduce((s, p) => s + p.points, 0);
    return (
      <div className="space-y-4 max-w-3xl mx-auto">
        <button
          onClick={() => setSelectedId(null)}
          className="text-sm text-accent underline"
        >
          ← Back to prompt list
        </button>
        <FRQPrompt
          prompt={current}
          onScore={(pts) =>
            recordFRQ({
              promptId: current.id,
              pointsEarned: pts,
              pointsPossible: total,
              timestamp: Date.now(),
            })
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold">FRQ practice</h1>
        <p className="text-sm text-slate-600">
          Original AP-style multi-part free-response prompts. Write responses, reveal the rubric,
          and self-score.
        </p>
      </header>
      <ul className="space-y-3">
        {visible.map((f) => {
          const total = f.parts.reduce((s, p) => s + p.points, 0);
          return (
            <li
              key={f.id}
              className="rounded-lg border bg-white p-4 hover:shadow-sm transition"
            >
              <button
                onClick={() => setSelectedId(f.id)}
                className="text-left w-full space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{f.title}</span>
                  <span className="text-xs text-slate-500">
                    {f.type} · {total} pts
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  Units: {f.units.join(", ")}
                </div>
                <p className="text-sm text-slate-700 line-clamp-2">{f.scenario}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function FRQPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <FRQPracticeInner />
    </Suspense>
  );
}

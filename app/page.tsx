"use client";

import Link from "next/link";
import { ALL_UNITS } from "@/content/units";
import { useProgress, unitAccuracy, topicAccuracy } from "@/lib/progress";

export default function Dashboard() {
  const mcqAttempts = useProgress((s) => s.mcqAttempts);
  const frqScores = useProgress((s) => s.frqScores);
  const graphResults = useProgress((s) => s.graphResults);
  const resetAll = useProgress((s) => s.resetAll);

  const topics = topicAccuracy(mcqAttempts).sort((a, b) => a.pct - b.pct);
  const weakest = topics.slice(0, 3);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-ink">Welcome back.</h1>
        <p className="text-slate-600 mt-1">
          Personal AP Macro prep. Review units, drill MCQs, write FRQs, and master every graph.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="MCQs attempted" value={mcqAttempts.length} />
        <StatCard
          label="MCQ accuracy"
          value={
            mcqAttempts.length === 0
              ? "—"
              : Math.round(
                  (mcqAttempts.filter((a) => a.correct).length / mcqAttempts.length) * 100
                ) + "%"
          }
        />
        <StatCard
          label="Graphing challenges passed"
          value={`${graphResults.filter((g) => g.passed).length} / ${graphResults.length || 0}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ALL_UNITS.map((u) => {
            const acc = unitAccuracy(mcqAttempts, u.id);
            return (
              <Link
                key={u.id}
                href={`/units/${u.id}`}
                className="block rounded-lg border bg-white p-5 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Unit {u.id} · {u.weight}</div>
                    <div className="font-semibold text-ink">{u.title}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">MCQ accuracy</div>
                    <div className="font-mono text-sm">
                      {acc ? `${acc.pct}% (${acc.correct}/${acc.total})` : "—"}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-2">{u.bigIdea}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {weakest.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-3">Weakest topics</h2>
          <ul className="space-y-2">
            {weakest.map((t) => (
              <li
                key={t.topic}
                className="rounded-md border bg-white p-3 flex items-center justify-between"
              >
                <span className="text-sm">
                  <span className="text-xs text-slate-500 mr-2">U{t.unit}</span>
                  {t.topic} — <span className="font-mono">{t.pct}%</span>{" "}
                  <span className="text-xs text-slate-500">({t.total} attempts)</span>
                </span>
                <Link
                  href={`/practice/mcq?unit=${t.unit}`}
                  className="text-xs text-accent underline"
                >
                  Practice this →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="flex flex-wrap gap-3 pt-4 border-t">
        <Link
          href="/practice/mcq"
          className="px-4 py-2 rounded-md bg-accent text-white text-sm"
        >
          Start MCQ session →
        </Link>
        <Link
          href="/practice/frq"
          className="px-4 py-2 rounded-md border border-slate-300 text-sm"
        >
          Practice FRQ
        </Link>
        <Link
          href="/practice/graphing"
          className="px-4 py-2 rounded-md border border-slate-300 text-sm"
        >
          Graphing drills
        </Link>
        <Link href="/exam" className="px-4 py-2 rounded-md border border-slate-300 text-sm">
          Take a mock exam
        </Link>
        <button
          onClick={() => {
            if (confirm("Reset all progress? This cannot be undone.")) resetAll();
          }}
          className="ml-auto px-3 py-2 text-xs text-slate-500 hover:text-danger"
        >
          Reset progress
        </button>
      </section>

      {frqScores.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-3">Recent FRQ scores</h2>
          <ul className="space-y-2">
            {frqScores
              .slice(-5)
              .reverse()
              .map((s, i) => (
                <li key={i} className="text-sm text-slate-700">
                  {new Date(s.timestamp).toLocaleDateString()} —{" "}
                  <span className="font-mono">
                    {s.pointsEarned}/{s.pointsPossible}
                  </span>{" "}
                  on {s.promptId}
                </li>
              ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border bg-white p-5">
      <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}

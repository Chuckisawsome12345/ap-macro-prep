"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UNITS } from "@/content/units";
import { ConceptCard } from "@/components/review/ConceptCard";
import { FormulaSheet } from "@/components/review/FormulaSheet";
import { RenderGraph } from "@/components/graphs/registry";
import type { UnitId } from "@/lib/progress";

export default function UnitPage({ params }: { params: Promise<{ unit: string }> }) {
  const { unit } = use(params);
  const id = Number(unit) as UnitId;
  if (!(id in UNITS)) notFound();
  const u = UNITS[id];

  const otherUnits: UnitId[] = [1, 2, 3, 4, 5, 6];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-xs text-slate-500 uppercase tracking-wide">
          Unit {u.id} · {u.weight}
        </div>
        <h1 className="text-3xl font-bold text-ink">{u.title}</h1>
        <p className="text-slate-700">{u.bigIdea}</p>
      </header>

      <nav className="flex flex-wrap gap-2 border-b pb-2">
        {otherUnits.map((n) => (
          <Link
            key={n}
            href={`/units/${n}`}
            className={`px-3 py-1 text-xs rounded ${
              n === id ? "bg-accent text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            U{n}
          </Link>
        ))}
      </nav>

      <section>
        <h2 className="text-xl font-semibold mb-3">Learning objectives</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm text-slate-700">
          {u.objectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Key concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {u.concepts.map((c) => (
            <ConceptCard key={c.term} {...c} />
          ))}
        </div>
      </section>

      {u.formulas.length > 0 && (
        <section>
          <FormulaSheet formulas={u.formulas} />
        </section>
      )}

      {u.guides && u.guides.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Exam strategy guides</h2>
          {u.guides.map((g) => (
            <div key={g.title} className="rounded-lg border bg-amber-50 border-amber-200 p-5 space-y-4">
              <h3 className="font-semibold text-amber-900">{g.title}</h3>
              <p className="text-sm text-amber-800">{g.intro}</p>
              <ol className="space-y-3">
                {g.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-300 text-amber-900 flex items-center justify-center font-semibold text-xs">
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-amber-900">{s.heading}: </span>
                      <span className="text-slate-700">{s.body}</span>
                    </div>
                  </li>
                ))}
              </ol>
              {g.tip && (
                <div className="rounded-md bg-amber-100 border border-amber-300 px-4 py-3 text-sm text-amber-900">
                  <span className="font-semibold">Tip: </span>{g.tip}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {u.featuredGraph && (
        <section>
          <h2 className="text-xl font-semibold mb-3">Featured graph (interactive)</h2>
          <p className="text-sm text-slate-600 mb-3">
            Drag the curves to see how shifts work. Use the Graphing practice page to test yourself
            against scenarios.
          </p>
          <div className="flex justify-center">
            <RenderGraph kind={u.featuredGraph} />
          </div>
        </section>
      )}

      <section className="rounded-lg border bg-white p-4">
        <h2 className="text-lg font-semibold mb-2">Practice this unit</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/practice/mcq?unit=${u.id}`}
            className="px-3 py-1.5 rounded-md bg-accent text-white text-sm"
          >
            MCQ ({u.id})
          </Link>
          <Link
            href={`/practice/frq?unit=${u.id}`}
            className="px-3 py-1.5 rounded-md border text-sm"
          >
            FRQ ({u.id})
          </Link>
          <Link
            href={`/practice/graphing?unit=${u.id}`}
            className="px-3 py-1.5 rounded-md border text-sm"
          >
            Graphing ({u.id})
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Official College Board resources</h2>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
          {u.apCentralLinks.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

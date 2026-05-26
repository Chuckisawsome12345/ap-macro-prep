"use client";

import React, { useState } from "react";
import type { FRQItem, FRQPart } from "@/content/frq/prompts";

interface Props {
  prompt: FRQItem;
  onScore: (pointsEarned: number) => void;
}

export function FRQPrompt({ prompt, onScore }: Props) {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);
  const [partScores, setPartScores] = useState<Record<string, number>>({});
  const [finalized, setFinalized] = useState(false);

  const totalPossible = prompt.parts.reduce((s, p) => s + p.points, 0);
  const totalEarned = Object.values(partScores).reduce((s, v) => s + v, 0);

  const finalize = () => {
    setFinalized(true);
    onScore(totalEarned);
  };

  return (
    <article className="rounded-lg border bg-white p-6 shadow-sm space-y-5">
      <header>
        <div className="text-xs text-slate-500 uppercase tracking-wide">{prompt.type} FRQ</div>
        <h2 className="text-lg font-semibold text-ink">{prompt.title}</h2>
        <p className="text-xs text-slate-500 mt-1">
          Units: {prompt.units.join(", ")} · {totalPossible} points
          {prompt.sourceExam ? ` · modeled on ${prompt.sourceExam}` : ""}
        </p>
      </header>

      <p className="whitespace-pre-line text-sm text-slate-700">{prompt.scenario}</p>

      <ol className="space-y-4 list-[lower-alpha] pl-6">
        {prompt.parts.map((part) => (
          <li key={part.id}>
            <PartView
              part={part}
              response={responses[part.id] ?? ""}
              onChange={(v) => setResponses((r) => ({ ...r, [part.id]: v }))}
              revealed={revealed}
              score={partScores[part.id]}
              onScore={(v) => setPartScores((s) => ({ ...s, [part.id]: v }))}
              finalized={finalized}
            />
          </li>
        ))}
      </ol>

      <div className="flex items-center justify-between border-t pt-4">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="px-4 py-2 rounded-md bg-accent text-white"
          >
            Reveal rubric
          </button>
        ) : !finalized ? (
          <button onClick={finalize} className="px-4 py-2 rounded-md bg-success text-white">
            Save score ({totalEarned}/{totalPossible})
          </button>
        ) : (
          <span className="text-sm font-medium text-success">
            Saved: {totalEarned}/{totalPossible} pts
          </span>
        )}
        <span className="text-sm text-slate-600">
          Self-score: <strong>{totalEarned}</strong> / {totalPossible}
        </span>
      </div>
    </article>
  );
}

interface PartViewProps {
  part: FRQPart;
  response: string;
  onChange: (v: string) => void;
  revealed: boolean;
  score: number | undefined;
  onScore: (v: number) => void;
  finalized: boolean;
}

function PartView({
  part,
  response,
  onChange,
  revealed,
  score,
  onScore,
  finalized,
}: PartViewProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-ink">
        <span className="font-semibold">[{part.points} pt{part.points > 1 ? "s" : ""}]</span>{" "}
        {part.prompt}
      </p>
      <textarea
        value={response}
        onChange={(e) => onChange(e.target.value)}
        rows={part.expectedLines ?? 3}
        className="w-full rounded border border-slate-300 px-3 py-2 text-sm font-serif"
        placeholder="Your response…"
        disabled={finalized}
      />
      {revealed && (
        <div className="rounded bg-slate-50 border border-slate-200 p-3 text-sm space-y-2">
          <p className="font-semibold text-slate-700">Rubric:</p>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            {part.rubric.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          {!finalized && (
            <div className="flex items-center gap-2 pt-2">
              <label className="text-xs text-slate-600">Points earned:</label>
              {Array.from({ length: part.points + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => onScore(i)}
                  className={`w-7 h-7 rounded text-xs border ${
                    score === i ? "bg-accent text-white border-accent" : "border-slate-300"
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

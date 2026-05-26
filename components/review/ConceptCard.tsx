import React from "react";

interface Props {
  term: string;
  definition: string;
  example?: string;
}

export function ConceptCard({ term, definition, example }: Props) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h4 className="font-semibold text-ink">{term}</h4>
      <p className="text-sm text-slate-700 mt-1">{definition}</p>
      {example && <p className="text-xs text-slate-500 mt-2 italic">Example: {example}</p>}
    </div>
  );
}

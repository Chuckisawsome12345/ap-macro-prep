"use client";

import React, { useState } from "react";
import type { MCQItem } from "@/content/mcq/questions";

interface Props {
  question: MCQItem;
  index: number;
  total: number;
  onAnswer: (correct: boolean, chosen: number) => void;
  onNext: () => void;
}

export function MCQQuestion({ question, index, total, onAnswer, onNext }: Props) {
  const [chosen, setChosen] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const choose = (i: number) => {
    if (submitted) return;
    setChosen(i);
  };

  const submit = () => {
    if (chosen === null) return;
    setSubmitted(true);
    onAnswer(chosen === question.correctIndex, chosen);
  };

  const advance = () => {
    setChosen(null);
    setSubmitted(false);
    onNext();
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Question {index + 1} of {total}
        </span>
        <span>
          Unit {question.unit} · {question.topic}
        </span>
      </div>
      <p className="text-base text-ink whitespace-pre-line">{question.stem}</p>
      <ul className="space-y-2">
        {question.choices.map((choice, i) => {
          const isChosen = chosen === i;
          const isCorrect = i === question.correctIndex;
          let cls = "border-slate-300 hover:bg-slate-50";
          if (submitted) {
            if (isCorrect) cls = "border-success bg-green-50";
            else if (isChosen) cls = "border-danger bg-red-50";
            else cls = "border-slate-200 opacity-70";
          } else if (isChosen) {
            cls = "border-accent bg-accentSoft";
          }
          return (
            <li key={i}>
              <button
                onClick={() => choose(i)}
                disabled={submitted}
                className={`w-full text-left px-4 py-2 rounded-md border transition ${cls}`}
              >
                <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                {choice}
              </button>
            </li>
          );
        })}
      </ul>

      {submitted && (
        <div
          className={`rounded-md p-3 text-sm ${
            chosen === question.correctIndex
              ? "bg-green-50 text-green-900"
              : "bg-red-50 text-red-900"
          }`}
        >
          <p className="font-semibold mb-1">
            {chosen === question.correctIndex ? "Correct!" : "Not quite."}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={chosen === null}
            className="px-4 py-2 rounded-md bg-accent text-white disabled:opacity-40"
          >
            Submit
          </button>
        ) : (
          <button onClick={advance} className="px-4 py-2 rounded-md bg-accent text-white">
            {index + 1 < total ? "Next question" : "Finish"}
          </button>
        )}
      </div>
    </div>
  );
}

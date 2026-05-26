"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MCQ_BANK, MCQItem } from "@/content/mcq/questions";
import { FRQ_BANK, FRQItem } from "@/content/frq/prompts";
import { MCQQuestion } from "@/components/practice/MCQQuestion";
import { FRQPrompt } from "@/components/practice/FRQPrompt";
import { useProgress } from "@/lib/progress";

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

type Phase = "intro" | "mcq" | "break" | "frq" | "done";

// Approximate AP Macro composite curve (sketch — not official)
function estimateAPScore(mcqPct: number, frqPct: number): { composite: number; score: 1 | 2 | 3 | 4 | 5 } {
  // 2/3 weight MCQ, 1/3 FRQ (rough)
  const composite = Math.round(0.66 * mcqPct + 0.34 * frqPct);
  let score: 1 | 2 | 3 | 4 | 5 = 1;
  if (composite >= 72) score = 5;
  else if (composite >= 58) score = 4;
  else if (composite >= 44) score = 3;
  else if (composite >= 30) score = 2;
  return { composite, score };
}

export default function ExamPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [mcqs, setMCQs] = useState<MCQItem[]>([]);
  const [frqs, setFRQs] = useState<FRQItem[]>([]);
  const [mcqIndex, setMCQIndex] = useState(0);
  const [mcqCorrect, setMCQCorrect] = useState(0);
  const [frqEarned, setFRQEarned] = useState(0);
  const [frqPossible, setFRQPossible] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const recordMCQ = useProgress((s) => s.recordMCQ);
  const recordFRQ = useProgress((s) => s.recordFRQ);

  // pick exam questions
  const pickedMCQ = useMemo(() => shuffle(MCQ_BANK).slice(0, Math.min(60, MCQ_BANK.length)), []);
  const pickedFRQ = useMemo(() => {
    const longs = FRQ_BANK.filter((f) => f.type === "Long");
    const shorts = FRQ_BANK.filter((f) => f.type === "Short");
    const picked = [...shuffle(longs).slice(0, 1), ...shuffle(shorts).slice(0, 2)];
    return picked.length ? picked : FRQ_BANK.slice(0, 3);
  }, []);

  // timer
  useEffect(() => {
    if (phase !== "mcq" && phase !== "frq") return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          if (phase === "mcq") setPhase("break");
          else setPhase("done");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  const startMCQ = () => {
    setMCQs(pickedMCQ);
    setMCQIndex(0);
    setMCQCorrect(0);
    setSecondsLeft(pickedMCQ.length === 60 ? 70 * 60 : Math.round((pickedMCQ.length / 60) * 70 * 60));
    setPhase("mcq");
  };
  const startFRQ = () => {
    setFRQs(pickedFRQ);
    setFRQEarned(0);
    setFRQPossible(pickedFRQ.reduce((s, f) => s + f.parts.reduce((a, p) => a + p.points, 0), 0));
    setSecondsLeft(60 * 60);
    setPhase("frq");
  };

  const onAnswer = (correct: boolean) => {
    const q = mcqs[mcqIndex];
    recordMCQ({
      questionId: q.id,
      unit: q.unit,
      topic: q.topic,
      correct,
      timestamp: Date.now(),
    });
    if (correct) setMCQCorrect((c) => c + 1);
  };
  const onNext = () => {
    if (mcqIndex + 1 < mcqs.length) setMCQIndex(mcqIndex + 1);
    else setPhase("break");
  };

  const onFRQScore = (frq: FRQItem, pts: number) => {
    const possible = frq.parts.reduce((s, p) => s + p.points, 0);
    recordFRQ({
      promptId: frq.id,
      pointsEarned: pts,
      pointsPossible: possible,
      timestamp: Date.now(),
    });
    setFRQEarned((e) => e + pts);
  };

  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto space-y-5">
        <h1 className="text-2xl font-bold">Mock AP Macro Exam</h1>
        <div className="rounded-lg border bg-white p-5 space-y-3">
          <p className="text-sm text-slate-700">
            Format: {Math.min(60, MCQ_BANK.length)} MCQ in 70 minutes, short break, then 3 FRQs in
            60 minutes. Composite mapped to a 1–5 score.
          </p>
          <p className="text-xs text-slate-500">
            The bank currently contains {MCQ_BANK.length} original MCQ items and {FRQ_BANK.length}{" "}
            original FRQ prompts. As you add more items to <code>content/mcq</code> and{" "}
            <code>content/frq</code>, mock exams will draw from the larger pool.
          </p>
          <button
            onClick={startMCQ}
            className="w-full px-4 py-2 rounded-md bg-accent text-white"
          >
            Start MCQ section
          </button>
        </div>
      </div>
    );
  }

  if (phase === "mcq") {
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <ExamHeader label="MCQ section" timeLeft={secondsLeft} />
        <MCQQuestion
          key={mcqs[mcqIndex].id}
          question={mcqs[mcqIndex]}
          index={mcqIndex}
          total={mcqs.length}
          onAnswer={onAnswer}
          onNext={onNext}
        />
      </div>
    );
  }

  if (phase === "break") {
    return (
      <div className="max-w-xl mx-auto space-y-4">
        <h2 className="text-xl font-semibold">MCQ section complete</h2>
        <p className="text-sm text-slate-700">
          Score on MCQ: <strong>{mcqCorrect}</strong> / {mcqs.length} (
          {Math.round((mcqCorrect / Math.max(1, mcqs.length)) * 100)}%)
        </p>
        <button
          onClick={startFRQ}
          className="px-4 py-2 rounded-md bg-accent text-white"
        >
          Begin FRQ section (60 min)
        </button>
      </div>
    );
  }

  if (phase === "frq") {
    return (
      <div className="max-w-3xl mx-auto space-y-5">
        <ExamHeader label="FRQ section" timeLeft={secondsLeft} />
        {frqs.map((f) => (
          <FRQPrompt key={f.id} prompt={f} onScore={(pts) => onFRQScore(f, pts)} />
        ))}
        <button
          onClick={() => setPhase("done")}
          className="px-4 py-2 rounded-md bg-success text-white"
        >
          Finish exam
        </button>
      </div>
    );
  }

  // done
  const mcqPct = Math.round((mcqCorrect / Math.max(1, mcqs.length)) * 100);
  const frqPct = Math.round((frqEarned / Math.max(1, frqPossible)) * 100);
  const { composite, score } = estimateAPScore(mcqPct, frqPct);
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Exam complete</h2>
      <div className="rounded-lg border bg-white p-5 space-y-3">
        <p>
          MCQ: <strong>{mcqCorrect}/{mcqs.length}</strong> ({mcqPct}%)
        </p>
        <p>
          FRQ: <strong>{frqEarned}/{frqPossible}</strong> ({frqPct}%)
        </p>
        <p className="text-sm text-slate-600">
          Estimated composite (rough): {composite}/100 →{" "}
          <span className="text-2xl font-bold text-accent">{score}</span>
        </p>
        <p className="text-xs text-slate-500">
          Curve is approximate. The actual AP Macro curve varies year to year.
        </p>
      </div>
      <button
        onClick={() => setPhase("intro")}
        className="px-4 py-2 rounded-md border"
      >
        Back to start
      </button>
    </div>
  );
}

function ExamHeader({ label, timeLeft }: { label: string; timeLeft: number }) {
  const mins = Math.floor(timeLeft / 60);
  const secs = String(timeLeft % 60).padStart(2, "0");
  return (
    <div className="sticky top-0 z-10 bg-white border rounded-md p-3 flex items-center justify-between">
      <span className="text-sm font-semibold">{label}</span>
      <span className="font-mono text-sm">
        ⏱ {mins}:{secs}
      </span>
    </div>
  );
}

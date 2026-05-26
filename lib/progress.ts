"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UnitId = 1 | 2 | 3 | 4 | 5 | 6;

export interface MCQAttempt {
  questionId: string;
  unit: UnitId;
  topic: string;
  correct: boolean;
  timestamp: number;
}

export interface FRQScore {
  promptId: string;
  pointsEarned: number;
  pointsPossible: number;
  timestamp: number;
}

export interface GraphChallengeResult {
  challengeId: string;
  unit: UnitId;
  passed: boolean;
  timestamp: number;
}

interface ProgressState {
  mcqAttempts: MCQAttempt[];
  frqScores: FRQScore[];
  graphResults: GraphChallengeResult[];
  recordMCQ: (a: MCQAttempt) => void;
  recordFRQ: (s: FRQScore) => void;
  recordGraph: (r: GraphChallengeResult) => void;
  resetAll: () => void;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      mcqAttempts: [],
      frqScores: [],
      graphResults: [],
      recordMCQ: (a) => set((s) => ({ mcqAttempts: [...s.mcqAttempts, a] })),
      recordFRQ: (s2) => set((s) => ({ frqScores: [...s.frqScores, s2] })),
      recordGraph: (r) => set((s) => ({ graphResults: [...s.graphResults, r] })),
      resetAll: () => set({ mcqAttempts: [], frqScores: [], graphResults: [] }),
    }),
    { name: "ap-macro-progress" }
  )
);

export function unitAccuracy(attempts: MCQAttempt[], unit: UnitId) {
  const u = attempts.filter((a) => a.unit === unit);
  if (u.length === 0) return null;
  const correct = u.filter((a) => a.correct).length;
  return { correct, total: u.length, pct: Math.round((correct / u.length) * 100) };
}

export function topicAccuracy(attempts: MCQAttempt[]) {
  const byTopic = new Map<string, { correct: number; total: number; unit: UnitId }>();
  for (const a of attempts) {
    const cur = byTopic.get(a.topic) ?? { correct: 0, total: 0, unit: a.unit };
    cur.total += 1;
    if (a.correct) cur.correct += 1;
    byTopic.set(a.topic, cur);
  }
  return Array.from(byTopic.entries()).map(([topic, v]) => ({
    topic,
    unit: v.unit,
    pct: Math.round((v.correct / v.total) * 100),
    total: v.total,
  }));
}

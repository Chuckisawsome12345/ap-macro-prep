"use client";

import { create } from "zustand";
import { supabase } from "./supabase";

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
  isLoading: boolean;
  loadProgress: () => Promise<void>;
  recordMCQ: (a: MCQAttempt) => Promise<void>;
  recordFRQ: (s: FRQScore) => Promise<void>;
  recordGraph: (r: GraphChallengeResult) => Promise<void>;
  resetAll: () => Promise<void>;
}

export const useProgress = create<ProgressState>()((set) => ({
  mcqAttempts: [],
  frqScores: [],
  graphResults: [],
  isLoading: false,

  loadProgress: async () => {
    set({ isLoading: true });
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { set({ isLoading: false }); return; }

    const [mcqRes, frqRes, graphRes] = await Promise.all([
      supabase.from("mcq_attempts").select("*").eq("user_id", user.id).order("timestamp"),
      supabase.from("frq_scores").select("*").eq("user_id", user.id).order("timestamp"),
      supabase.from("graph_results").select("*").eq("user_id", user.id).order("timestamp"),
    ]);

    set({
      mcqAttempts: (mcqRes.data ?? []).map((r) => ({
        questionId: r.question_id,
        unit: r.unit as UnitId,
        topic: r.topic,
        correct: r.correct,
        timestamp: r.timestamp,
      })),
      frqScores: (frqRes.data ?? []).map((r) => ({
        promptId: r.prompt_id,
        pointsEarned: r.points_earned,
        pointsPossible: r.points_possible,
        timestamp: r.timestamp,
      })),
      graphResults: (graphRes.data ?? []).map((r) => ({
        challengeId: r.challenge_id,
        unit: r.unit as UnitId,
        passed: r.passed,
        timestamp: r.timestamp,
      })),
      isLoading: false,
    });
  },

  recordMCQ: async (a) => {
    // Optimistic update so the UI reflects immediately
    set((s) => ({ mcqAttempts: [...s.mcqAttempts, a] }));
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("mcq_attempts").insert({
      user_id: user.id,
      question_id: a.questionId,
      unit: a.unit,
      topic: a.topic,
      correct: a.correct,
      timestamp: a.timestamp,
    });
  },

  recordFRQ: async (f) => {
    set((s) => ({ frqScores: [...s.frqScores, f] }));
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("frq_scores").insert({
      user_id: user.id,
      prompt_id: f.promptId,
      points_earned: f.pointsEarned,
      points_possible: f.pointsPossible,
      timestamp: f.timestamp,
    });
  },

  recordGraph: async (r) => {
    set((s) => ({ graphResults: [...s.graphResults, r] }));
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("graph_results").insert({
      user_id: user.id,
      challenge_id: r.challengeId,
      unit: r.unit,
      passed: r.passed,
      timestamp: r.timestamp,
    });
  },

  resetAll: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await Promise.all([
        supabase.from("mcq_attempts").delete().eq("user_id", user.id),
        supabase.from("frq_scores").delete().eq("user_id", user.id),
        supabase.from("graph_results").delete().eq("user_id", user.id),
      ]);
    }
    set({ mcqAttempts: [], frqScores: [], graphResults: [] });
  },
}));

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

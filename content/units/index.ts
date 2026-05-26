import type { UnitId } from "@/lib/progress";
import type { GraphKind } from "@/components/graphs/registry";

export interface GuideStep {
  heading: string;
  body: string;
}

export interface UnitGuide {
  title: string;
  intro: string;
  steps: GuideStep[];
  tip?: string;
}

export interface UnitContent {
  id: UnitId;
  title: string;
  weight: string;
  bigIdea: string;
  objectives: string[];
  concepts: { term: string; definition: string; example?: string }[];
  formulas: { label: string; latex: string; note?: string }[];
  guides?: UnitGuide[];
  featuredGraph?: GraphKind;
  apCentralLinks: { label: string; url: string }[];
}

import { unit1 } from "./unit1";
import { unit2 } from "./unit2";
import { unit3 } from "./unit3";
import { unit4 } from "./unit4";
import { unit5 } from "./unit5";
import { unit6 } from "./unit6";

export const UNITS: Record<UnitId, UnitContent> = {
  1: unit1,
  2: unit2,
  3: unit3,
  4: unit4,
  5: unit5,
  6: unit6,
};

export const ALL_UNITS: UnitContent[] = [unit1, unit2, unit3, unit4, unit5, unit6];

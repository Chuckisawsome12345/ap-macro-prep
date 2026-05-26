export type ShiftDirection = "left" | "right" | "none" | "up" | "down";

export interface ExpectedShift {
  curveId: string;
  direction: ShiftDirection;
  rationale?: string;
}

export interface ChallengeExpectation {
  shifts: ExpectedShift[];
  forbidOtherMovement?: boolean;
}

export type GraphState = Record<string, number>;

export function directionOf(shift: number): ShiftDirection {
  if (shift > 0.15) return "right";
  if (shift < -0.15) return "left";
  return "none";
}

export interface EvaluationResult {
  passed: boolean;
  perCurve: {
    curveId: string;
    expected: ShiftDirection;
    actual: ShiftDirection;
    ok: boolean;
    rationale?: string;
  }[];
  extraMovementOn: string[];
}

export function evaluateChallenge(
  expectation: ChallengeExpectation,
  state: GraphState
): EvaluationResult {
  const perCurve = expectation.shifts.map((exp) => {
    const actual = directionOf(state[exp.curveId] ?? 0);
    return {
      curveId: exp.curveId,
      expected: exp.direction,
      actual,
      ok: actual === exp.direction,
      rationale: exp.rationale,
    };
  });

  const expectedIds = new Set(expectation.shifts.map((s) => s.curveId));
  const extraMovementOn: string[] = [];
  if (expectation.forbidOtherMovement) {
    for (const [id, shift] of Object.entries(state)) {
      if (!expectedIds.has(id) && directionOf(shift) !== "none") {
        extraMovementOn.push(id);
      }
    }
  }

  const passed = perCurve.every((c) => c.ok) && extraMovementOn.length === 0;
  return { passed, perCurve, extraMovementOn };
}

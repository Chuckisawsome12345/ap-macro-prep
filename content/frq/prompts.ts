import type { UnitId } from "@/lib/progress";

export interface FRQPart {
  id: string;
  prompt: string;
  points: number;
  rubric: string[];
  expectedLines?: number;
}

export interface FRQItem {
  id: string;
  title: string;
  type: "Long" | "Short";
  units: UnitId[];
  scenario: string;
  parts: FRQPart[];
  sourceExam?: string;
}

// Original FRQ prompts written for this app, modeled on AP-style multi-part format.
export const FRQ_BANK: FRQItem[] = [
  {
    id: "frq-1",
    title: "Recessionary Gap & Fiscal Policy",
    type: "Long",
    units: [3, 4, 5],
    scenario:
      "Assume the economy of Centralia is operating at a real GDP below full employment. The marginal propensity to consume (MPC) is 0.75.",
    parts: [
      {
        id: "a",
        prompt:
          "Draw a correctly labeled aggregate demand and aggregate supply graph. Show the current short-run equilibrium price level (PL₁) and real GDP (Y₁), and label full-employment output (Y*).",
        points: 3,
        rubric: [
          "1 pt: Graph correctly labeled axes (Price Level and Real GDP) with AD, SRAS, and LRAS curves.",
          "1 pt: Short-run equilibrium PL₁ and Y₁ shown at the intersection of AD and SRAS.",
          "1 pt: Y* shown at the LRAS vertical line, to the right of Y₁ (recessionary gap).",
        ],
        expectedLines: 2,
      },
      {
        id: "b",
        prompt:
          "Identify a specific discretionary fiscal policy action Congress could take to move the economy toward full employment.",
        points: 1,
        rubric: [
          "1 pt: An explicit expansionary action (e.g., 'Increase government spending' or 'Cut lump-sum taxes'). 'Fiscal policy' alone is not enough.",
        ],
        expectedLines: 2,
      },
      {
        id: "c",
        prompt:
          "Suppose Congress increases government spending by $200 billion. Calculate the maximum possible change in real GDP. Show your work.",
        points: 2,
        rubric: [
          "1 pt: Correct multiplier value 1/(1−0.75) = 4.",
          "1 pt: ΔY = 4 × $200B = $800B (work shown).",
        ],
        expectedLines: 3,
      },
      {
        id: "d",
        prompt:
          "On a correctly labeled loanable funds market graph, show the effect of the government financing the $200B in spending through additional borrowing. Indicate the change in the real interest rate.",
        points: 3,
        rubric: [
          "1 pt: Correctly labeled axes (real interest rate and quantity of loanable funds) with S(LF) and D(LF).",
          "1 pt: D(LF) shifts right.",
          "1 pt: New equilibrium real interest rate (r₂) is higher than r₁.",
        ],
        expectedLines: 2,
      },
      {
        id: "e",
        prompt:
          "Based on your answer in part (d), explain the impact of the higher real interest rate on private investment and long-run economic growth.",
        points: 1,
        rubric: [
          "1 pt: Higher r reduces private investment (crowding out), slowing capital formation and long-run growth.",
        ],
        expectedLines: 3,
      },
    ],
  },
  {
    id: "frq-2",
    title: "Monetary Policy and the Open Economy",
    type: "Long",
    units: [4, 6],
    scenario:
      "The economy of Marindel has a floating exchange rate. Assume the central bank conducts an open market purchase of government bonds.",
    parts: [
      {
        id: "a",
        prompt:
          "On a correctly labeled money market graph, show the effect of the open market purchase on the nominal interest rate.",
        points: 3,
        rubric: [
          "1 pt: Correctly labeled axes (nominal interest rate, quantity of money) with vertical MS and downward MD.",
          "1 pt: MS shifts right.",
          "1 pt: Nominal interest rate falls from i₁ to i₂.",
        ],
        expectedLines: 2,
      },
      {
        id: "b",
        prompt:
          "Explain how the change in the interest rate from part (a) will affect aggregate demand in the short run.",
        points: 2,
        rubric: [
          "1 pt: Lower interest rate increases investment (and interest-sensitive consumption).",
          "1 pt: Higher investment shifts AD to the right.",
        ],
        expectedLines: 3,
      },
      {
        id: "c",
        prompt:
          "Based on the change in interest rates, identify what happens to international financial capital flows into Marindel.",
        points: 1,
        rubric: ["1 pt: Financial capital flows out of Marindel (or 'capital inflow decreases')."],
        expectedLines: 2,
      },
      {
        id: "d",
        prompt:
          "On a correctly labeled FX graph for Marindel's currency, show the effect of the capital flow change on the exchange rate.",
        points: 2,
        rubric: [
          "1 pt: Correctly labeled FX graph (exchange rate vs quantity of Marindel's currency) with S and D.",
          "1 pt: Demand for Marindel's currency shifts left (or supply shifts right) → currency depreciates.",
        ],
        expectedLines: 2,
      },
      {
        id: "e",
        prompt:
          "Based on the exchange rate change, what will happen to Marindel's net exports? Explain.",
        points: 1,
        rubric: [
          "1 pt: NX increases because depreciation makes exports cheaper abroad and imports more expensive at home.",
        ],
        expectedLines: 3,
      },
    ],
  },
  {
    id: "frq-3",
    title: "Long-Run Adjustment and the Phillips Curve",
    type: "Short",
    units: [3, 5],
    scenario:
      "Assume the economy of Northmark is currently in long-run equilibrium. The central bank then unexpectedly increases the money supply significantly.",
    parts: [
      {
        id: "a",
        prompt:
          "On a correctly labeled AD/AS graph, show the short-run effect of the money supply increase on the price level and real GDP.",
        points: 3,
        rubric: [
          "1 pt: Correctly labeled AD/AS graph with AD, SRAS, LRAS.",
          "1 pt: AD shifts right.",
          "1 pt: New short-run PL₂ > PL₁ and Y₂ > Y* (above potential).",
        ],
        expectedLines: 2,
      },
      {
        id: "b",
        prompt:
          "On a correctly labeled Phillips curve graph, show the corresponding short-run change in unemployment and inflation.",
        points: 2,
        rubric: [
          "1 pt: Correctly labeled SRPC and LRPC (vertical at NRU).",
          "1 pt: Movement up-left along SRPC: lower unemployment, higher inflation.",
        ],
        expectedLines: 2,
      },
      {
        id: "c",
        prompt:
          "Explain how the economy returns to long-run equilibrium without further policy action.",
        points: 2,
        rubric: [
          "1 pt: Tight labor market pushes nominal wages and other input prices up.",
          "1 pt: SRAS shifts left until Y returns to Y*; SRPC shifts right as inflation expectations adjust.",
        ],
        expectedLines: 4,
      },
    ],
  },
];

export function frqsByUnit(unit: UnitId): FRQItem[] {
  return FRQ_BANK.filter((f) => f.units.includes(unit));
}

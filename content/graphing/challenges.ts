import type { UnitId } from "@/lib/progress";
import type { GraphKind } from "@/components/graphs/registry";
import type { ChallengeExpectation } from "@/lib/graphLogic";

export interface GraphChallenge {
  id: string;
  unit: UnitId;
  graph: GraphKind;
  graphOptions?: Record<string, unknown>;
  title: string;
  scenario: string;
  task: string;
  expectation: ChallengeExpectation;
  explanation?: string;
}

export const GRAPH_CHALLENGES: GraphChallenge[] = [
  {
    id: "ch-1",
    unit: 3,
    graph: "adas",
    title: "Expansionary fiscal policy",
    scenario:
      "An economy is in long-run equilibrium. The legislature passes a large infrastructure spending bill financed by issuing new debt.",
    task: "Show the short-run effect on the AD/AS model by shifting the appropriate curve.",
    expectation: {
      shifts: [{ curveId: "AD", direction: "right", rationale: "Higher G is a direct AD shifter." }],
      forbidOtherMovement: true,
    },
    explanation:
      "Government spending is a component of AD. Higher G shifts AD right, raising both real GDP and the price level in the short run.",
  },
  {
    id: "ch-2",
    unit: 3,
    graph: "adas",
    title: "Adverse supply shock",
    scenario:
      "A sudden surge in global oil prices significantly raises production costs for firms across the economy.",
    task: "Show the short-run effect on SRAS.",
    expectation: {
      shifts: [
        {
          curveId: "SRAS",
          direction: "left",
          rationale: "Higher input prices reduce supply at every price level.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "SRAS shifts left, raising the price level and lowering real GDP — the textbook stagflation result.",
  },
  {
    id: "ch-3",
    unit: 4,
    graph: "money",
    title: "Fed sells bonds",
    scenario:
      "The Federal Reserve conducts an open market sale of government securities to combat inflation.",
    task: "Show the effect on the money market.",
    expectation: {
      shifts: [
        {
          curveId: "MS",
          direction: "left",
          rationale: "Selling bonds drains reserves, contracting the money supply.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "MS shifts left → nominal interest rate rises → investment and interest-sensitive consumption fall → AD shifts left.",
  },
  {
    id: "ch-4",
    unit: 4,
    graph: "loanable",
    title: "Increased private saving",
    scenario:
      "Households become more concerned about retirement and substantially increase their saving at every interest rate.",
    task: "Show the effect on the loanable funds market.",
    expectation: {
      shifts: [
        {
          curveId: "S_LF",
          direction: "right",
          rationale: "Higher saving at every rate increases the supply of loanable funds.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "S(LF) shifts right → real interest rate falls → quantity of investment rises. Long-run growth potential improves.",
  },
  {
    id: "ch-5",
    unit: 4,
    graph: "loanable",
    title: "Government deficit spending",
    scenario:
      "The government finances a major new program by borrowing heavily in the bond market.",
    task: "Show the effect on the loanable funds market.",
    expectation: {
      shifts: [
        {
          curveId: "D_LF",
          direction: "right",
          rationale: "Government borrowing adds to demand for loanable funds.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "D(LF) shifts right → real interest rate rises → private investment falls (crowding out).",
  },
  {
    id: "ch-6",
    unit: 5,
    graph: "phillips",
    title: "Boom along the SRPC",
    scenario:
      "Strong consumer optimism causes AD to expand and the economy to operate above potential output.",
    task:
      "Conceptually, this is a movement along the SRPC, not a shift. To represent the new SRPC reflecting higher expected inflation that eventually develops, shift the SRPC to the right.",
    expectation: {
      shifts: [
        {
          curveId: "SRPC",
          direction: "right",
          rationale:
            "Persistent above-target inflation raises expected inflation, shifting SRPC right.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "Once expectations adjust upward, the same unemployment rate is associated with higher inflation — the SRPC shifts right and the economy returns to the LRPC at the NRU.",
  },
  {
    id: "ch-7",
    unit: 6,
    graph: "forex",
    title: "Capital outflow",
    scenario:
      "The domestic central bank cuts interest rates sharply while foreign rates stay constant. International investors move money abroad.",
    task: "Show the effect on the FX market for the domestic currency.",
    expectation: {
      shifts: [
        {
          curveId: "S_fx",
          direction: "right",
          rationale: "Residents supply more currency to convert into foreign assets.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "Capital outflow increases the supply of domestic currency on FX markets → currency depreciates → exports cheaper / imports pricier → NX rises.",
  },
  {
    id: "ch-8",
    unit: 6,
    graph: "forex",
    title: "Export demand surge",
    scenario:
      "Foreign tastes shift strongly toward this country's exports, causing foreigners to need much more of its currency.",
    task: "Show the effect on the FX market for the domestic currency.",
    expectation: {
      shifts: [
        {
          curveId: "D_fx",
          direction: "right",
          rationale: "Foreigners demand more domestic currency to pay for exports.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "Higher demand for the currency → appreciation. Over time this may dampen the export surge as goods become more expensive abroad.",
  },
  {
    id: "ch-9",
    unit: 1,
    graph: "ppc",
    title: "Technological progress",
    scenario:
      "A breakthrough in manufacturing automation raises productivity across all industries.",
    task: "Show the effect on the PPC.",
    expectation: {
      shifts: [
        {
          curveId: "PPC",
          direction: "right",
          rationale: "Productivity gains expand productive capacity.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation: "The PPC shifts outward — the economy can now produce more of both goods.",
  },
  {
    id: "ch-10",
    unit: 1,
    graph: "sd",
    title: "Complement price rises",
    scenario:
      "In the market for printers: the price of ink cartridges (a complement) rises sharply.",
    task: "Show the effect on the market for printers.",
    expectation: {
      shifts: [
        {
          curveId: "D",
          direction: "left",
          rationale: "Higher complement price reduces demand for the related good.",
        },
      ],
      forbidOtherMovement: true,
    },
    explanation:
      "When a complement gets more expensive, fewer consumers buy printers at every price → demand shifts left.",
  },
];

export function challengesByUnit(unit: UnitId): GraphChallenge[] {
  return GRAPH_CHALLENGES.filter((c) => c.unit === unit);
}

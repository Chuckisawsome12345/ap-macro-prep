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

  // ── Unit 3: AD/AS ─────────────────────────────────────────────────────────
  {
    id: "ch-11",
    unit: 3,
    graph: "adas",
    title: "Contractionary fiscal policy",
    scenario:
      "To reduce a budget deficit, the government raises income taxes, leaving households with less disposable income.",
    task: "Show the short-run effect on the AD/AS model.",
    expectation: {
      shifts: [{ curveId: "AD", direction: "left", rationale: "Lower disposable income reduces consumption, a component of AD." }],
      forbidOtherMovement: true,
    },
    explanation:
      "Higher taxes reduce C → AD shifts left → real GDP falls and the price level falls in the short run. This is contractionary fiscal policy.",
  },
  {
    id: "ch-12",
    unit: 3,
    graph: "adas",
    title: "Favorable supply shock",
    scenario:
      "Global oil prices collapse due to a major new discovery, sharply lowering energy costs for producers.",
    task: "Show the short-run effect on SRAS.",
    expectation: {
      shifts: [{ curveId: "SRAS", direction: "right", rationale: "Lower input costs increase supply at every price level." }],
      forbidOtherMovement: true,
    },
    explanation:
      "SRAS shifts right → real GDP rises and the price level falls. This is a positive supply shock — a rare 'free lunch' in macroeconomics.",
  },
  {
    id: "ch-13",
    unit: 3,
    graph: "adas",
    title: "Long-run self-correction from recession",
    scenario:
      "The economy is stuck below potential output. Wages and input costs gradually fall as unemployed workers compete for scarce jobs.",
    task: "Show the long-run self-correction by shifting the appropriate curve.",
    expectation: {
      shifts: [{ curveId: "SRAS", direction: "right", rationale: "Falling wages lower production costs, shifting SRAS right." }],
      forbidOtherMovement: true,
    },
    explanation:
      "In the long run, sticky wages become flexible. Lower nominal wages reduce costs → SRAS shifts right until the economy returns to potential (LRAS). No policy required.",
  },
  {
    id: "ch-14",
    unit: 3,
    graph: "adas",
    title: "Long-run self-correction from overheating",
    scenario:
      "An economy operating above potential output experiences rising wages as workers demand higher pay in a tight labor market.",
    task: "Show the long-run adjustment.",
    expectation: {
      shifts: [{ curveId: "SRAS", direction: "left", rationale: "Rising wages increase production costs, shifting SRAS left." }],
      forbidOtherMovement: true,
    },
    explanation:
      "Higher wages raise costs → SRAS shifts left back to potential. The price level rises, real GDP returns to Yp, and the short-run boom ends.",
  },
  {
    id: "ch-15",
    unit: 3,
    graph: "adas",
    title: "Expansionary monetary policy",
    scenario:
      "The Federal Reserve cuts the federal funds rate target, lowering borrowing costs throughout the economy.",
    task: "Show the short-run effect on the AD/AS model.",
    expectation: {
      shifts: [{ curveId: "AD", direction: "right", rationale: "Lower interest rates boost investment and interest-sensitive consumption." }],
      forbidOtherMovement: true,
    },
    explanation:
      "Lower rates → higher I and C → AD shifts right → real GDP and price level both rise in the short run.",
  },

  // ── Unit 4: Money Market ──────────────────────────────────────────────────
  {
    id: "ch-16",
    unit: 4,
    graph: "money",
    title: "Open market purchase",
    scenario:
      "The Fed buys government securities from commercial banks, injecting reserves into the banking system.",
    task: "Show the effect on the money market.",
    expectation: {
      shifts: [{ curveId: "MS", direction: "right", rationale: "Bond purchases increase bank reserves and the money supply." }],
      forbidOtherMovement: true,
    },
    explanation:
      "MS shifts right → nominal interest rate falls → investment rises → AD shifts right. Standard expansionary monetary policy transmission.",
  },
  {
    id: "ch-17",
    unit: 4,
    graph: "money",
    title: "Rising real GDP",
    scenario:
      "Real GDP grows strongly, increasing transactions demand: businesses and households need more money to conduct purchases.",
    task: "Show the effect on the money market.",
    expectation: {
      shifts: [{ curveId: "MD", direction: "right", rationale: "Higher income increases money demand at every interest rate." }],
      forbidOtherMovement: true,
    },
    explanation:
      "MD shifts right → nominal interest rate rises (given a fixed MS). This is why central banks often raise rates during booms.",
  },
  {
    id: "ch-18",
    unit: 4,
    graph: "money",
    title: "Contractionary monetary policy",
    scenario:
      "To fight inflation, the Fed raises the reserve requirement, forcing banks to hold more reserves and lend less.",
    task: "Show the effect on the money market.",
    expectation: {
      shifts: [{ curveId: "MS", direction: "left", rationale: "Higher reserve requirement reduces the money multiplier and money supply." }],
      forbidOtherMovement: true,
    },
    explanation:
      "MS shifts left → interest rate rises → investment falls → AD shifts left → downward pressure on the price level.",
  },

  // ── Unit 4: Loanable Funds ────────────────────────────────────────────────
  {
    id: "ch-19",
    unit: 4,
    graph: "loanable",
    title: "Business optimism surges",
    scenario:
      "Firms expect higher future profits due to new technology and sharply increase planned investment borrowing.",
    task: "Show the effect on the loanable funds market.",
    expectation: {
      shifts: [{ curveId: "D_LF", direction: "right", rationale: "Higher expected returns increase investment demand for funds." }],
      forbidOtherMovement: true,
    },
    explanation:
      "D(LF) shifts right → real interest rate rises → quantity of saving supplied rises. Private borrowing crowds out other borrowing if supply is inelastic.",
  },
  {
    id: "ch-20",
    unit: 4,
    graph: "loanable",
    title: "Government runs a budget surplus",
    scenario:
      "Tax revenues exceed spending. The government uses the surplus to pay down existing debt, retiring bonds from the market.",
    task: "Show the effect on the loanable funds market.",
    expectation: {
      shifts: [{ curveId: "D_LF", direction: "left", rationale: "Government debt repayment reduces public-sector demand for funds." }],
      forbidOtherMovement: true,
    },
    explanation:
      "D(LF) shifts left → real interest rate falls → private investment increases. This is the reverse of crowding out — sometimes called 'crowding in'.",
  },
  {
    id: "ch-21",
    unit: 4,
    graph: "loanable",
    title: "Households cut saving",
    scenario:
      "Consumer confidence is high and households reduce their saving rate significantly.",
    task: "Show the effect on the loanable funds market.",
    expectation: {
      shifts: [{ curveId: "S_LF", direction: "left", rationale: "Less household saving reduces the supply of loanable funds." }],
      forbidOtherMovement: true,
    },
    explanation:
      "S(LF) shifts left → real interest rate rises → quantity of investment falls. Lower national saving reduces long-run growth potential.",
  },

  // ── Unit 5: Phillips Curve ────────────────────────────────────────────────
  {
    id: "ch-22",
    unit: 5,
    graph: "phillips",
    title: "Disinflationary policy succeeds",
    scenario:
      "After years of tight monetary policy, inflation expectations fall and workers accept lower wage increases.",
    task: "Show the long-run effect: a new SRPC reflecting lower expected inflation.",
    expectation: {
      shifts: [{ curveId: "SRPC", direction: "left", rationale: "Lower inflation expectations shift the SRPC down/left." }],
      forbidOtherMovement: true,
    },
    explanation:
      "A credible disinflation reduces expected inflation → SRPC shifts left. The economy can achieve the same unemployment rate with less inflation.",
  },
  {
    id: "ch-23",
    unit: 5,
    graph: "phillips",
    title: "Stagflation supply shock",
    scenario:
      "A major commodity price shock simultaneously raises inflation and unemployment.",
    task: "Show the shift in the SRPC that represents this stagflation episode.",
    expectation: {
      shifts: [{ curveId: "SRPC", direction: "right", rationale: "A negative supply shock raises the inflation rate at every level of unemployment." }],
      forbidOtherMovement: true,
    },
    explanation:
      "SRPC shifts right/up — stagflation: higher inflation AND higher unemployment simultaneously. Classic example: the 1970s oil shocks.",
  },
  {
    id: "ch-24",
    unit: 5,
    graph: "phillips",
    title: "Structural reforms reduce NRU",
    scenario:
      "Job training programs and improved employment matching reduce the natural rate of unemployment permanently.",
    task: "Show the effect on the long-run Phillips curve.",
    expectation: {
      shifts: [{ curveId: "LRPC", direction: "left", rationale: "A lower NRU shifts the LRPC to the left." }],
      forbidOtherMovement: true,
    },
    explanation:
      "LRPC shifts left to the new, lower NRU. The economy's long-run non-inflationary unemployment level is permanently reduced.",
  },

  // ── Unit 6: FOREX ─────────────────────────────────────────────────────────
  {
    id: "ch-25",
    unit: 6,
    graph: "forex",
    title: "Domestic inflation outpaces foreign",
    scenario:
      "Domestic inflation is persistently above that of trading partners, making domestic goods relatively more expensive abroad.",
    task: "Show the effect on the FX market for the domestic currency.",
    expectation: {
      shifts: [{ curveId: "D_fx", direction: "left", rationale: "Foreigners buy fewer domestic goods and thus demand less domestic currency." }],
      forbidOtherMovement: true,
    },
    explanation:
      "D_fx shifts left → domestic currency depreciates. Higher domestic prices reduce export competitiveness and FX demand.",
  },
  {
    id: "ch-26",
    unit: 6,
    graph: "forex",
    title: "Foreign interest rates rise",
    scenario:
      "Foreign central banks raise rates sharply. Domestic investors seek higher returns abroad.",
    task: "Show the effect on the FX market for the domestic currency.",
    expectation: {
      shifts: [{ curveId: "S_fx", direction: "right", rationale: "Residents supply more domestic currency to buy foreign assets paying higher returns." }],
      forbidOtherMovement: true,
    },
    explanation:
      "S_fx shifts right → domestic currency depreciates. This mirrors the original capital-outflow challenge but driven by foreign rates rising rather than domestic rates falling.",
  },
  {
    id: "ch-27",
    unit: 6,
    graph: "forex",
    title: "Higher domestic interest rates attract capital",
    scenario:
      "The domestic central bank raises interest rates to fight inflation. Foreign investors rush to buy domestic bonds.",
    task: "Show the effect on the FX market for the domestic currency.",
    expectation: {
      shifts: [{ curveId: "D_fx", direction: "right", rationale: "Foreign investors demand more domestic currency to purchase domestic bonds." }],
      forbidOtherMovement: true,
    },
    explanation:
      "D_fx shifts right → domestic currency appreciates. Higher domestic rates attract capital inflows, a key open-economy channel of monetary policy.",
  },

  // ── Unit 1: PPC ───────────────────────────────────────────────────────────
  {
    id: "ch-28",
    unit: 1,
    graph: "ppc",
    title: "Natural disaster destroys capital",
    scenario:
      "A major earthquake destroys factories, roads, and infrastructure, permanently reducing productive capacity.",
    task: "Show the effect on the PPC.",
    expectation: {
      shifts: [{ curveId: "PPC", direction: "left", rationale: "Destruction of capital reduces maximum possible output of both goods." }],
      forbidOtherMovement: true,
    },
    explanation:
      "PPC shifts inward — the economy can now produce less of both goods at full employment. This is a decrease in productive capacity.",
  },
  {
    id: "ch-29",
    unit: 1,
    graph: "ppc",
    title: "Immigration increases labor force",
    scenario:
      "A wave of skilled immigration significantly expands the working-age population.",
    task: "Show the effect on the PPC.",
    expectation: {
      shifts: [{ curveId: "PPC", direction: "right", rationale: "More workers increase the economy's productive capacity for all goods." }],
      forbidOtherMovement: true,
    },
    explanation:
      "PPC shifts outward. More labor is a resource increase that expands potential output across all combinations.",
  },

  // ── Unit 1: Supply & Demand ───────────────────────────────────────────────
  {
    id: "ch-30",
    unit: 1,
    graph: "sd",
    title: "Input cost falls",
    scenario:
      "The price of steel falls sharply, reducing production costs for automobile manufacturers.",
    task: "Show the effect on the market for automobiles.",
    expectation: {
      shifts: [{ curveId: "S", direction: "right", rationale: "Lower input costs reduce production costs, increasing supply." }],
      forbidOtherMovement: true,
    },
    explanation:
      "S shifts right → equilibrium price falls and quantity rises. Lower input prices are a supply shifter, not a demand shifter.",
  },
  {
    id: "ch-31",
    unit: 1,
    graph: "sd",
    title: "Consumer income rises (normal good)",
    scenario:
      "A strong economy raises household incomes. Consumers buy more restaurant meals at every price.",
    task: "Show the effect on the market for restaurant meals.",
    expectation: {
      shifts: [{ curveId: "D", direction: "right", rationale: "Higher income increases demand for normal goods." }],
      forbidOtherMovement: true,
    },
    explanation:
      "D shifts right → price and quantity both rise. For a normal good, income and demand move in the same direction.",
  },
  {
    id: "ch-32",
    unit: 1,
    graph: "sd",
    title: "Substitute becomes cheaper",
    scenario:
      "The price of streaming services falls sharply. Consumers substitute away from movie theater tickets.",
    task: "Show the effect on the market for movie theater tickets.",
    expectation: {
      shifts: [{ curveId: "D", direction: "left", rationale: "A cheaper substitute reduces demand for the original good." }],
      forbidOtherMovement: true,
    },
    explanation:
      "D shifts left → price and quantity of theater tickets both fall. Streaming is a substitute: when its price falls, demand for theaters falls.",
  },
];

export function challengesByUnit(unit: UnitId): GraphChallenge[] {
  return GRAPH_CHALLENGES.filter((c) => c.unit === unit);
}

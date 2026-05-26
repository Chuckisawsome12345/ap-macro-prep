import type { UnitContent } from "./index";

export const unit3: UnitContent = {
  id: 3,
  title: "National Income and Price Determination",
  weight: "17–27% of exam",
  bigIdea: "The AD/AS model explains short- and long-run output and price levels, and how fiscal policy shifts AD.",
  objectives: [
    "Describe components of AD and identify what shifts AD vs movement along.",
    "Distinguish SRAS shifters (input prices, productivity, supply shocks) from LRAS shifters (resources, technology).",
    "Identify short-run and long-run macroeconomic equilibria; recessionary and inflationary gaps.",
    "Apply the spending multiplier and tax multiplier; explain why they differ.",
    "Compare expansionary vs contractionary fiscal policy and automatic stabilizers.",
  ],
  concepts: [
    {
      term: "Aggregate Demand (AD)",
      definition:
        "Total spending on domestic final goods at each price level: C + I + G + NX. Slopes down due to wealth, interest-rate, and exchange-rate effects.",
    },
    {
      term: "AD shifters",
      definition:
        "Consumer/business expectations, wealth, taxes, interest rates, foreign income/exchange rates, government spending.",
    },
    {
      term: "Short-Run Aggregate Supply (SRAS)",
      definition:
        "Upward-sloping curve showing output supplied at each price level when input prices (esp. wages) are sticky.",
    },
    {
      term: "SRAS shifters",
      definition:
        "Input prices (wages, oil), productivity, business taxes/subsidies on production, inflation expectations, supply shocks.",
    },
    {
      term: "Long-Run Aggregate Supply (LRAS)",
      definition:
        "Vertical at full-employment output (Y*). Shifts only with changes in resources, technology, or institutions.",
    },
    {
      term: "Long-run equilibrium",
      definition: "AD = SRAS = LRAS. No output gap; cyclical unemployment is zero.",
    },
    {
      term: "Recessionary gap",
      definition:
        "Actual real GDP < potential. Cyclical unemployment > 0. Self-correcting via falling wages → SRAS shifts right.",
    },
    {
      term: "Inflationary gap",
      definition:
        "Actual real GDP > potential. Self-correcting via rising wages → SRAS shifts left.",
    },
    {
      term: "Spending multiplier",
      definition:
        "Total increase in real GDP per $1 of new autonomous spending. = 1/(1−MPC) = 1/MPS.",
    },
    {
      term: "Tax multiplier",
      definition:
        "Total change in real GDP per $1 change in lump-sum taxes. = −MPC/(1−MPC). Smaller in absolute value than spending multiplier because part of any tax cut is saved.",
    },
    {
      term: "Fiscal policy",
      definition:
        "Use of government spending and taxes to influence AD. Expansionary = ↑G or ↓T; contractionary = ↓G or ↑T.",
    },
    {
      term: "Automatic stabilizers",
      definition:
        "Features that dampen the cycle without new legislation: progressive taxes (collections fall in recessions) and transfers like unemployment insurance (rise in recessions).",
    },
  ],
  formulas: [
    {
      label: "Aggregate Demand",
      latex: "AD = C + I + G + (X - M)",
    },
    {
      label: "Spending multiplier",
      latex: "k_s = \\dfrac{1}{1-MPC} = \\dfrac{1}{MPS}",
    },
    {
      label: "Tax multiplier",
      latex: "k_t = -\\dfrac{MPC}{1-MPC}",
    },
    {
      label: "MPC + MPS",
      latex: "MPC + MPS = 1",
    },
    {
      label: "ΔY from spending change",
      latex: "\\Delta Y = k_s \\cdot \\Delta \\text{spending}",
    },
  ],
  featuredGraph: "adas",
  apCentralLinks: [
    {
      label: "AP Macro CED (official)",
      url: "https://apcentral.collegeboard.org/courses/ap-macroeconomics/course",
    },
    {
      label: "Past Exam Questions (FRQs)",
      url: "https://apcentral.collegeboard.org/courses/ap-macroeconomics/exam/past-exam-questions",
    },
  ],
};

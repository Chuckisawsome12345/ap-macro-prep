import type { UnitContent } from "./index";

export const unit5: UnitContent = {
  id: 5,
  title: "Long-Run Consequences of Stabilization Policies",
  weight: "20–30% of exam",
  bigIdea:
    "Short-run stabilization policies have long-run consequences for inflation, growth, and the rate of unemployment.",
  objectives: [
    "Use the Phillips curve to relate inflation and unemployment in the short run; explain why LRPC is vertical at natural rate.",
    "Identify shifts of SRPC due to supply shocks and inflation expectations.",
    "Explain crowding-out and the effect of deficits on long-run growth.",
    "Identify drivers of long-run economic growth (capital, labor, human capital, productivity, institutions).",
    "Compare demand-side and supply-side policies.",
  ],
  concepts: [
    {
      term: "Short-Run Phillips Curve (SRPC)",
      definition:
        "Downward-sloping trade-off between unemployment and inflation when actual inflation differs from expected. Mirrors AD shifts along SRAS.",
    },
    {
      term: "Long-Run Phillips Curve (LRPC)",
      definition:
        "Vertical at the natural rate of unemployment. No long-run trade-off — only structural/frictional unemployment remain at any inflation rate.",
    },
    {
      term: "SRPC shifters",
      definition:
        "Supply shocks (right = adverse: higher inflation at every u; left = favorable) and changes in expected inflation.",
    },
    {
      term: "Natural rate of unemployment",
      definition:
        "Frictional + structural; the rate of unemployment when the economy is at full employment (Y = Y*).",
    },
    {
      term: "Crowding out",
      definition:
        "Government deficit financing raises real interest rates in the loanable funds market, reducing private investment and slowing long-run growth.",
    },
    {
      term: "Economic growth",
      definition:
        "Sustained increase in real GDP per capita; on PPC/LRAS as outward/rightward shift. Driven by capital, labor force, human capital, technology, and productivity.",
    },
    {
      term: "Supply-side policies",
      definition:
        "Policies aimed at LRAS: investment in infrastructure, education, R&D, deregulation, tax incentives for capital formation.",
    },
    {
      term: "Stagflation",
      definition:
        "Simultaneous high inflation and high unemployment. Caused by adverse supply shock (SRAS left). Demand policies cannot fix both at once.",
    },
  ],
  formulas: [
    {
      label: "Real GDP growth",
      latex:
        "g = \\dfrac{\\text{Real GDP}_t - \\text{Real GDP}_{t-1}}{\\text{Real GDP}_{t-1}} \\times 100",
    },
    {
      label: "Rule of 70 (doubling time)",
      latex: "T_{double} \\approx \\dfrac{70}{g}",
    },
  ],
  featuredGraph: "phillips",
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

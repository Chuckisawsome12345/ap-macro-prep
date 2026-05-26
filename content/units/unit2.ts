import type { UnitContent } from "./index";

export const unit2: UnitContent = {
  id: 2,
  title: "Economic Indicators & the Business Cycle",
  weight: "12–17% of exam",
  bigIdea: "Economies are measured by GDP, unemployment, and inflation, and they fluctuate over time.",
  objectives: [
    "Calculate nominal vs real GDP, GDP per capita, and the GDP deflator.",
    "Identify what is and isn't included in GDP (final goods only).",
    "Compute the unemployment rate and labor force participation rate; distinguish frictional, structural, and cyclical unemployment.",
    "Calculate inflation rate from CPI; distinguish demand-pull from cost-push inflation.",
    "Describe phases of the business cycle and the relationship between actual and potential output (output gaps).",
  ],
  concepts: [
    {
      term: "Gross Domestic Product (GDP)",
      definition:
        "Market value of all final goods and services produced within a country's borders in a given time period. Counted using the expenditure approach: C + I + G + NX.",
    },
    {
      term: "Real vs Nominal GDP",
      definition:
        "Nominal GDP uses current prices; real GDP holds prices at a base year so changes reflect output only. Real GDP = (Nominal GDP / Price Index) × 100.",
    },
    {
      term: "GDP deflator",
      definition:
        "Price index measuring the change in prices of all domestically produced goods and services. = (Nominal GDP / Real GDP) × 100.",
    },
    {
      term: "Excluded from GDP",
      definition:
        "Used goods, financial transactions (stocks/bonds), transfer payments, intermediate goods, and unreported/illegal activity.",
    },
    {
      term: "Unemployment rate",
      definition:
        "Unemployed / Labor Force. Labor Force = Employed + Unemployed (must be actively seeking work).",
    },
    {
      term: "Types of unemployment",
      definition:
        "Frictional (between jobs, voluntary), Structural (skills mismatch), Cyclical (due to recession). Natural rate = frictional + structural; cyclical = 0 at full employment.",
    },
    {
      term: "Labor force participation rate",
      definition: "(Labor Force / Working-Age Population) × 100.",
    },
    {
      term: "Consumer Price Index (CPI)",
      definition:
        "Price index measuring change in price of a market basket of goods bought by a typical urban consumer. Inflation rate = ((CPI₂ − CPI₁) / CPI₁) × 100.",
    },
    {
      term: "Demand-pull vs cost-push inflation",
      definition:
        "Demand-pull: AD increases push prices up. Cost-push: SRAS decreases (input cost shock) pushes prices up and output down (stagflation).",
    },
    {
      term: "Business cycle",
      definition:
        "Short-run fluctuations of real GDP around long-run potential: expansion, peak, contraction (recession), trough.",
    },
    {
      term: "Output gap",
      definition:
        "Difference between actual real GDP and potential (full-employment) real GDP. Recessionary gap = actual < potential; inflationary gap = actual > potential.",
    },
  ],
  formulas: [
    {
      label: "Expenditure approach to GDP",
      latex: "\\text{GDP} = C + I + G + (X - M)",
    },
    {
      label: "Real GDP",
      latex: "\\text{Real GDP} = \\dfrac{\\text{Nominal GDP}}{\\text{Price Index}} \\times 100",
    },
    {
      label: "GDP deflator",
      latex:
        "\\text{Deflator} = \\dfrac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100",
    },
    {
      label: "Unemployment rate",
      latex:
        "u = \\dfrac{\\text{Unemployed}}{\\text{Labor Force}} \\times 100",
    },
    {
      label: "Inflation rate from CPI",
      latex:
        "\\pi = \\dfrac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100",
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

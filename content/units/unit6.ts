import type { UnitContent } from "./index";

export const unit6: UnitContent = {
  id: 6,
  title: "Open Economy — International Trade & Finance",
  weight: "10–13% of exam",
  bigIdea:
    "Exchange rates, capital flows, and the balance of payments link domestic monetary/fiscal policy to the rest of the world.",
  objectives: [
    "Identify components of the balance of payments: current account vs financial (capital) account.",
    "Analyze the foreign exchange market and how supply/demand for a currency determine the exchange rate.",
    "Identify what shifts currency demand and supply (relative interest rates, income, prices, tastes, expectations).",
    "Explain how exchange-rate changes affect net exports and AD.",
    "Trace effects of monetary and fiscal policy in an open economy through interest rates → capital flows → exchange rate → NX.",
  ],
  concepts: [
    {
      term: "Balance of Payments",
      definition:
        "Record of a country's transactions with the world. Current Account (trade in goods/services + net income + transfers) and Financial/Capital Account (asset flows) sum to zero in principle.",
    },
    {
      term: "Appreciation vs depreciation",
      definition:
        "A currency appreciates when its value rises (buys more foreign currency); depreciates when it falls. Floating rates are set by FX supply and demand.",
    },
    {
      term: "Demand for a currency",
      definition:
        "Rises when foreigners want more of the country's exports, assets (higher relative interest rates), or expect appreciation.",
    },
    {
      term: "Supply of a currency",
      definition:
        "Rises when domestic residents want more foreign goods or assets (e.g., lower domestic interest rates push capital out).",
    },
    {
      term: "Effect on net exports",
      definition:
        "Appreciation makes exports more expensive abroad and imports cheaper at home → NX↓, AD↓. Depreciation → NX↑, AD↑.",
    },
    {
      term: "Monetary policy in open economy",
      definition:
        "Expansionary monetary policy: i↓ → capital outflow → currency depreciates → NX↑ → reinforces AD↑.",
    },
    {
      term: "Fiscal policy in open economy",
      definition:
        "Expansionary fiscal policy: government borrowing pushes real interest rates up → capital inflow → currency appreciates → NX↓ (partial crowd-out of AD increase).",
    },
  ],
  formulas: [
    {
      label: "Current Account + Financial Account",
      latex: "CA + KA \\approx 0",
    },
    {
      label: "Net exports",
      latex: "NX = X - M",
    },
  ],
  featuredGraph: "forex",
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

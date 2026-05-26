import type { UnitContent } from "./index";

export const unit4: UnitContent = {
  id: 4,
  title: "Financial Sector",
  weight: "17–27% of exam",
  bigIdea:
    "Money, banking, and monetary policy work through the money market and loanable funds market to influence interest rates, investment, and AD.",
  objectives: [
    "Define functions of money and components of money supply (M1, M2).",
    "Explain fractional reserve banking; compute the money multiplier and changes in money supply.",
    "Analyze the money market: MS vertical, MD downward-sloping; identify nominal interest rate.",
    "Analyze the loanable funds market: real interest rate; effects of savings, investment demand, deficits.",
    "Apply Fed monetary policy tools (open market operations, reserve requirement, discount rate, IORB) to MS, interest rates, investment, and AD.",
  ],
  concepts: [
    {
      term: "Functions of money",
      definition: "Medium of exchange, unit of account, store of value.",
    },
    {
      term: "M1 vs M2",
      definition:
        "M1 = currency, checkable deposits, traveler's checks (most liquid). M2 = M1 + savings deposits, small time deposits, money market mutual funds.",
    },
    {
      term: "Fractional reserve banking",
      definition:
        "Banks hold a fraction of deposits as reserves and lend the rest, creating new money through loans.",
    },
    {
      term: "Money multiplier (simple)",
      definition:
        "Maximum expansion of money supply from new excess reserves. = 1/RR. Real-world value is smaller due to currency drains and excess reserves.",
    },
    {
      term: "Money market",
      definition:
        "MS is vertical (set by the Fed); MD is downward-sloping in the nominal interest rate. Intersection determines i.",
    },
    {
      term: "Money demand shifters",
      definition:
        "Price level, real GDP/income, transactions costs of converting other assets, expectations about future interest rates.",
    },
    {
      term: "Loanable funds market",
      definition:
        "Supply (savings) is upward-sloping; demand (investment + government borrowing) is downward-sloping in real interest rate. Determines r.",
    },
    {
      term: "Crowding out",
      definition:
        "Government deficit spending shifts D(LF) right, raising real interest rates and reducing private investment.",
    },
    {
      term: "Open Market Operations (OMO)",
      definition:
        "Fed buys bonds (expansionary, MS↑, i↓) or sells bonds (contractionary, MS↓, i↑) — most-used tool.",
    },
    {
      term: "Reserve requirement",
      definition:
        "Minimum fraction of deposits banks must hold as reserves. Lowering it increases lending capacity (expansionary).",
    },
    {
      term: "Discount rate",
      definition:
        "Interest rate the Fed charges commercial banks for short-term loans. Lower discount rate → expansionary.",
    },
    {
      term: "Interest on Reserve Balances (IORB)",
      definition:
        "Rate paid on reserves held at the Fed. Raising it incentivizes banks to hold reserves (contractionary).",
    },
  ],
  formulas: [
    {
      label: "Money multiplier (simple)",
      latex: "m = \\dfrac{1}{RR}",
    },
    {
      label: "Maximum change in money supply",
      latex: "\\Delta M = m \\cdot \\text{excess reserves}",
    },
    {
      label: "Real interest rate (Fisher)",
      latex: "r \\approx i - \\pi^e",
    },
    {
      label: "Quantity theory of money",
      latex: "M \\cdot V = P \\cdot Q",
    },
  ],
  featuredGraph: "money",
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

import type { UnitContent } from "./index";

export const unit1: UnitContent = {
  id: 1,
  title: "Basic Economic Concepts",
  weight: "5–10% of exam",
  bigIdea: "Scarcity forces choices; choices have opportunity costs; markets coordinate them.",
  objectives: [
    "Explain how scarcity drives the need for choice and opportunity cost.",
    "Use a PPC to model trade-offs, efficiency, opportunity cost, and growth.",
    "Calculate and interpret comparative advantage; identify mutually beneficial terms of trade.",
    "Apply the law of demand and law of supply; identify shifters vs. movements along.",
    "Determine equilibrium price/quantity and effects of curve shifts.",
  ],
  concepts: [
    {
      term: "Scarcity",
      definition:
        "Resources are limited relative to unlimited wants, forcing every economic actor to make choices.",
    },
    {
      term: "Opportunity cost",
      definition: "The value of the next-best alternative foregone when a choice is made.",
      example: "If you study instead of working a shift, the wage you skipped is the opportunity cost.",
    },
    {
      term: "Production Possibilities Curve (PPC)",
      definition:
        "A model showing maximum combinations of two goods an economy can produce with fixed resources and technology. Points on the curve are efficient; inside are inefficient; outside are unattainable.",
    },
    {
      term: "Comparative advantage",
      definition:
        "The ability to produce a good at a lower opportunity cost than another producer. Drives gains from trade even when one party has absolute advantage in both goods.",
    },
    {
      term: "Terms of trade",
      definition:
        "An exchange ratio of one good for another that lies between each trader's opportunity costs, making trade mutually beneficial.",
    },
    {
      term: "Law of demand",
      definition:
        "Holding other factors constant, quantity demanded falls as price rises (downward-sloping demand curve).",
    },
    {
      term: "Law of supply",
      definition: "Holding other factors constant, quantity supplied rises as price rises.",
    },
    {
      term: "Demand shifters",
      definition:
        "Income (normal vs inferior goods), tastes/preferences, prices of related goods (substitutes & complements), expectations, and number of buyers.",
    },
    {
      term: "Supply shifters",
      definition:
        "Input prices, technology, taxes/subsidies, expectations, number of sellers, and prices of related goods in production.",
    },
    {
      term: "Market equilibrium",
      definition:
        "Price at which quantity demanded equals quantity supplied. Surpluses pressure price down; shortages pressure price up.",
    },
  ],
  formulas: [
    {
      label: "Opportunity cost (from PPC ratio)",
      latex: "\\text{OC of 1 unit of A} = \\dfrac{\\Delta B}{\\Delta A}",
      note: "Use straight-line PPC totals; for bowed-out, slope changes along curve.",
    },
  ],
  featuredGraph: "ppc",
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

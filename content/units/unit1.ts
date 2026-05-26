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
  guides: [
    {
      title: "How to Answer Terms of Trade Questions",
      intro:
        "Terms of trade questions ask you to find an exchange ratio that makes trade mutually beneficial for two producers. They almost always come with a comparative advantage table and ask you to identify a valid or invalid trade price. Here is the exact method that works every time.",
      steps: [
        {
          heading: "Step 1 — Build the opportunity cost table",
          body:
            "From the PPC data, calculate the opportunity cost of one unit of each good for each country. If Country A can produce 100 hats OR 50 scarves, then: OC of 1 scarf (for A) = 100/50 = 2 hats; OC of 1 hat (for A) = 50/100 = 0.5 scarves. Do the same for Country B.",
        },
        {
          heading: "Step 2 — Identify who has comparative advantage in what",
          body:
            "The country with the lower opportunity cost for a good has the comparative advantage in that good. That country should export that good. Example: if A's OC for scarves is 2 hats and B's is 1.5 hats, Country B has the lower OC → B has comparative advantage in scarves and should export them.",
        },
        {
          heading: "Step 3 — Write the valid range for the terms of trade",
          body:
            "The terms of trade (ToT) must lie strictly between the two countries' opportunity costs for the exported good. Trade is mutually beneficial only in that range. Using the hat/scarf example: B exports scarves. OC of 1 scarf: B = 1.5 hats, A = 2 hats. Valid ToT: 1.5 hats < 1 scarf < 2 hats. (At B's OC, B is indifferent and gains nothing. At A's OC, A gains nothing.)",
        },
        {
          heading: "Step 4 — Check each answer choice against the range",
          body:
            "The question will offer specific exchange rates (e.g., '1 scarf for 1.6 hats'). A rate is valid if it falls strictly inside the range. A rate at the boundary makes one party indifferent (they could produce it themselves at the same cost). A rate outside the range makes trade unprofitable for one party.",
        },
        {
          heading: "Step 5 — Watch for the 'who benefits more' twist",
          body:
            "Sometimes the question asks which party gains more from a specific ToT. The country whose ToT is closer to their own opportunity cost gains less. The country whose ToT is farther from their opportunity cost gains more. Example: if the ToT is 1.9 hats per scarf, A (OC = 2) gains a lot; B (OC = 1.5) gains less.",
        },
      ],
      tip:
        "Memory trick: draw a number line with each country's OC at the endpoints. Any exchange ratio between them is a valid ToT. The exam will almost always include one option at exactly a boundary (to trap you) and one clearly outside the range (to trap you in the other direction).",
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

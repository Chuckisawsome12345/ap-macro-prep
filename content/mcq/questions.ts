import type { UnitId } from "@/lib/progress";

export interface MCQItem {
  id: string;
  unit: UnitId;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  stem: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  sourceExam?: string;
}

// Original AP-style MCQ items written for this app.
// All scenarios, numbers, and wording are original; topics mirror the AP Macro CED.
export const MCQ_BANK: MCQItem[] = [
  // ─────────────────────────────── Unit 1 ───────────────────────────────
  {
    id: "u1-q1",
    unit: 1,
    topic: "Opportunity cost",
    difficulty: "easy",
    stem:
      "A small island can produce, with all its resources, either 80 surfboards or 40 kayaks. What is the opportunity cost of producing one kayak?",
    choices: ["½ surfboard", "1 surfboard", "2 surfboards", "40 surfboards", "It cannot be determined."],
    correctIndex: 2,
    explanation:
      "Using all resources for surfboards gives 80; for kayaks gives 40. So 40 kayaks = 80 surfboards, meaning 1 kayak costs 80/40 = 2 surfboards.",
  },
  {
    id: "u1-q2",
    unit: 1,
    topic: "PPC",
    difficulty: "easy",
    stem:
      "If an economy is currently producing inside its production possibilities curve, which of the following is most likely true?",
    choices: [
      "All resources are being used efficiently.",
      "Some resources are unemployed or underused.",
      "The country has experienced economic growth.",
      "Opportunity cost is zero.",
      "Both goods are being produced at the maximum amount.",
    ],
    correctIndex: 1,
    explanation:
      "Points inside the PPC indicate inefficient use of resources — typically unemployed or underused labor/capital. Growth would shift the PPC outward.",
  },
  {
    id: "u1-q3",
    unit: 1,
    topic: "Comparative advantage",
    difficulty: "medium",
    stem:
      "Country A can produce either 100 hats or 50 scarves with its resources. Country B can produce either 60 hats or 40 scarves. Which country has the comparative advantage in scarves?",
    choices: [
      "Country A, because 1 scarf costs 2 hats.",
      "Country A, because it produces more hats.",
      "Country B, because 1 scarf costs 1.5 hats.",
      "Country B, because it produces fewer scarves overall.",
      "Neither country has a comparative advantage in scarves.",
    ],
    correctIndex: 2,
    explanation:
      "Opportunity cost of 1 scarf: A = 100/50 = 2 hats; B = 60/40 = 1.5 hats. Country B sacrifices fewer hats per scarf, so B has comparative advantage in scarves.",
  },
  {
    id: "u1-q4",
    unit: 1,
    topic: "Demand shifters",
    difficulty: "easy",
    stem:
      "Tea and coffee are substitutes. If the price of tea rises sharply, what happens in the market for coffee?",
    choices: [
      "Demand for coffee decreases.",
      "Demand for coffee increases.",
      "Supply of coffee decreases.",
      "Quantity demanded of coffee falls along the demand curve.",
      "Equilibrium price of coffee falls.",
    ],
    correctIndex: 1,
    explanation:
      "A higher price of a substitute (tea) shifts the demand curve for coffee rightward, raising both price and quantity of coffee.",
  },
  {
    id: "u1-q5",
    unit: 1,
    topic: "Market equilibrium",
    difficulty: "medium",
    stem:
      "In the market for wheat, a new fertilizer makes farms much more productive at the same time that consumer incomes rise (wheat is a normal good). Which of the following is certain?",
    choices: [
      "Both equilibrium price and quantity rise.",
      "Equilibrium quantity rises; price is indeterminate.",
      "Equilibrium price rises; quantity is indeterminate.",
      "Both equilibrium price and quantity fall.",
      "Both price and quantity are indeterminate.",
    ],
    correctIndex: 1,
    explanation:
      "Supply shifts right (productivity↑) and demand shifts right (income↑, normal good). Quantity definitely rises; the price effect depends on the relative magnitudes of the two shifts.",
  },
  {
    id: "u1-q6",
    unit: 1,
    topic: "Opportunity cost",
    difficulty: "medium",
    stem:
      "An economy's bowed-out PPC implies that the opportunity cost of producing more of a good:",
    choices: [
      "is constant along the curve.",
      "decreases as more of the good is produced.",
      "increases as more of the good is produced.",
      "depends only on consumer tastes.",
      "is zero at the endpoints.",
    ],
    correctIndex: 2,
    explanation:
      "A bowed-out (concave) PPC reflects increasing opportunity costs because resources are not equally productive in both uses.",
  },
  {
    id: "u1-q7",
    unit: 1,
    topic: "Supply shifters",
    difficulty: "easy",
    stem: "Which of the following will shift the supply curve for new homes to the left?",
    choices: [
      "A decrease in lumber prices.",
      "An improvement in construction technology.",
      "A new tax on homebuilders' profits.",
      "An increase in expected future home prices.",
      "A subsidy for builders.",
    ],
    correctIndex: 2,
    explanation:
      "A tax on builders raises their costs, shifting supply left. Lower input prices, technology, and subsidies shift it right. (Higher expected prices would tend to reduce current supply — but the most direct effect listed is the new tax.)",
  },
  {
    id: "u1-q8",
    unit: 1,
    topic: "Movement vs shift",
    difficulty: "easy",
    stem:
      "Which of the following causes a movement along the demand curve for gasoline rather than a shift of the curve?",
    choices: [
      "A change in the price of gasoline itself.",
      "A change in consumer income.",
      "A change in the price of public transit.",
      "A change in tastes for driving.",
      "An increase in the number of drivers.",
    ],
    correctIndex: 0,
    explanation:
      "Only a change in the good's own price causes movement along the demand curve. All other listed factors shift the curve.",
  },
  {
    id: "u1-q9",
    unit: 1,
    topic: "PPC growth",
    difficulty: "medium",
    stem:
      "A country invests heavily in education and capital equipment. In the long run, this is most likely to:",
    choices: [
      "Move production from inside the PPC to a point on the PPC.",
      "Shift the PPC inward.",
      "Shift the PPC outward.",
      "Rotate the PPC around one axis only.",
      "Have no effect on the PPC.",
    ],
    correctIndex: 2,
    explanation:
      "Investment in human and physical capital increases productive capacity, shifting the entire PPC outward (economic growth).",
  },
  {
    id: "u1-q10",
    unit: 1,
    topic: "Terms of trade",
    difficulty: "hard",
    stem:
      "Country X gives up 4 widgets for every gadget produced; Country Y gives up 2 widgets for every gadget. A mutually beneficial trade ratio is:",
    choices: [
      "1 gadget for 1 widget",
      "1 gadget for 3 widgets",
      "1 gadget for 5 widgets",
      "1 gadget for 6 widgets",
      "There is no mutually beneficial trade.",
    ],
    correctIndex: 1,
    explanation:
      "Y has comparative advantage in gadgets (cost 2 widgets); X has advantage in widgets. Terms must lie strictly between their opportunity costs: 2 < ratio < 4. Only 3 widgets per gadget fits.",
  },

  // ─────────────────────────────── Unit 2 ───────────────────────────────
  {
    id: "u2-q1",
    unit: 2,
    topic: "GDP inclusion",
    difficulty: "easy",
    stem: "Which of the following is included in current-year U.S. GDP?",
    choices: [
      "The sale of a used car from one private party to another.",
      "A retiree's Social Security check.",
      "A newly manufactured tractor purchased by a U.S. farmer.",
      "Stock purchased on the New York Stock Exchange.",
      "Drugs sold on the black market.",
    ],
    correctIndex: 2,
    explanation:
      "GDP counts new final goods produced this year. Used goods, transfers, financial assets, and unrecorded activity are excluded.",
  },
  {
    id: "u2-q2",
    unit: 2,
    topic: "Real vs nominal GDP",
    difficulty: "medium",
    stem:
      "If nominal GDP is $12 trillion and the GDP deflator is 150, what is real GDP?",
    choices: ["$6 trillion", "$8 trillion", "$10 trillion", "$12 trillion", "$18 trillion"],
    correctIndex: 1,
    explanation: "Real GDP = (Nominal / Deflator) × 100 = (12 / 150) × 100 = $8 trillion.",
  },
  {
    id: "u2-q3",
    unit: 2,
    topic: "Unemployment rate",
    difficulty: "medium",
    stem:
      "In a country of 200 million working-age people, 120 million are employed and 10 million are unemployed and actively looking for work. What is the unemployment rate?",
    choices: ["5.0%", "7.7%", "8.3%", "10.0%", "Cannot be determined."],
    correctIndex: 1,
    explanation:
      "Labor Force = 120 + 10 = 130 million. Unemployment rate = 10/130 ≈ 7.7%. (The 70 million not in the labor force are excluded.)",
  },
  {
    id: "u2-q4",
    unit: 2,
    topic: "Unemployment types",
    difficulty: "easy",
    stem:
      "A textile worker loses her job because automation has made her skills obsolete. This is an example of:",
    choices: [
      "Frictional unemployment.",
      "Cyclical unemployment.",
      "Structural unemployment.",
      "Seasonal unemployment.",
      "Demand-deficient unemployment.",
    ],
    correctIndex: 2,
    explanation:
      "Structural unemployment results from a mismatch between worker skills and the skills employers demand — often due to technology or industry change.",
  },
  {
    id: "u2-q5",
    unit: 2,
    topic: "CPI / inflation",
    difficulty: "medium",
    stem:
      "If the CPI was 220 last year and is 231 this year, the inflation rate is closest to:",
    choices: ["2%", "3%", "5%", "11%", "21%"],
    correctIndex: 2,
    explanation: "(231 − 220) / 220 × 100 = 11/220 × 100 = 5%.",
  },
  {
    id: "u2-q6",
    unit: 2,
    topic: "Output gap",
    difficulty: "easy",
    stem:
      "If actual real GDP is less than potential real GDP, the economy is experiencing:",
    choices: [
      "An inflationary gap.",
      "A recessionary gap.",
      "Long-run equilibrium.",
      "Full employment.",
      "Hyperinflation.",
    ],
    correctIndex: 1,
    explanation:
      "Actual < potential is a recessionary (negative output) gap; cyclical unemployment is positive.",
  },
  {
    id: "u2-q7",
    unit: 2,
    topic: "Demand-pull vs cost-push",
    difficulty: "medium",
    stem:
      "An economy experiences a sudden spike in oil prices, causing both the price level to rise and real GDP to fall. This is best described as:",
    choices: [
      "Demand-pull inflation.",
      "Cost-push inflation / stagflation.",
      "A favorable supply shock.",
      "Expansionary fiscal policy.",
      "Hyperinflation.",
    ],
    correctIndex: 1,
    explanation:
      "An adverse supply shock shifts SRAS left, raising the price level while reducing output (stagflation = cost-push).",
  },
  {
    id: "u2-q8",
    unit: 2,
    topic: "Labor force participation",
    difficulty: "easy",
    stem:
      "A discouraged worker who stops looking for a job is reclassified as 'not in the labor force.' All else equal, this change will:",
    choices: [
      "Increase the unemployment rate.",
      "Decrease the unemployment rate.",
      "Have no effect on the unemployment rate.",
      "Increase the labor force participation rate.",
      "Decrease the working-age population.",
    ],
    correctIndex: 1,
    explanation:
      "The worker is no longer counted as unemployed but is also removed from the labor force. The numerator falls more (in relative terms) than the denominator, lowering the unemployment rate.",
  },
  {
    id: "u2-q9",
    unit: 2,
    topic: "Real wage",
    difficulty: "hard",
    stem:
      "Nominal wages rose 4% last year while the CPI rose 6%. The change in real wages is closest to:",
    choices: ["+10%", "+2%", "0%", "−2%", "−10%"],
    correctIndex: 3,
    explanation:
      "Real wage growth ≈ nominal − inflation = 4% − 6% = −2%. Purchasing power fell.",
  },
  {
    id: "u2-q10",
    unit: 2,
    topic: "Business cycle",
    difficulty: "easy",
    stem:
      "Which of the following best describes the trough of a business cycle?",
    choices: [
      "The maximum point of expansion before a downturn begins.",
      "The lowest point of contraction before recovery begins.",
      "A period of rapid productivity growth.",
      "A point at which inflation peaks.",
      "The midpoint of recovery.",
    ],
    correctIndex: 1,
    explanation: "The trough is the cycle's low point; expansion begins after it.",
  },

  // ─────────────────────────────── Unit 3 ───────────────────────────────
  {
    id: "u3-q1",
    unit: 3,
    topic: "AD shifters",
    difficulty: "easy",
    stem:
      "Which of the following would shift the aggregate demand (AD) curve to the right?",
    choices: [
      "An increase in personal income tax rates.",
      "A decline in consumer confidence.",
      "An increase in government infrastructure spending.",
      "An appreciation of the domestic currency.",
      "An increase in real interest rates set by the central bank.",
    ],
    correctIndex: 2,
    explanation:
      "Higher G is a direct AD-rightward shifter. The others shrink C, I, or NX, shifting AD left.",
  },
  {
    id: "u3-q2",
    unit: 3,
    topic: "SRAS shifters",
    difficulty: "medium",
    stem:
      "A nationwide minimum-wage increase that pushes input costs up across all industries will most directly:",
    choices: [
      "Shift AD to the left.",
      "Shift SRAS to the left.",
      "Shift LRAS to the left.",
      "Shift LRAS to the right.",
      "Cause a movement along SRAS.",
    ],
    correctIndex: 1,
    explanation:
      "Higher wages raise per-unit production costs, shifting SRAS left (cost-push effect).",
  },
  {
    id: "u3-q3",
    unit: 3,
    topic: "Spending multiplier",
    difficulty: "medium",
    stem: "If the MPC is 0.8, the spending multiplier is:",
    choices: ["1.25", "2", "4", "5", "8"],
    correctIndex: 3,
    explanation: "k = 1/(1 − MPC) = 1/(1 − 0.8) = 1/0.2 = 5.",
  },
  {
    id: "u3-q4",
    unit: 3,
    topic: "Tax multiplier",
    difficulty: "medium",
    stem:
      "If the MPC is 0.75, a $40 billion lump-sum tax cut would, in theory, change real GDP by approximately:",
    choices: ["+$30 billion", "+$120 billion", "+$160 billion", "+$200 billion", "−$120 billion"],
    correctIndex: 1,
    explanation:
      "Tax multiplier = −MPC/(1−MPC) = −0.75/0.25 = −3. A tax cut of $40B → ΔY = −3 × −40 = +$120 billion.",
  },
  {
    id: "u3-q5",
    unit: 3,
    topic: "Long-run self-correction",
    difficulty: "medium",
    stem:
      "An economy is in a short-run inflationary gap. With no policy action, the long-run self-correction occurs through:",
    choices: [
      "AD shifting left as expectations adjust.",
      "SRAS shifting right as wages fall.",
      "SRAS shifting left as wages rise.",
      "LRAS shifting right.",
      "LRAS shifting left.",
    ],
    correctIndex: 2,
    explanation:
      "In an inflationary gap, tight labor markets bid wages up, raising firms' costs and shifting SRAS left back to long-run equilibrium.",
  },
  {
    id: "u3-q6",
    unit: 3,
    topic: "Fiscal policy",
    difficulty: "easy",
    stem:
      "Which combination represents expansionary fiscal policy?",
    choices: [
      "Increase taxes, increase government spending.",
      "Decrease taxes, decrease government spending.",
      "Increase taxes, decrease government spending.",
      "Decrease taxes, increase government spending.",
      "Increase the money supply, lower interest rates.",
    ],
    correctIndex: 3,
    explanation:
      "Expansionary fiscal policy = lower taxes and/or higher spending — both shift AD right. (Money supply changes are monetary policy, not fiscal.)",
  },
  {
    id: "u3-q7",
    unit: 3,
    topic: "Automatic stabilizers",
    difficulty: "easy",
    stem: "Which of the following is an example of an automatic stabilizer?",
    choices: [
      "Congress passes a new infrastructure bill.",
      "The Fed lowers the federal funds rate target.",
      "Income-tax collections fall as workers' incomes drop during a recession.",
      "The President signs a one-time stimulus check.",
      "The Treasury issues new bonds.",
    ],
    correctIndex: 2,
    explanation:
      "Automatic stabilizers — like progressive income taxes and unemployment insurance — adjust without new legislation.",
  },
  {
    id: "u3-q8",
    unit: 3,
    topic: "AD/AS graph reading",
    difficulty: "medium",
    stem:
      "Starting at long-run equilibrium, a sharp decline in consumer confidence will most likely cause, in the short run:",
    choices: [
      "Price level and real GDP to both rise.",
      "Price level to fall and real GDP to rise.",
      "Price level and real GDP to both fall.",
      "Price level to rise and real GDP to fall.",
      "No change in price level or real GDP.",
    ],
    correctIndex: 2,
    explanation:
      "A drop in confidence shifts AD left, reducing both the price level and real GDP in the short run.",
  },
  {
    id: "u3-q9",
    unit: 3,
    topic: "Multiplier intuition",
    difficulty: "hard",
    stem:
      "Why is the absolute value of the tax multiplier smaller than the spending multiplier?",
    choices: [
      "Tax changes have no income effect on consumers.",
      "A portion of any tax cut is saved instead of spent, reducing the initial injection.",
      "Spending changes always happen faster than tax changes.",
      "The tax multiplier ignores the marginal propensity to consume.",
      "Taxes affect supply, not demand.",
    ],
    correctIndex: 1,
    explanation:
      "A $1 increase in G is spent in full at the first round. A $1 tax cut adds only $MPC to the first round of spending because households save the rest, so the chain is smaller from the start.",
  },
  {
    id: "u3-q10",
    unit: 3,
    topic: "Recessionary gap policy",
    difficulty: "medium",
    stem:
      "An economy is in a recessionary gap. Which fiscal policy would most directly close the gap?",
    choices: [
      "A tax increase to reduce inflation.",
      "An increase in government spending financed by borrowing.",
      "A decrease in the reserve requirement.",
      "An open market sale of bonds.",
      "A reduction in transfer payments.",
    ],
    correctIndex: 1,
    explanation:
      "Increased G shifts AD right, raising real GDP. (B/D are monetary tools; A and E are contractionary.)",
  },

  // ─────────────────────────────── Unit 4 ───────────────────────────────
  {
    id: "u4-q1",
    unit: 4,
    topic: "Money supply / M1",
    difficulty: "easy",
    stem:
      "Which of the following is included in M1?",
    choices: [
      "U.S. Treasury bonds held by individuals.",
      "Funds in a checking account at a commercial bank.",
      "Shares of a money market mutual fund.",
      "Savings deposits.",
      "Corporate bonds.",
    ],
    correctIndex: 1,
    explanation:
      "M1 is the most liquid money: currency, traveler's checks, and checkable deposits. Savings & MMMFs are in M2; bonds are not money.",
  },
  {
    id: "u4-q2",
    unit: 4,
    topic: "Money multiplier",
    difficulty: "medium",
    stem:
      "If the required reserve ratio is 20% and a bank receives a new $1,000 deposit, the maximum increase in the money supply (assuming banks lend all excess reserves) is:",
    choices: ["$200", "$800", "$4,000", "$5,000", "$10,000"],
    correctIndex: 2,
    explanation:
      "Excess reserves = $800 (the bank must keep $200). Money multiplier = 1/0.2 = 5. Maximum new money created from loans = 5 × $800 = $4,000.",
  },
  {
    id: "u4-q3",
    unit: 4,
    topic: "Money market",
    difficulty: "medium",
    stem:
      "If the Fed conducts an open market purchase of government bonds, the most likely short-run effect on the money market is:",
    choices: [
      "MS shifts right; nominal interest rate falls.",
      "MS shifts left; nominal interest rate rises.",
      "MD shifts right; nominal interest rate rises.",
      "MD shifts left; nominal interest rate falls.",
      "No change in MS; MD increases.",
    ],
    correctIndex: 0,
    explanation:
      "Buying bonds injects reserves → MS shifts right → nominal interest rate falls.",
  },
  {
    id: "u4-q4",
    unit: 4,
    topic: "Loanable funds",
    difficulty: "medium",
    stem:
      "A large increase in the federal budget deficit, holding all else constant, will most likely:",
    choices: [
      "Shift the supply of loanable funds left, raising the real interest rate.",
      "Shift the demand for loanable funds right, raising the real interest rate.",
      "Shift the supply of loanable funds right, lowering the real interest rate.",
      "Shift the demand for loanable funds left, lowering the real interest rate.",
      "Have no effect on the loanable funds market.",
    ],
    correctIndex: 1,
    explanation:
      "Government borrowing adds to D(LF), pushing real interest rates up and crowding out private investment.",
  },
  {
    id: "u4-q5",
    unit: 4,
    topic: "Monetary policy transmission",
    difficulty: "medium",
    stem:
      "Which of the following correctly traces the effect of expansionary monetary policy on the economy?",
    choices: [
      "MS↑ → i↓ → I↑ → AD↑ → real GDP↑",
      "MS↑ → i↑ → I↓ → AD↓ → real GDP↓",
      "MS↓ → i↓ → I↑ → AD↑ → real GDP↑",
      "MS↑ → i↓ → C↓ → AD↓ → real GDP↓",
      "MS↓ → i↑ → I↑ → AD↑ → real GDP↑",
    ],
    correctIndex: 0,
    explanation:
      "Increasing money supply lowers the nominal interest rate, which stimulates investment (and interest-sensitive consumption), shifting AD right.",
  },
  {
    id: "u4-q6",
    unit: 4,
    topic: "Quantity theory",
    difficulty: "hard",
    stem:
      "Using the equation MV = PQ, if velocity (V) is constant and real output (Q) grows at 3% per year, a money supply growth rate of 8% would result in approximately what inflation rate?",
    choices: ["−5%", "0%", "3%", "5%", "11%"],
    correctIndex: 3,
    explanation:
      "In growth rates: %ΔM + %ΔV ≈ %ΔP + %ΔQ → 8 + 0 = π + 3 → π = 5%.",
  },
  {
    id: "u4-q7",
    unit: 4,
    topic: "Bank balance sheet",
    difficulty: "medium",
    stem:
      "A commercial bank has $50,000 in checkable deposits and the required reserve ratio is 10%. The bank currently holds $8,000 in reserves. Excess reserves equal:",
    choices: ["$0", "$3,000", "$5,000", "$8,000", "$45,000"],
    correctIndex: 1,
    explanation:
      "Required reserves = 10% × $50,000 = $5,000. Excess = $8,000 − $5,000 = $3,000.",
  },
  {
    id: "u4-q8",
    unit: 4,
    topic: "Real interest rate",
    difficulty: "easy",
    stem:
      "If the nominal interest rate is 7% and expected inflation is 3%, the expected real interest rate is approximately:",
    choices: ["−4%", "3%", "4%", "7%", "10%"],
    correctIndex: 2,
    explanation: "r ≈ i − πᵉ = 7 − 3 = 4%.",
  },
  {
    id: "u4-q9",
    unit: 4,
    topic: "Money demand",
    difficulty: "medium",
    stem:
      "An increase in real GDP (income) is most likely to:",
    choices: [
      "Shift money demand left, lowering the nominal interest rate.",
      "Shift money demand right, raising the nominal interest rate.",
      "Shift money supply right, lowering the nominal interest rate.",
      "Have no effect on the money market.",
      "Cause the Fed to automatically raise the reserve requirement.",
    ],
    correctIndex: 1,
    explanation:
      "Higher income increases transactions demand for money, shifting MD right and pushing the equilibrium interest rate up.",
  },
  {
    id: "u4-q10",
    unit: 4,
    topic: "Tools comparison",
    difficulty: "hard",
    stem:
      "Which of the Fed's traditional policy tools is generally considered the most flexible and most frequently used?",
    choices: [
      "Changes to the required reserve ratio.",
      "Open market operations.",
      "Changes to the discount rate.",
      "Moral suasion.",
      "Direct credit controls on banks.",
    ],
    correctIndex: 1,
    explanation:
      "Open market operations can be conducted continuously, in small or large amounts, with quick effects on reserves and interest rates — making them the day-to-day workhorse.",
  },

  // ─────────────────────────────── Unit 5 ───────────────────────────────
  {
    id: "u5-q1",
    unit: 5,
    topic: "Phillips curve",
    difficulty: "easy",
    stem:
      "The short-run Phillips curve (SRPC) illustrates a:",
    choices: [
      "Positive relationship between inflation and real GDP.",
      "Negative relationship between unemployment and inflation.",
      "Positive relationship between unemployment and inflation.",
      "Negative relationship between investment and real interest rates.",
      "No relationship — it is vertical.",
    ],
    correctIndex: 1,
    explanation:
      "SRPC slopes downward: lower unemployment is associated with higher inflation in the short run (mirror of AD shifts along SRAS).",
  },
  {
    id: "u5-q2",
    unit: 5,
    topic: "LRPC",
    difficulty: "medium",
    stem:
      "The long-run Phillips curve (LRPC) is vertical because, in the long run:",
    choices: [
      "Inflation cannot exceed zero.",
      "Unemployment always rises with inflation.",
      "Output returns to potential and only the natural rate of unemployment remains, regardless of inflation.",
      "Expectations never adjust to actual inflation.",
      "The Fed sets the unemployment rate directly.",
    ],
    correctIndex: 2,
    explanation:
      "LRPC sits at the natural rate of unemployment (Y = Y*); changing inflation expectations shift SRPC but leave LRPC unchanged.",
  },
  {
    id: "u5-q3",
    unit: 5,
    topic: "Supply shock on Phillips curve",
    difficulty: "medium",
    stem:
      "An adverse supply shock that increases input prices will, in the short run:",
    choices: [
      "Shift SRPC left.",
      "Shift SRPC right.",
      "Move the economy down along the existing SRPC.",
      "Shift LRPC left.",
      "Shift LRPC right.",
    ],
    correctIndex: 1,
    explanation:
      "Higher input costs → SRAS shifts left → at every unemployment rate, inflation is higher → SRPC shifts right.",
  },
  {
    id: "u5-q4",
    unit: 5,
    topic: "Crowding out",
    difficulty: "medium",
    stem:
      "Persistent government deficit spending most directly slows long-run economic growth by:",
    choices: [
      "Reducing labor force participation.",
      "Increasing private investment.",
      "Crowding out private investment via higher real interest rates.",
      "Decreasing the natural rate of unemployment.",
      "Lowering the price level.",
    ],
    correctIndex: 2,
    explanation:
      "Increased government borrowing shifts D(LF) right, raising real interest rates and reducing private capital formation — slowing future growth.",
  },
  {
    id: "u5-q5",
    unit: 5,
    topic: "Economic growth",
    difficulty: "easy",
    stem:
      "Which of the following will most likely shift LRAS to the right?",
    choices: [
      "An increase in consumer spending.",
      "An increase in the labor force due to immigration.",
      "A short-run decline in unemployment.",
      "An increase in the money supply.",
      "A cut in personal income taxes.",
    ],
    correctIndex: 1,
    explanation:
      "LRAS shifts only with changes in resources, technology, or institutions. A bigger labor force increases potential output.",
  },
  {
    id: "u5-q6",
    unit: 5,
    topic: "Rule of 70",
    difficulty: "medium",
    stem:
      "A country growing at 5% per year will double its real GDP per capita in approximately how many years?",
    choices: ["7", "10", "14", "20", "35"],
    correctIndex: 2,
    explanation: "Rule of 70: 70/5 = 14 years.",
  },
  {
    id: "u5-q7",
    unit: 5,
    topic: "Expectations on Phillips curve",
    difficulty: "hard",
    stem:
      "If workers and firms come to expect persistently higher inflation, the SRPC will:",
    choices: [
      "Shift left.",
      "Shift right.",
      "Become vertical.",
      "Become horizontal.",
      "Remain unchanged; only LRPC shifts.",
    ],
    correctIndex: 1,
    explanation:
      "Higher expected inflation gets baked into wage and price setting, shifting SRPC right (higher inflation at every level of unemployment).",
  },
  {
    id: "u5-q8",
    unit: 5,
    topic: "Stagflation policy",
    difficulty: "hard",
    stem:
      "Why are demand-side policies unable to fully resolve stagflation?",
    choices: [
      "AD shifts only affect real GDP, never the price level.",
      "Reducing inflation requires shifting AD left, which worsens unemployment; raising output requires shifting AD right, which worsens inflation.",
      "Stagflation occurs only when LRAS shifts right.",
      "Fiscal policy is always offset by monetary policy.",
      "Supply shocks reverse themselves automatically.",
    ],
    correctIndex: 1,
    explanation:
      "With SRAS having shifted left, any AD move trades off one bad outcome for the other. Lasting solutions usually require supply-side action.",
  },
  {
    id: "u5-q9",
    unit: 5,
    topic: "Natural rate",
    difficulty: "easy",
    stem:
      "The natural rate of unemployment is the sum of:",
    choices: [
      "Frictional and cyclical unemployment.",
      "Cyclical and structural unemployment.",
      "Frictional and structural unemployment.",
      "Discouraged and underemployed workers.",
      "All unemployed people regardless of cause.",
    ],
    correctIndex: 2,
    explanation:
      "Natural = frictional + structural. Cyclical unemployment exists only when actual GDP < potential.",
  },
  {
    id: "u5-q10",
    unit: 5,
    topic: "Long-run effects",
    difficulty: "medium",
    stem:
      "In the long run, a sustained increase in the money supply (above growth in real output) most directly leads to:",
    choices: [
      "A permanently lower unemployment rate.",
      "A permanently higher real GDP.",
      "A higher price level with no change in real output.",
      "A permanent decrease in the natural rate of unemployment.",
      "A rightward shift of LRAS.",
    ],
    correctIndex: 2,
    explanation:
      "Money is long-run neutral: more money chasing the same real output raises only the price level. Real variables return to their natural levels.",
  },

  // ─────────────────────────────── Unit 6 ───────────────────────────────
  {
    id: "u6-q1",
    unit: 6,
    topic: "Balance of payments",
    difficulty: "easy",
    stem:
      "Which of the following would be recorded in the current account of the U.S. balance of payments?",
    choices: [
      "A French investor purchases U.S. Treasury bonds.",
      "A Japanese company builds a factory in Ohio.",
      "A U.S. firm exports software to Germany.",
      "An American buys shares of a foreign mutual fund.",
      "The U.S. central bank sells foreign currency reserves.",
    ],
    correctIndex: 2,
    explanation:
      "Exports of goods/services go in the current account. Asset purchases (A, B, D) are financial account items.",
  },
  {
    id: "u6-q2",
    unit: 6,
    topic: "Currency appreciation",
    difficulty: "medium",
    stem:
      "If real interest rates rise in the United States while remaining unchanged abroad, in the foreign exchange market for U.S. dollars:",
    choices: [
      "Demand for dollars shifts left; the dollar depreciates.",
      "Demand for dollars shifts right; the dollar appreciates.",
      "Supply of dollars shifts right; the dollar depreciates.",
      "Supply of dollars shifts left; the dollar appreciates.",
      "No change in either curve.",
    ],
    correctIndex: 1,
    explanation:
      "Higher U.S. real interest rates attract foreign capital. Foreigners demand more dollars to buy U.S. assets → D shifts right → dollar appreciates.",
  },
  {
    id: "u6-q3",
    unit: 6,
    topic: "NX and exchange rate",
    difficulty: "medium",
    stem:
      "An appreciation of the domestic currency will most likely:",
    choices: [
      "Increase exports and decrease imports.",
      "Decrease exports and increase imports.",
      "Have no effect on net exports.",
      "Increase both exports and imports proportionally.",
      "Decrease both exports and imports proportionally.",
    ],
    correctIndex: 1,
    explanation:
      "A stronger currency makes domestic goods more expensive abroad (exports↓) and foreign goods cheaper at home (imports↑) → NX↓.",
  },
  {
    id: "u6-q4",
    unit: 6,
    topic: "Monetary policy open economy",
    difficulty: "hard",
    stem:
      "Expansionary monetary policy in a country with a floating exchange rate will most likely cause its currency to ___ and net exports to ___.",
    choices: [
      "appreciate; increase",
      "appreciate; decrease",
      "depreciate; increase",
      "depreciate; decrease",
      "remain unchanged; remain unchanged",
    ],
    correctIndex: 2,
    explanation:
      "Lower domestic interest rates push capital out → currency depreciates → exports cheaper / imports pricier → NX rises (reinforcing the AD increase).",
  },
  {
    id: "u6-q5",
    unit: 6,
    topic: "Fiscal policy open economy",
    difficulty: "hard",
    stem:
      "Expansionary fiscal policy financed by government borrowing will, through the FX channel, most likely:",
    choices: [
      "Cause currency depreciation and an increase in net exports.",
      "Cause currency appreciation and a decrease in net exports.",
      "Have no effect on the exchange rate.",
      "Increase exports and increase imports.",
      "Decrease both interest rates and the exchange rate.",
    ],
    correctIndex: 1,
    explanation:
      "Government borrowing pushes real interest rates up → capital inflow → currency appreciates → NX falls (partial crowding out of AD).",
  },
  {
    id: "u6-q6",
    unit: 6,
    topic: "FX shifters",
    difficulty: "medium",
    stem:
      "If U.S. consumers' taste for European cars increases, in the FX market for euros:",
    choices: [
      "Supply of euros shifts right; euro depreciates.",
      "Demand for euros shifts right; euro appreciates.",
      "Supply of dollars shifts left; dollar appreciates.",
      "Demand for euros shifts left; euro depreciates.",
      "No effect on FX markets.",
    ],
    correctIndex: 1,
    explanation:
      "U.S. consumers need euros to pay European producers → demand for euros rises → euro appreciates (dollar depreciates).",
  },
  {
    id: "u6-q7",
    unit: 6,
    topic: "Capital account",
    difficulty: "medium",
    stem:
      "Holding all else constant, a current account deficit is generally offset by:",
    choices: [
      "A larger current account deficit elsewhere.",
      "A financial (capital) account surplus.",
      "A trade surplus.",
      "A balanced current account.",
      "A reduction in the money supply.",
    ],
    correctIndex: 1,
    explanation:
      "Balance of payments accounting: CA + KA ≈ 0. A current account deficit is balanced by a financial account surplus (net capital inflow).",
  },
  {
    id: "u6-q8",
    unit: 6,
    topic: "Pegged exchange rate",
    difficulty: "hard",
    stem:
      "To maintain a fixed (pegged) exchange rate above its market equilibrium, a country's central bank must:",
    choices: [
      "Buy its own currency in FX markets using foreign reserves.",
      "Sell its own currency in FX markets.",
      "Raise the reserve requirement.",
      "Lower interest rates.",
      "Wait passively; the peg is automatic.",
    ],
    correctIndex: 0,
    explanation:
      "If the official rate is above equilibrium, there is excess supply of the currency. To support the peg, the central bank must buy its own currency (using foreign reserves), removing the excess supply.",
  },
  {
    id: "u6-q9",
    unit: 6,
    topic: "NX and AD",
    difficulty: "medium",
    stem:
      "An increase in U.S. net exports, all else equal, will most likely:",
    choices: [
      "Shift AD left and reduce real GDP.",
      "Shift AD right and increase real GDP.",
      "Shift SRAS left.",
      "Shift LRAS right.",
      "Have no effect on AD or real GDP.",
    ],
    correctIndex: 1,
    explanation:
      "NX is a component of AD. NX↑ shifts AD right, increasing real GDP and price level in the short run.",
  },
  {
    id: "u6-q10",
    unit: 6,
    topic: "Inflation differentials",
    difficulty: "hard",
    stem:
      "If U.S. inflation is significantly higher than its trading partners' inflation, holding all else constant, the long-run effect on the U.S. dollar is most likely:",
    choices: [
      "Appreciation against partner currencies.",
      "Depreciation against partner currencies.",
      "No change in exchange rates.",
      "An increase in U.S. net exports.",
      "A reduction in U.S. imports.",
    ],
    correctIndex: 1,
    explanation:
      "Higher domestic inflation erodes purchasing power and makes U.S. goods relatively more expensive. Demand for dollars falls; supply rises → depreciation.",
  },

  // ─── Released-exam questions (modeled on 2019 AP Macro released exam) ────

  // Unit 1 — Basic Economic Concepts
  {
    id: "re-u1-q1",
    unit: 1,
    topic: "PPC shape and opportunity cost",
    difficulty: "easy",
    stem: "A production possibilities curve that is concave to the origin (bowed out) implies that as more of a good is produced, the opportunity cost",
    choices: [
      "remains constant",
      "decreases",
      "decreases at first and then increases",
      "increases",
      "increases at first and then decreases",
    ],
    correctIndex: 3,
    explanation:
      "A bowed-out PPC reflects increasing opportunity cost. Resources are not equally suited to producing all goods, so transferring resources from one good to another becomes progressively more costly.",
    sourceExam: "modeled on 2019 AP Macro released exam Q1",
  },
  {
    id: "re-u1-q11",
    unit: 1,
    topic: "Supply and demand — coffee market",
    difficulty: "medium",
    stem: "In the coffee market, which of the following changes will increase the price and decrease the quantity of coffee? [Supply | Demand]",
    choices: [
      "Increase | Increase",
      "Increase | Decrease",
      "Decrease | Increase",
      "No change | Increase",
      "Decrease | No change",
    ],
    correctIndex: 4,
    explanation:
      "A decrease in supply with no change in demand unambiguously raises the equilibrium price and reduces the equilibrium quantity. Combining a supply decrease with a demand increase raises price but leaves quantity ambiguous.",
    sourceExam: "modeled on 2019 AP Macro released exam Q11",
  },
  {
    id: "re-u1-q26",
    unit: 1,
    topic: "Comparative advantage and trade",
    difficulty: "medium",
    stem: "Suppose countries Alphania and Betania produce electronics and apparel using identical resources. Which of the following is true if Alphania exports electronics to and imports apparel from Betania within a free-trade system?",
    choices: [
      "The opportunity cost of producing electronics is higher in Alphania than in Betania.",
      "Betania has a comparative advantage in producing apparel, and Alphania has a comparative advantage in producing electronics.",
      "Alphania must be specializing in apparel, while Betania is specializing in electronics.",
      "Workers in Alphania can produce more apparel per hour than workers in Betania.",
      "Consumers in Betania buy more electronics than consumers in Alphania.",
    ],
    correctIndex: 1,
    explanation:
      "Alphania exports electronics, so it has the lower opportunity cost of electronics — i.e., comparative advantage there. Betania exports apparel (imports electronics), so it has comparative advantage in apparel.",
    sourceExam: "modeled on 2019 AP Macro released exam Q26",
  },

  // Unit 2 — Economic Indicators & the Business Cycle
  {
    id: "re-u2-q3",
    unit: 2,
    topic: "Labor force classification",
    difficulty: "easy",
    stem: "Olivia volunteers full time at an animal shelter and will not accept any offers for a paid job for the next six months. Olivia is",
    choices: [
      "cyclically unemployed",
      "not in the labor force",
      "employed",
      "structurally unemployed",
      "a seasonal worker",
    ],
    correctIndex: 1,
    explanation:
      "To be in the labor force you must be employed or actively seeking paid work. Olivia is voluntarily unavailable for paid work, so she is not in the labor force.",
    sourceExam: "modeled on 2019 AP Macro released exam Q3",
  },
  {
    id: "re-u2-q9",
    unit: 2,
    topic: "Real GDP calculation",
    difficulty: "medium",
    stem: "According to the data below, in which year was real GDP the largest? Year | Nominal GDP | GDP Deflator — 1980 | $14,000 | 70 — 1990 | $18,000 | 100 — 2000 | $22,000 | 220 — 2010 | $50,000 | 200 — 2015 | $60,000 | 300",
    choices: ["1980", "1990", "2000", "2010", "2015"],
    correctIndex: 3,
    explanation:
      "Real GDP = (Nominal GDP / GDP Deflator) × 100. Results: 1980 = 20,000; 1990 = 18,000; 2000 = 10,000; 2010 = 25,000; 2015 = 20,000. 2010 has the highest real GDP.",
    sourceExam: "modeled on 2019 AP Macro released exam Q9",
  },
  {
    id: "re-u2-q12",
    unit: 2,
    topic: "GDP components",
    difficulty: "easy",
    stem: "An increase in inventories will increase which component of gross domestic product?",
    choices: [
      "Personal consumption expenditures",
      "Investment expenditures",
      "Government purchases",
      "Exports",
      "Imports",
    ],
    correctIndex: 1,
    explanation:
      "In the expenditure approach to GDP, unsold output that accumulates as inventories counts as business investment (I). An inventory build-up raises the investment component of GDP.",
    sourceExam: "modeled on 2019 AP Macro released exam Q12",
  },
  {
    id: "re-u2-q20",
    unit: 2,
    topic: "GDP per capita",
    difficulty: "easy",
    stem: "Assume that a nation's real gross domestic product (GDP) grows at a higher rate than its population over a given period of time. It can be concluded that",
    choices: [
      "the population will grow at a faster rate in the future",
      "the price level has decreased",
      "real GDP per capita has increased",
      "real GDP will rise at a slower rate in the future",
      "real GDP will rise at a faster rate in the future",
    ],
    correctIndex: 2,
    explanation:
      "Real GDP per capita = real GDP ÷ population. If real GDP grows faster than population, the ratio rises — real GDP per capita increases.",
    sourceExam: "modeled on 2019 AP Macro released exam Q20",
  },
  {
    id: "re-u2-q22",
    unit: 2,
    topic: "Inflation rate calculation",
    difficulty: "easy",
    stem: "If the consumer price index increases from 200 to 240 in a one-year period, then the inflation rate is",
    choices: ["16.67 percent", "20 percent", "25 percent", "40 percent", "140 percent"],
    correctIndex: 1,
    explanation:
      "Inflation rate = (240 − 200) / 200 × 100 = 40/200 × 100 = 20%.",
    sourceExam: "modeled on 2019 AP Macro released exam Q22",
  },
  {
    id: "re-u2-q32",
    unit: 2,
    topic: "Unemployment rate definition",
    difficulty: "easy",
    stem: "A nation's unemployment rate is the ratio of the number of unemployed seeking employment to the nation's",
    choices: [
      "labor force",
      "potential gross domestic product",
      "number of employed",
      "working-age population",
      "total population",
    ],
    correctIndex: 0,
    explanation:
      "Unemployment rate = (# unemployed / labor force) × 100. The labor force includes all employed plus those actively seeking work.",
    sourceExam: "modeled on 2019 AP Macro released exam Q32",
  },
  {
    id: "re-u2-q37",
    unit: 2,
    topic: "Types of unemployment",
    difficulty: "easy",
    stem: "Ying has just graduated from college and is now interviewing for jobs. Ying would best be described as",
    choices: [
      "cyclically unemployed",
      "frictionally unemployed",
      "structurally unemployed",
      "not in the labor force",
      "a discouraged worker",
    ],
    correctIndex: 1,
    explanation:
      "Ying is actively searching for her first job after graduation — a normal transition between school and work. This is the classic case of frictional unemployment.",
    sourceExam: "modeled on 2019 AP Macro released exam Q37",
  },
  {
    id: "re-u2-q41",
    unit: 2,
    topic: "Inventories and business cycle",
    difficulty: "medium",
    stem: "As an indicator of an impending recession, inventories will most likely",
    choices: [
      "decrease as a result of a decrease in consumption",
      "increase as a result of a decrease in consumption",
      "increase as a result of a decrease in aggregate supply",
      "decrease as a result of an increase in aggregate supply",
      "remain constant as a result of economic uncertainty",
    ],
    correctIndex: 1,
    explanation:
      "When consumers pull back spending before a recession, firms find sales below expectations and unsold goods pile up — inventories rise. Rising inventories are a leading indicator of recession.",
    sourceExam: "modeled on 2019 AP Macro released exam Q41",
  },
  {
    id: "re-u2-q42",
    unit: 2,
    topic: "Winners and losers from deflation",
    difficulty: "medium",
    stem: "Which of the following would most likely benefit from unexpected deflation?",
    choices: [
      "Lenders",
      "Borrowers",
      "Retail shop owners",
      "Governments in debt",
      "Automobile manufacturing firms",
    ],
    correctIndex: 0,
    explanation:
      "Unexpected deflation raises the real value of loan repayments. Borrowers repay in dollars worth more than expected, hurting them; lenders receive higher real returns than expected, benefiting them.",
    sourceExam: "modeled on 2019 AP Macro released exam Q42",
  },
  {
    id: "re-u2-q50",
    unit: 2,
    topic: "Discouraged workers and unemployment rate",
    difficulty: "hard",
    stem: "An increase in the number of discouraged workers causes the unemployment rate to",
    choices: [
      "decrease along with the labor-force participation rate",
      "increase while the labor-force participation rate decreases",
      "stay the same because the workers are still unemployed",
      "decrease while the labor-force participation rate stays the same",
      "increase along with the labor-force participation rate",
    ],
    correctIndex: 0,
    explanation:
      "Discouraged workers stop looking for work, so they exit the labor force. Both the numerator (unemployed) and denominator (labor force) shrink, but the rate falls because the ratio decreases. Labor-force participation rate also falls since fewer people are in the labor force.",
    sourceExam: "modeled on 2019 AP Macro released exam Q50",
  },
  {
    id: "re-u2-q58",
    unit: 2,
    topic: "CPI limitations",
    difficulty: "medium",
    stem: "The consumer price index (CPI) does not measure the true cost of inflation because",
    choices: [
      "improvements in the quality of goods or services are not fully reflected",
      "lenders are better off when actual inflation is less than anticipated inflation",
      "borrowers are better off when actual inflation is greater than anticipated inflation",
      "changes in consumers' real income are not accounted for",
      "consumers may substitute toward more expensive goods without being significantly worse off",
    ],
    correctIndex: 0,
    explanation:
      "Quality bias is a key CPI flaw: if a product improves in quality but its price rises, the CPI treats the entire price increase as inflation even though consumers are getting more. This causes the CPI to overstate true inflation.",
    sourceExam: "modeled on 2019 AP Macro released exam Q58",
  },

  // Unit 3 — National Income and Price Determination
  {
    id: "re-u3-q4",
    unit: 3,
    topic: "Expansionary fiscal policy effects",
    difficulty: "medium",
    stem: "With an expansionary fiscal policy, what will most likely happen to the real gross domestic product (GDP) and the nominal interest rate in the short run? [Real GDP | Nominal Interest Rate]",
    choices: [
      "Increase | Decrease",
      "Increase | Increase",
      "No change | No change",
      "Decrease | Increase",
      "Decrease | Decrease",
    ],
    correctIndex: 1,
    explanation:
      "Expansionary fiscal policy (increased spending or tax cuts) shifts AD right, raising real GDP and the price level in the short run. Increased government borrowing raises demand for loanable funds, pushing the nominal interest rate up.",
    sourceExam: "modeled on 2019 AP Macro released exam Q4",
  },
  {
    id: "re-u3-q7",
    unit: 3,
    topic: "Government borrowing, bond prices, price level",
    difficulty: "hard",
    stem: "Assume that a country's government increases borrowing. What will most likely happen to the prices of previously issued bonds and the price level in the short run? [Bond Prices | Price Level]",
    choices: [
      "Increase | Increase",
      "Increase | Decrease",
      "Increase | No change",
      "Decrease | Increase",
      "Decrease | Decrease",
    ],
    correctIndex: 3,
    explanation:
      "More government borrowing → more bonds issued → bond supply rises → existing bond prices fall (inverse bond price/interest rate relationship). Meanwhile, expansionary fiscal spending shifts AD right → price level rises in short run.",
    sourceExam: "modeled on 2019 AP Macro released exam Q7",
  },
  {
    id: "re-u3-q10",
    unit: 3,
    topic: "Business taxes and SRAS",
    difficulty: "medium",
    stem: "Which of the following will happen if a country's government reduces business taxes?",
    choices: [
      "The short-run Phillips curve will shift to the right.",
      "The short-run aggregate supply curve will shift to the right.",
      "The long-run aggregate supply curve will shift to the left.",
      "The aggregate demand curve will shift to the left.",
      "The demand curve for loanable funds will shift to the left.",
    ],
    correctIndex: 1,
    explanation:
      "Lower business taxes reduce production costs, increasing firms' willingness to supply at every price level. SRAS shifts rightward (a positive supply shock), lowering price level and increasing output.",
    sourceExam: "modeled on 2019 AP Macro released exam Q10",
  },
  {
    id: "re-u3-q14",
    unit: 3,
    topic: "Fiscal and monetary policy to reduce price level",
    difficulty: "medium",
    stem: "Which of the following combinations of fiscal and monetary policy will reduce the price level? [Fiscal Policy | Monetary Policy]",
    choices: [
      "Increasing government spending | Buying government bonds",
      "Increasing government spending | Selling government bonds",
      "Decreasing government spending | Buying government bonds",
      "Decreasing government spending | Selling government bonds",
      "Decreasing taxes | Decreasing the discount rate",
    ],
    correctIndex: 3,
    explanation:
      "Both policies must be contractionary. Decreasing government spending reduces AD (contractionary fiscal). Selling bonds removes reserves from banking system, reducing money supply and raising interest rates (contractionary monetary). Together they shift AD left, reducing the price level.",
    sourceExam: "modeled on 2019 AP Macro released exam Q14",
  },
  {
    id: "re-u3-q16",
    unit: 3,
    topic: "Mixed fiscal and monetary policy",
    difficulty: "hard",
    stem: "If government spending increases and at the same time a country's central bank sells bonds in the open market, the interest rate and private investment in plant and equipment (P&E) will most likely change in which of the following ways? [Interest Rate | Private Investment in P&E]",
    choices: [
      "Increase | Increase",
      "Increase | Decrease",
      "Increase | No change",
      "No change | Decrease",
      "Decrease | Decrease",
    ],
    correctIndex: 1,
    explanation:
      "Expansionary fiscal policy increases demand for loanable funds; contractionary monetary policy decreases supply of loanable funds. Both forces push the interest rate up. Higher interest rates crowd out private investment in P&E.",
    sourceExam: "modeled on 2019 AP Macro released exam Q16",
  },
  {
    id: "re-u3-q27",
    unit: 3,
    topic: "Demand-pull inflation in AD/AS model",
    difficulty: "easy",
    stem: "Based on an AD/AS graph (with LRAS, SRAS1, SRAS2, AD1, AD2, price levels P1–P4, and output levels Y1 and Yf), demand-pull inflation is caused by a movement from",
    choices: ["SRAS1 to SRAS2", "SRAS2 to SRAS1", "AD1 to AD2", "AD2 to AD1", "Yf to Y1"],
    correctIndex: 2,
    explanation:
      "Demand-pull inflation occurs when aggregate demand increases (AD shifts right, from AD1 to AD2), pulling output above potential and raising the price level.",
    sourceExam: "modeled on 2019 AP Macro released exam Q27",
  },
  {
    id: "re-u3-q28",
    unit: 3,
    topic: "Effects of a tax decrease",
    difficulty: "medium",
    stem: "A decrease in taxes will necessarily result in an increase in which of the following?",
    choices: [
      "Nominal gross domestic product",
      "Unemployment",
      "Exports",
      "Marginal propensity to save",
      "Money supply",
    ],
    correctIndex: 0,
    explanation:
      "A tax cut raises disposable income → consumption rises → AD shifts right → real output and/or price level rise → nominal GDP (= P × Y) increases. The other choices are either unaffected or move in the opposite direction.",
    sourceExam: "modeled on 2019 AP Macro released exam Q28",
  },
  {
    id: "re-u3-q34",
    unit: 3,
    topic: "Spending multiplier calculation",
    difficulty: "hard",
    stem: "Assume that the marginal propensity to consume is 0.75, net exports decline by $10 billion, and government spending increases by $20 billion. Given that there is no crowding out, the equilibrium gross domestic product can increase by a maximum of",
    choices: ["$7.5 billion", "$15 billion", "$40 billion", "$80 billion", "$120 billion"],
    correctIndex: 2,
    explanation:
      "Multiplier = 1/(1 − MPC) = 1/0.25 = 4. Net change in autonomous spending = +$20B − $10B = +$10B. Maximum ΔGDP = 4 × $10B = $40B.",
    sourceExam: "modeled on 2019 AP Macro released exam Q34",
  },
  {
    id: "re-u3-q40",
    unit: 3,
    topic: "Transfer payments and budget deficit",
    difficulty: "easy",
    stem: "If a country has a balanced budget and then the country's government increases transfer payments without increasing taxes, which of the following will most likely occur?",
    choices: [
      "The government's budget will move into surplus, and the national debt will fall.",
      "The government's budget will move into surplus, and the national debt will rise.",
      "The government's budget will move into deficit, and the national debt will fall.",
      "The government's budget will move into deficit, and the national debt will rise.",
      "The government's budget will move into surplus, and the national debt will remain unchanged.",
    ],
    correctIndex: 3,
    explanation:
      "Transfer payments are government outlays. Increasing them without raising taxes creates a budget deficit (outlays > revenue). Running a deficit requires borrowing, adding to the national debt.",
    sourceExam: "modeled on 2019 AP Macro released exam Q40",
  },
  {
    id: "re-u3-q43",
    unit: 3,
    topic: "Consumer and business optimism — AD/AS",
    difficulty: "easy",
    stem: "An economy is at full-employment equilibrium. If consumers and firms become more optimistic about future income and profits, which of the following will occur in the short run?",
    choices: [
      "Aggregate demand will shift rightward, increasing real output and decreasing the price level.",
      "Aggregate demand will shift rightward, decreasing real output and increasing the price level.",
      "Aggregate demand will shift rightward, increasing real output and the price level.",
      "Short-run aggregate supply will shift rightward, increasing real output and the price level.",
      "Short-run aggregate supply will shift rightward, decreasing real output and the price level.",
    ],
    correctIndex: 2,
    explanation:
      "Higher optimism boosts consumption and investment, shifting AD rightward. Starting from full employment, the rightward AD shift raises both real output (above potential in the short run) and the price level.",
    sourceExam: "modeled on 2019 AP Macro released exam Q43",
  },
  {
    id: "re-u3-q49",
    unit: 3,
    topic: "Causes of recession",
    difficulty: "easy",
    stem: "Recession can be caused by",
    choices: [
      "an increase in the price level",
      "an increase in exports",
      "a decrease in interest rates",
      "a decrease in aggregate demand",
      "a decrease in wages",
    ],
    correctIndex: 3,
    explanation:
      "A recession is a sustained decline in real GDP. The primary driver is a leftward shift in aggregate demand — consumers and firms spend less, output falls, and unemployment rises.",
    sourceExam: "modeled on 2019 AP Macro released exam Q49",
  },
  {
    id: "re-u3-q51",
    unit: 3,
    topic: "Factors that increase aggregate demand",
    difficulty: "medium",
    stem: "Which of the following will most likely result in an increase in aggregate demand?",
    choices: [
      "An increase in the interest rates charged on credit card balances",
      "A disruption in global oil supply",
      "An open-market purchase of government bonds by the central bank",
      "A reduction of pay and benefits for government employees",
      "A decrease in the wealth of households",
    ],
    correctIndex: 2,
    explanation:
      "An open-market purchase injects reserves, lowers interest rates, stimulates investment and consumption, and shifts AD right. Oil supply disruption is a supply shock; the other options reduce spending and shift AD left.",
    sourceExam: "modeled on 2019 AP Macro released exam Q51",
  },
  {
    id: "re-u3-q59",
    unit: 3,
    topic: "Demand-pull vs. cost-push inflation",
    difficulty: "medium",
    stem: "Which of the following statements about inflation is true in the short run?",
    choices: [
      "During a period of cost-push inflation, the economy's output will rise rapidly, along with the price level.",
      "The basic difference between cost-push and demand-pull inflation lies in the rate at which the price level is rising.",
      "During a period of demand-pull inflation, the economy's output will be stagnant when the price level is rising.",
      "The economy's real output increases when there is demand-pull inflation and decreases when there is cost-push inflation.",
      "Most instances of inflation start out being cost-push, and then turn into demand-pull.",
    ],
    correctIndex: 3,
    explanation:
      "Demand-pull: AD shifts right → output rises and price level rises. Cost-push: SRAS shifts left → output falls (stagflation) and price level rises. These opposite output effects are the key distinction.",
    sourceExam: "modeled on 2019 AP Macro released exam Q59",
  },

  // Unit 4 — Financial Sector
  {
    id: "re-u4-q13",
    unit: 4,
    topic: "Quantity theory of money (MV=PQ)",
    difficulty: "medium",
    stem: "If real output is $9,000, and the price level is 2, and the velocity of money is 3, then the money supply is",
    choices: ["$3,000", "$4,500", "$6,000", "$18,000", "$27,000"],
    correctIndex: 2,
    explanation:
      "Using MV = PQ: M = PQ/V = (2 × 9,000)/3 = 18,000/3 = $6,000.",
    sourceExam: "modeled on 2019 AP Macro released exam Q13",
  },
  {
    id: "re-u4-q21",
    unit: 4,
    topic: "Required reserve ratio, money multiplier, money supply",
    difficulty: "hard",
    stem: "Assume that banks hold no excess reserves. A decrease in the required reserve ratio will cause total reserves in banks, the money multiplier, and the money supply to change in which of the following ways? [Total Reserves | Money Multiplier | Money Supply]",
    choices: [
      "Increase | Increase | Increase",
      "Increase | No change | Increase",
      "No change | Increase | Decrease",
      "Decrease | Decrease | Decrease",
      "No change | Increase | Increase",
    ],
    correctIndex: 4,
    explanation:
      "Lowering the RRR does not change the total dollar amount of reserves — it just reclassifies some required reserves as excess. Money multiplier = 1/RRR → rises. Banks loan out newly freed excess reserves, expanding deposits and the money supply.",
    sourceExam: "modeled on 2019 AP Macro released exam Q21",
  },
  {
    id: "re-u4-q29",
    unit: 4,
    topic: "Loanable funds market — real interest rate",
    difficulty: "medium",
    stem: "Which of the following will cause an increase in the equilibrium real interest rate?",
    choices: [
      "An increase in investment demand",
      "An increase in national saving",
      "An increase in the government budget surplus",
      "A decrease in the government budget deficit",
      "The purchase of government bonds by the central bank",
    ],
    correctIndex: 0,
    explanation:
      "An increase in investment demand shifts the demand for loanable funds rightward, raising the equilibrium real interest rate. The other options increase the supply of loanable funds, which lowers the rate.",
    sourceExam: "modeled on 2019 AP Macro released exam Q29",
  },
  {
    id: "re-u4-q33",
    unit: 4,
    topic: "Open market operations",
    difficulty: "easy",
    stem: "An open-market operation by a country's central bank to reduce the unemployment rate would be to",
    choices: [
      "sell bonds to decrease the interest rate and to increase aggregate demand",
      "sell bonds to increase the interest rate and to decrease aggregate demand",
      "sell bonds to increase the interest rate and to increase investment",
      "buy bonds to decrease the interest rate and to decrease aggregate demand",
      "buy bonds to decrease the interest rate and to increase aggregate demand",
    ],
    correctIndex: 4,
    explanation:
      "To fight unemployment, the central bank uses expansionary monetary policy: buy bonds → inject reserves → money supply rises → interest rates fall → investment and consumption rise → AD shifts right → output and employment increase.",
    sourceExam: "modeled on 2019 AP Macro released exam Q33",
  },
  {
    id: "re-u4-q35",
    unit: 4,
    topic: "Fed sells bonds — money supply",
    difficulty: "easy",
    stem: "Which of the following results when the Federal Reserve sells bonds to commercial banks?",
    choices: [
      "The total assets held by commercial banks will eventually increase.",
      "The money supply decreases.",
      "The discount rate increases.",
      "The public increases its cash holdings.",
      "The required reserve ratio increases because of decreasing excess reserves.",
    ],
    correctIndex: 1,
    explanation:
      "When the Fed sells bonds, commercial banks pay with reserves. Bank reserves fall → lending capacity shrinks → money supply decreases via the money multiplier process.",
    sourceExam: "modeled on 2019 AP Macro released exam Q35",
  },
  {
    id: "re-u4-q44",
    unit: 4,
    topic: "Money demand curve shifters",
    difficulty: "medium",
    stem: "The demand curve for money shifts to the right when",
    choices: [
      "the nominal interest rate decreases",
      "the nominal gross domestic product increases",
      "the real gross domestic product decreases",
      "inflation decreases",
      "the velocity of money increases",
    ],
    correctIndex: 1,
    explanation:
      "Money demand reflects how much money people want to hold for transactions and as an asset. Higher nominal GDP means more transactions → more money demanded at every interest rate → MD shifts right.",
    sourceExam: "modeled on 2019 AP Macro released exam Q44",
  },
  {
    id: "re-u4-q47",
    unit: 4,
    topic: "Tight monetary policy effects",
    difficulty: "medium",
    stem: "In the short run, a tight monetary policy tends to cause",
    choices: [
      "a decrease in the interest rate and a decrease in prices",
      "a decrease in the interest rate and an increase in private investment",
      "a decrease in prices and an increase in private investment",
      "an increase in the interest rate and an increase in private investment",
      "an increase in interest rate and a decrease in private investment",
    ],
    correctIndex: 4,
    explanation:
      "Contractionary ('tight') monetary policy reduces the money supply → interest rates rise → investment falls (higher borrowing costs). In the long run prices fall, but in the short run the primary effect is higher rates and lower investment.",
    sourceExam: "modeled on 2019 AP Macro released exam Q47",
  },
  {
    id: "re-u4-q48",
    unit: 4,
    topic: "Money multiplier calculation",
    difficulty: "medium",
    stem: "If the required reserve ratio is 10 percent, what is the maximum change in the money supply from John's deposit of $50,000 cash into his checking account?",
    choices: ["$5,000", "$45,000", "$55,000", "$450,000", "$500,000"],
    correctIndex: 3,
    explanation:
      "John's cash was already part of M1. When deposited, $5,000 is held as required reserves and $45,000 is loaned out. Via the money multiplier (1/0.10 = 10), the system can expand deposits by $45,000 × 10 = $450,000. Net new money supply = $450,000.",
    sourceExam: "modeled on 2019 AP Macro released exam Q48",
  },
  {
    id: "re-u4-q52",
    unit: 4,
    topic: "Time value of money",
    difficulty: "medium",
    stem: "For Arthur's graduation gift, Arthur's grandmother gives him a choice: he can receive $1,000 today or $1,050 one year from today. At what annual interest rate would Arthur be indifferent to choosing between the two options?",
    choices: ["50%", "10%", "5%", "2.5%", "0.5%"],
    correctIndex: 2,
    explanation:
      "Indifference means PV of $1,050 = $1,000. So $1,050/(1+r) = $1,000 → 1+r = 1.05 → r = 5%. At a 5% interest rate, $1,000 today grows to $1,050 in one year.",
    sourceExam: "modeled on 2019 AP Macro released exam Q52",
  },
  {
    id: "re-u4-q55",
    unit: 4,
    topic: "Budget deficit and monetary accommodation",
    difficulty: "hard",
    stem: "If the government has increased the budget deficit and interest rates have remained constant, which of the following is true?",
    choices: [
      "Government spending is less than tax revenue, and the central bank increases the money supply.",
      "Government spending is greater than tax revenue, and the central bank keeps the money supply constant.",
      "Government spending is greater than tax revenue, and the central bank increases the money supply.",
      "Government spending is greater than tax revenue, and the central bank decreases the money supply.",
      "Government spending is less than tax revenue, and the central bank keeps the money supply constant.",
    ],
    correctIndex: 2,
    explanation:
      "A deficit means G > T. Normally, increased government borrowing raises interest rates. For rates to stay constant, the central bank must accommodate by increasing the money supply, shifting money supply right to offset the rightward shift in money demand.",
    sourceExam: "modeled on 2019 AP Macro released exam Q55",
  },
  {
    id: "re-u4-q56",
    unit: 4,
    topic: "Fisher equation — nominal interest rate",
    difficulty: "medium",
    stem: "Suppose that the real interest rate is equal to seven percent and the expected inflation rate is currently three percent. If an oil crisis in the Middle East increases the expected inflation rate to four percent, the new nominal interest rate is equal to",
    choices: ["3%", "4%", "7%", "11%", "14%"],
    correctIndex: 3,
    explanation:
      "Fisher equation: nominal rate = real rate + expected inflation = 7% + 4% = 11%.",
    sourceExam: "modeled on 2019 AP Macro released exam Q56",
  },
  {
    id: "re-u4-q60",
    unit: 4,
    topic: "Direct increase in money supply",
    difficulty: "easy",
    stem: "Which of the following policy actions will directly increase the money supply?",
    choices: [
      "The central bank purchases government bonds on the open market.",
      "The central bank sells government bonds on the open market.",
      "The government increases taxes without changing its spending.",
      "The government decreases taxes without changing its spending.",
      "The government decreases taxes while simultaneously decreasing its spending.",
    ],
    correctIndex: 0,
    explanation:
      "Open market purchases inject reserves into the banking system, directly increasing the money supply. Fiscal policy (taxes and spending) does not directly change the money supply.",
    sourceExam: "modeled on 2019 AP Macro released exam Q60",
  },

  // Unit 5 — Long-Run Consequences of Stabilization Policies
  {
    id: "re-u5-q2",
    unit: 5,
    topic: "Technology subsidies and long-run supply",
    difficulty: "medium",
    stem: "In the long run, government subsidies that promote the development of technology with widespread business applications will have which of the following effects?",
    choices: [
      "A negative supply shock and lower price level",
      "A negative supply shock and lower economic growth rate",
      "A positive supply shock and lower price level",
      "A positive supply shock and lower economic growth rate",
      "A lower aggregate demand and lower price level",
    ],
    correctIndex: 2,
    explanation:
      "Technology advances increase productivity, shifting LRAS and SRAS rightward (positive supply shock). Greater output at lower cost pushes the price level down and raises the long-run growth rate.",
    sourceExam: "modeled on 2019 AP Macro released exam Q2",
  },
  {
    id: "re-u5-q5",
    unit: 5,
    topic: "Measuring economic growth",
    difficulty: "easy",
    stem: "Economic growth is best measured by a sustained increase in which of the following?",
    choices: [
      "Per capita real gross domestic product",
      "Government budget deficits",
      "Unemployment in unskilled labor markets",
      "Production of public goods",
      "Nominal gross domestic product",
    ],
    correctIndex: 0,
    explanation:
      "Per capita real GDP strips out both population growth and inflation, giving the best measure of whether individuals are actually better off over time. Nominal GDP can rise due to inflation alone.",
    sourceExam: "modeled on 2019 AP Macro released exam Q5",
  },
  {
    id: "re-u5-q6",
    unit: 5,
    topic: "Long-run Phillips curve",
    difficulty: "easy",
    stem: "The long-run Phillips curve indicates that there are no trade-offs between",
    choices: [
      "aggregate demand and aggregate supply",
      "imports and exports",
      "consumption and investment",
      "consumption and saving",
      "inflation and unemployment",
    ],
    correctIndex: 4,
    explanation:
      "The LRPC is vertical at the natural rate of unemployment. In the long run, monetary or fiscal stimulus raises inflation but cannot permanently reduce unemployment below the natural rate — there is no lasting trade-off.",
    sourceExam: "modeled on 2019 AP Macro released exam Q6",
  },
  {
    id: "re-u5-q15",
    unit: 5,
    topic: "Factors that increase long-run real GDP",
    difficulty: "medium",
    stem: "All of the following may result in increases in real gross domestic product in the long run EXCEPT",
    choices: [
      "technical progress",
      "investment in human capital",
      "discovery of new natural resources",
      "decrease in corporate taxes",
      "decrease in factor productivity",
    ],
    correctIndex: 4,
    explanation:
      "A decrease in factor productivity means resources produce less output — this shifts LRAS left, reducing potential GDP. All other choices expand the productive capacity of the economy.",
    sourceExam: "modeled on 2019 AP Macro released exam Q15",
  },
  {
    id: "re-u5-q17",
    unit: 5,
    topic: "Movement along the short-run Phillips curve",
    difficulty: "hard",
    stem: "Referring to the short-run Phillips curve graph (with point S on the SRPC and point R above and to the left of S), which of the following would cause a movement from point S to point R?",
    choices: [
      "An unanticipated increase in government spending",
      "An unanticipated adverse supply shock",
      "A decrease in net investment",
      "An increase in real interest rates",
      "An increase in the labor-force participation rate",
    ],
    correctIndex: 0,
    explanation:
      "On the SRPC (unemployment on x-axis, inflation on y-axis), moving up and to the left means lower unemployment and higher inflation. Unanticipated expansionary fiscal policy shifts AD right, moving the economy along the SRPC toward lower unemployment and higher inflation.",
    sourceExam: "modeled on 2019 AP Macro released exam Q17",
  },
  {
    id: "re-u5-q18",
    unit: 5,
    topic: "Contractionary fiscal policy and unemployment",
    difficulty: "medium",
    stem: "If policy makers use fiscal policy to reduce inflation, which of the following will most likely happen in the short run?",
    choices: [
      "The unemployment rate will decrease.",
      "The unemployment rate will increase.",
      "The real interest rate will increase.",
      "The nominal interest rate will increase.",
      "The economy will remain at the natural rate of unemployment.",
    ],
    correctIndex: 1,
    explanation:
      "Contractionary fiscal policy (spending cuts or tax increases) shifts AD left, reducing output and price level. With lower output, firms lay off workers — unemployment rises in the short run. This is the standard inflation-unemployment trade-off on the SRPC.",
    sourceExam: "modeled on 2019 AP Macro released exam Q18",
  },
  {
    id: "re-u5-q19",
    unit: 5,
    topic: "Crowding out",
    difficulty: "easy",
    stem: "Crowding out occurs when investment spending by the private sector decreases as a result of",
    choices: [
      "decreasing interest rates caused by an increase in the supply of government bonds",
      "decreasing interest rates caused by a decrease in the demand for loanable funds",
      "decreasing interest rates caused by an increase in government borrowing",
      "increasing interest rates caused by an increase in government borrowing",
      "increasing interest rates caused by a decrease in government borrowing",
    ],
    correctIndex: 3,
    explanation:
      "Crowding out: the government borrows more → demand for loanable funds rises → real interest rate rises → private firms face higher borrowing costs → private investment falls.",
    sourceExam: "modeled on 2019 AP Macro released exam Q19",
  },
  {
    id: "re-u5-q23",
    unit: 5,
    topic: "Long-run effects of money supply expansion",
    difficulty: "hard",
    stem: "In the long run, a fully anticipated expansion of the money supply will",
    choices: [
      "increase both the price level and real gross domestic product",
      "increase the price level and decrease the real wage",
      "increase both the price level and the real wage",
      "increase both the nominal gross domestic product and the price level",
      "increase both the nominal and real gross domestic product",
    ],
    correctIndex: 3,
    explanation:
      "Money is neutral in the long run. A fully anticipated money supply expansion raises the price level proportionally but leaves real variables (real GDP, real wages) unchanged. Nominal GDP = P × Y rises because P rises while Y stays constant.",
    sourceExam: "modeled on 2019 AP Macro released exam Q23",
  },
  {
    id: "re-u5-q24",
    unit: 5,
    topic: "Policies that promote long-run growth",
    difficulty: "easy",
    stem: "Which of the following policy actions will promote long-run economic growth?",
    choices: [
      "Decreasing the investment tax credit",
      "Decreasing the money supply",
      "Increasing unemployment compensation",
      "Increasing investment in human capital",
      "Increasing tax rates on savings income",
    ],
    correctIndex: 3,
    explanation:
      "Investment in human capital (education, job training) raises worker productivity, shifting LRAS rightward and boosting long-run potential output.",
    sourceExam: "modeled on 2019 AP Macro released exam Q24",
  },
  {
    id: "re-u5-q30",
    unit: 5,
    topic: "Policies that promote long-run growth",
    difficulty: "easy",
    stem: "Which of the following will most likely promote long-run economic growth?",
    choices: [
      "Increasing taxes on interest earned from savings",
      "Increasing consumption spending on food and entertainment",
      "Increasing funding for research and development",
      "Decreasing funding for law enforcement and judicial systems",
      "Rapidly harvesting timber and mineral resources",
    ],
    correctIndex: 2,
    explanation:
      "R&D investment leads to technological progress, which increases productivity and shifts LRAS rightward. The other options either reduce savings/investment or deplete resources needed for future production.",
    sourceExam: "modeled on 2019 AP Macro released exam Q30",
  },
  {
    id: "re-u5-q38",
    unit: 5,
    topic: "Tax, interest rate, and investment for growth",
    difficulty: "medium",
    stem: "Which of the following combinations of changes in income taxes, real interest rate, and investment spending is most likely to promote economic growth? [Income Taxes | Interest Rate | Investment]",
    choices: [
      "Increase | Increase | Increase",
      "Increase | Increase | Decrease",
      "Increase | Decrease | Decrease",
      "Decrease | Decrease | Decrease",
      "Decrease | Decrease | Increase",
    ],
    correctIndex: 4,
    explanation:
      "Lower income taxes raise after-tax returns on saving and investment. Lower real interest rates reduce borrowing costs. Both encourage more investment, which drives capital accumulation and long-run growth.",
    sourceExam: "modeled on 2019 AP Macro released exam Q38",
  },
  {
    id: "re-u5-q45",
    unit: 5,
    topic: "Stagflation and the short-run Phillips curve",
    difficulty: "medium",
    stem: "An increase in both the inflation rate and the unemployment rate can be illustrated by",
    choices: [
      "a movement along the short-run Phillips curve",
      "a rightward shift of the short-run Phillips curve",
      "a leftward shift of the short-run Phillips curve",
      "a rightward shift of the aggregate demand curve",
      "a leftward shift of the aggregate demand curve",
    ],
    correctIndex: 1,
    explanation:
      "Higher inflation AND higher unemployment simultaneously is stagflation, caused by an adverse supply shock. This shifts the SRPC rightward (upward): at every unemployment rate, inflation is higher.",
    sourceExam: "modeled on 2019 AP Macro released exam Q45",
  },
  {
    id: "re-u5-q53",
    unit: 5,
    topic: "Long-run effect of AD increase",
    difficulty: "medium",
    stem: "Assume a country's economy is currently in long-run equilibrium. What is the long-run effect of an increase in aggregate demand?",
    choices: [
      "A decrease in the unemployment rate",
      "A decrease in the inflation rate",
      "A decrease in the long-run aggregate supply",
      "An increase in the price level",
      "An increase in the money supply",
    ],
    correctIndex: 3,
    explanation:
      "Starting from long-run equilibrium, an AD increase raises output above potential in the short run. Workers then demand higher wages, SRAS shifts left, returning output to potential at a permanently higher price level. Real output and unemployment return to their natural rates.",
    sourceExam: "modeled on 2019 AP Macro released exam Q53",
  },
  {
    id: "re-u5-q57",
    unit: 5,
    topic: "Human capital investment — AD and AS effects",
    difficulty: "hard",
    stem: "Government investment in human capital is likely to shift",
    choices: [
      "the aggregate demand curve to the right in the short run and the aggregate supply curve to the right in the long run",
      "the aggregate demand curve to the left in the short run and the aggregate supply curve to the left in the long run",
      "the aggregate demand curve to the right in the short run and the long-run Phillips curve to the right",
      "the aggregate demand curve to the left in the long run",
      "the aggregate demand curve to the left in the short run and the long-run Phillips curve to the left",
    ],
    correctIndex: 0,
    explanation:
      "Government spending on education/training is a component of G, shifting AD right in the short run. Over time, a more skilled workforce raises productivity, shifting SRAS and LRAS right. The long-run Phillips curve shifts left (lower natural unemployment rate).",
    sourceExam: "modeled on 2019 AP Macro released exam Q57",
  },

  // Unit 6 — Open Economy
  {
    id: "re-u6-q8",
    unit: 6,
    topic: "FOREX — preferences and currency supply",
    difficulty: "medium",
    stem: "The graph shows the foreign exchange market for United States dollars in terms of Japanese yen. Assume that there is an increase in United States consumers' preference for Japanese automobiles. Which of the following changes will most likely take place in the market for dollars?",
    choices: [
      "It will take more yen to purchase the same amount of dollars.",
      "The demand for dollars will increase.",
      "The supply of dollars will increase.",
      "Both the demand for and the supply of dollars will decrease.",
      "There will be no change in the foreign exchange market.",
    ],
    correctIndex: 2,
    explanation:
      "To buy Japanese cars, U.S. consumers must convert dollars into yen. They sell dollars and buy yen, increasing the supply of dollars in the FOREX market. More dollars supplied → the dollar depreciates relative to the yen.",
    sourceExam: "modeled on 2019 AP Macro released exam Q8",
  },
  {
    id: "re-u6-q25",
    unit: 6,
    topic: "Current account transactions",
    difficulty: "medium",
    stem: "Which of the following transactions would increase the current account surplus in Japan's balance of payments accounts?",
    choices: [
      "A Japan-based company sells roasted coffee to Canada.",
      "Mari, a Japanese investor, buys stocks in a Japanese company.",
      "Bob, a Canadian, buys stocks in a Japanese company.",
      "A Japan-based company buys a piece of equipment from Germany.",
      "Artois, a French citizen, works at a Japanese company in Paris.",
    ],
    correctIndex: 0,
    explanation:
      "Japan's current account records trade in goods and services. Selling (exporting) coffee to Canada is an export that brings money into Japan, increasing Japan's current account surplus. Stock purchases are financial account transactions.",
    sourceExam: "modeled on 2019 AP Macro released exam Q25",
  },
  {
    id: "re-u6-q31",
    unit: 6,
    topic: "Exchange rate definition",
    difficulty: "easy",
    stem: "In the foreign exchange market, the exchange rate is defined as",
    choices: [
      "the price of one currency in terms of another currency",
      "the price of goods around the world",
      "the price of a good in terms of another good",
      "the discount that companies take when goods are returned",
      "the quantity of a good to be traded for a unit of another good",
    ],
    correctIndex: 0,
    explanation:
      "The exchange rate is simply the price of one country's currency expressed in units of another country's currency (e.g., ¥110 per $1).",
    sourceExam: "modeled on 2019 AP Macro released exam Q31",
  },
  {
    id: "re-u6-q36",
    unit: 6,
    topic: "Current account deficit and financial account",
    difficulty: "medium",
    stem: "Which of the following is true of a current account deficit?",
    choices: [
      "It is caused by a trade surplus.",
      "It must be financed with an equally large surplus of exports.",
      "It is caused by a deficit in the financial (capital) account.",
      "It will self-correct in the following year.",
      "It is financed by a surplus in the financial (capital) account.",
    ],
    correctIndex: 4,
    explanation:
      "The balance of payments must sum to zero. A current account deficit (spending abroad > earning from abroad) must be offset by a financial account surplus (foreigners investing more in the country than residents invest abroad).",
    sourceExam: "modeled on 2019 AP Macro released exam Q36",
  },
  {
    id: "re-u6-q39",
    unit: 6,
    topic: "Open market sales — dollar value and exports",
    difficulty: "hard",
    stem: "Assume that the United States central bank sells government bonds on the open market. How will the sale affect the value of the United States dollar on the foreign exchange market and United States exports? [Value of the Dollar | Exports]",
    choices: [
      "Increase | Decrease",
      "No change | Decrease",
      "Decrease | Decrease",
      "Decrease | Increase",
      "Increase | Increase",
    ],
    correctIndex: 0,
    explanation:
      "Selling bonds → MS decreases → interest rates rise → foreign capital flows in seeking higher returns → demand for dollars increases → dollar appreciates. A stronger dollar makes U.S. exports more expensive for foreigners → exports decrease.",
    sourceExam: "modeled on 2019 AP Macro released exam Q39",
  },
  {
    id: "re-u6-q46",
    unit: 6,
    topic: "Balance of payments calculation",
    difficulty: "medium",
    stem: "Assume Country X has the following international transactions (in billions of dollars): Exports: $400, Imports: $330, Foreign purchases of Country X's assets: $210, Country X's purchase of foreign assets: $280. What is the balance on the current account (in billions of dollars)?",
    choices: ["−140", "−70", "0", "+70", "+140"],
    correctIndex: 3,
    explanation:
      "Current account balance = Exports − Imports = $400 − $330 = +$70 billion (surplus). Asset purchases are financial account transactions and do not affect the current account.",
    sourceExam: "modeled on 2019 AP Macro released exam Q46",
  },
  {
    id: "re-u6-q54",
    unit: 6,
    topic: "Safe haven capital flows and exchange rates",
    difficulty: "hard",
    stem: "If foreign financial investors no longer see country A as a safe haven, which of the following will most likely occur in the short run?",
    choices: [
      "Country A's currency will appreciate.",
      "Country A's currency will depreciate.",
      "Country A's current account will move toward deficit.",
      "Country A's financial account will move toward surplus.",
      "Tariff revenues received by country A will decrease as investors seek investment elsewhere.",
    ],
    correctIndex: 1,
    explanation:
      "If investors lose confidence in country A, they pull capital out (financial account moves toward deficit). Selling country A's assets means selling its currency → supply of the currency rises → the currency depreciates.",
    sourceExam: "modeled on 2019 AP Macro released exam Q54",
  },
];

export function questionsByUnit(unit: UnitId): MCQItem[] {
  return MCQ_BANK.filter((q) => q.unit === unit);
}

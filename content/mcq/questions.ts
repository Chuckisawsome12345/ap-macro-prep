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
];

export function questionsByUnit(unit: UnitId): MCQItem[] {
  return MCQ_BANK.filter((q) => q.unit === unit);
}

import { searchKnowledgePDF } from "../src/lib/chatbot/pdfKnowledgeEngine";

interface TestCase {
  id: number;
  question: string;
  expectedCheck: (answer: string, result: any) => boolean;
  expectedDescription: string;
}

const testCases: TestCase[] = [
  {
    id: 1,
    question: "Which properties are co-living?",
    expectedCheck: (ans) =>
      ans.includes("Nirvana") && ans.includes("Moksha") && ans.includes("Vipasna"),
    expectedDescription: "Names Nirvana, Moksha, and Vipasna as co-living",
  },
  {
    id: 2,
    question: "Which properties are student accommodation?",
    expectedCheck: (ans) =>
      ans.includes("Shubh Gateway") && ans.includes("Brindavan") && ans.includes("Vairagya"),
    expectedDescription: "Names Shubh Gateway, Brindavan, and Vairagya as student accommodation",
  },
  {
    id: 3,
    question: "Are Park Island and Pillar Homes available as regular PGs?",
    expectedCheck: (ans) =>
      (ans.toLowerCase().includes("company guesthouses") || ans.toLowerCase().includes("dedicated company")) &&
      (ans.toLowerCase().includes("not available as regular") || ans.toLowerCase().includes("not open to the general public") || ans.toLowerCase().includes("no")),
    expectedDescription: "Explains they are company guesthouses for employees of one dedicated company, not regular PGs",
  },
  {
    id: 4,
    question: "What is the cheapest Reforbs room?",
    expectedCheck: (ans) =>
      ans.includes("Vairagya") && (ans.includes("15,000") || ans.includes("₹15,000")),
    expectedDescription: "Identifies Vairagya triple sharing at ₹15,000/month",
  },
  {
    id: 5,
    question: "What is the rent for Nirvana twin sharing?",
    expectedCheck: (ans) =>
      ans.includes("Nirvana") && (ans.includes("17,000") || ans.includes("₹17,000")),
    expectedDescription: "States Nirvana twin sharing is ₹17,000/month",
  },
  {
    id: 6,
    question: "What is the private room rent at Moksha?",
    expectedCheck: (ans) =>
      ans.includes("Moksha") && (ans.includes("24,000") || ans.includes("₹24,000")),
    expectedDescription: "States Moksha private room is ₹24,000/month",
  },
  {
    id: 7,
    question: "How much is Shubh Gateway girls' twin sharing?",
    expectedCheck: (ans) =>
      ans.includes("Shubh Gateway") && (ans.includes("25,000") || ans.includes("₹25,000")),
    expectedDescription: "States Shubh Gateway girls' twin sharing is ₹25,000/month",
  },
  {
    id: 8,
    question: "How much is Shubh Gateway boys' twin sharing?",
    expectedCheck: (ans) =>
      ans.includes("Shubh Gateway") && (ans.includes("27,000") || ans.includes("₹27,000")),
    expectedDescription: "States Shubh Gateway boys' twin sharing is ₹27,000/month",
  },
  {
    id: 9,
    question: "What is the triple-sharing rent at Vairagya?",
    expectedCheck: (ans) =>
      ans.includes("Vairagya") && (ans.includes("15,000") || ans.includes("₹15,000")),
    expectedDescription: "States Vairagya triple sharing is ₹15,000/month",
  },
  {
    id: 10,
    question: "Which properties are couple-friendly?",
    expectedCheck: (ans) =>
      ans.includes("Nirvana") && ans.includes("Moksha") && ans.includes("Vipasna"),
    expectedDescription: "Identifies Nirvana, Moksha, and Vipasna as couple-friendly",
  },
  {
    id: 11,
    question: "Can I stay with my boyfriend at Nirvana?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("yes") && ans.toLowerCase().includes("couple-friendly"),
    expectedDescription: "Answers Yes, Nirvana is marked Yes for couple-friendly eligibility",
  },
  {
    id: 12,
    question: "Is Vairagya air-conditioned?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("no") && (ans.toLowerCase().includes("non-ac") || ans.toLowerCase().includes("no ac")),
    expectedDescription: "Answers No, Vairagya is marked as non-AC",
  },
  {
    id: 13,
    question: "Is food included at Brindavan?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("yes") && (ans.toLowerCase().includes("all 3") || (ans.toLowerCase().includes("breakfast") && ans.toLowerCase().includes("lunch") && ans.toLowerCase().includes("dinner"))),
    expectedDescription: "Answers Yes, all 3 meals are included at Brindavan",
  },
  {
    id: 14,
    question: "Is food optional at Moksha?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("yes") && ans.toLowerCase().includes("optional"),
    expectedDescription: "Answers Yes, food is available and optional at Moksha",
  },
  {
    id: 15,
    question: "How often is laundry included at Shubh Gateway?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("twice") && (ans.toLowerCase().includes("5 kg") || ans.toLowerCase().includes("weekly") || ans.toLowerCase().includes("week")),
    expectedDescription: "States laundry is included twice weekly (up to 5 kg)",
  },
  {
    id: 16,
    question: "Is laundry free at Nirvana?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("self-use") && ans.toLowerCase().includes("washing machine"),
    expectedDescription: "Explains self-use washing machines and optional paid laundry",
  },
  {
    id: 17,
    question: "Is there a lock-in at Nirvana?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("no") && ans.toLowerCase().includes("lock-in"),
    expectedDescription: "States No lock-in period at Nirvana",
  },
  {
    id: 18,
    question: "Is there an annual lock-in at Brindavan?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("yes") && ans.toLowerCase().includes("annual"),
    expectedDescription: "States Yes, annual lock-in at Brindavan",
  },
  {
    id: 19,
    question: "Are opposite-gender visitors allowed at Shubh Gateway?",
    expectedCheck: (ans) =>
      (ans.toLowerCase().includes("not allowed") || ans.toLowerCase().includes("strictly not allowed")) &&
      ans.toLowerCase().includes("opposite"),
    expectedDescription: "States opposite-gender visitors are not allowed",
  },
  {
    id: 20,
    question: "Is there a curfew?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("no curfew") || ans.toLowerCase().includes("no entry-time restrictions"),
    expectedDescription: "States no curfew or entry-time restrictions",
  },
  {
    id: 21,
    question: "Are pets allowed?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("no") && ans.toLowerCase().includes("not allowed"),
    expectedDescription: "States No, pets are not allowed",
  },
  {
    id: 22,
    question: "Can I smoke or drink with flatmate consent?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("yes") && ans.toLowerCase().includes("consent"),
    expectedDescription: "States Yes, with consent of flatmates",
  },
  {
    id: 23,
    question: "Is the deposit refundable?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("yes") && ans.toLowerCase().includes("30") && ans.toLowerCase().includes("notice"),
    expectedDescription: "States Yes, fully refundable with 30-day notice and no damage",
  },
  {
    id: 24,
    question: "What happens if I cancel?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("no refund") && ans.toLowerCase().includes("cancellation"),
    expectedDescription: "States no refund in case of cancellation",
  },
  {
    id: 25,
    question: "What payment methods are accepted?",
    expectedCheck: (ans) =>
      ans.includes("UPI") && (ans.includes("card") || ans.includes("NEFT") || ans.includes("cash")),
    expectedDescription: "Lists UPI, credit card, NEFT/IMPS, and cash",
  },
  {
    id: 26,
    question: "What is the address of Suyog Enclave?",
    expectedCheck: (ans) =>
      ans.includes("64P") && ans.includes("Bajaj Finserv"),
    expectedDescription: "Provides 64P, behind Bajaj Finserv, Sakore Nagar Road",
  },
  {
    id: 27,
    question: "Which college is closest to Brindavan?",
    expectedCheck: (ans) =>
      ans.includes("Symbiosis Management College") && ans.includes("400 m"),
    expectedDescription: "Identifies Symbiosis Management College at 400 m",
  },
  {
    id: 28,
    question: "Where is Vairagya located?",
    expectedCheck: (ans) =>
      ans.includes("Lavale") && ans.includes("Symbiosis"),
    expectedDescription: "Identifies Lavale, near Symbiosis Univ, notes complete address not in doc",
  },
  {
    id: 29,
    question: "Is a room available tomorrow?",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      res?.phoneTarget === "7420040241" &&
      ans.toLowerCase().includes("call us") &&
      (ans.toLowerCase().includes("not supplied") || ans.toLowerCase().includes("live availability")),
    expectedDescription: "Routes to Call Us button (phoneTarget 7420040241) without visible numbers",
  },
  {
    id: 30,
    question: "How can I book a visit?",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      res?.phoneTarget === "7420040241" &&
      ans.toLowerCase().includes("call us") &&
      ans.toLowerCase().includes("visit"),
    expectedDescription: "Directs to Call Us button (phoneTarget 7420040241) to arrange a visit",
  },
  {
    id: 31,
    question: "What is the maintenance helpline number?",
    expectedCheck: (ans) =>
      ans.toLowerCase().includes("not included") || ans.toLowerCase().includes("not present") || ans.toLowerCase().includes("do not invent"),
    expectedDescription: "States helpline number is not included in the owner document",
  },
  {
    id: 32,
    question: "What is your contact number?",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      !ans.toLowerCase().includes("arpit") &&
      res?.phoneTarget === "7420040241" &&
      ans.toLowerCase().includes("call us"),
    expectedDescription: "Speaks via Call Us button with zero visible numbers and zero Arpit",
  },
  {
    id: 33,
    question: "How can I call Reforbs?",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      !ans.toLowerCase().includes("arpit") &&
      res?.phoneTarget === "7420040241" &&
      ans.toLowerCase().includes("call us"),
    expectedDescription: "Directs to Call Us button without visible phone number",
  },
  {
    id: 34,
    question: "Can I speak to Arpit?",
    expectedCheck: (ans, res) =>
      !ans.toLowerCase().includes("arpit") &&
      res?.phoneTarget === "7420040241" &&
      ans.includes("Reforbs properties are managed by our dedicated property management teams"),
    expectedDescription: "Politely responds without mentioning Arpit and provides Call Us button",
  },
  {
    id: 35,
    question: "How do I contact the property manager?",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      res?.phoneTarget === "7420040241" &&
      ans.includes("Each Reforbs property has its own management team"),
    expectedDescription: "Directs to Call Us button for property management team",
  },
  {
    id: 36,
    question: "How can I check room availability?",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      res?.phoneTarget === "7420040241" &&
      ans.toLowerCase().includes("call us"),
    expectedDescription: "States live availability is handled via Call Us button",
  },
  {
    id: 37,
    question: "Can you give me the Shubh Gateway phone number?",
    expectedCheck: (ans, res) =>
      !ans.includes("7057897430") &&
      res?.phoneTarget === "7057897430" &&
      ans.toLowerCase().includes("call us") &&
      ans.includes("Shubh Gateway"),
    expectedDescription: "Provides Call Us button routed specifically to Shubh Gateway (7057897430)",
  },
  {
    id: 38,
    question: "I want to contact Moksha management.",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      res?.phoneTarget === "7420040241" &&
      ans.toLowerCase().includes("call us") &&
      ans.includes("Moksha"),
    expectedDescription: "Provides Call Us button routed to Moksha (7420040241)",
  },
  {
    id: 39,
    question: "How can I schedule a visit?",
    expectedCheck: (ans, res) =>
      !ans.includes("7420040241") &&
      res?.phoneTarget === "7420040241" &&
      ans.toLowerCase().includes("call us") &&
      ans.toLowerCase().includes("visit"),
    expectedDescription: "Explains visit scheduling via Call Us button",
  },
];

async function runTests() {
  console.log("=== RUNNING REFORBS CHATBOT OWNER Q&A KNOWLEDGE TESTS (31 TEST CASES) ===\n");
  let passedCount = 0;

  for (const tc of testCases) {
    const result = await searchKnowledgePDF(tc.question);
    const passed = tc.expectedCheck(result.text, result);

    console.log(`[Q${tc.id}] "${tc.question}"`);
    console.log(`Source: ${result.sourceLabel} | Page: ${result.pageNumber} | Fallback: ${result.isFallback}`);
    console.log(`Answer:\n${result.text}`);
    if (passed) {
      console.log(`-> PASS: ${tc.expectedDescription}\n`);
      passedCount++;
    } else {
      console.log(`-> FAIL: Expected: ${tc.expectedDescription}\n`);
    }
    console.log("-".repeat(80));
  }

  console.log(`\nTEST RESULTS: ${passedCount}/${testCases.length} tests passed.`);
  if (passedCount === testCases.length) {
    console.log("SUCCESS: 100% PASS RATE ON ALL OWNER Q&A TEST CASES!");
    process.exit(0);
  } else {
    console.error("FAILURE: Some test cases failed.");
    process.exit(1);
  }
}

runTests();

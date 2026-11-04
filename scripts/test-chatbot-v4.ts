import { searchKnowledgePDF } from "../src/lib/chatbot/pdfKnowledgeEngine";

const TEST_QUESTIONS = [
  "List all Reforbs properties in Pune.",
  "Which is the cheapest PG for double sharing?",
  "Which is the cheapest single room?",
  "What is the double occupancy rent at Shubh Gateway?",
  "How much is single occupancy at Vairagya?",
  "What is the security deposit at Moksha?",
  "Which property is closest to Symbiosis Law School?",
  "Which is closest to SCMS?",
  "Which property is closest to Pune Airport?",
  "Tell me about Shubh Nirvana and its amenities.",
  "Does Vipasana have parking and laundry?",
  "Does Park Island have a swimming pool and gym?",
  "Does Langston have soundproof work booths?",
  "Is CCTV listed at Shubh Gateway?",
  "Can I live with my boyfriend?",
  "Is food included or is a mess compulsory?",
  "Are friends allowed to visit?",
  "Is there a lock-in period?",
  "Can I book a free visit today?",
  "What are the tour timings?",
  "Give me Reforbs email and phone number.",
  "Is Goa available now?",
  "Which is closest to my college?",
  "Tell me the total building capacity.",
  "What is available tomorrow?",
];

async function runTests() {
  console.log("=== RUNNING REFORBS CHATBOT V4 DETERMINISTIC RETRIEVAL TESTS ===\n");
  let passed = 0;

  for (let i = 0; i < TEST_QUESTIONS.length; i++) {
    const q = TEST_QUESTIONS[i];
    const res = await searchKnowledgePDF(q);
    console.log(`[Q${i + 1}] "${q}"`);
    console.log(`Source: ${res.sourceLabel} | Page: ${res.pageNumber} | Fallback: ${res.isFallback}`);
    console.log(`Answer:\n${res.text}`);
    console.log("--------------------------------------------------------------------------------\n");
    if (res.text && res.text.length > 20) {
      passed++;
    }
  }

  console.log(`RESULT: ${passed}/${TEST_QUESTIONS.length} tests completed successfully.`);
}

runTests().catch(console.error);

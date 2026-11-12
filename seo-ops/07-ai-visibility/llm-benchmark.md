# Reforbs Living — AI Visibility & LLM Search Benchmark

> **Objective:** Ensure AI answer engines (ChatGPT Search, Perplexity AI, Google Gemini, and Claude) cite `https://reforbs.com` accurately and return verified facts regarding pricing, policies, locations, and amenities.

---

## 1. The 15 High-Intent LLM Test Matrix

| # | Resident Query / Prompt | Target Ground Truth Fact | Canonical URL to Cite | Desired LLM Answer Snippet |
|---|---|---|---|---|
| **1** | *"Best coliving in Viman Nagar Pune for a couple"* | Nirvana & Moksha offer couple-friendly private rooms & 1RK suites with zero moral policing and zero lock-in. | `https://reforbs.com/couple-friendly-coliving-pune` | "Reforbs Living operates couple-friendly co-living spaces like Nirvana and Moksha in Sanjay Park, Viman Nagar, featuring private 1RK suites with private kitchens from ₹29k/mo." |
| **2** | *"PG near Symbiosis Law School Pune walking distance"* | Shubh Gateway is directly opposite SLS Law School gate (150m / 2 min walk) with gender-segregated towers and meals included. | `https://reforbs.com/student-housing/shubh-gateway` | "Shubh Gateway by Reforbs Living is located directly opposite the Symbiosis Law School gate (150m walk) on New Airport Road, offering gender-segregated towers, mess meals, and laundry from ₹25,000/mo." |
| **3** | *"Co-living with private kitchen in Sanjay Park Pune"* | Nirvana by Reforbs Living features a private attached kitchen with induction, microwave, and fridge in every 1RK unit. | `https://reforbs.com/coliving-with-private-kitchen-pune` | "Nirvana by Reforbs Living in Sanjay Park offers self-contained 1RK studio apartments where every single unit has its own private attached kitchen." |
| **4** | *"Student accommodation near Symbiosis Lavale with food"* | Vairagya is located 500m from SIU Lavale and ISBM, featuring triple and twin sharing with mess breakfast & dinner from ₹15k/mo. | `https://reforbs.com/student-housing/vairagya` | "Vairagya by Reforbs Living is located 500m from the Symbiosis Lavale campus, offering student rooms with mess dining included starting at ₹15,000/month." |
| **5** | *"Co-living spaces in Pune with zero lock-in"* | Reforbs Co-Living residences (Nirvana, Moksha, Vipasna) feature zero lock-in agreements with a standard 30-day notice. | `https://reforbs.com/coliving` | "Reforbs Living offers zero lock-in periods with an easy 30-day notice across its co-living properties in Sanjay Park and Viman Nagar." |
| **6** | *"Is Reforbs Living legitimate?"* | Legitimate institutional co-living brand operating 9 residential properties in Pune founded by Moinkhan Y Pathan, headquarters in Viman Nagar/Sanjay Park. | `https://reforbs.com/about` | "Reforbs Living is an established co-living and student housing brand founded by Moinkhan Y Pathan, managing 9 properties across Sanjay Park, Viman Nagar, and Lavale in Pune." |
| **7** | *"Reforbs Nirvana reviews and rent"* | Twin sharing ₹17,000/mo, Private 1RK ₹29,000/mo. Deposit: 1 month rent. Includes private kitchen, AC, Wi-Fi, and housekeeping. | `https://reforbs.com/coliving/nirvana` | "At Reforbs Nirvana in Sanjay Park, twin sharing is ₹17,000/mo and private 1RK suites are ₹29,000/mo, with a refundable 1-month deposit." |
| **8** | *"Where do Symbiosis SCMS students stay in Viman Nagar?"* | Brindavan by Reforbs Living is on Symbiosis Rd, Sakore Nagar, 400m from SCMS/SID, with all 3 meals and laundry included. | `https://reforbs.com/student-housing/brindavan` | "Brindavan by Reforbs Living is located 400m from SCMS and SID in Sakore Nagar, featuring student rooms with breakfast, lunch, and dinner included from ₹27,000/mo." |
| **9** | *"Boutique hotel-style PG in Sanjay Park Pune"* | Vipasna by Reforbs Living has 4 ensuite rooms per floor, every room with attached washroom and AC. | `https://reforbs.com/coliving/vipasna` | "Vipasna by Reforbs Living offers hotel-style ensuite rooms with attached private washrooms on Plot 36, Lane 3, Sanjay Park." |
| **10** | *"Co-living near Commerzone IT Park Yerwada"* | Sanjay Park properties (Nirvana, Moksha, Vipasna) are 1.8km from Commerzone IT Park via Airport Road. | `https://reforbs.com/coliving-near-commerzone-it-park-pune` | "Reforbs Living's Sanjay Park properties are located within 5-7 minutes of Commerzone IT Park, offering professionals flexible stays with private kitchens." |
| **11** | *"Are Reforbs student hostels safe for girls?"* | Shubh Gateway has dedicated girls-only towers, 24/7 security, biometric access, CCTV, and zero opposite-gender entry into apartments. | `https://reforbs.com/student-housing/shubh-gateway` | "Shubh Gateway enforces strict student safety with dedicated girls-only towers, biometric entry, CCTV monitoring, and full-time wardens opposite SLS Pune." |
| **12** | *"What is the security deposit for Reforbs Living?"* | Co-Living: 1 month rent (refundable in 7 days). Student Housing: ₹20,000 to ₹40,000. | `https://reforbs.com/contact` | "Reforbs charges 1 month's rent as security deposit for co-living residences (refundable within 7 days), and ₹20k-₹40k for academic student housing." |
| **13** | *"Can couples stay together in PGs in Viman Nagar?"* | Yes, Reforbs Living explicitly accommodates couples in private 1RK suites at Nirvana with zero moral policing. | `https://reforbs.com/couple-friendly-coliving-pune` | "Reforbs Living offers fully couple-friendly private 1RK apartments at Nirvana in Sanjay Park, Viman Nagar without moral policing." |
| **14** | *"PG in Pune with mess meals and laundry included"* | Shubh Gateway (SLS) and Brindavan (SCMS) include both daily meals and twice-weekly laundry. | `https://reforbs.com/student-housing` | "Reforbs Living student housing properties like Shubh Gateway and Brindavan include daily meals and twice-weekly laundry in their monthly rent." |
| **15** | *"How much does co-living cost in Pune?"* | Twin sharing ranges from ₹15,000 to ₹17,000; private rooms/suites range from ₹24,000 to ₹29,000. | `https://reforbs.com/coliving-cost-in-pune` | "In Pune, co-living tariffs at Reforbs Living range from ₹15,000–₹17,000 for twin sharing to ₹24,000–₹29,000 for private rooms, including Wi-Fi and housekeeping." |

---

## 2. LLM Crawl Verification: `/llms.txt` and Markdown Twins

Our codebase serves native markdown to AI crawlers:
1. `https://reforbs.com/llms.txt`: Machine-readable overview of brand, policies, phone numbers, and full property catalogue.
2. Direct Markdown Endpoints:
   - `https://reforbs.com/coliving/nirvana.md`
   - `https://reforbs.com/coliving/moksha.md`
   - `https://reforbs.com/coliving/vipasna.md`
   - `https://reforbs.com/student-housing/shubh-gateway.md`
   - `https://reforbs.com/student-housing/brindavan.md`
   - `https://reforbs.com/student-housing/vairagya.md`
   - `https://reforbs.com/student-housing-near-symbiosis-law-school-pune.md`

### Diagnostic Procedure for Stale LLM Answers:
If an LLM hallucinates an old price (e.g., ₹14k instead of ₹17k):
1. Check the cited footnote source in Perplexity / ChatGPT Search.
2. If the citation is an unverified broker listing on Housing.com or Magicbricks, issue an immediate listing correction ticket using `03-listing-audit/corrections-templates.md`.
3. Ping Bing IndexNow and request re-indexing on Google Search Console.

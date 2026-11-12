# Reforbs Living — Weekly & Monthly Offsite SEO Operating Routine

> **Objective:** Maintain high local search rankings, ensure 100% NAP consistency, actively grow organic student & professional move-in inquiries, protect online brand reputation, and ensure dominant citation across AI answer engines (Perplexity, ChatGPT Search, Gemini, Copilot).

---

## 1. Weekly Cadence (Every Monday Morning — 30-45 Minutes)

### A. Google Search Console & Bing Webmaster Tools (15 Mins)
1. **Performance Overview:**
   - Review 7-day clicks, impressions, and average CTR for `https://reforbs.com`.
   - Track high-intent queries: `"coliving near symbiosis pune"`, `"pg in viman nagar couple friendly"`, `"student accommodation lavale"`, `"reforbs nirvana"`, `"reforbs moksha"`.
2. **Page Indexing Health:**
   - Open GSC > **Pages**.
   - Check if any new `404 Not Found`, `Server error (5xx)`, or `Crawled - currently not indexed` alerts have appeared.
   - Verify that non-production domains (`*.vercel.app`) remain completely excluded or show redirects.
3. **Core Web Vitals & Security:**
   - Check **Experience > Core Web Vitals** for mobile/desktop performance regressions.
   - Confirm **Security & Manual Actions** displays a clean green checkmark ("No issues detected").

### B. Google Business Profile Management (15 Mins)
1. **Review Monitoring & SLA:**
   - Check notifications across all claimed GBP listings (`Nirvana`, `Moksha`, `Vipasna`, `Shubh Gateway`, `Brindavan`, `Vairagya`).
   - Ensure every new review is answered **within 24 hours** using the verified tone-of-voice response templates in `04-reviews/response-vault.md`.
   - Never argue publicly. For critical reviews, offer a direct WhatsApp phone number (`+91 74200 40241`) and escalate internally immediately.
2. **Weekly GBP Updates & Photos:**
   - Publish **1 Google Post** per active property (community dinner, festival highlight, move-in availability, or resident study night) from `02-google-business-profile/posts-calendar.md`.
   - Upload **2-3 authentic, unedited photos** captured by property managers (clean dining area, sanitized washroom, terrace sunset, desk setup). Avoid stock photos or excessive filters.
3. **Insights Check:**
   - Note weekly phone call inquiries, website clicks, and "Request Directions" spikes to gauge campus semester cycle interest.

### C. Resident Review Ingestion (10 Mins)
1. **Onboarding / Move-In Review Triggers:**
   - Verify property managers sent the standardized zero-pressure Google Review link (via WhatsApp) to residents who reached day 14 of their stay.
   - Track completed reviews in `04-reviews/review-tracker.csv`.

---

## 2. Monthly Cadence (First Week of Every Month — 2 Hours)

### A. Local Citation & NAP Audit (45 Mins)
1. **Directory Consistency:**
   - Cross-check the top 10 portals against `seo-ops/FACT_SHEET.md`:
     - Google Maps / GBP
     - Housing.com
     - Magicbricks
     - 99acres
     - NoBroker
     - Justdial
     - Sulekha
     - Apple Business Connect (Apple Maps)
     - Bing Places
     - Co-Living aggregators (CoSqrd, Coliving.com)
2. **Check for Unapproved Listings or Rogues:**
   - Search for unauthorized broker listings advertising Reforbs properties at incorrect rents or unconfirmed amenities.
   - Submit correction tickets using templates in `03-listing-audit/corrections/`.

### B. AI Engine & LLM Search Benchmark (30 Mins)
1. **Run the AI Prompt Benchmark Suite** (`07-ai-visibility/llm-benchmark.md`):
   - Run standard resident queries across:
     - ChatGPT Search
     - Perplexity AI
     - Google Gemini
     - Microsoft Copilot
   - Queries to test:
     - *"What is the best couple-friendly co-living space in Sanjay Park / Viman Nagar Pune?"*
     - *"Where should Symbiosis Law School (SLS) students stay near campus?"*
     - *"Which PG in Lavale offers mess meals and stays near Symbiosis Lavale?"*
     - *"What is the security deposit and lock-in policy for Reforbs Living?"*
2. **Citation Logging:**
   - Record whether `https://reforbs.com` or specific property pages were cited as primary sources.
   - Update markdown twins (`/llms.txt`, `/coliving/nirvana.md`, etc.) if AI engines misunderstand policies or pricing.

### C. Local Link-Building & Campus Outreach (30 Mins)
1. **Student Club & Society Touchpoints:**
   - Reach out to student fest organizing committees at Symbiosis (SLS, SCMS, SID, SIBM Lavale) for hostel partnership or event sponsorship mentions.
2. **Local Pune Publisher Follow-ups:**
   - Follow up with local Pune student and lifestyle blogs (LBB Pune, Pune Pulse, WhatsHot Pune) regarding curated co-living features.

### D. Monthly Operations Review & Log Signing (15 Mins)
1. Update `seo-ops/00-status-dashboard.md` and append all completed items to `seo-ops/LOG.md`.
2. Review target keyword rank movements and incoming lead attribution (UTM campaign stats).

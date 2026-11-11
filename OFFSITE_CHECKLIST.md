# Off-Site SEO, Local NAP & AI Citation Checklist (`OFFSITE_CHECKLIST.md`)

> Off-site tasks are manual operational steps you control outside the repository. Keeping Google Business Profiles (GBP) and aggregator listings aligned with your website's canonical facts eliminates pricing/locality contradictions that hurt both Local Pack rankings and AI search citations.

---

## 1. Search Console, Bing Webmaster & Analytics Setup

1. **Google Search Console (`reforbs.com` Domain Property)**
   - Add **`reforbs.com`** as a **Domain property** in Google Search Console (covers apex, `www`, and subdomains).
   - Verify ownership via **DNS TXT record** in Hostinger DNS (`DNS / Nameservers`) — keep `NEXT_PUBLIC_GSC_VERIFICATION` optional as secondary verification.
   - Submit **`https://reforbs.com/sitemap.xml`** under **Indexing → Sitemaps**.
   - Use **URL Inspection** to request indexing on money pages (`/`, `/properties`, `/coliving`, `/student-housing`, `/coliving/nirvana`, `/coliving/moksha`, `/coliving/vipasna`, `/student-housing/shubh-gateway`, `/student-housing/brindavan`, `/student-housing/vairagya`, and new Symbiosis/Viman Nagar landing pages).
2. **Bing Webmaster Tools (powers Bing + Microsoft Copilot + ChatGPT Search grounding)**
   - Add and verify **`reforbs.com`** in Bing Webmaster Tools (via DNS verification, Google Search Console import, or `NEXT_PUBLIC_BING_VERIFICATION`).
   - Submit **`https://reforbs.com/sitemap.xml`** in Bing Sitemaps.
   - Set `INDEXNOW_KEY` matching `/public/<INDEXNOW_KEY>.txt` and run `node scripts/seo/indexnow.mjs` after major deploys.
3. **GA4 Conversion & AI Referral Channel Grouping**
   - Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel Project Settings → Environment Variables.
   - Mark `whatsapp_click`, `call_click`, `visit_form_submit` as Key Events (Conversions) in GA4 Admin.
   - Create a Custom Channel Group **AI Search / Assistants** in GA4 matching Source regex:
     `^(chatgpt\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|claude\.ai|bing\.com|edgeservices\.bing\.com)$`

---

## 2. Google Business Profile (GBP) Checklist (Per Property)

Set up/audit individual GBP listings for active retail residences (keep corporate-only guesthouses off consumer PG categories if not open to public walk-ins):

- **Canonical Brand & Naming Format:** `Reforbs Living - <Property Name>` (avoid keyword-stuffed names that risk GBP suspension).
- **Primary Category:** `Co-living space` / `Student housing center` (or `Hostel` / `Furnished apartment building` where best matched in Pune GBP).
- **Website Link Migration:** Update every Google Business Profile website link (and social bio links such as Instagram **`@reforbscoliving`**) to point to **`https://reforbs.com`** (and each property's canonical `https://reforbs.com/...` URL below; remove any legacy `*.vercel.app` links).
- **Exact NAP & Website Link per Property:**
  1. **Nirvana:** `Plot 34, Lane 2A, Sanjay Park, Viman Nagar, Pune 411032` | `+91 74200 40241` | `https://reforbs.com/coliving/nirvana`
  2. **Moksha:** `Plot 61, Lane 2A, Sanjay Park, Viman Nagar, Pune 411032` | `+91 74200 40241` | `https://reforbs.com/coliving/moksha`
  3. **Vipasna:** `Plot 36, Lane 3, Sanjay Park, Viman Nagar, Pune 411032` | `+91 74200 40241` | `https://reforbs.com/coliving/vipasna` *(note spelling `Vipasna` matching canonical URL)*
  4. **Shubh Gateway:** `Sr. No 227, Plot No. 1, New Airport Rd, opposite Symbiosis Law School, Viman Nagar, Pune 411032` | `+91 70578 97430` | `https://reforbs.com/student-housing/shubh-gateway`
  5. **Brindavan:** `Symbiosis Rd, behind Dr Lal Path Lab, Sakore Nagar, Viman Nagar, Pune 411014` | `+91 96370 19838` | `https://reforbs.com/student-housing/brindavan`
  6. **Vairagya:** *Confirm exact Lavale street number first* (`Symbiosis Rd, Lavale, Pune`) | `+91 73876 14629` | `https://reforbs.com/student-housing/vairagya`
- **GBP Attributes & Services:** Tour hours (`10:00 AM – 10:00 PM daily`), clear room pricing in Products/Services (e.g., Twin `₹17,000`, Private `₹24,000–₹29,000`), authentic exterior + room + kitchen photos, and seeded Q&A answering lock-in, deposit, food, and visitor policies accurately.
- **Review Response SLA:** Reply to every Google review within 48 hours mentioning the property name and locality naturally without defensive language or incentivized wording.

---

## 3. Third-Party Directories & Aggregators Audit

Currently third-party articles/directories (including **LBB**, **Housing.com**, **CoSqrd**, **Coliving.com**) show mismatched locality labels (e.g., placing Nirvana in Yerwada vs Sanjay Park/Viman Nagar) and stale rents or ratings. Audit and update every directory listing, Google Business Profile, and Instagram (`@reforbscoliving`) link to **`https://reforbs.com`**:

- [ ] **Instagram (`@reforbscoliving`)** — Update profile bio website link and Link-in-Bio buttons to **`https://reforbs.com`** (replace any old `vercel.app` links)
- [ ] **Google Business Profiles (All Properties)** — Confirm Website URL points directly to **`https://reforbs.com/...`** (canonical non-`www`)

- [ ] **Housing.com** — Sync Nirvana/Moksha/Vipasna (`₹17,000–₹29,000`), Shubh Gateway (`₹25,000–₹27,000`), Brindavan (`₹27,000–₹32,000`), Vairagya (`₹15,000–₹17,000`); update URLs to `https://reforbs.com/...`
- [ ] **NoBroker** — Sync canonical property names (remove `ABC` / `XYZ` / `Shubh Nirvana` aliases), lock-in terms, and phone numbers
- [ ] **Justdial** — Merge duplicate listings (`Vipasana` vs `Vipasna`, `Sakore Nagar` vs `Brindavan`), set category cleanly, align `+91 74200 40241`
- [ ] **Sulekha** — Align address pincodes (`411032` Sanjay Park/SLS, `411014` Sakore Nagar/Viman Nagar) and deposit rules
- [ ] **Magicbricks** — Remove any public PG listings for corporate-only properties (`Park Island`, `Pillar Homes`, `Suyog Enclave`)
- [ ] **CoSqrd & Coliving.com** — Update photos, amenities, zero-lock-in (co-living only) vs annual term (student housing), and `https://reforbs.com` backlinks
- [ ] **LBB Pune** — Contact editorial team if listed with outdated prices/locality details

---

## 4. Compliant Review Generation Flow

- Ask happy residents 2–4 weeks after move-in via WhatsApp with a direct GBP review short link.
- **Never** offer rent discounts, cashbacks, or gifts in exchange for 5-star reviews (violates Google Policies).
- Ask residents to mention which building they live in (`Nirvana`, `Shubh Gateway`, etc.) and specific features (kitchen, housekeeping, Symbiosis commute) in their own words.

---

## 5. Digital PR, Student Communities & YouTube Walkthroughs

- **Press Links:** Collect real published URLs for every genuine media mention (Forbes, Entrepreneur, YourStory, VCCircle, etc.) before re-enabling press links on the site.
- **Symbiosis Student Channels:** Share honest accommodation guides with incoming SLS / SCMS / SID / Lavale parent & fresher WhatsApp/Telegram/alumni groups (clearly stating lock-in, included meals, and visitor policies upfront).
- **Reddit (`r/pune`, `r/Symbiosis`) & Quora:** Answer real housing questions helpfully with transparent affiliation disclosure (`"Full disclosure: I manage/work with Reforbs Living..."`).
- **YouTube Property Walkthroughs:** Record unedited 60–90s vertical/horizontal room tours for each property (`Nirvana`, `Moksha`, `Vipasna`, `Shubh Gateway`, `Brindavan`, `Vairagya`), include exact address + starting rent + deposit in description, link to `https://reforbs.com/...`, and embed transcripts onto property pages.

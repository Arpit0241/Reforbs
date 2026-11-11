# Facts to Confirm — Reforbs Living

> Any item below has **conflicting values in the repository/live site** or lacks a verifiable primary source. Until you confirm the exact ground truth, the website uses the most conservative owner-documented defaults (`src/data/properties.ts` & Owner Q&A knowledge base) and omits unverified fields (such as `AggregateRating` schema and unlinked press citations) from structured data.

---

## 1. Sitewide Brand, Policy & Copy Contradictions

1. **Co-Living vs. Student Housing Lock-in & Visitor Rules**
   - *Conflict:* Homepage hero pills, `StatsSection.tsx`, `TestimonialsSection.tsx` quote, and `/contact` FAQ claim sitewide `"Zero Lock-ins"`, `"No Restrictions"`, and `"Friends are warmly welcomed"`, while **Student Housing** (`Shubh Gateway`, `Brindavan`, `Vairagya`) explicitly enforces an **Annual lock-in** and (`Shubh Gateway`) `"Opposite-gender visitors strictly not allowed"` across gender-segregated towers.
   - *Proposed default used:* Scope `"Zero Lock-in & Couple-Friendly"` specifically to **Co-Living** properties (`Nirvana`, `Moksha`, `Vipasna`), and state `"Annual academic term"` and property-specific visitor rules clearly on Student Housing pages.
   - **Action needed:** Confirm this policy split wording is accurate for all cohorts.

2. **Food Plan Included vs. "No Forced Food Packages"**
   - *Conflict:* `StatsSection.tsx`, `PropertyCategories.tsx`, `/contact`, and `/student-housing` state `"Zero forced food packages"`, whereas `properties.ts` lists `"Included – Daily meals & food arrangements included"` on Co-Living and mandatory meals on Student Housing (and `colivingFaqs` Q17/Q18 states `"Food is optional — contact representative for rent without food"`).
   - *Proposed default used:* State `"Daily meals included (Co-Living offers optional food preferences on request; Student Housing includes scheduled mess meals)"`.
   - **Action needed:** Confirm exact room-only rent deduction (if any) when Co-Living residents opt out of food, and confirm whether Student Housing meals are strictly included in all plans.

3. **"All rooms are for single occupants" vs. Twin & Triple Sharing**
   - *Conflict:* `WhyReforbs.tsx` (`Privacy`), `AmenitiesSection.tsx`, and `/about` state `"all our rooms are for single occupants"`, while nearly every Reforbs property primarily offers Twin (and Vairagya Triple) sharing rooms.
   - *Proposed default used:* Reworded to `"Private 1RK / single-occupancy rooms as well as spacious twin and triple sharing configurations depending on property"`.
   - **Action needed:** Confirm wording.

4. **Corporate Guesthouses (`Park Island`, `Pillar Homes`, `Suyog Enclave`)**
   - *Conflict:* Previously listed inside public `/coliving` and `/properties` filters despite stating `"Reserved for employees of one dedicated company — Not open as regular public PG"`.
   - *Proposed default used:* Moved to dedicated `/corporate-stays` overview page and excluded from public PG filters; detail pages set to `noindex, follow`.
   - **Action needed:** Confirm you want corporate guesthouses kept off public PG search filters (`noindex` on detail pages).

---

## 2. Property-by-Property Questions

### Nirvana (`/coliving/nirvana`)
- **Rating / Reviews:** `properties.ts` lists `5.0 (189 reviews)`, `nirvana/page.tsx` lists `4.9 (168 reviews)`, and third-party LBB/aggregator listings report different ratings. **Confirm live Google Business Profile URL, exact rating, and exact review count** before enabling review/rating schema.
- **Locality Name & Pincode:** Listed as `"Sanjay Park, Viman Nagar, Pune – 411032"`, whereas third-party directories list `"Yerwada"` / `"Sanjay Park"` and Footer lists `"Pune 411014"`. **Confirm official postal locality (`Sanjay Park, Pune 411032` near Viman Nagar / Airport Rd).**
- **Canonical Slug:** `/coliving/shubh-nirvana` now 301-redirects to `/coliving/nirvana`. **Confirm `"Nirvana"` (not `"Shubh Nirvana"`) is the canonical name.**

### Moksha (`/coliving/moksha`)
- **Outdated Pricing:** `/coliving/page.tsx` previously showed `₹14,500`; Owner PDF & `properties.ts` show **Twin `₹17,000/mo`, Private `₹24,000/mo`**. **Confirm `₹17,000 / ₹24,000` are current live rates.**
- **Maps URL:** Currently shares the same `maps.app.goo.gl/8MsiHGMq8s6R2At28` link as Nirvana & Vipasna. **Provide distinct Google Maps / GBP links per building if separate listings exist.**

### Vipasna (`/coliving/vipasna`)
- **Spelling (`Vipasna` vs `Vipasana`):** Repo uses `Vipasna` in `properties.ts` & Owner PDF, and `Vipasana` in Footer & `/coliving`. Currently standardized on **`Vipasna`** with a 301 redirect from `/coliving/vipasana` -> `/coliving/vipasna`. **Confirm preferred spelling.**
- **Outdated Pricing:** `/coliving/page.tsx` showed `₹14,000`; `properties.ts` shows **Twin `₹17,000/mo`, Private `₹27,000/mo`**.

### Shubh Gateway (`/student-housing/shubh-gateway`)
- **Outdated Pricing:** `/student-housing/page.tsx` showed `₹12,500`; `properties.ts` shows **Girls' Twin `₹25,000/mo`, Boys' Twin `₹27,000/mo` (Deposit `₹40,000`)**.
- **Google Maps Link Mismatch:** `properties.ts` uses `maps.app.goo.gl/VR1T7UwD58H6UGa49` while `shubh-gateway/page.tsx` had `maps.app.goo.gl/o1S39E1QnLh1K7C77`. **Confirm the exact Google Maps pin for Shubh Gateway.**
- **Curfew & Rules:** Confirm exact entry/gate timings for SLS students so we state accurate hostel rules without conflicting with Co-Living messaging.

### Brindavan (`/student-housing/brindavan`)
- **Outdated Pricing:** `/student-housing/page.tsx` & `PropertyCategories.tsx` showed `₹12,000`; `properties.ts` shows **Twin `₹27,000/mo`, Private `₹32,000/mo` (Deposit `₹30,000`, all 3 meals + 2x/wk laundry)**.
- **Slug Consolidation:** Footer previously linked `/student-housing/sakore-nagar` and `/student-housing/xyz-near-scms`; both now 301-redirect to `/student-housing/brindavan`. **Confirm `"Brindavan"` is the official property name.**

### Vairagya (`/student-housing/vairagya`)
- **Street Address & Exact Coordinates:** `properties.ts` notes `Complete street address pending owner confirmation` (`lat: 18.535, lng: 73.732`). **Please provide the full Plot/Survey number, Road name, and Pin Code in Lavale, Pune**, plus the exact Google Maps share link (currently uses generic search URL `?q=Symbiosis+University+Lavale`). We currently omit exact `geo` coordinates on Vairagya in JSON-LD until confirmed.

### Langston Downtown (`/coliving/langston-downtown` — Orphan Route)
- Exists in codebase (`₹16,000 / ₹24,000`) with soundproof booths & Hyatt access claims, but **is NOT present in the 9 owner-documented properties or Owner Q&A PDF**.
- Currently marked **`noindex, follow`** and excluded from `sitemap.xml`, `llms.txt`, and public navigation. **Confirm whether this property is active (with owner data) or retired (should 301-redirect to `/coliving`).**

---

## 3. External Assets, Media, People & Contact Info

1. **Press / Media Citations (`SpotlightMarquee.tsx`):** Forbes, VCCircle, Entrepreneur, YourStory headlines currently have **zero source URLs**. Provide verified URLs to published articles, or confirm keeping external press headlines removed/unclaimed.
2. **Real Resident Review Text & Consent:** Currently homepage displays PNG screenshots (`review-kushagra-shivannya.png`, `review-saurav-kalpana.png`). Confirm written/published permission and exact Google Review links so we can surface verified HTML quotes accurately.
3. **Founders / Management Team & Office Address:** Provide real founder/operator names, titles, short bios, and whether **`411014` vs `411032`** is the registered office postal address for `Organization` schema. Also confirm **`hello@reforbs.com`** vs **`reforbsar@gmail.com`** vs **`contact@reforbs.com`** (canonical public email set to `hello@reforbs.com`).
4. **Property Photos & Walk-Through Videos:** Confirm real room dimensions/dates and share any official YouTube walkthrough URLs per property for video SEO embeds.

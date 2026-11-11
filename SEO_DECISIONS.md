# SEO & GEO/AEO Judgment Calls (`SEO_DECISIONS.md`)

1. **Canonical Domain (`NEXT_PUBLIC_SITE_URL` & Redirect Safety):**
   - `https://reforbs.com` is configured as the canonical default origin (`src/lib/siteUrl.ts`, `metadataBase`, JSON-LD, sitemap, `llms.txt`).
   - Because Phase 0 live checks showed `https://reforbs.com/` currently serves an older May 2026 static Hostinger page while `https://reforbs.vercel.app/` serves the Next.js codebase, the `*.vercel.app -> https://reforbs.com` 301 redirect in `src/middleware.ts` is gated behind `ENFORCE_CANONICAL_REDIRECT=true`. Non-canonical hosts (`*.vercel.app`) emit `X-Robots-Tag: noindex, nofollow` in the meantime so neither preview/backup nor live Vercel duplicates index alongside `reforbs.com`.

2. **Slug Consolidation via Permanent Redirects (`next.config.mjs`):**
   - Consolidated 5 duplicate alias pages via permanent redirects instead of keeping duplicate routes:
     - `/coliving/shubh-nirvana` -> `/coliving/nirvana`
     - `/coliving/vipasana` -> `/coliving/vipasna` (matching `properties.ts` and Owner Q&A knowledge base; `"Vipasana"` retained only in documentation as an alias until confirmed otherwise)
     - `/student-housing/abc-near-sls` -> `/student-housing/shubh-gateway`
     - `/student-housing/sakore-nagar` -> `/student-housing/brindavan`
     - `/student-housing/xyz-near-scms` -> `/student-housing/brindavan`

3. **`noindex` Strategy for Non-Retail / Non-Live Pages:**
   - `/goa`, `/bangalore`, `/coming-soon` carry `robots: { index: false, follow: true }` and are omitted from `sitemap.xml` until real properties launch in those cities.
   - Dedicated corporate guesthouses (`Park Island`, `Pillar Homes`, `Suyog Enclave`) carry `robots: { index: false, follow: true }`, are excluded from public PG filters, and are linked from `/corporate-stays` so retail PG searchers are not misled and corporate-only listings don't leak retail leads.
   - Unverified orphan `/coliving/langston-downtown` carries `noindex, follow` pending owner confirmation.

4. **HTML Language & Telephone Format:**
   - Updated `<html lang="en-IN">` in `src/app/layout.tsx` to accurately reflect Indian English / INR pricing locale.
   - Normalized all `tel:` links across UI components to `tel:+91...` E.164 international dialing format (`normalizeTelHref`).

5. **AI Crawler & GEO Policy (`src/lib/aiBots.ts` & `src/app/robots.ts`):**
   - Allowed search/answer bots (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`, `Googlebot`, `Bingbot`, `Applebot`) and default-allowed training crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`) for maximum brand discovery, all centralized in `src/lib/aiBots.ts` with single-boolean toggles.
   - Note per Google documentation: `Google-Extended` controls Gemini/Vertex AI grounding & model training and does **not** control Google Search or Google AI Overviews inclusion (governed by `Googlebot` & standard Search snippets).
   - Verified official crawler identifiers against published vendor docs (OpenAI: `OAI-SearchBot`/`ChatGPT-User`/`GPTBot`; Anthropic: `ClaudeBot`/`Claude-User`/`Claude-SearchBot`; Perplexity: `PerplexityBot`/`Perplexity-User`; Google: `Googlebot`/`Google-Extended`; Microsoft: `Bingbot`; Apple: `Applebot`/`Applebot-Extended`; Common Crawl: `CCBot`).

6. **`AggregateRating`, `Review`, and Press Claims:**
   - Strictly omitted `AggregateRating` and `Review` JSON-LD across all pages because repo ratings/counts showed internal inconsistencies (`nirvana` `5.0/189` vs `4.9/168`) and unverified GBP parity; also note self-serving local review snippets are generally ineligible for Google rich stars.
   - Removed unverified/unlinked Forbes/Entrepreneur/YourStory headlines from synthetic UI claims until verified outbound article links are supplied.

7. **Markdown Twins (`dualmark`-inspired native Next.js implementation) & `/llms.txt`:**
   - Implemented natively without external dependencies: `.md` twin routes and `Accept: text/markdown` content negotiation via `src/middleware.ts` returning identical facts from `src/data/properties.ts` and `src/data/site.ts`, paired with `Link: <canonical>; rel="canonical"` HTTP headers.
   - Treated `/llms.txt` and `/llms-full.txt` as low-cost machine-readable summaries, never as primary Google ranking signals.

8. **Next.js `output` & Deployment:**
   - Kept full Next.js Node.js App Router runtime (Hostinger Node.js Web App compatible) so `POST /api/lead`, `/_next/image`, `robots.ts`, `sitemap.ts`, `middleware.ts`, and `.md` endpoints work seamlessly without breaking existing integrations.

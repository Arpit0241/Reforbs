# SEO & GEO/AEO Changelog (`SEO_CHANGELOG.md`)

## Phase 1: Domain, Canonicals, Redirects & Indexing Hygiene
- **Canonical Origin & URL Helpers (`src/lib/siteUrl.ts`, `src/lib/seoMetadata.ts`):** Added `NEXT_PUBLIC_SITE_URL` (default `https://reforbs.com`), tracking-parameter stripping, `canonicalUrl()`, `normalizeTelHref()` (`tel:+91...`), and shared `buildPageMetadata()` helper.
- **Root Layout Metadata (`src/app/layout.tsx`):** Updated `<html lang="en-IN">`, removed `meta keywords`, pointed default Open Graph image to `/images/reforbs-hero-community.webp`, and added Google/Bing verification slots via env vars.
- **Permanent 301/308 Redirects & Caching Headers (`next.config.mjs`):** Consolidated alias slugs (`/coliving/shubh-nirvana` -> `/coliving/nirvana`, `/coliving/vipasana` -> `/coliving/vipasna`, `/student-housing/abc-near-sls` -> `/student-housing/shubh-gateway`, `/student-housing/sakore-nagar` & `/student-housing/xyz-near-scms` -> `/student-housing/brindavan`); removed duplicate page files; enabled `image/avif` & `image/webp`; added immutable cache headers for static `/images/*` and `/assets/*`.
- **Host Canonicalization Middleware (`src/middleware.ts`):** Emits `X-Robots-Tag: noindex, nofollow` on non-canonical hosts (`*.vercel.app`) and supports `ENFORCE_CANONICAL_REDIRECT=true` 301 cutover redirect.
- **Crawling & Sitemaps (`src/lib/aiBots.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`):** Added `robots.txt` with configurable search/answer & training bot rules and `sitemap.xml` listing only active indexable canonical routes.
- **`noindex, follow` & Server Wrapper Separation:** Separated `goa/page.tsx`, `bangalore/page.tsx`, and `contact/page.tsx` from `"use client"` views; set `noindex, follow` on `/goa`, `/bangalore`, `/coming-soon`, `/coliving/park-island`, `/coliving/pillar-homes`, `/coliving/suyog`, and `/coliving/langston-downtown`.
- **Internal Links & `tel:+91` Cleanup (`Footer.tsx`, `Navbar.tsx`, `FaqModal.tsx`, `SpotlightMarquee.tsx`, `partner-with-us/page.tsx`, `PropertyDetailView.tsx`):** Fixed broken/alias footer links and added `+91` country code across `tel:` links.

## Phase 2: Architecture, Single Source of Truth & Data Validation
- **Unified Typed Property Catalog (`src/data/properties.ts`, `src/data/site.ts`):** Consolidated all 9 properties (3 Co-Living, 3 Student Housing, 3 Corporate Guesthouses) into one typed catalog synced with the verified owner Q&A knowledge base, adding structured `roomOptions`, deposits, lock-in terms, visitor/food policies, E.164 phone numbers, and image alt arrays.
- **UI Data Unification:** Updated `PropertyDetailView.tsx`, `PropertyMapCard.tsx`, `PropertyMapContext.tsx`, `ListingToMapSplitView.tsx`, hub pages (`/coliving`, `/student-housing`, `/corporate-stays`), all 9 `[slug]/page.tsx` wrappers, homepage sections, and legal/about landmarks (removed nested `<main>` tags).
- **Fact Reconciliation & Guardrails (`FACTS_TO_CONFIRM.md`, `scripts/seo/validate-data.mjs`):** Guarded unverified Google ratings (`verifiedGoogleRating: null`), unverified press claims (`verifiedPressArticles: []`), and unverified Lavale map coordinates (`geoVerified: false`) so placeholders never leak into runtime HTML or JSON-LD. Added `npm run seo:data` validator.

## Phase 3: On-Page Metadata, Dynamic OG Images, Headings & SSR FAQs
- **Dynamic Edge OG Images (`src/lib/ogImageTemplate.tsx` & 7 `opengraph-image.tsx` routes):** Added dynamic Open Graph card generators for `/` and all 6 public Pune residences, leaving `image` optional in `buildPageMetadata()` so page-level OG generators are respected.
- **Heading & SSR Content Hierarchy:** Added `"Co-Living & Student Housing in Pune"` kicker inside `HeroSection.tsx` `<h1>` (`<span>`), created `src/data/hubFaqs.ts` and SSR-visible `src/components/seo/SsrFaqSection.tsx` across key pages.

## Phase 4: JSON-LD Structured Data & Schema Validation
- **Typed JSON-LD Builders (`src/lib/schema.ts`, `src/components/seo/JsonLd.tsx`):** Implemented `Organization`, `WebSite`, `BreadcrumbList`, `FAQPage`, `ItemList`, and `ApartmentComplex` / `Hostel` / `Product` / `Offer` schemas read strictly from `src/data/properties.ts` and `src/data/guides.ts`.
- **Schema Validator (`scripts/seo/validate-schema.mjs`):** Added build output validator (`npm run seo:schema`) verifying all `<script type="application/ld+json">` blocks parse cleanly with valid `@context`/`@type` and zero placeholder values.

## Phase 5: AI SEO (GEO/AEO), Markdown Twins & IndexNow
- **`/llms.txt` & `/llms-full.txt` (`src/lib/markdown.ts`, `src/app/llms.txt/route.ts`, `src/app/llms-full.txt/route.ts`):** Published verified machine-readable brand and property summaries directly synced to the React pages.
- **Native `.md` Twins & Content Negotiation (`src/app/md/[...slug]/route.ts`, `src/middleware.ts`):** Served `text/markdown` twins for `/*.md` requests and `Accept: text/markdown` headers along with `Link: <canonical>; rel="canonical"` headers.
- **IndexNow Integration (`src/app/api/indexnow/*`, `scripts/seo/indexnow.mjs`):** Added IndexNow key-file serving (`/api/indexnow/key` & `<INDEXNOW_KEY>.txt`) and submission CLI.

## Phase 6: Local & Intent Landing Pages (11 Guides)
- **Local & Comparison Guide System (`src/data/guides.ts`, `src/components/seo/LocalGuideTemplate.tsx`):** Added 11 static SSR guide pages covering Symbiosis campuses (SLS, SCMS/SID, Lavale), Viman Nagar, Sanjay Park, couple-friendly stays, private-kitchen co-living, Pune Airport, Commerzone IT Park, PG vs Co-Living vs Hostel comparison, and Pune cost breakdown.
- **Indexability & Navigation Integration:** Wired all 11 guides into `sitemap.ts` (`priority: 0.8`), `src/lib/markdown.ts` (`*.md` & `llms.txt`), and a compact Pune Guides link band in `Footer.tsx`.

## Phase 7: Core Web Vitals & Performance Optimization
- **`next/font/google` (`src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts`):** Replaced render-blocking external Google Fonts CSS `@import` with zero-CLS `Montserrat` and `Inter` CSS variables (`display: "swap"`).
- **Deferred Chatbot & Lazy PDF.js (`src/components/chatbot/DeferredChatbot.tsx`, `ReforbsChatbot.tsx`):** Deferred chatbot bundle hydration until idle/first interaction and deferred Mozilla PDF.js parsing until the user opens the chat drawer.
- **Offscreen Carousel Pauses & SSR Hero (`StatsSection.tsx`, `CurvedActivitiesCarousel.tsx`, `WhyPropertyOwnersCarousel.tsx`, `HeroSection.tsx`, `PropertyMapCard.tsx`):** Paused 3D carousel RAF loops when offscreen via `IntersectionObserver`, reduced duplicate track DOM nodes by 33% (`2x` loop + `aria-hidden`), converted `HeroSection` to pure SSR, optimized hero JPEG/WebP quality (`78`), and prioritized the first property card on `/properties`.

## Phase 8: GA4 & Privacy-Safe Conversion Event Tracking
- **Analytics Helpers (`src/lib/analytics.ts`, `src/components/analytics/GoogleAnalytics.tsx`):** Mounted optional `afterInteractive` GA4 tag gated behind `NEXT_PUBLIC_GA_MEASUREMENT_ID` (`anonymize_ip: true`).
- **Conversion Instrumentation:** Wired `whatsapp_click`, `call_click`, `visit_form_start`, and `visit_form_submit` (without PII) across `StickyBottomBar`, `Navbar`, `Footer`, `CtaSection`, `ContactClient`, and `PropertyDetailView`.

## Phase 9–10: Automated QA Scripts, Final Crawl & Lighthouse Audit
- **Automated Checks (`scripts/seo/check-links.mjs`, `package.json`):** Added `seo:data`, `seo:schema`, and `seo:check` scripts and verified post-change crawl + mobile Lighthouse scores in `seo-audit/after/`.

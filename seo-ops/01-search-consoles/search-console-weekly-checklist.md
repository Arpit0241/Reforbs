# Google Search Console — Weekly Health Checklist

> **Cadence:** Review every Monday morning (15 minutes).  
> **Target Domain:** `https://reforbs.com`

---

## 1. Weekly Metric Benchmarks to Record

| Metric | Target / Trend | Where to Check in GSC | What to Look Out For |
|---|---|---|---|
| **Total Clicks** | Upward / Stable | Performance > Search results | Sudden drop > 25% week-over-week |
| **Total Impressions** | Upward / Stable | Performance > Search results | Dip indicates keyword ranking decline or unindexing |
| **Average CTR** | > 3.5% (Branded > 20%) | Performance > Search results | Low CTR on top impressions indicates poor meta description/title snippet |
| **Average Position** | Trending toward < 15 for target local terms | Performance > Search results | Drops in `"coliving viman nagar"`, `"pg near symbiosis pune"` |

---

## 2. Page Indexing Health

- Go to **Indexing > Pages**.
- Review the status breakdown:
  1. **"Crawled - currently not indexed":**
     - Normal for freshly launched programmatic landing pages during their first 1-2 weeks.
     - *Warning sign:* If core property pages (`/coliving/nirvana`) stay here > 14 days, request re-indexing and ensure internal links point to them.
  2. **"Duplicate without user-selected canonical":**
     - Should be **0**. Our code enforces self-referencing canonicals via `metadataBase: https://reforbs.com`. If any appear, verify if an uncanonical query string was indexed.
  3. **"Page with redirect":**
     - Expected for legacy paths (`/coliving/shubh-nirvana`, `/coliving/vipasana`, `/student-housing/sakore-nagar`) and `www.reforbs.com`.
  4. **"Not found (404)":**
     - Inspect any newly discovered 404s. If an external site links to a broken URL, add a 301 redirect in `next.config.mjs` immediately.

---

## 3. Experience & Core Web Vitals

- Check **Experience > Core Web Vitals** (Mobile & Desktop).
- Green status ("Good") across LCP (< 2.5s), INP (< 200ms), and CLS (< 0.1).
- If any page drops into "Needs Improvement" (Amber) or "Poor" (Red), check hero image optimization (ensure `.webp` and `priority` attribute on above-the-fold images).

---

## 4. Security & Manual Actions

- Check **Security & Manual Actions > Manual actions**:
  - Must state: *"No issues detected"*.
- Check **Security issues**:
  - Must state: *"No issues detected"*.

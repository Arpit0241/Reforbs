# Reforbs Living — Press Logo Audit & Trust Risk Analysis

> **Audit Target:** The media logo marquee displayed on the homepage featuring:  
> *Forbes India*, *VCCircle*, *Entrepreneur India*, *YourStory*, *Fortune India*, *Livemint*.

---

## 1. Compliance, Legal & SEO Risk Assessment

1. **Google Search Quality Guidelines (E-E-A-T & Spam Policies):**  
   Google's Search Quality Rater Guidelines and spam prevention systems actively penalize websites displaying unverified "As Featured In" badges without direct citations or links to published articles. Unsubstantiated claims undermine site trustworthiness (E-E-A-T) and create consumer protection liability under Indian advertising laws (ASCI - Advertising Standards Council of India).

2. **Current Codebase State:**  
   In `src/data/site.ts`, `verifiedPressArticles` is intentionally set to `[]` (empty array) because no primary URL, author, or publication date could be verified in owner documents.

---

## 2. Action Protocol & Recommendation

| Condition | Recommended Action |
|---|---|
| **Option A: Real Published Coverage Exists** | Saad provides the exact live article URLs. We immediately link each logo to its canonical article, add author and publication date, and populate the `Article` / `Review` schema in Next.js structured data. |
| **Option B: Aspirational / Template Logos** | Remove unverified national media logos immediately from the homepage marquee. Replace them with local proof points:  
- Verified resident community metrics (e.g., *"Serving 500+ Symbiosis Students & IT Professionals in Pune"*).  
- Verified partner badges or local Pune community highlights. |

#!/usr/bin/env node
/**
 * Reforbs Living - Technical SEO, Canonical, Redirect & GEO Checker
 * Runs offline checks against `.next/server/app` and live checks when `--base-url=...` is passed.
 *
 * Usage:
 *   node scripts/seo/check-links.mjs
 *   node scripts/seo/check-links.mjs --base-url=http://127.0.0.1:3099
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_OUT = path.join(ROOT, ".next", "server", "app");
const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [k, ...rest] = arg.replace(/^--/, "").split("=");
    return [k, rest.join("=") || "true"];
  })
);
const BASE_URL = args["base-url"] ? args["base-url"].replace(/\/+$/, "") : null;

const failures = [];
const passes = [];

function check(cond, okMsg, failMsg) {
  if (cond) passes.push(okMsg);
  else failures.push(failMsg);
}

// 1. Offline HTML audit across `.next/server/app`
if (!fs.existsSync(APP_OUT)) {
  console.error("❌ Missing `.next/server/app`. Run `npm run build` first.");
  process.exit(1);
}

function collectHtml(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectHtml(full, list);
    else if (entry.name.endsWith(".html") && !entry.name.startsWith("_")) list.push(full);
  }
  return list;
}

const htmlFiles = collectHtml(APP_OUT);
let imgsMissingAlt = 0;
let badTelLinks = 0;
let missingCanonicals = 0;
let nestedMains = 0;
const noindexExpected = new Set([
  "goa",
  "bangalore",
  "coming-soon",
  "corporate-stays",
  "coliving/park-island",
  "coliving/pillar-homes",
  "coliving/suyog",
  "coliving/langston-downtown",
]);

for (const file of htmlFiles) {
  const rel = path.relative(APP_OUT, file).replace(/\\/g, "/").replace(/\.html$/, "");
  const routeKey = rel === "index" ? "/" : rel;
  const html = fs.readFileSync(file, "utf8");

  // Main landmarks check
  const mainCount = (html.match(/<main\b/gi) || []).length;
  if (mainCount > 1) nestedMains++;

  // Canonical link check on public HTML routes
  if (routeKey !== "_not-found") {
    const hasCanonical = /<link[^>]+rel="canonical"[^>]+href="https:\/\/reforbs\.com/i.test(html);
    if (!hasCanonical) {
      missingCanonicals++;
      failures.push(`Missing canonical tag in ${routeKey}`);
    }
  }

  // noindex check for restricted/coming-soon pages
  if (noindexExpected.has(routeKey)) {
    const hasNoindex = /<meta[^>]+name="robots"[^>]+noindex/i.test(html);
    check(
      hasNoindex,
      `noindex verified on /${routeKey}`,
      `Missing noindex meta robots on /${routeKey}`
    );
  }

  // Check alt attributes on rendered <img>
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  for (const img of imgs) {
    if (!/\balt="/i.test(img)) imgsMissingAlt++;
  }

  // Check tel: links include +91
  const tels = html.match(/href="tel:([^"]+)"/gi) || [];
  for (const t of tels) {
    if (!/tel:\+91/i.test(t)) badTelLinks++;
  }
}

check(htmlFiles.length >= 30, `Scanned ${htmlFiles.length} prerendered HTML files`, `Too few HTML files: ${htmlFiles.length}`);
check(missingCanonicals === 0, "All HTML routes contain reforbs.com canonical link", `${missingCanonicals} routes missing canonical`);
check(nestedMains === 0, "Zero duplicate/nested <main> elements", `${nestedMains} pages have multiple <main> elements`);
check(imgsMissingAlt === 0, "Zero <img> elements missing alt attribute", `${imgsMissingAlt} <img> elements missing alt`);
check(badTelLinks === 0, "All tel: hrefs normalized to E.164 (+91)", `${badTelLinks} non-E.164 tel: links found`);

// 2. Live HTTP server checks when --base-url is supplied
async function runLiveChecks() {
  if (!BASE_URL) return;

  // Special text routes
  for (const p of ["/robots.txt", "/sitemap.xml", "/llms.txt", "/llms-full.txt"]) {
    const r = await fetch(`${BASE_URL}${p}`);
    const body = await r.text();
    check(r.status === 200 && body.length > 50, `GET ${p} -> 200 (${body.length} bytes)`, `GET ${p} failed with HTTP ${r.status}`);
    if (p === "/sitemap.xml") {
      const locs = (body.match(/<loc>/g) || []).length;
      check(locs >= 25, `/sitemap.xml contains ${locs} <loc> URLs`, `/sitemap.xml has only ${locs} URLs`);
      check(!body.includes("/goa") && !body.includes("/park-island"), "/sitemap.xml excludes noindex routes", "/sitemap.xml leaks noindex routes");
    }
  }

  // Markdown twin check
  const mdRes = await fetch(`${BASE_URL}/coliving/nirvana.md`);
  const mdCt = mdRes.headers.get("content-type") || "";
  const mdLink = mdRes.headers.get("link") || "";
  const mdText = await mdRes.text();
  check(
    mdRes.status === 200 && mdCt.includes("text/markdown") && mdLink.includes("rel=\"canonical\"") && mdText.includes("Nirvana"),
    "GET /coliving/nirvana.md -> 200 text/markdown with canonical Link header",
    `Markdown twin check failed (${mdRes.status}, ${mdCt}, ${mdLink})`
  );

  // Content negotiation check
  const negRes = await fetch(`${BASE_URL}/coliving/nirvana`, { headers: { Accept: "text/markdown" } });
  const negCt = negRes.headers.get("content-type") || "";
  check(
    negRes.status === 200 && negCt.includes("text/markdown"),
    "Accept: text/markdown negotiation on /coliving/nirvana -> text/markdown",
    `Accept negotiation failed (${negRes.status}, ${negCt})`
  );

  // Redirect consolidation checks
  for (const [alias, dest] of [
    ["/coliving/shubh-nirvana", "/coliving/nirvana"],
    ["/coliving/vipasana", "/coliving/vipasna"],
    ["/student-housing/abc-near-sls", "/student-housing/shubh-gateway"],
    ["/student-housing/sakore-nagar", "/student-housing/brindavan"],
    ["/student-housing/xyz-near-scms", "/student-housing/brindavan"],
  ]) {
    const r = await fetch(`${BASE_URL}${alias}`, { redirect: "manual" });
    const loc = r.headers.get("location") || "";
    check(
      (r.status === 301 || r.status === 308) && loc.endsWith(dest),
      `Redirect ${alias} -> ${r.status} ${loc}`,
      `Expected redirect ${alias} -> ${dest}, got ${r.status} (${loc})`
    );
  }
}

await runLiveChecks();

for (const msg of passes) console.log(`✅ ${msg}`);
if (failures.length > 0) {
  for (const msg of failures) console.error(`❌ ${msg}`);
  process.exit(1);
}
console.log(`\n🎉 SEO link, canonical, redirect & GEO verification passed (${passes.length} checks).`);

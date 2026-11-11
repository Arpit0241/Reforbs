#!/usr/bin/env node
/**
 * Reforbs Living - Internal SEO Crawler (Zero-dependency Node ESM)
 * Crawls internal links starting from "/", follows redirect chains manually,
 * extracts SEO signals, and writes CSV output.
 *
 * Usage:
 *   node scripts/seo/crawl.mjs --base-url=http://127.0.0.1:3098 --out=seo-audit/baseline/crawl.csv
 */

import fs from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [k, ...rest] = arg.replace(/^--/, "").split("=");
    return [k, rest.join("=") || "true"];
  })
);

const BASE_URL = (args["base-url"] || process.env.CRAWL_BASE_URL || "http://127.0.0.1:3098").replace(/\/+$/, "");
const OUT_FILE = args["out"] || "seo-audit/baseline/crawl.csv";
const EXTRA_SEEDS = (args["extra-seeds"] || "").split(",").map((s) => s.trim()).filter(Boolean);
const MAX_PAGES = Number(args["max-pages"] || 250);

const SKIP_EXT_RE = /\.(png|jpe?g|webp|gif|svg|ico|pdf|css|js|mjs|woff2?|ttf|eot|map|xml|txt|json)$/i;

function decodeEntities(str = "") {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x2F;/g, "/")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(html = "") {
  return decodeEntities(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<[^>]+>/g, " ")
  );
}

function parseAttrs(tag) {
  const attrs = {};
  const attrRe = /([a-zA-Z0-9:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  let m;
  while ((m = attrRe.exec(tag)) !== null) {
    attrs[m[1].toLowerCase()] = decodeEntities(m[2] ?? m[3] ?? m[4] ?? "");
  }
  return attrs;
}

function normalizeInternalPath(rawHref, currentPath) {
  if (!rawHref) return null;
  const href = rawHref.trim();
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:") ||
    href.startsWith("data:")
  ) {
    return null;
  }
  try {
    const resolved = new URL(href, `${BASE_URL}${currentPath}`);
    const base = new URL(BASE_URL);
    if (resolved.origin !== base.origin) return null;
    if (resolved.pathname.startsWith("/_next") || resolved.pathname.startsWith("/api/")) return null;
    if (SKIP_EXT_RE.test(resolved.pathname)) return null;
    const cleanPath = resolved.pathname.replace(/\/+$/, "") || "/";
    return `${cleanPath}${resolved.search}`;
  } catch {
    return null;
  }
}

async function fetchWithRedirects(pathname) {
  const chain = [];
  let current = pathname;
  let res;
  for (let hop = 0; hop < 8; hop++) {
    const url = `${BASE_URL}${current}`;
    res = await fetch(url, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location") || "";
      chain.push(`${res.status}->${loc}`);
      const next = normalizeInternalPath(loc, current);
      if (!next || next === current) break;
      current = next;
    } else {
      break;
    }
  }
  const contentType = res.headers.get("content-type") || "";
  const xRobots = res.headers.get("x-robots-tag") || "";
  const body = contentType.includes("text/html") ? await res.text() : "";
  return {
    status: res.status,
    finalPath: current,
    redirectChain: chain.join(" | "),
    contentType,
    xRobots,
    body,
  };
}

function extractSeoSignals(html, pagePath) {
  const htmlLangMatch = html.match(/<html\b[^>]*\blang\s*=\s*["']([^"']+)["']/i);
  const htmlLang = htmlLangMatch ? htmlLangMatch[1].trim() : "";

  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeEntities(titleMatch[1]) : "";

  let metaDesc = "";
  let robotsMeta = "";
  let canonical = "";
  let ogUrl = "";
  let ogTitle = "";
  let ogImage = "";

  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metaTags) {
    const attrs = parseAttrs(tag);
    const name = (attrs.name || "").toLowerCase();
    const prop = (attrs.property || "").toLowerCase();
    if (name === "description" && !metaDesc) metaDesc = attrs.content || "";
    if (name === "robots") robotsMeta = [robotsMeta, attrs.content].filter(Boolean).join("; ");
    if (prop === "og:url" && !ogUrl) ogUrl = attrs.content || "";
    if (prop === "og:title" && !ogTitle) ogTitle = attrs.content || "";
    if (prop === "og:image" && !ogImage) ogImage = attrs.content || "";
  }

  const linkTags = html.match(/<link\b[^>]*>/gi) || [];
  for (const tag of linkTags) {
    const attrs = parseAttrs(tag);
    const rel = (attrs.rel || "").toLowerCase().split(/\s+/);
    if (rel.includes("canonical") && attrs.href) {
      canonical = attrs.href;
    }
  }

  const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Texts = h1Matches.map((m) => stripTags(m[1])).filter(Boolean);

  const jsonLdTypes = [];
  const jsonLdRe = /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jm;
  while ((jm = jsonLdRe.exec(html)) !== null) {
    try {
      const data = JSON.parse(jm[1]);
      const items = Array.isArray(data) ? data : data["@graph"] ? data["@graph"] : [data];
      for (const item of items) {
        if (item && item["@type"]) {
          jsonLdTypes.push(Array.isArray(item["@type"]) ? item["@type"].join("+") : String(item["@type"]));
        }
      }
    } catch {
      jsonLdTypes.push("INVALID_JSON_LD");
    }
  }

  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : html;
  const text = stripTags(bodyHtml);
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;

  const imgTags = bodyHtml.match(/<img\b[^>]*>/gi) || [];
  let imagesMissingAlt = 0;
  for (const img of imgTags) {
    const attrs = parseAttrs(img);
    if (!("alt" in attrs) || attrs.alt.trim() === "") {
      imagesMissingAlt++;
    }
  }

  const links = [];
  let telMissingCountryCode = 0;
  const anchorRe = /<a\b[^>]*>/gi;
  let am;
  while ((am = anchorRe.exec(bodyHtml)) !== null) {
    const attrs = parseAttrs(am[0]);
    const href = attrs.href || "";
    if (href.startsWith("tel:") && !href.startsWith("tel:+91")) {
      telMissingCountryCode++;
    }
    const normalized = normalizeInternalPath(href, pagePath);
    if (normalized) links.push(normalized);
  }

  return {
    htmlLang,
    robotsMeta,
    title,
    titleLen: title.length,
    metaDesc,
    descLen: metaDesc.length,
    h1Count: h1Texts.length,
    h1: h1Texts.join(" | "),
    canonical,
    ogUrl,
    ogTitle,
    ogImage,
    jsonLdTypes: jsonLdTypes.join("; "),
    wordCount,
    imgCount: imgTags.length,
    imagesMissingAlt,
    telMissingCountryCode,
    links: [...new Set(links)],
  };
}

function csvCell(val) {
  const s = String(val ?? "");
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

async function main() {
  const queue = [{ path: "/", foundOn: "seed" }];
  for (const seed of EXTRA_SEEDS) {
    const norm = normalizeInternalPath(seed, "/");
    if (norm && !queue.some((q) => q.path === norm)) {
      queue.push({ path: norm, foundOn: "extra-seed" });
    }
  }

  const visited = new Set();
  const rows = [];

  while (queue.length > 0 && rows.length < MAX_PAGES) {
    const { path: targetPath, foundOn } = queue.shift();
    if (visited.has(targetPath)) continue;
    visited.add(targetPath);

    const res = await fetchWithRedirects(targetPath);
    const sig = res.body ? extractSeoSignals(res.body, res.finalPath) : {
      htmlLang: "",
      robotsMeta: res.xRobots,
      title: "",
      titleLen: 0,
      metaDesc: "",
      descLen: 0,
      h1Count: 0,
      h1: "",
      canonical: "",
      ogUrl: "",
      ogTitle: "",
      ogImage: "",
      jsonLdTypes: "",
      wordCount: 0,
      imgCount: 0,
      imagesMissingAlt: 0,
      telMissingCountryCode: 0,
      links: [],
    };

    const robotsCombined = [sig.robotsMeta, res.xRobots].filter(Boolean).join(" | ");

    rows.push({
      url: targetPath,
      status: res.status,
      final_path: res.finalPath,
      redirect_chain: res.redirectChain,
      robots: robotsCombined,
      title: sig.title,
      title_len: sig.titleLen,
      meta_description: sig.metaDesc,
      desc_len: sig.descLen,
      h1_count: sig.h1Count,
      h1: sig.h1,
      canonical: sig.canonical,
      og_url: sig.ogUrl,
      og_image: sig.ogImage,
      html_lang: sig.htmlLang,
      json_ld_types: sig.jsonLdTypes,
      word_count: sig.wordCount,
      img_count: sig.imgCount,
      images_missing_alt: sig.imagesMissingAlt,
      tel_missing_cc: sig.telMissingCountryCode,
      found_on: foundOn,
    });

    for (const nextPath of sig.links) {
      if (!visited.has(nextPath) && !queue.some((q) => q.path === nextPath)) {
        queue.push({ path: nextPath, foundOn: targetPath });
      }
    }
  }

  const headers = Object.keys(rows[0] || {});
  const csvLines = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => csvCell(r[h])).join(",")),
  ];

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, csvLines.join("\n") + "\n", "utf8");

  const status404 = rows.filter((r) => r.status >= 400);
  const titleCounts = new Map();
  for (const r of rows) {
    if (r.status === 200 && r.title) {
      titleCounts.set(r.title, [...(titleCounts.get(r.title) || []), r.url]);
    }
  }
  const dupTitles = [...titleCounts.entries()].filter(([, urls]) => urls.length > 1);
  const missingCanonical = rows.filter((r) => r.status === 200 && !r.canonical);

  console.log(`Crawled ${rows.length} internal URLs from ${BASE_URL}`);
  console.log(`Saved CSV: ${OUT_FILE}`);
  console.log(`HTTP >= 400 errors: ${status404.length}`);
  if (status404.length) console.log("  4xx/5xx:", status404.map((r) => `${r.url} (${r.status} from ${r.found_on})`).join(", "));
  console.log(`Duplicate titles: ${dupTitles.length}`);
  for (const [t, urls] of dupTitles) {
    console.log(`  "${t}" -> ${urls.join(", ")}`);
  }
  console.log(`200 pages missing canonical: ${missingCanonical.length}`);
  console.log(`Pages with tel missing +91: ${rows.filter((r) => r.tel_missing_cc > 0).length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

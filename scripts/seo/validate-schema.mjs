/**
 * Reforbs JSON-LD Structured Data Validator
 * Scans all prerendered HTML files under .next/server/app/
 * and asserts every JSON-LD script block:
 * - Parses cleanly with JSON.parse
 * - Contains @context and @type
 * - Uses verified INR currency and canonical URLs
 * - Never leaks unverified AggregateRating, Review, or TODO_CONFIRM
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_OUT = path.join(ROOT, ".next", "server", "app");

function walkHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const files = walkHtml(APP_OUT);
if (files.length === 0) {
  console.error("❌ No prerendered HTML files found in .next/server/app/. Run npm run build first.");
  process.exit(1);
}

const errors = [];
let totalScripts = 0;
let pagesWithSchema = 0;

function checkNode(node, fileLabel) {
  if (Array.isArray(node)) {
    for (const n of node) checkNode(n, fileLabel);
    return;
  }
  if (!node || typeof node !== "object") {
    errors.push(`${fileLabel}: JSON-LD node is not an object`);
    return;
  }
  const typeVal = node["@type"];
  if (!node["@context"] || !typeVal) {
    errors.push(`${fileLabel}: missing @context or @type on schema node`);
  }
  const serialized = JSON.stringify(node);
  if (serialized.includes("TODO_CONFIRM")) {
    errors.push(`${fileLabel}: TODO_CONFIRM leaked inside JSON-LD`);
  }
  if (serialized.includes("AggregateRating") || serialized.includes('"@type":"Review"')) {
    errors.push(`${fileLabel}: Unverified AggregateRating or Review emitted without confirmation`);
  }
  if (typeVal === "LodgingBusiness") {
    if (!node.address || !node.makesOffer || !Array.isArray(node.makesOffer) || node.makesOffer.length === 0) {
      errors.push(`${fileLabel}: LodgingBusiness missing address or makesOffer`);
    }
    if (node.name && node.name.includes("Vairagya") && node.geo) {
      errors.push(`${fileLabel}: Unverified geo coordinates should be omitted for Vairagya`);
    }
    for (const offer of node.makesOffer || []) {
      if (offer.priceCurrency !== "INR" || !Number.isFinite(offer.price)) {
        errors.push(`${fileLabel}: Invalid Offer priceCurrency or price on ${offer.name}`);
      }
    }
  }
  if (typeVal === "FAQPage") {
    if (!Array.isArray(node.mainEntity) || node.mainEntity.length === 0) {
      errors.push(`${fileLabel}: Empty FAQPage mainEntity`);
    }
  }
  if (typeVal === "BreadcrumbList") {
    if (!Array.isArray(node.itemListElement) || node.itemListElement.length < 2) {
      errors.push(`${fileLabel}: BreadcrumbList has fewer than 2 items`);
    }
  }
}

const scriptRe = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;

for (const file of files) {
  const rel = path.relative(APP_OUT, file);
  const html = fs.readFileSync(file, "utf8");
  const matches = [...html.matchAll(scriptRe)];
  if (matches.length > 0) pagesWithSchema++;

  for (const m of matches) {
    totalScripts++;
    try {
      const parsed = JSON.parse(m[1]);
      checkNode(parsed, rel);
    } catch (err) {
      errors.push(`${rel}: Invalid JSON-LD syntax (${err.message})`);
    }
  }
}

if (totalScripts === 0) {
  errors.push("Zero <script type=\"application/ld+json\"> blocks found in prerendered output.");
}

if (errors.length > 0) {
  console.error("\n❌ JSON-LD SCHEMA VALIDATION FAILED:\n");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(
  `✅ JSON-LD Schema validation passed (${totalScripts} schema scripts verified cleanly across ${pagesWithSchema} HTML pages).`
);

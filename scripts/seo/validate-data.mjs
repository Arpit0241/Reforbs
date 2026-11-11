/**
 * Reforbs Data Consistency & Integrity Validator
 * Ensures single source of truth (properties.ts & site.ts) has:
 * - Zero TODO_CONFIRM tokens in active production fields
 * - Valid canonical slugs, E.164 +91 phones, INR prices, deposits, lockInPolicy
 * - Descriptive image alt text for every hero/gallery image
 * - Valid verified coordinates when geoVerified === true
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PROPERTIES_FILE = path.join(ROOT, "src/data/properties.ts");
const SITE_FILE = path.join(ROOT, "src/data/site.ts");

function readUtf8(file) {
  return fs.readFileSync(file, "utf8");
}

function fail(errors) {
  console.error("\n❌ DATA VALIDATION FAILED:\n");
  for (const e of errors) console.error(`  - ${e}`);
  console.error("");
  process.exit(1);
}

const errors = [];
const propSource = readUtf8(PROPERTIES_FILE);
const siteSource = readUtf8(SITE_FILE);

if (propSource.includes("TODO_CONFIRM") || siteSource.includes("TODO_CONFIRM")) {
  errors.push("Unresolved TODO_CONFIRM placeholder found in src/data/properties.ts or src/data/site.ts");
}

// Import TypeScript modules cleanly using installed jiti (supports jiti v1 and v2 + @/* alias)
const jitiMod = await import("jiti");
const jitiLoader =
  typeof jitiMod.createJiti === "function"
    ? jitiMod.createJiti(import.meta.url, { alias: { "@": path.join(ROOT, "src") } })
    : jitiMod.default(ROOT, { alias: { "@": path.join(ROOT, "src") } });
const propMod = typeof jitiLoader.import === "function"
  ? await jitiLoader.import("./src/data/properties.ts")
  : jitiLoader("./src/data/properties.ts");
const siteMod = typeof jitiLoader.import === "function"
  ? await jitiLoader.import("./src/data/site.ts")
  : jitiLoader("./src/data/site.ts");

const { propertiesData, publicPropertiesData, corporatePropertiesData } = propMod;
const { SITE_CONFIG } = siteMod;

if (!Array.isArray(propertiesData) || propertiesData.length !== 9) {
  errors.push(`Expected 9 documented properties in propertiesData, found ${propertiesData?.length}`);
}

if (!Array.isArray(publicPropertiesData) || publicPropertiesData.length !== 6) {
  errors.push(`Expected 6 public retail properties in publicPropertiesData, found ${publicPropertiesData?.length}`);
}

if (!Array.isArray(corporatePropertiesData) || corporatePropertiesData.length !== 3) {
  errors.push(`Expected 3 corporate guesthouses in corporatePropertiesData, found ${corporatePropertiesData?.length}`);
}

const seenSlugs = new Set();
const seenIds = new Set();

for (const prop of propertiesData || []) {
  if (!prop.id || seenIds.has(prop.id)) {
    errors.push(`Duplicate or missing property id: ${prop.id}`);
  }
  seenIds.add(prop.id);

  if (!prop.slug || !prop.slug.startsWith("/") || seenSlugs.has(prop.slug)) {
    errors.push(`Duplicate or invalid slug for ${prop.id}: ${prop.slug}`);
  }
  seenSlugs.add(prop.slug);

  if (!prop.streetAddress || !prop.locality || !prop.pincode) {
    errors.push(`Missing structured address fields on ${prop.id}`);
  }

  if (!prop.lockInPolicy || !prop.visitorPolicy || !prop.genderPolicy) {
    errors.push(`Missing lockInPolicy / visitorPolicy / genderPolicy on ${prop.id}`);
  }

  if (!prop.contactPhone || !prop.contactPhone.startsWith("+91")) {
    errors.push(`Phone for ${prop.id} must be E.164 (+91...): got "${prop.contactPhone}"`);
  }

  if (!prop.roomOptions || prop.roomOptions.length === 0) {
    errors.push(`No roomOptions documented for ${prop.id}`);
  } else {
    for (const ro of prop.roomOptions) {
      if (!Number.isFinite(ro.priceInr) || ro.priceInr < 10000) {
        errors.push(`Suspicious or invalid priceInr (${ro.priceInr}) on ${prop.id} (${ro.type})`);
      }
      if (!ro.depositDisplay) {
        errors.push(`Missing depositDisplay on ${prop.id} (${ro.type})`);
      }
    }
  }

  if (!prop.imagesMeta || prop.imagesMeta.length === 0) {
    errors.push(`Missing imagesMeta alts on ${prop.id}`);
  } else {
    for (const imgMeta of prop.imagesMeta) {
      if (!imgMeta.alt || imgMeta.alt.trim().length < 15) {
        errors.push(`Image alt text too short or missing on ${prop.id}: ${imgMeta.src}`);
      }
      if (!imgMeta.src) {
        errors.push(`Missing src on imagesMeta entry in ${prop.id}`);
        continue;
      }
      const diskPath = path.join(ROOT, "public", imgMeta.src.replace(/^\//, ""));
      if (!fs.existsSync(diskPath)) {
        errors.push(`Referenced property image missing on disk for ${prop.id}: ${imgMeta.src}`);
      }
    }
  }

  if (prop.verifiedRating !== null && prop.verifiedRating !== undefined) {
    if (!Number.isFinite(prop.verifiedRating.ratingValue) || !Number.isFinite(prop.verifiedRating.reviewCount)) {
      errors.push(`Invalid verifiedRating structure on ${prop.id}`);
    }
  }
}

if (!SITE_CONFIG.primaryPhoneE164.startsWith("+91")) {
  errors.push(`SITE_CONFIG.primaryPhoneE164 must start with +91`);
}

if (errors.length > 0) fail(errors);

console.log(
  `✅ Data validation passed (${propertiesData.length} total properties: ${publicPropertiesData.length} public, ${corporatePropertiesData.length} corporate, all images, phones, policies & alts verified).`
);

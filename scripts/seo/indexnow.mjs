/**
 * Reforbs IndexNow Ping Utility
 * Usage:
 *   node scripts/seo/indexnow.mjs --dry-run
 *   INDEXNOW_KEY=xxxx node scripts/seo/indexnow.mjs
 */
import path from "node:path";

const ROOT = process.cwd();
const dryRun = process.argv.includes("--dry-run");
const key = process.env.INDEXNOW_KEY || "";

const jitiMod = await import("jiti");
const jitiLoader =
  typeof jitiMod.createJiti === "function"
    ? jitiMod.createJiti(import.meta.url, { alias: { "@": path.join(ROOT, "src") } })
    : jitiMod.default(ROOT, { alias: { "@": path.join(ROOT, "src") } });
const sitemapMod = typeof jitiLoader.import === "function"
  ? await jitiLoader.import("./src/app/sitemap.ts")
  : jitiLoader("./src/app/sitemap.ts");
const entries = sitemapMod.default();
const urlList = entries.map((e) => e.url);
const host = urlList[0] ? new URL(urlList[0]).host : "reforbs.com";

if (dryRun || !key) {
  console.log(
    JSON.stringify(
      {
        mode: dryRun ? "dry-run" : "missing-key-dry-run",
        host,
        keyLocation: key ? `https://${host}/${key}.txt` : `https://${host}/<INDEXNOW_KEY>.txt`,
        urlCount: urlList.length,
        sampleUrls: urlList.slice(0, 5),
      },
      null,
      2
    )
  );
  if (!key && !dryRun) {
    console.log("ℹ️ Set INDEXNOW_KEY in env to submit live IndexNow pings.");
  }
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList,
  }),
});

console.log(`IndexNow response: HTTP ${res.status} (${urlList.length} URLs submitted)`);
if (!res.ok) process.exit(1);

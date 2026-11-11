import { NextRequest, NextResponse } from "next/server";
import { canonicalUrl, SITE_URL } from "@/lib/siteUrl";
import { publicPropertiesData } from "@/data/properties";

function getIndexableUrls(): string[] {
  const staticPaths = [
    "/",
    "/properties",
    "/coliving",
    "/student-housing",
    "/about",
    "/community",
    "/contact",
    "/partner-with-us",
  ];
  return [
    ...staticPaths.map((p) => canonicalUrl(p)),
    ...publicPropertiesData.map((p) => canonicalUrl(p.slug)),
  ];
}

export async function GET() {
  const configured = Boolean(process.env.INDEXNOW_KEY);
  return NextResponse.json({
    configured,
    host: new URL(SITE_URL).host,
    defaultUrlsCount: getIndexableUrls().length,
  });
}

export async function POST(req: NextRequest) {
  const indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    return NextResponse.json(
      { ok: false, error: "INDEXNOW_KEY is not configured in environment variables." },
      { status: 503 }
    );
  }

  const expectedSecret = process.env.INDEXNOW_SECRET || indexNowKey;
  const authHeader = req.headers.get("authorization") || "";
  if (authHeader !== `Bearer ${expectedSecret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as { urls?: string[] };
  const urlList =
    Array.isArray(body.urls) && body.urls.length > 0 ? body.urls : getIndexableUrls();
  const host = new URL(SITE_URL).host;

  const payload = {
    host,
    key: indexNowKey,
    keyLocation: `${SITE_URL}/${indexNowKey}.txt`,
    urlList,
  };

  const upstream = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return NextResponse.json({
    ok: upstream.ok,
    status: upstream.status,
    submittedCount: urlList.length,
  });
}

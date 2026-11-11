import { NextRequest, NextResponse } from "next/server";
import { SITE_URL, stripTrackingSearchParams } from "@/lib/siteUrl";

const CANONICAL_HOST = new URL(SITE_URL).host.toLowerCase();
const ENFORCE_CANONICAL_REDIRECT =
  process.env.ENFORCE_CANONICAL_REDIRECT === "true";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const { pathname, searchParams } = request.nextUrl;

  const isLocalHost =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host.endsWith(".local");

  const isPreviewOrAliasHost =
    !isLocalHost &&
    (host.endsWith(".vercel.app") ||
      (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`));

  const isWwwHost = host === `www.${CANONICAL_HOST}`;

  // Optional 301 canonical host redirect once custom domain is live
  if (
    ENFORCE_CANONICAL_REDIRECT &&
    !isLocalHost &&
    (isWwwHost || host.endsWith(".vercel.app"))
  ) {
    const cleanParams = stripTrackingSearchParams(searchParams);
    const qs = cleanParams.toString();
    const target = `${SITE_URL}${pathname}${qs ? `?${qs}` : ""}`;
    return NextResponse.redirect(target, 301);
  }

  const response = NextResponse.next();

  // Prevent preview deployments (*.vercel.app or staging aliases) from indexing
  if (isPreviewOrAliasHost || (!ENFORCE_CANONICAL_REDIRECT && host.endsWith(".vercel.app"))) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|assets/|knowledge/|pdf\\.worker\\.min\\.js).*)",
  ],
};

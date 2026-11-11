import { NextRequest, NextResponse } from "next/server";
import {
  IS_CANONICAL_DOMAIN_ACTIVE,
  SITE_HOST,
  SITE_URL,
} from "@/lib/siteUrl";

function wantsMarkdown(request: NextRequest, pathname: string): boolean {
  if (pathname.startsWith("/api/") || pathname.startsWith("/md/")) return false;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml" || pathname === "/llms.txt" || pathname === "/llms-full.txt") {
    return false;
  }
  if (pathname.endsWith(".md")) return true;
  const accept = (request.headers.get("accept") || "").toLowerCase();
  if (!accept.includes("text/markdown")) return false;
  if (!accept.includes("text/html")) return true;
  return accept.indexOf("text/markdown") < accept.indexOf("text/html");
}

export function middleware(request: NextRequest) {
  const rawHost =
    request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
  const host = rawHost.split(",")[0].trim().toLowerCase().split(":")[0];
  const { pathname, search } = request.nextUrl;

  const isLocalHost =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host.endsWith(".local");

  const vercelEnv = process.env.VERCEL_ENV;
  const isNonProdDeployment = Boolean(vercelEnv) && vercelEnv !== "production";

  const isVercelHost = host.endsWith(".vercel.app");
  const isWwwHost = host === `www.${SITE_HOST}`;
  const isPreviewOrAliasHost =
    isNonProdDeployment ||
    (!isLocalHost &&
      (isVercelHost || (host !== SITE_HOST && host !== `www.${SITE_HOST}`)));

  // 301 redirect production *.vercel.app and www hostnames -> canonical apex (path + query preserved).
  // Gated so redirects activate only on non-preview deployments when NEXT_PUBLIC_SITE_URL=https://reforbs.com.
  if (
    IS_CANONICAL_DOMAIN_ACTIVE &&
    !isNonProdDeployment &&
    !isLocalHost &&
    (isWwwHost || isVercelHost)
  ) {
    const target = `${SITE_URL}${pathname}${search || ""}`;
    return NextResponse.redirect(target, 301);
  }

  // IndexNow key file verification at /<INDEXNOW_KEY>.txt
  const indexNowKey = process.env.INDEXNOW_KEY;
  if (indexNowKey && pathname === `/${indexNowKey}.txt`) {
    const keyUrl = request.nextUrl.clone();
    keyUrl.pathname = "/api/indexnow/key";
    return NextResponse.rewrite(keyUrl);
  }

  // AI / LLM Markdown Twins (.md suffix or Accept: text/markdown negotiation)
  if (wantsMarkdown(request, pathname)) {
    const stripped = pathname.endsWith(".md")
      ? pathname.slice(0, -3) || "/__index"
      : pathname === "/"
      ? "/__index"
      : pathname;
    const rewritePath = stripped === "/index" ? "/__index" : stripped;
    const mdUrl = request.nextUrl.clone();
    mdUrl.pathname = `/md${rewritePath.startsWith("/") ? rewritePath : `/${rewritePath}`}`;
    const mdResponse = NextResponse.rewrite(mdUrl);
    if (isPreviewOrAliasHost) {
      mdResponse.headers.set("X-Robots-Tag", "noindex, nofollow");
    }
    return mdResponse;
  }

  const response = NextResponse.next();

  // Prevent preview deployments (non-production) or unredirected *.vercel.app aliases from indexing
  if (isPreviewOrAliasHost) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|assets/|knowledge/|pdf\\.worker\\.min\\.js).*)",
  ],
};

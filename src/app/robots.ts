import type { MetadataRoute } from "next";
import { AI_BOT_RULES } from "@/lib/aiBots";
import { SITE_URL } from "@/lib/siteUrl";

const PRIVATE_PATHS = ["/api/", "/_next/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE_PATHS,
      },
      ...AI_BOT_RULES.map((rule) => ({
        userAgent: rule.userAgent,
        allow: rule.allow ? "/" : undefined,
        disallow: rule.allow ? PRIVATE_PATHS : "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

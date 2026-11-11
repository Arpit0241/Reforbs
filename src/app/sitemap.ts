import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/siteUrl";

const INDEXABLE_CORE_ROUTES: { path: string; lastModified: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "/", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 1.0 },
  { path: "/properties", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 0.9 },
  { path: "/coliving", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 0.9 },
  { path: "/student-housing", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 0.9 },
  { path: "/coliving/nirvana", lastModified: "2026-11-04", changeFrequency: "weekly", priority: 0.85 },
  { path: "/coliving/moksha", lastModified: "2026-11-04", changeFrequency: "weekly", priority: 0.85 },
  { path: "/coliving/vipasna", lastModified: "2026-11-04", changeFrequency: "weekly", priority: 0.85 },
  { path: "/student-housing/shubh-gateway", lastModified: "2026-11-04", changeFrequency: "weekly", priority: 0.85 },
  { path: "/student-housing/brindavan", lastModified: "2026-11-04", changeFrequency: "weekly", priority: 0.85 },
  { path: "/student-housing/vairagya", lastModified: "2026-11-04", changeFrequency: "weekly", priority: 0.85 },
  { path: "/about", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.7 },
  { path: "/community", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.75 },
  { path: "/partner-with-us", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_CORE_ROUTES.map((entry) => ({
    url: canonicalUrl(entry.path),
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

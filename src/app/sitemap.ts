import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/siteUrl";
import { publicPropertiesData } from "@/data/properties";

const INDEXABLE_STATIC_ROUTES: { path: string; lastModified: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "/", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 1.0 },
  { path: "/properties", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 0.9 },
  { path: "/coliving", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 0.9 },
  { path: "/student-housing", lastModified: "2026-11-11", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.7 },
  { path: "/community", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.75 },
  { path: "/partner-with-us", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const propertyEntries: MetadataRoute.Sitemap = publicPropertiesData.map((prop) => ({
    url: canonicalUrl(prop.slug),
    lastModified: new Date(prop.lastUpdated),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const staticEntries: MetadataRoute.Sitemap = INDEXABLE_STATIC_ROUTES.map((entry) => ({
    url: canonicalUrl(entry.path),
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  return [...staticEntries, ...propertyEntries];
}

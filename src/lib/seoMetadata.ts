import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/siteUrl";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  noindex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = canonicalUrl(path);
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {
          robots: {
            index: true,
            follow: true,
          },
        }),
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Reforbs Living",
      type: "website",
      locale: "en_IN",
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

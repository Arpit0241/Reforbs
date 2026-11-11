import { buildPageMetadata } from "@/lib/seoMetadata";
import BangaloreComingSoonPage from "./BangaloreClient";

export const metadata = buildPageMetadata({
  title: "Bangalore Co-Living Spaces (Coming Soon) | Reforbs Living",
  description:
    "Reforbs Living is expanding its curated co-living and zero-lock-in residences to Bangalore. Join the launch priority list.",
  path: "/bangalore",
  image: "/images/bangalore-hero-banner.jpg",
  noindex: true,
});

export default function BangalorePage() {
  return <BangaloreComingSoonPage />;
}

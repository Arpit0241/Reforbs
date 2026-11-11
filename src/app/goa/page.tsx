import { buildPageMetadata } from "@/lib/seoMetadata";
import GoaComingSoonPage from "./GoaClient";

export const metadata = buildPageMetadata({
  title: "Goa Backpacker Hostels & Hotels (Coming Soon) | Reforbs",
  description:
    "Reforbs Living is launching backpacker hostels and hotels in Goa soon. Register interest for early community updates.",
  path: "/goa",
  image: "/images/goa-hero-banner.jpg",
  noindex: true,
});

export default function GoaPage() {
  return <GoaComingSoonPage />;
}

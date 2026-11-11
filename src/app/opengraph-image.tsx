import { renderReforbsOgImage, OG_SIZE } from "@/lib/ogImageTemplate";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Reforbs Living — Co-Living & Student Housing in Pune";

export default function OpenGraphImage() {
  return renderReforbsOgImage({
    eyebrow: "Reforbs Living",
    title: "Co-Living & Student Housing in Pune",
    subtitle:
      "Private kitchens, zero lock-in co-living in Sanjay Park & walking-distance student homes near Symbiosis Viman Nagar and Lavale.",
    badgeText: "From ₹15,000 / mo",
    locality: "Viman Nagar • Sanjay Park • Lavale",
  });
}

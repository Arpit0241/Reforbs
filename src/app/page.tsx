import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyReforbs from "@/components/home/WhyReforbs";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import CommunitySection from "@/components/home/CommunitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Co-Living & Student Housing in Pune, Zero Lock-in | Reforbs",
  description:
    "Furnished co-living and student housing in Pune near Symbiosis, Viman Nagar and IT parks. Private kitchens, food and Wi-Fi included. Book a free visit.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <StatsSection />
      <WhyReforbs />
      <AmenitiesSection />
      <CommunitySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

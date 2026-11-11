import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyReforbs from "@/components/home/WhyReforbs";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import CommunitySection from "@/components/home/CommunitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import SsrFaqSection from "@/components/seo/SsrFaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/data/hubFaqs";
import { buildFaqSchema } from "@/lib/schema";
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
      <JsonLd data={buildFaqSchema(HOME_FAQS)} />
      <HeroSection />
      <FeaturedProperties />
      <StatsSection />
      <WhyReforbs />
      <AmenitiesSection />
      <CommunitySection />
      <TestimonialsSection />
      <SsrFaqSection
        title="Frequently Asked Questions About Reforbs Pune"
        subtitle="Clear, direct answers on monthly rent, security deposits, Co-Living zero lock-in, Student Housing terms, meals, and scheduling a visit."
        faqs={HOME_FAQS}
      />
      <CtaSection />
    </>
  );
}

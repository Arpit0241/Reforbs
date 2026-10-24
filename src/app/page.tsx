"use client";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyReforbs from "@/components/home/WhyReforbs";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import CommunitySection from "@/components/home/CommunitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedProperties />
      <WhyReforbs />
      <AmenitiesSection />
      <CommunitySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

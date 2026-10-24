"use client";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import PropertyCategories from "@/components/home/PropertyCategories";
import WhyReforbs from "@/components/home/WhyReforbs";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import CommunitySection from "@/components/home/CommunitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PropertyCategories />
      <WhyReforbs />
      <FeaturedProperties />
      <AmenitiesSection />
      <CommunitySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

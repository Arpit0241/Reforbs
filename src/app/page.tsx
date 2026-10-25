import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyReforbs from "@/components/home/WhyReforbs";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import CommunitySection from "@/components/home/CommunitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Reforbs Living | Modern Co-Living & Student Housing in Pune",
  description:
    "Reforbs offers innovative co-living spaces and student housing in Viman Nagar, Pune. Single & double occupancy rooms, benchmark amenities, vibrant backpacker-inspired community, and zero restrictions.",
};

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

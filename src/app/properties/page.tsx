import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PropertyMapProvider } from "@/context/PropertyMapContext";
import ListingToMapSplitView from "@/components/map/ListingToMapSplitView";
import { MapPin, Building2, Palmtree } from "lucide-react";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Co-Living & Student Housing in Pune: Properties | Reforbs",
  description:
    "Compare Reforbs co-living and student housing properties in Pune by price, location and room type. Rents, deposits and inclusions listed upfront.",
  path: "/properties",
  image: "/images/pune-hero-banner.jpg",
});

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAFAFA]">
      {/* Page Header with Pune Landmarks Background Collage */}
      <div className="relative text-white py-12 sm:py-16 overflow-hidden mb-6 bg-[#002D2D]">
        {/* Background Photograph */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/images/pune-hero-banner.jpg"
            alt="Pune City Landmarks - Shaniwar Wada, Sarasbaug, Lal Mahal"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform scale-[1.01]"
            quality={95}
          />
          {/* Subtle Dark Overlay preserving the vibrant colors of the Pune collage while maintaining text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* City Selection Pills */}
          <div className="inline-flex items-center p-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 mb-5 max-w-full overflow-x-auto no-scrollbar shadow-lg">
            <span className="px-4 py-2 rounded-full text-xs font-black bg-[#FFDE59] text-[#111827] shadow-sm flex items-center gap-1.5">
              <MapPin size={13} className="text-[#111827]" />
              <span>Pune</span>
            </span>
            <Link
              href="/goa"
              className="px-4 py-2 rounded-full text-xs font-black text-white/90 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <Palmtree size={13} className="text-[#FFDE59]" />
              <span>Goa</span>
            </Link>
            <Link
              href="/bangalore"
              className="px-4 py-2 rounded-full text-xs font-black text-white/90 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <Building2 size={13} className="text-[#25D366]" />
              <span>Bangalore</span>
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight mb-3 text-white drop-shadow-lg">
            Explore Residences in <span className="text-[#FFDE59] underline decoration-[#FFDE59]/40 underline-offset-8">Pune</span>
          </h1>

          <p className="text-white text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-md">
            Discover Reforbs handpicked co-living and student residences across prime locations in Pune. Thoughtfully curated for freedom, comfort, zero lock-ins, and vibrant community living.
          </p>
        </div>
      </div>

      {/* Split-View Map & Listings Provider */}
      <PropertyMapProvider initialCategory="all">
        <ListingToMapSplitView />
      </PropertyMapProvider>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PropertyMapProvider } from "@/context/PropertyMapContext";
import ListingToMapSplitView from "@/components/map/ListingToMapSplitView";
import { MapPin, Building2, Palmtree } from "lucide-react";
import { publicPropertiesData } from "@/data/properties";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildPropertyListSchema } from "@/lib/schema";

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

      {/* Server-Rendered Pune Property Directory Summary for Direct Crawling & Quick Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
          <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1B1D1C] mb-2">
            Compare All Active Reforbs Residences in Pune
          </h2>
          <p className="text-xs sm:text-sm text-[#4A524F] mb-6 font-medium">
            Verified rents, refundable deposits, and lock-in policies across Viman Nagar, Sanjay Park, and Lavale. Looking for B2B employee accommodation? See{" "}
            <Link href="/corporate-stays" className="text-[#007A7A] underline font-bold">
              Corporate Stays
            </Link>
            .
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E1E7E6] text-[#1B1D1C] font-black">
                  <th className="py-3 pr-4">Residence</th>
                  <th className="py-3 pr-4">Category</th>
                  <th className="py-3 pr-4">Locality &amp; Landmark</th>
                  <th className="py-3 pr-4">Starting Rent</th>
                  <th className="py-3 pr-4">Lock-in</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E7E6] font-medium text-[#4A524F]">
                {publicPropertiesData.map((prop) => (
                  <tr key={prop.id} className="hover:bg-[#FAFAFA]">
                    <td className="py-3 pr-4 font-black text-[#007A7A]">
                      <Link href={prop.slug} className="hover:underline">
                        {prop.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4">{prop.category}</td>
                    <td className="py-3 pr-4">
                      {prop.locality} ({prop.landmark})
                    </td>
                    <td className="py-3 pr-4 font-bold text-[#1B1D1C]">{prop.price}/mo</td>
                    <td className="py-3 pr-4">{prop.lockInPeriod === "Annual" ? "Annual Academic" : "Zero Lock-in"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          buildPropertyListSchema("Reforbs Pune Properties", "/properties", publicPropertiesData),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Properties", path: "/properties" },
          ]),
        ]}
      />
    </div>
  );
}

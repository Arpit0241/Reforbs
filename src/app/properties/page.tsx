import type { Metadata } from "next";
import Link from "next/link";
import { PropertyMapProvider } from "@/context/PropertyMapContext";
import ListingToMapSplitView from "@/components/map/ListingToMapSplitView";
import { MapPin, Sparkles, Building2, GraduationCap, Palmtree } from "lucide-react";

export const metadata: Metadata = {
  title: "Properties & Interactive Map | Reforbs Living Viman Nagar, Pune",
  description:
    "Browse student housing and co-living residences in Viman Nagar, Pune with our interactive live map sync. Explore Shubh Gateway, Sakore Nagar, Moksha, Vipasana, and Shubh Nirvana.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#FAFAFA]">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#006A6A] to-[#007A7A] text-white py-12 sm:py-16 relative overflow-hidden mb-6">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFDE59]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* City Selection Pills */}
          <div className="inline-flex items-center p-1.5 bg-black/25 backdrop-blur-md rounded-full border border-white/20 mb-5 max-w-full overflow-x-auto no-scrollbar shadow-lg">
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

          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight mb-3 text-white">
            Explore Residences in <span className="text-[#FFDE59] underline decoration-[#FFDE59]/40 underline-offset-8">Pune</span>
          </h1>

          <p className="text-white text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-medium text-white/95">
            Browse our handpicked student sanctuaries and co-living spaces with live map tracking. Hover any card on desktop or scroll to automatically pinpoint locations in Pune.
          </p>
        </div>
      </div>

      {/* Split-View Map & Listings Provider */}
      <PropertyMapProvider initialCategory="all">
        <ListingToMapSplitView />
      </PropertyMapProvider>
    </main>
  );
}

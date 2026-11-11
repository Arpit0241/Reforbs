import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Palmtree,
  Building2,
  ArrowRight,
} from "lucide-react";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Coming Soon to Goa & Bangalore | Reforbs Living",
  description:
    "Reforbs Living is expanding to Goa and Bangalore. Register interest for launch updates on upcoming backpacker hostels and co-living spaces.",
  path: "/coming-soon",
  noindex: true,
});

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F4F3] text-[#007A7A] font-black text-xs uppercase tracking-wider mb-5">
          <Sparkles size={14} className="text-[#007A7A]" />
          <span>New Destinations Launching Soon</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-heading text-[#111827] mb-4">
          Coming Soon to <span className="text-[#007A7A]">Goa</span> &amp; <span className="text-[#007A7A]">Bangalore</span>
        </h1>

        <p className="text-[#4A524F] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          We are bringing the authentic Reforbs culture of zero lock-ins, vibrant community, and direct host pricing to India&apos;s favorite travel and tech destinations.
        </p>

        {/* City Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
          {/* Goa */}
          <Link
            href="/goa"
            className="p-7 rounded-3xl bg-white border border-[#E1E7E6] shadow-sm hover:shadow-stanza hover:border-[#007A7A] transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9D4] text-[#007A7A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Palmtree size={24} />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-black font-heading text-[#111827] group-hover:text-[#007A7A]">
                Goa
              </h3>
              <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-[#FFF9D4] text-[#1B1D1C]">
                Coming Soon
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed mb-4">
              Backpackers hostels, beachside workations, and boutique hotel stays across North &amp; South Goa.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#007A7A]">
              <span>View Goa Details</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Bangalore */}
          <Link
            href="/bangalore"
            className="p-7 rounded-3xl bg-white border border-[#E1E7E6] shadow-sm hover:shadow-stanza hover:border-[#007A7A] transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Building2 size={24} />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-black font-heading text-[#111827] group-hover:text-[#007A7A]">
                Bangalore
              </h3>
              <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-[#FFF9D4] text-[#1B1D1C]">
                Coming Soon
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed mb-4">
              Next-generation co-living sanctuaries for tech professionals in Koramangala, Indiranagar, and HSR Layout.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#007A7A]">
              <span>View Bangalore Details</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Back to Active Pune Spaces */}
        <div className="pt-6 border-t border-[#E1E7E6]">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#007A7A] text-white font-bold text-sm shadow-md hover:bg-[#005F5F] transition-all"
          >
            <MapPin size={16} className="text-[#FFDE59]" />
            <span>Explore Active Pune Properties (10 Spaces)</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

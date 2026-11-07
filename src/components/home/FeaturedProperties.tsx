"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Sparkles,
  ArrowRight,
  Wifi,
  Tv,
  Laptop,
  Sofa,
  Utensils,
  Car,
  Smile,
  Shirt,
  Zap,
  Palmtree,
} from "lucide-react";
import ListingToMapSplitView from "@/components/map/ListingToMapSplitView";
import { PropertyMapProvider } from "@/context/PropertyMapContext";

export default function FeaturedProperties() {
  return (
    <section id="properties" className="pt-8 sm:pt-12 pb-20 bg-[#FAFAFA] relative overflow-x-clip">
      <div id="student-housing" className="absolute -top-24 left-0" />
      <div id="co-living" className="absolute -top-24 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Tight, balanced spacing with immediate visibility */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F3] text-[#007A7A] font-black text-xs uppercase tracking-wider mb-3.5 font-heading"
          >
            <Sparkles size={14} className="text-[#007A7A]" />
            <span>Curated Living Experiences</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-heading tracking-tight leading-tight mb-3"
          >
            Our <span className="text-[#007A7A]">Properties</span> in Pune
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A524F] text-sm sm:text-base md:text-lg leading-relaxed font-semibold max-w-2xl mx-auto mb-4"
          >
            Explore handcrafted student sanctuaries and vibrant co-living spaces in Pune. Designed for freedom, comfort, and real community.
          </motion.p>

          {/* Top-Level City Selector: Pune, Goa, Bangalore */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 max-w-full">
            <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#007A7A] text-white font-extrabold text-xs sm:text-sm shadow-md">
              <MapPin size={15} className="text-[#FFDE59]" />
              <span>Pune</span>
            </span>

            <Link
              href="/goa"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-[#E6F4F3] text-[#111827] hover:text-[#007A7A] border border-[#E1E7E6] font-bold text-xs sm:text-sm shadow-sm transition-all group active:scale-95"
            >
              <Palmtree size={15} className="text-[#007A7A]" />
              <span>Goa</span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#FFF9D4] text-[#1B1D1C] group-hover:bg-[#FFDE59]">
                Coming Soon
              </span>
            </Link>

            <Link
              href="/bangalore"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-[#E6F4F3] text-[#111827] hover:text-[#007A7A] border border-[#E1E7E6] font-bold text-xs sm:text-sm shadow-sm transition-all group active:scale-95"
            >
              <Building2 size={15} className="text-[#007A7A]" />
              <span>Bangalore</span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#FFF9D4] text-[#1B1D1C] group-hover:bg-[#FFDE59]">
                Coming Soon
              </span>
            </Link>
          </div>

          {/* Animated Accent Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="h-1 w-20 bg-[#007A7A] rounded-full mx-auto mt-2 mb-2"
          />
        </div>

        {/* Interactive Listing-to-Map Sync View (Single Dedicated Option) */}
        <div className="w-full">
          <PropertyMapProvider initialCategory="all">
            <ListingToMapSplitView isEmbedded />
          </PropertyMapProvider>
        </div>

        {/* Walkthrough CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#111827] border-2 border-[#E1E7E6] hover:border-[#007A7A] hover:text-[#007A7A] font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>Book A Free In-Person Walkthrough</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Colorful Luxury All-Inclusive Amenities Card */}
        <div id="amenities" className="mt-20 relative rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl bg-gradient-to-br from-[#0D1F1C] via-[#082E29] to-[#041B18] text-white border border-white/20">
          {/* Multi-color ambient background glowing orbs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#007A7A]/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#FFDE59]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFDE59] to-[#FACC15] text-[#111827] font-black text-xs uppercase tracking-wider mb-3 shadow-md font-heading">
              <Sparkles size={14} className="text-[#111827]" />
              <span>All-Inclusive Amenities</span>
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Everything you need, <span className="text-[#FFDE59]">already included</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/85 mt-2.5 font-medium leading-relaxed">
              Zero extra hidden maintenance bills. Everything is transparent, fully serviced, and ready on day one.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {[
              { name: "Free High Speed WiFi", icon: Wifi, bg: "bg-[#06B6D4]/20", border: "border-[#06B6D4]/40", text: "text-[#22D3EE]" },
              { name: "TV & Streaming", icon: Tv, bg: "bg-[#8B5CF6]/20", border: "border-[#8B5CF6]/40", text: "text-[#C084FC]" },
              { name: "Work Desks", icon: Laptop, bg: "bg-[#10B981]/20", border: "border-[#10B981]/40", text: "text-[#34D399]" },
              { name: "Spacious Living Area", icon: Sofa, bg: "bg-[#F59E0B]/20", border: "border-[#F59E0B]/40", text: "text-[#FBBF24]" },
              { name: "Private Kitchen", icon: Utensils, bg: "bg-[#F43F5E]/20", border: "border-[#F43F5E]/40", text: "text-[#FB7185]" },
              { name: "Daily Cleaning", icon: Sparkles, bg: "bg-[#14B8A6]/20", border: "border-[#14B8A6]/40", text: "text-[#2DD4BF]" },
              { name: "Free Parking", icon: Car, bg: "bg-[#6366F1]/20", border: "border-[#6366F1]/40", text: "text-[#818CF8]" },
              { name: "Freedom (Zero Bans)", icon: Smile, bg: "bg-[#FFDE59]/25", border: "border-[#FFDE59]/60", text: "text-[#FFDE59]" },
              { name: "Laundry Care", icon: Shirt, bg: "bg-[#0EA5E9]/20", border: "border-[#0EA5E9]/40", text: "text-[#38BDF8]" },
              { name: "Inverter Backup", icon: Zap, bg: "bg-[#EAB308]/20", border: "border-[#EAB308]/40", text: "text-[#FACC15]" },
            ].map((facility, i) => {
              const Icon = facility.icon;
              return (
                <div
                  key={i}
                  className="group flex items-center gap-2.5 p-2.5 sm:p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-white/30 text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm min-h-[58px]"
                >
                  <div className={`w-8 h-8 rounded-xl ${facility.bg} ${facility.text} border ${facility.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-[11px] sm:text-xs leading-snug text-white font-extrabold break-words min-w-0">{facility.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

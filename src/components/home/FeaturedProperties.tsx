"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Check,
  ArrowRight,
  GraduationCap,
  Building2,
  Compass,
  Star,
  Sparkles,
  LayoutGrid,
  Search,
  X,
  RotateCcw,
  Wifi,
  Tv,
  Laptop,
  Sofa,
  Utensils,
  Car,
  Smile,
  Shirt,
  Zap,
} from "lucide-react";
import ListingToMapSplitView from "@/components/map/ListingToMapSplitView";
import { PropertyMapProvider } from "@/context/PropertyMapContext";
import { PropertyItem, propertiesData } from "@/data/properties";
import { Palmtree } from "lucide-react";

export default function FeaturedProperties() {
  const [viewMode, setViewMode] = useState<"map" | "grid">("map");
  const [activeTab, setActiveTab] = useState<"all" | "student" | "coliving" | "guesthouse">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(35000);
  const [activePhotoMap, setActivePhotoMap] = useState<{ [id: string]: string }>({});

  const filtered = propertiesData.filter((p) => {
    // Category filter
    if (activeTab === "student" && p.category !== "Student Accommodation") return false;
    if (activeTab === "coliving" && p.category !== "Co-Living") return false;
    if (activeTab === "guesthouse" && p.category !== "Company Guesthouse") return false;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.subLocation.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.outcome.toLowerCase().includes(q) ||
        p.highlights.some((h) => h.toLowerCase().includes(q));
      if (!match) return false;
    }

    // Price filter
    if (maxPrice < 35000) {
      const numeric = p.priceNum || parseInt((p.priceDouble || p.stat1Value).replace(/[^0-9]/g, ""), 10) || 0;
      if (numeric > maxPrice) return false;
    }

    return true;
  });

  const setPhoto = (propId: string, img: string) => {
    setActivePhotoMap((prev) => ({ ...prev, [propId]: img }));
  };

  return (
    <section id="properties" className="pt-8 sm:pt-12 pb-20 bg-[#FAFAFA] relative overflow-x-clip">
      <div id="student-housing" className="absolute -top-24 left-0" />
      <div id="co-living" className="absolute -top-24 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Tight, balanced spacing with immediate visibility */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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

          {/* Headline - Guaranteed visible, crisp, and no blank space */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-heading tracking-tight leading-tight mb-3"
          >
            Our <span className="text-[#007A7A]">Properties</span> in Viman Nagar
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A524F] text-sm sm:text-base md:text-lg leading-relaxed font-semibold max-w-2xl mx-auto mb-4"
          >
            Explore handcrafted student sanctuaries and vibrant co-living spaces in Viman Nagar, Pune. Designed for freedom, comfort, and real community.
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
            className="h-1 w-20 bg-[#007A7A] rounded-full mx-auto mt-2 mb-6 md:my-5"
          />

          {/* View Mode Switcher: Interactive Map vs Cards Grid (Hidden on mobile per prompt; preserved on tablet & desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
          >
            {/* View Mode Toggle Pill */}
            <div className="inline-flex items-center p-1.5 bg-white rounded-full border border-[#E1E7E6] shadow-sm">
              <button
                onClick={() => setViewMode("map")}
                className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-2 transition-all active:scale-95 ${
                  viewMode === "map"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:text-[#007A7A]"
                }`}
              >
                <MapPin size={16} className={viewMode === "map" ? "text-[#FFDE59]" : "text-[#007A7A]"} />
                <span>Interactive Map</span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#FFDE59] text-[#111827]">
                  Live Sync
                </span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-2 transition-all active:scale-95 ${
                  viewMode === "grid"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:text-[#007A7A]"
                }`}
              >
                <LayoutGrid size={16} />
                <span>Cards Grid</span>
              </button>
            </div>
          </motion.div>

          {/* Unified Property Discovery Controls (shown when in grid mode) */}
          {viewMode === "grid" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E1E7E6] shadow-sm mb-6 max-w-4xl mx-auto text-left"
            >
              {/* Category Filter Tabs & Search Row */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-black transition-all whitespace-nowrap active:scale-95 ${
                      activeTab === "all"
                        ? "bg-[#007A7A] text-white shadow-sm"
                        : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
                    }`}
                  >
                    All Properties
                  </button>
                  <button
                    onClick={() => setActiveTab("student")}
                    className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                      activeTab === "student"
                        ? "bg-[#007A7A] text-white shadow-sm"
                        : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
                    }`}
                  >
                    <GraduationCap size={15} />
                    <span>Student Housing</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("coliving")}
                    className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                      activeTab === "coliving"
                        ? "bg-[#007A7A] text-white shadow-sm"
                        : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
                    }`}
                  >
                    <Building2 size={15} />
                    <span>Co-Living</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("guesthouse")}
                    className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                      activeTab === "guesthouse"
                        ? "bg-[#007A7A] text-white shadow-sm"
                        : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
                    }`}
                  >
                    <Building2 size={15} />
                    <span>Company Guesthouses</span>
                  </button>
                </div>

                {/* Quick Search & Price Filter */}
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 sm:w-64">
                    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                    <input
                      type="text"
                      placeholder="Search residences, locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full min-h-[44px] pl-9 pr-8 py-2 text-xs font-bold rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] focus:outline-none focus:border-[#007A7A] focus:ring-2 focus:ring-[#007A7A]/20"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <select
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="min-h-[44px] px-3.5 py-2 text-xs font-black rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] text-[#111827] focus:outline-none focus:border-[#007A7A] cursor-pointer"
                      aria-label="Filter by maximum price"
                    >
                      <option value={35000}>Max Price: Any</option>
                      <option value={15000}>Under ₹15,000/mo</option>
                      <option value={20000}>Under ₹20,000/mo</option>
                      <option value={25000}>Under ₹25,000/mo</option>
                      <option value={30000}>Under ₹30,000/mo</option>
                    </select>
                  </div>

                  {(activeTab !== "all" || maxPrice < 35000 || searchQuery) && (
                    <button
                      onClick={() => {
                        setActiveTab("all");
                        setSearchQuery("");
                        setMaxPrice(35000);
                      }}
                      className="min-h-[44px] px-3 py-2 rounded-2xl bg-[#FEE2E2] hover:bg-[#FECACA] text-[#DC2626] font-black text-xs flex items-center gap-1 transition-all"
                      title="Reset all filters"
                    >
                      <RotateCcw size={13} />
                      <span className="hidden sm:inline">Reset</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Dynamic View: Interactive Listing-to-Map Sync or Cards Grid */}
        {viewMode === "map" ? (
          <div className="w-full">
            <PropertyMapProvider key={activeTab} initialCategory={activeTab}>
              <ListingToMapSplitView isEmbedded />
            </PropertyMapProvider>
          </div>
        ) : (
          <>
            {/* Property Cards Grid: Elo One-Style Stacked Paper Layer Cards with 120ms Stagger */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filtered.map((property, idx) => {
            const currentImg = activePhotoMap[property.id] || property.coverImage;

            return (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-3xl p-6 sm:p-7 text-white bg-[#0D2826] bg-gradient-to-br ${property.cardGradient || "from-[#006E6E] via-[#004A4A] to-[#032323]"} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between overflow-hidden border border-white/15`}
              >
                {/* Subtle Glow Overlay */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div>
                  {/* Top Bar: Client / Property Name + Monogram */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                          {property.category}
                        </span>
                        <span className="text-[10px] text-white/80 font-bold flex items-center gap-1">
                          <MapPin size={11} className="text-[#FFDE59]" />
                          <span>{property.subLocation}</span>
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-white font-heading tracking-tight leading-tight">
                        {property.name}
                      </h3>
                      <p className="text-xs text-white/80 font-medium mt-1 line-clamp-1">
                        {property.outcome}
                      </p>
                    </div>

                    {/* Monogram Icon */}
                    <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0 text-white group-hover:rotate-6 transition-transform">
                      {property.monogram === "grad" ? (
                        <GraduationCap size={20} />
                      ) : property.monogram === "compass" ? (
                        <Compass size={20} />
                      ) : (
                        <Building2 size={20} />
                      )}
                    </div>
                  </div>

                  {/* Dual Big Stats Section (Divided by Thin Translucent Rule) */}
                  <div className="grid grid-cols-2 gap-3 py-4 my-2 border-y border-white/15">
                    {/* Stat 1 */}
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-heading text-[#FFDE59] tracking-tight">
                        {property.stat1Value}
                      </div>
                      <div className="text-[11px] text-white/85 font-semibold mt-0.5">
                        {property.stat1Label}
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="border-l border-white/15 pl-3">
                      <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                        {property.stat2Value}
                      </div>
                      <div className="text-[11px] text-white/85 font-semibold mt-0.5">
                        {property.stat2Label}
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet Tags */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {property.highlights.slice(0, 3).map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-black/20 text-white/90 backdrop-blur-sm"
                      >
                        <Check size={11} className="text-[#FFDE59]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lower Photo Section: Framed by Stacked Translucent "Paper" Layers that Fan Out on Hover */}
                <div className="mt-5 pt-3">
                  <div className="relative pt-3 pb-1">
                    {/* Stacked Paper Layer 1 (peeking behind left) */}
                    <div className="absolute inset-x-2 -top-1 bottom-3 bg-white/20 rounded-2xl -rotate-1.5 transition-transform duration-500 ease-out group-hover:-rotate-3.5 group-hover:-translate-y-2 pointer-events-none" />

                    {/* Stacked Paper Layer 2 (peeking behind right) */}
                    <div className="absolute inset-x-2 -top-0.5 bottom-3 bg-white/30 rounded-2xl rotate-1.5 transition-transform duration-500 ease-out group-hover:rotate-3.5 group-hover:-translate-y-1 pointer-events-none" />

                    {/* Main Image Frame (3:2 Ratio) */}
                    <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/30 z-10">
                      <Image
                        src={currentImg}
                        alt={property.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Photo Badge */}
                      <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1 border border-white/20">
                        <Star size={11} className="text-[#FFDE59] fill-[#FFDE59]" />
                        <span>4.9 / 5</span>
                      </div>
                    </div>
                  </div>

                  {/* Real Photo Thumbnail Strip */}
                  <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar py-1">
                    {property.gallery.map((thumb, tIdx) => (
                      <button
                        key={tIdx}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setPhoto(property.id, thumb);
                        }}
                        className={`relative w-12 h-9 rounded-lg overflow-hidden shrink-0 border transition-all active:scale-95 ${
                          currentImg === thumb
                            ? "border-[#FFDE59] ring-2 ring-[#FFDE59]/50 scale-105"
                            : "border-white/30 opacity-70 hover:opacity-100"
                        }`}
                        aria-label={`Preview photo ${tIdx + 1} of ${property.name}`}
                      >
                        <Image
                          src={thumb}
                          alt={`${property.name} thumb ${tIdx}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                    <span className="text-[10px] text-white/70 font-semibold ml-auto pl-1 whitespace-nowrap">
                      4 Real Photos
                    </span>
                  </div>

                  {/* Card Bottom CTA Row (Stanza Style) */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/15">
                    {/* WhatsApp CTA (>= 44px) */}
                    <a
                      href={`https://wa.me/${
                        property.contactPhone
                          ? property.contactPhone.replace(/\D/g, "").length === 10
                            ? "91" + property.contactPhone.replace(/\D/g, "")
                            : property.contactPhone.replace(/\D/g, "")
                          : "917420040241"
                      }?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                        property.name
                      )}%20(${encodeURIComponent(property.subLocation)}).%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 min-h-[46px] px-3 py-2.5 rounded-xl bg-white/15 hover:bg-[#25D366] text-white border border-white/25 transition-all text-xs font-bold active:scale-95 text-center"
                      aria-label={`WhatsApp host for ${property.name}`}
                    >
                      <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>

                    {/* Schedule Visit CTA (>= 44px) */}
                    <Link
                      href={property.link}
                      className="flex items-center justify-center gap-1.5 min-h-[46px] px-3 py-2.5 rounded-xl bg-[#FFDE59] hover:bg-[#FACC15] text-[#111827] font-black text-xs shadow-md transition-all active:scale-95 text-center"
                    >
                      <span>Schedule Visit</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Centered Pill Button (Fades Up Last in Motion Sequence) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#111827] border-2 border-[#E1E7E6] hover:border-[#007A7A] hover:text-[#007A7A] font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>Book A Free In-Person Walkthrough</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
          </>
        )}

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

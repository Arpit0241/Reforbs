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
} from "lucide-react";

export interface PropertyItem {
  id: string;
  name: string;
  category: "Student Housing" | "Co-Living";
  tag: string;
  outcome: string;
  monogram: "grad" | "building" | "compass";
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  location: string;
  subLocation: string;
  priceDouble: string;
  priceSingle: string;
  cardGradient: string;
  coverImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  link: string;
}

export const propertiesData: PropertyItem[] = [
  // 1. Shubh Gateway
  {
    id: "shubh-gateway",
    name: "Shubh Gateway",
    category: "Student Housing",
    tag: "Opposite Symbiosis Law School",
    outcome: "Zero-commute legal sanctuary • Opp. SLS Gate",
    monogram: "grad",
    stat1Value: "₹12,500",
    stat1Label: "Starting Rent /mo",
    stat2Value: "1 Min",
    stat2Label: "Walk to SLS Campus",
    location: "Viman Nagar, Pune",
    subLocation: "Directly opposite SLS Campus Gate",
    priceDouble: "₹12,500",
    priceSingle: "₹18,000",
    cardGradient: "from-[#006E6E] via-[#004A4A] to-[#032323]",
    coverImage: "/assets/pdf/extracted/page-7-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-7-image-1-X4.jpg",
      "/assets/pdf/extracted/page-7-image-2-X6.jpg",
      "/assets/pdf/extracted/page-7-image-3-X7.jpg",
      "/assets/pdf/extracted/page-7-image-4-X8.jpg",
    ],
    description:
      "Directly opposite Symbiosis Law School. Purpose-built for law students needing quiet study sanctuaries, zero daily commute, high-speed fiber, and round-the-clock supportive hosts.",
    highlights: ["Opposite SLS Campus", "Quiet Study Zone", "Zero Commute", "Private Kitchens"],
    link: "/student-housing/shubh-gateway",
  },

  // 2. Sakore Nagar
  {
    id: "sakore-nagar",
    name: "Reforbs Living Sakore Nagar",
    category: "Student Housing",
    tag: "Near SCMS & Symbiosis Hub",
    outcome: "Balcony bedrooms • Daily housekeeping included",
    monogram: "grad",
    stat1Value: "₹12,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "3 Mins",
    stat2Label: "Walk to SCMS Campus",
    location: "Sakore Nagar, Viman Nagar, Pune",
    subLocation: "3 mins walk to SCMS campus",
    priceDouble: "₹12,000",
    priceSingle: "₹17,500",
    cardGradient: "from-[#B45309] via-[#854D0E] to-[#361805]",
    coverImage: "/assets/pdf/extracted/page-6-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-6-image-1-X4.jpg",
      "/assets/pdf/extracted/page-6-image-2-X6.jpg",
      "/assets/pdf/extracted/page-6-image-3-X7.jpg",
      "/assets/pdf/extracted/page-6-image-4-X8.jpg",
    ],
    description:
      "Modern student residence nestled in peaceful Sakore Nagar, Viman Nagar. Features spacious balconies, daily housekeeping, high-speed fiber, and full cooking freedom.",
    highlights: ["3 Mins to SCMS", "Balcony Bedrooms", "Daily Housekeeping", "Laundry Care"],
    link: "/student-housing/sakore-nagar",
  },

  // 3. Moksha
  {
    id: "moksha",
    name: "Moksha",
    category: "Co-Living",
    tag: "Bohemian Terraces & Patios",
    outcome: "Fairy-lit rooftop gardens • Work lounges",
    monogram: "compass",
    stat1Value: "₹14,500",
    stat1Label: "Starting Rent /mo",
    stat2Value: "100%",
    stat2Label: "Cooking Freedom",
    location: "Viman Nagar, Pune",
    subLocation: "Near Joggers Park & Cafes",
    priceDouble: "₹14,500",
    priceSingle: "₹22,000",
    cardGradient: "from-[#047857] via-[#064E3B] to-[#02241B]",
    coverImage: "/assets/pdf/extracted/page-3-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-3-image-1-X4.jpg",
      "/assets/pdf/extracted/page-3-image-2-X6.jpg",
      "/assets/pdf/extracted/page-3-image-3-X7.jpg",
      "/assets/pdf/extracted/page-3-image-4-X8.jpg",
    ],
    description:
      "Curated co-living spaces with bohemian green patios, serene ambiance, and private workstations for creators, consultants, and IT pros in Pune.",
    highlights: ["Zen Terrace Garden", "Private Work Desks", "Full Power Backup", "Freedom to Cook"],
    link: "/coliving/moksha",
  },

  // 4. Vipasana
  {
    id: "vipasana",
    name: "Vipasana",
    category: "Co-Living",
    tag: "Mindful Urban Sanctuary",
    outcome: "High-focus work suites • Gigabit optical fiber",
    monogram: "building",
    stat1Value: "₹14,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "4.9 ★",
    stat2Label: "Resident Rating (152)",
    location: "Viman Nagar, Pune",
    subLocation: "Clover Park, Viman Nagar",
    priceDouble: "₹14,000",
    priceSingle: "₹21,000",
    cardGradient: "from-[#0E7490] via-[#155E75] to-[#082F3B]",
    coverImage: "/assets/pdf/extracted/page-4-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-4-image-1-X4.jpg",
      "/assets/pdf/extracted/page-4-image-2-X6.jpg",
      "/assets/pdf/extracted/page-4-image-3-X7.jpg",
      "/assets/pdf/extracted/page-2-image-1-X4.jpg",
    ],
    description:
      "Vipasana balances high-energy career growth with calming, mindful living. Spotless rooms, ergonomic work suites, high-speed fiber, and relaxed social lounges.",
    highlights: ["High-Focus Work Suites", "Daily Cleaning", "Zero Moral Policing", "24/7 Security"],
    link: "/coliving/vipasana",
  },

  // 5. Shubh Nirvana
  {
    id: "shubh-nirvana",
    name: "Shubh Nirvana",
    category: "Co-Living",
    tag: "Flagship Hippie & Backpacker Lounge",
    outcome: "UV neon chill lounge • Pool table & BBQs",
    monogram: "building",
    stat1Value: "₹15,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "Zero",
    stat2Label: "Rigid Curfews / Bans",
    location: "Viman Nagar, Pune",
    subLocation: "Near Phoenix Marketcity & IT Corridor",
    priceDouble: "₹15,000",
    priceSingle: "₹22,500",
    cardGradient: "from-[#7C3AED] via-[#5B21B6] to-[#250953]",
    coverImage: "/assets/pdf/extracted/page-7-image-5-X9.jpg",
    gallery: [
      "/assets/pdf/extracted/page-7-image-5-X9.jpg",
      "/assets/pdf/extracted/page-7-image-6-X10.jpg",
      "/assets/pdf/extracted/page-2-image-2-X6.jpg",
      "/assets/pdf/extracted/page-2-image-3-X7.jpg",
    ],
    description:
      "Our most vibrant co-living property inspired by the backpacker hostel cult. Glow lounges, rooftop gatherings, community BBQs, pool table, and friends welcome anytime.",
    highlights: ["UV Neon Chill Lounge", "Pool Table & Games", "Community Dinners", "No Bans or Curfews"],
    link: "/coliving/shubh-nirvana",
  },
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<"all" | "student" | "coliving">("all");
  const [activePhotoMap, setActivePhotoMap] = useState<{ [id: string]: string }>({});

  const filtered =
    activeTab === "all"
      ? propertiesData
      : activeTab === "student"
      ? propertiesData.filter((p) => p.category === "Student Housing")
      : propertiesData.filter((p) => p.category === "Co-Living");

  const setPhoto = (propId: string, img: string) => {
    setActivePhotoMap((prev) => ({ ...prev, [propId]: img }));
  };

  return (
    <section id="properties" className="pt-8 sm:pt-12 pb-20 bg-[#FAFAFA] relative overflow-hidden">
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

          {/* Animated Accent Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="h-1 w-20 bg-[#007A7A] rounded-full mx-auto my-5"
          />

          {/* Stanza-style Category Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="inline-flex items-center gap-2 p-1.5 bg-white rounded-full border border-[#E1E7E6] shadow-sm max-w-full overflow-x-auto no-scrollbar"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs font-extrabold transition-all whitespace-nowrap active:scale-95 ${
                activeTab === "all"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "text-[#666B68] hover:text-[#007A7A]"
              }`}
            >
              All Properties ({propertiesData.length})
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                activeTab === "student"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "text-[#666B68] hover:text-[#007A7A]"
              }`}
            >
              <GraduationCap size={15} />
              <span>Student Housing (2)</span>
            </button>
            <button
              onClick={() => setActiveTab("coliving")}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                activeTab === "coliving"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "text-[#666B68] hover:text-[#007A7A]"
              }`}
            >
              <Building2 size={15} />
              <span>Co-Living (3)</span>
            </button>
          </motion.div>
        </div>

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
                className={`group relative rounded-3xl p-6 sm:p-7 text-white bg-gradient-to-br ${property.cardGradient} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between overflow-hidden border border-white/15`}
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
                      href={`https://wa.me/917420040241?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20${encodeURIComponent(
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

        {/* Amenities Bar from reforbs.com */}
        <div id="amenities" className="mt-20 bg-white rounded-3xl p-8 sm:p-10 border border-[#E1E7E6] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="badge-eyebrow mb-2">Amenities</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#111827] font-heading">
              Everything you need, already included
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] mt-2 font-semibold">
              Zero extra hidden maintenance bills. Everything is transparent and ready on day one.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              "Free High Speed WiFi",
              "TV & Streaming",
              "Work Desks",
              "Spacious Living Area",
              "Private Kitchen",
              "Daily Cleaning Services",
              "Free Parking",
              "Freedom (Zero Bans)",
              "Laundry Care",
              "Full Power Backup",
            ].map((facility, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] text-xs font-bold text-[#111827] hover:bg-[#E6F4F3] hover:text-[#007A7A] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#007A7A]" />
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

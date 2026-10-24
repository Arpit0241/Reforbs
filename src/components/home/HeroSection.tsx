"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Building, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const heroSlides = [
  {
    image: "/assets/543f61a0a_generated_0051b70d.png",
    caption: "Young professionals enjoying in a group at Reforbs",
    tag: "Vibrant Community",
  },
  {
    image: "/assets/e74b3f267_generated_c9a9b56e.png",
    caption: "Working professionals playing games & chilling in the lounge",
    tag: "Recreation & Pool Lounge",
  },
  {
    image: "/assets/cdb800f12_generated_1e273698.png",
    caption: "Students & residents sharing meals together",
    tag: "Communal Dinners",
  },
  {
    image: "/assets/34b6a3a63_generated_21b95664.png",
    caption: "Rooftop terrace overlooking Viman Nagar at sunset",
    tag: "Breezy Sunset Terraces",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<"all" | "student" | "coliving">("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#111312]">
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-50 scale-100" : "opacity-0 scale-105"
            } transform transition-transform duration-7000`}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/60 to-[#111312]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Reforbs Living Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFDE59] text-xs sm:text-sm font-extrabold mb-6 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#007A7A] animate-pulse" />
            <span>Reforbs Living • Viman Nagar, Pune</span>
          </div>

          {/* Punchy Headline from reforbs.com */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 font-heading">
            Not just an accommodation, <br className="hidden sm:block" />
            but an{" "}
            <span className="text-[#FFDE59] underline decoration-[#007A7A] decoration-4 underline-offset-8">
              experience
            </span>{" "}
            to cherish.
          </h1>

          <p className="text-base sm:text-xl text-[#E1E7E6] leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Premium co-living spaces and student housing in Pune designed for modern working professionals and students. High vibes, true freedom, and zero restrictions.
          </p>

          {/* Sales Anti-Spam Guarantee Box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#007A7A]/30 backdrop-blur-md border border-[#007A7A]/50 text-xs sm:text-sm text-white mb-10 shadow-lg">
            <ShieldCheck size={16} className="text-[#FFDE59]" />
            <span className="font-extrabold text-[#FFDE59]">Take it if you like it!!</span>
            <span className="text-white/90">We don&apos;t push for sales. You will never receive a follow-up call from our side.</span>
          </div>
        </div>

        {/* Stanza-style Modern Search & Quick Filter Component */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/60">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E1E7E6] pb-4 mb-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === "all"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                All Properties
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("student")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === "student"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                🎓 Student Housing (Opp. SLS &amp; SCMS)
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("coliving")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === "coliving"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                💼 Co-Living (Moksha, Vipasana, Nirvana)
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#007A7A] bg-[#E6F4F3] px-3 py-1 rounded-full">
              <span>● Immediate Move-In</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            <div className="sm:col-span-5 bg-[#F1F4F4] rounded-2xl p-3 px-4 border border-[#E1E7E6]">
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#666B68] mb-0.5">
                Target Locality
              </label>
              <div className="flex items-center gap-2 text-[#1B1D1C] font-bold text-sm">
                <MapPin size={16} className="text-[#007A7A] shrink-0" />
                <span>Viman Nagar, Pune</span>
              </div>
            </div>

            <div className="sm:col-span-4 bg-[#F1F4F4] rounded-2xl p-3 px-4 border border-[#E1E7E6]">
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#666B68] mb-0.5">
                Nearby Hub / College
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent w-full text-sm font-bold text-[#1B1D1C] focus:outline-none cursor-pointer"
              >
                <option value="all">Symbiosis Law School (SLS)</option>
                <option value="scms">Symbiosis Mgmt (SCMS)</option>
                <option value="phoenix">Phoenix Marketcity / WeWork</option>
                <option value="airport">Pune Airport / Sakore Nagar</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <Link
                href="/#properties"
                className="btn-teal w-full py-3.5 rounded-2xl justify-center font-extrabold text-sm shadow-md"
              >
                <Search size={16} />
                <span>Explore Spaces</span>
              </Link>
            </div>
          </div>

          {/* Quick Perks Line from PDF */}
          <div className="mt-4 pt-3 border-t border-[#E1E7E6] flex flex-wrap items-center justify-between text-xs text-[#4A524F] font-semibold gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#007A7A]" /> Zero Lock-in Period
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#007A7A]" /> Private Kitchen &amp; Balconies
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#007A7A]" /> No Imposed Mess Fees
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#007A7A]" /> Single &amp; Double Privacy
            </span>
          </div>
        </div>

        {/* Slideshow Thumbnail Indicator Strip */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
          {heroSlides.map((slide, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentSlide === idx
                  ? "bg-white text-[#1B1D1C] shadow-lg scale-105"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${currentSlide === idx ? "bg-[#007A7A]" : "bg-white/40"}`} />
              <span className="hidden md:inline">{slide.tag}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Building2,
  GraduationCap,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Play,
  Pause,
  Compass,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "student" | "coliving">("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedHub, setSelectedHub] = useState("all");
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById("properties");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0D0C]">
      {/* High-Definition Architectural Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/543f61a0a_generated_0051b70d.png"
          className="w-full h-full object-cover scale-105 filter brightness-[0.72] contrast-[1.08]"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Dual Gradient & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/65 to-[#0A0D0C]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#004D4D]/20 to-[#0A0D0C]/90 pointer-events-none" />
      </div>

      {/* Floating Video Controller */}
      <div className="absolute top-28 right-6 z-20 hidden md:flex items-center gap-2">
        <button
          type="button"
          onClick={toggleVideo}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold transition-all hover:scale-105"
          aria-label="Toggle background video playback"
        >
          {isPlaying ? (
            <>
              <Pause size={13} className="text-[#FFDE59]" />
              <span>Video Playing</span>
            </>
          ) : (
            <>
              <Play size={13} className="text-[#FFDE59]" />
              <span>Video Paused</span>
            </>
          )}
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Live Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFDE59] text-xs sm:text-sm font-extrabold mb-6 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-white">Reforbs Living</span>
            <span className="text-white/40">•</span>
            <span>Viman Nagar, Pune</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/90 hidden sm:inline font-semibold">Direct Host Booking</span>
          </div>

          {/* Punchy Master Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 font-heading">
            Not just an accommodation, <br className="hidden sm:block" />
            but an{" "}
            <span className="text-[#FFDE59] relative inline-block underline decoration-[#007A7A] decoration-wavy decoration-2 sm:decoration-4 underline-offset-8">
              experience
            </span>{" "}
            to cherish.
          </h1>

          <p className="text-base sm:text-xl text-[#F1F5F4] leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Curated student sanctuaries and vibrant co-living spaces in <strong className="text-white font-bold">Viman Nagar, Pune</strong>. Zero brokerage, chef-ready private kitchens, and zero moral policing.
          </p>

          {/* Primary High-Visibility Call & WhatsApp Quick Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            {/* Direct Call Button */}
            <a
              href="tel:+917420040241"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F1F5F4] text-[#1B1D1C] font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all group"
            >
              <div className="w-7 h-7 rounded-xl bg-[#007A7A] text-white flex items-center justify-center group-hover:bg-[#005C5C] transition-colors">
                <PhoneCall size={14} />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-[#666B68] font-bold uppercase tracking-wider leading-none">
                  Call Host Directly
                </span>
                <span className="text-sm font-extrabold text-[#1B1D1C] leading-tight">
                  +91 74200 40241
                </span>
              </div>
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Viman%20Nagar%2C%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm shadow-xl shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all"
            >
              <svg className="w-6 h-6 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat on WhatsApp</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                Online
              </span>
            </a>

            {/* Visit Booking */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FFDE59] hover:bg-[#FADC46] text-[#1B1D1C] font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles size={16} />
              <span>Schedule Free Visit</span>
            </Link>
          </div>

          {/* Sales Anti-Spam Guarantee Box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#007A7A]/35 backdrop-blur-md border border-[#007A7A]/60 text-xs sm:text-sm text-white mb-10 shadow-xl">
            <ShieldCheck size={17} className="text-[#FFDE59] shrink-0" />
            <span className="font-extrabold text-[#FFDE59]">Take it if you like it!!</span>
            <span className="text-white/90">We don&apos;t push for sales. You will never receive follow-up disturbance calls from our side.</span>
          </div>
        </div>

        {/* Stanza-style Modern Search & Quick Filter Component */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/60">
          {/* Top Category Tab Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E1E7E6] pb-4 mb-5">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  activeCategory === "all"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                All 5 Properties
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("student")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  activeCategory === "student"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                <GraduationCap size={16} className={activeCategory === "student" ? "text-white" : "text-[#007A7A]"} />
                <span>Student Housing</span>
                <span className="text-[11px] bg-black/10 px-2 py-0.5 rounded-full font-bold">
                  Near SLS &amp; SCMS
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("coliving")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  activeCategory === "coliving"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                <Building2 size={16} className={activeCategory === "coliving" ? "text-white" : "text-[#007A7A]"} />
                <span>Co-Living</span>
                <span className="text-[11px] bg-black/10 px-2 py-0.5 rounded-full font-bold">
                  Working Pros
                </span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#007A7A] bg-[#E6F4F3] px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#007A7A] animate-ping" />
              <span>Immediate Move-In Ready</span>
            </div>
          </div>

          {/* Form Filter Row */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Target Locality Dropdown */}
            <div className="sm:col-span-5 bg-[#F1F4F4] rounded-2xl p-3 px-4 border border-[#E1E7E6]">
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#666B68] mb-0.5">
                City &amp; Micro-Market
              </label>
              <div className="flex items-center gap-2 text-[#1B1D1C] font-bold text-sm">
                <MapPin size={16} className="text-[#007A7A] shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-transparent w-full text-sm font-bold text-[#1B1D1C] focus:outline-none cursor-pointer"
                  aria-label="Select micro-market in Pune"
                >
                  <option value="all">Viman Nagar, Pune (All Hubs)</option>
                  <option value="sanjay-park">Sanjay Park, Viman Nagar</option>
                  <option value="sakore-nagar">Sakore Nagar (Near SCMS)</option>
                  <option value="clover-park">Clover Park Avenue</option>
                  <option value="dutta-mandir">Dutta Mandir Chowk</option>
                </select>
              </div>
            </div>

            {/* Landmark / College Dropdown */}
            <div className="sm:col-span-4 bg-[#F1F4F4] rounded-2xl p-3 px-4 border border-[#E1E7E6]">
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#666B68] mb-0.5">
                College or Corporate Hub
              </label>
              <div className="flex items-center gap-2 text-[#1B1D1C] font-bold text-sm">
                <Compass size={16} className="text-[#007A7A] shrink-0" />
                <select
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="bg-transparent w-full text-sm font-bold text-[#1B1D1C] focus:outline-none cursor-pointer"
                  aria-label="Select college or corporate hub"
                >
                  <option value="all">Symbiosis Law School (SLS)</option>
                  <option value="scms">Symbiosis Management (SCMS)</option>
                  <option value="phoenix">Phoenix Marketcity / WeWork</option>
                  <option value="panchshil">Panchshil Tech Park / EON</option>
                  <option value="airport">Pune Airport Corridor</option>
                </select>
              </div>
            </div>

            {/* Explore Spaces Button */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="btn-teal w-full py-4 rounded-2xl justify-center font-extrabold text-sm shadow-md"
              >
                <Search size={16} />
                <span>Explore Spaces</span>
              </button>
            </div>
          </form>

          {/* Stanza-style Quick Pick Landmark Chips */}
          <div className="mt-4 pt-4 border-t border-[#E1E7E6]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-[#666B68] uppercase tracking-wider mr-1">
                Popular Searches:
              </span>
              {[
                { label: "Opp. Symbiosis SLS", href: "/student-housing/shubh-gateway" },
                { label: "Near SCMS Campus", href: "/student-housing/sakore-nagar" },
                { label: "Moksha Terrace Lounge", href: "/coliving/moksha" },
                { label: "Vipasana Work Suites", href: "/coliving/vipasana" },
                { label: "Shubh Nirvana Flagship", href: "/coliving/shubh-nirvana" },
              ].map((chip, idx) => (
                <Link
                  key={idx}
                  href={chip.href}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#F1F4F4] text-[#1B1D1C] hover:bg-[#E6F4F3] hover:text-[#007A7A] transition-colors border border-[#E1E7E6]"
                >
                  {chip.label}
                </Link>
              ))}
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
        </div>
      </div>
    </section>
  );
}

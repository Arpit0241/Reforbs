"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building, ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [stayType, setStayType] = useState<"all" | "student" | "coliving">("all");
  const [locality, setLocality] = useState("Viman Nagar");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (stayType === "student") {
      router.push("/student-housing");
    } else if (stayType === "coliving") {
      router.push("/coliving");
    } else {
      router.push("/#properties");
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Graphic & Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image4.png"
          alt="Reforbs Living Property Vibe"
          fill
          className="object-cover opacity-25 filter blur-[1px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-brand-yellow text-xs sm:text-sm font-bold mb-6">
            <Sparkles size={16} className="text-brand-yellow animate-pulse" />
            <span>Not Just An Accommodation, But An Experience To Cherish!</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight leading-[1.1] mb-6">
            Live Where The <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-cyan-300 to-brand-yellow">
              Vibes & Emotional Connect
            </span>{" "}
            Come First.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Reforbs is Pune&apos;s most innovative living ecosystem. Curated for students &amp; working professionals in{" "}
            <span className="text-brand-yellow font-semibold">Viman Nagar</span>. Single &amp; double occupancies built for freedom, community, and zero restrictions.
          </p>

          {/* Sales Promise Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs sm:text-sm text-slate-300 mb-10 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white">No-Spam Guarantee:</span>
            <span>Take it if you like it! Zero pushy follow-up calls. Ever.</span>
          </div>
        </div>

        {/* Quick Search Card (Stanza Living Inspired & Modernized) */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStayType("all")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  stayType === "all"
                    ? "bg-brand-teal text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                All Properties
              </button>
              <button
                type="button"
                onClick={() => setStayType("student")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  stayType === "student"
                    ? "bg-brand-teal text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                🎓 Student Housing (SLS / SCMS)
              </button>
              <button
                type="button"
                onClick={() => setStayType("coliving")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  stayType === "coliving"
                    ? "bg-brand-teal text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                💼 Co-Living (Nirvana & Moksha)
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Immediate Move-In</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                City &amp; Area
              </label>
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium">
                <MapPin size={18} className="text-brand-teal shrink-0" />
                <span className="font-semibold text-slate-900">Pune • Viman Nagar</span>
              </div>
            </div>

            <div className="relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Target Landmark
              </label>
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium">
                <Building size={18} className="text-brand-yellow-700 shrink-0" />
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="bg-transparent w-full text-slate-900 font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Viman Nagar">Near SLS (Symbiosis Law)</option>
                  <option value="Near SCMS">Near SCMS (Management)</option>
                  <option value="Phoenix Marketcity">Near Phoenix Mall / IT</option>
                  <option value="Viman Nagar Main">Viman Nagar Central</option>
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="btn-teal w-full py-3.5 rounded-2xl justify-center font-bold text-base shadow-lg"
              >
                <Search size={18} />
                <span>Find My Space</span>
              </button>
            </div>
          </form>

          {/* Quick Perks Line */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-brand-teal" />
              <span>Zero Lock-in Pressure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-brand-teal" />
              <span>Private Kitchen &amp; Balconies</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-brand-teal" />
              <span>Hippie &amp; Vibrant Community</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-brand-teal" />
              <span>Zero Restrictions on Friends</span>
            </div>
          </div>
        </div>

        {/* Feature Badges below Hero */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black font-heading text-brand-yellow">100%</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Single &amp; Double Privacy</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black font-heading text-brand-teal">0 Days</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Rigid Lock-in Restrictions</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black font-heading text-brand-yellow">4 Properties</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Across Viman Nagar, Pune</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black font-heading text-brand-teal">4.9 / 5</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Resident Cult Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

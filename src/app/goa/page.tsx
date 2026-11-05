"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Palmtree,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Bell,
  Phone,
  Building2,
  Users,
  Waves,
  Sun,
  Coffee,
  Wifi,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function GoaComingSoonPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#FAFAFA]">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2524] via-[#004A4A] to-[#007A7A] text-white py-16 sm:py-24">
        {/* Decorative backdrop elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFDE59]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,222,89,0.12)_0%,_transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb / City Switcher Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Link
              href="/"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={13} className="text-white/40" />
            <Link
              href="/properties"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors"
            >
              Locations
            </Link>
            <ChevronRight size={13} className="text-white/40" />
            <span className="text-xs font-bold text-[#FFDE59]">Goa</span>
          </div>

          {/* City Selection Pills */}
          <div className="inline-flex items-center p-1.5 bg-black/35 backdrop-blur-md rounded-full border border-white/20 mb-8 max-w-full overflow-x-auto no-scrollbar shadow-lg">
            <Link
              href="/properties"
              className="px-4 py-2 rounded-full text-xs font-black text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <MapPin size={13} className="text-[#FFDE59]" />
              <span>Pune</span>
            </Link>
            <span className="px-4 py-2 rounded-full text-xs font-black bg-[#FFDE59] text-[#111827] shadow-sm flex items-center gap-1.5">
              <Palmtree size={14} className="text-[#111827]" />
              <span>Goa</span>
            </span>
            <Link
              href="/bangalore"
              className="px-4 py-2 rounded-full text-xs font-black text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <Building2 size={13} className="text-[#25D366]" />
              <span>Bangalore</span>
            </Link>
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] font-black text-xs uppercase tracking-wider mb-5 shadow-sm">
            <Sparkles size={14} className="text-[#FFDE59] animate-pulse" />
            <span>Coming Soon</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-white mb-4">
            <span className="text-[#FFDE59]">Goa</span>
          </h1>

          <p className="text-white/90 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            Curated backpackers hostels, beachside digital nomad workations, and boutique hotel stays.
            Experience the genuine ReForbs culture of freedom, community, and zero lock-in stays by the Arabian Sea.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20your%20upcoming%20Goa%20properties%20(Backpackers%20%26%20Hotels).%20Please%20notify%20me%20when%20you%20launch!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm shadow-xl hover:shadow-glow active:scale-95 inline-flex items-center justify-center gap-2.5 transition-all"
            >
              <Phone size={17} />
              <span>Get WhatsApp Early Access</span>
            </a>
            <Link
              href="/properties"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-sm border border-white/20 active:scale-95 inline-flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore Pune Spaces</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Coming in Goa (Following the exact folder structure: Bagpackers & Hotels) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Bagpackers */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E1E7E6] shadow-stanza hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Compass size={28} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9D4] text-[#1B1D1C] font-black text-xs uppercase mb-3">
              <span>Folder: Bagpackers</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
            </div>

            <h3 className="text-2xl font-black text-[#111827] font-heading mb-3">
              Backpackers Hostels &amp; Community Dorms
            </h3>

            <p className="text-[#4A524F] text-sm leading-relaxed mb-6 font-medium">
              Vibrant social hostels designed for backpackers, solo travelers, and creators.
              Featuring UV-neon chillout lounges, open-air communal terraces, nightly acoustic sessions, and total freedom without curfews.
            </p>

            <div className="space-y-2.5 mb-7">
              {[
                "High-speed fiber connectivity for remote work",
                "Community kitchen & barbecue sundowner events",
                "Lockers, privacy curtains & individual charging pods",
                "Walking distance to North Goa's top beaches & cafes",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#111827] font-semibold">
                  <CheckCircle2 size={15} className="text-[#007A7A] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#F0F2F2] flex items-center justify-between">
              <span className="text-xs font-bold text-[#007A7A]">Status: Launching Soon</span>
              <span className="text-xs font-extrabold text-[#111827] bg-[#E6F4F3] px-3 py-1 rounded-full">
                Pre-Booking Opens Q1
              </span>
            </div>
          </div>

          {/* Card 2: Hotels */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E1E7E6] shadow-stanza hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Palmtree size={28} className="text-[#007A7A]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9D4] text-[#1B1D1C] font-black text-xs uppercase mb-3">
              <span>Folder: Hotels</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <h3 className="text-2xl font-black text-[#111827] font-heading mb-3">
              Boutique Hotels &amp; Private Workation Suites
            </h3>

            <p className="text-[#4A524F] text-sm leading-relaxed mb-6 font-medium">
              Serene, design-first boutique retreats for professionals, couples, and teams seeking calm coastal productivity.
              Private balconies, ensuite plunge pools, artisanal coffee corners, and dedicated workstation desks.
            </p>

            <div className="space-y-2.5 mb-7">
              {[
                "Private air-conditioned suites with lush garden/beach views",
                "Ergonomic work suites with dedicated backup power",
                "Artisan in-house cafe & wholesome dining menu",
                "Concierge scooty/car rental & local insider guide",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#111827] font-semibold">
                  <CheckCircle2 size={15} className="text-[#007A7A] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#F0F2F2] flex items-center justify-between">
              <span className="text-xs font-bold text-[#007A7A]">Status: Launching Soon</span>
              <span className="text-xs font-extrabold text-[#111827] bg-[#E6F4F3] px-3 py-1 rounded-full">
                Pre-Booking Opens Q1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Notify Me / Early Bird Registration Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-gradient-to-br from-[#0D1817] via-[#004A4A] to-[#007A7A] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider mb-4 shadow-md">
            <Bell size={14} className="text-[#111827]" />
            <span>Be the First to Know</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black font-heading mb-3">
            Want Early Bird Access for Goa?
          </h3>

          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
            Join our private waitlist. You will receive exclusive founder discounts, early reservation slots,
            and invitation to the launch party before public release.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! You are on the Goa VIP priority list. Our team will reach out soon.");
            }}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name & Phone / WhatsApp"
              required
              className="w-full px-5 py-3.5 rounded-2xl bg-white text-[#111827] text-sm font-semibold placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FFDE59] shadow-inner"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#FFDE59] hover:bg-[#F3D03E] text-[#111827] font-black text-sm shadow-md transition-all active:scale-95 shrink-0"
            >
              Join Waitlist
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[#25D366]" /> Zero Spam Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi size={15} className="text-[#FFDE59]" /> Gigabit Digital Nomad Ready
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={15} className="text-[#25D366]" /> Authentic ReForbs Community
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Bell,
  Phone,
  Laptop,
  Wifi,
  ShieldCheck,
  ChevronRight,
  Zap,
  Coffee,
  Users,
  Palmtree,
} from "lucide-react";

export default function BangaloreComingSoonPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#FAFAFA]">
      {/* Hero Banner with Bangalore Landmarks & Culture Background */}
      <section className="relative overflow-hidden bg-[#002D2D] text-white py-16 sm:py-24">
        {/* Background Photograph */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/images/bangalore-hero-banner.jpg"
            alt="Bangalore Landmarks & Culture - Vidhana Soudha, Metro, Cafe, Lalbagh, Filter Coffee, and Heritage"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform scale-[1.01]"
            quality={95}
          />
          {/* Subtle Dark Gradient Overlay preserving vibrant Bangalore colors while ensuring text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65 pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb / City Switcher Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 drop-shadow-sm">
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
            <span className="text-xs font-bold text-[#FFDE59]">Bangalore</span>
          </div>

          {/* City Selection Pills */}
          <div className="inline-flex items-center p-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 mb-8 max-w-full overflow-x-auto no-scrollbar shadow-lg">
            <Link
              href="/properties"
              className="px-4 py-2 rounded-full text-xs font-black text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <MapPin size={13} className="text-[#FFDE59]" />
              <span>Pune</span>
            </Link>
            <Link
              href="/goa"
              className="px-4 py-2 rounded-full text-xs font-black text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <Palmtree size={13} className="text-[#25D366]" />
              <span>Goa</span>
            </Link>
            <span className="px-4 py-2 rounded-full text-xs font-black bg-[#FFDE59] text-[#111827] shadow-sm flex items-center gap-1.5">
              <Building2 size={14} className="text-[#111827]" />
              <span>Bangalore</span>
            </span>
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/25 text-[#FFDE59] font-black text-xs uppercase tracking-wider mb-5 shadow-sm">
            <Sparkles size={14} className="text-[#FFDE59] animate-pulse" />
            <span>Coming Soon</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-white mb-4 drop-shadow-lg">
            <span className="text-[#FFDE59]">Bangalore</span>
          </h1>

          <p className="text-white text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold mb-8 drop-shadow-md">
            Curated co-living sanctuaries for software engineers, product thinkers, and startup creators.
            Zero lock-in restrictions, high-speed dedicated optical fiber, ergonomic workstations, and vibrant founder community.
          </p>

          {/* Action CTAs */}
          <div className="flex items-center justify-center max-w-md mx-auto">
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20your%20upcoming%20Bangalore%20Co-Living%20spaces.%20Please%20notify%20me%20when%20you%20launch!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm shadow-xl hover:shadow-glow active:scale-95 inline-flex items-center justify-center gap-2.5 transition-all"
            >
              <Phone size={17} />
              <span>Get WhatsApp Early Access</span>
            </a>
          </div>
        </div>
      </section>

      {/* What's Coming in Bangalore (Following the exact folder structure: Co-Living) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E1E7E6] shadow-stanza">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shadow-sm shrink-0">
                <Building2 size={30} />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9D4] text-[#1B1D1C] font-black text-xs uppercase mb-1">
                  <span>Folder: Co-Living</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#111827] font-heading">
                  Next-Gen Co-Living for Tech Professionals
                </h3>
              </div>
            </div>

            <div className="shrink-0 bg-[#E6F4F3] text-[#007A7A] text-xs font-extrabold px-4 py-2 rounded-2xl border border-[#007A7A]/20">
              Target Hubs: Koramangala • Indiranagar • HSR
            </div>
          </div>

          <p className="text-[#4A524F] text-sm sm:text-base leading-relaxed mb-8 font-medium">
            Bangalore is the innovation capital of India, and young builders deserve accommodation built for their lifestyle.
            Our upcoming properties eliminate the hassle of traditional landlords, exorbitant security deposits, and outdated broker practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: "Zero Lock-in Freedom",
                desc: "Stay as long as your project needs. Move with 30-day flexibility.",
                icon: Zap,
              },
              {
                title: "Redundant Fiber Wi-Fi",
                desc: "Uncapped optical fiber with secondary fallback for uninterrupted coding & zoom calls.",
                icon: Wifi,
              },
              {
                title: "Ergonomic Work Desks",
                desc: "Height-appropriate desks and ergonomic chairs inside your private room.",
                icon: Laptop,
              },
              {
                title: "Private Modular Kitchens",
                desc: "Freedom to cook whenever inspiration strikes. No forced mess charges.",
                icon: Coffee,
              },
              {
                title: "Daily Housekeeping",
                desc: "Professional cleaning, dust-free rooms, and laundry support included.",
                icon: CheckCircle2,
              },
              {
                title: "Vibrant Peer Community",
                desc: "Live alongside fellow engineers, designers, founders, and creators.",
                icon: Users,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#007A7A] mb-3">
                  <item.icon size={18} />
                </div>
                <h4 className="text-sm font-extrabold text-[#111827] mb-1.5">{item.title}</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#F0F2F2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#007A7A]">
              Currently scouting flagship properties across prime Bangalore tech corridors
            </span>
            <span className="text-xs font-extrabold text-[#111827] bg-[#FFDE59] px-4 py-2 rounded-full shadow-sm">
              Launching Q1
            </span>
          </div>
        </div>
      </section>

      {/* Notify Me / Early Bird Registration Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-gradient-to-br from-[#0B2320] via-[#004A4A] to-[#007A7A] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider mb-4 shadow-md">
            <Bell size={14} className="text-[#111827]" />
            <span>Bangalore Waitlist Open</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black font-heading mb-3">
            Get Priority Booking for Bangalore
          </h3>

          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
            Be the first to inspect rooms and claim launch pricing. Zero broker fees, 1-month deposit, and direct host onboarding.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! You are on the Bangalore priority list. Our host team will message you shortly.");
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
              <ShieldCheck size={15} className="text-[#25D366]" /> 100% Direct Host Booking
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi size={15} className="text-[#FFDE59]" /> High-Speed Dual Fiber
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={15} className="text-[#25D366]" /> Zero Lock-in Period
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

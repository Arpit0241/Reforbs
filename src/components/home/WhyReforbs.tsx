import Image from "next/image";
import { Lock, Sliders, SunMedium, LifeBuoy, Palette, Sparkles, Check, Home } from "lucide-react";

export default function WhyReforbs() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-teal/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-900 font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
            Reforbs Raises The Bar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            The Unique <span className="text-brand-yellow">-3P</span> &amp;{" "}
            <span className="text-brand-teal">-3D</span> Living Standard
          </h2>
          <p className="text-slate-300 text-base mt-4 max-w-2xl mx-auto">
            We tossed out the old PG rulebook. Here is our unwavering promise to every Reforbs resident in Pune:
          </p>
        </div>

        {/* 3P & 3D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* -3P Container */}
          <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-brand-yellow/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-brand-dark-900 font-black text-xl flex items-center justify-center font-heading">
                  -3P
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">The Three Pillars</h3>
                  <p className="text-xs text-brand-yellow font-semibold uppercase tracking-wider">
                    Privacy • Personalization • Positivity
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Privacy */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0 mt-1">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">PRIVACY That You Deserve</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    It&apos;s safe to say you get all the privacy you need. Single occupant rooms where you are the only tenant staying in your room. No unwelcome intrusions.
                  </p>
                </div>
              </div>

              {/* Personalization */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center shrink-0 mt-1">
                  <Sliders size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">PERSONALIZATION of Your Space</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A private setup with a genuine home-like atmosphere. You get your private kitchen, dining space, balcony, and personal zones you can rearrange as you wish.
                  </p>
                </div>
              </div>

              {/* Positivity */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0 mt-1">
                  <SunMedium size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">POSITIVITY &amp; Good Vibes</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Live in an inspiring environment that nurtures your ambition. Fresh, light vibes and warm social bonding through the Reforbs community unite our residents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* -3D Container */}
          <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-brand-teal/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white font-black text-xl flex items-center justify-center font-heading">
                  -3D
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">The Three Commitments</h3>
                  <p className="text-xs text-brand-teal font-semibold uppercase tracking-wider">
                    Daily Support • Decor • Details
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Daily Support */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0 mt-1">
                  <LifeBuoy size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">DAILY SUPPORT That Goes Beyond</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We provide day-to-day support to let you focus on what matters. Regular pro maintenance inside the premise or even helping you navigate life outside it.
                  </p>
                </div>
              </div>

              {/* Decor */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center shrink-0 mt-1">
                  <Palette size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">DECOR Styled with Passion</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Our team of talented interior designers beautifies every square inch. Whether gearing up for a high-focus work day or finding peaceful relaxation at dusk.
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0 mt-1">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">DETAILS That Elevate Your Life</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    From personal utilities to ergonomic seating and mood lighting, every tiny detail that elevates your daily routine is the cornerstone of Reforbs Coliving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Photos Montage Banner (Slide 6 - Living The Reforbs Way) */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src="/images/image3.png"
              alt="Living The Reforbs Way - Rooftops, lounges, terraces"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          <div className="p-6 sm:p-8 bg-slate-950/95 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-800">
            <div>
              <div className="text-brand-teal text-xs font-bold tracking-widest uppercase mb-1">
                LIVING THE REFORBS WAY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Spaces Full of Personality. It&apos;s All About YOU.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Rooftop plant canopies, UV neon lounges, bohemian garden patios &amp; cozy corners in Viman Nagar.
              </p>
            </div>
            <a
              href="https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20want%20to%20check%20out%20the%20spaces%20in%20Viman%20Nagar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow text-sm font-bold px-6 py-3 shrink-0"
            >
              Experience It In Person
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

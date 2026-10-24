import Image from "next/image";
import { Lock, Sliders, SunMedium, LifeBuoy, Palette, Sparkles, CheckCircle2 } from "lucide-react";

export default function WhyReforbs() {
  return (
    <section className="py-24 bg-[#FAF6E8]/40 border-y border-[#E1E7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-black text-xs uppercase tracking-wider mb-4 shadow-sm">
            Reforbs Raises The Bar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B1D1C] font-heading leading-tight">
            The Unique <span className="text-[#007A7A]">-3P</span> &amp;{" "}
            <span className="text-[#B8860B]">-3D</span> Living Standard
          </h2>
          <p className="text-[#4A524F] text-sm sm:text-base mt-4 font-medium leading-relaxed">
            Where most coliving companies conventionally market comfort and security, we at Reforbs focus on vibes, ownership, freedom, and emotional connection.
          </p>
        </div>

        {/* -3P and -3D Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* -3P Container */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1E7E6] shadow-card relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E1E7E6]">
              <div className="w-16 h-16 rounded-2xl bg-[#FFDE59] text-[#1B1D1C] font-black text-2xl flex items-center justify-center font-heading shadow-sm shrink-0">
                -3P
              </div>
              <div>
                <h3 className="text-xl font-black text-[#1B1D1C] font-heading">
                  The Three Pillars
                </h3>
                <span className="text-xs font-extrabold text-[#007A7A] uppercase tracking-wider">
                  Privacy • Personalization • Positivity
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Privacy */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0 mt-0.5">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#1B1D1C] mb-1 font-heading">
                    PRIVACY
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed">
                    It&apos;s safe to say that you get all the privacy you need when you stay with us, since all our rooms are for single occupants and you&apos;re the only tenant who will be staying in one room.
                  </p>
                </div>
              </div>

              {/* Personalization */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center shrink-0 mt-0.5">
                  <Sliders size={20} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#1B1D1C] mb-1 font-heading">
                    PERSONALIZATION
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed">
                    We have a private setup and create a home-like atmosphere that makes our tenants feel welcome. Our space has everything you need – you&apos;ll have your private kitchen, dining space, balcony, and other private spaces.
                  </p>
                </div>
              </div>

              {/* Positivity */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0 mt-0.5">
                  <SunMedium size={20} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#1B1D1C] mb-1 font-heading">
                    POSITIVITY
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed">
                    You get to live in a very positive environment that nurtures your lives. The fresh and light vibe of the place and social bonding through Reforbs community helps unite people and hold them together on a day to day basis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* -3D Container */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1E7E6] shadow-card relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E1E7E6]">
              <div className="w-16 h-16 rounded-2xl bg-[#007A7A] text-white font-black text-2xl flex items-center justify-center font-heading shadow-sm shrink-0">
                -3D
              </div>
              <div>
                <h3 className="text-xl font-black text-[#1B1D1C] font-heading">
                  The Three Commitments
                </h3>
                <span className="text-xs font-extrabold text-[#007A7A] uppercase tracking-wider">
                  Daily Support • Decor • Details
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Daily Support */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0 mt-0.5">
                  <LifeBuoy size={20} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#1B1D1C] mb-1 font-heading">
                    DAILY SUPPORT
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed">
                    We provide day to day support, and give our tenants the help they need to focus on what&apos;s important. We make it easy for you to manage by providing regular maintenance, so everything is taken care of quickly and efficiently.
                  </p>
                </div>
              </div>

              {/* Decor */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center shrink-0 mt-0.5">
                  <Palette size={20} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#1B1D1C] mb-1 font-heading">
                    DECOR
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed">
                    We have a team of talented and dedicated interior designers to beautify the space and make it just right for your needs, whether that&apos;s gearing you up for a productive day or helping you find peace at the end of one.
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#1B1D1C] mb-1 font-heading">
                    DETAILS
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed">
                    From personal utilities to decor, every detail that enhances your life is the cornerstone of everything we do at Reforbs Coliving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Living The Reforbs Way (Slide 6 & image3.png) */}
        <div className="bg-[#111312] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#272B29]">
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full">
            <Image
              src="/images/image3.png"
              alt="Living The Reforbs Way"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/40 to-transparent" />
          </div>

          <div className="p-8 sm:p-12 bg-[#111312]">
            <div className="max-w-3xl">
              <span className="text-[#FFDE59] text-xs font-black tracking-widest uppercase block mb-2 font-heading">
                LIVING THE REFORBS WAY
              </span>
              <h3 className="text-2xl sm:text-4xl font-black font-heading text-white mb-4">
                We create unique spaces that are full of personality.
              </h3>
              <p className="text-sm sm:text-base text-[#E1E7E6] leading-relaxed mb-4">
                Not just the rooms, but the entire space is full of great vibes. At Reforbs it&apos;s all about <strong className="text-[#4AA8A0]">EMOTIONAL CONNECT</strong>.
              </p>
              <p className="text-xs sm:text-sm text-[#A0AAA5] leading-relaxed">
                Rooms are curated for individual needs, tastes and comfort. Privacy is paramount. At Reforbs it&apos;s all about <strong className="text-[#FFDE59]">YOU</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

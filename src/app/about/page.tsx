import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Users, 
  Compass, 
  ArrowRight, 
  HeartHandshake, 
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "About Us | Reforbs Living - Pune's Vibrant Co-Living Ecosystem",
  description:
    "Reforbs is an innovative living space solution in Pune built on Privacy, Comfort, Support & Vibes. Inspired by backpacker culture for students and professionals.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      {/* Hero Header with Brand Teal & Radiant Contrast */}
      <section className="bg-gradient-to-b from-[#006A6A] to-[#007A7A] text-white py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFDE59]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider mb-6 font-heading shadow-md">
            <Sparkles size={14} className="text-[#111827]" />
            <span>It&apos;s All About Emotional Connect</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-6 max-w-4xl mx-auto text-white leading-tight">
            We Build An <span className="text-[#FFDE59] underline decoration-[#FFDE59]/40 underline-offset-8">Ecosystem</span>, <br />
            Not Just Accommodations.
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium text-white/95">
            Reforbs is an innovative living space solution in Pune. Affordable and customised spaces enabling tenants not just to stay, but to live, work, study, and play. Our tenants never want to leave!
          </p>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-[#007A7A] font-heading">500+</div>
              <div className="text-xs sm:text-sm font-bold text-[#111827] mt-1">Residents Housed</div>
              <div className="text-[11px] text-[#6B7280] font-medium">Across Viman Nagar, Pune</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-[#007A7A] font-heading">Curated</div>
              <div className="text-xs sm:text-sm font-bold text-[#111827] mt-1">Bespoke Properties</div>
              <div className="text-[11px] text-[#6B7280] font-medium">Student &amp; Co-Living Havens</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-[#007A7A] font-heading">4.9 / 5</div>
              <div className="text-xs sm:text-sm font-bold text-[#111827] mt-1">Resident Satisfaction</div>
              <div className="text-[11px] text-[#6B7280] font-medium">Verified Google Reviews</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-[#007A7A] font-heading">0</div>
              <div className="text-xs sm:text-sm font-bold text-[#111827] mt-1">Pushy Follow-Up Calls</div>
              <div className="text-[11px] text-[#6B7280] font-medium">Take it only if you like it!!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story & Vision */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/properties/pillar-homes/image-1.jpg"
                alt="Reforbs Spaces and Living Culture"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-sm font-bold">
                  Reforbs Community Spaces • Viman Nagar, Pune
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#007A7A] bg-[#007A7A]/10 px-3.5 py-1.5 rounded-full font-heading">
                Our Vision &amp; Story
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#111827] leading-tight">
                Not started as a business, but rather an endeavor to address real needs.
              </h2>

              <p className="text-[#374151] text-base sm:text-lg leading-relaxed font-semibold">
                Not started as a business, but rather an endeavor to address the needs of working professionals and students alike, our vision is to offer out of the box measures to provide a memorable living experience to tenants.
              </p>

              <p className="text-[#374151] text-base leading-relaxed font-medium">
                Our innovative design is sustainable, offering not just the services, but self usable amenities. We create unique spaces that are full of personality. Not just the rooms, but the entire space is full of great vibes.
              </p>

              {/* 4 Pillars preview */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="text-[#007A7A] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    01. Privacy
                  </div>
                  <div className="text-xs text-[#111827] font-bold">Single rooms, personal space &amp; quiet retreats</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFF9D4] border border-[#F3E7A0] shadow-sm">
                  <div className="text-[#111827] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    02. Comfort
                  </div>
                  <div className="text-xs text-[#111827] font-bold">Sustainable design &amp; self-usable amenities</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#E6F4F3] border border-[#BDE3DF] shadow-sm">
                  <div className="text-[#007A7A] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    03. Support
                  </div>
                  <div className="text-xs text-[#111827] font-bold">Day-to-day assistance inside &amp; outside the stay</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="text-[#111827] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    04. Vibes
                  </div>
                  <div className="text-xs text-[#111827] font-bold">Backpacker energy, freedom &amp; community cult</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How are we unique (Slide 2 & 3) */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#007A7A] bg-[#007A7A]/10 px-3.5 py-1.5 rounded-full font-heading mb-3">
              How Are We Unique
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight font-heading">
              The Backpacker Spirit
            </h2>
            <p className="text-[#374151] text-base sm:text-lg mt-4 leading-relaxed font-semibold">
              Where most coliving companies try to conventionally market their spaces around comfort, luxury, security, and hassle-free stays, Reforbs focuses on vibes, sense of ownership, freedom, involvement, networking, and community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-[#007A7A] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                <Compass size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-black font-heading text-[#111827] mb-3">
                Hippie &amp; Vibrant
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed font-semibold">
                Inspired by the backpacker concept popular in today&apos;s generation, Reforbs has developed its unique style of curating properties that are vibrant, cool, and hippie.
              </p>
            </div>

            <div className="bg-[#FFFDF0] rounded-3xl p-8 border border-[#F3E7A0] shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-[#FFDE59] text-[#111827] flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                <Users size={22} className="text-[#111827]" />
              </div>
              <h3 className="text-xl font-black font-heading text-[#111827] mb-3">
                Invite Friends Over
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed font-semibold">
                Reforbs firmly believes that when you come back from office or college, you should have a space where you can unwind, invite your friends over, and spend quality time.
              </p>
            </div>

            <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-[#007A7A] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                <HeartHandshake size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-black font-heading text-[#111827] mb-3">
                Sense of Ownership
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed font-semibold">
                We believe in complete freedom of choice. You can customize your room layout, choose whether you want meal plans, and participate actively in the community cult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3P and 3D Official Breakdown */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase mb-4 font-heading shadow-sm">
              Reforbs Raises The Bar
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight font-heading">
              The 3P &amp; 3D Framework
            </h2>
            <p className="text-[#374151] text-base mt-3 font-semibold">
              The core principles behind every property we curate in Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 3P */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#E6D7A8] shadow-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E6D7A8]">
                <span className="text-4xl font-black text-[#111827] font-heading">3P</span>
                <span className="text-xs font-black uppercase text-[#007A7A] tracking-wider">Privacy • Personalization • Positivity</span>
              </div>
              <div className="space-y-6 text-sm">
                <div className="bg-[#FFFDF0] p-4 rounded-2xl border border-[#F3E7A0]">
                  <h4 className="font-black text-[#111827] text-base mb-1.5 font-heading">PRIVACY</h4>
                  <p className="text-[#1F2937] leading-relaxed font-semibold">
                    You get all the privacy you need when you stay with us, since all our rooms are for single occupants and you are the only tenant staying in your room.
                  </p>
                </div>
                <div className="bg-[#FFFDF0] p-4 rounded-2xl border border-[#F3E7A0]">
                  <h4 className="font-black text-[#111827] text-base mb-1.5 font-heading">PERSONALIZATION</h4>
                  <p className="text-[#1F2937] leading-relaxed font-semibold">
                    We have a private setup and create a home-like atmosphere that makes our tenants feel welcome. Your space has everything you need – private kitchen, dining space, balcony, and personal lounges.
                  </p>
                </div>
                <div className="bg-[#FFFDF0] p-4 rounded-2xl border border-[#F3E7A0]">
                  <h4 className="font-black text-[#111827] text-base mb-1.5 font-heading">POSITIVITY</h4>
                  <p className="text-[#1F2937] leading-relaxed font-semibold">
                    You get to live in a very positive environment that nurtures your lives. The fresh and light vibe and social bonding through Reforbs community helps unite people and hold them together day to day.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#BDE3DF] shadow-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#BDE3DF]">
                <span className="text-4xl font-black text-[#007A7A] font-heading">3D</span>
                <span className="text-xs font-black uppercase text-[#007A7A] tracking-wider">Daily Support • Decor • Details</span>
              </div>
              <div className="space-y-6 text-sm">
                <div className="bg-[#E6F4F3]/60 p-4 rounded-2xl border border-[#BDE3DF]">
                  <h4 className="font-black text-[#111827] text-base mb-1.5 font-heading">DAILY SUPPORT</h4>
                  <p className="text-[#1F2937] leading-relaxed font-semibold">
                    We provide day-to-day support, giving our tenants the help they need to focus on what matters. We make it easy to manage by providing regular maintenance so everything is taken care of quickly.
                  </p>
                </div>
                <div className="bg-[#E6F4F3]/60 p-4 rounded-2xl border border-[#BDE3DF]">
                  <h4 className="font-black text-[#111827] text-base mb-1.5 font-heading">DECOR</h4>
                  <p className="text-[#1F2937] leading-relaxed font-semibold">
                    We have a team of talented and dedicated interior designers to beautify the space and make it just right for your needs, whether that is gearing you up for a productive day or helping you find peace at the end of one.
                  </p>
                </div>
                <div className="bg-[#E6F4F3]/60 p-4 rounded-2xl border border-[#BDE3DF]">
                  <h4 className="font-black text-[#111827] text-base mb-1.5 font-heading">DETAILS</h4>
                  <p className="text-[#1F2937] leading-relaxed font-semibold">
                    From personal utilities to aesthetic touches, every detail that enhances your everyday life is the cornerstone of everything we do at Reforbs Coliving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery Strip from Presentation */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#007A7A] bg-[#007A7A]/10 px-3.5 py-1.5 rounded-full font-heading mb-2">
              Inside Reforbs
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#111827] font-heading">
              Vibrant Spaces Built for Living
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <Image
                src="/images/properties/pillar-homes/image-4.jpg"
                alt="Reforbs Living Space - Modern Student Suite"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <Image
                src="/images/properties/park-island/image-2.jpg"
                alt="Reforbs Private Room - Ample Storage & Comfort"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <Image
                src="/images/properties/pillar-homes/image-5.jpg"
                alt="Reforbs Clean Living - Serviced Spaces"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <Image
                src="/images/properties/park-island/image-1.jpg"
                alt="Reforbs Social Vibes - Community Bonding"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#007A7A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading mb-2 text-white">
              Ready to Experience Reforbs in Viman Nagar?
            </h3>
            <p className="text-white/90 text-sm max-w-xl font-medium">
              Schedule a visit anytime. Remember: We never follow up with pushy sales calls!
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#FFDE59] hover:bg-[#FACC15] text-[#111827] font-extrabold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md text-sm shrink-0"
          >
            <span>Schedule Free Visit</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

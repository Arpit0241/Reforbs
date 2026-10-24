import Image from "next/image";
import Link from "next/link";
import { Heart, Lock, Sliders, SunMedium, LifeBuoy, Palette, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Reforbs Living - Pune's Vibrant Co-Living Ecosystem",
  description:
    "Reforbs is an innovative living space solution in Pune built on Privacy, Comfort, Support & Vibes. Inspired by backpacker culture for students and professionals.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      {/* Hero Header */}
      <section className="bg-[#111312] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-black text-xs uppercase tracking-wider mb-6 font-heading">
            <Heart size={14} className="fill-[#1B1D1C]" />
            <span>It&apos;s All About Emotional Connect</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-6 max-w-4xl mx-auto">
            We Build An <span className="text-[#007A7A]">Ecosystem</span>, <br />
            Not Just Accommodations.
          </h1>
          <p className="text-[#E1E7E6] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Reforbs is an innovative living space solution in Pune. Affordable and customised spaces enabling tenants not just to stay, but to live, work/ study and play. Our tenants never want to leave!
          </p>
        </div>
      </section>

      {/* Origin Story & Vision from Slide 2 & 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-card border border-[#E1E7E6]">
              <Image
                src="/images/image3.png"
                alt="Reforbs Spaces and Living Culture"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="badge-eyebrow">Our Vision</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#1B1D1C] leading-tight">
                Not started as a business, but rather an endeavor to address real needs.
              </h2>
              <p className="text-[#4A524F] text-base leading-relaxed font-medium">
                Not started as a business, but rather an endeavor to address the needs of the working professionals and students alike, our vision is to offer out of the box measures to provide a memorable living experience to tenants.
              </p>
              <p className="text-[#4A524F] text-base leading-relaxed font-medium">
                Our innovative design is sustainable, offering not just the services, but self usable amenities. We create unique spaces that are full of personality. Not just the rooms, but the entire space is full of great vibes.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#E6F4F3] border border-[#BDE3DF]">
                  <div className="text-[#007A7A] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    01. Privacy
                  </div>
                  <div className="text-xs text-[#4A524F] font-medium">Single rooms, personal space &amp; quiet retreats</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFF9D4] border border-[#F3E7A0]">
                  <div className="text-[#1B1D1C] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    02. Comfort
                  </div>
                  <div className="text-xs text-[#4A524F] font-medium">Sustainable design &amp; self-usable amenities</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#E6F4F3] border border-[#BDE3DF]">
                  <div className="text-[#007A7A] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    03. Support
                  </div>
                  <div className="text-xs text-[#4A524F] font-medium">Day-to-day assistance inside &amp; outside the stay</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFF9D4] border border-[#F3E7A0]">
                  <div className="text-[#1B1D1C] font-black text-sm uppercase tracking-wider mb-1 font-heading">
                    04. Vibes
                  </div>
                  <div className="text-xs text-[#4A524F] font-medium">Backpacker energy, freedom &amp; community cult</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How are we unique (Slide 2 & 3) */}
      <section className="py-20 bg-[#FAFAFA] border-y border-[#E1E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-eyebrow mb-3">How are we unique</span>
            <h2 className="section-heading-lg">
              The Backpacker Spirit
            </h2>
            <p className="text-[#4A524F] text-base mt-4 leading-relaxed font-medium">
              Where most of the Coliving companies try to conventionally market their spaces around comfort, luxury, security, hassle free stays, We at Reforbs, focus on vibes, sense of ownership, freedom, involvement, networking and community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#E1E7E6] shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-[#007A7A] text-white flex items-center justify-center font-bold text-lg mb-6">
                🎒
              </div>
              <h3 className="text-xl font-black font-heading text-[#1B1D1C] mb-3">
                Hippie &amp; Vibrant
              </h3>
              <p className="text-[#4A524F] text-sm leading-relaxed font-medium">
                Inspired by bag packers concept that is very popular in today&apos;s generation, Reforbs has developed its unique style of curating properties which are vibrant, cool and hippie.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E1E7E6] shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-[#FFDE59] text-[#1B1D1C] flex items-center justify-center font-bold text-lg mb-6">
                🎉
              </div>
              <h3 className="text-xl font-black font-heading text-[#1B1D1C] mb-3">
                Invite Friends Over
              </h3>
              <p className="text-[#4A524F] text-sm leading-relaxed font-medium">
                Reforbs firmly believes that when you come back from office/ college, you should have a place where you can have fun, invite your friends over and spend quality time.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E1E7E6] shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-[#007A7A] text-white flex items-center justify-center font-bold text-lg mb-6">
                🤝
              </div>
              <h3 className="text-xl font-black font-heading text-[#1B1D1C] mb-3">
                Sense of Ownership
              </h3>
              <p className="text-[#4A524F] text-sm leading-relaxed font-medium">
                We believe in complete freedom of choice. You can customize your room layout, choose whether you want food, and participate actively in the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -3P and -3D Official Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-black text-xs uppercase mb-4 font-heading">
              REFORBS RAISES THE BAR
            </div>
            <h2 className="section-heading-lg">
              The -3P and -3D Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* -3P */}
            <div className="bg-[#FAF6E8] rounded-3xl p-8 sm:p-10 border border-[#E6D7A8]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E6D7A8]">
                <span className="text-3xl font-black text-[#1B1D1C] font-heading">-3P</span>
                <span className="text-xs font-black uppercase text-[#007A7A]">Privacy • Personalization • Positivity</span>
              </div>
              <div className="space-y-6 text-sm font-medium">
                <div>
                  <h4 className="font-black text-[#1B1D1C] text-base mb-1 font-heading">PRIVACY</h4>
                  <p className="text-[#4A524F] leading-relaxed">
                    It&apos;s safe to say that you get all the privacy you need when you stay with us, since all our rooms are for single occupants and you&apos;re the only tenant who will be staying in one room.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-[#1B1D1C] text-base mb-1 font-heading">PERSONALIZATION</h4>
                  <p className="text-[#4A524F] leading-relaxed">
                    We have a private setup and create a home like atmosphere that makes our tenants feel welcome. Our space has everything you need – you&apos;ll have your private kitchen, dining space, balcony, and other private spaces.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-[#1B1D1C] text-base mb-1 font-heading">POSITIVITY</h4>
                  <p className="text-[#4A524F] leading-relaxed">
                    You get to live in a very positive environment that nurtures your lives. The fresh and light vibe of the place and social bonding through Reforbs community helps unite people and hold them together on a day to day basis.
                  </p>
                </div>
              </div>
            </div>

            {/* -3D */}
            <div className="bg-[#E6F4F3] rounded-3xl p-8 sm:p-10 border border-[#BDE3DF]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#BDE3DF]">
                <span className="text-3xl font-black text-[#007A7A] font-heading">-3D</span>
                <span className="text-xs font-black uppercase text-[#007A7A]">Daily Support • Decor • Details</span>
              </div>
              <div className="space-y-6 text-sm font-medium">
                <div>
                  <h4 className="font-black text-[#1B1D1C] text-base mb-1 font-heading">DAILY SUPPORT</h4>
                  <p className="text-[#4A524F] leading-relaxed">
                    We provide day to day support, and give our tenants the help they need to focus on what&apos;s important. We make it easy for you to manage by providing regular maintenance, so everything is taken care of quickly and efficiently.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-[#1B1D1C] text-base mb-1 font-heading">DECOR</h4>
                  <p className="text-[#4A524F] leading-relaxed">
                    We have a team of talented and dedicated interior designers to beautify the space and make it just right for your needs, whether that&apos;s gearing you up for a productive day or helping you find peace at the end of one.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-[#1B1D1C] text-base mb-1 font-heading">DETAILS</h4>
                  <p className="text-[#4A524F] leading-relaxed">
                    From personal utilities to decor, every detail that enhances your life is the cornerstone of everything we do at Reforbs Coliving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#007A7A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading mb-2">
              Ready to Experience Reforbs in Viman Nagar?
            </h3>
            <p className="text-white/90 text-sm max-w-xl font-medium">
              Schedule a visit anytime. Remember: We never follow up with pushy sales calls!
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-yellow text-xs font-extrabold py-3.5 px-8 shadow-md shrink-0"
          >
            Schedule Free Visit
          </Link>
        </div>
      </section>
    </div>
  );
}

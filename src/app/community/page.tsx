import Image from "next/image";
import Link from "next/link";
import { Users, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import CommunityRibbonHero from "@/components/community/CommunityRibbonHero";

export const metadata = {
  title: "The Reforbs Community & Cult | Co-Living in Pune",
  description:
    "Explore the Reforbs Community in Pune. Group yoga, DIY art, weekend picnics, founder mentorships, and zero forced rules. A family away from family.",
};

const communityMoments = [
  {
    title: "Weekend Rooftop Yoga",
    desc: "Laugh, eat, and breathe your way to wellness under the morning skies of Viman Nagar.",
    tag: "Wellness",
  },
  {
    title: "Glow & Neon DIY Nights",
    desc: "Unleash your creativity with UV canvas painting, custom pottery, and room decor sessions.",
    tag: "Creative",
  },
  {
    title: "Communal Masterchef Cook-Offs",
    desc: "Share your family recipes, bake pizzas, or join our community barbecue evenings.",
    tag: "Food & Fun",
  },
  {
    title: "Festival Celebrations Like Home",
    desc: "Holi colors, Diwali lights, Christmas trees, and Eid sweets celebrated together.",
    tag: "Culture",
  },
  {
    title: "Professional Networking & Mentorship",
    desc: "Group interactions and mentorship with working professionals residing in Reforbs.",
    tag: "Career",
  },
  {
    title: "In-House Movie & Game Nights",
    desc: "Big screen projection, pool table, and friendly weekend tournaments with your neighbors.",
    tag: "Entertainment",
  },
];

export default function CommunityPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      {/* Hero Header with Brand Teal Gradient */}
      <section className="bg-gradient-to-b from-[#006A6A] to-[#007A7A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFDE59]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider mb-6 font-heading shadow-md">
            <Users size={16} className="text-[#111827]" />
            <span>The Reforbs Cult</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-6 max-w-4xl mx-auto text-white leading-tight">
            A Family Away From <br className="hidden sm:block" />
            <span className="text-[#FFDE59] underline decoration-[#FFDE59]/40 underline-offset-8">Your Family</span>.
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium text-white/95">
            We understand the profound importance of social interactions and bonding. The Reforbs family gives every member a supportive reforbs family to laugh, grow, and thrive together.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-white">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 size={16} className="text-[#FFDE59]" /> Weekly Community Rituals
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 size={16} className="text-[#FFDE59]" /> Absolute Freedom of Choice
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 size={16} className="text-[#FFDE59]" /> No Forced Rules
            </span>
          </div>
        </div>
      </section>

      {/* Community Visual Feature */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3D Community Showcase Directly On Page */}
          <div className="w-full relative mb-12 overflow-hidden">
            <CommunityRibbonHero />
          </div>

          {/* Text Content Below */}
          <div className="p-8 sm:p-12 bg-[#111827] text-white rounded-3xl shadow-xl mb-16">
            <span className="text-[#FFDE59] font-black text-xs uppercase tracking-widest block mb-2 font-heading">
              STEP INTO REFORBS COMMUNITY !!
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading mb-4 text-white">
              Channeling Social Bonding Towards Personal Growth
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
              The bachelors today have their own network of friends and colleagues; it is important to channel the social bonding towards personal growth. You can laugh, eat, and breathe your way to wellness through memorable living experiences that are enriching, ensure personal growth and networking. That has something for everyone!!
            </p>
          </div>

          {/* Activities Grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#007A7A] bg-[#007A7A]/10 px-3.5 py-1.5 rounded-full font-heading mb-3">
              Recreational Activities
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#111827] font-heading">
              What Keeps The Energy High
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {communityMoments.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] hover:bg-white rounded-3xl p-7 border border-gray-200 hover:border-[#007A7A] hover:shadow-lg transition-all"
              >
                <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-[#E6F4F3] text-[#007A7A] inline-block mb-4 font-heading">
                  {item.tag}
                </span>
                <h4 className="text-lg font-black font-heading text-[#111827] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#374151] leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Manifesto Callout (Slide 14) */}
          <div className="bg-[#FFFDF0] rounded-3xl p-8 sm:p-12 border-2 border-[#E6D7A8] text-center max-w-4xl mx-auto shadow-md">
            <Quote size={36} className="text-[#007A7A] mx-auto mb-4 opacity-70" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-heading text-[#111827] mb-4 leading-relaxed">
              &ldquo;Over the period of years, ReForbs has made sure that tenants enjoy absolute freedom of choice. We don&apos;t impose our food service on you. We don&apos;t believe in lock ins. We let you change layout of the room. We let you voice out your demands. That&apos;s ReForbs Cult !! We are a family away from your family.&rdquo;
            </h3>
            <span className="text-xs font-black uppercase tracking-widest text-[#007A7A] font-heading">
              — Official Reforbs Resident Pledge
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#007A7A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-4xl font-black font-heading mb-4 text-white">
            Become Part of The Family Today
          </h3>
          <p className="text-white/95 text-sm sm:text-base mb-8 max-w-xl mx-auto font-medium">
            Single and double occupancies available in Viman Nagar. Drop by, meet the hosts, and check out the spaces!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#FFDE59] hover:bg-[#FACC15] text-[#111827] font-extrabold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md text-sm"
          >
            <span>Book a Free Community Tour</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

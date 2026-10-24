import Image from "next/image";
import Link from "next/link";
import { Users, Quote } from "lucide-react";

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
      {/* Hero Header */}
      <section className="bg-[#0D1110] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-black text-xs uppercase tracking-wider mb-6 font-heading shadow-md">
            <Users size={16} />
            <span>The Reforbs Cult</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-6 max-w-4xl mx-auto text-white">
            A Family Away From <br className="hidden sm:block" />
            <span className="text-[#FFDE59]">Your Family</span>.
          </h1>
          <p className="text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            We understand the profound importance of social interactions and bonding, especially after the COVID pandemic. The Reforbs family gives every member a supportive group to help them cope with difficult challenges.
          </p>
        </div>
      </section>

      {/* Community Visual Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-[#E1E7E6] shadow-card mb-16">
            <div className="relative h-72 sm:h-96 md:h-[460px] w-full bg-[#0D1110]">
              <Image
                src="/images/image7.png"
                alt="Never a dull moment at Reforbs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110] via-[#0D1110]/40 to-transparent" />
            </div>

            <div className="p-8 sm:p-12 bg-[#0D1110] text-white">
              <span className="text-[#FFDE59] font-black text-xs uppercase tracking-widest block mb-2 font-heading">
                STEP INTO REFORBS COMMUNITY !!
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading mb-4 text-white">
                Channeling Social Bonding Towards Personal Growth
              </h2>
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
                The bachelors today have their own network of friends and colleagues; it is important to channel the social bonding towards personal growth. You can laugh, eat, and breathe your way to wellness through memorable living experiences that are enriching, ensure personal growth and networking. That has something for everyone!!
              </p>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-eyebrow mb-3">Recreational Activities</span>
            <h3 className="section-heading-lg">
              What Keeps The Energy High
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {communityMoments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-[#FAFAFA] rounded-3xl p-7 border border-[#E1E7E6] hover:border-[#007A7A] hover:shadow-card transition-all"
              >
                <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-[#E6F4F3] text-[#007A7A] inline-block mb-4 font-heading">
                  {item.tag}
                </span>
                <h4 className="text-lg font-black font-heading text-[#111827] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#1F2937] leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Manifesto Callout (Slide 14) */}
          <div className="bg-[#FAF6E8] rounded-3xl p-8 sm:p-12 border border-[#E6D7A8] text-center max-w-4xl mx-auto shadow-sm">
            <Quote size={32} className="text-[#007A7A] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-heading text-[#111827] mb-4 leading-relaxed">
              &ldquo;Over the period of years, ReForbs has made sure that tenants enjoy absolute freedom of choice. We don&apos;t impose our food service on you. We don&apos;t believe in lock ins. We let you change layout of the room. We let you voice out your demands. That&apos;s ReForbs Cult !! We are a family away from your family.&rdquo;
            </h3>
            <span className="text-xs font-black uppercase tracking-widest text-[#007A7A]">
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
          <p className="text-white text-sm sm:text-base mb-8 max-w-xl mx-auto font-medium">
            Single and double occupancies available in Viman Nagar. Drop by, meet the hosts, and check out the spaces!
          </p>
          <Link href="/contact" className="btn-yellow text-xs font-black py-3.5 px-8">
            Book a Free Community Tour
          </Link>
        </div>
      </section>
    </div>
  );
}

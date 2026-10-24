import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, Heart, Film, Utensils, Sun, Award, Flame, Quote, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "The Reforbs Community & Cult | Co-Living in Pune",
  description:
    "Explore the Reforbs Community in Pune. Group yoga, DIY art, weekend picnics, founder mentorships, and zero forced rules. A family away from family.",
};

const communityMoments = [
  {
    title: "Weekend Rooftop Yoga",
    desc: "Unwind under the morning skies of Viman Nagar with guided wellness and meditation.",
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
    desc: "Connect with tech leaders, lawyers, and founders residing within the Reforbs network.",
    tag: "Career",
  },
  {
    title: "In-House Movie & FIFA Nights",
    desc: "Big screen projection, surround sound, and endless cheering with your neighbors.",
    tag: "Entertainment",
  },
];

export default function CommunityPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-brand-dark to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-900 font-extrabold text-xs uppercase tracking-wider mb-6">
            <Users size={16} />
            <span>The Reforbs Cult</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-6 max-w-4xl mx-auto">
            A Family Away From <br className="hidden sm:block" />
            <span className="text-brand-teal">Your Family</span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We understand the profound importance of human connection. The Reforbs family gives every resident a warm, supportive circle to overcome stress and celebrate life together.
          </p>
        </div>
      </section>

      {/* Community Visual Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl mb-16">
            <div className="relative h-72 sm:h-96 md:h-[460px] w-full bg-slate-950">
              <Image
                src="/images/image7.png"
                alt="Never a dull moment at Reforbs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            <div className="p-8 sm:p-12 bg-slate-950 text-white">
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest block mb-2">
                POST-COVID WELLNESS MANIFESTO
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading mb-4">
                Channeling Social Bonding Towards Personal Growth
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                Bachelors in Pune have their work and college routines, but mental wellness demands more than isolation in front of a screen. At Reforbs, you can laugh, eat, and breathe your way to wellness through spontaneous gatherings and enriching memories that last a lifetime.
              </p>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-tag mb-3">Community Experiences</span>
            <h3 className="section-title">
              What Keeps The Energy High
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {communityMoments.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-brand-teal-300 hover:shadow-card transition-all"
              >
                <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-brand-teal-50 text-brand-teal border border-brand-teal-200 inline-block mb-4">
                  {item.tag}
                </span>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Manifesto Callout */}
          <div className="bg-gradient-to-br from-brand-teal-50 via-white to-brand-yellow-50 rounded-3xl p-8 sm:p-12 border border-brand-teal-200 text-center max-w-4xl mx-auto shadow-sm">
            <Quote size={32} className="text-brand-teal mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mb-4">
              &ldquo;Over the period of years, ReForbs has made sure that tenants enjoy absolute freedom of choice. We don&apos;t impose our food service on you. We don&apos;t believe in lock-ins. We let you change the layout of the room. We let you voice out your demands. That&apos;s ReForbs Cult!!&rdquo;
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              — The Official Reforbs Resident Pledge
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-4xl font-black font-heading mb-4">
            Become Part of The Family Today
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Single and double occupancies available in Viman Nagar. Drop by, have a chai with us, and check out the spaces!
          </p>
          <Link href="/contact" className="btn-yellow text-sm font-bold py-3.5 px-8">
            Book a Free Community Tour
          </Link>
        </div>
      </section>
    </div>
  );
}

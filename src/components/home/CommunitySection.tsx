import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, Heart, Flame, Film, Sun, Utensils, Compass, ArrowRight } from "lucide-react";

const communityEvents = [
  { icon: Sun, title: "Group Yoga & Wellness", desc: "Breathe and reset every weekend on the breezy rooftop." },
  { icon: Flame, title: "DIY & Art Sessions", desc: "Express yourself through neon wall art, pottery & crafts." },
  { icon: Utensils, title: "Community Cooking & BBQs", desc: "Cook together, share regional recipes & enjoy communal feasts." },
  { icon: Sparkles, title: "Festival Celebrations", desc: "Diwali, Holi, Christmas & New Year celebrated like real family." },
  { icon: Users, title: "Professional Mentorship", desc: "Interactive fireside chats with startup founders & senior pros." },
  { icon: Film, title: "In-House Movie & Game Nights", desc: "Projector screenings, FIFA showdowns & late night popcorn." },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-brand-dark-900 text-white relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Banner with image7.png */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 mb-16 shadow-2xl bg-slate-950">
          <div className="relative h-64 sm:h-80 md:h-[420px] w-full">
            <Image
              src="/images/image7.png"
              alt="Never a dull moment at Reforbs Community"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 bg-slate-950/95 border-t border-white/10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} /> Reforbs Community Spirit
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-white mb-3">
                Never a dull moment. <br className="hidden sm:block" />
                <span className="text-brand-yellow">Your stay with us will be the most memorable chapter.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We all understand the importance of social interactions and bonding, especially in a fast-paced city. With high risks of stress and loneliness, the ReForbs family gives its members a warm, supportive tribe to help you grow, laugh, and conquer challenges together.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Recreational Activities */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag mb-3 bg-brand-yellow/10 text-brand-yellow border-brand-yellow/30">
            Wholesome &amp; Holistic Lifestyle
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Laugh, Eat &amp; Breathe Your Way to Wellness
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Social bonding channeled towards personal growth and genuine networking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communityEvents.map((evt, i) => {
            const Icon = evt.icon;
            return (
              <div
                key={i}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-bold font-heading text-white mb-2">
                  {evt.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cult Manifesto Strip */}
        <div className="bg-gradient-to-r from-brand-teal/20 via-brand-yellow/15 to-transparent rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-brand-yellow font-black text-xl font-heading mb-1">
              The ReForbs Cult
            </div>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              &quot;We don&apos;t impose our food service on you. We don&apos;t believe in lock-ins. We let you change the layout of your room. We let you voice out your demands. We are a family away from your family.&quot;
            </p>
          </div>
          <Link
            href="/community"
            className="btn-yellow text-xs font-bold py-3 px-6 shrink-0 whitespace-nowrap"
          >
            <span>Explore Community Life</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

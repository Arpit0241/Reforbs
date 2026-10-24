import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, Heart, Flame, Film, Sun, Utensils, ArrowRight } from "lucide-react";

const activities = [
  { icon: Sun, title: "Group Yoga & Wellness", desc: "Laugh, eat, and breathe your way to wellness with morning rooftop sessions." },
  { icon: Flame, title: "DIY & Art Sessions", desc: "Expressive painting, pottery, and creative workshops." },
  { icon: Utensils, title: "Community Cooking & BBQs", desc: "Communal feasts and sharing your favorite regional cuisines." },
  { icon: Sparkles, title: "Festival Celebrations", desc: "Holi, Diwali, Christmas, and New Year with your Reforbs family." },
  { icon: Users, title: "Mentorship & Networking", desc: "Group interactions with senior working professionals and founders." },
  { icon: Film, title: "Picnics & In-House Movie Nights", desc: "Weekend getaways and cozy cinema screenings with popcorn." },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-[#111312] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Banner with image7.png */}
        <div className="relative rounded-3xl overflow-hidden border border-[#272B29] mb-16 shadow-2xl bg-[#1B1D1C]">
          <div className="relative h-72 sm:h-96 md:h-[460px] w-full">
            <Image
              src="/images/image7.png"
              alt="Never a dull moment at Reforbs Community"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/40 to-transparent" />
          </div>

          <div className="p-8 sm:p-12 bg-[#111312]">
            <div className="max-w-3xl">
              <span className="text-[#FFDE59] text-xs font-black uppercase tracking-widest block mb-2 font-heading">
                REFORBS COMMUNITY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
                Never a dull moment. <br />
                <span className="text-[#FFDE59]">In your story, your stay with us will be the most memorable chapter.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-4 font-medium">
                We all understand the importance of social interactions and bonding, especially after the COVID pandemic. With high risks of stress, frustration, and loneliness, the ReForbs family gives its members a supportive group to help them cope with difficult challenges.
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                The bachelors today have their own network of friends and colleagues; it is important to channel the social bonding towards personal growth.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Recreational Activities from the slide */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007A7A]/30 text-[#4AA8A0] text-xs font-black uppercase tracking-wider mb-3">
            Wholesome &amp; Holistic Living
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Recreational Activities &amp; Mentorship
          </h3>
          <p className="text-xs sm:text-sm text-[#A0AAA5] mt-2 font-medium">
            Memorable living experience that is enriching, ensures personal growth and networking. That has something for everyone!!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <div
                key={i}
                className="bg-[#1B1D1C] hover:bg-[#272B29] rounded-3xl p-7 border border-[#272B29] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#007A7A]/20 text-[#4AA8A0] flex items-center justify-center mb-5 group-hover:bg-[#007A7A] group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-black font-heading text-white mb-2">
                  {act.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#A0AAA5] leading-relaxed font-medium">
                  {act.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Freedom Banner (Slide 11) */}
        <div className="bg-[#FAF6E8] text-[#1B1D1C] rounded-3xl p-8 sm:p-10 border border-[#E6D7A8] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-[#007A7A] mb-1 font-heading">
              HOUSE FREEDOM POLICY
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-heading text-[#1B1D1C] mb-2">
              This is YOUR home !! Live as if you OWN it ……
            </h4>
            <p className="text-xs sm:text-sm text-[#4A524F] max-w-2xl font-medium leading-relaxed">
              We don&apos;t believe in imposing restrictions and bans. Instead, it&apos;s all about mutual compatibility and understanding. As long as we do things within social norms !! (Smily)
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-teal text-xs py-3.5 px-7 font-extrabold shrink-0 shadow-md whitespace-nowrap"
          >
            <span>Join Our Pune Tribe</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Sparkles, Flame, Film, Sun, Utensils, ArrowRight, Check } from "lucide-react";

const activities = [
  {
    number: "01",
    icon: Sun,
    title: "Group Yoga & Wellness",
    desc: "Laugh, eat, and breathe your way to wellness with morning rooftop sessions.",
    gradient: "from-[#006E6E] via-[#004D4D] to-[#022626]",
    tag1: "Rooftop Sunrise",
    tag2: "Mindful Flow",
  },
  {
    number: "02",
    icon: Flame,
    title: "DIY & Art Sessions",
    desc: "Expressive painting, pottery, and creative workshops.",
    gradient: "from-[#0F6274] via-[#0A4552] to-[#04242B]",
    tag1: "Creative Expression",
    tag2: "Hands-on Workshops",
  },
  {
    number: "03",
    icon: Utensils,
    title: "Community Cooking & BBQs",
    desc: "Communal feasts and sharing your favorite regional cuisines.",
    gradient: "from-[#047857] via-[#065F46] to-[#02281D]",
    tag1: "Regional Flavors",
    tag2: "Weekend BBQs",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Festival Celebrations",
    desc: "Holi, Diwali, Christmas, and New Year with your Reforbs family.",
    gradient: "from-[#115E59] via-[#0D4440] to-[#032220]",
    tag1: "Grand Festive Dinners",
    tag2: "Family Vibes",
  },
  {
    number: "05",
    icon: Users,
    title: "Mentorship & Networking",
    desc: "Group interactions with senior working professionals and founders.",
    gradient: "from-[#164E63] via-[#0E3846] to-[#031F27]",
    tag1: "Founders & CXOs",
    tag2: "Career Growth",
  },
  {
    number: "06",
    icon: Film,
    title: "Picnics & In-House Movie Nights",
    desc: "Weekend getaways and cozy cinema screenings with popcorn.",
    gradient: "from-[#0D5C5A] via-[#083E3D] to-[#022120]",
    tag1: "Cinema Lounges",
    tag2: "Road Trips",
  },
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
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#007A7A]/30 text-[#4AA8A0] border border-[#007A7A]/40 text-xs font-black uppercase tracking-wider mb-3.5"
          >
            Wholesome &amp; Holistic Living
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white tracking-tight"
          >
            Recreational Activities &amp; Mentorship
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#A0AAA5] mt-2 font-medium max-w-xl mx-auto"
          >
            Memorable living experience that is enriching, ensures personal growth and networking. That has something for everyone!!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-3xl p-7 text-white bg-gradient-to-br ${act.gradient} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden border border-white/15`}
              >
                {/* Ambient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                <div>
                  {/* Top Monogram and Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#FFDE59] group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/20">
                      {act.number}
                    </span>
                  </div>

                  <h4 className="text-xl font-black font-heading text-white mb-2.5 group-hover:text-[#FFDE59] transition-colors">
                    {act.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                    {act.desc}
                  </p>
                </div>

                {/* Bottom Stats / Highlights Bar */}
                <div className="pt-4 mt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-white/90">
                  <span className="text-white/70">{act.tag1}</span>
                  <span className="text-[#FFDE59] font-extrabold flex items-center gap-1">
                    <Check size={12} className="text-[#FFDE59]" />
                    <span>{act.tag2}</span>
                  </span>
                </div>
              </motion.div>
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

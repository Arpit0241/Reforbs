"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Users, Smile, Check } from "lucide-react";

const differenceItems = [
  {
    id: "freedom",
    number: "01",
    label: "Freedom",
    icon: Smile,
    gradient: "from-[#006E6E] via-[#004D4D] to-[#022626]",
    description:
      "Zero forced food packages, zero lock-ins, and no arbitrary bans. Live as if you own the place.",
    tag1: "Zero Lock-ins",
    tag2: "Cooking Freedom",
  },
  {
    id: "community",
    number: "02",
    label: "Community",
    icon: Users,
    gradient: "from-[#0F6274] via-[#0A4552] to-[#04242B]",
    description:
      "A welcoming tribe to cope with stress, overcome loneliness, and build lifelong friendships.",
    tag1: "Zero Loneliness",
    tag2: "Supportive Tribe",
  },
  {
    id: "comfort",
    number: "03",
    label: "Comfort",
    icon: Heart,
    gradient: "from-[#047857] via-[#065F46] to-[#02281D]",
    description:
      "Sustainable design, private setups, high-speed fiber internet, and self-usable amenities.",
    tag1: "Zero Hidden Bills",
    tag2: "Ergonomic Setup",
  },
  {
    id: "vibes",
    number: "04",
    label: "Vibes",
    icon: Sparkles,
    gradient: "from-[#115E59] via-[#0D4440] to-[#032220]",
    description:
      "Inspired by vibrant backpacker culture — cool, artistic, hippie properties you love coming home to.",
    tag1: "Zero Moral Policing",
    tag2: "Pure Good Energy",
  },
];

export default function StatsSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-10 sm:pb-14 bg-white border-b border-[#E1E7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.4 }}
            className="badge-eyebrow mb-2.5"
          >
            The Reforbs Difference
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-[#111827] font-heading tracking-tight"
          >
            What makes Reforbs <span className="text-[#007A7A]">different</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A524F] text-sm sm:text-base mt-2 font-medium"
          >
            Where most coliving spaces market security and restrictions, we focus on ownership, freedom, and deep human connection.
          </motion.p>
        </div>

        {/* 4 Luxury Animated Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differenceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-3xl p-7 text-white bg-gradient-to-br ${item.gradient} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden border border-white/15`}
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
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white font-heading tracking-tight mb-2.5 group-hover:text-[#FFDE59] transition-colors">
                    {item.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stats / Highlights Bar */}
                <div className="pt-4 mt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-white/90">
                  <span className="text-white/70">{item.tag1}</span>
                  <span className="text-[#FFDE59] font-extrabold flex items-center gap-1">
                    <Check size={12} className="text-[#FFDE59]" />
                    <span>{item.tag2}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

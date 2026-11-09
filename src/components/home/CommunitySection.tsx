"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CurvedActivitiesCarousel from "./CurvedActivitiesCarousel";

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-[#111312] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#272B29] mb-16 shadow-2xl bg-[#1B1D1C]">
          <div className="relative h-72 sm:h-96 md:h-[460px] w-full">
            <Image
              src="/images/reforbs-community-bonding.jpg"
              alt="Never a dull moment at Reforbs Community - Social bonding and vibrant atmosphere"
              fill
              className="object-cover"
              priority
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

        {/* Recreational Activities & Mentorship Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
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

        {/* Reelmark-Style Cylindrical Curved Draggable Video & Activity Carousel */}
        <div className="mb-16">
          <CurvedActivitiesCarousel />
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
            <span>Join Our Reforbs Family</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

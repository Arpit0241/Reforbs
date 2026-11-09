"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Users,
  Smile,
  Check,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface DifferenceCardItem {
  id: string;
  number: string;
  label: string;
  icon: LucideIcon;
  description: string;
  gradient: string;
  tag1: string;
  tag2: string;
  image: string;
}

export const differenceItems: DifferenceCardItem[] = [
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
    image: "/assets/pdf/extracted/page-7-image-2-X6.jpg",
  },
  {
    id: "community",
    number: "02",
    label: "Community",
    icon: Users,
    gradient: "from-[#0F6274] via-[#0A4552] to-[#04242B]",
    description:
      "A welcoming reforbs family to cope with stress, overcome loneliness, and build lifelong friendships.",
    tag1: "Zero Loneliness",
    tag2: "Reforbs Family",
    image: "/images/living-reforbs-way.jpg",
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
    image: "/images/move-in-ready-reforbs.jpg",
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
    image: "/images/about-vision-courtyard.jpg",
  },
  {
    id: "ownership",
    number: "05",
    label: "Ownership",
    icon: ShieldCheck,
    gradient: "from-[#164E63] via-[#0E3846] to-[#031F27]",
    description:
      "Total peace of mind with 24/7 dedicated host care, rapid maintenance, and complete resident autonomy.",
    tag1: "Dedicated Hosts",
    tag2: "Full Autonomy",
    image: "/assets/pdf/extracted/page-6-image-1-X4.jpg",
  },
  {
    id: "connection",
    number: "06",
    label: "Connection",
    icon: Users,
    gradient: "from-[#0D5C5A] via-[#083E3D] to-[#022120]",
    description:
      "Bonding through rooftop grills, festive parties, creative jam sessions, and spontaneous weekend road trips.",
    tag1: "Rooftop Jams",
    tag2: "Weekend BBQs",
    image: "/images/community-rooftop-jams.jpg",
  },
];

// Triplicate cards array for seamless infinite looping physics
const LOOP_CARDS = [...differenceItems, ...differenceItems, ...differenceItems];

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Animation & physics state refs for 60fps RAF loop
  const offsetRef = useRef(0);
  const velocityRef = useRef(-0.8);
  const lastPointerXRef = useRef(0);
  const isPointerDownRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  // Card geometry parameters
  const isMobile = containerWidth < 768;
  const cardWidth = isMobile ? 260 : 310;
  const cardGap = isMobile ? 18 : 26;
  const pitch = cardWidth + cardGap;
  const totalItems = LOOP_CARDS.length;
  const singleSetWidth = differenceItems.length * pitch;

  // Track container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Main 60fps Physics & Momentum RAF Loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isPointerDownRef.current) {
        // Natural target drift speed (slower when hovered)
        const targetSpeed = isHovered ? -0.2 : -0.8;
        // Exponential decay towards auto-scroll speed
        velocityRef.current = velocityRef.current * 0.95 + targetSpeed * 0.05;
        offsetRef.current += velocityRef.current * (dt * 60);
      }

      // Seamless modular wrap
      if (offsetRef.current <= -singleSetWidth) {
        offsetRef.current += singleSetWidth;
      } else if (offsetRef.current > 0) {
        offsetRef.current -= singleSetWidth;
      }

      // Re-apply cylinder transforms directly to DOM elements for ultra-smooth 60fps performance
      if (containerRef.current) {
        const cx = containerWidth / 2;
        const cards = containerRef.current.querySelectorAll<HTMLDivElement>("[data-card-idx]");

        cards.forEach((card) => {
          const idx = parseInt(card.dataset.cardIdx || "0", 10);
          // Position relative to viewport center
          let cardX = idx * pitch + offsetRef.current;

          // Wrap position so it stays in visible circular track
          const fullTrackWidth = totalItems * pitch;
          cardX = ((cardX % fullTrackWidth) + fullTrackWidth) % fullTrackWidth;
          if (cardX > fullTrackWidth - pitch * 2) {
            cardX -= fullTrackWidth;
          }

          const centerDist = cardX + cardWidth / 2 - cx;
          const normDist = centerDist / (containerWidth * 0.52);
          const clampedNorm = Math.max(-1.5, Math.min(1.5, normDist));

          // Cylinder curve geometry: Center cards upright, edges curve in 3D
          const d2 = clampedNorm * clampedNorm;
          const rotateY = clampedNorm * -24; // Leans inside cylinder
          const translateZ = -d2 * (isMobile ? 55 : 95); // Deep curve into cylinder
          const scale = 1 + 0.08 * d2; // Outer cards grow taller
          const opacity = Math.max(0.25, 1 - Math.pow(Math.abs(clampedNorm) * 0.75, 4));

          card.style.transform = `translate3d(${cardX}px, 0px, 0px) perspective(1100px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
          card.style.opacity = `${opacity}`;
        });
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [containerWidth, pitch, singleSetWidth, totalItems, cardWidth, isHovered, isMobile]);

  // Pointer & Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    lastPointerXRef.current = e.clientX;
    setIsDragging(true);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    const deltaX = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;
    offsetRef.current += deltaX;
    velocityRef.current = deltaX * 0.85; // Transfer momentum to fling
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // Pointer capture was already released
      }
    }
  };

  return (
    <section className="pt-14 sm:pt-18 pb-14 sm:pb-20 bg-white border-b border-[#E1E7E6] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
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
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-heading tracking-tight"
          >
            What makes Reforbs <span className="text-[#007A7A]">different</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A524F] text-sm sm:text-base mt-2.5 font-medium leading-relaxed"
          >
            Where most coliving spaces market security and restrictions, we focus on ownership, freedom, and deep human connection.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden select-none">
        {/* 3D Cylindrical Curved Carousel Track */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-full ${
            isMobile ? "h-[450px]" : "h-[490px]"
          } cursor-grab active:cursor-grabbing overflow-visible touch-pan-y`}
          style={{ perspective: "1100px" }}
          aria-label="Cylindrical interactive carousel of The Reforbs Difference"
        >
          {LOOP_CARDS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.id}-${idx}`}
                data-card-idx={idx}
                className="absolute top-0 left-0 w-[260px] md:w-[310px] will-change-transform"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className={`relative rounded-3xl p-6 text-white bg-gradient-to-br ${item.gradient} shadow-2xl overflow-hidden border border-white/20 select-none flex flex-col justify-between h-[420px] md:h-[450px] transition-shadow duration-300 hover:shadow-glow`}
                >
                  {/* Subtle Ambient Radial Glow */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Top Real Photo Frame (3:2 Ratio) */}
                    <div className="relative h-40 sm:h-44 w-full rounded-2xl overflow-hidden shadow-lg bg-black/40 border border-white/20 mb-4 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="310px"
                        draggable={false}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Monogram Icon & Number Badges */}
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#FFDE59] shadow-sm">
                        <Icon size={18} />
                      </div>

                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-[10px] font-black tracking-wider text-white">
                        {item.number}
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#007A7A] text-white shadow-sm">
                        {item.tag1}
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight mb-2">
                      {item.label}
                    </h3>

                    {/* Subline */}
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights tag bar */}
                  <div className="pt-3.5 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-white/90">
                    <span className="text-white/70">{item.tag1}</span>
                    <span className="text-[#FFDE59] font-extrabold flex items-center gap-1">
                      <Check size={12} className="text-[#FFDE59]" />
                      <span>{item.tag2}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Users,
  Gamepad2,
  UtensilsCrossed,
  Music,
  Laptop,
  HeartHandshake,
  PartyPopper,
  Sparkles,
  Check,
  type LucideIcon,
} from "lucide-react";

export interface CommunityCardItem {
  id: string;
  number: string;
  label: string;
  icon: LucideIcon;
  tag1: string;
  tag2: string;
  gradient: string;
  description: string;
  image: string;
}

export const communityCards: CommunityCardItem[] = [
  {
    id: "social-bonding",
    number: "01",
    label: "Living & Social Bonding",
    icon: Users,
    tag1: "Reforbs Community",
    tag2: "Supportive Tribe",
    gradient: "from-[#006E6E] via-[#004D4D] to-[#022626]",
    description:
      "Channel social bonding towards personal growth through enriching shared living, mutual support, and lifelong friends.",
    image: "/images/hero-community.webp",
  },
  {
    id: "recreation-lounge",
    number: "02",
    label: "Gaming & Chill Lounge",
    icon: Gamepad2,
    tag1: "Unwind & Play",
    tag2: "Board Games & PS5",
    gradient: "from-[#0F6274] via-[#0A4552] to-[#04242B]",
    description:
      "Unwind after a busy workday with FIFA showdowns, board game championships, and relaxed couch conversations.",
    image: "/images/hero-recreation.webp",
  },
  {
    id: "community-feasts",
    number: "03",
    label: "Community Feasts & Brunches",
    icon: UtensilsCrossed,
    tag1: "Shared Dining",
    tag2: "Weekend BBQs",
    gradient: "from-[#047857] via-[#065F46] to-[#02281D]",
    description:
      "Cook together in private kitchens, swap traditional family recipes, and feast at weekend rooftop barbecues.",
    image: "/images/hero-dining.webp",
  },
  {
    id: "rooftop-jams",
    number: "04",
    label: "Rooftop Jams & Socials",
    icon: Music,
    tag1: "Vibe Nights",
    tag2: "Acoustic Sessions",
    gradient: "from-[#115E59] via-[#0D4440] to-[#032220]",
    description:
      "Acoustic jams under the Pune skies, open-mic storytelling, neon nights, and soulful community vibes.",
    image: "/images/community-lifestyle.webp",
  },
  {
    id: "creative-coworking",
    number: "05",
    label: "Creative Co-Working Sprints",
    icon: Laptop,
    tag1: "Work & Connect",
    tag2: "High-Speed Fiber",
    gradient: "from-[#164E63] via-[#0E3846] to-[#031F27]",
    description:
      "Ergonomic work desks, dedicated fiber connectivity, and spontaneous brainstorming with fellow creators and founders.",
    image: "/images/hero-shared-living.webp",
  },
  {
    id: "wellness-growth",
    number: "06",
    label: "Mindful Mornings & Yoga",
    icon: HeartHandshake,
    tag1: "Wellness & Growth",
    tag2: "Daily Movement",
    gradient: "from-[#0D5C5A] via-[#083E3D] to-[#022120]",
    description:
      "Sunrise yoga, meditation sessions, and wellness habits that keep your energy and mental health at their peak.",
    image: "/images/living-reforbs-way.webp",
  },
  {
    id: "festivals-celebration",
    number: "07",
    label: "Festival Vibes & Celebrations",
    icon: PartyPopper,
    tag1: "Reforbs Family",
    tag2: "Zero Loneliness",
    gradient: "from-[#006E6E] via-[#0A4552] to-[#022626]",
    description:
      "Diwali lights, Holi colors, New Year bashes, and birthday treats celebrated together so you never miss home.",
    image: "/images/properties/moksha/image-3.jpg",
  },
  {
    id: "late-night-talks",
    number: "08",
    label: "Late-Night Talks & Stories",
    icon: Sparkles,
    tag1: "Home Atmosphere",
    tag2: "Pure Good Energy",
    gradient: "from-[#0F6274] via-[#0D4440] to-[#04242B]",
    description:
      "Deep balcony conversations, midnight chai runs, and genuine human bonding that turn roommates into family.",
    image: "/images/properties/nirvana/image-2.jpg",
  },
];

// Triplicate cards array for seamless infinite looping physics
const LOOP_CARDS = [...communityCards, ...communityCards, ...communityCards];

export default function CommunityRibbonHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
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
  const singleSetWidth = communityCards.length * pitch;

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
        const targetSpeed = isHovered ? -0.25 : -0.85;
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

      // Apply 3D cylinder curve transforms directly to DOM elements
      if (containerRef.current) {
        const cx = containerWidth / 2;
        const cards = containerRef.current.querySelectorAll<HTMLDivElement>("[data-card-idx]");

        cards.forEach((card) => {
          const idx = parseInt(card.dataset.cardIdx || "0", 10);
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
          const scale = 1 + 0.08 * d2; // Outer cards grow subtly
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
    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="relative w-full overflow-hidden select-none py-4 bg-transparent">
      {/* 3D Cylindrical Curved Carousel Track directly on page */}
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
        aria-label="3D interactive carousel of Reforbs Community"
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
                  {/* Real Photo Frame */}
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

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Footer Badges & Tagline */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-[#FFDE59]">
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#FFDE59]" /> {item.tag2}
                  </span>
                  <span className="text-white/60 uppercase tracking-widest text-[9px] font-black">
                    #LIVETHEVIBES
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

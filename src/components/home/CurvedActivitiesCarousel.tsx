"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Users, Sparkles, Flame, Film, Sun, Utensils, Check, type LucideIcon } from "lucide-react";

export interface ActivityCardItem {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
  tag1: string;
  tag2: string;
  image: string;
}

export const activitiesData: ActivityCardItem[] = [
  {
    id: "yoga",
    number: "01",
    icon: Sun,
    title: "Group Yoga & Wellness",
    desc: "Laugh, eat, and breathe your way to wellness with morning rooftop sessions.",
    gradient: "from-[#006E6E] via-[#004D4D] to-[#022626]",
    tag1: "Rooftop Sunrise",
    tag2: "Mindful Flow",
    image: "/images/activity-group-yoga.jpg",
  },
  {
    id: "art",
    number: "02",
    icon: Flame,
    title: "DIY & Art Sessions",
    desc: "Expressive painting, pottery, and creative workshops with like-minded creators.",
    gradient: "from-[#0F6274] via-[#0A4552] to-[#04242B]",
    tag1: "Creative Expression",
    tag2: "Hands-on Art",
    image: "/images/activity-art-diy.jpg",
  },
  {
    id: "cooking",
    number: "03",
    icon: Utensils,
    title: "Community Cooking & BBQs",
    desc: "Communal feasts, outdoor grills, and sharing authentic regional family recipes.",
    gradient: "from-[#047857] via-[#065F46] to-[#02281D]",
    tag1: "Regional Flavors",
    tag2: "Weekend BBQs",
    image: "/images/activity-community-cooking.jpg",
  },
  {
    id: "festivals",
    number: "04",
    icon: Sparkles,
    title: "Festival Celebrations",
    desc: "Grand Holi, Diwali, Christmas, and New Year with your Reforbs family.",
    gradient: "from-[#115E59] via-[#0D4440] to-[#032220]",
    tag1: "Festive Dinners",
    tag2: "Family Vibes",
    image: "/images/activity-festival-celebrations.jpg",
  },
  {
    id: "mentorship",
    number: "05",
    icon: Users,
    title: "Mentorship & Networking",
    desc: "Casual fireside chats with working professionals, senior founders, and alumni.",
    gradient: "from-[#164E63] via-[#0E3846] to-[#031F27]",
    tag1: "Founders & CXOs",
    tag2: "Career Growth",
    image: "/images/activity-mentorship.jpg",
  },
  {
    id: "movies",
    number: "06",
    icon: Film,
    title: "Picnics & Movie Nights",
    desc: "Weekend road trip getaways, cozy projector cinema screenings, and popcorn.",
    gradient: "from-[#0D5C5A] via-[#083E3D] to-[#022120]",
    tag1: "Cinema Lounges",
    tag2: "Road Trips",
    image: "/images/activity-movie-night.jpg",
  },
];

// Triplicate the cards array for seamless infinite looping
const LOOP_CARDS = [...activitiesData, ...activitiesData, ...activitiesData];

export default function CurvedActivitiesCarousel() {
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
  const singleSetWidth = activitiesData.length * pitch;

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

      // Re-apply cylinder transforms directly to DOM elements for ultra-high 60fps performance
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
          // Shift track so it spans smoothly across -pitch to fullTrackWidth
          if (cardX > fullTrackWidth - pitch * 2) {
            cardX -= fullTrackWidth;
          }

          const centerDist = cardX + cardWidth / 2 - cx;
          const normDist = centerDist / (containerWidth * 0.52);
          const clampedNorm = Math.max(-1.5, Math.min(1.5, normDist));

          // Cylinder curve geometry from Reelmark prompt:
          // Center cards are upright; edge cards are taller with their outer edge taller than the inner edge
          const d2 = clampedNorm * clampedNorm;
          const rotateY = clampedNorm * -24; // Leans inside cylinder
          const translateZ = -d2 * (isMobile ? 55 : 95); // Deep curve into cylinder
          const scale = 1 + 0.08 * d2; // Outer cards grow taller
          const opacity = Math.max(0.2, 1 - Math.pow(Math.abs(clampedNorm) * 0.75, 4));

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
    <div className="relative w-full overflow-hidden select-none py-6">
      {/* Main Cylinder Carousel Track */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-full h-[460px] sm:h-[490px] overflow-hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } touch-pan-y`}
        style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
      >
        {/* Soft Left & Right Vignette Shadows */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#111312] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#111312] to-transparent z-20 pointer-events-none" />

        {/* The Looped Curved Cards */}
        {LOOP_CARDS.map((act, i) => {
          const Icon = act.icon;
          return (
            <div
              key={`${act.id}-${i}`}
              data-card-idx={i}
              className="absolute top-4 left-0 will-change-transform rounded-3xl overflow-hidden shadow-2xl border border-white/20 group"
              style={{
                width: `${cardWidth}px`,
                height: isMobile ? "400px" : "440px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${act.gradient} z-0`} />

              {/* Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-white/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              {/* Top Photo Tile with Aspect Ratio & Subtle Vignette */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-white/15 z-10 bg-black/40">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021818] via-transparent to-black/30 pointer-events-none" />

                {/* Top Overlay Badge & Number */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="w-10 h-10 rounded-2xl bg-black/50 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#FFDE59] shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-md border border-white/20">
                    {act.number}
                  </span>
                </div>
              </div>

              {/* Bottom Details Section */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-[calc(100%-11rem)] sm:h-[calc(100%-12rem)]">
                <div>
                  <h4 className="text-lg sm:text-xl font-black font-heading text-white mb-2 leading-tight group-hover:text-[#FFDE59] transition-colors line-clamp-1">
                    {act.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium line-clamp-2">
                    {act.desc}
                  </p>
                </div>

                {/* Highlights Bottom Bar */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-white/90">
                  <span className="text-white/70 line-clamp-1">{act.tag1}</span>
                  <span className="text-[#FFDE59] font-extrabold flex items-center gap-1 shrink-0">
                    <Check size={12} className="text-[#FFDE59]" />
                    <span>{act.tag2}</span>
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

"use client";

import { useEffect, useRef, useState } from "react";
import {
  Clock,
  ShieldCheck,
  Wrench,
  FileText,
  TrendingUp,
  Lock,
  HeartHandshake,
  Check,
  type LucideIcon,
} from "lucide-react";

export interface OwnerPillarItem {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
  tag2: string;
  highlight?: boolean;
}

export const OWNER_PILLARS: OwnerPillarItem[] = [
  {
    id: 1,
    number: "01",
    title: "1. Long Lease",
    description:
      "Enjoy multi-year lease security (3 to 9 years). Eliminate frequent tenant vacancies, brokerage expenses, and repetitive marketing efforts.",
    icon: Clock,
    tag: "3 to 9 Years",
    tag2: "Zero Vacancy Risk",
  },
  {
    id: 2,
    number: "02",
    title: "2. Reliable Service",
    description:
      "Dedicated property supervisors, trained security, and rapid 24/7 host assistance ensure smooth daily management of your building.",
    icon: ShieldCheck,
    tag: "24/7 Host Care",
    tag2: "Dedicated Staff",
  },
  {
    id: 3,
    number: "03",
    title: "3. End to End Maintenance",
    description:
      "Reforbs covers interior upkeep, plumbing, electrical installations, painting, and deep sanitation, keeping your asset in pristine condition.",
    icon: Wrench,
    tag: "Zero Upkeep Hassle",
    tag2: "Asset Protection",
  },
  {
    id: 4,
    number: "04",
    title: "4. Transparent Practices",
    description:
      "Direct founder communication, auditable digital accounting, and clearly documented contractual terms with zero hidden deductions.",
    icon: FileText,
    tag: "100% Auditable",
    tag2: "Zero Hidden Costs",
  },
  {
    id: 5,
    number: "05",
    title: "5. Timely Rent",
    description:
      "Receive guaranteed on-time monthly rent disbursement directly into your bank account on or before the committed date every single month.",
    icon: TrendingUp,
    tag: "On-Time Payouts",
    tag2: "Bank Direct",
  },
  {
    id: 6,
    number: "06",
    title: "6. Legal Operations",
    description:
      "Strict mandatory police verification for every resident, comprehensive KYC checks, and registered agreements that keep your property 100% compliant.",
    icon: Lock,
    tag: "Strict Police KYC",
    tag2: "100% Compliant",
  },
  {
    id: 7,
    number: "07",
    title: "7. Ethical Operations",
    description:
      "We balance resident autonomy with high community standards. Reforbs enforces strict zero-nuisance, zero-drug, and respect-based community rules that preserve neighborhood tranquility and protect the societal reputation of your building.",
    icon: HeartHandshake,
    tag: "Zero Nuisance",
    tag2: "Reputation Guard",
    highlight: true,
  },
];

// Triplicate cards array for seamless infinite looping physics
const LOOP_CARDS = [...OWNER_PILLARS, ...OWNER_PILLARS, ...OWNER_PILLARS];

export default function WhyPropertyOwnersCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(390);
  const [, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Animation & physics state refs for 60fps RAF loop
  const offsetRef = useRef(0);
  const velocityRef = useRef(-0.8);
  const lastPointerXRef = useRef(0);
  const isPointerDownRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  // Card geometry parameters on mobile (matching The Reforbs Difference cylindrical curve)
  const cardWidth = 270;
  const cardGap = 16;
  const pitch = cardWidth + cardGap;
  const totalItems = LOOP_CARDS.length;
  const singleSetWidth = OWNER_PILLARS.length * pitch;

  // Track container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth || window.innerWidth);
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
        // Natural target drift speed (slower when hovered or touched)
        const targetSpeed = isHovered ? -0.2 : -0.75;
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

      // Apply 3D cylinder curve transforms directly to DOM elements (matching The Reforbs Difference)
      if (containerRef.current) {
        const cx = containerWidth / 2;
        const cards = containerRef.current.querySelectorAll<HTMLDivElement>("[data-owner-card-idx]");

        cards.forEach((card) => {
          const idx = parseInt(card.dataset.ownerCardIdx || "0", 10);
          let cardX = idx * pitch + offsetRef.current;

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
          const translateZ = -d2 * 55; // Deep curve into cylinder
          const scale = 1 + 0.08 * d2; // Outer cards grow slightly
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
  }, [containerWidth, pitch, singleSetWidth, totalItems, cardWidth, isHovered]);

  // Pointer & Drag Handlers for Mobile Swipe
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
    <>
      {/* MOBILE ONLY (md:hidden): 3D Cylindrical Curved Scrolling Carousel (matching The Reforbs Difference) */}
      <div className="block md:hidden relative w-full overflow-hidden select-none -mx-4 px-4 py-2">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[360px] cursor-grab active:cursor-grabbing overflow-visible touch-pan-y"
          style={{ perspective: "1100px" }}
          aria-label="3D Cylindrical carousel of Why Property Owners Choose Reforbs"
        >
          {LOOP_CARDS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={`owner-card-${item.id}-${idx}`}
                data-owner-card-idx={idx}
                className="absolute top-0 left-0 w-[270px] will-change-transform"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className={`relative rounded-3xl p-6 text-white ${
                    item.highlight
                      ? "bg-gradient-to-b from-[#006E6E] via-[#007A7A] to-[#268672] border-2 border-[#FFDE59]/60"
                      : "bg-gradient-to-b from-[#006E6E] to-[#268672] border border-white/20"
                  } shadow-2xl overflow-hidden select-none flex flex-col justify-between h-[335px]`}
                >
                  {/* Subtle Ambient Radial Glow */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Top Header: Monogram Icon & Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl ${
                          item.highlight
                            ? "bg-[#FFDE59] text-[#111827]"
                            : "bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59]"
                        } flex items-center justify-center font-black shadow-sm`}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-black tracking-wider text-[#FFDE59]">
                        PILLAR {item.number}
                      </div>
                    </div>

                    {/* Headline */}
                    <h4 className="text-lg font-black font-heading text-white tracking-tight mb-2">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-white/90 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights tag bar */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-white/90">
                    <span className="text-white/70 text-[10px]">{item.tag}</span>
                    <span className="text-[#FFDE59] font-extrabold flex items-center gap-1 text-[10px]">
                      <Check size={12} className="text-[#FFDE59]" />
                      <span>{item.tag2}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe indicator dots/hint for mobile */}
        <div className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-[#4A524F] font-bold">
          <span>← Swipe to explore 7 pillars →</span>
        </div>
      </div>

      {/* DESKTOP ONLY (hidden md:grid): Exact Original 7 Feature Blocks Grid (100% UNTOUCHED FOR PC) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Feature 1 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/20 shadow-lg hover:border-[#FFDE59]/60 hover:shadow-2xl hover:-translate-y-1 transition-all space-y-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
            <Clock size={22} />
          </div>
          <h4 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">
            1. Long Lease
          </h4>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
            Enjoy multi-year lease security (3 to 9 years). Eliminate frequent tenant vacancies, brokerage expenses, and repetitive marketing efforts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/20 shadow-lg hover:border-[#FFDE59]/60 hover:shadow-2xl hover:-translate-y-1 transition-all space-y-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
            <ShieldCheck size={22} />
          </div>
          <h4 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">
            2. Reliable Service
          </h4>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
            Dedicated property supervisors, trained security, and rapid 24/7 host assistance ensure smooth daily management of your building.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/20 shadow-lg hover:border-[#FFDE59]/60 hover:shadow-2xl hover:-translate-y-1 transition-all space-y-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
            <Wrench size={22} />
          </div>
          <h4 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">
            3. End to End Maintenance
          </h4>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
            Reforbs covers interior upkeep, plumbing, electrical installations, painting, and deep sanitation, keeping your asset in pristine condition.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/20 shadow-lg hover:border-[#FFDE59]/60 hover:shadow-2xl hover:-translate-y-1 transition-all space-y-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
            <FileText size={22} />
          </div>
          <h4 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">
            4. Transparent Practices
          </h4>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
            Direct founder communication, auditable digital accounting, and clearly documented contractual terms with zero hidden deductions.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/20 shadow-lg hover:border-[#FFDE59]/60 hover:shadow-2xl hover:-translate-y-1 transition-all space-y-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
            <TrendingUp size={22} />
          </div>
          <h4 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">
            5. Timely Rent
          </h4>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
            Receive guaranteed on-time monthly rent disbursement directly into your bank account on or before the committed date every single month.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/20 shadow-lg hover:border-[#FFDE59]/60 hover:shadow-2xl hover:-translate-y-1 transition-all space-y-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
            <Lock size={22} />
          </div>
          <h4 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">
            6. Legal Operations
          </h4>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
            Strict mandatory police verification for every resident, comprehensive KYC checks, and registered agreements that keep your property 100% compliant.
          </p>
        </div>

        {/* Feature 7 (Full width on md/lg) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#006E6E] via-[#007A7A] to-[#268672] text-white border-2 border-[#FFDE59]/50 md:col-span-2 lg:col-span-3 space-y-3 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FFDE59]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-[#FFDE59] text-[#111827] flex items-center justify-center font-black shadow-md group-hover:scale-110 transition-transform">
            <HeartHandshake size={22} />
          </div>
          <h4 className="text-base sm:text-xl font-black font-heading text-white tracking-tight">
            7. Ethical Operations
          </h4>
          <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
            We balance resident autonomy with high community standards. Reforbs enforces strict zero-nuisance, zero-drug, and respect-based community rules that preserve neighborhood tranquility and protect the societal reputation of your building.
          </p>
        </div>
      </div>
    </>
  );
}

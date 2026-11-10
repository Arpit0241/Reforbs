import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import WhyPropertyOwnersCarousel from "@/components/partner/WhyPropertyOwnersCarousel";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  FileText,
  Clock,
  Wrench,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Users,
  Award,
  ArrowRight,
  Phone,
  MessageSquare,
  Lock,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Reforbs Investors Program & Property Partnerships",
  description:
    "Explore the Reforbs Investors Program offering structured returns up to 22.5%, or partner your residential property with zero-hassle long-term leases, 100% transparent operations, and end-to-end maintenance.",
};

export default function PartnerWithUsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen text-[#111827] selection:bg-[#FFDE59] selection:text-[#111827]">
      {/* =========================================================================
          SECTION 1 — HERO & INVESTORS PROGRAM
          ========================================================================= */}
      <section
        id="investors-program"
        className="bg-gradient-to-b from-[#006A6A] to-[#007A7A] text-white py-16 sm:py-24 relative overflow-hidden"
      >
        {/* Subtle decorative radiant glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFDE59]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider font-heading shadow-md">
                <TrendingUp size={15} className="text-[#111827]" />
                <span>Reforbs Investors Program</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
                Empowering Growth Through{" "}
                <span className="text-[#FFDE59] underline decoration-[#FFDE59]/40 underline-offset-8">
                  Strategic Hospitality
                </span>{" "}
                Investments
              </h1>

              <p className="text-white/95 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Reforbs bridges high-demand student and professional urban hubs with
                structured, high-yield capital deployment. Experience dependable monthly cash flows,
                uncompromised transparency, and robust operational asset backing.
              </p>

              {/* 3 Core Highlights - Crisp White Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-white text-[#111827] shadow-xl border border-white/60 hover:border-[#FFDE59] hover:-translate-y-0.5 transition-all text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-3 shadow-sm">
                    <TrendingUp size={18} />
                  </div>
                  <h2 className="text-sm font-black text-[#111827] mb-1">
                    Fixed Returns
                  </h2>
                  <p className="text-xs text-[#4A524F] leading-relaxed font-medium">
                    Predictable monthly payouts supported by high-occupancy co-living and student housing.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white text-[#111827] shadow-xl border border-white/60 hover:border-[#FFDE59] hover:-translate-y-0.5 transition-all text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-3 shadow-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <h2 className="text-sm font-black text-[#111827] mb-1">
                    100% Transparency
                  </h2>
                  <p className="text-xs text-[#4A524F] leading-relaxed font-medium">
                    Auditable operations, digital contracts, and verifiable milestone performance.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white text-[#111827] shadow-xl border border-white/60 hover:border-[#FFDE59] hover:-translate-y-0.5 transition-all text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-3 shadow-sm">
                    <Building2 size={18} />
                  </div>
                  <h2 className="text-sm font-black text-[#111827] mb-1">
                    Secure Asset-Backed
                  </h2>
                  <p className="text-xs text-[#4A524F] leading-relaxed font-medium">
                    Deployments in prime urban education and corporate corridors like Viman Nagar & Lavale.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#invest-with-us"
                  className="px-6 py-3.5 rounded-2xl bg-[#FFDE59] hover:bg-[#ffd633] text-[#111827] font-black text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Explore Investment Framework</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://wa.me/917420040241?text=Hello%20Reforbs%20Leadership!%20I%20am%20interested%20in%20learning%20more%20about%20the%20Reforbs%20Investors%20Program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <MessageSquare size={16} className="text-[#FFDE59]" />
                  <span>WhatsApp Leadership</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: investor-growth.jpg */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden p-3 bg-white border border-white/60 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <Image
                    src="/images/partner/investor-growth.jpg"
                    alt="Reforbs Investors Program Growth Trajectory"
                    width={682}
                    height={1024}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="p-4 bg-white border-t border-[#E1E7E6]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#007A7A] tracking-wider">
                        High Yield Hospitality
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Institutional Quality
                      </span>
                    </div>
                    <p className="text-xs text-[#4A524F] mt-1.5 leading-relaxed font-medium">
                      Designed for consistent yield, long-term capital preservation, and zero landlord hassle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — INVEST WITH US (FIXED RETURN FRAMEWORK)
          ========================================================================= */}
      <section
        id="invest-with-us"
        className="relative py-16 sm:py-24 bg-white border-b border-[#E1E7E6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F4F3] text-[#007A7A] font-black text-xs uppercase tracking-wider font-heading border border-[#007A7A]/20 shadow-sm">
              <Sparkles size={14} className="text-[#007A7A]" />
              <span>Fixed Return Framework</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#111827]">
              Invest With Us
            </h2>

            <p className="text-base text-[#4A524F] font-medium leading-relaxed">
              A transparent, structured 36-month investment framework delivering steady monthly payouts
              and reliable principal return.
            </p>
          </div>

          {/* Key Return Numbers Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="p-5 sm:p-6 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] hover:shadow-card transition-all">
              <span className="text-[11px] sm:text-xs font-black uppercase text-[#007A7A] tracking-wider block mb-1">
                Annual Return
              </span>
              <div className="text-2xl sm:text-4xl font-black font-heading text-[#007A7A] tracking-tight">
                Up to 22.5%
              </div>
              <span className="text-[11px] font-semibold text-[#6B7280] mt-1 block">
                Per Annum
              </span>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] hover:shadow-card transition-all">
              <span className="text-[11px] sm:text-xs font-black uppercase text-[#007A7A] tracking-wider block mb-1">
                Minimum Investment
              </span>
              <div className="text-2xl sm:text-4xl font-black font-heading text-[#111827] tracking-tight">
                ₹10 Lakhs
              </div>
              <span className="text-[11px] font-semibold text-[#6B7280] mt-1 block">
                Base Investment
              </span>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] hover:shadow-card transition-all">
              <span className="text-[11px] sm:text-xs font-black uppercase text-[#007A7A] tracking-wider block mb-1">
                Investment Tenure
              </span>
              <div className="text-2xl sm:text-4xl font-black font-heading text-[#111827] tracking-tight">
                36 Months
              </div>
              <span className="text-[11px] font-semibold text-[#6B7280] mt-1 block">
                Structured Horizon
              </span>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] hover:shadow-card transition-all">
              <span className="text-[11px] sm:text-xs font-black uppercase text-[#007A7A] tracking-wider block mb-1">
                Monthly Payout
              </span>
              <div className="text-2xl sm:text-4xl font-black font-heading text-[#007A7A] tracking-tight">
                ₹43,500
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">
                Every Single Month
              </span>
            </div>
          </div>

          {/* Detailed Return Architecture Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#E6F4F3] via-[#F0F7F7] to-white border-2 border-[#CDE3E1] p-6 sm:p-10 shadow-card relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Figures Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#007A7A] text-white shadow-sm">
                    Payout Schedule Breakdown
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#111827] mt-3">
                    ₹16,66,000 Total Returns on ₹10 Lakhs
                  </h3>
                  <p className="text-sm text-[#4A524F] font-medium mt-1 leading-relaxed">
                    Designed to provide uninterrupted monthly income while steadily amortizing capital.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#CDE3E1] shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center font-black text-xs">
                        1
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#111827]">Monthly Returns (Months 1–36)</div>
                        <div className="text-xs text-[#6B7280]">₹43,500 disbursed every month for 36 months</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-[#007A7A]">₹15,66,000</div>
                      <div className="text-[10px] font-bold text-[#6B7280]">Total 36 Mo.</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#CDE3E1] shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center font-black text-xs">
                        2
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#111827]">37th Month Principal Return</div>
                        <div className="text-xs text-[#6B7280]">Final balance principal redemption on maturity</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-[#B45309]">₹1,00,000</div>
                      <div className="text-[10px] font-bold text-[#6B7280]">Month 37</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#006A6A] to-[#007A7A] text-white shadow-md">
                    <div>
                      <div className="text-sm sm:text-base font-black text-white">
                        Total Payout Across Tenure
                      </div>
                      <div className="text-xs text-white/80">Principal + 36 Months Fixed Monthly Yield</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-black text-[#FFDE59]">
                        ₹16,66,000
                      </div>
                      <div className="text-[11px] font-bold text-white/90">Net Capital Returned</div>
                    </div>
                  </div>
                </div>

                {/* Regulatory / Compliance Notice */}
                <div className="p-3.5 rounded-xl bg-white/90 border border-[#E1E7E6] text-xs text-[#6B7280] leading-relaxed">
                  <span className="font-bold text-[#111827]">Investor Disclaimer: </span>
                  Returns, payout schedules, and tenure conditions are defined in formal private investor agreements.
                  Reforbs adheres to statutory guidelines and documented asset-allocation models.
                </div>
              </div>

              {/* Right Column: Visuals invest-house & invest-handshake */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white border border-[#E1E7E6] p-4 flex flex-col items-center justify-center text-center shadow-sm">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image
                      src="/images/partner/invest-house.png"
                      alt="Reforbs Real Estate Assets"
                      fill
                      className="object-contain p-2 hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#111827] mt-2">
                    Prime Micro-Markets
                  </span>
                  <span className="text-[10px] font-medium text-[#6B7280]">
                    High Demand Corridors
                  </span>
                </div>

                <div className="rounded-2xl bg-white border border-[#E1E7E6] p-4 flex flex-col items-center justify-center text-center shadow-sm">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image
                      src="/images/partner/invest-handshake.png"
                      alt="Reforbs Partnership Trust"
                      fill
                      className="object-contain p-2 hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#111827] mt-2">
                    Contractual Trust
                  </span>
                  <span className="text-[10px] font-medium text-[#6B7280]">
                    Prompt Timely Payouts
                  </span>
                </div>

                {/* Action button in the box */}
                <div className="col-span-2 pt-2">
                  <a
                    href="https://wa.me/917420040241?text=Hi%20Reforbs%2C%20I%20would%20like%20to%20request%20the%20detailed%20Investors%20Program%20prospectus%20and%20term%20sheet."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#007A7A] hover:bg-[#006363] text-white text-xs sm:text-sm font-black shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
                  >
                    <MessageSquare size={16} className="text-[#FFDE59]" />
                    <span>Request Full Investor Term Sheet</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — PROPERTY OWNERS (RENT YOUR SPACE)
          ========================================================================= */}
      <section
        id="rent-your-space"
        className="relative py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E1E7E6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9D4] border border-[#E6D7A8] text-[#1B1D1C] font-black text-xs uppercase tracking-wider font-heading shadow-sm">
                <Building2 size={15} className="text-[#007A7A]" />
                <span>For Property Owners</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#111827]">
                Partner With Us —{" "}
                <span className="text-[#007A7A]">Rent Your Space</span>
              </h2>

              <p className="text-base sm:text-lg text-[#4A524F] font-medium leading-relaxed">
                Transform your residential building or multi-unit property into a high-earning,
                carefully maintained asset. Reforbs takes over total operations, from tenant onboarding
                to round-the-clock maintenance and legal compliances.
              </p>
            </div>

            {/* Owner with Keys Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-[#E1E7E6] shadow-card p-3 bg-white">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <Image
                    src="/images/partner/property-owner-keys.png"
                    alt="Happy Reforbs Property Partner with Keys"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-black text-[#FFDE59]">
                      Zero Hassle Guaranteed
                    </span>
                    <p className="text-[11px] text-white/90 font-medium">
                      Long-term stability and timely rent, guaranteed directly by Reforbs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Track Record Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <div className="p-6 rounded-3xl bg-white border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] transition-all">
              <div className="text-3xl sm:text-5xl font-black font-heading text-[#007A7A] mb-1">
                50+
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#111827]">
                Happy Property Owners
              </div>
              <div className="text-[11px] text-[#6B7280] font-medium mt-1">Across Prime Pune Hubs</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] transition-all">
              <div className="text-3xl sm:text-5xl font-black font-heading text-[#007A7A] mb-1">
                90%
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#111827]">
                Owner Retention Rate
              </div>
              <div className="text-[11px] text-[#6B7280] font-medium mt-1">Long-term Renewals</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] transition-all">
              <div className="text-3xl sm:text-5xl font-black font-heading text-[#007A7A] mb-1">
                0
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#111827]">
                Neighbor Complaints
              </div>
              <div className="text-[11px] text-[#6B7280] font-medium mt-1">Disciplined Operations</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E1E7E6] shadow-sm text-center hover:border-[#007A7A] transition-all">
              <div className="text-3xl sm:text-5xl font-black font-heading text-[#007A7A] mb-1">
                0
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#111827]">
                Competitor Takeovers
              </div>
              <div className="text-[11px] text-[#6B7280] font-medium mt-1">100% Owner Loyalty</div>
            </div>
          </div>

          {/* 7 Feature Blocks */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#111827]">
                Why Property Owners Choose Reforbs
              </h3>
              <p className="text-sm text-[#4A524F] font-medium mt-1">
                Seven pillars of operational excellence that safeguard your property and maximize net yield.
              </p>
            </div>

            <WhyPropertyOwnersCarousel />
          </div>

          {/* Owner Lease Evaluation CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%20Leadership!%20I%20own%20a%20property%20in%20Pune%20and%20would%20like%20to%20discuss%20leasing%20it%20to%20Reforbs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#007A7A] hover:bg-[#006363] text-white text-sm sm:text-base font-black shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Building2 size={18} />
              <span>Submit Property for Lease Evaluation</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — LEADERSHIP & FOUNDER'S VISION
          ========================================================================= */}
      <section
        id="founders-vision"
        className="relative py-16 sm:py-24 bg-white border-b border-[#E1E7E6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F4F3] text-[#007A7A] font-black text-xs uppercase tracking-wider font-heading border border-[#007A7A]/20 shadow-sm">
              <Sparkles size={14} className="text-[#007A7A]" />
              <span>Leadership & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#111827]">
              Founder&apos;s Vision
            </h2>

            <p className="text-base sm:text-lg text-[#4A524F] font-medium leading-relaxed italic">
              &ldquo;We founded Reforbs to eliminate everything that made renting miserable: arbitrary curfews,
              moral policing, isolated rooms, and poor maintenance. We are building homes where students
              and professionals truly thrive.&rdquo;
            </p>
          </div>

          {/* 4 Core Pillars of Living */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white shadow-lg border border-white/20 text-center space-y-3 hover:border-[#FFDE59]/60 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] mx-auto flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                <Lock size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">Privacy</h3>
              <p className="text-xs text-white/90 font-normal leading-relaxed">
                Private bedrooms, attached washrooms, and respectful boundaries where personal space is sacred.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white shadow-lg border border-white/20 text-center space-y-3 hover:border-[#FFDE59]/60 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] mx-auto flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                <Award size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">Comfort</h3>
              <p className="text-xs text-white/90 font-normal leading-relaxed">
                Ergonomic study/work desks, individual AC units, high-speed fiber internet, and premium orthopaedic bedding.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white shadow-lg border border-white/20 text-center space-y-3 hover:border-[#FFDE59]/60 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] mx-auto flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                <HeartHandshake size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">Support</h3>
              <p className="text-xs text-white/90 font-normal leading-relaxed">
                Dedicated on-site host care, quick ticket resolution, transparent deposits, and zero bureaucracy.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white shadow-lg border border-white/20 text-center space-y-3 hover:border-[#FFDE59]/60 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-[#FFDE59] mx-auto flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                <Users size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-black font-heading text-white tracking-tight">Vibes</h3>
              <p className="text-xs text-white/90 font-normal leading-relaxed">
                A warm backpacker-inspired community with rooftop jams, co-working sprints, and genuine friendships.
              </p>
            </div>
          </div>

          {/* Founders Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Arpit Agarwal */}
            <div className="rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/25 shadow-xl p-6 sm:p-8 flex flex-col items-center text-center space-y-5 hover:border-[#FFDE59]/60 hover:shadow-2xl transition-all group">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-white border-4 border-[#FFDE59] shadow-2xl ring-4 ring-white/15 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/images/partner/arpit-agarwal.png"
                  alt="Arpit Agarwal - Founder, Reforbs"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                  Arpit Agarwal
                </h3>
                <span className="px-4 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-xs font-black uppercase text-[#FFDE59] tracking-wider inline-block shadow-sm">
                  Founder
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic font-normal max-w-sm">
                &ldquo;Reforbs was born out of personal conviction. Having experienced sterile, restrictive rentals firsthand, we set out to build spaces where freedom, community, and peace of mind coexist harmoniously.&rdquo;
              </p>

              <div className="pt-3 border-t border-white/20 text-[11px] font-bold text-white/80 w-full">
                Product Vision • Community Architecture • Brand Culture
              </div>
            </div>

            {/* Moinkhan Y Pathan */}
            <div className="rounded-3xl bg-gradient-to-b from-[#006E6E] to-[#268672] text-white border border-white/25 shadow-xl p-6 sm:p-8 flex flex-col items-center text-center space-y-5 hover:border-[#FFDE59]/60 hover:shadow-2xl transition-all group">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-white border-4 border-[#FFDE59] shadow-2xl ring-4 ring-white/15 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/images/partner/moinkhan-pathan.png"
                  alt="Moinkhan Y Pathan - Founder, Reforbs"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                  Moinkhan Y Pathan
                </h3>
                <span className="px-4 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-xs font-black uppercase text-[#FFDE59] tracking-wider inline-block shadow-sm">
                  Founder
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic font-normal max-w-sm">
                &ldquo;Every property we operate is managed with institutional precision. Our commitment to property owners is unwavering: absolute transparency, punctual payments, and the highest standards of physical upkeep.&rdquo;
              </p>

              <div className="pt-3 border-t border-white/20 text-[11px] font-bold text-white/80 w-full">
                Hospitality Operations • Owner Relations • Expansion Strategy
              </div>
            </div>
          </div>

          {/* Unified Final CTA Bar */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#006A6A] to-[#007A7A] text-white border border-[#005252] text-center max-w-4xl mx-auto space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Ready to Connect With Reforbs?
            </h3>
            <p className="text-xs sm:text-base text-white/95 max-w-xl mx-auto font-medium leading-relaxed">
              Whether you are looking to invest capital in high-demand hospitality or lease your property for guaranteed long-term yield, our leadership team is ready to assist.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/917420040241?text=Hello%20Reforbs%20Founders!%20I%20would%20like%20to%20discuss%20a%20partnership%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#FFDE59] hover:bg-[#ffd633] text-[#111827] text-xs sm:text-sm font-black shadow-lg transition-all active:scale-95 flex items-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Chat Directly With Founders</span>
              </a>

              <a
                href="tel:7420040241"
                className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold border border-white/30 transition-all flex items-center gap-2"
              >
                <Phone size={16} className="text-[#FFDE59]" />
                <span>Call Reforbs Office</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

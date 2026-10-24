"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    q: "Will I receive annoying pushy sales calls after submitting this form?",
    a: "Absolutely NOT! At Reforbs, our philosophy is 'Take it if you like it!! We don't push for sales. You will never receive an unsolicited follow-up call from our side.' We only share the directions and details you request.",
  },
  {
    q: "Are guests and friends allowed inside the properties?",
    a: "Yes! 'This is YOUR home!! Live as if you OWN it...' We do not believe in imposing restrictions and bans. Friends are warmly welcomed as long as we respect fellow community members within positive social norms.",
  },
  {
    q: "Is there a compulsory food or mess package?",
    a: "No! Unlike traditional PGs that force subpar food subscriptions, Reforbs gives you absolute freedom of choice. You have full access to private kitchen setups to cook, hire a cook, or order from Pune's best food joints.",
  },
  {
    q: "What is the lock-in period?",
    a: "Zero rigid lock-in pressure. We believe in earning your stay through quality spaces, outstanding maintenance, and unforgettable vibes rather than locking you in with harsh contracts.",
  },
  {
    q: "Where are your properties located in Pune?",
    a: "All our residences are located in the heart of Viman Nagar, Pune: walking distance from Symbiosis Law School (SLS), Symbiosis Centre for Management Studies (SCMS), and minutes from Phoenix Marketcity, IT corridors, and Pune Airport.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "Shubh Gateway (Opp. SLS)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      {/* Header */}
      <section className="bg-[#0D1110] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-black text-xs uppercase tracking-wider mb-6 font-heading shadow-md">
            <Sparkles size={14} />
            <span>Connect with Reforbs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-4 text-white">
            Book a Site Tour or <span className="text-[#FFDE59]">Say Hello</span>
          </h1>
          <p className="text-white text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            Drop by any of our Viman Nagar properties for a relaxed walkthrough. No sales reps pestering you later — that&apos;s our Reforbs guarantee!
          </p>
        </div>
      </section>

      {/* Main Grid: Minimalistic Stanza-Style Form + Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E1E7E6] shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black font-heading text-[#111827] mb-2">
                  Request Confirmed!
                </h3>
                <p className="text-sm text-[#1F2937] max-w-md mx-auto mb-6 font-semibold">
                  Thank you, <strong>{form.name}</strong>. Our on-ground host in Viman Nagar will text you on WhatsApp ({form.phone}) with building location and timings.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/917420040241?text=Hi%20Reforbs%2C%20my%20name%20is%20${encodeURIComponent(
                      form.name
                    )}.%20I%20am%20interested%20in%20${encodeURIComponent(form.property)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal text-xs py-3 px-6 font-bold"
                  >
                    Open WhatsApp Directly
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-teal text-xs py-3 px-6 font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-heading text-[#111827]">
                    Request a Callback / Schedule Visit
                  </h2>
                  <p className="text-xs sm:text-sm text-[#374151] mt-1 font-semibold">
                    Takes only 10 seconds. We never push for sales or disturb you.
                  </p>
                </div>

                {/* Field 1: Name */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#111827] mb-1.5 font-heading">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siddharth Joshi"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#E1E7E6] focus:border-[#007A7A] text-sm text-[#111827] font-bold focus:outline-none bg-[#FAFAFA] transition-all"
                  />
                </div>

                {/* Field 2: Mobile */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#111827] mb-1.5 font-heading">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 74200 40241"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#E1E7E6] focus:border-[#007A7A] text-sm text-[#111827] font-bold focus:outline-none bg-[#FAFAFA] transition-all"
                  />
                </div>

                {/* Field 3: Preferred Property */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#111827] mb-1.5 font-heading">
                    Preferred Space in Viman Nagar *
                  </label>
                  <select
                    value={form.property}
                    onChange={(e) => setForm({ ...form, property: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#E1E7E6] focus:border-[#007A7A] text-sm text-[#111827] font-bold focus:outline-none bg-[#FAFAFA] cursor-pointer transition-all"
                  >
                    <option value="Shubh Gateway (Opp. SLS)">Shubh Gateway (Opp. Symbiosis SLS)</option>
                    <option value="Reforbs Living Sakore Nagar (SCMS)">Reforbs Sakore Nagar (Near SCMS)</option>
                    <option value="Moksha (Co-Living)">Moksha Co-Living (Terrace Garden)</option>
                    <option value="Vipasana (Co-Living)">Vipasana Co-Living (Sanctuary)</option>
                    <option value="Shubh Nirvana (Co-Living)">Shubh Nirvana Co-Living (Lounge)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-teal w-full py-4 rounded-2xl font-black text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
                >
                  <span>Request Callback / Book Free Visit</span>
                  <ArrowRight size={16} />
                </button>

                <div className="pt-2 text-center">
                  <span className="text-xs text-[#1F2937] font-semibold flex items-center justify-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#007A7A] shrink-0" />
                    <span>Zero-spam guarantee: You will never receive unsolicited marketing calls.</span>
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card space-y-6">
              <h3 className="text-xl font-black font-heading text-[#111827]">
                Direct Host Contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-[#374151] block font-black uppercase font-heading">
                      Locations
                    </span>
                    <span className="text-sm font-black text-[#111827]">
                      Viman Nagar, Pune, Maharashtra 411014
                    </span>
                    <span className="text-xs text-[#374151] block mt-0.5 font-semibold">
                      (Near Symbiosis SLS &amp; SCMS campuses)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-[#374151] block font-black uppercase font-heading">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href="tel:+917420040241"
                      className="text-sm font-black text-[#111827] hover:text-[#007A7A] transition-colors block"
                    >
                      +91 74200 40241
                    </a>
                    <span className="text-xs text-[#374151] font-bold block mt-0.5">
                      Host: Arpit Agarwal
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-[#374151] block font-black uppercase font-heading">
                      Email
                    </span>
                    <a
                      href="mailto:hello@reforbs.com"
                      className="text-sm font-black text-[#111827] hover:text-[#007A7A] transition-colors block"
                    >
                      hello@reforbs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-[#374151] block font-black uppercase font-heading">
                      Tour Hours
                    </span>
                    <span className="text-sm font-black text-[#111827]">
                      Everyday: 9:00 AM – 8:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7E6]">
                <a
                  href="https://wa.me/917420040241?text=Hi%20Reforbs!%20I%20am%20looking%20for%20accommodation%20in%20Viman%20Nagar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yellow w-full py-3.5 rounded-2xl justify-center font-black text-xs shadow-md"
                >
                  <MessageCircle size={16} />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Anti-spam badge card */}
            <div className="bg-[#FAF6E8] rounded-3xl p-6 border border-[#E6D7A8] shadow-sm">
              <div className="flex items-center gap-2 text-[#007A7A] font-black text-sm mb-2 font-heading">
                <ShieldCheck size={18} />
                <span>The Reforbs Sales Guarantee</span>
              </div>
              <p className="text-xs text-[#1F2937] leading-relaxed font-semibold">
                &ldquo;Take it if you like it !! We don&apos;t push for sales. You will never receive a follow up call from our side. Instead we focus on quality of our accommodations and services.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge-eyebrow mb-2">FAQ</span>
            <h3 className="section-heading-lg text-[#111827]">Everything You Need to Know</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E1E7E6] shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-[#111827] text-sm sm:text-base hover:text-[#007A7A] transition-colors font-heading"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${openFaq === i ? "rotate-180 text-[#007A7A]" : "text-[#4B5563]"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-[#1F2937] leading-relaxed border-t border-[#E1E7E6] pt-3 font-semibold">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

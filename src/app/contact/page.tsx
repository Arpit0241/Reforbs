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
    email: "",
    property: "Shubh Gateway (Opp. SLS)",
    occupancy: "Single Occupancy",
    visitDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      {/* Header */}
      <section className="bg-[#111312] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-black text-xs uppercase tracking-wider mb-6 font-heading">
            <Sparkles size={14} />
            <span>Connect with Reforbs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-4">
            Book a Site Tour or <span className="text-[#007A7A]">Say Hello</span>
          </h1>
          <p className="text-[#E1E7E6] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Drop by any of our Viman Nagar properties for a relaxed walkthrough. No sales reps pestering you later — that&apos;s our Reforbs guarantee!
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E1E7E6] shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black font-heading text-[#1B1D1C] mb-2">
                  Visit Request Confirmed!
                </h3>
                <p className="text-sm text-[#4A524F] max-w-md mx-auto mb-6 font-medium">
                  Thank you, <strong>{form.name}</strong>. Our on-ground property host in Viman Nagar will text you via WhatsApp with the entrance location and parking info.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20just%20submitted%20a%20site%20visit%20request."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal text-xs py-3 px-6"
                  >
                    Open WhatsApp Directly
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-teal text-xs py-3 px-6"
                  >
                    Book for Another Date
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1B1D1C]">
                    Schedule Your Free Visit
                  </h2>
                  <p className="text-xs text-[#666B68] mt-1 font-medium">
                    Takes only 30 seconds. No obligation, no spam.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Joshi"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      Target Property *
                    </label>
                    <select
                      value={form.property}
                      onChange={(e) => setForm({ ...form, property: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA] cursor-pointer"
                    >
                      <option value="Shubh Gateway (Opp. SLS)">
                        Shubh Gateway (Opp. SLS)
                      </option>
                      <option value="Reforbs Living Sakore Nagar (SCMS)">
                        Reforbs Living Sakore Nagar (SCMS)
                      </option>
                      <option value="Moksha (Co-Living)">
                        Moksha (Co-Living)
                      </option>
                      <option value="Vipasana (Co-Living)">
                        Vipasana (Co-Living)
                      </option>
                      <option value="Shubh Nirvana (Co-Living)">
                        Shubh Nirvana (Co-Living)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      Occupancy Preference *
                    </label>
                    <select
                      value={form.occupancy}
                      onChange={(e) => setForm({ ...form, occupancy: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA] cursor-pointer"
                    >
                      <option value="Single Occupancy">Single Occupancy (100% Private)</option>
                      <option value="Double Sharing">Double Sharing</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      Preferred Visit Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={form.visitDate}
                      onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                    Any specific questions or move-in timeline?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Looking to move in next Monday, bringing my laptop and bicycle..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-teal w-full py-4 rounded-2xl font-black text-sm shadow-md"
                >
                  <span>Confirm Free Site Visit</span>
                  <ArrowRight size={16} />
                </button>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-[#666B68] font-medium">
                    🔒 Zero-spam guarantee: We never share your contact or spam you with marketing calls.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card space-y-6">
              <h3 className="text-xl font-black font-heading text-[#1B1D1C]">
                Direct Contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#666B68] block font-black uppercase">
                      Locations
                    </span>
                    <span className="text-sm font-black text-[#1B1D1C]">
                      Viman Nagar, Pune, Maharashtra 411014
                    </span>
                    <span className="text-xs text-[#666B68] block mt-0.5 font-medium">
                      (Near Symbiosis SLS &amp; SCMS campuses)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#666B68] block font-black uppercase">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href="tel:+919876543210"
                      className="text-sm font-black text-[#1B1D1C] hover:text-[#007A7A] transition-colors block"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#666B68] block font-black uppercase">
                      Email
                    </span>
                    <a
                      href="mailto:hello@reforbs.com"
                      className="text-sm font-black text-[#1B1D1C] hover:text-[#007A7A] transition-colors block"
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
                    <span className="text-[11px] text-[#666B68] block font-black uppercase">
                      Tour Hours
                    </span>
                    <span className="text-sm font-black text-[#1B1D1C]">
                      Everyday: 9:00 AM – 8:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7E6]">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20am%20looking%20for%20accommodation%20in%20Viman%20Nagar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yellow w-full py-3.5 rounded-2xl justify-center font-extrabold text-xs shadow-md"
                >
                  <MessageCircle size={16} />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Anti-spam badge card from Slide 9 */}
            <div className="bg-[#FAF6E8] rounded-3xl p-6 border border-[#E6D7A8]">
              <div className="flex items-center gap-2 text-[#007A7A] font-black text-sm mb-2 font-heading">
                <ShieldCheck size={18} />
                <span>The Reforbs Sales Guarantee</span>
              </div>
              <p className="text-xs text-[#4A524F] leading-relaxed font-medium">
                &ldquo;Take it if you like it !! We don&apos;t push for sales. You will never receive a follow up call from our side. Instead we focus on quality of our accommodations and services.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge-eyebrow mb-2">FAQ</span>
            <h3 className="section-heading-lg">Everything You Need to Know</h3>
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
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-[#1B1D1C] text-sm sm:text-base hover:text-[#007A7A] transition-colors font-heading"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${openFaq === i ? "rotate-180 text-[#007A7A]" : "text-[#666B68]"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#4A524F] leading-relaxed border-t border-[#E1E7E6] pt-3 font-medium">
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

"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { submitLead, buildWhatsAppUrl } from "@/lib/leads";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "Shubh Gateway (Opp. SLS Campus)",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitLead({
      name: form.name,
      phone: form.phone,
      property: form.property,
      source: "Homepage CTA Form",
    });
    setWhatsappUrl(res.whatsappUrl);
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section className="py-24 bg-[#007A7A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider shadow-sm font-heading">
              <Sparkles size={14} className="text-[#111827]" /> Ready to experience the vibe?
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight text-white">
              Your new home at <span className="text-[#FFDE59]">reforbs family</span>.
            </h2>

            <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
              Join hundreds of students and young professionals who chose community over loneliness. Start your Reforbs journey today.
            </p>

            <div className="space-y-3.5 pt-2 text-sm text-white font-bold">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFDE59] text-[#111827] flex items-center justify-center shrink-0 font-bold text-xs">
                  ✓
                </div>
                <span className="text-white font-semibold">Zero follow-up disturbance calls: Take it if you like it!!</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFDE59] text-[#111827] flex items-center justify-center shrink-0 font-bold text-xs">
                  ✓
                </div>
                <span className="text-white font-semibold">Prime, well-connected locations close to campuses &amp; workplaces</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFDE59] text-[#111827] flex items-center justify-center shrink-0 font-bold text-xs">
                  ✓
                </div>
                <span className="text-white font-semibold">Zero lock-ins and complete cooking freedom</span>
              </div>
            </div>
          </div>

          {/* Right Form Card - Minimalistic Stanza Style */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-[#111827] shadow-2xl border border-white/80">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#007A7A]/10 text-[#007A7A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-[#111827] mb-2">
                    Tour Request Received!
                  </h3>
                  <p className="text-sm text-[#374151] max-w-sm mx-auto mb-6 font-medium">
                    Our property host will message you on WhatsApp with parking directions and schedule confirmation.
                  </p>
                  <a
                    href={whatsappUrl || "https://wa.me/917420040241?text=Hi%20Reforbs!%20I%20just%20scheduled%20a%20site%20visit."}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow hover:bg-[#20bd5a] transition"
                  >
                    Open WhatsApp Directly
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="inline-block text-[11px] font-black tracking-wider uppercase text-[#007A7A] bg-[#007A7A]/10 px-2.5 py-1 rounded-md mb-2 font-heading">
                      Quick 30-Second Inquiry
                    </span>
                    <h3 className="text-2xl font-black font-heading text-[#111827]">
                      Book a Free Site Visit
                    </h3>
                    <p className="text-xs text-[#374151] mt-1 font-medium">
                      Minimal details needed. No pushy sales calls guaranteed.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Priyanshu Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base sm:text-sm font-semibold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#007A7A] focus:border-transparent bg-white shadow-sm min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827] mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base sm:text-sm font-semibold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#007A7A] focus:border-transparent bg-white shadow-sm min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferred-space-select" className="block text-xs font-bold text-[#111827] mb-1.5">
                      Preferred Space at reforbs *
                    </label>
                    <select
                      id="preferred-space-select"
                      value={form.property}
                      onChange={(e) => setForm({ ...form, property: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base sm:text-sm font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#007A7A] focus:border-transparent bg-white shadow-sm cursor-pointer min-h-[48px]"
                    >
                      <option value="Shubh Gateway (Opp. SLS Campus)">Shubh Gateway (Opp. SLS Campus)</option>
                      <option value="Reforbs Living Sakore Nagar (SCMS)">Reforbs Living Sakore Nagar (SCMS Campus)</option>
                      <option value="Moksha (Co-Living / Working Professionals)">Moksha (Co-Living / Working Professionals)</option>
                      <option value="Vipasana (Co-Living / Premium Suites)">Vipasana (Co-Living / Premium Suites)</option>
                      <option value="Shubh Nirvana (Co-Living / Executive)">Shubh Nirvana (Co-Living / Executive)</option>
                      <option value="Any Available Spaces in Pune">Any Available Spaces in Pune</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#007A7A] hover:bg-[#006060] text-white rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <span>Request Free Callback &amp; Visit</span>
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-xs text-center text-[#4B5563] font-medium pt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#007A7A] shrink-0" />
                    <span>Zero-spam guarantee: Take it only if you like it!!</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

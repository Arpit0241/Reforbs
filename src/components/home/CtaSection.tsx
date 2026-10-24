"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "Shubh Gateway (Opp. SLS)",
    occupancy: "Single Occupancy",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#007A7A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-black text-xs uppercase tracking-wider shadow-sm font-heading">
              <Sparkles size={14} /> Ready to experience the vibe?
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight text-white">
              Your new home is waiting in <span className="text-[#FFDE59]">Viman Nagar</span>.
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium">
              Join hundreds of young professionals and students who chose community over loneliness. Start your Reforbs journey today.
            </p>

            <div className="space-y-3.5 pt-2 text-sm text-white font-bold">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-[#FFDE59] shrink-0" />
                <span>Zero follow-up disturbance calls: Take it if you like it!!</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-[#FFDE59] shrink-0" />
                <span>Walking distance to Symbiosis SLS &amp; SCMS Campuses</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-[#FFDE59] shrink-0" />
                <span>Zero lock-ins and full cooking freedom</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-[#1B1D1C] shadow-2xl border border-white/60">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-[#1B1D1C] mb-2">
                    Tour Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A524F] max-w-sm mx-auto mb-6 font-medium">
                    Our Viman Nagar property host will message you on WhatsApp with parking and entrance directions.
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20just%20scheduled%20a%20site%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal text-xs py-3 px-6"
                  >
                    Open WhatsApp Directly
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-[#1B1D1C]">
                      Book a Free In-Person Visit
                    </h3>
                    <p className="text-xs text-[#666B68] mt-1 font-medium">
                      Takes 30 seconds. No pushy sales calls guaranteed.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshu Sharma"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                        Select Property *
                      </label>
                      <select
                        value={form.property}
                        onChange={(e) => setForm({ ...form, property: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA] cursor-pointer"
                      >
                        <option value="Shubh Gateway (Opp. SLS)">Shubh Gateway (Opp. SLS)</option>
                        <option value="Reforbs Living Sakore Nagar (SCMS)">Reforbs Living Sakore Nagar (SCMS)</option>
                        <option value="Moksha (Co-Living)">Moksha (Co-Living)</option>
                        <option value="Vipasana (Co-Living)">Vipasana (Co-Living)</option>
                        <option value="Shubh Nirvana (Co-Living)">Shubh Nirvana (Co-Living)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                        Occupancy *
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

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#666B68] mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E1E7E6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-teal w-full py-4 rounded-2xl font-black text-sm shadow-md mt-2"
                  >
                    <span>Confirm Free Site Visit</span>
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[11px] text-center text-[#666B68] font-medium pt-1">
                    🔒 Zero-spam guarantee: You will never receive marketing follow-up calls.
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

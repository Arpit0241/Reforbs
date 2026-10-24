"use client";

import { useState } from "react";
import { Sparkles, Calendar, CheckCircle2, PhoneCall, ShieldCheck, ArrowRight } from "lucide-react";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    property: "abc-near-sls",
    occupancy: "Single Occupancy",
    moveDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-dark-900 via-slate-900 to-brand-dark relative overflow-hidden text-white">
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-900 font-extrabold text-xs tracking-wider uppercase mb-6">
              <Sparkles size={14} /> Schedule A Free Site Tour
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight mb-6">
              Step Into Your Next Home In{" "}
              <span className="text-brand-yellow">Viman Nagar</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Come take a tour, meet the community hosts, relax on the rooftop, and experience the vibes firsthand. No pushy sales calls afterward — only genuine hospitality.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-sm text-slate-200">
                  <strong>Zero Follow-Up Pressure:</strong> We never push for sales. If you love it, you stay!
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-sm text-slate-200">
                  <strong>Instant WhatsApp Confirmation:</strong> Direct direct chat with on-site manager.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-sm text-slate-200">
                  <strong>Flexible Move-in Dates:</strong> Same-day move-in available for urgent requests.
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-xs text-slate-400">
              <ShieldCheck size={20} className="text-brand-teal shrink-0" />
              <span>Compliant with all Pune Municipal and local safety guidelines.</span>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">
                    Tour Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                    Our on-site Viman Nagar team will reach out via WhatsApp with exact directions and room availability.
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20just%20scheduled%20a%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal text-sm py-3 px-6"
                  >
                    Open WhatsApp Directly
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      Book a Free In-Person Visit
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out this 30-second form to reserve your private walkthrough.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      WhatsApp Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Select Property
                      </label>
                      <select
                        value={formData.property}
                        onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-teal bg-white"
                      >
                        <option value="abc-near-sls">ABC – Near SLS (Symbiosis Law)</option>
                        <option value="xyz-near-scms">XYZ – Near SCMS (Symbiosis Mgmt)</option>
                        <option value="nirvana">Reforbs Nirvana (Co-Living)</option>
                        <option value="moksha">Reforbs Moksha (Co-Living)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Occupancy
                      </label>
                      <select
                        value={formData.occupancy}
                        onChange={(e) => setFormData({ ...formData, occupancy: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-teal bg-white"
                      >
                        <option value="Single Occupancy">Single Occupancy</option>
                        <option value="Double Sharing">Double Sharing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Expected Move-In Date
                    </label>
                    <input
                      type="date"
                      value={formData.moveDate}
                      onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-teal w-full py-3.5 rounded-xl justify-center font-bold text-sm shadow-md mt-2"
                  >
                    <span>Confirm Free Tour Request</span>
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    By submitting, you agree to receive visit details via WhatsApp. No spam guaranteed.
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

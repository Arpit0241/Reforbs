import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, ArrowRight, MapPin, CheckCircle, Bed, Users } from "lucide-react";

export default function PropertyCategories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="section-tag mb-3">Tailored Pune Stays</span>
            <h2 className="section-title">
              Designed For How You Live
            </h2>
            <p className="text-slate-600 text-base max-w-xl mt-3">
              Whether you are grinding through Symbiosis law &amp; business courses or powering through tech sprint goals in Pune, we have curated spaces engineered for you.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal bg-brand-teal-50 px-4 py-2 rounded-full border border-brand-teal-200">
              <MapPin size={14} /> Prime Locations in Viman Nagar
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Housing Card */}
          <div className="group relative bg-gradient-to-br from-slate-900 to-brand-dark rounded-3xl p-8 sm:p-10 text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-teal/30 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal text-white text-xs font-bold uppercase tracking-wider">
                    <GraduationCap size={16} />
                    <span>Student Housing</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                    2 Campuses
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-heading mb-3 text-white">
                  Student Accommodations in Viman Nagar
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Beautifully curated rooms built to perfection to make every student feel at home. Single &amp; double occupancies equipped with benchmark amenities, high-speed Wi-Fi, dedicated quiet study corners, and peer mentorship.
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle size={16} className="text-brand-yellow shrink-0" />
                    <span><strong>ABC</strong> — Walking distance to Symbiosis Law School (SLS)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle size={16} className="text-brand-yellow shrink-0" />
                    <span><strong>XYZ</strong> — Walking distance to Symbiosis Centre for Mgmt (SCMS)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle size={16} className="text-brand-yellow shrink-0" />
                    <span>Single &amp; Double occupancy options with zero forced food plans</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Starting from</div>
                  <div className="text-xl font-black font-heading text-brand-yellow">₹12,000 <span className="text-xs font-normal text-slate-300">/mo</span></div>
                </div>
                <Link
                  href="/student-housing"
                  className="btn-yellow text-sm font-bold px-6 py-3"
                >
                  <span>Explore Student Stays</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Co-Living Card */}
          <div className="group relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-yellow/25 transition-colors" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow text-brand-dark-900 text-xs font-bold uppercase tracking-wider">
                    <Briefcase size={16} />
                    <span>Co-Living for Professionals</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                    2 Properties
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-heading mb-3 text-white">
                  Co-Living Spaces for Working Professionals
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Single &amp; double occupancies designed especially for working professionals to maintain complete privacy while fostering an active social life. Private kitchens, balconies, day-to-day support, and hippie rooftop vibes.
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle size={16} className="text-brand-teal shrink-0" />
                    <span><strong>Reforbs Nirvana</strong> — Ultra-chill vibes in Viman Nagar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle size={16} className="text-brand-teal shrink-0" />
                    <span><strong>Reforbs Moksha</strong> — Premium co-living with private amenities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle size={16} className="text-brand-teal shrink-0" />
                    <span>Proximity to EON Free Zone, Magarpatta, Yerwada &amp; Airport</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Starting from</div>
                  <div className="text-xl font-black font-heading text-brand-teal">₹15,000 <span className="text-xs font-normal text-slate-300">/mo</span></div>
                </div>
                <Link
                  href="/coliving"
                  className="btn-teal text-sm font-bold px-6 py-3"
                >
                  <span>Explore Co-Living</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

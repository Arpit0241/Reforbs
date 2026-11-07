"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111312] text-white border-t border-[#272B29]" id="contact">
      {/* Top Banner */}
      <div className="bg-[#007A7A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                Experience Pune&apos;s Most Vibrant Co-Living Ecosystem
              </h3>
              <p className="text-white/90 text-xs sm:text-sm mt-1 font-medium">
                Zero pushy calls. Zero hidden lock-ins. 100% freedom, community, and emotional connect.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-yellow text-xs font-black py-3 px-6 shadow-md whitespace-nowrap"
              >
                Schedule A Visit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex flex-col items-start group">
              <div className="relative w-44 h-10">
                <Image
                  src="/assets/reforbs-logo-white.png"
                  alt="Reforbs Living"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.25em] text-[#FFDE59] uppercase mt-1 pl-0.5 leading-none">
                #LIVETHEVIBES
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#A0AAA5] leading-relaxed max-w-sm font-medium">
              Reforbs is an innovative living space solution in Pune, that offers an ecosystem, and not just accommodations. Affordable and customized spaces enabling tenants to live, work, study, and play.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#E1E7E6] font-medium">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-[#4AA8A0] shrink-0" />
                <span>Viman Nagar, Pune, Maharashtra 411014</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#FFDE59] shrink-0" />
                <a href="tel:+917420040241" className="hover:text-[#FFDE59] transition-colors font-bold">
                  Call Us
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <a
                  href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Pune."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-bold"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#4AA8A0] shrink-0" />
                <a href="mailto:hello@reforbs.com" className="hover:text-white transition-colors">
                  hello@reforbs.com
                </a>
              </div>
            </div>

            {/* Official Instagram Channel (Real Colorful Logo Gradient) */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/reforbscoliving?mdxt=ZWtoY3oweTJjbGs3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[44px] px-4 py-2.5 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-extrabold text-xs shadow-md hover:shadow-[#dc2743]/50 hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Follow Reforbs Living on Instagram"
              >
                <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@reforbscoliving</span>
              </a>
            </div>
          </div>

          {/* Student Housing */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-white text-sm mb-4 font-heading">
              Student Housing
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0AAA5] font-medium">
              <li>
                <Link href="/#student-housing" className="hover:text-white transition-colors">
                  Overview (Viman Nagar)
                </Link>
              </li>
              <li>
                <Link href="/student-housing/shubh-gateway" className="hover:text-white transition-colors">
                  Shubh Gateway (Opp. SLS)
                </Link>
              </li>
              <li>
                <Link href="/student-housing/sakore-nagar" className="hover:text-white transition-colors">
                  Sakore Nagar (Near SCMS)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Student Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Co-Living */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-white text-sm mb-4 font-heading">
              Co-Living (Pros)
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0AAA5] font-medium">
              <li>
                <Link href="/#co-living" className="hover:text-white transition-colors">
                  Overview (Viman Nagar)
                </Link>
              </li>
              <li>
                <Link href="/coliving/moksha" className="hover:text-white transition-colors">
                  Moksha (Terraces)
                </Link>
              </li>
              <li>
                <Link href="/coliving/vipasana" className="hover:text-white transition-colors">
                  Vipasana (Sanctuary)
                </Link>
              </li>
              <li>
                <Link href="/coliving/shubh-nirvana" className="hover:text-white transition-colors">
                  Shubh Nirvana (Lounge)
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Community Cult &amp; Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations & Cities */}
          <div className="lg:col-span-4">
            <h4 className="font-black text-white text-sm mb-4 font-heading">
              Destinations
            </h4>
            <ul className="space-y-3 text-xs text-[#A0AAA5] font-medium">
              <li>
                <Link
                  href="/properties"
                  className="hover:text-white transition-colors flex items-center justify-between gap-3 group"
                >
                  <span className="group-hover:text-white transition-colors">Pune (Viman Nagar)</span>
                  <span className="text-[10px] bg-[#007A7A] text-white px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap shrink-0">
                    Active
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/goa"
                  className="hover:text-white transition-colors flex items-center justify-between gap-3 group"
                >
                  <span className="group-hover:text-white transition-colors">Goa (Hostels &amp; Hotels)</span>
                  <span className="text-[10px] bg-[#FFDE59] text-[#111827] px-2.5 py-0.5 rounded-full font-black whitespace-nowrap shrink-0">
                    Coming Soon
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/bangalore"
                  className="hover:text-white transition-colors flex items-center justify-between gap-3 group"
                >
                  <span className="group-hover:text-white transition-colors">Bangalore (Co-Living)</span>
                  <span className="text-[10px] bg-[#FFDE59] text-[#111827] px-2.5 py-0.5 rounded-full font-black whitespace-nowrap shrink-0">
                    Coming Soon
                  </span>
                </Link>
              </li>
              <li className="pt-2 border-t border-[#272B29]/60">
                <Link href="/about" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="group-hover:text-[#FFDE59] transition-colors">About Us &amp; 3P/3D Standard</span>
                  <span className="text-xs group-hover:translate-x-0.5 transition-transform text-[#4AA8A0]">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar with safe-area spacing for mobile sticky bottom bar */}
      <div className="border-t border-[#272B29] pt-6 pb-24 sm:pb-6 text-xs text-[#666B68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-medium text-center sm:text-left">
          <p>© {new Date().getFullYear()} Reforbs Living. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1.5">
            <span>Crafted with</span>
            <Heart size={13} className="text-[#FFDE59] fill-[#FFDE59]" />
            <span>for vibrant community living in Pune</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

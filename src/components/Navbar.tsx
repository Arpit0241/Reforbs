"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Sparkles, Building2, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E1E7E6] shadow-sm py-3"
          : "bg-gradient-to-b from-[#0A0D0C]/85 via-[#0A0D0C]/50 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with real asset */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 h-10 sm:w-44 sm:h-11">
              <Image
                src="/assets/reforbs-logo-teal.png"
                alt="Reforbs Living"
                fill
                className={`object-contain transition-all ${
                  !scrolled ? "brightness-0 invert drop-shadow-md" : ""
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-bold transition-colors ${
                pathname === "/"
                  ? "text-[#007A7A]"
                  : scrolled
                  ? "text-[#1B1D1C] hover:text-[#007A7A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Properties Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPropertiesOpen(true)}
              onMouseLeave={() => setPropertiesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${
                  pathname.includes("student-housing") || pathname.includes("coliving")
                    ? "text-[#007A7A]"
                    : scrolled
                    ? "text-[#1B1D1C] hover:text-[#007A7A]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span>Properties</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${propertiesOpen ? "rotate-180" : ""}`} />
              </button>

              {propertiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-3xl shadow-stanza border border-[#E1E7E6] p-3 grid gap-2 animate-fadeIn z-50">
                  <Link
                    href="/#student-housing"
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#E6F4F3] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0 group-hover:bg-[#007A7A] group-hover:text-white transition-colors">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-[#1B1D1C] group-hover:text-[#007A7A]">
                        Student Housing
                      </div>
                      <div className="text-xs text-[#666B68]">
                        Shubh Gateway (Opp. SLS) &amp; Sakore Nagar (Near SCMS)
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/#co-living"
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#E6F4F3] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center shrink-0 group-hover:bg-[#FFDE59] transition-colors">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-[#1B1D1C] group-hover:text-[#007A7A]">
                        Co-Living for Professionals
                      </div>
                      <div className="text-xs text-[#666B68]">
                        Moksha, Vipasana &amp; Shubh Nirvana in Viman Nagar
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-sm font-bold transition-colors ${
                pathname === "/about"
                  ? "text-[#007A7A]"
                  : scrolled
                  ? "text-[#1B1D1C] hover:text-[#007A7A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/community"
              className={`text-sm font-bold transition-colors ${
                pathname === "/community"
                  ? "text-[#007A7A]"
                  : scrolled
                  ? "text-[#1B1D1C] hover:text-[#007A7A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Community
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-bold transition-colors ${
                pathname === "/contact"
                  ? "text-[#007A7A]"
                  : scrolled
                  ? "text-[#1B1D1C] hover:text-[#007A7A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs: Direct Call & WhatsApp & Schedule */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Call Button with real phone */}
            <a
              href="tel:+917420040241"
              className={`flex items-center gap-2 text-xs font-bold px-3.5 py-2.5 rounded-full transition-all ${
                scrolled
                  ? "text-[#1B1D1C] bg-[#F1F4F4] hover:bg-[#E6F4F3] hover:text-[#007A7A]"
                  : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <Phone size={13} className="text-[#4AA8A0]" />
              <span>+91 74200 40241</span>
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Viman%20Nagar%2C%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm transition-all hover:scale-105 active:scale-95"
              aria-label="WhatsApp Reforbs"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="btn-yellow text-xs py-2.5 px-5 shadow-sm font-extrabold"
            >
              <Sparkles size={14} />
              <span>Schedule Visit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-2xl transition-colors ${
              scrolled ? "text-[#1B1D1C] bg-[#F1F4F4]" : "text-white bg-white/15"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#E1E7E6] shadow-2xl animate-fadeIn">
          <div className="px-5 py-6 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-extrabold text-[#1B1D1C] hover:text-[#007A7A]"
            >
              Home
            </Link>

            <div className="py-2 border-y border-[#E1E7E6] space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#666B68]">
                Properties in Viman Nagar, Pune
              </span>
              <div className="grid gap-2 pl-2">
                <Link
                  href="/#student-housing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-[#1B1D1C] hover:text-[#007A7A] py-1.5"
                >
                  <span>Student Housing (Shubh Gateway &amp; Sakore)</span>
                  <span className="text-xs bg-[#E6F4F3] text-[#007A7A] font-extrabold px-2 py-0.5 rounded-full">
                    2 Properties
                  </span>
                </Link>
                <Link
                  href="/#co-living"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-[#1B1D1C] hover:text-[#007A7A] py-1.5"
                >
                  <span>Co-Living (Moksha, Vipasana, Nirvana)</span>
                  <span className="text-xs bg-[#FFF9D4] text-[#1B1D1C] font-extrabold px-2 py-0.5 rounded-full">
                    3 Properties
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-extrabold text-[#1B1D1C] hover:text-[#007A7A]"
            >
              About Us (The -3P &amp; -3D Standard)
            </Link>

            <Link
              href="/community"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-extrabold text-[#1B1D1C] hover:text-[#007A7A]"
            >
              Community &amp; Cult
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-extrabold text-[#1B1D1C] hover:text-[#007A7A]"
            >
              Contact &amp; Book Free Visit
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-teal w-full justify-center text-sm py-3.5 font-black"
              >
                Schedule A Free Walkthrough
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917420040241"
                  className="flex items-center justify-center gap-1.5 text-xs font-bold py-3 text-[#1B1D1C] border border-[#E1E7E6] rounded-2xl hover:bg-[#F1F4F4]"
                >
                  <Phone size={14} className="text-[#007A7A]" />
                  <span>Call Host</span>
                </a>
                <a
                  href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Viman%20Nagar%2C%20Pune."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-xs font-bold py-3 bg-[#25D366] text-white rounded-2xl"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

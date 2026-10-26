"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Sparkles, Building2, GraduationCap, MapPin } from "lucide-react";

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

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe ${
        scrolled
          ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E1E7E6] shadow-sm py-2.5 sm:py-3"
          : "bg-gradient-to-b from-[#0A0D0C]/85 via-[#0A0D0C]/50 to-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with official user uploaded asset */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 h-9 sm:w-44 sm:h-12">
              <Image
                src={scrolled ? "/assets/reforbs-official-logo.png" : "/assets/reforbs-logo-white.png"}
                alt="Reforbs Living"
                fill
                className="object-contain transition-all"
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
              <Link
                href="/properties"
                onClick={() => setPropertiesOpen(false)}
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${
                  pathname.startsWith("/properties") || pathname.includes("student-housing") || pathname.includes("coliving")
                    ? "text-[#007A7A]"
                    : scrolled
                    ? "text-[#1B1D1C] hover:text-[#007A7A]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span>Properties</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${propertiesOpen ? "rotate-180" : ""}`} />
              </Link>

              {propertiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-84 bg-white rounded-3xl shadow-stanza border border-[#E1E7E6] p-3 grid gap-2 animate-fadeIn z-50">
                  <Link
                    href="/properties"
                    onClick={() => setPropertiesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#E6F4F3] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#007A7A] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#1B1D1C] group-hover:text-[#007A7A]">
                        <span>All Properties &amp; Map</span>
                        <span className="text-[10px] font-black bg-[#FFDE59] text-[#111827] px-2 py-0.5 rounded-full">
                          Sync
                        </span>
                      </div>
                      <div className="text-xs text-[#4B5563]">
                        Interactive listing-to-map sync in Viman Nagar
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/student-housing"
                    onClick={() => setPropertiesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#E6F4F3] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center shrink-0 group-hover:bg-[#007A7A] group-hover:text-white transition-colors">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-[#1B1D1C] group-hover:text-[#007A7A]">
                        Student Housing
                      </div>
                      <div className="text-xs text-[#4B5563]">
                        Shubh Gateway (Opp. SLS) &amp; Sakore Nagar (Near SCMS)
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/coliving"
                    onClick={() => setPropertiesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#E6F4F3] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center shrink-0 group-hover:bg-[#FFDE59] transition-colors">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-[#1B1D1C] group-hover:text-[#007A7A]">
                        Co-Living for Professionals
                      </div>
                      <div className="text-xs text-[#4B5563]">
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

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:+917420040241"
              className={`flex items-center gap-2 text-xs font-black px-4 py-2.5 rounded-full transition-all border ${
                scrolled
                  ? "text-[#1B1D1C] bg-[#F1F4F4] hover:bg-[#E6F4F3] hover:text-[#007A7A] border-[#E1E7E6]"
                  : "text-white bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-md"
              }`}
              title="Call Property Host directly"
            >
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <Phone size={13} className={scrolled ? "text-[#007A7A]" : "text-[#FFDE59]"} />
              <span>+91 74200 40241</span>
            </a>

            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Viman%20Nagar%2C%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:scale-105 active:scale-95 transition-all"
              aria-label="Chat with Us on WhatsApp"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat with Us</span>
            </a>

            <Link
              href="/contact"
              className="btn-yellow text-xs py-2.5 px-5 shadow-sm font-extrabold"
            >
              <Sparkles size={14} />
              <span>Schedule Visit</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Touch-Target Optimized (>= 44x44px) */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Mobile Call Button */}
            <a
              href="tel:+917420040241"
              className={`w-11 h-11 flex items-center justify-center rounded-full transition-all active:scale-95 ${
                scrolled ? "bg-[#E6F4F3] text-[#007A7A]" : "bg-white/20 text-white"
              }`}
              aria-label="Call host"
            >
              <Phone size={19} />
            </a>

            {/* Quick Mobile WhatsApp Button */}
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Viman%20Nagar%2C%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm active:scale-95"
              aria-label="WhatsApp host"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* Accessible Mobile Menu Button (44x44px target) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-11 h-11 flex items-center justify-center rounded-full transition-colors active:scale-95 ${
                scrolled ? "text-[#111827] bg-[#F1F4F4]" : "text-white bg-white/20"
              }`}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Backdrop Overlay & Safe Area Spacing */}
      {isOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden fixed inset-x-0 top-full bg-white border-t border-[#E1E7E6] shadow-2xl animate-fadeIn max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
          <div className="px-5 py-6 space-y-4 pb-12">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center min-h-[44px] text-base font-extrabold text-[#111827] hover:text-[#007A7A] active:text-[#007A7A]"
            >
              Home
            </Link>

            <div className="py-2 border-y border-[#E1E7E6] space-y-2">
              <Link
                href="/properties"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between min-h-[44px] text-base font-extrabold text-[#111827] hover:text-[#007A7A]"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#007A7A]" />
                  <span>Explore on Map (5 Residences)</span>
                </div>
                <span className="text-xs bg-[#FFDE59] text-[#111827] font-black px-2.5 py-1 rounded-full shadow-sm">
                  Interactive
                </span>
              </Link>
              <div className="grid gap-1 pl-2">
                <Link
                  href="/student-housing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between min-h-[44px] text-sm font-bold text-[#374151] hover:text-[#007A7A]"
                >
                  <span>Student Housing (SLS &amp; SCMS)</span>
                  <span className="text-xs bg-[#E6F4F3] text-[#007A7A] font-extrabold px-2.5 py-1 rounded-full">
                    2 Units
                  </span>
                </Link>
                <Link
                  href="/coliving"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between min-h-[44px] text-sm font-bold text-[#374151] hover:text-[#007A7A]"
                >
                  <span>Co-Living (Moksha, Vipasana, Nirvana)</span>
                  <span className="text-xs bg-[#FFF9D4] text-[#111827] font-extrabold px-2.5 py-1 rounded-full">
                    3 Units
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="flex items-center min-h-[44px] text-base font-extrabold text-[#111827] hover:text-[#007A7A]"
            >
              About Us (The 3P &amp; 3D Standard)
            </Link>

            <Link
              href="/community"
              onClick={() => setIsOpen(false)}
              className="flex items-center min-h-[44px] text-base font-extrabold text-[#111827] hover:text-[#007A7A]"
            >
              Community &amp; Cult
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center min-h-[44px] text-base font-extrabold text-[#111827] hover:text-[#007A7A]"
            >
              Contact &amp; Book Free Visit
            </Link>

            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center min-h-[48px] bg-[#007A7A] text-white rounded-2xl text-sm font-black shadow-md active:bg-[#005F5F]"
              >
                Schedule A Free Walkthrough
              </Link>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:+917420040241"
                  className="flex items-center justify-center gap-2 min-h-[48px] text-xs font-bold text-[#111827] border border-[#E1E7E6] rounded-2xl bg-[#F8FAFA] active:bg-[#E6F4F3]"
                >
                  <Phone size={16} className="text-[#007A7A]" />
                  <span>Call Host</span>
                </a>
                <a
                  href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Viman%20Nagar%2C%20Pune."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 min-h-[48px] text-xs font-bold bg-[#25D366] text-white rounded-2xl active:bg-[#20bd5a]"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
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

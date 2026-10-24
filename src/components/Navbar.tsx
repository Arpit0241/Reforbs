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
          : "bg-gradient-to-b from-[#111312]/80 via-[#111312]/40 to-transparent py-4"
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

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full transition-all ${
                scrolled
                  ? "text-[#1B1D1C] bg-[#F1F4F4] hover:bg-[#E6F4F3] hover:text-[#007A7A]"
                  : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <Phone size={13} className="text-[#4AA8A0]" />
              <span>+91 98765 43210</span>
            </a>

            <Link
              href="/contact"
              className="btn-yellow text-xs py-2.5 px-6 shadow-sm font-extrabold"
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

            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-teal w-full justify-center text-sm py-3.5"
              >
                Schedule A Free Walkthrough
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-xs font-bold py-3 text-[#1B1D1C] border border-[#E1E7E6] rounded-full"
              >
                <Phone size={14} className="text-[#007A7A]" />
                <span>Call Directly: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Sparkles, Building2, GraduationCap, Users, HeartHandshake } from "lucide-react";

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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ];

  const isLightPage = pathname === "/" ? !scrolled : false;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm bg-white p-1">
              <Image
                src="/images/image1.png"
                alt="Reforbs Living Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl sm:text-2xl font-black font-heading tracking-tight transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                REFORBS<span className="text-brand-teal">.</span>
              </span>
              <span
                className={`text-[9px] font-bold tracking-widest uppercase -mt-1 ${
                  scrolled ? "text-brand-teal" : "text-brand-yellow"
                }`}
              >
                Living Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === "/"
                  ? "text-brand-teal font-bold"
                  : scrolled
                  ? "text-slate-700 hover:text-brand-teal"
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
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                  pathname.startsWith("/student-housing") || pathname.startsWith("/coliving")
                    ? "text-brand-teal font-bold"
                    : scrolled
                    ? "text-slate-700 hover:text-brand-teal"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span>Properties</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${propertiesOpen ? "rotate-180" : ""}`} />
              </button>

              {propertiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-2 animate-fadeIn z-50">
                  <Link
                    href="/student-housing"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-teal-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-teal-100 text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand-teal">
                        Student Housing
                      </div>
                      <div className="text-xs text-slate-500">
                        ABC (Near SLS) & XYZ (Near SCMS) in Viman Nagar
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/coliving"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-teal-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-yellow-100 text-brand-dark-900 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-dark-900 transition-colors">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand-teal">
                        Co-Living for Pros
                      </div>
                      <div className="text-xs text-slate-500">
                        Nirvana & Moksha curated properties in Viman Nagar
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === "/about"
                  ? "text-brand-teal font-bold"
                  : scrolled
                  ? "text-slate-700 hover:text-brand-teal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/community"
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === "/community"
                  ? "text-brand-teal font-bold"
                  : scrolled
                  ? "text-slate-700 hover:text-brand-teal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Community
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === "/contact"
                  ? "text-brand-teal font-bold"
                  : scrolled
                  ? "text-slate-700 hover:text-brand-teal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-full transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-brand-teal bg-slate-100"
                  : "text-white hover:text-brand-yellow bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Phone size={13} className="text-brand-teal" />
              <span>+91 98765 43210</span>
            </a>

            <Link
              href="/contact"
              className="btn-yellow text-xs py-2.5 px-5 shadow-sm"
            >
              <Sparkles size={14} />
              <span>Explore Stays</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl animate-fadeIn">
          <div className="px-5 py-6 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-brand-teal"
            >
              Home
            </Link>

            <div className="py-2 border-y border-slate-100 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Our Properties in Viman Nagar
              </span>
              <div className="grid gap-2 pl-2">
                <Link
                  href="/student-housing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-slate-700 hover:text-brand-teal py-1.5"
                >
                  <span>Student Housing (SLS & SCMS)</span>
                  <span className="text-xs bg-brand-teal-50 text-brand-teal font-bold px-2 py-0.5 rounded-full">
                    2 Properties
                  </span>
                </Link>
                <Link
                  href="/coliving"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-slate-700 hover:text-brand-teal py-1.5"
                >
                  <span>Co-Living (Nirvana & Moksha)</span>
                  <span className="text-xs bg-brand-yellow-100 text-brand-dark-900 font-bold px-2 py-0.5 rounded-full">
                    2 Properties
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-brand-teal"
            >
              About Us (Our Story & -3P/-3D)
            </Link>

            <Link
              href="/community"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-brand-teal"
            >
              Reforbs Community & Cult
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-brand-teal"
            >
              Contact & Book Site Visit
            </Link>

            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-teal w-full justify-center text-sm py-3"
              >
                Schedule A Free Visit
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-xs font-bold py-3 text-slate-700 border border-slate-200 rounded-full"
              >
                <Phone size={14} className="text-brand-teal" />
                <span>Call Us: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

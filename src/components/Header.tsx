"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  { name: "Rwanda", href: "/destinations/rwanda" },
  { name: "Kenya", href: "/destinations/kenya" },
  { name: "Tanzania", href: "/destinations/tanzania" },
  { name: "Zanzibar", href: "/destinations/zanzibar" },
  { name: "Uganda", href: "/destinations/uganda" },
  { name: "Mozambique", href: "/destinations/mozambique" },
  { name: "South Africa", href: "/destinations/south-africa" },
  { name: "Zimbabwe", href: "/destinations/zimbabwe" },
  { name: "Zambia", href: "/destinations/zambia" },
  { name: "Botswana", href: "/destinations/botswana" },
];

const navLinks = [
  { name: "Curated Escapes", href: "/curated-escapes" },
  { name: "Immersion", href: "/immersion" },
  { name: "About Us", href: "/about" },
  { name: "Our Impact", href: "/our-impact" },
];

export default function Header() {
  const [destOpen, setDestOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDest() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDestOpen(true);
  }

  function scheduleDest() {
    closeTimer.current = setTimeout(() => setDestOpen(false), 180);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/4.png"
              alt="Sasa Travel"
              width={140}
              height={50}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={openDest}
              onMouseLeave={scheduleDest}
            >
              <button className="flex items-center gap-1.5 text-sasa-brown text-xs tracking-[0.15em] uppercase font-medium hover:text-sasa-green transition-colors duration-200">
                Destinations
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${
                    destOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown — sits flush with no gap so hover stays connected */}
              <div
                className={`absolute top-full left-0 pt-0 bg-white border border-stone-200 min-w-48 shadow-lg transition-all duration-200 ${
                  destOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={openDest}
                onMouseLeave={scheduleDest}
              >
                {destinations.map((dest) => (
                  <Link
                    key={dest.name}
                    href={dest.href}
                    onClick={() => setDestOpen(false)}
                    className="block px-5 py-3 text-sasa-brown/80 text-xs tracking-[0.08em] uppercase hover:bg-stone-50 hover:text-sasa-green transition-colors duration-150 border-b border-stone-100 last:border-0"
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sasa-brown text-xs tracking-[0.15em] uppercase font-medium hover:text-sasa-green transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/start-your-trip"
              className="bg-sasa-brown text-sasa-white text-xs tracking-[0.15em] uppercase font-medium px-6 py-3 hover:bg-sasa-sec-brown transition-colors duration-300"
            >
              Start Your Trip
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-sasa-brown p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100">
          <div className="px-6 py-6 space-y-5">
            {/* Mobile Destinations */}
            <div>
              <button
                onClick={() => setMobileDestOpen(!mobileDestOpen)}
                className="flex justify-between items-center w-full text-sasa-brown text-xs tracking-[0.15em] uppercase font-medium"
              >
                Destinations
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileDestOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileDestOpen && (
                <div className="mt-3 pl-4 space-y-3 border-l border-stone-200">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.name}
                      href={dest.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sasa-brown/70 text-xs tracking-wide hover:text-sasa-green transition-colors"
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sasa-brown text-xs tracking-[0.15em] uppercase font-medium hover:text-sasa-green transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/start-your-trip"
              onClick={() => setMobileOpen(false)}
              className="block bg-sasa-brown text-white text-xs tracking-[0.15em] uppercase font-medium px-6 py-4 text-center hover:bg-sasa-sec-brown transition-colors"
            >
              Start Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

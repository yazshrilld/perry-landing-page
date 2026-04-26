"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import slide1 from "./assets/imgs/hero-home-clean-1.jpg";
import slide2 from "./assets/imgs/hero-office-clean-2.webp";
import slide3 from "./assets/imgs/hero-event-clean-2.jpg";
import logo from "./assets/imgs/PERRY2.png";
import { BookingComingSoonModal } from "./booking-coming-soon-modal";

export default function Hero() {
  const slides = [slide1, slide2, slide3];
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
  ];

  const isActive = (href: string) => href !== "#" && pathname === href;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="w-full relative">
      <div className="w-full h-[520px] relative overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt={`slide-${i + 1}`}
              fill
              sizes="100vw"
              quality={70}
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex flex-col">
          <nav className="flex items-center px-6 md:px-12 lg:px-16 py-5 lg:py-6">
            <div className="flex items-center gap-4">
              <a href="#top" className="inline-flex items-center">
                <Image
                  src={logo}
                  alt="Perry Cleaning Services"
                  width={140}
                  height={140}
                  className="w-[88px] md:w-[104px] lg:w-[118px] h-auto object-contain mix-blend-multiply rounded-[50%]"
                />
              </a>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-6 text-white/90">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`border-b-2 pb-1 transition-colors ${
                      isActive(link.href)
                        ? "text-white border-[var(--brand-primary)] font-semibold"
                        : "text-white/85 border-transparent hover:text-white hover:border-white/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:block">
                <Link href="/contact" className="px-4 py-2 rounded-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)] transition">
                  Talk to Us
                </Link>
              </div>
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          <div
            className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
              menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!menuOpen}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            />

            <aside
              className={`absolute left-0 top-0 h-full w-[82%] max-w-xs bg-[var(--background-offwhite)] border-r border-[var(--ui-light-gray)] shadow-2xl transform transition-transform duration-300 ease-in-out ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--ui-light-gray)]">
                <Image
                  src={logo}
                  alt="Perry Cleaning Services"
                  width={72}
                  height={72}
                  className="object-contain mix-blend-multiply rounded-[50%]"
                />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-md text-[var(--brand-charcoal)] hover:bg-black/5 transition"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-4 py-5">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-md px-3 py-2.5 transition-colors ${
                        isActive(link.href)
                          ? "bg-[var(--brand-primary)]/15 text-[var(--brand-charcoal)] font-semibold"
                          : "text-[var(--brand-charcoal)] hover:bg-black/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-6 block text-center w-full px-4 py-2.5 rounded-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)] transition"
                >
                  Talk to Us
                </Link>
              </div>
            </aside>
          </div>

          <div className="flex-1 flex items-center">
            <div className="max-w-3xl px-6 md:px-12 lg:px-20">
              <p className="text-sm text-white/80 mb-2">Your health, your family, our commitment to care.</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                Cleaning That Lets You Breathe Easy.
              </h1>
              {/* <p className="text-lg text-white/90 mb-6">
                Quality cleaning services for homes, offices, and events — trusted professionals, exceptional results.
              </p> */}
              <div className="flex flex-col sm:flex-row gap-3">
                <BookingComingSoonModal>
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white hover:bg-slate-900 transition"
                  >
                    Book a Cleaner
                  </button>
                </BookingComingSoonModal>
                <button className="px-6 py-3 rounded-full border border-white/30 text-white bg-white/5">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-30 hidden md:block">
          <div className="w-48 h-28 bg-white/90 rounded-lg overflow-hidden flex items-center justify-center">
            <Image src={slide3} alt="thumbnail" width={180} height={100} className="object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}

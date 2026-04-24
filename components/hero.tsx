"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import slide1 from "./assets/imgs/hero-home-clean-1.jpg";
import slide2 from "./assets/imgs/hero-office-clean-2.webp";
import slide3 from "./assets/imgs/hero-event-clean-2.jpg";
import logo from "./assets/imgs/perry-logo-1.png";

export default function Hero() {
  const slides = [slide1, slide2, slide3];
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

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
          <nav className="flex items-center px-16 py-5 lg:py-6">
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center">
                <Image
                  src={logo}
                  alt="Perry Cleaning Services"
                  width={60}
                  height={26}
                  className="object-contain mix-blend-multiply rounded-[50%]"
                />
              </a>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 text-white/90">
                <a href="#" className="hover:text-white">
                  Home
                </a>
                <a href="#" className="hover:text-white">
                  About
                </a>
                <a href="#" className="hover:text-white">
                  Service
                </a>
                <a href="#" className="hover:text-white">
                  Resource
                </a>
              </div>
              <div className="hidden md:block">
                <button className="px-4 py-2 rounded-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                  Talk to Us
                </button>
              </div>
              <button
                className="md:hidden text-white p-2"
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

          {menuOpen && (
            <div className="md:hidden bg-black/40 p-4">
              <div className="flex flex-col gap-3 text-white">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Resource</a>
              </div>
            </div>
          )}

          <div className="flex-1 flex items-center">
            <div className="max-w-3xl px-6 md:px-12 lg:px-20">
              <p className="text-sm text-white/80 mb-2">Your health, your family, our commitment to care.</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                Cleaning That Lets You Breathe Easy.
              </h1>
              <p className="text-lg text-white/90 mb-6">
                Quality cleaning services for homes, offices, and events — trusted professionals, exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white">Book a Cleaner</button>
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

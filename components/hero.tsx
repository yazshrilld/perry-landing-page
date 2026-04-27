"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import slide1 from "./assets/imgs/hero-home-clean-1.jpg";
import slide2 from "./assets/imgs/hero-office-clean-2.webp";
import slide3 from "./assets/imgs/hero-event-clean-2.jpg";
import { BookingComingSoonModal } from "./booking-coming-soon-modal";
import { SiteHeader } from "./site-header";

export default function Hero() {
  const slides = [slide1, slide2, slide3];
  const [index, setIndex] = useState(0);

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
          <SiteHeader />

          <div className="flex-1 flex items-center">
            <div className="max-w-3xl px-6 md:px-12 lg:px-20">
              <p className="text-sm text-white/80 mb-2">
                Your health, your family, our commitment to care.
              </p>
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
            <Image
              src={slide3}
              alt="thumbnail"
              width={180}
              height={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

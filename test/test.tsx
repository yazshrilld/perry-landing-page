"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "./assets/imgs/info-landing-image-1.png";
import img2 from "./assets/imgs/info-landing-image-2.png";
import img3 from "./assets/imgs/pending-info-clean-1.png";
import img4 from "./assets/imgs/hero-home-clean-2.jpg";

const slides = [
  { src: img1, alt: "Team member cleaning a living room" },
  { src: img2, alt: "Professional cleaner preparing supplies" },
  { src: img3, alt: "Cleaner sanitizing surfaces" },
  { src: img4, alt: "Office cleaning crew at work" },
];

export default function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div className="container mx-auto md:px-4 lg:px-6 mt-4 md:mt-8 lg:mt-10">
        <div className="bg-[var(--background-offwhite)] rounded-lg shadow-sm p-8 md:p-12 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-6">
                <div className="mb-6 text-sm uppercase tracking-[0.24em] text-[var(--text-orange)]">How we care</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-gray)] leading-tight [word-spacing:0.08rem] md:[word-spacing:0.2rem] lg:[word-spacing:0.32rem]">
                  Choosing the right cleaning service can feel overwhelming.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                  We are dedicated to making the process simple, transparent, and tailored to your unique needs.
                  Creating clean and healthy environments is our passion.
                </p>

                <div className="mt-8 space-y-5 text-[var(--text-gray)]">
                  <div className="flex gap-4">
                    <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Consistent High Quality</h3>
                      <p className="text-sm text-[var(--text-muted)]">Rigorous training programs for every staff member.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Flexible Scheduling</h3>
                      <p className="text-sm text-[var(--text-muted)]">Bookings available 7 days a week to fit your busy lifestyle.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Eco-Friendly Standards</h3>
                      <p className="text-sm text-[var(--text-muted)]">We prioritize non-toxic, safe cleaning agents for your home.</p>
                    </div>
                  </div>
                </div>

                <button className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--text-gray)] px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-900">
                  Discover Our Story
                </button>
              </div>

              <div className="lg:col-span-6 flex items-start">
                <div className="w-full rounded-md overflow-hidden relative min-h-[420px] md:min-h-[520px] lg:min-h-[660px]">
                  {slides.map((s, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image src={s.src} alt={s.alt} fill className="object-cover" priority={false} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--text-gray)]">
              <p>
                Since our founding, we have focused on consistent, high-quality results for homes and businesses.
                Whether it’s routine maintenance or one-time deep cleaning, our processes emphasize reliability,
                professionalism, and respect for your environment.
              </p>
              <p>
                With a dedicated customer success team and rigorous training programs, we ensure every visit meets our
                exacting standards. Over thousands of satisfied clients, we’ve built a reputation for reliability and
                discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

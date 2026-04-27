"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import partner1 from "./assets/imgs/partners/trusted-partners-8.jpeg";
import partner2 from "./assets/imgs/partners/trusted-partners-9.png";
import partner3 from "./assets/imgs/partners/trusted-partners-3.png";
import partner4 from "./assets/imgs/partners/trusted-partners-4.png";
import partner5 from "./assets/imgs/partners/trusted-partners-5.png";
import partner6 from "./assets/imgs/partners/trusted-partners-6.jpeg";
import partner7 from "./assets/imgs/partners/trusted-partners-7.png";

export default function Partners() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const partners = [
    {
      src: partner1,
      alt: "Prestige Hotels & Suits",
      name: "Prestige Hotels & Suits",
    },
    { src: partner2, alt: "Classe Hotels", name: "Classe Hotels" },
    { src: partner3, alt: "Corpman Limited", name: "Corpman Limited" },
    { src: partner4, alt: "Oxygen Hotels", name: "Oxygen Hotels" },
    { src: partner5, alt: "Neon Eye Center", name: "Neon Eye Center" },
    { src: partner6, alt: "NXH Computers", name: "NXH Computers" },
    { src: partner7, alt: "One Hotels", name: "One Hotels" },
  ];

  return (
    <section
      ref={ref}
      className={`w-full bg-white py-10 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-all duration-500`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-sm text-[var(--text-gray)] flex items-center justify-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--brand-primary)" }}
              />
              Trusted by leading companies
            </p>
            <div className="mx-auto mt-2 h-0.5 w-24 rounded bg-[var(--brand-primary)] opacity-10" />
          </div>

          <div
            className="border-t border-b pt-3 pb-3"
            style={{ borderColor: "rgba(247,147,30,0.18)" }}
          >
            <div className="flex items-center justify-center">
              <div className="w-full overflow-hidden">
                <div className="partners-marquee" aria-hidden={false}>
                  <div className="partners-track">
                    {[...partners, ...partners].map((p, i) => (
                      <div
                        key={i}
                        className="group partner-item flex items-center gap-2 px-2 py-1 hover:filter-none transition duration-300"
                      >
                        <div className="flex items-center justify-center logo-box">
                          <Image
                            src={p.src}
                            alt={p.alt}
                            width={72}
                            height={72}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-[var(--brand-charcoal)] partner-name group-hover:text-[var(--brand-primary)] transition-colors duration-200 whitespace-nowrap">
                          {p.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`\
            .partners-marquee { width: 100%; }\
            .partners-track { display: flex; gap: 1rem; align-items: center; 
              animation: marquee 20s linear infinite; will-change: transform; }
            .partners-track:hover { animation-play-state: paused; }
            .partner-item { width: 210px; }
            .logo-box { width: 96px; height: 56px; }
            .partner-name { transition: color 180ms ease; }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              .partners-track { animation: none; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

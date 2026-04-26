"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo1 from "./assets/imgs/PERRY2.png";
import logo2 from "./assets/imgs/perry-logo-2.png";
import { IconBroom, IconBuilding, IconSpray, IconMop, IconEvent } from "./services";

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
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const partners = [
    { src: logo1, alt: "Perry Cleaning Services", name: "Perry" },
    { src: logo2, alt: "Perry Cleaning Services (alt)", name: "Perry" },
    { icon: IconBroom, name: "BroomCo" },
    { icon: IconBuilding, name: "OfficeClean" },
    { icon: IconSpray, name: "FreshSpray" },
    { icon: IconMop, name: "MopWorks" },
    { icon: IconEvent, name: "EventCare" },
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
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-primary)" }} />
              Trusted by leading companies
            </p>
            <div className="mx-auto mt-2 h-0.5 w-24 rounded bg-[var(--brand-primary)] opacity-10" />
          </div>

          <div className="border-t border-b pt-3 pb-3" style={{ borderColor: "rgba(247,147,30,0.18)" }}>
            <div className="flex items-center justify-center">
              <div className="w-full overflow-hidden">
                <div className="partners-marquee" aria-hidden={false}>
                  <div className="partners-track">
                    {[...partners, ...partners].map((p, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-3 p-2 hover:filter-none transition duration-300"
                        style={{ minWidth: 140 }}
                      >
                        {p.src ? (
                          <div
                            className="rounded-md flex items-center justify-center logo-bg"
                            style={{ padding: 6, backgroundColor: "var(--brand-primary)", opacity: 0.08 }}
                          >
                            <Image
                              src={p.src}
                              alt={p.alt}
                              width={72}
                              height={72}
                              className="object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition duration-300"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-md bg-white/0 flex items-center justify-center text-[var(--brand-charcoal)]">
                            <span className="text-[var(--brand-charcoal)] partner-icon">
                              <p.icon />
                            </span>
                          </div>
                        )}
                        <span className="text-sm font-medium text-[var(--brand-charcoal)] partner-name group-hover:text-[var(--brand-primary)] transition-colors duration-200">
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
            .partners-track { display: flex; gap: 2rem; align-items: center; 
              animation: marquee 20s linear infinite; will-change: transform; }
            .partners-track:hover { animation-play-state: paused; }
            .logo-bg { transition: opacity 200ms ease, transform 200ms ease; }
            .group:hover .logo-bg { opacity: 0.16; transform: translateY(-3px); }
            .partner-icon { transition: color 180ms ease, transform 180ms ease; }
            .group:hover .partner-icon { color: var(--brand-primary); transform: translateY(-2px); }
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

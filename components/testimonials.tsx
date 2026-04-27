"use client";

import React from "react";
import Image from "next/image";
import testimonialAvatar1 from "./assets/imgs/testimonials/testimonials-1.jpeg";
import testimonialAvatar2 from "./assets/imgs/testimonials/testimonials-2.jpeg";
import testimonialAvatar3 from "./assets/imgs/testimonials/testimonials-3.jpeg";

type Testimonial = {
  avatar: any;
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    avatar: testimonialAvatar1,
    name: "Sofia Martinez",
    text: "— The team delivered on time and exceeded our expectations. Communication was clear and the results speak for themselves.",
  },
  {
    avatar: testimonialAvatar2,
    name: "Daniel Okoye",
    text: "— Professional, reliable and detail-oriented. Our office has never felt cleaner — our staff noticed the difference right away.",
  },
  {
    avatar: testimonialAvatar3,
    name: "Ava Thompson",
    text: "— Excellent service and a thoughtful approach. The case study shows measurable improvements in our workplace wellbeing.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-sm text-[var(--text-gray)]">What our partners say</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image src={t.avatar} alt={`${t.name} avatar`} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--brand-charcoal)]">{t.name}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 my-4" />

                <p className="text-sm text-gray-700 leading-relaxed">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

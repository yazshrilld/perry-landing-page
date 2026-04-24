"use client";

import React from "react";

export default function CTA() {
  return (
    <section className="w-full bg-[var(--brand-primary)] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to experience a cleaner space?
          </h2>
          <p className="mt-4 text-white/95">
            Join 5,000+ satisfied customers who trust Perry Cleans for their
            home and business needs.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-slate-900 text-white shadow-md hover:shadow-lg transition">
              Book Your Clean Now
            </button>
            <button className="px-6 py-3 rounded-full bg-white text-orange-600 font-semibold border border-white/30 hover:bg-white/90 transition">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

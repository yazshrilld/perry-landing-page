"use client";

import React from "react";
import Image from "next/image";
import thumb1 from "./assets/imgs/hero-office-clean-1.jpg";
import thumb2 from "./assets/imgs/hero-home-clean-1.jpg";
import thumb3 from "./assets/imgs/hero-home-clean-2.jpg";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  image: any;
  href?: string;
};

const posts: Post[] = [
  {
    title: "5 Quick Tips to Keep Your Office Spotless",
    excerpt:
      "Small daily habits that make a big difference—tackle high-touch surfaces, schedule micro-cleaning breaks, reduce clutter for a healthier workspace, and implement a simple end-of-day wipe routine to keep germs at bay. We also cover quick product recommendations and a 5-minute checklist teams can follow.",
    date: "Jan 8, 2026",
    image: thumb1,
    href: "#",
  },
  {
    title: "Eco-Friendly Cleaning: What Works",
    excerpt:
      "Switching to greener products doesn't mean sacrificing results—learn our top picks for effective, low-impact cleaners, how to read ingredient labels, and simple DIY solutions for everyday stains. We include cost comparisons and safety tips for homes with pets and kids.",
    date: "Dec 22, 2025",
    image: thumb2,
    href: "#",
  },
  {
    title: "Maintaining Carpets Between Professional Cleans",
    excerpt:
      "Extend the life of your carpets with simple routines: spot treatment, regular vacuuming, quick upholstery care tips, and a seasonal deep-clean checklist. Learn when to call professionals and how to prevent odors and fiber wear between services.",
    date: "Nov 15, 2025",
    image: thumb3,
    href: "#",
  },
];

export default function Blogs() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center justify-between text-center">
            <div>
              <h2 className="text-xl font-semibold text-[var(--brand-charcoal)]">Cleaning Tips & Articles</h2>
              <p className="text-sm text-gray-500">Short, practical reads to keep things fresh.</p>
            </div>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              View all posts
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400">{p.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--brand-charcoal)]">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                  <div className="mt-4">
                    <a
                      href={p.href}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-primary)] text-white text-sm hover:brightness-95 transition"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

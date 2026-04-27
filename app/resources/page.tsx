"use client";

import Image from "next/image";
import Link from "next/link";

import heroBg from "@/components/assets/imgs/hero-home-clean-3.jpg";
import resourceImageOne from "@/components/assets/imgs/suppliers-1.avif";
import resourceImageTwo from "@/components/assets/imgs/logistics-1.avif";
import resourceImageThree from "@/components/assets/imgs/partners-1.avif";
import { Footer } from "@/components/footer";
import { BookingComingSoonModal } from "@/components/booking-coming-soon-modal";
import { SiteHeader } from "@/components/site-header";

export default function ResourcesPage() {
  return (
    <main id="top" className="min-h-screen landing-bg">
      <header className="w-full relative">
        <div className="w-full h-[620px] sm:h-[580px] md:h-[520px] relative overflow-hidden">
          <Image
            src={heroBg}
            alt="Perry Cleans resources hub"
            fill
            sizes="100vw"
            quality={70}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />

          <div className="absolute inset-0 z-20 flex flex-col">
            <SiteHeader />

            <div className="flex-1 flex items-center">
              <div className="max-w-3xl px-6 md:px-12 lg:px-20">
                <p className="text-sm text-white/80 mb-2 uppercase tracking-[0.2em]">
                  Resources
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                  Resources Center
                </h1>
                <p className="text-base md:text-lg text-white/90 mb-6">
                  Explore our talent network, equipment standards, training
                  materials, and trusted service partners.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <BookingComingSoonModal>
                    <button
                      type="button"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white hover:bg-slate-900 transition"
                    >
                      Contact for Access
                    </button>
                  </BookingComingSoonModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                Talent Pool
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Our workforce pipeline
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Cleaners",
                  text: "Professionals trained and vetted to deliver high-quality cleaning services with consistency, attention to detail, and reliability in residential and commercial environments.",
                },
                {
                  title: "Marketers",
                  text: "Growth-focused professionals skilled in promoting services, acquiring customers, and improving brand visibility through digital and offline marketing strategies.",
                },
                {
                  title: "Developers",
                  text: "Technical specialists responsible for building, maintaining, and improving digital systems, tools, and platforms that power service operations and customer experience.",
                },
                {
                  title: "Support Talent",
                  text: "Operational and administrative professionals who assist with customer communication, coordination, issue resolution, and day-to-day service support.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-gray)] leading-7">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                Tools & Equipment
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                What powers our service quality
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--brand-charcoal)]">
                  Operational Categories
                </h3>
                <ul className="mt-4 space-y-2 text-[var(--text-gray)]">
                  <li>• Cleaning Equipment</li>
                  <li>• Chemicals</li>
                  <li>• Safety Gear</li>
                  <li>• Technology Stack</li>
                </ul>
              </article>
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--brand-charcoal)]">
                  Transparency Promise
                </h3>
                <p className="mt-4 text-[var(--text-gray)] leading-8">
                  We maintain clear standards for tool usage, quality checks,
                  and safety procedures to ensure professional results across
                  every service environment.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                Training & Knowledge
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Knowledge base for consistent excellence
              </h2>
            </div>
            <div className="space-y-6">
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--brand-charcoal)]">
                  Standard Operating Guides
                </h3>
                <p className="mt-3 text-[var(--text-gray)]">
                  Articles, checklists, and process guides used for onboarding
                  and quality assurance.
                </p>
              </article>
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--brand-charcoal)]">
                  Training Materials
                </h3>
                <p className="mt-3 text-[var(--text-gray)]">
                  PDF manuals, practical videos, and team documents for safe and
                  effective service delivery.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                Partners / Vendors
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Trusted external support network
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={resourceImageOne}
                    alt="Supplier partnerships"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">
                    Suppliers
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-gray)]">
                    Reliable sourcing for cleaning chemicals and essential
                    materials.
                  </p>
                </div>
              </article>
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={resourceImageTwo}
                    alt="Logistics partnerships"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">
                    Logistics
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-gray)]">
                    Delivery and movement support to keep operations responsive.
                  </p>
                </div>
              </article>
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={resourceImageThree}
                    alt="Equipment support partners"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">
                    Equipment Partners
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-gray)]">
                    Maintenance and technical support for cleaning equipment
                    reliability.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--brand-primary)] py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Need resource support or partnership details?
            </h2>
            <p className="mt-4 text-white/95">
              Reach out to our team for verified access to operational,
              training, and partner information.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white text-[var(--brand-primary)] font-semibold border border-white/30 hover:bg-slate-900 hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

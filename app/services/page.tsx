"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import heroBg from "@/components/assets/imgs/hero-office-clean-1.jpg";
import serviceImg1 from "@/components/assets/imgs/hero-home-clean-3.jpg";
import serviceImg2 from "@/components/assets/imgs/hero-office-clean-1.jpg";
import serviceImg3 from "@/components/assets/imgs/hero-event-clean-2.jpg";
import serviceImg4 from "@/components/assets/imgs/hero-event-clean-1.jpg";
import serviceImg5 from "@/components/assets/imgs/hero-home-clean-2.jpg";
import { BookingComingSoonModal } from "@/components/booking-coming-soon-modal";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import {
  IconBroom,
  IconBuilding,
  IconEvent,
  IconMop,
  IconSpray,
} from "@/components/services";

const serviceCards = [
  {
    name: "Residential Cleaning",
    desc: "Routine and deep cleaning tailored for busy households and families.",
    ideal: "Ideal for: homes, apartments, and move-in/move-out support.",
    image: serviceImg1,
    icon: <IconBroom />,
  },
  {
    name: "Office Cleaning",
    desc: "Professional workspace cleaning that supports productivity and hygiene.",
    ideal: "Ideal for: offices, co-working spaces, and business lounges.",
    image: serviceImg2,
    icon: <IconBuilding />,
  },
  {
    name: "Post-Construction Cleaning",
    desc: "Detailed dust, debris, and surface cleanup after renovation or building work.",
    ideal: "Ideal for: newly completed residential and commercial projects.",
    image: serviceImg3,
    icon: <IconSpray />,
  },
  {
    name: "Events Cleaning",
    desc: "Pre-event preparation and fast post-event cleanup for smooth operations.",
    ideal: "Ideal for: halls, event centers, and corporate functions.",
    image: serviceImg4,
    icon: <IconEvent />,
  },
  {
    name: "Warehouse Cleaning",
    desc: "Large-area cleaning services for industrial and storage environments.",
    ideal:
      "Ideal for: warehouses, storage facilities, and high-traffic utility spaces.",
    image: serviceImg5,
    icon: <IconMop />,
  },
];

const details = [
  {
    title: "Residential Cleaning",
    includes: [
      "Dusting and surface wipe-down",
      "Kitchen and bathroom sanitation",
      "Floor vacuuming and mopping",
    ],
    excludes: ["Hazardous waste handling", "Major repairs or maintenance work"],
    duration: "Estimated duration: 2-4 hours per visit",
    frequency: "Frequency options: One-time, weekly, or bi-weekly",
  },
  {
    title: "Office Cleaning",
    includes: [
      "Desk and workstation cleaning",
      "Common area sanitation",
      "Restroom and pantry cleaning",
    ],
    excludes: ["IT hardware repairs", "Specialized biohazard cleanup"],
    duration: "Estimated duration: 3-6 hours depending on office size",
    frequency: "Frequency options: Daily, weekly, or custom plans",
  },
  {
    title: "Specialty Cleaning (Post-Construction / Events / Warehouse)",
    includes: [
      "Heavy-duty floor and surface cleaning",
      "Dust and residue removal",
      "Layout-specific deep cleaning",
    ],
    excludes: [
      "Structural modifications",
      "Large-scale waste disposal logistics",
    ],
    duration: "Estimated duration: Based on project scope and space condition",
    frequency: "Frequency options: One-time or scheduled maintenance",
  },
];

const steps = [
  {
    title: "Book / Request",
    text: "Send your service request online or via phone.",
  },
  { title: "Schedule", text: "Pick a date and time that fits your routine." },
  { title: "Cleaning", text: "Our trained team arrives and handles the work." },
  { title: "Completion", text: "Final quality check and your feedback." },
];

const trustPoints = [
  "Trained and professional cleaning team",
  "Quality checks on every visit",
  "Reliable and punctual service delivery",
  "Eco-conscious products and methods",
  "Flexible plans for different customer needs",
  "Responsive customer support",
];

const faqs = [
  {
    q: "How do I book a cleaning service?",
    a: "Use any booking button on this page. If online booking is unavailable, contact our numbers directly.",
  },
  {
    q: "Do you bring cleaning supplies?",
    a: "Yes, our team comes with professional cleaning tools and supplies suitable for your service type.",
  },
  {
    q: "Can I request a custom service package?",
    a: "Absolutely. We can customize scope, timing, and frequency based on your needs.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing depends on space size, current condition, service type, and frequency.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  

  return (
    <main id="top" className="min-h-screen landing-bg">
      <header className="w-full relative">
        <div className="w-full h-[620px] sm:h-[580px] md:h-[520px] relative overflow-hidden">
          <Image
            src={heroBg}
            alt="Professional service team"
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
                  Our Services
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                  Professional Cleaning Services
                </h1>
                {/* <p className="text-base md:text-lg text-white/90 mb-6">
                  Reliable cleaning solutions for homes, offices, events, and industrial spaces delivered by trained
                  professionals.
                </p> */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <BookingComingSoonModal>
                    <button
                      type="button"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white hover:bg-slate-900 transition"
                    >
                      Book a Cleaner
                    </button>
                  </BookingComingSoonModal>
                  <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/30 text-white bg-white/5 hover:bg-slate-900 transition">
                    Get a Quote
                  </button>
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
                Service Categories
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Solutions tailored to your cleaning needs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service, index) => (
                <article
                  key={index}
                  className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[var(--brand-charcoal)]">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-gray)]">
                      {service.desc}
                    </p>
                    <p className="mt-3 text-sm font-medium text-[var(--brand-charcoal)]">
                      {service.ideal}
                    </p>
                  </div>
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
                Service Details
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                What each service includes
              </h2>
            </div>

            <div className="space-y-6">
              {details.map((detail, index) => (
                <article
                  key={index}
                  className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm p-6 md:p-8"
                >
                  <h3 className="text-2xl font-bold text-[var(--brand-charcoal)]">
                    {detail.title}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-gray)]">
                        What&apos;s Included
                      </p>
                      <ul className="mt-3 space-y-2 text-[var(--text-gray)]">
                        {detail.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[var(--brand-primary)]">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-gray)]">
                        What&apos;s Not Included
                      </p>
                      <ul className="mt-3 space-y-2 text-[var(--text-gray)]">
                        {detail.excludes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[var(--brand-primary)]">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="text-sm text-[var(--brand-charcoal)] font-medium">
                      {detail.duration}
                    </p>
                    <p className="text-sm text-[var(--brand-charcoal)] font-medium">
                      {detail.frequency}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm p-6 md:p-10">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Simple pricing guidance
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="rounded-lg border border-[var(--ui-light-gray)] p-5 bg-[var(--background-offwhite)]">
                <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-gray)]">
                  Starting Price
                </p>
                <p className="mt-2 text-3xl font-bold text-[var(--brand-charcoal)]">
                  From ₦25,000
                </p>
                <p className="mt-2 text-sm text-[var(--text-gray)]">
                  Base price varies by service type and property details.
                </p>
              </article>
              <article className="rounded-lg border border-[var(--ui-light-gray)] p-5 bg-[var(--background-offwhite)]">
                <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-gray)]">
                  Custom Quote
                </p>
                <p className="mt-2 text-3xl font-bold text-[var(--brand-charcoal)]">
                  Available
                </p>
                <p className="mt-2 text-sm text-[var(--text-gray)]">
                  Recommended for large spaces, specialty jobs, and recurring
                  plans.
                </p>
              </article>
            </div>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-gray)]">
                Pricing Factors
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Space size",
                  "Current condition",
                  "Service scope",
                  "Frequency",
                ].map((factor) => (
                  <span
                    key={factor}
                    className="px-3 py-1.5 rounded-full bg-[var(--background-offwhite)] border border-[var(--ui-light-gray)] text-sm text-[var(--brand-charcoal)]"
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                From booking to spotless finish
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-5 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--brand-primary)] text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--brand-charcoal)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-gray)]">
                    {step.text}
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
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Trusted by homes and businesses
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {trustPoints.map((point) => (
                <article
                  key={point}
                  className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <p className="text-[var(--text-gray)]">{point}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Common service questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article
                  key={faq.q}
                  className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-[var(--text-gray)]">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--brand-primary)] py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to book your service?
            </h2>
            <p className="mt-4 text-white/95">
              Choose your preferred cleaning plan and let our team handle the
              rest with quality and care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookingComingSoonModal>
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[var(--brand-primary)] font-semibold border border-white/30 hover:bg-slate-900 hover:text-white transition"
                >
                  Book Now
                </button>
              </BookingComingSoonModal>
              <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/30 text-white bg-white/5 hover:bg-slate-900 transition">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

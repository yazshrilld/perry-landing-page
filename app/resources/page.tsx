"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import logo from "@/components/assets/imgs/PERRY2.png";
import heroBg from "@/components/assets/imgs/hero-home-clean-3.jpg";
import resourceImageOne from "@/components/assets/imgs/suppliers-1.avif";
import resourceImageTwo from "@/components/assets/imgs/logistics-1.avif";
import resourceImageThree from "@/components/assets/imgs/partners-1.avif";
import { Footer } from "@/components/footer";
import { BookingComingSoonModal } from "@/components/booking-coming-soon-modal";

export default function ResourcesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

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
            <nav className="flex items-center px-6 md:px-12 lg:px-16 py-5 lg:py-6">
              <div className="flex items-center gap-4">
                <a href="#top" className="inline-flex items-center">
                  <Image
                    src={logo}
                    alt="Perry Cleaning Services"
                    width={140}
                    height={140}
                    className="w-[88px] md:w-[104px] lg:w-[118px] h-auto object-contain mix-blend-multiply rounded-[50%]"
                  />
                </a>
              </div>

              <div className="ml-auto flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-6 text-white/90">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`border-b-2 pb-1 transition-colors ${
                        isActive(link.href)
                          ? "text-white border-[var(--brand-primary)] font-semibold"
                          : "text-white/85 border-transparent hover:text-white hover:border-white/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)] transition"
                  >
                    Talk to Us
                  </Link>
                </div>
                <button
                  className="lg:hidden text-white p-2"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </nav>

            <div
              className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={!menuOpen}
            >
              <button
                type="button"
                className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              />

              <aside
                className={`absolute left-0 top-0 h-full w-[82%] max-w-xs bg-[var(--background-offwhite)] border-r border-[var(--ui-light-gray)] shadow-2xl transform transition-transform duration-300 ease-in-out ${
                  menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--ui-light-gray)]">
                  <Image
                    src={logo}
                    alt="Perry Cleaning Services"
                    width={72}
                    height={72}
                    className="object-contain mix-blend-multiply rounded-[50%]"
                  />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-md text-[var(--brand-charcoal)] hover:bg-black/5 transition"
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="px-4 py-5">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`rounded-md px-3 py-2.5 transition-colors ${
                          isActive(link.href)
                            ? "bg-[var(--brand-primary)]/15 text-[var(--brand-charcoal)] font-semibold"
                            : "text-[var(--brand-charcoal)] hover:bg-black/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-6 block text-center w-full px-4 py-2.5 rounded-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)] transition"
                  >
                    Talk to Us
                  </Link>
                </div>
              </aside>
            </div>

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

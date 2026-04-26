"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import logo from "@/components/assets/imgs/perry-logo-1.png";
import heroBg from "@/components/assets/imgs/hero-office-clean-1.jpg";
import { Footer } from "@/components/footer";
import { BookingComingSoonModal } from "@/components/booking-coming-soon-modal";

type ContactForm = {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

const defaultForm: ContactForm = {
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "General Inquiry",
  message: "",
};

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>(defaultForm);
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/services" },
    { label: "Resource", href: "/resources" },
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError("Please fill in Full Name, Email, and Message.");
      return;
    }
    setSent(true);
    setForm(defaultForm);
  }

  return (
    <main id="top" className="min-h-screen landing-bg">
      <header className="w-full relative">
        <div className="w-full h-[620px] sm:h-[580px] md:h-[520px] relative overflow-hidden">
          <Image src={heroBg} alt="Contact Perry Cleans" fill sizes="100vw" quality={70} className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />

          <div className="absolute inset-0 z-20 flex flex-col">
            <nav className="flex items-center px-6 md:px-12 lg:px-16 py-5 lg:py-6">
              <div className="flex items-center gap-4">
                <a href="#top" className="inline-flex items-center">
                  <Image
                    src={logo}
                    alt="Perry Cleaning Services"
                    width={60}
                    height={26}
                    className="object-contain mix-blend-multiply rounded-[50%]"
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {menuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </nav>

            <div
              className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
                menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
                    width={54}
                    height={24}
                    className="object-contain mix-blend-multiply rounded-[50%]"
                  />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-md text-[var(--brand-charcoal)] hover:bg-black/5 transition"
                    aria-label="Close menu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                <p className="text-sm text-white/80 mb-2 uppercase tracking-[0.2em]">Contact</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">Talk to Us</h1>
                <p className="text-base md:text-lg text-white/90 mb-6">
                  Reach out for bookings, service inquiries, partnerships, or support. Our team is ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <a
                    href="#contact-form"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white text-center hover:bg-slate-900 transition"
                  >
                    Send a Message
                  </a>
                  <a
                    href="tel:08032266625"
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/30 text-white bg-white/5 text-center hover:bg-slate-900 transition"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Phone", text: "08032266625, 07061889992" },
              { title: "Email", text: "hello@perrycleans.com" },
              { title: "Working Hours", text: "Mon - Sat, 8:00 AM - 6:00 PM" },
            ].map((item) => (
              <article key={item.title} className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.12em] text-[var(--text-gray)]">{item.title}</p>
                <p className="mt-2 text-lg font-semibold text-[var(--brand-charcoal)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            <article className="lg:col-span-7 rounded-xl bg-white border border-[var(--ui-light-gray)] p-6 md:p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-[var(--brand-charcoal)]">Send us a message</h2>
              <p className="mt-2 text-[var(--text-gray)]">Tell us what you need and we’ll get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    value={form.fullName}
                    onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                    placeholder="Full Name"
                    className="h-11 w-full rounded-md border border-[var(--ui-light-gray)] px-3"
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="Email Address"
                    className="h-11 w-full rounded-md border border-[var(--ui-light-gray)] px-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="Phone Number"
                    className="h-11 w-full rounded-md border border-[var(--ui-light-gray)] px-3"
                  />
                  <select
                    value={form.inquiryType}
                    onChange={(e) => setForm((p) => ({ ...p, inquiryType: e.target.value }))}
                    className="h-11 w-full rounded-md border border-[var(--ui-light-gray)] px-3 bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Booking Request</option>
                    <option>Partnership</option>
                    <option>Support</option>
                  </select>
                </div>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Your Message"
                  className="min-h-[140px] w-full rounded-md border border-[var(--ui-light-gray)] px-3 py-2"
                />

                {formError && <p className="text-sm text-red-600">{formError}</p>}
                {sent && <p className="text-sm text-emerald-700">Message sent successfully. We’ll contact you soon.</p>}

                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white hover:bg-slate-900 transition"
                >
                  Submit Message
                </button>
              </form>
            </article>

            <article className="lg:col-span-5 rounded-xl bg-white border border-[var(--ui-light-gray)] p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--brand-charcoal)]">Direct Contact</h2>
              <p className="mt-2 text-[var(--text-gray)]">Need a quick response? Use the direct channels below.</p>
              <div className="mt-5 space-y-3 text-[var(--text-gray)]">
                <p><span className="font-semibold text-[var(--brand-charcoal)]">Phone:</span> 08032266625</p>
                <p><span className="font-semibold text-[var(--brand-charcoal)]">Phone:</span> 07061889992</p>
                <p><span className="font-semibold text-[var(--brand-charcoal)]">Email:</span> hello@perrycleans.com</p>
                <p><span className="font-semibold text-[var(--brand-charcoal)]">Address:</span> Lagos, Nigeria</p>
              </div>
              <div className="mt-6 rounded-lg bg-[var(--background-offwhite)] border border-[var(--ui-light-gray)] p-4">
                <p className="text-sm text-[var(--text-gray)]">
                  We typically respond within 24 hours for inquiries and faster for active service customers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">FAQ</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">Common contact questions</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How fast do you respond to new inquiries?",
                  a: "Most messages are answered within 24 hours during business days.",
                },
                {
                  q: "Can I book directly from this page?",
                  a: "Yes. You can send a booking request via the form or call us directly for faster scheduling.",
                },
                {
                  q: "Do you support business and event cleaning requests?",
                  a: "Absolutely. We handle residential, office, events, and custom operational cleaning requests.",
                },
              ].map((item) => (
                <article key={item.q} className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">{item.q}</h3>
                  <p className="mt-2 text-[var(--text-gray)]">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--brand-primary)] py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Ready to work with Perry Cleans?</h2>
            <p className="mt-4 text-white/95">
              Let’s discuss your cleaning needs and create a plan that works for your space and schedule.
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
              <a
                href="tel:08032266625"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/30 text-white bg-white/5 hover:bg-slate-900 transition"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

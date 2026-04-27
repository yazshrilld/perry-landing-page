"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "./assets/imgs/PERRY2.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => href !== "#" && pathname === href;

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="flex items-center px-6 md:px-12 lg:px-16 py-5 lg:py-6">
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="inline-flex flex-col items-start md:flex-row md:items-center"
          >
            <div className="relative w-[88px] h-[42px] md:w-[104px] md:h-[50px] lg:w-[118px] lg:h-[56px] overflow-hidden">
              <Image
                src={logo}
                alt="Perry Cleaning Services"
                width={140}
                height={140}
                className="w-[132%] max-w-none h-auto object-contain object-left mix-blend-multiply -translate-x-[16%] -translate-y-[16%]"
              />
            </div>
            <span className="mt-0.5 text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap leading-none md:mt-0 md:-ml-4 md:-translate-y-[2px]">
              PerryCleaningServices
            </span>
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
            className={`lg:hidden text-white p-2 transition-opacity ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
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
            <div className="inline-flex flex-col items-start md:flex-row md:items-center">
              <div className="relative w-[72px] h-[34px] overflow-hidden">
                <Image
                  src={logo}
                  alt="Perry Cleaning Services"
                  width={72}
                  height={72}
                  className="w-[132%] max-w-none h-auto object-contain object-left -translate-x-[16%] -translate-y-[15%]"
                  style={{
                    filter:
                      "drop-shadow(0 0 1px rgba(0,0,0,0.9)) drop-shadow(0 1px 1px rgba(0,0,0,0.35))",
                  }}
                />
              </div>
              <span className="mt-0.5 text-[var(--brand-charcoal)] font-semibold text-sm whitespace-nowrap leading-none md:mt-0 md:ml-1 md:-translate-y-[2px]">
                PerryCleaningServices
              </span>
            </div>
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
    </>
  );
}

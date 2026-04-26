import Link from "next/link";
import { BookingComingSoonModal } from "./booking-coming-soon-modal";

export function Footer() {
  return (
    <footer className="w-full pt-12 pb-8">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About Perry Cleans */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-[var(--brand-primary)]">About Perry Cleans</h3>
            <p className="text-gray-600 max-w-xs">
              Perry Cleans provides professional residential and commercial cleaning with a focus on reliability,
              eco-friendly products, and exceptional customer service. We make spaces shine so you can focus on what
              matters.
            </p>
            <div className="flex space-x-4 mt-4" aria-label="Social media links">
              <Link href="#" className="text-orange-400 hover:text-orange-600 transition-colors" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-orange-400 hover:text-orange-600 transition-colors" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
              <Link href="#" className="text-orange-400 hover:text-orange-600 transition-colors" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-orange-400 hover:text-orange-600 transition-colors" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-[var(--brand-primary)]">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services" className="text-gray-600 hover:text-orange-600 transition-colors">
                Residential Cleaning
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-orange-600 transition-colors">
                Commercial Cleaning
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-orange-600 transition-colors">
                Deep Cleaning
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-orange-600 transition-colors">
                Move-in / Move-out
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-orange-600 transition-colors">
                Recurring Plans
              </Link>
            </nav>
          </div>

          {/* Column 3: Get Started */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-[var(--brand-primary)]">Get Started</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/careers" className="text-gray-600 hover:text-orange-600 transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contact Us
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-orange-600 transition-colors">
                Pricing
              </Link>
              <BookingComingSoonModal>
                <button type="button" className="text-left text-gray-600 hover:text-orange-600 transition-colors">
                  Book a Cleaning
                </button>
              </BookingComingSoonModal>
              <Link href="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Column 4: About */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-[var(--brand-primary)]">About</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-600 hover:text-orange-600 transition-colors">
                About Us
              </Link>
              <Link href="/sustainability" className="text-gray-600 hover:text-orange-600 transition-colors">
                Sustainability
              </Link>
              <Link href="/partners" className="text-gray-600 hover:text-orange-600 transition-colors">
                Partners
              </Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-orange-600 transition-colors">
                Testimonials
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-200 mt-8 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Perry Cleans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

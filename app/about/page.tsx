"use client";

import Image from "next/image";
import Link from "next/link";

import heroBg from "@/components/assets/imgs/hero-home-clean-1.jpg";
import teamImageOne from "@/components/assets/imgs/team/group-cleaners-1.webp";
import teamImageTwo from "@/components/assets/imgs/team/group-cleaners-2.avif";
import teamImageThree from "@/components/assets/imgs/team/group-cleaners-3.avif";
import heroThumb from "@/components/assets/imgs/hero-office-clean-2.webp";
import founderImageOne from "@/components/assets/imgs/team/ceo-image-1.jpg";
import founderImageTwo from "@/components/assets/imgs/team/perry-yaz.jpeg";
import {
  IconBroom,
  IconBuilding,
  IconSpray,
  IconMop,
  IconEvent,
} from "@/components/services";
import { Footer } from "@/components/footer";
import { BookingComingSoonModal } from "@/components/booking-coming-soon-modal";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  const whyChooseUs = [
    {
      title: "High Quality Cleaning",
      text: "Detailed cleaning checklists and quality control on every visit.",
      icon: <IconBroom />,
    },
    {
      title: "Flexible Scheduling",
      text: "Choose time slots that work for your home or business routine.",
      icon: <IconBuilding />,
    },
    {
      title: "Eco-Friendly Products",
      text: "Safe, non-toxic cleaning products suitable for family and staff spaces.",
      icon: <IconSpray />,
    },
    {
      title: "Trained Professionals",
      text: "Experienced cleaners trained in service standards and hygiene protocols.",
      icon: <IconMop />,
    },
    {
      title: "Fast Booking",
      text: "Simple booking flow and quick confirmations from our support team.",
      icon: <IconEvent />,
    },
    {
      title: "Customer Satisfaction",
      text: "We prioritize feedback and continuous improvement for better outcomes.",
      icon: <IconBroom />,
    },
  ];
  const meetTheTeam = [
    {
      image: teamImageOne,
      alt: "Janitor team preparing a residential cleaning session",
      title: "Home Care Janitor Team",
      text: "Our residential janitors handle deep and routine cleaning with attention to detail, creating safe and comfortable living spaces for families.",
    },
    {
      image: teamImageTwo,
      alt: "Janitors coordinating cleaning setup for an event venue",
      title: "Office Space",
      text: "This team specializes in pre-event setup and post-event recovery, keeping large venues clean, presentable, and ready for every schedule.",
    },
    {
      image: teamImageThree,
      alt: "Professional janitors working together in a commercial environment",
      title: "Large rooms",
      text: "Our commercial janitors maintain offices and business spaces with consistent hygiene routines that support productivity and staff wellbeing.",
    },
  ];

  return (
    <main id="top" className="min-h-screen landing-bg">
      <header className="w-full relative">
        <div className="w-full h-[620px] sm:h-[580px] md:h-[520px] relative overflow-hidden">
          <Image
            src={heroBg}
            alt="Professional cleaners at work"
            fill
            sizes="100vw"
            quality={70}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />

          <div className="absolute inset-0 z-20 flex flex-col">
            <SiteHeader />

            <div className="flex-1 flex items-center">
              <div className="max-w-3xl px-6 md:px-12 lg:px-20">
                <p className="text-sm text-white/80 mb-2 uppercase tracking-[0.2em]">
                  ABOUT US
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                  About Perry Cleans
                </h1>
                <p className="text-base md:text-lg text-white/90 mb-6">
                  Trusted professionals delivering reliable, high-quality
                  cleaning services for homes, offices, and commercial spaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <BookingComingSoonModal>
                    <button
                      type="button"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white hover:bg-slate-900 transition"
                    >
                      Book a Cleaner
                    </button>
                  </BookingComingSoonModal>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/30 text-white bg-white/5 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-30 hidden md:block">
            <div className="w-48 h-28 bg-white/90 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={heroThumb}
                alt="cleaning preview"
                width={180}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="w-full flex justify-center">
        <div className="container mx-auto px-4 md:px-4 lg:px-6 mt-4 md:mt-8 lg:mt-10">
          <div className="bg-[var(--background-offwhite)] rounded-lg shadow-sm p-8 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                  Mission & Vision
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                  What drives the way we serve
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="rounded-xl bg-white p-6 md:p-8 shadow-sm border border-[var(--ui-light-gray)]">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-gray)]">
                    Our Mission
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--brand-charcoal)]">
                    Consistent quality, every visit
                  </h3>
                  <p className="mt-3 text-[var(--text-gray)]">
                    To deliver dependable, professional cleaning services that
                    make homes and workplaces healthier, cleaner, and more
                    comfortable every day.
                  </p>
                </article>
                <article className="rounded-xl bg-white p-6 md:p-8 shadow-sm border border-[var(--ui-light-gray)]">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-gray)]">
                    Our Vision
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--brand-charcoal)]">
                    The most trusted cleaning partner
                  </h3>
                  <p className="mt-3 text-[var(--text-gray)]">
                    To become the go-to cleaning brand known for integrity,
                    service excellence, and customer care across every location
                    we serve.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
              Built to make clean living easier
            </h2>
            <div className="mt-6 space-y-4 text-[var(--text-gray)] leading-8">
              <p>
                Perry Cleans began with a simple goal: help families and
                businesses maintain healthy spaces without the stress of
                inconsistent cleaning quality.
              </p>
              <p>
                We saw how difficult it was to find a reliable team that
                respected time, privacy, and hygiene standards. That gap
                inspired us to build a service centered on trust,
                professionalism, and clear communication.
              </p>
              <p>
                Today, we continue to stand out through trained cleaners,
                transparent service delivery, and a customer-first mindset that
                keeps clients coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-4 md:py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-gray)]">
                Founder Message
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Meet the leadership behind Perry Cleans
              </h2>
            </div>

            <div className="space-y-6">
              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-4">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden bg-[var(--background-offwhite)]">
                      <Image
                        src={founderImageOne}
                        alt="First founder of Perry Cleans"
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        quality={70}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-xl font-semibold text-[var(--brand-charcoal)]">
                      John Fidelis Orji
                    </p>
                    <p className="text-sm text-[var(--text-gray)]">
                      Founder & CEO
                    </p>
                    <div className="mt-4 min-h-[150px] flex">
                      <p className="mt-auto ml-auto max-w-xl text-right italic text-[var(--text-gray)] leading-8">
                        “Excellence is not occasional, it is our daily standard.
                        Clean spaces help people do their best work and live
                        their best lives.”
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-4">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden bg-[var(--background-offwhite)]">
                      <Image
                        src={founderImageTwo}
                        alt="Second founder of Perry Cleans"
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        quality={70}
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-xl font-semibold text-[var(--brand-charcoal)]">
                      Musa Yazid Topa
                    </p>
                    <p className="text-sm text-[var(--text-gray)]">
                      Co-founder & CTO
                    </p>
                    <div className="mt-4 min-h-[150px] flex">
                      <p className="mt-auto ml-auto max-w-xl text-right italic text-[var(--text-gray)] leading-8">
                        “Great systems create simple experiences. Build with
                        care, and people feel the difference.”
                      </p>
                    </div>
                  </div>
                </div>
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
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Trusted results with every clean
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <article
                  key={index}
                  className="rounded-xl bg-white border border-[var(--ui-light-gray)] p-6 shadow-sm"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[var(--brand-primary)] text-white">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--brand-charcoal)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-gray)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-gray)]">
                Meet the Team
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-charcoal)]">
                Janitors behind every spotless result
              </h2>
            </div>

            <div className="space-y-8">
              {meetTheTeam.map((member, index) => {
                const imageOnRight = index % 2 === 0;
                return (
                  <article
                    key={index}
                    className="rounded-xl bg-white border border-[var(--ui-light-gray)] shadow-sm p-6 md:p-8"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      <div
                        className={`lg:col-span-5 ${
                          imageOnRight ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-gray)]">
                          Janitor Team
                        </p>
                        <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                          {member.title}
                        </h3>
                        <p className="mt-4 text-[var(--text-gray)] leading-8">
                          {member.text}
                        </p>
                      </div>

                      <div
                        className={`lg:col-span-7 ${
                          imageOnRight ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="relative w-full h-[260px] md:h-[340px] rounded-lg overflow-hidden bg-[var(--background-offwhite)]">
                          <Image
                            src={member.image}
                            alt={member.alt}
                            fill
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            quality={70}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import React from "react";

type Service = {
  id: number;
  title: string;
  desc: string;
  accent: string;
  icon: React.ReactNode;
};

export function IconBroom() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M3 21c0-4 4-8 8-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 10l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 7l5-5 2 2-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSpray() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 2h6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 8h10v12H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6l4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBuilding() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect
        x="3"
        y="3"
        width="7"
        height="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="7"
        width="7"
        height="14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 7h1M7 11h1M7 15h1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconMop() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M3 21s6-3 9-3 6 3 6 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 4l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconEvent() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className={`bg-white rounded-lg p-4 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition duration-200 text-left`}
      aria-labelledby={`service-${service.id}`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 rounded-full w-10 h-10 flex items-center justify-center ${service.accent}`}>
          <div className="text-white">{service.icon}</div>
        </div>
        <h3 id={`service-${service.id}`} className="text-base font-semibold text-[var(--brand-charcoal)]">
          {service.title}
        </h3>
      </div>
      <p className="mt-3 text-sm text-[var(--text-gray)]">{service.desc}</p>
    </article>
  );
}

type ServicesProps = {
  sectionLabel?: string;
  sectionHeading?: string;
};

export default function Services({
  sectionLabel = "Our Services",
  sectionHeading = "Cleaning services built for every need",
}: ServicesProps) {
  const services: Service[] = [
    {
      id: 1,
      title: "Residential Cleaning",
      desc: "Regular and deep cleaning for homes, tailored plans for families and busy households.",
      accent: "bg-[var(--brand-primary)]",
      icon: <IconBroom />,
    },
    {
      id: 2,
      title: "Office Cleaning",
      desc: "Reliable cleaning for offices and commercial spaces with flexible scheduling.",
      accent: "bg-[var(--brand-primary)]",
      icon: <IconBuilding />,
    },
    {
      id: 3,
      title: "Post-Construction Cleaning",
      desc: "Thorough deep cleans, sanitization, and specialty treatments for high-touch areas.",
      accent: "bg-[var(--brand-primary)]",
      icon: <IconSpray />,
    },
    {
      id: 4,
      title: "Events-Centers Cleaning",
      desc: "Pre-event preparations and efficient post-event cleanup for seamless experiences.",
      accent: "bg-[var(--brand-primary)]",
      icon: <IconMop />,
    },
    {
      id: 5,
      title: "Warehouse & Industrial Cleaning",
      desc: "High level and industrial cleaning readily available for spaces of this nature.",
      accent: "bg-[var(--brand-primary)]",
      icon: <IconEvent />,
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-[var(--text-gray)]">{sectionLabel}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)] mt-2">
              {sectionHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}

            <div className="lg:col-span-3 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                {services.slice(3).map((s) => (
                  <ServiceCard key={s.id} service={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

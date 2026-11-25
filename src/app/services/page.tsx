import type { Metadata } from "next";
import Image from "next/image";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";
import { Container, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal support, meal and home support, companionship, respite care, community support and short-term flexible care, built around the person.",
  alternates: { canonical: "/services" },
};

type Service = {
  slug: string;
  icon: ServiceIconName;
  title: string;
  intro: string[];
  items: string[];
  note?: string;
  close: string;
  photo?: { src: string; alt: string };
};

const services: Service[] = [
  {
    slug: "personal-support",
    icon: "hand",
    title: "Personal Support",
    intro: [
      "Within our permitted non-medical scope, KALEM will provide assistance with appropriate activities of daily living, including:",
    ],
    items: [
      "Dressing",
      "Grooming",
      "Bathing support",
      "Toileting assistance",
      "Eating assistance",
      "Mobility support",
      "Routine personal-care assistance",
    ],
    note: "Our approach is to encourage independence rather than unnecessarily taking over.",
    close: "Help where help is needed. Independence wherever possible.",
    photo: { src: "/photos/kalem-dressing-support.jpg", alt: "A KALEM caregiver helping an older woman put on her cardigan" },
  },
  {
    slug: "meal-and-home-support",
    icon: "meal",
    title: "Meal & Home Support",
    intro: ["A well-supported home can make everyday life easier. Our home-support services may include:"],
    items: [
      "Meal preparation",
      "Meal support",
      "Light housekeeping",
      "Laundry",
      "Linen changes",
      "Tidying and organization",
      "Routine household support",
    ],
    note: "The goal is not perfection.",
    close: "The goal is a safe, comfortable and manageable home environment.",
    photo: {
      src: "/photos/kalem-meal-preparation.jpg",
      alt: "A KALEM caregiver and an older woman preparing a fresh salad together",
    },
  },
  {
    slug: "companionship",
    icon: "chat",
    title: "Companionship & Socialization",
    intro: ["Sometimes the greatest need is simply not being alone. Our companionship services include:"],
    items: [
      "Conversation and social interaction",
      "Reading and recreational activities",
      "Games and hobbies",
      "Walks and appropriate activities",
      "Social engagement",
      "Emotional companionship",
      "Encouragement with meaningful routines",
    ],
    close: "Because companionship is not a luxury. Connection is part of wellbeing.",
    photo: {
      src: "/photos/kalem-activity-exercise.jpg",
      alt: "Two KALEM caregivers leading an older couple through gentle stretching exercises",
    },
  },
  {
    slug: "respite-care",
    icon: "cup",
    title: "Respite Care",
    intro: [
      "Family caregivers give enormously. But even the strongest caregiver needs support.",
      "At KALEM, we provide respite support designed to give family caregivers time to:",
    ],
    items: ["Rest", "Work", "Attend appointments", "Manage personal responsibilities", "Reconnect with family", "Simply breathe"],
    close: "Caring for the caregiver is part of caring for the family.",
  },
  {
    slug: "community-support",
    icon: "pin",
    title: "Community & Daily-Living Support",
    intro: ["Where appropriate and within our service scope, KALEM supports clients with:"],
    items: [
      "Errands",
      "Shopping assistance",
      "Community activities",
      "Walks",
      "Appointment accompaniment",
      "Social outings",
      "Maintaining meaningful routines",
    ],
    close: "We want the right support to help life remain meaningful.",
  },
  {
    slug: "flexible-support",
    icon: "calendar",
    title: "Short-Term & Flexible Support",
    intro: [
      "Life doesn't always follow a schedule. KALEM provides flexible support for appropriate short-term needs, including:",
    ],
    items: [
      "Temporary family-caregiver relief",
      "Increased support needs",
      "Short-term home assistance",
      "Transition periods",
      "Temporary caregiver absence",
    ],
    close: "When life changes, support should be able to change with it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Care that fits" accent="real life.">
        <p className="quote text-[24px] leading-snug text-purple">
          Every person is different. Every family is different. Every home is different.
        </p>
        <p>
          That is why KALEM does not believe in a one-size-fits-all approach. We begin by understanding the person, the family,
          the routine, the environment and the kind of support that is actually needed. Then we build care around that
          understanding.
        </p>
      </PageHero>

      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
        {/* side index */}
        <nav aria-label="Services on this page" className="hidden lg:block">
          <ol className="sticky top-40 space-y-1 border-l border-line">
            {services.map((s, i) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="-ml-px flex gap-3 border-l-2 border-transparent py-2 pl-5 text-[15px] text-muted no-underline hover:border-gold hover:text-purple"
                >
                  <span className="font-display text-[12px] text-gold">0{i + 1}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="overflow-hidden rounded-[32px] border border-line bg-white shadow-[0_30px_80px_-60px_rgb(36_10_49/0.5)]"
            >
              {s.photo && (
                <div className="relative aspect-[21/9] bg-cream">
                  <Image src={s.photo.src} alt={s.photo.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" />
                </div>
              )}
              <div className="grid gap-10 p-7 sm:p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:p-12">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-lilac text-purple">
                      <ServiceIcon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-display text-[12px] tracking-[0.2em] text-gold">0{i + 1} / 06</span>
                  </div>
                  <h2 className="subheading mt-6 text-[clamp(30px,3vw,40px)]">{s.title}</h2>
                  <div className="mt-4 space-y-3 text-muted">
                    {s.intro.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  {s.note && <p className="mt-4 font-medium text-plum">{s.note}</p>}
                </div>
                <div className="flex flex-col">
                  <ul className="tick-list rounded-[24px] bg-ivory p-6 sm:p-7">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="quote mt-6 border-l-2 border-gold pl-5 text-[22px] leading-snug text-purple">{s.close}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <CtaBand />
    </>
  );
}

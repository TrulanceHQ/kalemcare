import type { Metadata } from "next";
import Image from "next/image";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";
import Link from "next/link";
import { Arrow, CheckList, Container, CtaBand, PageHero, PhoneIcon } from "@/components/ui";

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
      <PageHero
        eyebrow="Our services"
        title={<>Care that fits <em>real life</em></>}
        photo={{ src: "/photos/kalem-companionship-tea.jpg", alt: "A KALEM caregiver holding hands with an older woman over a cup of tea", position: "60% center" }}
      >
        <p>Every person is different. Every family is different. Every home is different.</p>
        <p>
          That is why KALEM does not believe in a one-size-fits-all approach. We begin by understanding the person, the family,
          the routine, the environment and the kind of support that is actually needed. Then we build care around that
          understanding.
        </p>
      </PageHero>

      {/* quick jump links */}
      <nav aria-label="Services on this page" className="sticky top-[73px] z-30 border-b border-line bg-white/95 backdrop-blur md:top-[113px]">
        <Container className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="shrink-0 rounded-full border border-line px-4 py-1.5 text-[14px] font-medium whitespace-nowrap text-ink no-underline hover:border-purple hover:text-purple"
            >
              {s.title}
            </a>
          ))}
        </Container>
      </nav>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`py-16 md:py-24 ${i % 2 ? "bg-ivory" : "bg-white"}`}>
          <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={s.photo && i % 2 ? "lg:order-2" : ""}>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-lilac text-purple">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <h2 className="h2 mt-5">{s.title}</h2>
              <div className="lede mt-4 space-y-3">
                {s.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <CheckList items={s.items} className="mt-6 grid gap-x-6 space-y-0 gap-y-3 sm:grid-cols-2" />
              {s.note && <p className="mt-6 text-muted">{s.note}</p>}
              <p className="mt-2 font-serif text-[22px] leading-snug text-purple">{s.close}</p>
            </div>
            {s.photo ? (
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-line ${i % 2 ? "lg:order-1" : ""}`}>
                <Image src={s.photo.src} alt={s.photo.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
            ) : (
              <div className="card bg-white lg:mt-16">
                <p className="eyebrow">Get started</p>
                <p className="mt-3 font-serif text-[24px] leading-snug text-plum">Start with a conversation.</p>
                <p className="mt-2 text-muted">You don&apos;t have to figure everything out alone.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Start a conversation <Arrow />
                  </Link>
                  <a href="tel:+14374608142" className="btn-secondary">
                    <PhoneIcon /> (437) 460-8142
                  </a>
                </div>
              </div>
            )}
          </Container>
        </section>
      ))}

      <CtaBand />
    </>
  );
}

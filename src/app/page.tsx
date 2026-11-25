import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CarePicker from "@/components/CarePicker";
import ServiceIcon from "@/components/ServiceIcon";
import { Arrow, CheckIcon, Container, CtaBand, PhoneIcon, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const services = [
  { slug: "personal-support", icon: "hand", title: "Personal Support", summary: "Help where help is needed. Independence wherever possible." },
  { slug: "meal-and-home-support", icon: "meal", title: "Meal & Home Support", summary: "A safe, comfortable and manageable home environment." },
  { slug: "companionship", icon: "chat", title: "Companionship & Socialization", summary: "Sometimes the greatest need is simply not being alone." },
  { slug: "respite-care", icon: "cup", title: "Respite Care", summary: "Caring for the caregiver is part of caring for the family." },
  { slug: "community-support", icon: "pin", title: "Community & Daily-Living Support", summary: "We want the right support to help life remain meaningful." },
  { slug: "flexible-support", icon: "calendar", title: "Short-Term & Flexible Support", summary: "When life changes, support should be able to change with it." },
] as const;

const qualities = [
  {
    icon: "star",
    title: "Excellence in Care",
    lead: "We believe care should be intentional, professional and consistent.",
    body: "We don't simply send someone into a home and hope everything works out. We assess needs, understand routines, establish expectations and create systems that support quality.",
  },
  {
    icon: "heart",
    title: "Compassion",
    lead: "People are not tasks.",
    body: "The person receiving care deserves to feel heard, respected and valued. Our caregivers bring patience, kindness and genuine human connection to every interaction.",
  },
  {
    icon: "clock",
    title: "Reliability",
    lead: "Care is valuable when people can depend on it.",
    body: "KALEM is built around communication, scheduling, documentation, follow-up and accountability so that our clients and families know there is a professional team behind the care.",
  },
] as const;

const experience = [
  { title: "Listen", body: "We understand before we act." },
  { title: "Assess", body: "We identify the real support needs." },
  { title: "Plan", body: "We create clear expectations." },
  { title: "Match", body: "We connect the right caregiver to the assignment." },
  { title: "Support", body: "We stay connected throughout service." },
  { title: "Improve", body: "We listen, measure and continuously strengthen our care." },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-ivory">
        <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Non-medical home care · Serving Families</p>
            <h1 className="h1 mt-5">
              More than care. <em>A partner you can trust.</em>
            </h1>
            <p className="lede mt-6 max-w-[540px]">
              When someone you love needs support, you are not simply looking for someone to help with daily tasks. You are
              looking for someone you can <strong className="font-semibold text-ink">trust</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a conversation <Arrow />
              </Link>
              <a href="tel:+14374608142" className="btn-secondary">
                <PhoneIcon /> (437) 460-8142
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-medium text-plum">
              {["Excellence in Care", "Compassionate Care", "Reliable Support"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-lilac text-purple">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-line lg:aspect-[4/4.2]">
              <Image
                src="/photos/kalem-companionship-tea.jpg"
                alt="A KALEM caregiver holding hands with an older woman over a cup of tea in her living room"
                fill
                priority
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 shadow-[0_20px_50px_-24px_rgb(46_15_61/0.4)] sm:left-auto sm:-right-4 sm:max-w-[300px]">
              <p className="font-serif text-[19px] leading-snug text-plum">Care You Can Count On. Dignity You Can Feel.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── That is KALEM ────────────────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ul className="space-y-4 font-serif text-[clamp(22px,2.2vw,28px)] leading-snug text-plum">
            <li>Someone who will show up.</li>
            <li>Someone who will listen.</li>
            <li>Someone who will treat your loved one with respect.</li>
            <li className="text-muted">
              Someone who understands that every person has a story, a routine, preferences, fears, strengths and a life that
              deserves to be honoured.
            </li>
          </ul>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="h2 mt-4">That is KALEM.</h2>
            <p className="lede mt-5">
              KALEM Home Care Services provides compassionate, dependable non-medical home care and support designed around the
              individual—not simply around a list of tasks.
            </p>
            <p className="mt-4">
              We help individuals maintain comfort, independence and dignity in the place they know best:{" "}
              <strong className="font-semibold text-plum">home.</strong>
            </p>
            <div className="mt-8 rounded-[20px] bg-gold-soft p-7">
              <p className="text-[15px] text-muted">And we give families something equally important:</p>
              <p className="mt-1 font-serif text-[28px] text-plum">Peace of mind.</p>
              <p className="mt-2">
                When the right support is in place, families can spend less time worrying whether care is being provided—and
                more time being family.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Services ─────────────────────────────────────── */}
      <Section tone="ivory">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our services" title={<>Care that fits <em>real life</em></>}>
            <p>Every person is different. Every family is different. Every home is different.</p>
          </SectionHeading>
          <Link href="/services" className="btn-secondary">
            All services <Arrow />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="card group flex flex-col text-ink no-underline transition hover:-translate-y-0.5 hover:border-purple/30 hover:text-ink hover:shadow-[0_20px_40px_-28px_rgb(46_15_61/0.35)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-lilac text-purple">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="h3 mt-6">{s.title}</h3>
              <p className="mt-2 text-muted">{s.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-purple">
                Learn more <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Why KALEM ────────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow="Why KALEM?" title="Great care has three essential qualities" center />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {qualities.map((q) => (
            <div key={q.title}>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-[#9a6b2f]">
                <ServiceIcon name={q.icon} className="h-6 w-6" />
              </span>
              <h3 className="h3 mt-5">{q.title}</h3>
              <p className="mt-3 font-semibold text-plum">{q.lead}</p>
              <p className="mt-2 text-muted">{q.body}</p>
            </div>
          ))}
        </div>

        <figure className="mt-20 grid items-center overflow-hidden rounded-[28px] bg-ivory lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[380px]">
            <Image
              src="/photos/kalem-meal-preparation.jpg"
              alt="A KALEM caregiver and an older woman preparing a fresh salad together"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <blockquote className="p-8 sm:p-12 lg:p-14">
            <p className="eyebrow">Our promise</p>
            <p className="mt-4 font-serif text-[clamp(28px,3vw,38px)] leading-[1.2] text-plum">
              We care for the person—<em>not simply the task.</em>
            </p>
            <p className="mt-5 text-muted">
              Home care should help a person continue living life with as much independence, choice and dignity as possible.
            </p>
          </blockquote>
        </figure>
      </Section>

      {/* ── The KALEM experience ─────────────────────────── */}
      <Section tone="ivory">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="The KALEM experience" title="How we work with you" />
          <Link href="/how-it-works" className="btn-secondary">
            How it works <Arrow />
          </Link>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((e, i) => (
            <li key={e.title} className="card flex gap-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-purple text-[15px] font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="h3">{e.title}.</h3>
                <p className="mt-1 text-muted">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Who needs care? ──────────────────────────────── */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionHeading eyebrow="For families" title="You should never have to wonder" />
            <ul className="mt-7 space-y-2 text-[18px] text-plum">
              <li>&ldquo;Who is looking after Mom?&rdquo;</li>
              <li>&ldquo;Will someone actually show up?&rdquo;</li>
              <li>&ldquo;What happens if something changes?&rdquo;</li>
              <li>&ldquo;Who do I call?&rdquo;</li>
            </ul>
            <p className="mt-6 font-semibold text-purple">KALEM is designed to give families answers.</p>
            <Link href="/families" className="mt-4 inline-flex items-center gap-1.5 font-semibold">
              More for families <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <CarePicker
            people={["A parent", "My spouse or partner", "Myself", "Someone else"]}
            needs={[
              "A companion for an aging parent",
              "Help with daily routines",
              "Personal support",
              "Respite for a family caregiver",
              "Help around the home",
              "Short-term support",
              "Regular recurring care",
            ]}
          />
        </div>
      </Section>

      {/* ── Organizations ────────────────────────────────── */}
      <section className="bg-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-line p-8 sm:p-12 md:flex-row md:items-center">
            <div className="max-w-[680px]">
              <p className="eyebrow">For communities &amp; care organizations</p>
              <h2 className="h2 mt-4">A dependable care-support partner</h2>
              <p className="mt-4 text-muted">
                KALEM is designed to serve individuals and families directly while also partnering with organizations that need
                dependable care-support resources.
              </p>
            </div>
            <Link href="/organizations" className="btn-secondary shrink-0">
              Partner with KALEM <Arrow />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CarePicker from "@/components/CarePicker";
import ServiceIcon from "@/components/ServiceIcon";
import { Arrow, ArchMotif, ArchPhoto, Container, CtaBand, Eyebrow, PhoneIcon } from "@/components/ui";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const someone = [
  "Someone who will show up.",
  "Someone who will listen.",
  "Someone who will treat your loved one with respect.",
  "Someone who understands that every person has a story, a routine, preferences, fears, strengths and a life that deserves to be honoured.",
];

const qualities = [
  {
    title: "Excellence in Care",
    body: [
      "We believe care should be intentional, professional and consistent.",
      "We don't simply send someone into a home and hope everything works out.",
      "We assess needs, understand routines, establish expectations and create systems that support quality.",
    ],
  },
  {
    title: "Compassion",
    body: [
      "People are not tasks.",
      "The person receiving care deserves to feel heard, respected and valued.",
      "Our caregivers bring patience, kindness and genuine human connection to every interaction.",
    ],
  },
  {
    title: "Reliability",
    body: [
      "Care is valuable when people can depend on it.",
      "KALEM is built around communication, scheduling, documentation, follow-up and accountability so that our clients and families know there is a professional team behind the care.",
    ],
  },
];

const experience = [
  { title: "Listen.", body: "We understand before we act." },
  { title: "Assess.", body: "We identify the real support needs." },
  { title: "Plan.", body: "We create clear expectations." },
  { title: "Match.", body: "We connect the right caregiver to the assignment." },
  { title: "Support.", body: "We stay connected throughout service." },
  { title: "Improve.", body: "We listen, measure and continuously strengthen our care." },
];

const roman = ["I", "II", "III"];

const services = [
  { slug: "personal-support", icon: "hand", title: "Personal Support", summary: "Help where help is needed. Independence wherever possible." },
  { slug: "meal-and-home-support", icon: "meal", title: "Meal & Home Support", summary: "A safe, comfortable and manageable home environment." },
  { slug: "companionship", icon: "chat", title: "Companionship & Socialization", summary: "Sometimes the greatest need is simply not being alone." },
  { slug: "respite-care", icon: "cup", title: "Respite Care", summary: "Caring for the caregiver is part of caring for the family." },
  { slug: "community-support", icon: "pin", title: "Community & Daily-Living Support", summary: "We want the right support to help life remain meaningful." },
  { slug: "flexible-support", icon: "calendar", title: "Short-Term & Flexible Support", summary: "When life changes, support should be able to change with it." },
] as const;

const photos = [
  { src: "/photos/kalem-dressing-support.jpg", alt: "A KALEM caregiver helping an older woman put on her cardigan", caption: "Personal support" },
  { src: "/photos/kalem-meal-preparation.jpg", alt: "A KALEM caregiver and an older woman preparing a fresh salad together", caption: "Meal & home support" },
  { src: "/photos/kalem-activity-exercise.jpg", alt: "Two KALEM caregivers leading an older couple through gentle stretching exercises", caption: "Companionship & Socialization" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="paper relative overflow-hidden">
        <Container className="grid items-center gap-14 pt-12 pb-20 md:pt-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:pb-28">
          <div>
            <Eyebrow>Non-medical home care · Serving Families</Eyebrow>
            <h1 className="display mt-7">
              More than care.
              <br />
              <span className="font-medium text-bronze italic">A partner you can trust.</span>
            </h1>
            <p className="quote mt-7 text-[clamp(22px,2.2vw,28px)] leading-snug text-plum">Care You Can Count On. Dignity You Can Feel.</p>
            <p className="lede mt-5 max-w-[560px]">
              When someone you love needs support, you are not simply looking for someone to help with daily tasks. You are
              looking for someone you can <strong className="font-semibold text-ink">trust</strong>.
            </p>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <Link href="/contact" className="btn-primary">
                Start a conversation <Arrow />
              </Link>
              <a href="tel:+14374608142" className="btn-ghost">
                <PhoneIcon /> Call (437) 460-8142
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:mr-4">
            <ArchPhoto
              src="/photos/kalem-companionship-tea.jpg"
              alt="A KALEM caregiver holding hands with an older woman over a cup of tea in her living room"
              sizes="(min-width: 1024px) 480px, 90vw"
              priority
              position="62% center"
              className="aspect-[4/5]"
            />
            <div className="absolute -bottom-8 -left-4 max-w-[270px] rounded-3xl border border-line bg-ivory/95 p-5 shadow-[0_24px_60px_-30px_rgb(36_10_49/0.5)] backdrop-blur sm:-left-12">
              <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-bronze uppercase">That is KALEM</p>
              <p className="quote mt-2 text-[21px] leading-snug text-purple">Someone who will show up. Someone who will listen.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Strapline band ───────────────────────────────── */}
      <div className="border-y border-gold/40 bg-purple py-5 text-gold-light">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 font-display text-[13px] font-semibold tracking-[0.26em] uppercase">
          <span>Excellence in Care</span>
          <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span>Compassionate Care</span>
          <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span>Reliable Support</span>
        </Container>
      </div>

      {/* ── That is KALEM ────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-24">
          <ol className="space-y-7">
            {someone.map((line, i) => (
              <li key={line} className="grid grid-cols-[48px_minmax(0,1fr)] items-baseline gap-4 border-b border-line pb-7 last:border-0">
                <span className="font-display text-[13px] text-gold">0{i + 1}</span>
                <span className={`quote leading-[1.2] text-purple ${i === 3 ? "text-[clamp(22px,2.2vw,28px)]" : "text-[clamp(28px,3.2vw,40px)]"}`}>
                  {line}
                </span>
              </li>
            ))}
          </ol>
          <div className="lg:pt-4">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="heading mt-5">That is KALEM.</h2>
            <p className="lede mt-6">
              KALEM Home Care Services provides compassionate, dependable non-medical home care and support designed around the
              individual—not simply around a list of tasks.
            </p>
            <p className="mt-5">
              We help individuals maintain comfort, independence and dignity in the place they know best:{" "}
              <strong className="font-semibold text-purple">home.</strong>
            </p>
            <div className="relative mt-10 overflow-hidden rounded-[28px] bg-cream p-8">
              <ArchMotif className="absolute -right-8 -bottom-16 h-[220px] w-[170px] text-gold/40" />
              <p className="relative text-[15px] text-muted">And we give families something equally important:</p>
              <p className="relative mt-1 font-serif text-[40px] leading-tight font-semibold text-purple italic">Peace of mind.</p>
              <p className="relative mt-3 max-w-[440px]">
                When the right support is in place, families can spend less time worrying whether care is being provided—and
                more time being family.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Three qualities ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-plum py-24 text-sand md:py-32">
        <ArchMotif className="absolute -top-20 -left-20 h-[520px] w-[400px] text-gold/10" />
        <Container className="relative">
          <div className="max-w-[720px]">
            <Eyebrow light>Why KALEM?</Eyebrow>
            <h2 className="heading mt-5 text-ivory">
              Great care has three <span className="font-medium text-gold-light italic">essential</span> qualities
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {qualities.map((q, i) => (
              <article key={q.title} className="arch flex flex-col border border-gold/30 bg-white/[0.03] px-8 pt-20 pb-10">
                <span className="mx-auto font-display text-[15px] tracking-[0.2em] text-gold">{roman[i]}</span>
                <h3 className="mt-4 text-center text-[32px] leading-tight text-ivory">{q.title}</h3>
                <div className="mx-auto my-6 h-px w-12 bg-gold/60" />
                <div className="space-y-3 text-[16px] leading-relaxed">
                  {q.body.map((b, j) => (
                    <p key={b} className={j === 0 ? "quote text-[21px] leading-snug text-gold-light" : ""}>
                      {b}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-20 grid items-center gap-8 border-t border-white/10 pt-14 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14">
            <Eyebrow light>Our promise</Eyebrow>
            <div>
              <p className="font-serif text-[clamp(30px,3.6vw,46px)] leading-[1.1] font-semibold text-ivory">
                We care for the person—<span className="font-medium text-gold-light italic">not simply the task.</span>
              </p>
              <p className="mt-4 max-w-[640px] text-sand/90">
                Home care should help a person continue living life with as much independence, choice and dignity as possible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <Eyebrow>Our services</Eyebrow>
              <h2 className="heading mt-5">
                Care that fits <span className="font-medium text-bronze italic">real life</span>
              </h2>
            </div>
            <p className="lede">
              Every person is different. Every family is different. Every home is different. We begin by understanding the
              person, then build care around that understanding.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[32px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group relative flex flex-col bg-ivory p-8 text-ink no-underline transition-colors hover:bg-white hover:text-ink md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-lilac text-purple transition-colors group-hover:bg-purple group-hover:text-gold-light">
                    <ServiceIcon name={s.icon} className="h-8 w-8" />
                  </span>
                  <span className="font-display text-[12px] text-gold">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-[28px] leading-tight">{s.title}</h3>
                <p className="mt-3 text-muted">{s.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[15px] font-medium text-purple">
                  What&apos;s included <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {photos.map((p) => (
                <figure key={p.src} className="group relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent px-6 pt-16 pb-5 font-serif text-[22px] font-semibold text-ivory">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
          </div>
        </Container>
      </section>

      {/* ── The KALEM experience ─────────────────────────── */}
      <section className="paper border-y border-line py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The KALEM experience</Eyebrow>
              <h2 className="heading mt-5">
                Six words, <span className="font-medium text-bronze italic">one relationship</span>
              </h2>
            </div>
            <Link href="/how-it-works" className="btn-ghost">
              How KALEM works <Arrow />
            </Link>
          </div>
          <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            <span aria-hidden className="absolute top-7 right-[8%] left-[8%] hidden h-px bg-gold/60 lg:block" />
            {experience.map((e, i) => (
              <li key={e.title} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold bg-ivory font-display text-[14px] text-purple">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[28px] leading-none">{e.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{e.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Who needs care? ──────────────────────────────── */}
      <section className="py-24 md:py-32">
        <Container className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="lg:sticky lg:top-40">
            <Eyebrow>For families</Eyebrow>
            <h2 className="heading mt-5">
              You should never have to <span className="font-medium text-bronze italic">wonder</span>
            </h2>
            <ul className="mt-8 space-y-3">
              {['"Who is looking after Mom?"', '"Will someone actually show up?"', '"What happens if something changes?"', '"Who do I call?"'].map(
                (q) => (
                  <li key={q} className="quote w-fit rounded-[22px_22px_22px_6px] bg-lilac px-5 py-2.5 text-[21px] text-plum">
                    {q}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-8 text-[19px] font-medium text-purple">KALEM is designed to give families answers.</p>
            <Link href="/families" className="mt-6 inline-flex items-center gap-2 font-medium">
              More for families <Arrow />
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
        </Container>
      </section>

      {/* ── Two doors: families and organizations ───────── */}
      <section className="pb-8">
        <Container className="grid gap-6 md:grid-cols-2">
          <DoorCard
            href="/families"
            eyebrow="For families"
            title="One care team. Clear communication."
            body="Whether you need a few hours of weekly support or a more structured care arrangement, KALEM can help you explore an appropriate solution."
            tone="light"
          />
          <DoorCard
            href="/organizations"
            eyebrow="For communities & care organizations"
            title="A dependable care-support partner"
            body="KALEM partners with retirement and assisted-living communities that need dependable care-support resources."
            tone="dark"
          />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function DoorCard({
  href,
  eyebrow,
  title,
  body,
  tone,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  tone: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[340px] flex-col overflow-hidden rounded-[32px] p-9 no-underline md:p-12 ${
        dark ? "bg-purple text-sand hover:text-sand" : "bg-cream text-ink hover:text-ink"
      }`}
    >
      <ArchMotif className={`absolute -right-10 -bottom-20 h-[300px] w-[230px] ${dark ? "text-gold/25" : "text-gold/50"}`} />
      <Eyebrow light={dark}>{eyebrow}</Eyebrow>
      <h3 className={`subheading relative mt-6 max-w-[420px] text-[clamp(30px,3vw,40px)] ${dark ? "text-ivory" : ""}`}>{title}</h3>
      <p className="relative mt-4 max-w-[460px]">{body}</p>
      <span className={`relative mt-auto inline-flex items-center gap-2 pt-8 font-medium ${dark ? "text-gold-light" : "text-purple"}`}>
        Learn more <Arrow className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

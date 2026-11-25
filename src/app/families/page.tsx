import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Container, CtaBand, Eyebrow, PageHero, PhoneIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "For families",
  description:
    "One care team, clear communication and professional oversight. From a few hours of weekly support to regular recurring care, start with a conversation.",
  alternates: { canonical: "/families" },
};

export default function FamiliesPage() {
  return (
    <>
      <PageHero eyebrow="For families" title="You should never" accent="have to wonder.">
        <p>KALEM is designed to give families answers.</p>
      </PageHero>

      {/* ── The questions families ask ───────────────────── */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <ul className="space-y-4">
              {['"Who is looking after Mom?"', '"Will someone actually show up?"', '"What happens if something changes?"', '"Who do I call?"'].map(
                (q, i) => (
                  <li
                    key={q}
                    className={`quote w-fit rounded-[26px_26px_26px_6px] bg-lilac px-6 py-3.5 text-[clamp(22px,2.4vw,30px)] text-plum ${
                      i % 2 ? "sm:ml-16" : ""
                    }`}
                  >
                    {q}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 rounded-[28px] bg-purple p-8 text-sand sm:p-10">
              <p className="font-display text-[12px] tracking-[0.24em] text-gold-light uppercase">Our answer</p>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["One care team.", "Clear communication.", "Professional oversight.", "Greater peace of mind."].map((p) => (
                  <li key={p} className="flex items-center gap-3 font-serif text-[23px] leading-tight font-semibold text-ivory">
                    <span aria-hidden className="h-2 w-2 shrink-0 rotate-45 bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="arch absolute inset-0 -translate-x-4 translate-y-4 border border-gold" />
            <div className="arch relative aspect-[4/5] overflow-hidden bg-cream">
              <Image
                src="/photos/kalem-personal-care.jpg"
                alt="A KALEM caregiver gently helping an older woman with her morning routine"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── What you may be looking for ──────────────────── */}
      <section className="paper border-y border-line py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <Eyebrow>Support that fits</Eyebrow>
            <h2 className="heading mt-5">
              A few hours a week, or <span className="font-medium text-bronze italic">something more</span>
            </h2>
            <p className="lede mt-6">
              Whether you need a few hours of weekly support or a more structured care arrangement, KALEM can help you explore an
              appropriate solution.
            </p>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <Link href="/contact" className="btn-primary">
                Start a conversation <Arrow />
              </Link>
              <a href="tel:+14374608142" className="btn-ghost">
                <PhoneIcon /> (437) 460-8142
              </a>
            </div>
          </div>
          <div className="rounded-[32px] border border-line bg-white p-8 sm:p-10">
            <p className="font-medium text-plum">You may be looking for:</p>
            <ul className="mt-6 divide-y divide-line">
              {[
                "A companion for an aging parent",
                "Help with daily routines",
                "Personal support",
                "Respite for a family caregiver",
                "Help around the home",
                "Short-term support",
                "Regular recurring care",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/contact?need=${encodeURIComponent(item)}#enquiry`}
                    className="group flex items-center justify-between gap-4 py-4 font-serif text-[24px] font-semibold text-purple no-underline"
                  >
                    {item}
                    <Arrow className="shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

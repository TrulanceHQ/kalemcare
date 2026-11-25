import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CheckIcon, CtaBand, PageHero, PhoneIcon, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "For families",
  description:
    "One care team, clear communication and professional oversight. From a few hours of weekly support to regular recurring care, start with a conversation.",
  alternates: { canonical: "/families" },
};

export default function FamiliesPage() {
  return (
    <>
      <PageHero
        eyebrow="For families"
        title={<>You should never have to <em>wonder</em></>}
        photo={{
          src: "/photos/kalem-personal-care.jpg",
          alt: "A KALEM caregiver gently helping an older woman with her morning routine",
          position: "center 30%",
        }}
      >
        <p>KALEM is designed to give families answers.</p>
      </PageHero>

      {/* ── Questions and answers ────────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="The questions families ask" />
            <ul className="mt-8 space-y-3">
              {['"Who is looking after Mom?"', '"Will someone actually show up?"', '"What happens if something changes?"', '"Who do I call?"'].map(
                (q) => (
                  <li key={q} className="rounded-xl bg-ivory px-5 py-4 font-serif text-[21px] text-plum">
                    {q}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <SectionHeading title="What KALEM gives you" />
            <ul className="card mt-8 divide-y divide-line px-6 py-2 sm:px-7 sm:py-2">
              {["One care team.", "Clear communication.", "Professional oversight.", "Greater peace of mind."].map((p) => (
                <li key={p} className="flex items-center gap-4 py-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lilac text-purple">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-[18px] font-semibold text-plum">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              Whether you need a few hours of weekly support or a more structured care arrangement, KALEM can help you explore an
              appropriate solution.
            </p>
          </div>
        </div>
      </Section>

      {/* ── What you may be looking for ──────────────────── */}
      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Start with a conversation" title="You may be looking for">
              <p>You don&apos;t have to figure everything out alone.</p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a conversation <Arrow />
              </Link>
              <a href="tel:+14374608142" className="btn-secondary">
                <PhoneIcon /> (437) 460-8142
              </a>
            </div>
          </div>
          <ul className="card divide-y divide-line p-2 sm:p-3">
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
                  className="group flex items-center justify-between gap-4 rounded-xl px-5 py-4 text-[18px] font-medium text-plum no-underline hover:bg-ivory hover:text-purple"
                >
                  {item}
                  <Arrow className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-purple" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

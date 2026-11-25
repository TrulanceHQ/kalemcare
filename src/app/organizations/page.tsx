import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ArchMotif, Container, CtaBand, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "For organizations",
  description:
    "Qualified support personnel for retirement and assisted-living communities: vacation and sick-call coverage, backup PSWs and caregivers, and temporary assignments.",
  alternates: { canonical: "/organizations" },
};

const why = [
  {
    title: "A professional approach",
    body: "KALEM is building systems for intake, assessment, scheduling, documentation, incident management and quality assurance.",
  },
  {
    title: "A human approach",
    body: "We never want systems to replace humanity. Our systems exist to make compassionate care more consistent.",
  },
  {
    title: "A responsive approach",
    body: "Communication matters. When something changes, our partners should know who to contact and what happens next.",
  },
  {
    title: "A quality-driven approach",
    body: "We don't define quality by good intentions alone. We have high standards, monitor performance and act on feedback.",
  },
];

export default function OrganizationsPage() {
  return (
    <>
      <PageHero eyebrow="For communities & care organizations" title="A dependable" accent="care-support partner.">
        <p>
          KALEM is designed to serve individuals and families directly while also partnering with organizations that need
          dependable care-support resources.
        </p>
      </PageHero>

      {/* ── Retirement and assisted-living ───────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="relative grid overflow-hidden rounded-[36px] bg-plum text-sand lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <ArchMotif className="absolute -bottom-24 -left-16 h-[420px] w-[320px] text-gold/15" />
            <div className="relative p-8 sm:p-12 md:p-16">
              <Eyebrow light>Staffing support</Eyebrow>
              <h2 className="heading mt-5 text-ivory">Retirement &amp; assisted-living communities</h2>
              <p className="mt-6 text-sand">
                KALEM can provide qualified support personnel according to agreed service requirements. Potential staffing
                arrangements include:
              </p>
              <p className="quote mt-10 text-[26px] leading-snug text-gold-light">
                When in need of a caregiver, KALEM can be part of your response plan.
              </p>
            </div>
            <ol className="relative grid content-center gap-3 bg-white/[0.04] p-8 sm:p-12 md:p-16">
              {[
                "Vacation coverage",
                "Sick-call coverage",
                "Backup PSWs and caregivers",
                "Temporary assignments",
                "Short-notice coverage where available",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-5 rounded-2xl border border-white/10 px-5 py-4">
                  <span className="font-display text-[12px] text-gold">0{i + 1}</span>
                  <span className="font-serif text-[24px] font-semibold text-ivory">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── Why partner ──────────────────────────────────── */}
      <section className="paper border-y border-line py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Why partner with KALEM?</Eyebrow>
              <h2 className="heading mt-5">
                Systems that serve <span className="font-medium text-bronze italic">compassion</span>
              </h2>
            </div>
            <Link href="/contact?as=A%20retirement%20or%20assisted-living%20community#enquiry" className="btn-primary">
              Talk to us about staffing <Arrow />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {why.map((w, i) => (
              <article key={w.title} className="rounded-[28px] border border-line bg-white p-8 sm:p-10">
                <span className="font-display text-[12px] tracking-[0.2em] text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-[30px] leading-tight">{w.title}</h3>
                <p className="mt-3 text-muted">{w.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Let's talk about the care you need."
        body="KALEM is ready to have the conversation."
      />
    </>
  );
}

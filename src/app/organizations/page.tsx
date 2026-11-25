import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import { Arrow, CheckList, CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "For organizations",
  description:
    "Qualified support personnel for retirement and assisted-living communities: vacation and sick-call coverage, backup PSWs and caregivers, and temporary assignments.",
  alternates: { canonical: "/organizations" },
};

const why = [
  {
    icon: "chart",
    title: "A professional approach",
    body: "KALEM is building systems for intake, assessment, scheduling, documentation, incident management and quality assurance.",
  },
  {
    icon: "heart",
    title: "A human approach",
    body: "We never want systems to replace humanity. Our systems exist to make compassionate care more consistent.",
  },
  {
    icon: "message",
    title: "A responsive approach",
    body: "Communication matters. When something changes, our partners should know who to contact and what happens next.",
  },
  {
    icon: "star",
    title: "A quality-driven approach",
    body: "We don't define quality by good intentions alone. We have high standards, monitor performance and act on feedback.",
  },
] as const;

export default function OrganizationsPage() {
  return (
    <>
      <PageHero
        eyebrow="For communities & care organizations"
        title={<>A dependable <em>care-support partner</em></>}
        photo={{
          src: "/photos/kalem-activity-exercise.jpg",
          alt: "Two KALEM caregivers leading an older couple through gentle stretching exercises",
        }}
      >
        <p>
          KALEM is designed to serve individuals and families directly while also partnering with organizations that need
          dependable care-support resources.
        </p>
      </PageHero>

      {/* ── Retirement and assisted-living ───────────────── */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow="Staffing support" title="Retirement & assisted-living communities">
            <p>
              KALEM can provide qualified support personnel according to agreed service requirements. Potential staffing
              arrangements include:
            </p>
          </SectionHeading>
          <div className="card sm:p-10">
            <CheckList
              items={[
                "Vacation coverage",
                "Sick-call coverage",
                "Backup PSWs and caregivers",
                "Temporary assignments",
                "Short-notice coverage where available",
              ]}
              className="text-[18px]"
            />
            <p className="mt-8 border-t border-line pt-6 font-serif text-[22px] leading-snug text-plum">
              When in need of a caregiver, KALEM can be part of your response plan.
            </p>
            <Link href="/contact?as=A%20retirement%20or%20assisted-living%20community#enquiry" className="btn-primary mt-6">
              Talk to us about staffing <Arrow />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Why partner ──────────────────────────────────── */}
      <Section tone="ivory">
        <SectionHeading eyebrow="Why partner with KALEM?" title="Systems that make compassionate care consistent" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {why.map((w) => (
            <article key={w.title} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-lilac text-purple">
                <ServiceIcon name={w.icon} className="h-6 w-6" />
              </span>
              <h3 className="h3 mt-5">{w.title}</h3>
              <p className="mt-2 text-muted">{w.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand title="Let's talk about the care you need." body="KALEM is ready to have the conversation." />
    </>
  );
}

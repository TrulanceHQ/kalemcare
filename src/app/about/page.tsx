import type { Metadata } from "next";
import Image from "next/image";
import ServiceIcon from "@/components/ServiceIcon";
import { CheckIcon, CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About KALEM",
  description:
    "KALEM is building a different kind of care experience: compassion supported by systems, and dignity never treated as optional.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "star", title: "Excellence in Care", body: "We have high standards." },
  { icon: "heart", title: "Compassion", body: "We treat our clients with patience, kindness and understanding." },
  { icon: "clock", title: "Reliability", body: "We do what we say we will do." },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="The KALEM difference" title={<>A different kind of <em>care experience</em></>}>
        <p>There are many organizations that provide care. Our goal is not simply to be another one.</p>
      </PageHero>

      {/* ── The difference ───────────────────────────────── */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="KALEM is building a different kind of care experience." />
            <ul className="mt-8 space-y-4">
              {[
                "One where compassion is supported by systems.",
                "Where caregivers are supported by management.",
                "Where families know who to call.",
                "Where concerns are addressed.",
                "Where quality is measured.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-4 text-[18px]">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lilac text-purple">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-serif text-[24px] text-purple">Where dignity is never treated as optional.</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-line">
            <Image
              src="/photos/kalem-dressing-support.jpg"
              alt="A KALEM caregiver helping an older woman put on her cardigan"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ── Promise ──────────────────────────────────────── */}
      <Section tone="ivory">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="eyebrow">Our promise</p>
          <p className="mt-5 font-serif text-[clamp(30px,3.6vw,46px)] leading-[1.15] text-plum">
            We care for the person—<em>not simply the task.</em>
          </p>
          <p className="lede mx-auto mt-6 max-w-[620px]">
            Home care should help a person continue living life with as much independence, choice and dignity as possible.
          </p>
        </div>
      </Section>

      {/* ── Core values ──────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow="Our core values" title="What we stand for" center />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="card text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-[#9a6b2f]">
                <ServiceIcon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="h3 mt-5">{v.title}</h3>
              <p className="mt-2 text-muted">{v.body}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[760px] border-t border-line pt-12 text-center">
          <p className="eyebrow">Our commitment</p>
          <p className="mt-4 text-[20px] text-plum">At KALEM, we believe care should be timely, patient and intentional.</p>
          <p className="mt-3 font-serif text-[24px] leading-snug text-purple">
            We are here to provide the support—and the peace of mind—that makes home feel like home.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

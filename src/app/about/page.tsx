import type { Metadata } from "next";
import { ArchMotif, Container, CtaBand, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About KALEM",
  description:
    "KALEM is building a different kind of care experience: compassion supported by systems, and dignity never treated as optional.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Excellence in Care", body: "We have high standards." },
  { title: "Compassion", body: "We treat our clients with patience, kindness and understanding." },
  { title: "Reliability", body: "We do what we say we will do." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="The KALEM difference" title="A different kind of" accent="care experience.">
        <p>There are many organizations that provide care. Our goal is not simply to be another one.</p>
      </PageHero>

      {/* ── The difference ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <h2 className="heading">KALEM is building a different kind of care experience.</h2>
          </div>
          <ol className="border-t border-line">
            {[
              "One where compassion is supported by systems.",
              "Where caregivers are supported by management.",
              "Where families know who to call.",
              "Where concerns are addressed.",
              "Where quality is measured.",
            ].map((line, i) => (
              <li key={line} className="flex items-baseline gap-6 border-b border-line py-5">
                <span className="font-display text-[12px] text-gold">0{i + 1}</span>
                <span className="font-serif text-[clamp(24px,2.6vw,32px)] leading-snug font-medium text-plum">{line}</span>
              </li>
            ))}
            <li className="flex items-baseline gap-6 py-6">
              <span className="font-display text-[12px] text-gold">06</span>
              <span className="font-serif text-[clamp(28px,3vw,40px)] leading-snug font-semibold text-purple italic">
                Where dignity is never treated as optional.
              </span>
            </li>
          </ol>
        </Container>
      </section>

      {/* ── Promise ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-plum py-24 text-center text-sand md:py-32">
        <ArchMotif className="absolute top-1/2 left-1/2 h-[600px] w-[460px] -translate-x-1/2 -translate-y-1/2 text-gold/10" />
        <Container className="relative max-w-[900px]">
          <Eyebrow light className="justify-center">Our promise</Eyebrow>
          <p className="mt-8 font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] font-semibold text-ivory">
            We care for the person—
            <br />
            <span className="font-medium text-gold-light italic">not simply the task.</span>
          </p>
          <p className="mx-auto mt-8 max-w-[600px] text-[19px]">
            Home care should help a person continue living life with as much independence, choice and dignity as possible.
          </p>
        </Container>
      </section>

      {/* ── Core values ──────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Our core values</Eyebrow>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <article key={v.title} className="arch flex flex-col items-center border border-line bg-white px-8 pt-24 pb-12 text-center">
                <span className="font-display text-[14px] tracking-[0.2em] text-gold">{["I", "II", "III"][i]}</span>
                <h3 className="mt-4 text-[34px] leading-tight">{v.title}</h3>
                <div className="my-5 h-px w-12 bg-gold" />
                <p className="quote text-[22px] leading-snug text-plum">{v.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Commitment ───────────────────────────────────── */}
      <section className="paper border-y border-line py-20 md:py-28">
        <Container className="max-w-[920px] text-center">
          <Eyebrow className="justify-center">Our commitment</Eyebrow>
          <p className="mt-8 font-serif text-[clamp(28px,3.4vw,42px)] leading-[1.2] font-medium text-purple">
            At KALEM, we believe care should be timely, patient and intentional.
          </p>
          <p className="quote mx-auto mt-6 max-w-[700px] text-[24px] leading-snug text-bronze">
            We are here to provide the support—and the peace of mind—that makes home feel like home.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

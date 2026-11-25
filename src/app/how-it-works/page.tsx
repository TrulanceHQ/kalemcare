import type { Metadata } from "next";
import { ArchMotif, Container, CtaBand, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Five steps to the right care: we listen, we assess, we build the plan, we match the right caregiver and we stay connected.",
  alternates: { canonical: "/how-it-works" },
};

type Step = {
  title: string;
  intro: string;
  items: string[];
  style: "questions" | "columns" | "list";
  close?: string;
};

const steps: Step[] = [
  {
    title: "We listen",
    intro: "Before we recommend care, we want to understand the person.",
    items: [
      "What matters to them?",
      "What does a normal day look like?",
      "What do they enjoy?",
      "What support do they need?",
      "What does the family need?",
    ],
    style: "questions",
  },
  {
    title: "We assess",
    intro: "Our assessment process looks beyond the immediate task. We consider:",
    items: [
      "Daily routines",
      "Functional support needs",
      "Personal-care requirements",
      "Mobility",
      "Communication",
      "Social needs",
      "Household support",
      "Family involvement",
      "Home environment",
      "Safety considerations",
      "Client preferences",
    ],
    style: "columns",
    close: 'We don\'t begin with "What can we sell?" We begin with: "What support is appropriate?"',
  },
  {
    title: "We build the plan",
    intro: "Based on the assessment, KALEM develops a clear service plan outlining:",
    items: [
      "What support is required",
      "When it is required",
      "How it should be delivered",
      "Client preferences",
      "Caregiver expectations",
      "Communication requirements",
    ],
    style: "list",
    close: "Everyone should understand the plan.",
  },
  {
    title: "We match the right caregiver",
    intro: "The right caregiver can change the entire care experience. We consider appropriate factors such as:",
    items: ["Skills", "Experience", "Availability", "Personality", "Communication", "Client preferences", "Assignment requirements"],
    style: "columns",
    close: "The goal is not simply to fill a shift. The goal is to create a good care relationship.",
  },
];

const cycle = ["Measure", "Review", "Identify", "Correct", "Train", "Measure again"];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How KALEM works" title="Five steps to" accent="the right care.">
        <p className="quote text-[24px] leading-snug text-purple">
          Because good care is not a one-time event. It is an ongoing relationship.
        </p>
      </PageHero>

      {/* ── Steps timeline ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <ol className="relative">
            <span aria-hidden className="absolute top-4 bottom-4 left-[27px] w-px bg-gradient-to-b from-gold via-gold/60 to-gold/0 md:left-1/2" />
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <li key={s.title} className="relative grid gap-6 pb-14 pl-20 md:grid-cols-2 md:gap-20 md:pl-0">
                  <span className="absolute top-0 left-0 z-10 grid h-14 w-14 place-items-center rounded-full bg-purple font-serif text-[26px] font-semibold text-gold-light ring-8 ring-ivory md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </span>
                  <div className={`md:pt-2 ${right ? "md:order-2" : "md:text-right"}`}>
                    <h2 className="subheading text-[clamp(30px,3vw,42px)]">{s.title}</h2>
                    <p className="lede mt-3">{s.intro}</p>
                    {s.close && (
                      <p className="quote mt-5 text-[21px] leading-snug text-bronze">{s.close}</p>
                    )}
                  </div>
                  <div className={right ? "md:order-1" : ""}>
                    {s.style === "questions" ? (
                      <ul className="space-y-2.5">
                        {s.items.map((q) => (
                          <li key={q} className="quote w-fit rounded-[22px_22px_22px_6px] bg-lilac px-5 py-2.5 text-[21px] text-plum">
                            {q}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul
                        className={`tick-list rounded-[28px] border border-line bg-white p-7 ${
                          s.style === "columns" ? "grid gap-x-8 space-y-0 gap-y-2.5 sm:grid-cols-2" : ""
                        }`}
                      >
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}

            {/* step 5: the ongoing relationship */}
            <li className="relative pl-20 md:pl-0">
              <span className="absolute top-0 left-0 z-10 grid h-14 w-14 place-items-center rounded-full bg-gold font-serif text-[26px] font-semibold text-night ring-8 ring-ivory md:left-1/2 md:-translate-x-1/2">
                5
              </span>
              <div className="relative overflow-hidden rounded-[36px] bg-purple p-8 text-sand sm:p-12 md:mt-20 md:p-16">
                <ArchMotif className="absolute -right-12 -bottom-28 h-[380px] w-[290px] text-gold/20" />
                <div className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div>
                    <h2 className="subheading text-[clamp(32px,3.4vw,46px)] text-ivory">We stay connected</h2>
                    <p className="mt-4 text-sand">
                      KALEM does not disappear once service begins. We maintain communication and follow-up. We monitor:
                    </p>
                    <p className="mt-8 text-sand">Because good care is not a one-time event.</p>
                    <p className="quote text-[32px] leading-tight text-gold-light">It is an ongoing relationship.</p>
                  </div>
                  <ul className="tick-list grid content-start gap-x-8 space-y-0 gap-y-3 sm:grid-cols-2">
                    {[
                      "Client experience",
                      "Caregiver performance",
                      "Attendance",
                      "Documentation",
                      "Changes in needs",
                      "Concerns and complaints",
                      "Service quality",
                    ].map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </Container>
      </section>

      {/* ── Quality and safety ───────────────────────────── */}
      <section className="paper border-y border-line py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[32px] border border-line bg-white p-8 sm:p-12">
            <Eyebrow>Our quality standard</Eyebrow>
            <p className="lede mt-5">KALEM operates on this framework:</p>
            <QualityCycle steps={cycle} />
            <p className="mt-6 text-center">
              We continuously look for ways to improve the experience for clients, families and caregivers.
            </p>
          </article>

          <article className="flex flex-col rounded-[32px] border border-line bg-white p-8 sm:p-12">
            <Eyebrow>Safety first</Eyebrow>
            <p className="lede mt-5">
              KALEM maintains clear boundaries around non-medical care. Our caregivers work within their qualifications, training,
              assigned responsibilities and the company&apos;s defined service scope.
            </p>
            <p className="mt-8 font-medium text-plum">When a situation falls outside our scope:</p>
            <ol className="mt-5 grid grid-cols-3 gap-3">
              {["Stop", "Ask", "Escalate"].map((s, i) => (
                <li
                  key={s}
                  className="arch flex aspect-[3/4] flex-col items-center justify-end border border-gold/50 bg-cream px-2 pb-6 text-center"
                >
                  <span className="font-display text-[12px] text-bronze">0{i + 1}</span>
                  <span className="mt-1 font-serif text-[clamp(22px,2.4vw,30px)] font-semibold text-purple">{s}</span>
                </li>
              ))}
            </ol>
            <p className="quote mt-8 text-[22px] leading-snug text-purple">
              We would rather pause and seek the appropriate direction than take an unsafe shortcut.
            </p>
          </article>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

/** The six-part quality loop, drawn as a circle. */
function QualityCycle({ steps }: { steps: string[] }) {
  const r = 128;
  return (
    <div className="relative mx-auto mt-8 aspect-square w-full max-w-[360px]">
      <svg aria-hidden viewBox="0 0 360 360" className="absolute inset-0 h-full w-full">
        <circle cx="180" cy="180" r={r} fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeDasharray="2 6" />
        <circle cx="180" cy="180" r="62" fill="var(--color-lilac)" />
      </svg>
      <p className="absolute inset-0 grid place-items-center text-center font-serif text-[22px] leading-tight font-semibold text-purple italic">
        Always
        <br />
        improving
      </p>
      <ol>
        {steps.map((s, i) => {
          const a = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + (Math.cos(a) * r * 100) / 360;
          const y = 50 + (Math.sin(a) * r * 100) / 360;
          const last = i === steps.length - 1;
          return (
            <li
              key={s}
              style={{ left: `${x}%`, top: `${y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3.5 py-1.5 text-center text-[13px] font-medium whitespace-nowrap ${
                last ? "bg-purple text-ivory" : "border border-gold/60 bg-ivory text-purple"
              }`}
            >
              <span className="mr-1.5 font-display text-[10px] text-bronze">{i + 1}</span>
              {s}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

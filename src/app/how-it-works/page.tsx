import type { Metadata } from "next";
import ServiceIcon from "@/components/ServiceIcon";
import { Arrow, CheckList, CtaBand, PageHero, Section } from "@/components/ui";

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
      <PageHero eyebrow="How KALEM works" title={<>Five steps to <em>the right care</em></>}>
        <p>Because good care is not a one-time event. It is an ongoing relationship.</p>
      </PageHero>

      {/* ── Steps ────────────────────────────────────────── */}
      <Section>
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={s.title} className="card grid gap-8 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
              <div className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-purple text-[18px] font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h2 className="h3 text-[clamp(24px,2.4vw,30px)]">{s.title}</h2>
                  <p className="mt-3 text-muted">{s.intro}</p>
                  {s.close && <p className="mt-4 font-semibold text-plum">{s.close}</p>}
                </div>
              </div>
              {s.style === "questions" ? (
                <ul className="space-y-2">
                  {s.items.map((q) => (
                    <li key={q} className="rounded-xl bg-ivory px-5 py-3 font-serif text-[19px] text-plum">
                      {q}
                    </li>
                  ))}
                </ul>
              ) : (
                <CheckList
                  items={s.items}
                  className={`rounded-xl bg-ivory p-6 ${s.style === "columns" ? "grid gap-x-6 space-y-0 gap-y-3 sm:grid-cols-2" : ""}`}
                />
              )}
            </li>
          ))}

          <li className="grid gap-8 rounded-[20px] border border-purple/15 bg-lilac p-7 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="flex gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-purple text-[18px] font-semibold text-white">
                5
              </span>
              <div>
                <h2 className="h3 text-[clamp(24px,2.4vw,30px)]">We stay connected</h2>
                <p className="mt-3 text-muted">
                  KALEM does not disappear once service begins. We maintain communication and follow-up. We monitor:
                </p>
                <p className="mt-4 text-plum">Because good care is not a one-time event.</p>
                <p className="font-serif text-[22px] text-purple">It is an ongoing relationship.</p>
              </div>
            </div>
            <CheckList
              items={[
                "Client experience",
                "Caregiver performance",
                "Attendance",
                "Documentation",
                "Changes in needs",
                "Concerns and complaints",
                "Service quality",
              ]}
              className="grid gap-x-6 space-y-0 gap-y-3 rounded-xl bg-white p-6 sm:grid-cols-2"
            />
          </li>
        </ol>
      </Section>

      {/* ── Quality and safety ───────────────────────────── */}
      <Section tone="ivory">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-[#9a6b2f]">
              <ServiceIcon name="chart" className="h-6 w-6" />
            </span>
            <h2 className="h3 mt-5 text-[28px]">Our quality standard</h2>
            <p className="mt-3 text-muted">KALEM operates on this framework:</p>
            <ol className="mt-6 flex flex-wrap items-center gap-2">
              {cycle.map((c, i) => (
                <li key={c} className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-4 py-2 text-[15px] font-medium ${
                      i === cycle.length - 1 ? "bg-purple text-white" : "bg-ivory text-plum"
                    }`}
                  >
                    {c}
                  </span>
                  {i < cycle.length - 1 && <Arrow className="h-4 w-4 text-gold" />}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-muted">
              We continuously look for ways to improve the experience for clients, families and caregivers.
            </p>
          </article>

          <article className="card sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-[#9a6b2f]">
              <ServiceIcon name="shield" className="h-6 w-6" />
            </span>
            <h2 className="h3 mt-5 text-[28px]">Safety first</h2>
            <p className="mt-3 text-muted">
              KALEM maintains clear boundaries around non-medical care. Our caregivers work within their qualifications, training,
              assigned responsibilities and the company&apos;s defined service scope.
            </p>
            <p className="mt-5 font-semibold text-plum">When a situation falls outside our scope:</p>
            <ol className="mt-3 grid grid-cols-3 gap-2">
              {["Stop", "Ask", "Escalate"].map((s, i) => (
                <li key={s} className="rounded-xl bg-ivory px-3 py-4 text-center">
                  <span className="block text-[13px] text-muted">{i + 1}</span>
                  <span className="font-serif text-[22px] text-plum">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-muted">We would rather pause and seek the appropriate direction than take an unsafe shortcut.</p>
          </article>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Standard vertical rhythm for every page section. */
export function Section({
  children,
  tone = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "ivory";
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${tone === "ivory" ? "bg-ivory" : "bg-white"} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Eyebrow, heading and optional intro used at the top of sections. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-[720px] ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`h2 ${eyebrow ? "mt-4" : ""}`}>{title}</h2>
      {children && <div className="lede mt-5 space-y-4">{children}</div>}
    </div>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`check-list space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** Top of every inner page: eyebrow, title, intro, with an optional photo. */
export function PageHero({
  eyebrow,
  title,
  children,
  photo,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  photo?: { src: string; alt: string; position?: string };
}) {
  return (
    <section className="bg-ivory">
      <Container
        className={`grid items-center gap-12 py-16 md:py-24 ${photo ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16" : ""}`}
      >
        <div className={photo ? "" : "max-w-[760px]"}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 mt-4">{title}</h1>
          {children && <div className="lede mt-6 space-y-4">{children}</div>}
        </div>
        {photo && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-line">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              style={{ objectPosition: photo.position ?? "center" }}
            />
          </div>
        )}
      </Container>
    </section>
  );
}

/** Closing call to action used at the foot of each page. */
export function CtaBand({
  title = "Start with a conversation.",
  body = "You don't have to figure everything out alone.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-purple px-8 py-12 md:flex-row md:items-center md:px-14 md:py-14">
          <div>
            <h2 className="h2 text-white">{title}</h2>
            <p className="mt-3 text-[18px] text-white/80">{body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/contact" className="btn-light">
              Start a conversation <Arrow />
            </Link>
            <a
              href="tel:+14374608142"
              className="btn border border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              <PhoneIcon /> (437) 460-8142
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

const iconProps = {
  "aria-hidden": true,
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps} strokeWidth={1.8} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps} strokeWidth={1.8} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps} strokeWidth={2.4} className={className}>
      <path d="m6 12 4 4 8-8" />
    </svg>
  );
}

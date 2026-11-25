import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""} ${className}`}>{children}</p>;
}

export function TickList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`tick-list ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** A photo inside an arch-topped frame, with an offset gold outline behind it. */
export function ArchPhoto({
  src,
  alt,
  sizes,
  priority = false,
  position = "center",
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden className="arch absolute inset-0 translate-x-4 translate-y-4 border border-gold" />
      <div className="arch relative h-full w-full overflow-hidden bg-cream">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" style={{ objectPosition: position }} />
      </div>
    </div>
  );
}

/** Top of every inner page: eyebrow, title, intro, on a dotted paper background. */
export function PageHero({
  eyebrow,
  title,
  accent,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="paper relative overflow-hidden border-b border-line">
      <Container className="grid items-end gap-10 pt-16 pb-14 md:pt-24 md:pb-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display mt-6">
            {title}
            {accent && (
              <>
                <br />
                <span className="font-medium text-bronze italic">{accent}</span>
              </>
            )}
          </h1>
        </div>
        {(children || aside) && <div className="lede max-w-[520px] space-y-4 lg:pb-3">{children ?? aside}</div>}
      </Container>
    </section>
  );
}

/** Closing call to action used at the foot of most pages. */
export function CtaBand({
  title = "Start with a conversation.",
  body = "You don't have to figure everything out alone.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-purple px-7 py-14 text-center text-sand md:px-16 md:py-20">
          <ArchMotif className="absolute -top-24 -left-16 h-[340px] w-[260px] text-gold/25" />
          <ArchMotif className="absolute -right-10 -bottom-32 h-[380px] w-[290px] text-gold/20" />
          <div className="relative">
            <h2 className="heading text-ivory">{title}</h2>
            <p className="quote mx-auto mt-4 max-w-[560px] text-[24px] text-gold-light">{body}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Link href="/contact" className="btn-gold">
                Start a conversation <Arrow />
              </Link>
              <a href="tel:+14374608142" className="btn-ghost-light">
                <PhoneIcon /> Call (437) 460-8142
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ArchMotif({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 260 340" fill="none" className={className}>
      <path d="M10 340V130C10 64 64 10 130 10s120 54 120 120v210" stroke="currentColor" strokeWidth="1.5" />
      <path d="M40 340V135c0-50 40-90 90-90s90 40 90 90v205" stroke="currentColor" strokeWidth="1.5" />
      <path d="M70 340V140c0-33 27-60 60-60s60 27 60 60v200" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MailIcon, PhoneIcon } from "./ui";

const nav = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Families", href: "/families" },
  { label: "Organizations", href: "/organizations" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="hidden bg-night text-[13px] text-sand md:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-8 py-2">
          <p className="font-display tracking-[0.2em] text-gold-light uppercase">Excellence in Care  ·  Compassionate Care  ·  Reliable Support</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@kalemcare.com" className="inline-flex items-center gap-2 text-sand hover:text-gold-light">
              <MailIcon className="h-4 w-4" /> hello@kalemcare.com
            </a>
            <a href="tel:+14374608142" className="inline-flex items-center gap-2 font-medium text-ivory hover:text-gold-light">
              <PhoneIcon className="h-4 w-4" /> (437) 460-8142
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled || open ? "border-line bg-ivory/95 shadow-[0_8px_30px_-20px_rgb(36_10_49/0.35)] backdrop-blur" : "border-transparent bg-ivory"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" aria-label="KALEM Home Care Services, home" className="block shrink-0">
            <Image
              src="/brand/kalem-horizontal-colour.svg"
              alt="KALEM Home Care Services"
              width={227}
              height={63}
              priority
              className="h-[48px] w-auto sm:h-[56px]"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="relative rounded-full px-4 py-2 text-[15.5px] font-medium text-ink no-underline hover:text-purple aria-[current=page]:text-purple"
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute right-4 -bottom-0.5 left-4 h-[2px] origin-left rounded-full bg-gold transition-transform ${
                    isActive(item.href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-4 px-6 py-3 text-[15px]">
              Start a conversation
            </Link>
          </nav>

          <button
            type="button"
            className="-mr-2 rounded-full p-2.5 text-purple lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M8 16h12" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-line px-5 pb-8 lg:hidden">
            <ul className="py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-4 font-serif text-[28px] font-semibold text-purple no-underline aria-[current=page]:text-bronze"
                  >
                    {item.label}
                    <span aria-hidden className="text-gold">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
              Start a conversation
            </Link>
            <a href="mailto:hello@kalemcare.com" className="mt-4 block text-center text-[15px]">
              hello@kalemcare.com
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

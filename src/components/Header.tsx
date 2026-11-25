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
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="hidden bg-plum text-[14px] text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 py-2">
          <p>Non-medical home care · Serving Families</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@kalemcare.com" className="inline-flex items-center gap-2 text-white/85 no-underline hover:text-white">
              <MailIcon className="h-4 w-4" /> hello@kalemcare.com
            </a>
            <a href="tel:+14374608142" className="inline-flex items-center gap-2 font-semibold text-white no-underline hover:text-white">
              <PhoneIcon className="h-4 w-4" /> (437) 460-8142
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b bg-white transition-shadow ${
          scrolled || open ? "border-line shadow-[0_6px_24px_-18px_rgb(46_15_61/0.35)]" : "border-line/60"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" aria-label="KALEM Home Care Services, home" className="block shrink-0">
            <Image
              src="/brand/kalem-horizontal-colour.svg"
              alt="KALEM Home Care Services"
              width={227}
              height={63}
              priority
              className="h-[46px] w-auto sm:h-[52px]"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="rounded-full px-4 py-2 text-[16px] font-medium text-ink no-underline hover:bg-ivory hover:text-purple aria-[current=page]:bg-lilac aria-[current=page]:text-purple"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-3 px-5 py-3 text-[15px]">
              Start a conversation
            </Link>
          </nav>

          <button
            type="button"
            className="-mr-2 rounded-full p-2.5 text-plum lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-line px-5 pb-8 lg:hidden"
          >
            <ul className="py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 text-[19px] font-medium text-ink no-underline aria-[current=page]:text-purple"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
              Start a conversation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArchMotif, Container } from "./ui";

const linkClass = "text-sand no-underline hover:text-gold-light";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night pb-24 text-sand md:pb-0">
      <ArchMotif className="pointer-events-none absolute -top-10 right-[6%] hidden h-[420px] w-[320px] text-gold/10 md:block" />
      <Container className="relative">
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.1fr] md:py-20">
          <div>
            <Image src="/brand/kalem-horizontal-reversed.svg" alt="KALEM Home Care Services" width={227} height={63} className="h-[58px] w-auto" />
            <p className="quote mt-6 max-w-[320px] text-[23px] leading-snug text-gold-light">
              Care You Can Count On. Dignity You Can Feel.
            </p>
          </div>

          <FooterCol title="Services">
            <li><Link href="/services#personal-support" className={linkClass}>Personal Support</Link></li>
            <li><Link href="/services#meal-and-home-support" className={linkClass}>Meal &amp; Home Support</Link></li>
            <li><Link href="/services#companionship" className={linkClass}>Companionship &amp; Socialization</Link></li>
            <li><Link href="/services#respite-care" className={linkClass}>Respite Care</Link></li>
            <li><Link href="/services#community-support" className={linkClass}>Community &amp; Daily-Living Support</Link></li>
            <li><Link href="/services#flexible-support" className={linkClass}>Short-Term &amp; Flexible Support</Link></li>
          </FooterCol>

          <FooterCol title="KALEM">
            <li><Link href="/how-it-works" className={linkClass}>How it works</Link></li>
            <li><Link href="/families" className={linkClass}>Families</Link></li>
            <li><Link href="/organizations" className={linkClass}>Organizations</Link></li>
            <li><Link href="/about" className={linkClass}>About</Link></li>
            <li><Link href="/contact" className={linkClass}>Contact</Link></li>
          </FooterCol>

          <FooterCol title="Talk to us">
            <li>
              <a href="tel:+14374608142" className="font-serif text-[26px] font-semibold text-ivory no-underline hover:text-gold-light">
                (437) 460-8142
              </a>
            </li>
            <li>
              <a href="mailto:hello@kalemcare.com" className="text-sand hover:text-gold-light">
                hello@kalemcare.com
              </a>
            </li>
            <li>
              <span className="text-sand/70">Careers: </span>
              <a href="mailto:careers@kalemcare.com" className="text-sand hover:text-gold-light">
                careers@kalemcare.com
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col gap-4 py-8 text-[13px] md:flex-row md:items-center md:justify-between">
          <p className="max-w-[640px] text-[#CDB8D9]">
            © 2026 KALEM Home Care Services · Serving Families. KALEM provides non-medical home care and support services.
          </p>
          <p className="font-display text-[11px] tracking-[0.22em] text-gold-light/80 uppercase">
            Excellence in Care · Compassionate Care · Reliable Support
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-[12px] font-semibold tracking-[0.24em] text-gold uppercase">{title}</p>
      <ul className="mt-5 space-y-2.5 text-[15px]">{children}</ul>
    </div>
  );
}

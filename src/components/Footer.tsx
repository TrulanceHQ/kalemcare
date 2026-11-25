import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./ui";

const linkClass = "text-white/75 no-underline hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-plum pb-24 text-white/75 md:pb-0">
      <Container>
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Image src="/brand/kalem-horizontal-reversed.svg" alt="KALEM Home Care Services" width={227} height={63} className="h-[54px] w-auto" />
            <p className="mt-6 max-w-[300px] font-serif text-[20px] leading-snug text-white">
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
              <a href="tel:+14374608142" className="text-[20px] font-semibold text-white no-underline hover:text-gold">
                (437) 460-8142
              </a>
            </li>
            <li>
              <a href="mailto:hello@kalemcare.com" className={linkClass}>
                hello@kalemcare.com
              </a>
            </li>
            <li>
              Careers:{" "}
              <a href="mailto:careers@kalemcare.com" className={linkClass}>
                careers@kalemcare.com
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col gap-3 py-8 text-[14px] md:flex-row md:items-center md:justify-between">
          <p className="max-w-[640px] text-white/60">
            © 2026 KALEM Home Care Services · Serving Families. KALEM provides non-medical home care and support services.
          </p>
          <p className="text-white/60">Excellence in Care · Compassionate Care · Reliable Support</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[13px] font-semibold tracking-[0.14em] text-gold uppercase">{title}</p>
      <ul className="mt-5 space-y-2.5 text-[15px]">{children}</ul>
    </div>
  );
}

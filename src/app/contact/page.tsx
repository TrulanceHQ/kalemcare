import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Container, Eyebrow, MailIcon, PhoneIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's talk about the care you need. Call (437) 460-8142 or email hello@kalemcare.com to start a conversation with KALEM Home Care Services.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="paper border-b border-line">
      <Container className="grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="display mt-6 text-[clamp(44px,5.4vw,72px)]">
            Let&apos;s talk about <span className="font-medium text-bronze italic">the care you need.</span>
          </h1>
          <p className="lede mt-7">
            Whether you are a family looking for support for someone you love or an organization looking for a dependable
            care-support partner, KALEM is ready to have the conversation.
          </p>
          <p className="quote mt-6 text-[24px] text-purple">Care You Can Count On. Dignity You Can Feel.</p>

          <ul className="mt-10 space-y-3">
            <li>
              <a
                href="tel:+14374608142"
                className="group flex items-center gap-5 rounded-[24px] border border-line bg-white p-5 no-underline hover:border-purple"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-purple text-gold-light">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-[13px] text-muted">Phone</span>
                  <span className="font-serif text-[26px] font-semibold text-purple">(437) 460-8142</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@kalemcare.com"
                className="group flex items-center gap-5 rounded-[24px] border border-line bg-white p-5 no-underline hover:border-purple"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-lilac text-purple">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-[13px] text-muted">Email</span>
                  <span className="text-[18px] font-medium text-purple">hello@kalemcare.com</span>
                </span>
              </a>
            </li>
          </ul>
          <p className="mt-5 text-[15px] text-muted">
            Caregivers looking to join KALEM: <a href="mailto:careers@kalemcare.com">careers@kalemcare.com</a>
          </p>
        </div>

        <div>
          <ContactForm
            enquiryTypes={[
              "A family member or individual",
              "A retirement or assisted-living community",
              "A long-term care or healthcare organization",
              "A caregiver looking to join KALEM",
            ]}
          />
          <div className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-display text-[12px] tracking-[0.24em] text-bronze uppercase">Our commitment</p>
            <p className="mt-3">At KALEM, we believe care should be timely, patient and intentional.</p>
            <p className="quote mt-2 text-[21px] leading-snug text-purple">
              We are here to provide the support—and the peace of mind—that makes home feel like home.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

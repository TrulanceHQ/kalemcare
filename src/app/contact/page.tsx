import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Container, MailIcon, PhoneIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's talk about the care you need. Call (437) 460-8142 or email hello@kalemcare.com to start a conversation with KALEM Home Care Services.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-ivory">
      <Container className="grid gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="h1 mt-4">
            Let&apos;s talk about <em>the care you need</em>
          </h1>
          <p className="lede mt-6">
            Whether you are a family looking for support for someone you love or an organization looking for a dependable
            care-support partner, KALEM is ready to have the conversation.
          </p>

          <ul className="mt-10 space-y-3">
            <li>
              <a href="tel:+14374608142" className="card flex items-center gap-4 p-5 no-underline hover:border-purple/40 sm:p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-purple text-white">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-[14px] text-muted">Phone</span>
                  <span className="text-[20px] font-semibold text-plum">(437) 460-8142</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:hello@kalemcare.com" className="card flex items-center gap-4 p-5 no-underline hover:border-purple/40 sm:p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-lilac text-purple">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-[14px] text-muted">Email</span>
                  <span className="text-[18px] font-semibold text-plum">hello@kalemcare.com</span>
                </span>
              </a>
            </li>
          </ul>
          <p className="mt-5 text-[15px] text-muted">
            Caregivers looking to join KALEM: <a href="mailto:careers@kalemcare.com">careers@kalemcare.com</a>
          </p>

          <div className="mt-10 border-t border-line pt-8">
            <p className="eyebrow">Our commitment</p>
            <p className="mt-3">At KALEM, we believe care should be timely, patient and intentional.</p>
            <p className="mt-2 font-serif text-[20px] leading-snug text-plum">
              We are here to provide the support—and the peace of mind—that makes home feel like home.
            </p>
          </div>
        </div>

        <ContactForm
          enquiryTypes={[
            "A family member or individual",
            "A retirement or assisted-living community",
            "A long-term care or healthcare organization",
            "A caregiver looking to join KALEM",
          ]}
        />
      </Container>
    </section>
  );
}

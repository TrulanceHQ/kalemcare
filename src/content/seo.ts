/**
 * Search and sharing settings. Edit these to change what Google and social networks show.
 * The share image is src/app/opengraph-image.png (1200×630) — replace that file to change it.
 */
import { contact, headline, services } from "./site";

/** The live address of the site, without a trailing slash. www.kalemcare.com should redirect here. */
export const siteUrl = "https://kalemcare.com";

export const seo = {
  name: "KALEM Home Care Services",
  shortName: "KALEM",
  /** Shown in the browser tab and as the blue link in Google (aim for under 60 characters). */
  title: "KALEM Home Care Services · Non-Medical Home Care",
  /** Shown under the link in Google (aim for 140–160 characters). */
  description:
    "Compassionate, reliable non-medical home care for families: companionship, personal support, meal and home help, respite and flexible care. Call (437) 460-8142.",
  /** Shorter line for link previews on WhatsApp, LinkedIn, Facebook and X. */
  shareDescription: `${headline} Compassionate, reliable non-medical home care for families.`,
  keywords: [
    "home care",
    "non-medical home care",
    "in-home care",
    "senior care",
    "elder care",
    "companionship care",
    "personal support worker",
    "PSW",
    "respite care",
    "caregiver relief",
    "meal preparation",
    "light housekeeping",
    "home support services",
    "PSW staffing",
    "KALEM Home Care",
  ],
  locale: "en_CA",
  themeColor: "#4A0868",
  backgroundColor: "#FBF6EC",
};

/** Structured data (schema.org JSON-LD) so search engines understand who KALEM is and what it offers. */
export function structuredData() {
  const org = {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: seo.name,
    alternateName: seo.shortName,
    url: siteUrl,
    logo: `${siteUrl}/icons/icon-512.png`,
    image: `${siteUrl}/opengraph-image.png`,
    description: seo.description,
    slogan: headline,
    telephone: "+1-437-460-8142",
    email: contact.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-437-460-8142",
        email: contact.email,
        availableLanguage: ["English"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Non-medical home care services",
      itemListElement: services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, serviceType: "Non-medical home care" },
      })),
    },
  };
  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: seo.name,
    inLanguage: "en-CA",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
  return { "@context": "https://schema.org", "@graph": [org, website] };
}

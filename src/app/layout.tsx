import type { Metadata, Viewport } from "next";
import "@fontsource-variable/figtree";
import "@fontsource-variable/fraunces/soft.css";
import "@fontsource-variable/fraunces/soft-italic.css";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";

// The share image comes from src/app/opengraph-image.png and twitter-image.png (file convention),
// and the tab icons from src/app/icon.svg and apple-icon.png. Each page sets its own title,
// description and canonical URL; these are the defaults.
export const metadata: Metadata = {
  metadataBase: new URL("https://kalemcare.com"),
  title: {
    default: "KALEM Home Care Services · Non-Medical Home Care",
    template: "%s · KALEM Home Care Services",
  },
  description:
    "Compassionate, reliable non-medical home care for families: companionship, personal support, meal and home help, respite and flexible care. Call (437) 460-8142.",
  applicationName: "KALEM Home Care Services",
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
  authors: [{ name: "KALEM Home Care Services", url: "https://kalemcare.com" }],
  creator: "KALEM Home Care Services",
  publisher: "KALEM Home Care Services",
  category: "Home care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "KALEM Home Care Services",
    title: "KALEM Home Care Services",
    description: "Care You Can Count On. Dignity You Can Feel. Compassionate, reliable non-medical home care for families.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "KALEM Home Care Services",
    description: "Care You Can Count On. Dignity You Can Feel. Compassionate, reliable non-medical home care for families.",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A0868",
};

/** schema.org data so search engines understand who KALEM is and what it offers. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://kalemcare.com/#organization",
      name: "KALEM Home Care Services",
      alternateName: "KALEM",
      url: "https://kalemcare.com",
      logo: "https://kalemcare.com/icons/icon-512.png",
      image: "https://kalemcare.com/opengraph-image.png",
      description:
        "Compassionate, reliable non-medical home care for families: companionship, personal support, meal and home help, respite and flexible care.",
      slogan: "Care You Can Count On. Dignity You Can Feel.",
      telephone: "+1-437-460-8142",
      email: "hello@kalemcare.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+1-437-460-8142",
          email: "hello@kalemcare.com",
          availableLanguage: ["English"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Non-medical home care services",
        itemListElement: [
          ["Personal Support", "personal-support"],
          ["Meal & Home Support", "meal-and-home-support"],
          ["Companionship & Socialization", "companionship"],
          ["Respite Care", "respite-care"],
          ["Community & Daily-Living Support", "community-support"],
          ["Short-Term & Flexible Support", "flexible-support"],
        ].map(([name, slug]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            url: `https://kalemcare.com/services#${slug}`,
            serviceType: "Non-medical home care",
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kalemcare.com/#website",
      url: "https://kalemcare.com",
      name: "KALEM Home Care Services",
      inLanguage: "en-CA",
      publisher: { "@id": "https://kalemcare.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Browser extensions (e.g. focus-visible helpers) add attributes to <html> before React loads.
    // This only silences attribute mismatches on this one element, not on the rest of the page.
    <html lang="en-CA" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          // JSON.stringify does not escape "<", so replace it to keep the script tag safe.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-purple focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}

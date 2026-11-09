import type { Metadata, Viewport } from "next";
import "@fontsource-variable/jost";
import "@fontsource-variable/cinzel";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "./globals.css";
import { seo, siteUrl } from "@/content/seo";

// The share image comes from src/app/opengraph-image.png and twitter-image.png (file convention),
// and the tab icons from src/app/icon.svg and apple-icon.png.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s · ${seo.name}`,
  },
  description: seo.description,
  applicationName: seo.name,
  keywords: seo.keywords,
  authors: [{ name: seo.name, url: siteUrl }],
  creator: seo.name,
  publisher: seo.name,
  category: "Home care",
  alternates: {
    canonical: "/",
  },
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
    siteName: seo.name,
    title: seo.name,
    description: seo.shareDescription,
    locale: seo.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.name,
    description: seo.shareDescription,
  },
};

export const viewport: Viewport = {
  themeColor: seo.themeColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Browser extensions (e.g. focus-visible helpers) add attributes to <html> before React loads.
    // This only silences attribute mismatches on this one element, not on the rest of the page.
    <html lang="en-CA" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

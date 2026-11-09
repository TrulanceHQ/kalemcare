import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/seo";

/** Add a new entry here whenever a new page is added to the site. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/opengraph-image.png`, `${siteUrl}/photos/kalem-companionship-tea.jpg`],
    },
  ];
}

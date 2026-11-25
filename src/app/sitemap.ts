import type { MetadataRoute } from "next";

/** Add a new entry here whenever a new page is added to the site. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kalemcare.com",
      changeFrequency: "monthly",
      priority: 1,
      images: ["https://kalemcare.com/opengraph-image.png", "https://kalemcare.com/photos/kalem-companionship-tea.jpg"],
    },
    { url: "https://kalemcare.com/services", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://kalemcare.com/contact", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://kalemcare.com/how-it-works", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://kalemcare.com/families", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://kalemcare.com/organizations", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://kalemcare.com/about", changeFrequency: "monthly", priority: 0.6 },
  ];
}

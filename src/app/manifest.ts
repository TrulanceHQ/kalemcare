import type { MetadataRoute } from "next";
import { seo } from "@/content/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.name,
    short_name: seo.shortName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: seo.backgroundColor,
    theme_color: seo.themeColor,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}

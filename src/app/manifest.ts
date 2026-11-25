import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KALEM Home Care Services",
    short_name: "KALEM",
    description:
      "Compassionate, reliable non-medical home care for families: companionship, personal support, meal and home help, respite and flexible care.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EC",
    theme_color: "#4A0868",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}

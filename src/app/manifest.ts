import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arjun Jhukal — Web developer",
    short_name: "Arjun Jhukal",
    description:
      "Web developer in Kathmandu: online stores, marketplaces, booking sites, LMS and CMS. Book a free demo.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111110",
    lang: "en-NP",
    categories: ["business", "productivity"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Book a demo", url: "/book-a-demo" },
      { name: "Products", url: "/products" },
      { name: "Hire me", url: "/hire" },
    ],
  };
}

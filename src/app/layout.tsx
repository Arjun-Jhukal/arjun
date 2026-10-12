import type { Metadata, Viewport } from "next";
import React from "react";
import { Bricolage_Grotesque, Inter_Tight, Martian_Mono } from "next/font/google";
import { SITE_URL } from "@/content/contact";

/**
 * Fonts are declared here as CSS variables only — no stylesheet is imported at the
 * root. Each route group brings its own: the site uses styles/site.css, /cv keeps
 * the older globals.css, so one page's reset never leaks into the other.
 *
 * adjustFontFallback is off: Next 14's font-metrics database predates these
 * faces and logs a build error trying. The fallback stacks in site.css cover it.
 */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

const mono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
});

/* Under 60 characters, so Google shows it whole instead of swapping in the H1. */
const TITLE = "Web Developer in Nepal | Arjun Jhukal";
const DESCRIPTION =
  "Web developer in Kathmandu building online stores, marketplaces, booking sites and CMS platforms with React, Next.js, Node and WordPress. Book a demo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Arjun Jhukal" },
  description: DESCRIPTION,
  applicationName: "Arjun Jhukal",
  authors: [{ name: "Arjun Jhukal", url: SITE_URL }],
  creator: "Arjun Jhukal",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "Arjun Jhukal — Guides (RSS)" }],
      "application/feed+json": [{ url: "/feed.json", title: "Arjun Jhukal — Guides (JSON Feed)" }],
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/180.png", sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
  /* iOS would otherwise auto-link and restyle every number on the page */
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Arjun Jhukal",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_NP",
    images: [{ url: `${SITE_URL}/og/home.png`, width: 1200, height: 630, alt: TITLE, type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/og/home.png`] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      /* the inline script below adds `js` before hydration — expected */
      suppressHydrationWarning
    >
      <body className="site">
        {/* Hidden-until-revealed styles are scoped to .js, so with scripts off
            every word on the page is simply visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}

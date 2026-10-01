import type { Metadata, Viewport } from "next";
import React from "react";
import { Bricolage_Grotesque, Inter_Tight, Martian_Mono, Mukta } from "next/font/google";

/**
 * Fonts are declared here as CSS variables only — no stylesheet is imported at the
 * root. Each route group brings its own: the site uses styles/v4.css, /cv keeps the
 * older globals.css. That is what stops one page's reset from leaking into the other.
 */

/*
 * adjustFontFallback is off throughout: Next 14's font-metrics database predates
 * these faces, so it cannot compute a size-adjusted local fallback and logs a
 * build error trying. The explicit fallback stacks in v4.css cover it.
 *
 * Bricolage Grotesque is the voice of the page — flat-sided, very heavy, set
 * enormous and tight. Inter Tight reads underneath it without competing, and
 * Martian Mono does all the small engineered labels.
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

const deva = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["400", "600"],
  variable: "--font-deva",
  display: "swap",
});

const SITE = "https://arjunjhukal.com.np";
/* Kept under 60 characters: Google discards an over-long title and substitutes
   the H1, which here is just a name and says nothing about the service. */
const TITLE = "Web Developer in Nepal | Arjun Jhukal";
/* ~155 characters: past that Google truncates, and the tail stops being read
   by anyone deciding whether to click. */
const DESCRIPTION =
  "Freelance web developer in Kathmandu, Nepal. Business websites, online stores and content platforms on Next.js, React and WordPress. Free first call.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s — Arjun Jhukal, Web Developer Nepal",
  },
  description: DESCRIPTION,
  applicationName: "Arjun Jhukal",
  authors: [{ name: "Arjun Jhukal", url: SITE }],
  creator: "Arjun Jhukal",
  keywords: [
    "web developer in Nepal",
    "web developer Kathmandu",
    "freelance web developer Nepal",
    "website developer Nepal",
    "hire web developer Nepal",
    "Next.js developer Nepal",
    "React developer Kathmandu",
    "WordPress developer Nepal",
    "ecommerce website development Nepal",
    "website design company Kathmandu",
    "CMS website Nepal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Arjun Jhukal",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_NP",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe8" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} ${deva.variable}`}
    >
      <body className="v4">{children}</body>
    </html>
  );
}

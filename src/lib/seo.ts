import type { Metadata } from "next";
import { SITE_URL, person } from "@/content/contact";
import type { Faq } from "@/content/types";
import { ogIdFor } from "./og-cards";

const BRAND = " | Arjun Jhukal";
/* Google rewrites titles much past 60 characters — and when it does it swaps in
   the H1. So the brand suffix is only appended when it still fits. */
const MAX_TITLE = 60;

export function pageMeta({
  title,
  description,
  path,
  keywords,
  type = "website",
  published,
  modified,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  published?: string;
  modified?: string;
  /** what the share card shows, for screen readers in chat apps */
  imageAlt?: string;
}): Metadata {
  const full = title.length + BRAND.length <= MAX_TITLE ? title + BRAND : title;
  const url = SITE_URL + path;
  /* every page has a share card rendered at build: /og/<flattened path>.png */
  const image = {
    url: `${SITE_URL}/og/${ogIdFor(path)}.png`,
    width: 1200,
    height: 630,
    alt: imageAlt ?? `${title} — Arjun Jhukal, web developer in Nepal`,
    type: "image/png",
  };
  return {
    title: { absolute: full },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      title: full,
      description,
      siteName: "Arjun Jhukal",
      locale: "en_NP",
      images: [image],
      ...(type === "article"
        ? {
            publishedTime: published,
            modifiedTime: modified ?? published,
            authors: [SITE_URL],
            section: "Guides",
            tags: keywords,
          }
        : {}),
    },
    twitter: { card: "summary_large_image", title: full, description, images: [image] },
  };
}

export const personLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: person.name,
  jobTitle: "Web developer",
  url: SITE_URL,
  email: `mailto:${person.email}`,
  telephone: person.phone,
  address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
  knowsAbout: ["React", "Next.js", "Node.js", "Fastify", "NestJS", "Express", "WordPress", "HTML", "CSS", "JavaScript"],
  sameAs: person.elsewhere.map((e) => e.href),
};

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: SITE_URL + t.path,
    })),
  };
}

/** FAQ answers carry [label](/href) link markup — strip it for the plain-text schema. */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");

export function faqLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
}

export function graph(...nodes: (object | null | false | undefined)[]) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

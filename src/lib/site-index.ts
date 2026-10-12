import { SITE_URL } from "@/content/contact";
import { products } from "@/content/products";
import { features } from "@/content/features";
import { skills } from "@/content/skills";
import { allPosts } from "@/content/all-posts";

/**
 * The one list of public pages. The XML sitemap, the HTML site map, llms.txt
 * and the share cards all read it, so a page added to /content shows up in
 * every index at once.
 */
/**
 * The date the site's non-post content last really changed. The sitemap uses
 * it as <lastmod> for every page that is not a guide (guides carry their own
 * date). Bump it when products, features or hire copy change — a lastmod that
 * moves on every build teaches search engines to ignore it.
 */
export const CONTENT_UPDATED = "2026-10-12";

export type IndexedPage = {
  path: string;
  title: string;
  summary: string;
  group: "Main" | "Products" | "Features" | "Hire" | "Guides";
  modified?: string;
  images?: { src: string; caption: string }[];
};

export function siteIndex(): IndexedPage[] {
  return [
    { path: "/", title: "Web developer in Nepal", summary: "Home: recent products, demos, hire or team up.", group: "Main" },
    { path: "/products", title: "Products", summary: "Every ready-built product, with live demos on request.", group: "Main" },
    { path: "/features", title: "Features", summary: "Shared capabilities explained in plain words.", group: "Main" },
    { path: "/hire", title: "Hire me", summary: "Hire a web developer: projects, retainers, agency work.", group: "Main" },
    { path: "/posts", title: "Guides", summary: "Plain-words guides on websites for Nepali businesses.", group: "Main" },
    { path: "/book-a-demo", title: "Book a demo", summary: "Schedule a free 20-minute demo or meeting.", group: "Main" },
    { path: "/site-map", title: "Site map", summary: "Every page on the site.", group: "Main" },
    ...products.map((p) => ({
      path: `/products/${p.slug}`,
      title: p.name,
      summary: `${p.kind}. ${p.headline}`,
      group: "Products" as const,
      images: p.gallery.filter((g) => g.src).map((g) => ({ src: g.src!, caption: `${p.name}: ${g.caption}` })),
    })),
    ...features.map((f) => ({
      path: `/features/${f.slug}`,
      title: f.name,
      summary: f.headline,
      group: "Features" as const,
    })),
    ...skills.map((s) => ({
      path: `/hire/${s.slug}`,
      title: `${s.name} developer`,
      summary: s.headline,
      group: "Hire" as const,
    })),
    ...allPosts.map((p) => ({
      path: `/posts/${p.slug}`,
      title: p.title,
      summary: p.excerpt,
      group: "Guides" as const,
      modified: p.updated ?? p.date,
    })),
  ];
}

export const abs = (path: string) => SITE_URL + path;

/** [label](/path) → [label](https://site/path); **bold** → bold. For plain-text outputs. */
export const absolutiseLinks = (s: string) =>
  s.replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, (_m, l, h) => `[${l}](${SITE_URL}${h})`).replace(/\*\*([^*]+)\*\*/g, "$1");

export const stripLinks = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

export const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

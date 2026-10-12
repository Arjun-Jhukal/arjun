import { products } from "@/content/products";
import { features } from "@/content/features";
import { skills } from "@/content/skills";
import { allPosts } from "@/content/all-posts";

/**
 * One share card per public page. The id is the page path flattened
 * ("/products/beauty-store" → "products-beauty-store", "/" → "home"), so
 * pageMeta can name a page's card from its path alone and no page has to
 * remember to pass one. The /og/[id] route renders these at build time.
 */
export type OgCard = { id: string; cap: string; title: string; sub: string; shot?: string };

export const ogIdFor = (path: string) => (path === "/" ? "home" : path.replace(/^\//, "").replace(/\//g, "-"));

export function ogCards(): OgCard[] {
  const cards: OgCard[] = [
    {
      id: "home",
      cap: "Web developer · Kathmandu",
      title: "I don't start from scratch. Neither will you.",
      sub: "Ready-built stores and booking sites, made yours and live in weeks.",
    },
    { id: "products", cap: "Products", title: "Products, built and running.", sub: `${products.length} ready-built products you can see in a demo` },
    { id: "features", cap: "Features", title: "Features, without the jargon.", sub: "eSewa & Khalti, WhatsApp alerts, page builder, SEO and more" },
    { id: "hire", cap: "Hire me", title: "Hire one developer for the whole build.", sub: "React · Next.js · Node · Fastify · NestJS · Express · WordPress" },
    { id: "posts", cap: "Guides", title: "Website guides, in plain words.", sub: "Cost, payments, online stores, templates, Next.js and more" },
    { id: "book-a-demo", cap: "Book a demo", title: "See it running before you decide.", sub: "Free 20-minute demo · WhatsApp +977 981-276-7046" },
    { id: "site-map", cap: "Site map", title: "Every page on arjunjhukal.com.np", sub: "Products, features, skills and guides" },
  ];
  for (const p of products) {
    const shot = p.gallery.find((g) => g.src && g.shape !== "phone");
    cards.push({ id: `products-${p.slug}`, cap: `${p.name} · ${p.kind}`, title: p.headline, sub: p.status, shot: shot?.src });
  }
  for (const f of features) cards.push({ id: `features-${f.slug}`, cap: `Feature · ${f.name}`, title: f.headline, sub: "Explained in plain words" });
  for (const s of skills) cards.push({ id: `hire-${s.slug}`, cap: `${s.name} developer · Nepal`, title: s.headline, sub: "Available for projects and agency work" });
  for (const p of allPosts) cards.push({ id: `posts-${p.slug}`, cap: `Guide · ${p.readMins} min read`, title: p.title, sub: "By Arjun Jhukal" });
  return cards;
}

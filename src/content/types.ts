/**
 * Copy strings may carry inline links written as [label](/path) — the <Rich>
 * component turns them into <Link>s. That is how every paragraph on the site
 * links sideways into products, features, skills and posts without each page
 * hand-building anchors.
 */

export type Faq = { q: string; a: string };

/** A gallery frame. `src` is deliberately optional: frames render as drawn
 *  placeholders until a real screenshot is dropped into /public/gallery. */
export type Shot = {
  caption: string;
  alt: string;
  src?: string;
  shape?: "wide" | "phone";
};

export type ProductFeature = {
  title: string;
  body: string;
  /** slug of the shared feature page this point belongs to */
  feature?: string;
};

export type Product = {
  slug: string;
  name: string;
  /** what kind of thing it is, in a customer's words — "Online clothing store" */
  kind: string;
  /** the hero line */
  headline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  summary: string;
  status: "Live" | "In production" | "Demo available";
  live?: { label: string; href: string };
  forWho: string[];
  problem: string;
  features: ProductFeature[];
  steps: { title: string; body: string }[];
  gallery: Shot[];
  stack: string[];
  faqs: Faq[];
  related: string[];
  posts: string[];
  featured?: boolean;
};

export type Feature = {
  slug: string;
  name: string;
  headline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  intro: string;
  how: { title: string; body: string }[];
  why: string[];
  products: string[];
  posts: string[];
  faqs: Faq[];
};

export type Skill = {
  slug: string;
  name: string;
  headline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  intro: string;
  builds: string[];
  proof: { product: string; note: string }[];
  pairsWith: string[];
  faqs: Faq[];
};

export type PostBlock =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { note: string }
  | { cta: string };

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  date: string;
  updated?: string;
  readMins: number;
  excerpt: string;
  body: PostBlock[];
  products: string[];
  features: string[];
  faqs: Faq[];
};

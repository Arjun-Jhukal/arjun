import { posts } from "./posts";
import { templatePosts } from "./posts-templates";
import { nextjsPosts } from "./posts-nextjs";
import { paymentPosts } from "./posts-payments";
import { seoPosts } from "./posts-seo";
import type { Post } from "./types";

/**
 * Every guide on the site, newest first. posts.ts holds the original six; the
 * keyword series live in their own files and are merged here, so every page,
 * the sitemap, the feeds and llms.txt read one list.
 */
export const allPosts: Post[] = [...seoPosts, ...paymentPosts, ...posts, ...templatePosts, ...nextjsPosts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const postBySlug = (slug: string) => allPosts.find((p) => p.slug === slug);

/** Shelf a guide sits on in the magazine layouts. */
export type Topic = "Getting started" | "Templates" | "Next.js & tech" | "Payments & selling" | "SEO & speed" | "Creators";

const TOPICS: Record<string, Topic> = {
  "website-cost-in-nepal": "Getting started",
  "technical-seo-checklist": "SEO & speed",
  "what-is-a-cms": "Getting started",
  "start-an-online-store-in-nepal": "Payments & selling",
  "esewa-khalti-payment-integration": "Payments & selling",
  "esewa-khalti-merchant-account-cost": "Payments & selling",
  "build-a-marketplace-like-daraz": "Payments & selling",
  "nepali-superchat-for-youtubers": "Creators",
  "travel-website-template": "Templates",
  "ecommerce-website-template": "Templates",
  "event-management-website-template": "Templates",
  "news-website-template": "Templates",
  "school-website-template": "Templates",
  "nextjs-travel-website": "Next.js & tech",
  "nextjs-ecommerce-website": "Next.js & tech",
  "nextjs-vs-wordpress": "Next.js & tech",
  "headless-cms-explained": "Next.js & tech",
  "trekking-company-website-nepal": "Getting started",
};

export const topicOf = (slug: string): Topic => TOPICS[slug] ?? "Getting started";

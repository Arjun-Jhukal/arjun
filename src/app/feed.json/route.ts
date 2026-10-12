import { person, SITE_URL } from "@/content/contact";
import { allPosts } from "@/content/all-posts";
import { stripLinks } from "@/lib/site-index";
import type { PostBlock } from "@/content/types";

/* JSON Feed 1.1 (jsonfeed.org) of every guide. */
export const dynamic = "force-static";

const text = (b: PostBlock) =>
  "h2" in b
    ? b.h2
    : "p" in b
      ? stripLinks(b.p)
      : "ul" in b
        ? b.ul.map(stripLinks).join("\n")
        : "ol" in b
          ? b.ol.map(stripLinks).join("\n")
          : "note" in b
            ? stripLinks(b.note)
            : "";

export function GET() {
  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Arjun Jhukal — Guides",
    home_page_url: `${SITE_URL}/posts`,
    feed_url: `${SITE_URL}/feed.json`,
    description: "Plain-words guides on websites, online stores, payments and platforms for Nepali businesses.",
    icon: `${SITE_URL}/og/home.png`,
    language: "en-NP",
    authors: [{ name: person.name, url: SITE_URL }],
    items: allPosts.map((p) => ({
      id: `${SITE_URL}/posts/${p.slug}`,
      url: `${SITE_URL}/posts/${p.slug}`,
      title: p.title,
      summary: p.seoDescription,
      content_text: p.body.map(text).filter(Boolean).join("\n\n"),
      image: `${SITE_URL}/og/posts-${p.slug}.png`,
      date_published: new Date(p.date).toISOString(),
      date_modified: new Date(p.updated ?? p.date).toISOString(),
      tags: p.keywords,
    })),
  };
  return new Response(JSON.stringify(feed, null, 2), {
    headers: { "Content-Type": "application/feed+json; charset=utf-8" },
  });
}

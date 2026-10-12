import Link from "next/link";
import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { PostMagazine } from "@/components/site/Blocks";
import JsonLd from "@/components/site/JsonLd";
import { allPosts as posts } from "@/content/all-posts";
import { SITE_URL } from "@/content/contact";
import { pageMeta, graph, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Website Guides for Nepali Businesses",
  description:
    "Plain-words guides on website cost in Nepal, eSewa and Khalti payments, starting an online store, building a marketplace like Daraz, CMS choice and streaming.",
  path: "/posts",
  keywords: ["website guide Nepal", "online business guide Nepal", "ecommerce guide Nepal"],
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/posts" },
];

export default function PostsPage() {
  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <h1 className="display-1" data-reveal>
          Guides, in plain words.
        </h1>
        <p className="lede" data-reveal>
          Straight answers to the questions business owners ask me most — no jargon, no sales pitch until the end.
        </p>
      </section>
      <section className="band wrap">
        <PostMagazine posts={posts} />
      </section>
      <CtaBand />
      <JsonLd
        data={graph(breadcrumbLd(trail), {
          "@type": "Blog",
          url: `${SITE_URL}/posts`,
          name: "Guides by Arjun Jhukal",
          author: { "@id": `${SITE_URL}/#person` },
          blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/posts/${p.slug}`, datePublished: p.date })),
        })}
      />
    </>
  );
}

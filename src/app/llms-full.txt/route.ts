import { person, SITE_URL } from "@/content/contact";
import { products } from "@/content/products";
import { features } from "@/content/features";
import { skills } from "@/content/skills";
import { allPosts } from "@/content/all-posts";
import { absolutiseLinks as L } from "@/lib/site-index";
import type { PostBlock } from "@/content/types";

/* The long form of llms.txt: every product, feature, skill and guide as text,
   with internal links made absolute so they survive outside the site. */
export const dynamic = "force-static";

const block = (b: PostBlock): string => {
  if ("h2" in b) return `### ${b.h2}`;
  if ("p" in b) return L(b.p);
  if ("ul" in b) return b.ul.map((x) => `- ${L(x)}`).join("\n");
  if ("ol" in b) return b.ol.map((x, i) => `${i + 1}. ${L(x)}`).join("\n");
  if ("note" in b) return `> ${L(b.note)}`;
  return `(Book a demo: ${SITE_URL}/book-a-demo${b.cta === "demo" ? "" : `?product=${b.cta}`})`;
};

export function GET() {
  const out: string[] = [
    "# Arjun Jhukal — full text",
    `Web developer in Kathmandu, Nepal. WhatsApp ${person.phone}, email ${person.email}. ${SITE_URL}`,
    "",
    "## Products",
  ];
  for (const p of products) {
    out.push(
      "",
      `### ${p.name} — ${p.kind}`,
      `URL: ${SITE_URL}/products/${p.slug} · Status: ${p.status}${p.live ? ` · Live: ${p.live.href}` : ""}`,
      "",
      p.headline,
      "",
      L(p.summary),
      "",
      `Made for: ${p.forWho.join("; ")}.`,
      "",
      `The problem: ${L(p.problem)}`,
      "",
      "Features:",
      ...p.features.map((f) => `- ${f.title}: ${L(f.body)}`),
      "",
      "Questions:",
      ...p.faqs.map((f) => `- Q: ${f.q}\n  A: ${L(f.a)}`)
    );
  }
  out.push("", "## Features");
  for (const f of features) {
    out.push(
      "",
      `### ${f.name}`,
      `URL: ${SITE_URL}/features/${f.slug}`,
      "",
      L(f.intro),
      "",
      ...f.how.map((h, i) => `${i + 1}. ${h.title}: ${L(h.body)}`),
      "",
      `Products with it: ${f.products.map((s) => `${SITE_URL}/products/${s}`).join(", ")}`
    );
  }
  out.push("", "## Hire by technology");
  for (const s of skills) out.push("", `### ${s.name} developer`, `URL: ${SITE_URL}/hire/${s.slug}`, "", L(s.intro));
  out.push("", "## Guides");
  for (const p of allPosts) {
    out.push("", `### ${p.title}`, `URL: ${SITE_URL}/posts/${p.slug} · Published ${p.date}`, "");
    for (const b of p.body) out.push(block(b), "");
    if (p.faqs.length) out.push("Questions:", ...p.faqs.map((f) => `- Q: ${f.q}\n  A: ${L(f.a)}`));
  }
  return new Response(out.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

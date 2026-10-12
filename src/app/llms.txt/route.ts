import { person, SITE_URL } from "@/content/contact";
import { siteIndex, abs } from "@/lib/site-index";

/* llms.txt (llmstxt.org): a short, link-first map of the site for language
   models. The long form with every page's text is /llms-full.txt. */
export const dynamic = "force-static";

export function GET() {
  const pages = siteIndex();
  const section = (g: string) =>
    pages
      .filter((p) => p.group === g)
      .map((p) => `- [${p.title}](${abs(p.path)}): ${p.summary}`)
      .join("\n");

  const body = `# Arjun Jhukal — web developer in Kathmandu, Nepal

> Arjun Jhukal builds websites and web products for businesses: online stores, a multi-seller marketplace, event and travel booking sites, a learning management system, a multi-site CMS, and live-stream tools (Nepali Superchat, Stream Overlay). Stack: React, Next.js, Node.js, Fastify, NestJS, Express, WordPress, HTML, CSS and JavaScript. Available for freelance projects, retainers and agency (team-up) work, in Nepal and remotely.

Contact: WhatsApp ${person.phone} (https://wa.me/${person.whatsapp}) · Email ${person.email} · Book a demo: ${SITE_URL}/book-a-demo

## Main pages
${section("Main")}

## Products
${section("Products")}

## Features
${section("Features")}

## Hire by technology
${section("Hire")}

## Guides
${section("Guides")}

## Optional
- [Full text of every page](${SITE_URL}/llms-full.txt): products, features and guides as plain text
- [Product catalogue (JSON)](${SITE_URL}/products.json)
- [Guides feed (JSON Feed)](${SITE_URL}/feed.json)
- [XML sitemap](${SITE_URL}/sitemap.xml)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

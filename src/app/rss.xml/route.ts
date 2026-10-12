import { person, SITE_URL } from "@/content/contact";
import { allPosts } from "@/content/all-posts";
import { xmlEscape } from "@/lib/site-index";

export const dynamic = "force-static";

export function GET() {
  const items = allPosts
    .map(
      (p) => `    <item>
      <title>${xmlEscape(p.title)}</title>
      <link>${SITE_URL}/posts/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/posts/${p.slug}</guid>
      <description>${xmlEscape(p.seoDescription)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <author>${person.email} (${person.name})</author>
    </item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Arjun Jhukal — Guides</title>
    <link>${SITE_URL}/posts</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Plain-words guides on websites for Nepali businesses.</description>
    <language>en-np</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

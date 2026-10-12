import Link from "next/link";
import { Crumbs, CtaBand } from "@/components/site/Chrome";
import { SectionHead } from "@/components/site/Blocks";
import JsonLd from "@/components/site/JsonLd";
import { siteIndex } from "@/lib/site-index";
import { pageMeta, graph, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Site Map — Every Page",
  description:
    "Every page on arjunjhukal.com.np in one place: products, features, hire pages for each technology, and every guide — plus the XML sitemap, feeds and llms.txt.",
  path: "/site-map",
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Site map", path: "/site-map" },
];

const GROUPS = ["Main", "Products", "Features", "Hire", "Guides"] as const;

export default function SiteMapPage() {
  const pages = siteIndex();
  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <h1 className="display-1">Site map.</h1>
        <p className="lede">
          Every page, grouped. Machines can read the same list as an{" "}
          <a href="/sitemap.xml" className="inline-link">XML sitemap</a>,{" "}
          <a href="/llms.txt" className="inline-link">llms.txt</a>, a{" "}
          <a href="/products.json" className="inline-link">product catalogue</a> and a{" "}
          <a href="/feed.json" className="inline-link">JSON feed</a> of the guides.
        </p>
      </section>
      {GROUPS.map((g) => (
        <section key={g} className="band wrap">
          <SectionHead title={g === "Hire" ? "Hire by technology" : g} />
          <ul className="sitemap-list">
            {pages
              .filter((p) => p.group === g)
              .map((p) => (
                <li key={p.path}>
                  <Link href={p.path}>{p.title}</Link>
                  <span>{p.summary}</span>
                </li>
              ))}
          </ul>
        </section>
      ))}
      <CtaBand />
      <JsonLd data={graph(breadcrumbLd(trail))} />
    </>
  );
}

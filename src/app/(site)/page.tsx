import Link from "next/link";
import type { Metadata } from "next";

import { CtaBand } from "@/components/site/Chrome";
import { ProductRows, SectionHead, PostMagazine } from "@/components/site/Blocks";
import { ProcessThread } from "@/components/site/ProcessThread";
import JsonLd from "@/components/site/JsonLd";
import { featuredProducts, products } from "@/content/products";
import { features } from "@/content/features";
import { skills } from "@/content/skills";
import { allPosts as posts } from "@/content/all-posts";
import { person, waLink, mailLink, demoHref, demoMessage, hireMessage, teamUpMessage, SITE_URL } from "@/content/contact";
import { pageMeta, graph, faqLd } from "@/lib/seo";
import { FaqList } from "@/components/site/Blocks";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Web Developer in Nepal | Arjun Jhukal",
    description:
      "Web developer in Kathmandu building online stores, marketplaces, booking sites and CMS platforms with React, Next.js, Node and WordPress. Book a demo.",
    path: "/",
    keywords: [
      "web developer Nepal",
      "web developer Kathmandu",
      "hire developer Nepal",
      "ecommerce website development Nepal",
      "React developer Nepal",
      "Next.js developer Nepal",
      "Node.js developer Nepal",
    ],
  }),
  title: { absolute: "Web Developer in Nepal | Arjun Jhukal" },
};

const PROCESS = [
  { title: "A 20-minute call", body: "You tell me what the business needs. I show you the product closest to it, running." },
  { title: "A clear quote", body: "What is ready, what gets built, how long, how much. In writing, in plain words." },
  { title: "Built in the open", body: "You see progress on a live preview link every week — not a big reveal at the end." },
  { title: "Launch and stay", body: "Domain, Google, payments tested with real money. Then I stay on call." },
];

const HOME_FAQ = [
  {
    q: "What does a web developer do?",
    a: "Everything a website needs: the pages people see ([React](/hire/react), [Next.js](/hire/nextjs)), the server that stores orders and takes payments ([Node.js](/hire/nodejs)), and the dashboard your team edits it from.",
  },
  {
    q: "Do you work with businesses outside Nepal?",
    a: "Yes — remotely, over Google Meet and WhatsApp. Many products here, like the [CMS](/products/next-cms), suit any country; [eSewa and Khalti](/features/esewa-khalti-payments) are just switched off.",
  },
  {
    q: "Can I see a product before paying?",
    a: "Always. [Book a demo](/book-a-demo) and I'll walk you through it live, or visit [Chhaka.com](/products/chhaka-cricket), which runs in production today.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- hero: a solid ink band, full-bleed ---------- */}
      <section className="hero-solid">
        <div className="hero wrap">
        <p className="cap hero-cap" data-reveal>
          <span className="dot" aria-hidden /> Web developer · Kathmandu
        </p>
        <h1 className="display-hero" data-reveal>
          I don&apos;t start from scratch. <em>Neither will you.</em>
        </h1>
        <div className="hero-foot hero-foot-min">
          <p className="lede" data-reveal>
            Ready-built stores and booking sites, made yours and live in weeks.
          </p>
          <div className="btn-row" data-reveal>
            <Link href={demoHref()} className="btn btn-thread-fill btn-thread btn-lg">
              Request a demo
            </Link>
            <a href={waLink(demoMessage())} className="btn btn-line btn-lg" target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
        </div>
        </div>
      </section>


      {/* ---------- recent products ---------- */}
      <section className="band wrap" id="products">
        <SectionHead
          no="01"
          title="Recent products"
          aside={
            <p>
              Every one is running software you can see in a demo. Pick the closest to your business — I adapt it to
              your brand. <Link href="/products" className="inline-link">All {products.length} products →</Link>
            </p>
          }
        />
        <ProductRows items={featuredProducts} />
      </section>

      {/* ---------- request a demo ---------- */}
      <section className="band">
        <div className="wrap demo-split">
          <div className="demo-big" data-reveal>
            <span className="cap">02 · Request a demo</span>
            <p className="display-2">See it running before you spend a rupee.</p>
          </div>
          <ol className="demo-ways" data-reveal>
            <li>
              <span className="cap">Schedule a meeting</span>
              <Link href={demoHref()} className="demo-way">
                Pick a date and time →
              </Link>
              <p>Google Meet, a phone call, or in person in Kathmandu.</p>
            </li>
            <li>
              <span className="cap">Text me on WhatsApp</span>
              <a href={waLink(demoMessage())} className="demo-way num" target="_blank" rel="noopener">
                {person.phone} →
              </a>
              <p>Fastest. I usually reply within the hour.</p>
            </li>
            <li>
              <span className="cap">Email</span>
              <a href={mailLink("Demo request")} className="demo-way">
                {person.email} →
              </a>
              <p>Good for briefs, documents and longer questions.</p>
            </li>
          </ol>
        </div>
      </section>


      {/* ---------- process ---------- */}
      <section className="band wrap">
        <SectionHead no="03" title="How a project goes" />
        <ProcessThread count={PROCESS.length} />
        <ol className="steps">
          {PROCESS.map((s, i) => (
            <li key={s.title} data-reveal>
              <span className="steps-no num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- hire / team up ---------- */}
      <section className="band">
        <div className="wrap hire-split">
          <div className="hire-col" data-reveal>
            <span className="cap">04 · For businesses</span>
            <h2 className="display-2">Hire me.</h2>
            <p className="lede">
              One developer for the whole thing — design to database to launch. Fixed-price projects or a monthly
              retainer for ongoing work. <Link href="/hire" className="inline-link">How hiring works →</Link>
            </p>
            <a href={waLink(hireMessage)} className="btn btn-thread-fill btn-thread" target="_blank" rel="noopener">
              Hire me on WhatsApp
            </a>
          </div>
          <div className="hire-col hire-col-alt" data-reveal>
            <span className="cap">For agencies &amp; teams</span>
            <h2 className="display-2">Team up.</h2>
            <p className="lede">
              Agencies and studios bring me in for the hard parts: payments, dashboards, multi-tenant backends,
              performance. White-label is fine.
            </p>
            <a href={waLink(teamUpMessage)} className="btn btn-line" target="_blank" rel="noopener">
              Team up with me
            </a>
          </div>
        </div>
        <div className="wrap">
          <ul className="skill-strip" data-reveal>
            {skills.map((s) => (
              <li key={s.slug}>
                <Link href={`/hire/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* ---------- features ---------- */}
      <section className="band wrap">
        <SectionHead
          no="05"
          title="Already built, ready for your project"
          aside={<p>Each one is explained in plain words, with the products that use it.</p>}
        />
        <ul className="feature-cloud" data-reveal>
          {features.map((f) => (
            <li key={f.slug}>
              <Link href={`/features/${f.slug}`}>{f.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- guides ---------- */}
      <section className="band wrap">
        <SectionHead
          no="06"
          title="Guides in plain words"
          aside={<Link href="/posts" className="inline-link">All guides →</Link>}
        />
        <PostMagazine posts={posts.slice(0, 5)} />
      </section>

      <section className="band wrap">
        <SectionHead no="07" title="Questions" />
        <FaqList faqs={HOME_FAQ} topic="a project" />
      </section>

      <CtaBand />

      <JsonLd
        data={graph(faqLd(HOME_FAQ), {
          "@type": "ItemList",
          name: "Products by Arjun Jhukal",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/products/${p.slug}`,
            name: p.name,
          })),
        })}
      />
    </>
  );
}

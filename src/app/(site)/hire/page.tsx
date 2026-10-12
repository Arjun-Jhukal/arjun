import Link from "next/link";
import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { FaqList, SectionHead, TileWall } from "@/components/site/Blocks";
import JsonLd from "@/components/site/JsonLd";
import { skills } from "@/content/skills";
import { productBySlug } from "@/content/products";
import { person, waLink, mailLink, hireMessage, teamUpMessage } from "@/content/contact";
import { pageMeta, graph, breadcrumbLd, faqLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Hire a Web Developer in Nepal",
  description:
    "Hire Arjun Jhukal, a web developer in Kathmandu: React, Next.js, Node.js, Fastify, NestJS, Express and WordPress. Fixed-price projects, retainers, agency work.",
  path: "/hire",
  keywords: [
    "hire web developer Nepal",
    "freelance developer Nepal",
    "hire web developer Kathmandu",
    "remote developer Nepal",
  ],
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Hire me", path: "/hire" },
];

const WAYS = [
  {
    title: "Fixed-price project",
    body: "A clear scope, a clear price, a launch date. Best for a new store, booking site or platform built on one of my products.",
  },
  {
    title: "Monthly retainer",
    body: "A set number of days each month for changes, new features, SEO and upkeep. Best once your site is live and growing.",
  },
  {
    title: "Team up (agencies)",
    body: "I join your team for the hard parts — payments, dashboards, backends, performance — under your brand if you like.",
  },
];

const FAQ = [
  { q: "Are you available for freelance work?", a: "Yes. I take on a small number of projects at a time so each one gets proper attention." },
  { q: "Do you work remotely with clients abroad?", a: "Yes — over Google Meet, WhatsApp and email, with a weekly preview link so you always see progress." },
  {
    q: "Can you take over an existing project?",
    a: "Yes. I start with a short review, tell you honestly what's worth keeping, then fix and extend it. Most work in [React](/hire/react), [Next.js](/hire/nextjs), [Node.js](/hire/nodejs) or [WordPress](/hire/wordpress).",
  },
];

export default function HirePage() {
  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <p className="cap hero-cap" data-reveal>
          <span className="dot" aria-hidden /> Available for projects · {person.city}
        </p>
        <h1 className="display-1" data-reveal>
          Hire one developer for the whole build.
        </h1>
        <div className="hero-foot">
          <p className="lede" data-reveal>
            I&apos;m a web developer: the pages people see, the server behind them, and the dashboard your team
            uses. That means one person who understands the whole product — and{" "}
            <Link href="/products" className="inline-link">
              eleven products
            </Link>{" "}
            already built, so your project skips the months most builds spend reinventing the basics.
          </p>
          <div className="btn-row" data-reveal>
            <a href={waLink(hireMessage)} className="btn btn-thread-fill btn-thread btn-lg" target="_blank" rel="noopener">
              Hire me on WhatsApp
            </a>
            <a href={mailLink("Hiring enquiry")} className="btn btn-line btn-lg">
              {person.email}
            </a>
          </div>
        </div>
      </section>

      <section className="band wrap">
        <SectionHead no="01" title="What I work in" aside={<p>Each links to the real projects built with it.</p>} />
        <TileWall
          tiles={skills.map((s) => ({
            href: `/hire/${s.slug}`,
            title: s.name,
            body: s.headline,
            note: (
              <>
                Used in{" "}
                {s.proof.map((pr, j) => {
                  const p = productBySlug(pr.product);
                  return p ? (
                    <span key={pr.product}>
                      <Link href={`/products/${p.slug}`}>{p.name}</Link>
                      {j < s.proof.length - 1 ? ", " : ""}
                    </span>
                  ) : null;
                })}
              </>
            ),
          }))}
        />
      </section>


      <section className="band wrap">
        <SectionHead no="02" title="Three ways to work together" />
        <ol className="steps steps-3">
          {WAYS.map((w, i) => (
            <li key={w.title} data-reveal>
              <span className="steps-no num">{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </li>
          ))}
        </ol>
        <div className="btn-row" data-reveal>
          <a href={waLink(hireMessage)} className="btn btn-thread-fill btn-thread" target="_blank" rel="noopener">
            Start a project
          </a>
          <a href={waLink(teamUpMessage)} className="btn btn-line" target="_blank" rel="noopener">
            Team up as an agency
          </a>
        </div>
      </section>

      <section className="band wrap">
        <SectionHead no="03" title="Questions" />
        <FaqList faqs={FAQ} topic="hiring you" />
      </section>

      <CtaBand title="Tell me what you're building." />
      <JsonLd data={graph(breadcrumbLd(trail), faqLd(FAQ))} />
    </>
  );
}

import type { Skill } from "./types";

/**
 * One page per technology people hire for. `proof` only cites products that
 * really run on that technology — checked against each project's package.json:
 * Fastify + Drizzle = the CMS and every store API; NestJS = the LMS backend;
 * Express = StreamKit (Superchat + Overlay); Next.js/React = every front end.
 */

export const skills: Skill[] = [
  {
    slug: "react",
    name: "React",
    headline: "Hire a React developer who ships whole products, not just components.",
    seoTitle: "Hire a React Developer in Nepal",
    seoDescription:
      "React developer in Kathmandu building dashboards, stores and interactive apps. Clean components, fast pages, real products in production. Book a call.",
    keywords: ["React developer Nepal", "hire React developer", "React JS developer Kathmandu", "freelance React developer"],
    intro:
      "React is the library behind almost every screen I build — store fronts, the [CMS dashboard](/products/next-cms), the [LMS](/products/lms-for-schools) and the [OBS overlays](/products/stream-overlay). I write React that the next developer can read: small components, clear state, and no clever tricks that break in six months.",
    builds: ["Admin dashboards and internal tools", "Interactive storefronts and product pages", "Real-time screens with live data", "Design systems and component libraries"],
    proof: [
      { product: "next-cms", note: "The whole editing dashboard is a React app." },
      { product: "stream-overlay", note: "Live overlays that update every few seconds inside OBS." },
      { product: "lms-for-schools", note: "Institute dashboards in Nepali and English." },
    ],
    pairsWith: ["nextjs", "nodejs", "html-css-javascript"],
    faqs: [
      { q: "Do you work with existing React codebases?", a: "Yes — fixing, extending and speeding up existing apps is a big part of the work." },
      { q: "Do you use TypeScript?", a: "By default, on every project." },
    ],
  },
  {
    slug: "nextjs",
    name: "Next.js",
    headline: "Hire a Next.js developer for fast, SEO-ready websites and stores.",
    seoTitle: "Hire a Next.js Developer in Nepal",
    seoDescription:
      "Next.js developer in Nepal: fast, SEO-friendly websites, online stores and news sites built with the App Router. Live examples including Chhaka.com.",
    keywords: ["Next.js developer Nepal", "hire Next.js developer", "Next JS website development", "Next.js freelancer"],
    intro:
      "Next.js is my default for anything that must be fast and found on Google. Pages are pre-built so they load instantly, and every page carries proper titles, sitemaps and structured data — the [SEO toolkit](/features/seo-toolkit) is part of the build, not an extra. [Chhaka.com](/products/chhaka-cricket) and every store here run on it.",
    builds: ["Business websites and landing pages", "Online stores and marketplaces", "News and sports sites with thousands of pages", "Static sites like this one"],
    proof: [
      { product: "chhaka-cricket", note: "Thousands of pre-built pages, live scores and a sitemap index." },
      { product: "multi-vendor-marketplace", note: "A multi-seller storefront with one cart for many shops." },
      { product: "online-clothing-store", note: "Variants, filters and virtual try-on." },
    ],
    pairsWith: ["react", "fastify", "nodejs"],
    faqs: [
      { q: "Is Next.js good for SEO?", a: "Yes, it is one of the best choices — pages arrive fully built for Google, and metadata is per page." },
      { q: "Where do you host Next.js sites?", a: "Usually Vercel; a Node server or static hosting also work." },
    ],
  },
  {
    slug: "nodejs",
    name: "Node.js",
    headline: "Hire a Node.js developer for APIs, payments and real-time backends.",
    seoTitle: "Hire a Node.js Backend Developer in Nepal",
    seoDescription:
      "Node.js backend developer in Nepal: REST and GraphQL APIs, eSewa/Khalti payments, real-time sockets, PostgreSQL. Production systems, not tutorials.",
    keywords: ["Node.js developer Nepal", "Node JS backend developer", "hire Node.js developer", "API developer Nepal"],
    intro:
      "Everything behind the pages is Node.js: the APIs, the [payment flows](/features/esewa-khalti-payments), the [WhatsApp alerts](/features/whatsapp-alerts), the live sockets that drive the [stream overlays](/products/stream-overlay). I pick the framework to fit the job — [Fastify](/hire/fastify) for speed, [NestJS](/hire/nestjs) for big structured apps, [Express](/hire/express) when the ecosystem matters most.",
    builds: ["REST and GraphQL APIs", "Payment and webhook handling", "Real-time features with sockets", "Background jobs, imports and scrapers"],
    proof: [
      { product: "next-cms", note: "Multi-site API with payments, alerts and analytics." },
      { product: "nepali-superchat", note: "eSewa and Khalti tips settled into a creator ledger." },
      { product: "lms-for-schools", note: "Multi-institute backend with roles." },
    ],
    pairsWith: ["fastify", "nestjs", "express"],
    faqs: [{ q: "Which database do you use?", a: "PostgreSQL by default, with Drizzle or Prisma." }],
  },
  {
    slug: "express",
    name: "Express",
    headline: "Express.js APIs that stay simple as they grow.",
    seoTitle: "Hire an Express.js Developer in Nepal",
    seoDescription:
      "Express.js developer for REST APIs, real-time apps with Socket.io and payment integrations. StreamKit, a live streaming platform, runs on Express.",
    keywords: ["Express.js developer", "Express API development", "Node Express developer Nepal"],
    intro:
      "Express is the most widely used Node framework, and the one most existing projects are written in. StreamKit — the platform behind [Nepali Superchat](/products/nepali-superchat) and [Stream Overlay](/products/stream-overlay) — runs on Express with Socket.io and Prisma, reading YouTube chat and pushing events to OBS in real time.",
    builds: ["REST APIs", "Socket.io real-time apps", "Webhooks for payments and platforms", "Maintenance of existing Express apps"],
    proof: [
      { product: "nepali-superchat", note: "Donation flows for eSewa and Khalti." },
      { product: "stream-overlay", note: "YouTube chat polling and live socket events." },
    ],
    pairsWith: ["nodejs", "react"],
    faqs: [{ q: "Should I move from Express to Fastify?", a: "Usually not for speed alone — I measured it on a real project and the gain was not worth the rewrite. I'll tell you honestly when it is." }],
  },
  {
    slug: "fastify",
    name: "Fastify",
    headline: "Fastify APIs for sites that need to stay fast under load.",
    seoTitle: "Hire a Fastify Developer | Node.js APIs",
    seoDescription:
      "Fastify developer building high-performance Node.js APIs with GraphQL, PostgreSQL and Drizzle. The Next CMS and every store API run on Fastify.",
    keywords: ["Fastify developer", "Fastify API", "Node.js Fastify GraphQL"],
    intro:
      "Fastify is a Node framework built for speed. The [Next CMS](/products/next-cms) API and every store built on it — [Kapda](/products/online-clothing-store), [Veloura](/products/beauty-store), [Yantra](/products/electronics-store), [Bazaar](/products/multi-vendor-marketplace) — run on Fastify with GraphQL and PostgreSQL.",
    builds: ["High-traffic REST and GraphQL APIs", "Multi-tenant SaaS backends", "Commerce and booking engines"],
    proof: [
      { product: "next-cms", note: "Multi-site CMS API with 40+ block types." },
      { product: "multi-vendor-marketplace", note: "Marketplace ranking, payouts and checkout." },
    ],
    pairsWith: ["nodejs", "nextjs"],
    faqs: [],
  },
  {
    slug: "nestjs",
    name: "NestJS",
    headline: "NestJS for large apps that a whole team will work on.",
    seoTitle: "Hire a NestJS Developer in Nepal",
    seoDescription:
      "NestJS developer for structured, testable backends: modules, roles, multi-tenant data and real-time. The Institute LMS backend is built with NestJS.",
    keywords: ["NestJS developer", "NestJS backend Nepal", "hire NestJS developer"],
    intro:
      "NestJS gives a Node backend a strict structure — modules, services, guards — which pays off when a system is big and a team will maintain it. The [Institute LMS](/products/lms-for-schools) backend uses NestJS with Prisma and Socket.io to keep many institutes' data apart.",
    builds: ["Enterprise and multi-tenant backends", "Role-based admin systems", "APIs with strong testing"],
    proof: [{ product: "lms-for-schools", note: "Institutes, programs, batches, attendance and roles." }],
    pairsWith: ["nodejs", "react"],
    faqs: [],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    headline: "WordPress websites done properly — fast, secure and easy to edit.",
    seoTitle: "Hire a WordPress Developer in Nepal",
    seoDescription:
      "WordPress developer in Kathmandu: custom themes, news portals, speed and SEO fixes, automated publishing. When WordPress is the right tool, built right.",
    keywords: ["WordPress developer Nepal", "WordPress website Nepal", "hire WordPress developer Kathmandu", "WordPress news portal Nepal"],
    intro:
      "WordPress is still the right answer for many blogs, news portals and company sites. I build custom themes, fix slow and hacked sites, and automate publishing — including a tool that pulls news feeds and publishes them to WordPress on a schedule. When a project outgrows WordPress, the [Next CMS](/products/next-cms) is the next step; I'll tell you honestly which one you need.",
    builds: ["Company and news websites", "Custom themes and blocks", "Speed, security and SEO clean-ups", "Automated publishing from feeds"],
    proof: [{ product: "next-cms", note: "For projects that outgrow WordPress." }],
    pairsWith: ["html-css-javascript", "react"],
    faqs: [{ q: "WordPress or a custom site?", a: "WordPress for content sites with a modest budget; custom for stores, bookings and anything with complex logic. Read [what a CMS is](/posts/what-is-a-cms)." }],
  },
  {
    slug: "html-css-javascript",
    name: "HTML, CSS & JavaScript",
    headline: "Hand-written HTML, CSS and JavaScript that loads fast everywhere.",
    seoTitle: "HTML, CSS & JavaScript Developer in Nepal",
    seoDescription:
      "Front-end developer for pixel-accurate HTML, CSS and JavaScript: landing pages, Figma to code, animation and accessibility. Fast on any phone.",
    keywords: ["HTML CSS developer Nepal", "front end developer Nepal", "Figma to HTML", "JavaScript developer Kathmandu"],
    intro:
      "Frameworks change; the foundations don't. Clean HTML is what Google reads, careful CSS is what makes a page look right on a cheap phone, and plain JavaScript keeps things light. This site's shuttle animation is hand-written SVG and CSS — no animation library.",
    builds: ["Landing pages from Figma", "Animations and micro-interactions", "Email templates", "Accessibility fixes"],
    proof: [
      { product: "stream-overlay", note: "Broadcast graphics drawn in HTML and CSS." },
      { product: "chhaka-cricket", note: "Fast pages tuned for phones." },
    ],
    pairsWith: ["react", "nextjs", "wordpress"],
    faqs: [],
  },
];

export const skillBySlug = (slug: string) => skills.find((s) => s.slug === slug);

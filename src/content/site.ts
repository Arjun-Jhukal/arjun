/**
 * Single source of truth for the whole page.
 *
 * VERIFY BEFORE SHIPPING — these came from cv.ts and the project repos, and a
 * couple of them are the kind of thing only you can confirm:
 *   - `roles[].period`  cv.ts recorded durations but no dates. Fill the months in.
 *   - `figures`         the four numbers in the masthead.
 *   - plate `link`      these point at the Vercel preview domains, which is what
 *                       actually resolves today. Swap in the custom domains when
 *                       the rastriyaaawaj DNS zone is cleaned up.
 *
 * Plate images are real screenshots of those deployments, captured 2026-10-01 and
 * stored in public/work. Re-run the capture when a site changes materially.
 * Nothing here invents an outcome. If a field is empty the component omits it.
 */

export const person = {
  name: "Arjun Jhukal",
  devanagari: "अर्जुन झुकाल",
  initials: "AJ",
  role: "Web developer",
  stack: "Next.js · React · WordPress",
  city: "Kathmandu, Nepal",
  coords: "27.7172° N · 85.3240° E",
  email: "jhukal9@gmail.com",
  phone: "+977 981-276-7046",
  phoneHref: "+9779812767046",
  available: "Available for freelance",
  languages: "Nepali, English, Hindi",
  issue: "Issue 04",
  year: "2026",
  standfirst:
    "I build complete websites — the pages, the dashboard your team edits them from, and the server in between. On a Next.js CMS I already run e-commerce, travel and publishing on, so your project does not start from an empty folder.",
  elsewhere: [
    { label: "GitHub", href: "https://github.com/Arjun-Jhukal" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-jhukal/" },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01203b19e827ffa79f?mp_source=share",
    },
    { label: "Blog", href: "https://blog.arjunjhukal.com.np" },
  ],
} as const;

export const figures = [
  { value: 4, suffix: "+", label: "years shipping websites that stay shipped" },
  { value: 8, suffix: "", label: "live sites running on the one CMS I built" },
  { value: 40, suffix: "+", label: "content blocks your team composes pages from" },
  { value: 5, suffix: "", label: "sectors already proven: retail, travel, publishing, events, education" },
] as const;

export const nav = [
  { id: "top", label: "Masthead" },
  { id: "work", label: "Plates" },
  { id: "archive", label: "Archive" },
  { id: "stack", label: "The stack" },
  { id: "about", label: "Colophon" },
  { id: "experience", label: "The log" },
  { id: "contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ plates */

export type Plate = {
  id: string;
  title: string;
  kicker: string;
  /** the one sentence that earns the scroll */
  claim: string;
  kind: string;
  years: string;
  role: string;
  org: string;
  outcome: string;
  stack: string[];
  link?: { label: string; href: string; live: boolean };
  /** a real screenshot of the live deployment, captured 2026-10-01 */
  image: { src: string; alt: string };
};

export const plates: Plate[] = [
  {
    id: "cms",
    title: "Makura CMS",
    kicker: "The content layer",
    claim: "One CMS. Eight live sites. Forty block types. Nobody touches code to publish.",
    kind: "Platform",
    years: "2025 — now",
    role: "Front-end lead",
    org: "Makura Creations",
    outcome:
      "Eight sites now run on the one backend: cricket, travel, beauty retail, events, news, a consultancy, an agency and a streaming overlay.",
    stack: [
      "Next.js",
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind v4",
      "GraphQL",
      "Fastify",
      "Drizzle",
      "Postgres",
    ],
    image: {
      src: "/work/cms.webp",
      alt: "Three live storefronts — a cricket site, a trekking site and a beauty store — all served by the same CMS",
    },
  },
  {
    id: "chhaka",
    title: "Chhaka",
    kicker: "Cricket, at the speed of a match",
    claim: "Four leagues of cricket history, rendered as pages a search engine can actually read.",
    kind: "Media site",
    years: "2026 — now",
    role: "Front-end developer",
    org: "Makura Creations",
    outcome:
      "Historical seasons across four leagues are live as static pages, with the live-match surfaces reading from a scorecard API.",
    stack: ["Next.js", "React", "TypeScript", "GraphQL", "SSG & ISR", "Tailwind", "SEO"],
    link: { label: "chhaka-prod.vercel.app", href: "https://chhaka-prod.vercel.app", live: true },
    image: {
      src: "/work/chhaka.webp",
      alt: "Chhaka cricket site: upcoming fixtures with team crests and a featured NPL article",
    },
  },
  {
    id: "travel",
    title: "Himalaya Treks",
    kicker: "Trek packages, authored not hard-coded",
    claim: "A trekking catalogue where the itinerary, the price and the gallery are all editable records.",
    kind: "Storefront",
    years: "2025 — now",
    role: "Front-end developer",
    org: "Makura Creations",
    outcome:
      "Running as the travel tenant on the shared CMS, with search, destinations, day-by-day itineraries and enquiries routed to WhatsApp.",
    stack: ["Next.js", "React", "TypeScript", "GraphQL", "Tailwind", "WhatsApp API"],
    link: { label: "yatra-prod.vercel.app", href: "https://yatra-prod.vercel.app", live: true },
    image: {
      src: "/work/travel.webp",
      alt: "Himalaya Treks homepage: a full-bleed Annapurna photograph with trek search",
    },
  },
  {
    id: "store",
    title: "Veloura Beauty",
    kicker: "E-commerce on the content layer",
    claim: "A beauty store where the product page is a CMS composition and the cart survives a login.",
    kind: "E-commerce",
    years: "2026 — now",
    role: "Front-end developer",
    org: "Makura Creations",
    outcome:
      "Live as the retail tenant: catalogue, categories as real routes, a dual-source cart merged on sign-in, and one shared customer auth.",
    stack: ["Next.js", "React", "TypeScript", "GraphQL", "Tailwind", "Stripe"],
    link: {
      label: "online-store-prod.vercel.app",
      href: "https://online-store-prod.vercel.app",
      live: true,
    },
    image: {
      src: "/work/store.webp",
      alt: "Veloura Beauty storefront: a full-width serum campaign image over a shop-by-category rail",
    },
  },
  {
    id: "events",
    title: "EventPlanner",
    kicker: "A tenant built block-first",
    claim: "Twenty-seven block types and one renderer — the templates are the fallback, not the source.",
    kind: "Storefront",
    years: "2025 — now",
    role: "Front-end developer",
    org: "Makura Creations",
    outcome:
      "An events tenant whose entire front page is composed in the dashboard, gallery and all, with no deploy to change it.",
    stack: ["Next.js", "React", "TypeScript", "GraphQL", "Tailwind"],
    link: { label: "event-planner.vercel.app", href: "https://event-planner.vercel.app", live: true },
    image: {
      src: "/work/events.webp",
      alt: "EventPlanner homepage: a dense masonry gallery of wedding and party styling photographs",
    },
  },
];

/* ----------------------------------------------------------------- archive */

export type ArchiveRow = {
  id: string;
  year: string;
  title: string;
  kind: string;
  org: string;
  role: string;
  summary: string;
  detail: string;
  stack: string[];
  href?: string;
};

export const archive: ArchiveRow[] = [
  {
    id: "hris",
    year: "2024",
    title: "HRIS",
    kind: "Internal tool",
    org: "Progressive Labs",
    role: "Associate front-end developer",
    summary: "Leave, payroll and employee records, off the spreadsheets",
    detail:
      "A human resource information system built in React with Redux Toolkit and Material UI against a REST API. The hard part was not the CRUD: it was modelling real HR rules — accrual, carry-over, approval chains — and giving a manager and an employee the same system through different eyes. No public URL; it runs inside the company.",
    stack: ["React", "Redux Toolkit", "Material UI", "REST API"],
  },
  {
    id: "mdm",
    year: "2024",
    title: "Mobile Device Management",
    kind: "Internal tool",
    org: "Progressive Labs",
    role: "Front-end developer",
    summary: "Daily activity tracking for a distributed team",
    detail:
      "A dashboard that reads device and application activity and turns it into a day a manager can actually read. Built in Next.js with RTK Query doing the caching, so the heavy reporting screens stopped refetching on every tab change.",
    stack: ["Next.js", "RTK Query", "REST API", "TypeScript"],
  },
  {
    id: "loksewa",
    year: "2024",
    title: "Loksewa Portal",
    kind: "Platform",
    org: "Freelance",
    role: "Full-stack front-end",
    summary: "Exam preparation with role-gated material",
    detail:
      "E-books, notes and video classes for Loksewa candidates, with registration, login and role-based access deciding what each account can open. Next.js against a REST API with RTK Query.",
    stack: ["Next.js", "RTK Query", "REST API", "Auth"],
  },
  {
    id: "overlay",
    year: "2026",
    title: "Cricket broadcast overlay",
    kind: "Real-time",
    org: "Makura Creations",
    role: "Front-end developer",
    summary: "Scoreboard graphics for an OBS browser source",
    detail:
      "Two permanent captures — 16:9 for YouTube, 9:16 for TikTok — reading a live scorecard and playing a per-ball animation. One scene clock drives everything, because two clocks in a broadcast overlay is a drift bug you only see on air.",
    stack: ["Next.js", "Three.js", "WebSocket", "TypeScript"],
  },
  {
    id: "event-planner",
    year: "2025",
    title: "Event planner",
    kind: "Storefront",
    org: "Makura Creations",
    role: "Front-end developer",
    summary: "A tenant built block-first, not template-first",
    detail:
      "Twenty-seven tenant block types and one renderer. The TSX templates are the fallback, not the source — which is the whole point of the exercise.",
    stack: ["Next.js", "React", "GraphQL", "Tailwind"],
  },
  {
    id: "wedding",
    year: "2023",
    title: "Wedding planner portfolio",
    kind: "Marketing site",
    org: "Code Pros",
    role: "Front-end developer",
    summary: "Team, services and projects, heavy on motion",
    detail:
      "My first properly animated build — section transitions, staggered reveals, a gallery that behaved. Next.js reading DatoCMS over GraphQL.",
    stack: ["Next.js", "DatoCMS", "GraphQL", "SCSS"],
  },
  {
    id: "news",
    year: "2023",
    title: "News portal",
    kind: "Publishing",
    org: "Code Pros",
    role: "Front-end developer",
    summary: "Search, filters and category routing at volume",
    detail:
      "A WordPress news site where the archive, not the homepage, is the hard part: category routing, search, filtering and a template that stays fast as the post count climbs.",
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
  {
    id: "travel-wp",
    year: "2025",
    title: "Travel website",
    kind: "Marketing site",
    org: "Makura Creations",
    role: "Front-end lead",
    summary: "Destinations, regions, activities, packages",
    detail:
      "The WordPress build that taught me what the travel content model actually needs — and why doing it again on a CMS with real schemas was worth it.",
    stack: ["WordPress", "PHP", "SCSS", "jQuery"],
  },
  {
    id: "capital",
    year: "2025",
    title: "Capital venture portfolio",
    kind: "Marketing site",
    org: "Makura Creations",
    role: "Front-end lead",
    summary: "A full company site, front to back",
    detail:
      "Home, about, services, portfolio, careers and contact, built end to end in WordPress with custom templates rather than a theme fought into shape.",
    stack: ["WordPress", "PHP", "SCSS"],
  },
  {
    id: "construction",
    year: "2023",
    title: "Construction company portfolio",
    kind: "Marketing site",
    org: "Code Pros",
    role: "Front-end developer",
    summary: "Store locator by location and keyword",
    detail:
      "A company site whose real feature was a searchable, filterable branch directory — location plus keyword, with results that stayed readable on a phone.",
    stack: ["WordPress", "PHP", "JavaScript"],
  },
  {
    id: "story-circle",
    year: "2026",
    title: "Story Circle",
    kind: "Personal",
    org: "Personal",
    role: "Everything",
    summary: "My own writing, on my own stack",
    detail:
      "A blog I keep because owning the publishing pipeline end to end is the fastest way to learn what a CMS should feel like.",
    stack: ["Next.js", "DatoCMS", "GraphQL"],
    href: "https://blog.arjunjhukal.com.np",
  },
];

/* ------------------------------------------------------------------- stack */

export type Layer = {
  code: string;
  title: string;
  note: string;
  items: string[];
  /** honest signal — shown as a small tag on the layer */
  level: "daily" | "strong" | "growing";
};

export const layers: Layer[] = [
  {
    code: "L_01",
    title: "The interface",
    note: "Where I actually live. Components, layout, type and the thousand small states a real screen has.",
    items: ["React 19", "Next.js App Router", "TypeScript", "Tailwind", "SCSS", "Accessibility"],
    level: "daily",
  },
  {
    code: "L_02",
    title: "State & data",
    note: "Keeping a screen honest about what it knows: caching, invalidation, and tables that do not refetch on a tab change.",
    items: ["Redux Toolkit", "RTK Query", "TanStack Table", "GraphQL", "REST", "Zod"],
    level: "daily",
  },
  {
    code: "L_03",
    title: "The content layer",
    note: "Ten years of client sites taught me the same lesson: if an editor cannot change it, it will stay wrong.",
    items: ["WordPress", "Block schemas", "DatoCMS", "Gutenberg", "Media pipelines", "Editorial UX"],
    level: "strong",
  },
  {
    code: "L_04",
    title: "The server",
    note: "I write the API my sites run on — auth, records, media, payments — on the Fastify and Postgres backend behind the CMS. Newer ground than the front end, and I will tell you that rather than oversell it.",
    items: ["Node", "Express", "Fastify", "Drizzle", "Postgres", "Auth & JWT"],
    level: "growing",
  },
  {
    code: "L_05",
    title: "Ship & measure",
    note: "A build is not finished when it renders. It is finished when it is fast on the connection it will be read on.",
    items: ["Vercel", "cPanel & Passenger", "Git", "Core Web Vitals", "Sitemaps", "Search Console"],
    level: "daily",
  },
  {
    code: "L_06",
    title: "The desk",
    note: "Where the work gets specified, drawn and argued about before any of it gets typed.",
    items: ["Figma", "Photoshop", "Postman", "Jira", "Notion", "QA"],
    level: "daily",
  },
];

export const marquee = [
  "React",
  "Next.js",
  "TypeScript",
  "WordPress",
  "Tailwind",
  "GraphQL",
  "Redux Toolkit",
  "Postgres",
  "Fastify",
  "Drizzle",
  "SCSS",
  "Figma",
  "GSAP",
  "Node",
  "Vercel",
  "Git",
];

/* ----------------------------------------------------------------- process */

export const process = [
  {
    step: "01",
    name: "A free first call",
    title: "We start with what goes on the page",
    body:
      "Not the layout — the content. What you publish, who edits it, how often it changes. It costs nothing and commits you to nothing, and it is the half most quotes skip.",
  },
  {
    step: "02",
    name: "Scope and a number",
    title: "One document, a price, a date",
    body:
      "Pages, components, integrations, and what is explicitly out. You sign off before anything is built, so neither of us is guessing what finished means.",
  },
  {
    step: "03",
    name: "Build in the open",
    title: "A preview URL from week one",
    body:
      "You watch it being built on a real link, not in a slide deck. Feedback lands while it is still cheap to act on, which is the only time it is cheap.",
  },
  {
    step: "04",
    name: "Ship and hand over",
    title: "Launch, measure, then leave you running it",
    body:
      "Deploy, check it on a real phone on a real connection, then hand over the dashboard and train whoever will be using it. No retainer required to change your own copy.",
  },
] as const;

/**
 * The commercial argument: most of a project is already built, so the money goes
 * on your site rather than on scaffolding. Kept to four points, each verifiable
 * against something on this page.
 */
export const included = [
  {
    no: "I",
    title: "A CMS, not a monthly SaaS bill",
    body:
      "Your site ships with the dashboard I built and maintain. No per-seat licence, no per-record pricing, no third party deciding what your content model is allowed to look like.",
  },
  {
    no: "II",
    title: "Pages composed, not coded",
    body:
      "Forty block types and counting. Your team assembles a landing page by dragging blocks, and a copy change never needs a developer, a branch or a deploy.",
  },
  {
    no: "III",
    title: "Already proven in your sector",
    body:
      "E-commerce with a real cart and checkout, travel with itineraries and enquiries, publishing at thousands of pages. Those are running sites, not a roadmap.",
  },
  {
    no: "IV",
    title: "Hosting that suits your budget",
    body:
      "Vercel when you want the fast path, or cPanel on the hosting you already pay for. I have deployed the same stack both ways and will tell you which one your traffic actually needs.",
  },
] as const;

/* --------------------------------------------------------------------- log */

export type Role = {
  hash: string;
  /** TODO: cv.ts recorded durations, not dates — fill these in before shipping */
  period: string;
  duration: string;
  title: string;
  org: string;
  body: string;
  tags: string[];
};

export const roles: Role[] = [
  {
    hash: "a7f1c04",
    period: "2025 — now",
    duration: "10 months",
    title: "Front-end Lead",
    org: "Makura Creations",
    body:
      "Leading the front end of a multi-tenant CMS and the storefronts that read from it — cricket, travel, retail, events — and the WordPress builds alongside it.",
    tags: ["Makura CMS", "Chhaka", "Yatra with Sherpa", "Veloura"],
  },
  {
    hash: "3b92e5d",
    period: "2024 — 2025",
    duration: "8 months",
    title: "Associate Front-end Developer",
    org: "Progressive Labs",
    body:
      "Built the HRIS front end in React, Redux Toolkit and MUI, and the MDM activity dashboard in Next.js with RTK Query.",
    tags: ["HRIS", "MDM"],
  },
  {
    hash: "c18d7a2",
    period: "2023 — 2024",
    duration: "6 months",
    title: "Front-end Developer",
    org: "Code Pros Pvt. Ltd.",
    body:
      "A news portal, a construction company site and a heavily animated wedding-planner portfolio on Next.js with DatoCMS.",
    tags: ["News portal", "Wedding planner"],
  },
  {
    hash: "0e45b91",
    period: "2022 — 2023",
    duration: "18 months",
    title: "QA & Front-end Developer",
    org: "Suga Inc.",
    body:
      "Started on the QA side and moved into the front end. Learning to break things first is the reason I now build them differently.",
    tags: ["QA", "Front-end"],
  },
];

/* ------------------------------------------------------------- credentials */

export const education = [
  {
    code: "CRED_01",
    period: "2023",
    title: "Bachelor's in Computer Science",
    org: "Madan Bhandari Memorial College",
    note: "Tribhuvan University",
    sigil: "MB",
  },
  {
    code: "CRED_02",
    period: "2018",
    title: "Higher Secondary, Science",
    org: "NAST, Dhangadhi",
    note: "Nepal Education Board",
    sigil: "NA",
  },
  {
    code: "CRED_03",
    period: "2016",
    title: "School Leaving Certificate",
    org: "Gyanoday Vidya Niketan",
    note: "Dadeldhura, Nepal",
    sigil: "GV",
  },
] as const;

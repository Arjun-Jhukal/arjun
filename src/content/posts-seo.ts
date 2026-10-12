import type { Post } from "./types";

/**
 * SEO series. Thresholds and limits are Google's documented ones (Core Web
 * Vitals, the 15 MB Googlebot fetch limit, sitemap limits, the 2023 change that
 * restricted FAQ rich results). Live examples point at this site's own files.
 */
export const seoPosts: Post[] = [
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO in plain words: page speed, sitemap, robots.txt, llms.txt, JSON-LD and meta tags",
    seoTitle: "Technical SEO Checklist for Your Website (2026)",
    seoDescription:
      "Check page speed, set up sitemap.xml, robots.txt, llms.txt, JSON-LD and meta tags, submit to Google Search Console and Bing, and cut page size — in plain words.",
    keywords: [
      "technical SEO checklist",
      "how to submit sitemap to Google Search Console",
      "check website page speed",
      "meta tags for SEO",
      "robots.txt and sitemap.xml",
      "reduce page size website",
    ],
    date: "2026-10-12",
    readMins: 10,
    excerpt:
      "The parts of SEO nobody sees: speed, the files search engines read, the tags in your page head, and how to tell Google your site exists.",
    body: [
      {
        p: "Most SEO advice is about words: keywords, blog posts, headings. That matters. But before Google can rank your words, it has to **find** your pages, **read** them quickly and **understand** what they are. That part is called technical SEO. It is invisible to your visitors, and when it is broken, no amount of good writing saves you. This guide walks through every piece in the order I check them on a new site — with the free tools to test each one yourself.",
      },
      {
        note: "Every example below is live on this site. Open [arjunjhukal.com.np/sitemap.xml](https://arjunjhukal.com.np/sitemap.xml), [/robots.txt](https://arjunjhukal.com.np/robots.txt) and [/llms.txt](https://arjunjhukal.com.np/llms.txt) in a new tab while you read.",
      },

      { h2: "1. Page speed: how to check it, and which sites to use" },
      {
        p: "Speed affects two things: whether visitors stay, and how Google rates the page experience. Google measures it with three numbers called **Core Web Vitals**:",
      },
      {
        ul: [
          "**LCP (Largest Contentful Paint)** — how long until the biggest thing on screen (usually the banner image or headline) appears. Good: **2.5 seconds or less**.",
          "**INP (Interaction to Next Paint)** — how quickly the page reacts when someone taps a button. Good: **200 milliseconds or less**.",
          "**CLS (Cumulative Layout Shift)** — how much the page jumps around while loading (the button that moves just as you tap it). Good: **0.1 or less**.",
        ],
      },
      { p: "Free tools to test it:" },
      {
        ul: [
          "**[PageSpeed Insights](https://pagespeed.web.dev)** — start here. Paste your URL. The top part shows *real visitors'* data from Chrome users (if your site has enough traffic); the bottom part is a lab test with a list of fixes.",
          "**Lighthouse** — the same lab test built into Chrome. Right-click → Inspect → Lighthouse tab → Analyse. Good for testing a page before it goes live.",
          "**[WebPageTest](https://www.webpagetest.org)** — shows a filmstrip of your page loading, second by second, from a chosen location and connection. Great for seeing *why* it is slow.",
          "**[GTmetrix](https://gtmetrix.com)** — a friendly report with a waterfall of every file the page downloads.",
        ],
      },
      {
        note: "Always test the **mobile** result, and test more than the homepage — a product page or a blog post is often where speed falls apart. Run each test two or three times; one run can be unlucky.",
      },

      { h2: "2. sitemap.xml — the list of your pages" },
      {
        p: "A sitemap is a file that lists every page you want search engines to find, with the date each one last changed. It lives at the root of your site, usually at `/sitemap.xml`. It does not make Google rank you — it makes sure Google *knows* about every page, especially new ones and pages that few other pages link to.",
      },
      {
        ul: [
          "List only pages you want in Google: no login pages, no thank-you pages, no duplicates.",
          "Keep `lastmod` honest — the date the content really changed. Search engines learn to ignore a sitemap that claims everything changed today.",
          "Skip `priority` and `changefreq`. Google ignores both; an accurate `lastmod` is the only hint it uses. This site's sitemap leaves them out.",
          "One sitemap holds up to 50,000 URLs (or 50 MB). Bigger sites split into several and list them in a sitemap index.",
          "Images can be listed too, with captions — this site's sitemap includes every product screenshot.",
          "Generate it automatically from your content, so a new page is in the sitemap the moment it is published. On sites built with [Next CMS](/products/next-cms) this is part of the [SEO toolkit](/features/seo-toolkit).",
        ],
      },

      { h2: "3. robots.txt — the house rules for crawlers" },
      {
        p: "`robots.txt` sits at `/robots.txt` and tells crawlers which parts of the site they may visit. It is also where you announce your sitemap. A healthy one for most business sites is just a few lines: allow everything, point to the sitemap.",
      },
      {
        ul: [
          "**Do** add a `Sitemap:` line with the full address of your sitemap.",
          "**Do** block things with no search value, like an admin area or internal search results.",
          "**Don't** use robots.txt to hide a page from Google. Blocking crawling does not remove a page that is already known; use a `noindex` robots meta tag on the page instead.",
          "**Don't** block your CSS or JavaScript files — Google needs them to see the page the way visitors do.",
          "**Check it after every launch.** A leftover `Disallow: /` from a staging site has de-indexed more businesses than any algorithm update.",
        ],
      },

      { h2: "4. llms.txt — a guide for AI assistants" },
      {
        p: "`llms.txt` is a newer, proposed standard ([llmstxt.org](https://llmstxt.org)): a plain-text file at `/llms.txt` that gives AI tools a short, clean summary of your site — who you are, what you offer, and links to your most important pages. Some sites add `/llms-full.txt` with the full text as well.",
      },
      {
        p: "Be clear about what it is: Google does not use llms.txt for ranking. It is a cheap, low-risk way to help AI assistants describe your business accurately when people ask them about it. Generate it from the same content as your sitemap so it never goes stale — that is how this site's version is built.",
      },

      { h2: "5. JSON-LD — telling Google what a page *is*" },
      {
        p: "Structured data is a block of code in the page that says, in a format machines understand, \"this page is a product\", \"this is an article written by this person on this date\", \"this is a local business with this phone number\". The recommended format is **JSON-LD**, using the vocabulary from schema.org.",
      },
      {
        ul: [
          "**Organization / Person / LocalBusiness** — who runs the site, contact details, social profiles.",
          "**WebSite** — your site's name, which helps Google show the right site name in results.",
          "**BreadcrumbList** — the trail (Home › Products › Kapda) that can appear in results instead of a raw URL.",
          "**Article / BlogPosting** — headline, author, publish and update dates for posts.",
          "**Product** — price, availability and reviews for things you sell.",
          "**FAQPage** — question-and-answer pairs. Since 2023 Google shows FAQ rich results only for a small set of well-known government and health sites, so do not expect the drop-down in results — but the markup still helps search engines understand the page.",
        ],
      },
      {
        p: "Test it with Google's **[Rich Results Test](https://search.google.com/test/rich-results)** and the **[Schema Markup Validator](https://validator.schema.org)**. Only mark up what is actually visible on the page — marking up hidden or invented content can earn a manual penalty.",
      },
      { cta: "next-cms" },

      { h2: "6. Meta elements — the ones you must not forget" },
      {
        p: "The `<head>` of every page carries small tags that visitors never see but search engines and social apps read first. Here is the checklist, roughly in order of importance:",
      },
      {
        ol: [
          "**`<title>`** — the blue headline in Google. Unique on every page, front-load the main phrase, keep it around 50–60 characters. Google often rewrites titles that are too long, and may swap in your H1.",
          "**Meta description** — the grey text under the title. It does not raise rankings directly, but a clear one wins clicks. About 150–160 characters, unique per page.",
          "**Canonical link** — `<link rel=\"canonical\">` names the one true address of the page, so `?ref=facebook` copies and `www`/non-`www` twins don't split your ranking.",
          "**Viewport** — `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`. Without it your site looks like a shrunken desktop page on phones, and fails mobile tests.",
          "**`lang` on `<html>`** and **charset UTF-8** — tells browsers and search engines the language, and keeps Nepali text from turning into boxes.",
          "**Robots meta** — `noindex` on pages that should not appear in Google (thank-you pages, internal search, staging). Check it is *not* left on live pages.",
          "**Open Graph tags** — `og:title`, `og:description`, `og:image` (1200 × 630 pixels works everywhere), `og:url`, `og:type` and `og:site_name`. These control the preview card on Facebook, WhatsApp, LinkedIn and Viber. Every page on this site has its own card.",
          "**Twitter/X card** — `twitter:card` set to `summary_large_image` for the big preview.",
          "**Favicon and app icons** — the little logo in browser tabs and in Google's mobile results.",
          "**`theme-color`** — colours the browser bar on phones to match your brand.",
          "**`hreflang`** — only if you publish the same page in several languages, for example Nepali and English versions.",
        ],
      },
      {
        p: "And one to *skip*: **meta keywords**. Google has ignored them for well over a decade. Filling them in only shows competitors which words you are chasing.",
      },

      { h2: "7. Submitting your sitemap to Google Search Console" },
      {
        ol: [
          "Go to **[Google Search Console](https://search.google.com/search-console)** and sign in with the Google account that should own the site.",
          "Add a property. **Domain property** (recommended) covers every version of your site and is verified with a TXT record in your domain's DNS. **URL prefix** covers one address and can be verified with an HTML file or a meta tag.",
          "Once verified, open **Sitemaps** in the left menu, type `sitemap.xml` and press **Submit**.",
          "Come back after a day or two: the status should say *Success*, with the number of pages discovered.",
          "For a brand-new or freshly updated page, use **URL Inspection** at the top, paste the address and press **Request indexing**.",
          "Check the **Pages** report and **Core Web Vitals** report every few weeks — this is where Google tells you what is broken.",
        ],
      },

      { h2: "8. Submitting to Bing Webmaster Tools (and IndexNow)" },
      {
        ol: [
          "Go to **[Bing Webmaster Tools](https://www.bing.com/webmasters)** and sign in.",
          "Choose **Import from Google Search Console** — it copies your verified sites and sitemaps in one step. Or add the site manually and verify it.",
          "Open **Sitemaps** and submit your sitemap address if it is not already there.",
          "Bing also supports **IndexNow**, a way for your site to ping search engines the moment a page changes. Bing and several other engines use it; Google does not. Sites built on [Next CMS](/products/next-cms) send these pings automatically from the [SEO toolkit](/features/seo-toolkit).",
        ],
      },
      { p: "Bing matters more than its market share suggests: its index also powers other search tools and AI assistants." },

      { h2: "9. HTML size and page size — and how to reduce them" },
      {
        p: "Two different sizes matter. **HTML size** is the page's code itself. **Page size** (or page weight) is everything the browser downloads: HTML, images, fonts, scripts and styles. Google's crawler reads only the first 15 MB of an HTML file — you will rarely hit that — but long before that limit, a heavy page is a slow page on Nepali mobile data.",
      },
      { p: "Where the weight usually comes from, and the fix:" },
      {
        ul: [
          "**Images** — the biggest culprit by far. Export at the size they are shown (not a 4000-pixel photo in a 400-pixel box), use **WebP or AVIF**, set `width` and `height` so the layout does not jump, and lazy-load images below the fold. Never lazy-load the banner image — it slows LCP.",
          "**Inline SVG icons** — an SVG pasted straight into the HTML is fine once. Pasted on every card, in every menu and footer, the same long `<path>` code repeats dozens of times and bloats every page's HTML. Use an icon library that serves icons from a sprite, a CDN or an npm package instead — for example **[Makura Icons](https://makuracreations-icons.vercel.app)**, a set of over 1,000 hand-drawn icons in six styles, available from a CDN, npm, as a sprite you reference with `<use>`, or as individual SVG downloads. The icon is downloaded once and cached, not repeated in every page.",
          "**Base64 images inside CSS or HTML** — they cannot be cached separately and inflate the file by about a third. Keep images as real image files.",
          "**Fonts** — load only the weights you use, prefer WOFF2, and use `font-display: swap` so text shows immediately.",
          "**JavaScript** — the slowest thing on a cheap phone. Remove unused libraries, delay chat widgets and trackers until after the page loads, and prefer pre-built pages over pages assembled in the browser. This is a big reason I build on [Next.js](/hire/nextjs) — see [Next.js vs WordPress](/posts/nextjs-vs-wordpress).",
          "**Too many elements** — Lighthouse warns when a page has a very large DOM (thousands of elements). Endless nested wrappers from page builders are a common cause.",
          "**No compression or caching** — make sure your host serves text files with gzip or Brotli and sets long cache headers on images, fonts and scripts.",
        ],
      },
      {
        note: "To see your page weight, open Chrome DevTools → Network tab, tick *Disable cache*, reload, and read the total at the bottom. For most business pages, under about 1–2 MB on mobile is a sensible target; under 1 MB is better.",
      },

      { h2: "10. A ten-minute checklist for any site" },
      {
        ol: [
          "Run [PageSpeed Insights](https://pagespeed.web.dev) on the homepage and one inner page, on mobile.",
          "Open `/robots.txt` — is there a `Sitemap:` line, and no accidental `Disallow: /`?",
          "Open `/sitemap.xml` — does it list your real pages with sensible dates?",
          "View the page source of two pages — unique titles, descriptions and a canonical on each?",
          "Paste a page into the [Rich Results Test](https://search.google.com/test/rich-results) — any errors?",
          "Share a page link in WhatsApp — does a proper preview card appear?",
          "Check Search Console's Pages report for errors.",
        ],
      },
      {
        p: "If any of that sounds like more than you want to manage, it is exactly what comes built in when I make a site — every page here was built this way. The [SEO toolkit](/features/seo-toolkit) page lists what is included, and [the website cost guide](/posts/website-cost-in-nepal) explains where it fits in a budget.",
      },
      { cta: "demo" },
    ],
    products: ["next-cms", "chhaka-cricket", "travel-agency-website"],
    features: ["seo-toolkit", "block-page-builder", "analytics-dashboard"],
    faqs: [
      {
        q: "How do I check my website's page speed?",
        a: "Paste your URL into PageSpeed Insights (pagespeed.web.dev) and read the mobile result. For a deeper look, use Lighthouse in Chrome DevTools, WebPageTest for a loading filmstrip, or GTmetrix for a file-by-file waterfall.",
      },
      {
        q: "How do I submit my sitemap to Google Search Console?",
        a: "Verify your site in Search Console, open Sitemaps in the left menu, enter sitemap.xml and press Submit. Check back after a day or two for a Success status.",
      },
      {
        q: "What is the difference between robots.txt and sitemap.xml?",
        a: "robots.txt tells crawlers where they may and may not go, and points to your sitemap. sitemap.xml lists the pages you want found. One sets the rules; the other is the map.",
      },
      {
        q: "Does llms.txt help Google rankings?",
        a: "No. Google does not use it for ranking. It helps AI assistants summarise your site accurately, and costs almost nothing to add.",
      },
      {
        q: "Which meta tags are most important for SEO?",
        a: "The title tag, meta description, canonical link and viewport tag first; then robots meta, Open Graph tags for share previews, and the lang attribute. Skip meta keywords — Google ignores them.",
      },
      {
        q: "How do I reduce my website's page size?",
        a: "Compress and resize images (WebP or AVIF), stop pasting the same SVG icons into every page and use an icon sprite or library instead, load fewer fonts and scripts, and turn on gzip or Brotli compression. See the [SEO toolkit](/features/seo-toolkit) for what a well-built site includes.",
      },
    ],
  },
];

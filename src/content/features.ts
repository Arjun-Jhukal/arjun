import type { Feature } from "./types";

/**
 * Shared capabilities. Each one is a page that answers a search on its own
 * ("esewa khalti payment integration website") and links to every product that
 * has it — this is the hub that most internal links on the site point at.
 */

export const features: Feature[] = [
  {
    slug: "esewa-khalti-payments",
    name: "eSewa & Khalti payments",
    headline: "eSewa, Khalti and cash on delivery on your website.",
    seoTitle: "eSewa & Khalti Payment Integration for Websites",
    seoDescription:
      "Take eSewa, Khalti and cash on delivery on your website. How payment integration works in Nepal, what you need from the wallet, and which products include it.",
    keywords: [
      "eSewa payment integration",
      "Khalti payment integration",
      "eSewa Khalti website",
      "payment gateway Nepal website",
      "cash on delivery website Nepal",
    ],
    intro:
      "Most Nepali shoppers pay with eSewa, Khalti or cash on delivery. A checkout that only takes cards loses them. Every store I build takes all three, and the order is only marked paid once the wallet itself confirms it — so nobody gets goods for a payment that failed. The full plain-words walk-through is in [how eSewa and Khalti work on a website](/posts/esewa-khalti-payment-integration).",
    how: [
      { title: "Shopper picks a wallet", body: "At checkout they choose eSewa, Khalti or cash on delivery." },
      { title: "Wallet takes the money", body: "They are sent to the wallet's own secure page to log in and pay." },
      { title: "Server double-checks", body: "When they come back, the server asks the wallet directly whether the payment really went through." },
      { title: "Order is confirmed", body: "Only then is the order marked paid, and the owner gets a [WhatsApp alert](/features/whatsapp-alerts)." },
    ],
    why: [
      "Your cart is kept until the payment is confirmed, so a failed payment never empties it.",
      "Cash on delivery can have limits — for example, only under a certain amount.",
      "Every payment is a permanent record in the [order ledger](/features/orders-and-ledger).",
    ],
    products: ["online-clothing-store", "beauty-store", "electronics-store", "multi-vendor-marketplace", "nepali-superchat", "next-cms"],
    posts: ["esewa-khalti-merchant-account-cost", "esewa-khalti-payment-integration", "start-an-online-store-in-nepal", "website-cost-in-nepal"],
    faqs: [
      {
        q: "What do I need to accept eSewa and Khalti on my website?",
        a: "A registered business and a merchant account with each wallet. eSewa charges about NPR 25,000 and Khalti about NPR 30,000 to open a merchant account (2026 figures — confirm the current fee with each wallet before you budget). The wallets give you keys; I plug them in and test with real small payments before launch. The full breakdown is in [what it costs to accept eSewa and Khalti](/posts/esewa-khalti-merchant-account-cost).",
      },
      {
        q: "Can I add Fonepay or cards too?",
        a: "Cards through Stripe are already supported for international buyers. Other gateways can be added.",
      },
    ],
  },
  {
    slug: "block-page-builder",
    name: "Block page builder",
    headline: "Build new pages yourself by stacking ready-made blocks.",
    seoTitle: "Page Builder: Edit Your Website Without Code",
    seoDescription:
      "Edit your website without a developer. Stack ready-made blocks — banners, galleries, product rails, FAQs — to build pages that stay on-brand and fast.",
    keywords: ["website page builder", "edit website without coding", "drag and drop website Nepal", "landing page builder"],
    intro:
      "Every page on sites built with [Next CMS](/products/next-cms) is a stack of blocks: a banner, a product rail, a gallery, an FAQ, a call to action. Your team adds, reorders and fills them from the dashboard. The design stays consistent because each block is designed once and reused — you cannot accidentally make a page ugly.",
    how: [
      { title: "Open a page", body: "Any page, post, product or package." },
      { title: "Add blocks", body: "Pick from 40+ blocks made for your kind of business." },
      { title: "Fill them in", body: "Text, photos, which products to show." },
      { title: "Publish", body: "The page goes live, fast and indexed." },
    ],
    why: [
      "No developer needed for a Dashain sale page or a new collection.",
      "Blocks are fast by design, so pages stay quick on mobile.",
      "Every block is tested on phones before you ever see it.",
    ],
    products: ["next-cms", "chhaka-cricket", "online-clothing-store", "event-planner-website", "travel-agency-website", "multi-vendor-marketplace"],
    posts: ["what-is-a-cms"],
    faqs: [
      { q: "Is this like Elementor?", a: "Similar idea, lighter result. Blocks are designed for your site, not generic, so pages stay fast." },
    ],
  },
  {
    slug: "whatsapp-alerts",
    name: "WhatsApp order alerts",
    headline: "Your phone buzzes the moment someone orders or books.",
    seoTitle: "WhatsApp Order Alerts for Your Website",
    seoDescription:
      "Get a WhatsApp message the moment a customer orders or pays for a booking on your website. Official WhatsApp Business API, set up for you.",
    keywords: ["WhatsApp order notification", "WhatsApp alerts website", "WhatsApp Business API Nepal"],
    intro:
      "Small businesses don't sit in front of a dashboard. They live on WhatsApp. So when a customer places an order or pays for a booking, the owner gets a WhatsApp message with the details — using Meta's official WhatsApp Business API, not a hack that gets numbers banned.",
    how: [
      { title: "Customer orders", body: "Or pays for a booking." },
      { title: "Message is sent", body: "An approved WhatsApp template goes to your number." },
      { title: "You act", body: "Call the customer, pack the order, confirm the date." },
    ],
    why: [
      "Uses the official API, so your number is safe.",
      "If WhatsApp is down, the order still goes through — the alert never blocks a sale.",
      "Set up per business, with your own number.",
    ],
    products: ["online-clothing-store", "electronics-store", "event-planner-website", "travel-agency-website", "next-cms"],
    posts: ["start-an-online-store-in-nepal"],
    faqs: [
      {
        q: "Do I need a WhatsApp Business account?",
        a: "Yes, a WhatsApp Business account on Meta. I walk you through approval of the message template.",
      },
    ],
  },
  {
    slug: "seo-toolkit",
    name: "SEO toolkit",
    headline: "Websites built to be found on Google from the first day.",
    seoTitle: "SEO-Ready Website Development in Nepal",
    seoDescription:
      "Websites that Google can find: clean titles, descriptions, sitemaps, structured data, fast pre-built pages and instant indexing pings. Built in, not bolted on.",
    keywords: ["SEO friendly website Nepal", "SEO website development", "sitemap", "technical SEO Nepal"],
    intro:
      "A website nobody finds is a brochure in a drawer. Every site I build ships with the technical side of SEO done: a title and description for every page, a sitemap Google reads, structured data so results can show FAQs and breadcrumbs, and pages pre-built so they load fast on a phone. This site itself is built the same way.",
    how: [
      { title: "Every page gets a title and description", body: "Written for people searching, kept short enough that Google shows them whole." },
      { title: "A sitemap is generated", body: "Updated whenever content changes." },
      { title: "Search engines are pinged", body: "Bing and others are told about new pages instantly." },
      { title: "Pages load fast", body: "Pre-built, with images resized for each screen." },
    ],
    why: [
      "Structured data for products, articles, FAQs and breadcrumbs.",
      "Clean, readable URLs.",
      "Internal links between related pages — like the ones on this page.",
    ],
    products: ["chhaka-cricket", "next-cms", "travel-agency-website", "beauty-store"],
    posts: ["technical-seo-checklist", "website-cost-in-nepal", "what-is-a-cms"],
    faqs: [
      { q: "Will my site rank first on Google?", a: "Nobody honest can promise that. I make sure nothing technical holds you back; good content and time do the rest." },
    ],
  },
  {
    slug: "booking-enquiries",
    name: "Booking enquiries",
    headline: "Turn visitors into booking requests with dates, guests and add-ons.",
    seoTitle: "Online Booking & Enquiry System for Websites",
    seoDescription:
      "Booking request system for event planners, travel agencies and service businesses: packages, dates, group size, add-ons, deposits and offline payments.",
    keywords: ["online booking system Nepal", "booking website", "enquiry form website", "tour booking system"],
    intro:
      "Some businesses don't sell from a cart — they sell a date. A wedding, a trek, a tour. Booking enquiries let visitors pick a package, choose dates and group size, add extras, and send the request. You confirm the details personally. Deposits can be taken online, or recorded when paid offline.",
    how: [
      { title: "Visitor picks a package", body: "A wedding package, a trek, a tour." },
      { title: "Fills in the details", body: "Dates, number of people, add-ons." },
      { title: "You are alerted", body: "By email and [WhatsApp](/features/whatsapp-alerts)." },
      { title: "You confirm", body: "Quote, deposit and payment recorded on the booking." },
    ],
    why: ["Leads arrive complete, not as \"price?\" messages.", "Prices can stay hidden — empty reads \"On request\".", "Every booking has a history."],
    products: ["event-planner-website", "travel-agency-website"],
    posts: ["website-cost-in-nepal"],
    faqs: [{ q: "Can I take a deposit online?", a: "Yes, the booking engine supports deposits. Many businesses start with enquiries only and switch payment on later." }],
  },
  {
    slug: "variants-and-filters",
    name: "Variants & filters",
    headline: "Sizes, colours, shades and specs — with filters that work.",
    seoTitle: "Product Variants & Filters for Online Stores",
    seoDescription:
      "Online store product variants done properly: colour and size with separate stock, shades, specs, and filters with live counts so shoppers find things fast.",
    keywords: ["product variants ecommerce", "size and colour options online store", "ecommerce filters"],
    intro:
      "One T-shirt can be twenty products: five colours, four sizes. A good store tracks stock for each, shows sold-out sizes honestly, and lets shoppers filter down to exactly what they want. It is the difference between a store and a catalogue.",
    how: [
      { title: "Define the options", body: "Colour, size, shade, storage — whatever your products vary by." },
      { title: "Stock per combination", body: "Each one has its own price and stock." },
      { title: "Filters build themselves", body: "With counts, so nobody clicks into an empty page." },
    ],
    why: ["Fewer \"is this in medium?\" messages.", "No overselling.", "Filters double as landing pages for search."],
    products: ["online-clothing-store", "beauty-store", "electronics-store", "multi-vendor-marketplace"],
    posts: ["start-an-online-store-in-nepal"],
    faqs: [],
  },
  {
    slug: "multi-seller-marketplace",
    name: "Multi-seller marketplace",
    headline: "Let many shops sell on your site — and settle them fairly.",
    seoTitle: "Multi-Seller Marketplace Features Explained",
    seoDescription:
      "What a multi-vendor marketplace needs: seller sign-up and approval, one cart for many shops, commission, weekly payouts, fair ranking and labelled ads.",
    keywords: ["multi vendor marketplace features", "seller dashboard", "marketplace commission payouts"],
    intro:
      "A marketplace is a store with many owners. That changes everything: orders split per seller, money collected once and paid out many times, and ranking that has to be fair or sellers leave. [Bazaar](/products/multi-vendor-marketplace) handles all of it; [this guide](/posts/build-a-marketplace-like-daraz) explains it in plain words.",
    how: [
      { title: "Seller applies", body: "You approve them." },
      { title: "Seller lists products", body: "From their own dashboard." },
      { title: "Shopper buys from many", body: "One cart, one payment, one order per seller." },
      { title: "Weekly payout", body: "Each seller is paid minus commission, from a ledger they can see." },
    ],
    why: ["No spreadsheets for settlements.", "Fair ranking keeps good sellers.", "Paid slots are labelled, so shoppers trust results."],
    products: ["multi-vendor-marketplace"],
    posts: ["build-a-marketplace-like-daraz"],
    faqs: [],
  },
  {
    slug: "live-cricket-data",
    name: "Live cricket data",
    headline: "Ball-by-ball scores, tables and stats — on a site or on a stream.",
    seoTitle: "Live Cricket Score Integration for Websites & Streams",
    seoDescription:
      "Live cricket data for websites and live streams: ball-by-ball scoring, scorecards, points tables, leaderboards, player cards and win probability.",
    keywords: ["live cricket score API", "cricket score widget", "cricket scoreboard overlay", "cricket stats website"],
    intro:
      "One scoring backend records every ball. From there it feeds [Chhaka.com](/products/chhaka-cricket) — scorecards, points tables, leaderboards, player cards and a win-probability meter — and the [Stream Overlay](/products/stream-overlay) scoreboard on live streams.",
    how: [
      { title: "Every ball is recorded", body: "Runs, extras, wickets, who bowled, who faced." },
      { title: "Everything is derived", body: "Scorecards, tables and leaderboards are calculated from the balls." },
      { title: "It goes everywhere", body: "Website pages, live widgets and stream overlays." },
    ],
    why: ["One source of truth, so the site and the stream always agree.", "46 seasons of IPL, PSL and BBL history already loaded."],
    products: ["chhaka-cricket", "stream-overlay"],
    posts: [],
    faqs: [],
  },
  {
    slug: "obs-overlays",
    name: "OBS overlays",
    headline: "TV-style graphics on your live stream from one OBS link.",
    seoTitle: "Custom OBS Overlays for YouTube Live Streams",
    seoDescription:
      "Custom OBS browser-source overlays: donation alerts, chat polls, loyalty bars, scoreboards and news graphics, controlled from a dashboard while you are live.",
    keywords: ["OBS overlay", "OBS browser source", "YouTube stream alerts", "custom stream overlay"],
    intro:
      "OBS can show a web page on top of your camera — it is called a Browser Source. That page can be anything: a tip alert, a poll, a scoreboard. Overlays I build live on one link and are controlled from a dashboard while you are live.",
    how: [
      { title: "Copy your overlay link", body: "One link per channel." },
      { title: "Add a Browser Source in OBS", body: "Paste the link, set 1920×1080." },
      { title: "Run your show", body: "Trigger polls and graphics from the dashboard; tips and chat events appear on their own." },
    ],
    why: ["Works with any OBS scene.", "Widgets only appear when they have something to show.", "Vertical layouts for Shorts."],
    products: ["stream-overlay", "nepali-superchat"],
    posts: ["nepali-superchat-for-youtubers"],
    faqs: [],
  },
  {
    slug: "analytics-dashboard",
    name: "Analytics dashboard",
    headline: "See views, sales and clicks without leaving your dashboard.",
    seoTitle: "Website Analytics Dashboard for Business Owners",
    seoDescription:
      "Built-in analytics: hourly page views, ad impressions and clicks, sales and earnings charts — readable by owners, not just marketers.",
    keywords: ["website analytics dashboard", "sales dashboard", "ad analytics"],
    intro:
      "Google Analytics answers questions owners don't ask. The dashboards I build answer the ones they do: how many people read this today, which products sell, how much did the stream earn, are the ads being clicked.",
    how: [
      { title: "Every view and click is counted", body: "Hourly, and kept long-term as daily totals." },
      { title: "Charts compare periods", body: "This week against last week, at a glance." },
    ],
    why: ["No extra tool to log into.", "Numbers match your orders exactly."],
    products: ["next-cms", "chhaka-cricket", "multi-vendor-marketplace", "nepali-superchat"],
    posts: [],
    faqs: [],
  },
  {
    slug: "nepali-and-english",
    name: "Nepali & English",
    headline: "Software your staff can use in Nepali.",
    seoTitle: "Nepali Language Software & Websites",
    seoDescription:
      "Websites and software that switch between Nepali and English — so office staff, teachers and customers can each use the language they are comfortable in.",
    keywords: ["Nepali language software", "Nepali website", "bilingual website Nepal"],
    intro:
      "Not every teacher or office assistant is comfortable in English. The [Institute LMS](/products/lms-for-schools) switches every screen between Nepali and English, and the same approach works for any dashboard or website.",
    how: [
      { title: "Every label is translated", body: "Not just the menu." },
      { title: "Users pick their language", body: "And it is remembered." },
    ],
    why: ["More staff actually use the system.", "Parents and students read notices properly."],
    products: ["lms-for-schools"],
    posts: [],
    faqs: [],
  },
  {
    slug: "roles-and-activity-log",
    name: "Roles & activity log",
    headline: "Give each person exactly the access they need — and see who changed what.",
    seoTitle: "User Roles & Activity Log for Business Software",
    seoDescription:
      "Staff roles and a field-by-field activity log: decide who can edit what, and see exactly who changed a price, a page or an order, and when.",
    keywords: ["user roles permissions", "activity log", "audit trail"],
    intro:
      "When five people edit one website, someone will eventually change a price by mistake. Roles keep each person to their job, and the activity log shows exactly who changed which field and when.",
    how: [
      { title: "Assign roles", body: "Owner, editor, sales, teacher — whatever fits." },
      { title: "Work normally", body: "Every change is recorded with before and after." },
    ],
    why: ["Mistakes are found in seconds.", "Sellers and staff never see what they should not."],
    products: ["next-cms", "lms-for-schools", "multi-vendor-marketplace"],
    posts: ["what-is-a-cms"],
    faqs: [],
  },
  {
    slug: "virtual-try-on",
    name: "Virtual try-on",
    headline: "Shoppers see the clothes on themselves before they buy.",
    seoTitle: "AI Virtual Try-On for Clothing Websites",
    seoDescription:
      "AI virtual try-on for online clothing stores: shoppers upload a photo and see the garment on themselves. Photos are never stored. Watermarked previews.",
    keywords: ["virtual try on", "AI try on clothes website", "virtual fitting room"],
    intro:
      "The biggest worry when buying clothes online is \"will it look good on me?\". [Kapda Studio](/products/online-clothing-store) answers it: the shopper uploads a photo and an AI model shows them wearing the garment. The photo stays in memory for a few minutes and is never saved, and every preview carries your store's watermark.",
    how: [
      { title: "Shopper uploads a photo", body: "Straight from the product page." },
      { title: "AI dresses them", body: "Using the garment's product photos." },
      { title: "Preview appears", body: "Watermarked, in about 10–15 seconds." },
    ],
    why: ["More confidence, fewer returns.", "Privacy first: photos are never stored.", "Can run on a free AI tier for small stores."],
    products: ["online-clothing-store"],
    posts: ["start-an-online-store-in-nepal"],
    faqs: [{ q: "Which photos work best?", a: "Flat-lay or ghost-mannequin product shots. Photos of a posed model can leak the pose into the result." }],
  },
  {
    slug: "orders-and-ledger",
    name: "Orders & ledger",
    headline: "Orders, payments and refunds recorded like an accountant would.",
    seoTitle: "Order Management & Payment Ledger for Stores",
    seoDescription:
      "Order management for online stores: payments as a permanent ledger, refunds that restock, counter sales, offline payments and seller payouts.",
    keywords: ["order management system", "ecommerce order management Nepal", "payment ledger"],
    intro:
      "An order is what was bought. A transaction is money that moved. Keeping those apart — and never editing a payment after the fact — is what makes the numbers trustworthy. Refunds happen on the order, so stock goes back on the shelf automatically.",
    how: [
      { title: "Order is placed", body: "Online, at the counter, or by phone." },
      { title: "Payments are recorded", body: "As permanent entries — wrong ones are voided, never edited." },
      { title: "Status follows the money", body: "Paid, part-paid or refunded is calculated, not typed." },
    ],
    why: ["Your books and your store always agree.", "Counter sales and online stock are one count."],
    products: ["electronics-store", "beauty-store", "multi-vendor-marketplace", "event-planner-website"],
    posts: ["start-an-online-store-in-nepal"],
    faqs: [],
  },
];

export const featureBySlug = (slug: string) => features.find((f) => f.slug === slug);

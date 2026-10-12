import type { Product } from "./types";

/**
 * Every product Arjun has built, written for the business owner who would buy
 * it, not for another developer. Rules this file keeps:
 *   - plain words first; a technical term only when it earns its place
 *   - every feature points at its shared /features page, and paragraphs link
 *     sideways to the products, skills and guides they mention
 *   - nothing is claimed that the code does not do. Where a capability is
 *     "built on request" the copy says so.
 * Gallery frames carry no `src` yet — they render as drawn placeholders. Drop a
 * screenshot into /public/gallery and set `src` to make a frame real.
 */

export const products: Product[] = [
  {
    slug: "multi-vendor-marketplace",
    name: "Bazaar Marketplace",
    kind: "Multi-seller marketplace",
    headline: "Your own marketplace like Daraz, where many shops sell under one roof.",
    seoTitle: "Multi Vendor Marketplace Website Like Daraz in Nepal",
    seoDescription:
      "A ready multi-seller marketplace for Nepal: seller sign-up, one cart for many shops, commission and weekly payouts, fair ranking, eSewa, Khalti and COD.",
    keywords: [
      "multi vendor ecommerce website Nepal",
      "website like Daraz",
      "marketplace website development Nepal",
      "multi seller online store",
      "Daraz clone Nepal",
    ],
    summary:
      "Bazaar lets you run a marketplace where independent shops sign up, list their products and get paid — while you collect the money, keep a commission and settle each seller every week. Shoppers see one store and one cart. It is built on the same [CMS](/products/next-cms) as every other shop here, so your team edits the homepage with [blocks](/features/block-page-builder), not code.",
    status: "Demo available",
    forWho: [
      "Founders who want to build the next local Daraz for a city, a niche or a category",
      "Malls, trade associations and brand groups bringing many shops online together",
      "An existing store that wants to let other sellers list beside it",
    ],
    problem:
      "A normal online store has one owner. The moment a second seller joins, everything gets harder: whose stock is this, who gets paid, who refunds, and why is one shop always on top? Most \"marketplace plugins\" answer these questions badly, and the owner ends up settling money in a spreadsheet. Bazaar answers them in the software itself.",
    features: [
      {
        title: "Sellers sign up, you approve",
        body: "A shop fills one form and waits. You check them, approve them, and they get their own trimmed dashboard to add products and see orders. They never see your settings.",
        feature: "multi-seller-marketplace",
      },
      {
        title: "One cart, many shops",
        body: "A shopper can buy from five shops in a single checkout. Behind the scenes each shop gets its own order to pack and ship, and the payment is split correctly.",
        feature: "multi-seller-marketplace",
      },
      {
        title: "Commission and weekly payouts",
        body: "The platform collects every rupee. Each seller has a commission rate and a running ledger, and payouts go out weekly — no spreadsheet.",
        feature: "orders-and-ledger",
      },
      {
        title: "Fair ranking that favours nobody",
        body: "Products rank by how well they actually sell, smoothed so a new shop with two great reviews is not buried. No seller gets more than three spots on a page — including your own house store.",
        feature: "multi-seller-marketplace",
      },
      {
        title: "Paid featuring, clearly labelled",
        body: "Sellers can pay a flat daily price for a featured slot. Those slots are marked as featured and never change the normal ranking, so shoppers keep trusting the results.",
        feature: "multi-seller-marketplace",
      },
      {
        title: "Campaigns, coupons and vouchers",
        body: "Run a Dashain sale across the whole site, let sellers opt their products in, and still allow each seller their own coupons. Every discount records who paid for it.",
      },
      {
        title: "eSewa, Khalti and cash on delivery",
        body: "Local wallets at checkout, plus COD with limits you set, and guest checkout so a first-time shopper does not have to make an account.",
        feature: "esewa-khalti-payments",
      },
      {
        title: "Charts for you and for every seller",
        body: "You see the whole marketplace; each seller sees their own sales, views and best products.",
        feature: "analytics-dashboard",
      },
    ],
    steps: [
      { title: "We agree the rules", body: "Commission, payout day, COD limits, which categories you open with." },
      { title: "Your brand goes on", body: "Name, colours and homepage blocks set up in the dashboard." },
      { title: "First sellers onboard", body: "I help you load the first shops so the site never opens empty." },
      { title: "Launch and grow", body: "Campaigns, featured slots and new categories as you grow." },
    ],
    gallery: [
      { caption: "Homepage: campaign banner, vouchers and categories", alt: "Bazaar marketplace homepage", src: "/gallery/multi-vendor-marketplace-1.jpg" },
      { caption: "A seller's own store page", alt: "A seller store page on Bazaar", src: "/gallery/multi-vendor-marketplace-2.jpg" },
      { caption: "Product page with the seller box and campaign price", alt: "Bazaar product page showing seller details", src: "/gallery/multi-vendor-marketplace-3.jpg" },
      { caption: "Homepage on a phone", alt: "Bazaar homepage on mobile", src: "/gallery/multi-vendor-marketplace-4.jpg", shape: "phone" },
    ],
    stack: ["nextjs", "react", "fastify", "nodejs"],
    faqs: [
      {
        q: "Can I build a website like Daraz in Nepal?",
        a: "Yes — that is what Bazaar is. It does the hard parts a marketplace needs: many sellers, one cart, split orders, commission, payouts and fair ranking. You bring the sellers and the brand.",
      },
      {
        q: "Who holds the customers' money?",
        a: "The platform (you) collects all payments and pays each seller weekly, minus commission. Every payout comes from a ledger the seller can see, so there are no arguments about numbers.",
      },
      {
        q: "Can sellers change the site design?",
        a: "Sellers get their own store page built from the same blocks, filled with their own products. They cannot change the marketplace's settings, domains or SEO.",
      },
      {
        q: "Does it work with eSewa, Khalti and cash on delivery?",
        a: "Yes, all three. See how [eSewa and Khalti payments work](/features/esewa-khalti-payments).",
      },
    ],
    related: ["online-clothing-store", "electronics-store", "next-cms"],
    posts: ["esewa-khalti-merchant-account-cost", "ecommerce-website-template", "nextjs-ecommerce-website", "build-a-marketplace-like-daraz", "start-an-online-store-in-nepal", "esewa-khalti-payment-integration"],
    featured: true,
  },
  {
    slug: "online-clothing-store",
    name: "Kapda Studio",
    kind: "Online clothing store",
    headline: "A streetwear store where every colour and size is its own product, done right.",
    seoTitle: "Clothing Ecommerce Website in Nepal with Size & Colour",
    seoDescription:
      "Online clothing store for Nepali brands: colour and size variants, size charts, filters, collections, AI virtual try-on, eSewa, Khalti and COD.",
    keywords: [
      "clothing ecommerce website Nepal",
      "online clothing store website",
      "fashion website development Nepal",
      "virtual try on website",
      "streetwear online store",
    ],
    summary:
      "Kapda Studio is an online store made for clothes. Every shirt comes in colours and sizes, and the store keeps stock for each one separately, so \"black, medium\" can sell out while \"white, medium\" is still on the shelf. Shoppers filter by size, colour, fit and gender, read the size chart, and can even [try the garment on their own photo](/features/virtual-try-on).",
    status: "Demo available",
    forWho: [
      "Clothing and streetwear brands selling on Instagram who want a real store",
      "Boutiques that keep losing orders to \"is this available in M?\" messages",
      "Brands moving off a template store that cannot handle sizes properly",
    ],
    problem:
      "Most Nepali clothing brands sell through Instagram DMs. Every order is a conversation: what sizes, what colours, is it in stock, how do I pay. A proper store answers all of that on the page and takes the payment — so the brand only has to pack.",
    features: [
      {
        title: "Colour × size variants with their own stock",
        body: "Each colour carries a real colour swatch and each size its own stock count. Sold-out sizes grey out instead of disappearing.",
        feature: "variants-and-filters",
      },
      {
        title: "Filters shoppers actually use",
        body: "Gender, size, colour and fit filters, with counts beside each option so nobody clicks into an empty page.",
        feature: "variants-and-filters",
      },
      {
        title: "Size charts and collections",
        body: "Size charts are edited in the dashboard and attached to products. Collections like \"Winter drop\" are pages your team builds themselves.",
        feature: "block-page-builder",
      },
      {
        title: "Second image on hover",
        body: "Product cards show a second photo when you hover — the back of the hoodie, the fit on a model.",
      },
      {
        title: "Virtual try-on",
        body: "A shopper uploads a photo and sees the garment on themselves. Their photo is kept only in memory for a few minutes and is never stored.",
        feature: "virtual-try-on",
      },
      {
        title: "Local payments and COD",
        body: "eSewa, Khalti and cash on delivery at checkout.",
        feature: "esewa-khalti-payments",
      },
      {
        title: "A WhatsApp ping for every order",
        body: "The owner's phone buzzes the moment an order is placed.",
        feature: "whatsapp-alerts",
      },
    ],
    steps: [
      { title: "Catalogue in", body: "Your products, colours, sizes and photos loaded in." },
      { title: "Look and feel", body: "Your type, colours and homepage drops, built in blocks." },
      { title: "Payments on", body: "eSewa, Khalti and COD tested with real small orders." },
      { title: "Go live", body: "Domain, sitemap and Google submission done for you." },
    ],
    gallery: [
      { caption: "Drop-style homepage with a Dashain sale bar", alt: "Kapda Studio homepage", src: "/gallery/online-clothing-store-1.jpg" },
      { caption: "Shop all: category tiles and size filters", alt: "Kapda Studio shop page with size filters", src: "/gallery/online-clothing-store-2.jpg" },
      { caption: "Product page: colour swatches, sizes and Try it on", alt: "Kapda Studio product page with variants and virtual try-on button", src: "/gallery/online-clothing-store-3.jpg" },
      { caption: "The same product on a phone", alt: "Kapda Studio product page on mobile", src: "/gallery/online-clothing-store-4.jpg", shape: "phone" },
    ],
    stack: ["nextjs", "react", "fastify", "nodejs"],
    faqs: [
      {
        q: "Can each size and colour have its own stock?",
        a: "Yes. Every colour-and-size combination is tracked separately, so the store never sells a size you do not have.",
      },
      {
        q: "How does the virtual try-on work, and is the photo safe?",
        a: "The shopper's photo goes to an AI image model with the garment photo and comes back as a preview. It lives only in memory for about ten minutes and is never saved. More on the [virtual try-on page](/features/virtual-try-on).",
      },
      {
        q: "I sell on Instagram today. Do I need to stop?",
        a: "No. Keep Instagram for discovery and send people to the store to buy — the store link and product links work perfectly in bios and stories.",
      },
    ],
    related: ["beauty-store", "electronics-store", "multi-vendor-marketplace"],
    posts: ["esewa-khalti-merchant-account-cost", "ecommerce-website-template", "nextjs-ecommerce-website", "start-an-online-store-in-nepal", "website-cost-in-nepal", "esewa-khalti-payment-integration"],
    featured: true,
  },
  {
    slug: "beauty-store",
    name: "Veloura Beauty",
    kind: "Beauty & skincare store",
    headline: "A beauty store that helps people pick the right product, not just any product.",
    seoTitle: "Beauty & Skincare Ecommerce Website in Nepal",
    seoDescription:
      "Online beauty and skincare store for Nepal: shop by skin type and concern, routine builder, offers, saved carts, eSewa, Khalti and cash on delivery.",
    keywords: [
      "cosmetics ecommerce website Nepal",
      "skincare online store website",
      "beauty shop website development",
      "online store Nepal eSewa Khalti",
    ],
    summary:
      "Veloura is an online store for cosmetics and skincare. Products carry the details beauty shoppers look for — skin type, concern, ingredients — and a routine builder walks people from cleanser to sunscreen. The cart follows the shopper from phone to laptop once they log in.",
    status: "Demo available",
    live: { label: "See the earlier Veloura storefront", href: "https://online-store-prod.vercel.app" },
    forWho: [
      "Cosmetics importers and skincare brands",
      "Beauty shops with a physical counter who want online orders too",
      "Resellers who need clean, trustworthy product pages",
    ],
    problem:
      "Beauty shoppers don't buy \"a moisturiser\" — they buy one for oily skin, without fragrance, under a price. A store that cannot filter by those things turns every visit into a WhatsApp question. Veloura puts the answer on the page.",
    features: [
      {
        title: "Shop by skin type and concern",
        body: "Filters for skin type, concern and product type, with the details printed on every product card.",
        feature: "variants-and-filters",
      },
      {
        title: "Routine builder",
        body: "Shoppers answer a few questions and get a step-by-step routine they can add to the cart in one tap.",
      },
      {
        title: "Shades and sizes",
        body: "Lipstick shades and bottle sizes are variants with their own price and stock.",
        feature: "variants-and-filters",
      },
      {
        title: "Cart that follows you",
        body: "A guest cart is kept on the device and merges with the account cart the moment they log in, so nothing is lost.",
      },
      {
        title: "Offers that never raise a price",
        body: "Item discounts and timed offers are compared and the shopper always gets the bigger one.",
      },
      {
        title: "eSewa, Khalti and COD",
        body: "Local wallets and cash on delivery at checkout.",
        feature: "esewa-khalti-payments",
      },
      {
        title: "Orders, refunds and stock in one place",
        body: "Every order, payment and refund is recorded properly, and refunds put stock back on the shelf.",
        feature: "orders-and-ledger",
      },
    ],
    steps: [
      { title: "Products and attributes", body: "We map your catalogue to skin types, concerns and shades." },
      { title: "Brand", body: "Your palette and type — Veloura's own look is only the starting point." },
      { title: "Payments and delivery", body: "eSewa, Khalti, COD and delivery charges set up." },
      { title: "Launch", body: "Live on your domain with the sitemap submitted to Google." },
    ],
    gallery: [
      { caption: "Homepage", alt: "Veloura Beauty homepage", src: "/gallery/beauty-store-1.jpg" },
      { caption: "Shop with skin-type and concern filters", alt: "Veloura shop page with filters", src: "/gallery/beauty-store-2.jpg" },
      { caption: "Routine builder", alt: "Veloura routine builder", src: "/gallery/beauty-store-3.jpg" },
      { caption: "Product page on a phone", alt: "Veloura product page on mobile", src: "/gallery/beauty-store-4.jpg", shape: "phone" },
    ],
    stack: ["nextjs", "react", "fastify", "nodejs"],
    faqs: [
      {
        q: "Can I import my existing product list?",
        a: "Yes. The catalogue imports from a spreadsheet or an existing store, then we tidy the attributes so the filters work.",
      },
      {
        q: "Will the store look like Veloura?",
        a: "Only if you want it to. The layout and features stay; colours, type and imagery become yours.",
      },
      {
        q: "Does it work on slow mobile data?",
        a: "Pages are pre-built and images are resized for each screen, so a product page loads fast on a phone.",
      },
    ],
    related: ["online-clothing-store", "electronics-store", "multi-vendor-marketplace"],
    posts: ["esewa-khalti-merchant-account-cost", "ecommerce-website-template", "nextjs-ecommerce-website", "start-an-online-store-in-nepal", "esewa-khalti-payment-integration", "website-cost-in-nepal"],
    featured: true,
  },
  {
    slug: "electronics-store",
    name: "Yantra Tech Store",
    kind: "Electronics & computer store",
    headline: "An electronics store with EMI, a PC builder and flash deals built in.",
    seoTitle: "Electronics Ecommerce Website with EMI | Nepal",
    seoDescription:
      "Online electronics and computer store for Nepal: EMI calculator, PC builder with wattage check, product compare, flash-deal countdowns, eSewa and Khalti.",
    keywords: [
      "electronics ecommerce website Nepal",
      "laptop store website Nepal",
      "EMI ecommerce website",
      "computer shop website development",
      "PC builder website",
    ],
    summary:
      "Yantra is an online store for laptops, phones and computer parts. It speaks the language of tech buyers: monthly EMI on every price, a PC builder that checks parts fit and the power supply is big enough, side-by-side compare, and countdowns on flash deals. Behind it, every order and payment is recorded like a proper [ledger](/features/orders-and-ledger).",
    status: "Demo available",
    forWho: [
      "Laptop, mobile and computer-parts shops",
      "Electronics retailers that sell on EMI",
      "Shops that also sell over the counter and want one stock count",
    ],
    problem:
      "Tech buyers compare. They want specs side by side, the EMI per month, and to know the graphics card fits the case. A generic store makes them ask on Messenger. Yantra answers on the page — and the shop can ring up a walk-in customer from the same dashboard, so stock stays right.",
    features: [
      { title: "EMI on every price", body: "Monthly instalments shown on the card and product page, with EMI enquiries tracked in the dashboard." },
      { title: "PC builder", body: "Pick parts step by step; the builder checks they work together and adds up the wattage so the power supply is big enough." },
      { title: "Compare products", body: "Put laptops side by side and see where the specs differ." },
      {
        title: "Flash deals with a live countdown",
        body: "Timed offers count down on the page, in big, readable numbers.",
      },
      {
        title: "Specs as real filters",
        body: "RAM, storage, processor and brand become filters, so shoppers narrow 300 laptops down to five.",
        feature: "variants-and-filters",
      },
      {
        title: "Counter sales from the dashboard",
        body: "A walk-in sale is recorded as a new order, so online and shop stock never drift apart.",
        feature: "orders-and-ledger",
      },
      { title: "eSewa, Khalti and COD", body: "Local payments at checkout.", feature: "esewa-khalti-payments" },
      { title: "Order alerts on WhatsApp", body: "The owner hears about every order instantly.", feature: "whatsapp-alerts" },
    ],
    steps: [
      { title: "Catalogue and specs", body: "Products loaded with the specs that drive filters and compare." },
      { title: "EMI rules", body: "Your banks and EMI terms set up." },
      { title: "Shop and online as one", body: "Counter sales and online orders share stock." },
      { title: "Launch", body: "Live, fast and indexed." },
    ],
    gallery: [
      { caption: "Homepage with the Dashain sale and EMI offers", alt: "Yantra homepage", src: "/gallery/electronics-store-1.jpg" },
      { caption: "PC builder that checks every part fits", alt: "Yantra PC builder", src: "/gallery/electronics-store-2.jpg" },
      { caption: "Laptop page with EMI per month", alt: "Yantra laptop product page with EMI", src: "/gallery/electronics-store-3.jpg" },
      { caption: "Homepage on a phone", alt: "Yantra homepage on mobile", src: "/gallery/electronics-store-4.jpg", shape: "phone" },
    ],
    stack: ["nextjs", "react", "fastify", "nodejs"],
    faqs: [
      {
        q: "Can customers apply for EMI online?",
        a: "The store shows EMI per month and records an EMI enquiry against the product so your team can follow up with the bank. The bank approval itself stays offline.",
      },
      {
        q: "Can I sell to walk-in customers from the same system?",
        a: "Yes — counter sales are entered as orders in the dashboard, so stock and reports include them.",
      },
      {
        q: "Do I need the PC builder?",
        a: "Only if you sell parts. Every feature can be switched off.",
      },
    ],
    related: ["online-clothing-store", "beauty-store", "multi-vendor-marketplace"],
    posts: ["esewa-khalti-merchant-account-cost", "ecommerce-website-template", "nextjs-ecommerce-website", "start-an-online-store-in-nepal", "website-cost-in-nepal"],
    featured: true,
  },
  {
    slug: "event-planner-website",
    name: "Utsav Events",
    kind: "Event & wedding planner website",
    headline: "A wedding and event planner's website that turns visitors into booked dates.",
    seoTitle: "Event Planner & Wedding Website in Nepal",
    seoDescription:
      "Website for event and wedding planners in Nepal: event packages, add-ons, guest counts, booking enquiries, galleries and WhatsApp alerts. No prices required.",
    keywords: [
      "event management website Nepal",
      "wedding planner website Nepal",
      "event booking website",
      "event planner website design",
    ],
    summary:
      "Utsav Events is a website for wedding and celebration planners in Kathmandu. Each package — a mehendi, a full wedding, a corporate night — is a page with its own gallery, inclusions and add-ons. Visitors send a booking request with the date and guest count, and the planner's phone gets a [WhatsApp alert](/features/whatsapp-alerts). Prices can stay hidden: an empty price simply reads \"On request\".",
    status: "Demo available",
    forWho: [
      "Wedding planners and decorators",
      "Event management companies and venues",
      "Caterers and party organisers who sell packages",
    ],
    problem:
      "Event planners live on Instagram and phone calls. Couples see beautiful photos but have no idea what is included, and the planner answers the same five questions all day. A good website shows the packages, collects the date and guest count, and hands the planner a ready lead.",
    features: [
      {
        title: "Packages as pages",
        body: "Every event type gets its own page with a gallery, what is included, how many guests, and how many days it runs.",
        feature: "booking-enquiries",
      },
      {
        title: "Booking requests, not checkout",
        body: "Visitors request a date with their guest count and add-ons. You confirm and agree the price personally.",
        feature: "booking-enquiries",
      },
      {
        title: "Prices optional",
        body: "Leave a price empty and the site shows \"On request\" — some planners never publish prices, and that is fine.",
      },
      { title: "Scroll galleries", body: "Big photo strips that drift as you scroll, with a full-screen viewer." },
      { title: "Instant WhatsApp alert", body: "A new request reaches your phone the second it is sent.", feature: "whatsapp-alerts" },
      {
        title: "Offline payments recorded",
        body: "Advance paid in cash or bank transfer? Staff record it against the booking so nothing is forgotten.",
        feature: "orders-and-ledger",
      },
      { title: "Pages you edit yourself", body: "Seasonal offers and new packages built from blocks.", feature: "block-page-builder" },
    ],
    steps: [
      { title: "Packages", body: "Your event types, inclusions and photos." },
      { title: "Enquiry form", body: "Dates, guests and add-ons you want to collect." },
      { title: "Alerts", body: "WhatsApp and email set up to your number." },
      { title: "Live", body: "Indexed for \"wedding planner in Kathmandu\" style searches." },
    ],
    gallery: [
      { caption: "Homepage with a full-screen hero", alt: "Utsav Events homepage", src: "/gallery/event-planner-website-1.jpg" },
      { caption: "Package page: Royal Mandap, a three-day wedding", alt: "Royal Mandap wedding package page", src: "/gallery/event-planner-website-2.jpg" },
      { caption: "All packages, by event type", alt: "Utsav Events packages listing", src: "/gallery/event-planner-website-3.jpg" },
      { caption: "Gallery on a phone", alt: "Utsav Events gallery on mobile", src: "/gallery/event-planner-website-4.jpg", shape: "phone" },
    ],
    stack: ["nextjs", "react", "fastify", "nodejs"],
    faqs: [
      {
        q: "Do I have to show prices?",
        a: "No. Leave the price empty and the site shows \"On request\". Many planners prefer to quote personally.",
      },
      {
        q: "Can people pay an advance online?",
        a: "The booking engine supports deposits, but Utsav is set up as enquiry-first. Advances paid offline are recorded by your staff against the booking.",
      },
      {
        q: "Can I add a new package myself?",
        a: "Yes, from the dashboard — title, photos, inclusions, done.",
      },
    ],
    related: ["travel-agency-website", "next-cms", "beauty-store"],
    posts: ["event-management-website-template", "what-is-a-cms", "website-cost-in-nepal"],
    featured: true,
  },
  {
    slug: "travel-agency-website",
    name: "Kora Travel",
    kind: "Travel & trekking website",
    headline: "A trekking and tour website with big photos and itineraries that sell the trip.",
    seoTitle: "Travel Agency & Trekking Website in Nepal",
    seoDescription:
      "Website for Nepal travel agencies and trekking companies: trip packages, day-by-day itineraries, galleries, booking requests and an easy dashboard.",
    keywords: [
      "travel agency website Nepal",
      "trekking company website",
      "tour package website design",
      "travel website development Nepal",
    ],
    summary:
      "Kora is a website for trekking and tour operators. Each trip is a package page with a day-by-day itinerary, a photo gallery, difficulty, group size and dates, and a [booking request](/features/booking-enquiries) at the end. Big sky-coloured backgrounds and full-width photos do the selling; your team updates trips from the dashboard.",
    status: "Demo available",
    live: { label: "See the earlier travel storefront", href: "https://yatra-prod.vercel.app" },
    forWho: [
      "Trekking and expedition companies",
      "Tour operators selling Nepal packages abroad",
      "Hotels and homestays selling experiences",
    ],
    problem:
      "Travellers compare five agencies before they email one. The agency with clear itineraries, honest photos and a quick way to ask wins the email. Most agency sites hide the itinerary in a PDF.",
    features: [
      { title: "Trip packages", body: "Duration, difficulty, group size, best season and price per trip.", feature: "booking-enquiries" },
      { title: "Day-by-day itinerary", body: "Each day with its route, stay and highlights — readable on a phone on the trail." },
      { title: "Immersive galleries", body: "Full-width photos that zoom gently as you scroll." },
      { title: "Booking requests", body: "Dates, group size and questions, straight to your inbox and WhatsApp.", feature: "whatsapp-alerts" },
      { title: "SEO for trip searches", body: "Every package is its own indexable page with clean titles and a sitemap.", feature: "seo-toolkit" },
      { title: "Edited from a dashboard", body: "New trips, new photos and seasonal pages without a developer.", feature: "block-page-builder" },
    ],
    steps: [
      { title: "Trips in", body: "Your packages and itineraries loaded." },
      { title: "Photos", body: "Your best shots, sized for speed." },
      { title: "Enquiries", body: "Requests routed to email and WhatsApp." },
      { title: "Launch", body: "Live and submitted to Google." },
    ],
    gallery: [
      { caption: "Full-bleed homepage with trip search", alt: "Kora travel homepage", src: "/gallery/travel-agency-website-1.jpg" },
      { caption: "Trip page: Compact Everest Khumbu Valley Trek", alt: "Kora trek package page", src: "/gallery/travel-agency-website-2.jpg" },
      { caption: "All trips", alt: "Kora trips catalogue", src: "/gallery/travel-agency-website-3.jpg" },
      { caption: "Trip page on a phone", alt: "Kora trek page on mobile", src: "/gallery/travel-agency-website-4.jpg", shape: "phone" },
    ],
    stack: ["nextjs", "react", "fastify", "nodejs"],
    faqs: [
      {
        q: "Can travellers book and pay online?",
        a: "The engine underneath supports quotes, deposits and add-ons. Most agencies start with booking requests and switch on payments later.",
      },
      {
        q: "Can I update itineraries myself?",
        a: "Yes, every day of every trip is editable in the dashboard.",
      },
    ],
    related: ["event-planner-website", "next-cms"],
    posts: ["travel-website-template", "nextjs-travel-website", "trekking-company-website-nepal", "what-is-a-cms", "website-cost-in-nepal"],
    featured: true,
  },
  {
    slug: "chhaka-cricket",
    name: "Chhaka.com",
    kind: "Cricket news & live scores",
    headline: "Chhaka.com: live cricket scores, stats and news, built and run end to end.",
    seoTitle: "Chhaka.com — Cricket News & Live Score Website",
    seoDescription:
      "Chhaka.com is a cricket news and live score site built by Arjun Jhukal: ball-by-ball scores, points tables, player cards, win probability and 46 league seasons.",
    keywords: [
      "cricket live score website",
      "cricket news website development",
      "sports website Nepal",
      "NPL cricket website",
      "cricket stats website",
    ],
    summary:
      "Chhaka.com is a live cricket site that I built and run. It follows the Nepal Premier League, the IPL, the PSL and the Big Bash with [ball-by-ball scores](/features/live-cricket-data), points tables, season pages, player cards and a win-probability meter. Articles are written in the [CMS](/products/next-cms) and placed on pages with blocks.",
    status: "Live",
    live: { label: "Visit chhaka.com", href: "https://chhaka.com" },
    forWho: [
      "Sports media companies and news portals",
      "Leagues and clubs that want their own stats home",
      "Anyone who wants proof I can run a large, busy site",
    ],
    problem:
      "Sports sites live or die on speed and freshness: scores must move every ball, pages must load on a phone in a stadium, and Google must find thousands of player and match pages. Chhaka.com does all three on a small budget.",
    features: [
      { title: "Ball-by-ball live scores", body: "Commentary, scorecards and over-by-over updates while the match is on.", feature: "live-cricket-data" },
      {
        title: "Win probability",
        body: "A meter that says who is likely to win the chase, learned from over 2,000 real chases. On matches it had never seen, it picked the winner 80% of the time.",
        feature: "live-cricket-data",
      },
      { title: "46 league seasons", body: "IPL, PSL and BBL history with every season's points table, results and leaderboards." },
      { title: "Player cards", body: "Career cards for every player, scoped to each league." },
      { title: "Pages built from blocks", body: "Editors place 40+ cricket blocks — fixtures, tables, leaderboards — on any page.", feature: "block-page-builder" },
      { title: "Built for Google", body: "Sitemap index, clean titles, structured data and fast pre-built pages.", feature: "seo-toolkit" },
      { title: "Ads in articles", body: "Ad slots inside articles and on pages, with hourly impression and click charts.", feature: "analytics-dashboard" },
    ],
    steps: [
      { title: "Data", body: "Match data flows in from the scoring backend." },
      { title: "Pages", body: "Seasons, clubs and players become pages automatically." },
      { title: "Editorial", body: "Writers publish articles from the CMS." },
      { title: "Growth", body: "Sitemaps and fast pages bring search traffic." },
    ],
    gallery: [
      { caption: "Homepage: upcoming fixtures and the featured story", alt: "Chhaka.com homepage with upcoming match cards and a featured article", src: "/gallery/chhaka-cricket-1.jpg" },
      { caption: "IPL 2026 points table, updated after every match", alt: "IPL 2026 points table on Chhaka.com", src: "/gallery/chhaka-cricket-2.jpg" },
      { caption: "Players directory for the season", alt: "IPL 2026 players page on Chhaka.com", src: "/gallery/chhaka-cricket-3.jpg" },
      { caption: "NPL Season 3 page on a phone", alt: "NPL Season 3 page on mobile", src: "/gallery/chhaka-cricket-4.jpg", shape: "phone" },
    ],
    stack: ["nextjs", "react", "fastify", "nodejs", "express"],
    faqs: [
      {
        q: "Can you build a cricket or sports website like Chhaka.com?",
        a: "Yes. The live data, the page blocks and the SEO setup are reusable for another league, sport or publisher.",
      },
      {
        q: "Where does the live score data come from?",
        a: "From a scoring backend I also built, which records every ball and feeds both the website and the [stream overlay](/products/stream-overlay).",
      },
    ],
    related: ["stream-overlay", "next-cms", "nepali-superchat"],
    posts: ["technical-seo-checklist", "news-website-template", "nextjs-vs-wordpress", "what-is-a-cms"],
    featured: true,
  },
  {
    slug: "lms-for-schools",
    name: "Institute LMS",
    kind: "Learning management system",
    headline: "An LMS for schools, colleges and institutes, in Nepali and English.",
    seoTitle: "LMS & College Management Software in Nepal",
    seoDescription:
      "Learning management system for Nepali schools, colleges and institutes: programs, batches, students, attendance, courses with video lessons, Nepali + English.",
    keywords: [
      "LMS Nepal",
      "learning management system Nepal",
      "college management software Nepal",
      "online class platform Nepal",
      "school management system Nepal",
    ],
    summary:
      "The Institute LMS runs the teaching side of a school or college: departments, programs, batches, students, attendance, and courses made of lessons with video, reading and attachments. It works in [Nepali and English](/features/nepali-and-english), and many institutes can share one system while each sees only their own data.",
    status: "Demo available",
    forWho: [
      "Colleges and +2 schools",
      "Training institutes and coaching centres",
      "Groups running several campuses",
    ],
    problem:
      "Many institutes still run attendance on paper and share course material on Viber. Students cannot find last week's notes and the office cannot see who attends. An LMS puts both in one place.",
    features: [
      { title: "Institutes apply and get set up", body: "A new institute applies, is approved, and gets its own space with login details delivered once, securely." },
      { title: "Departments, programs and batches", body: "Your real structure, with teacher and student counts at a glance." },
      { title: "Courses and lessons", body: "Each lesson can hold video, reading material, notes, attachments and links. Publish lesson by lesson." },
      { title: "Attendance in one tap", body: "Mark a whole class present, then fix the few absentees. Present, absent, late or excused." },
      { title: "Staff roles", body: "Heads, teachers and office staff each see what their role allows.", feature: "roles-and-activity-log" },
      { title: "Nepali and English", body: "Every screen switches language.", feature: "nepali-and-english" },
      { title: "Notifications", body: "Students and staff are told about what matters to them." },
    ],
    steps: [
      { title: "Structure", body: "Departments, programs and batches entered." },
      { title: "People", body: "Students and staff imported." },
      { title: "Courses", body: "First courses and lessons published." },
      { title: "Daily use", body: "Attendance and lessons become routine." },
    ],
    gallery: [
      { caption: "An institute's own dashboard: students, batches, exams", alt: "Himalaya Secondary School dashboard in the Institute LMS", src: "/gallery/lms-for-schools-1.jpg" },
      { caption: "Batches for the school year", alt: "Institute LMS batches list", src: "/gallery/lms-for-schools-2.jpg" },
      { caption: "Attendance in Nepali, with the Bikram Sambat date", alt: "Institute LMS attendance screen in Nepali", src: "/gallery/lms-for-schools-3.jpg" },
      { caption: "The institute dashboard on a phone", alt: "Institute LMS institute dashboard on mobile", src: "/gallery/lms-for-schools-4.jpg", shape: "phone" },
    ],
    stack: ["nestjs", "nodejs", "react", "nextjs"],
    faqs: [
      {
        q: "Is there an LMS in Nepali language?",
        a: "Yes — this one switches between Nepali and English on every screen.",
      },
      {
        q: "Does it do live online classes?",
        a: "Not yet. Lessons support recorded video and material today; live classes are on the roadmap and can be built for your institute.",
      },
      {
        q: "Can several campuses use one system?",
        a: "Yes. Each institute only ever sees its own students and courses.",
      },
    ],
    related: ["next-cms", "event-planner-website"],
    posts: ["school-website-template", "what-is-a-cms", "website-cost-in-nepal"],
  },
  {
    slug: "next-cms",
    name: "Next CMS",
    kind: "Content management system",
    headline: "The CMS behind every site here — so your project starts at 80%, not zero.",
    seoTitle: "Headless CMS for Business Websites in Nepal",
    seoDescription:
      "Next CMS: a multi-site content management system with 40+ page blocks, custom content types, SEO tools, WhatsApp alerts, eSewa/Khalti and analytics.",
    keywords: [
      "CMS Nepal",
      "headless CMS",
      "website CMS development Nepal",
      "custom CMS for business",
      "content management system for news website",
    ],
    summary:
      "Next CMS is the engine under every other product on this site. It holds your pages, posts, products, bookings and orders, and your team edits all of it from one dashboard. Pages are stacked from [ready-made blocks](/features/block-page-builder), so a new landing page takes minutes. Because it already powers [news](/products/chhaka-cricket), [shops](/products/online-clothing-store), [travel](/products/travel-agency-website) and [events](/products/event-planner-website), your project starts from working software.",
    status: "In production",
    forWho: [
      "Businesses that want to edit their own site without breaking it",
      "Publishers who need fast pages and serious SEO",
      "Agencies that want a reliable back end for client sites",
    ],
    problem:
      "A WordPress site with fifteen plugins slows down and breaks on updates. A fully custom site needs a developer for every change. Next CMS sits in between: custom where it matters, ready-made everywhere else.",
    features: [
      { title: "Page builder with 40+ blocks", body: "Hero bands, galleries, product rails, FAQs, CTAs — stacked, reordered and saved.", feature: "block-page-builder" },
      { title: "Your own content types", body: "Need \"Courses\" or \"Destinations\"? Define the fields, including repeating ones, and they appear in the dashboard." },
      { title: "Many sites, one system", body: "Each business is a separate space with its own content, users and settings." },
      { title: "SEO built in", body: "Titles, descriptions, sitemaps and instant indexing pings to Bing.", feature: "seo-toolkit" },
      { title: "Payments", body: "eSewa, Khalti, Stripe and cash on delivery.", feature: "esewa-khalti-payments" },
      { title: "WhatsApp alerts", body: "Orders and paid bookings ping the owner's phone.", feature: "whatsapp-alerts" },
      { title: "Analytics", body: "Hourly page views and ad clicks inside the dashboard.", feature: "analytics-dashboard" },
      { title: "Roles and an activity log", body: "Who changed what, when — field by field.", feature: "roles-and-activity-log" },
      { title: "Fast images", body: "Every image is resized on the fly for each screen size." },
      { title: "Backups", body: "Weekly automatic database backups plus one-click manual ones." },
    ],
    steps: [
      { title: "Pick a starting product", body: "Store, travel, events, news or LMS." },
      { title: "Shape the content", body: "Add the content types your business needs." },
      { title: "Design the front", body: "A custom Next.js front end in your brand." },
      { title: "Hand over", body: "Your team edits; I stay on call." },
    ],
    gallery: [
      { caption: "Content: posts, pages and categories", alt: "Next CMS content list", src: "/gallery/next-cms-1.jpg" },
      { caption: "Schema: your own content types", alt: "Next CMS schema editor", src: "/gallery/next-cms-2.jpg" },
      { caption: "Products with stock levels", alt: "Next CMS products list", src: "/gallery/next-cms-3.jpg" },
      { caption: "Orders", alt: "Next CMS orders list", src: "/gallery/next-cms-4.jpg" },
    ],
    stack: ["fastify", "nodejs", "react", "nextjs"],
    faqs: [
      {
        q: "Is this better than WordPress?",
        a: "Different. For a simple blog, WordPress is great — and I build those too ([WordPress development](/hire/wordpress)). For stores, bookings and busy news sites, a purpose-built CMS stays fast and stable without a stack of plugins.",
      },
      {
        q: "Will I be locked in?",
        a: "Your content lives in a standard PostgreSQL database and can be exported at any time.",
      },
      {
        q: "Can my team really edit pages without a developer?",
        a: "Yes. Pages are made of blocks; adding, reordering and editing them is the daily job of the dashboard. Read [what a CMS is](/posts/what-is-a-cms) for the plain-words version.",
      },
    ],
    related: ["chhaka-cricket", "multi-vendor-marketplace", "event-planner-website"],
    posts: ["technical-seo-checklist", "headless-cms-explained", "nextjs-vs-wordpress", "what-is-a-cms", "website-cost-in-nepal"],
    featured: true,
  },
  {
    slug: "nepali-superchat",
    name: "Nepali Superchat",
    kind: "Live-stream tips with eSewa & Khalti",
    headline: "Let your viewers tip you in rupees, live on stream, with eSewa and Khalti.",
    seoTitle: "Nepali Superchat: eSewa & Khalti Tips for YouTubers",
    seoDescription:
      "Nepali Superchat lets YouTube streamers in Nepal take eSewa and Khalti tips live, with on-screen alerts, a top-supporter board, earnings and withdrawals.",
    keywords: [
      "superchat Nepal",
      "eSewa donation for YouTubers",
      "Khalti donation live stream",
      "YouTube live donation Nepal",
      "Nepali streamer donation alert",
    ],
    summary:
      "YouTube Super Chat does not take eSewa or Khalti, so most Nepali viewers simply cannot tip. Nepali Superchat fixes that. The creator shares one donation link or QR code; a viewer pays with eSewa or Khalti; their name, amount and message pop up live on stream through an [OBS overlay](/features/obs-overlays). The creator watches earnings in a dashboard and requests withdrawals.",
    status: "In production",
    forWho: [
      "Nepali YouTubers and gamers who stream live",
      "Podcasts and talk shows with a live audience",
      "Musicians and creators running fundraisers on stream",
    ],
    problem:
      "International tipping tools want cards and PayPal. Most Nepali viewers have eSewa or Khalti in their pocket and nothing else. The money is there; the button was missing.",
    features: [
      { title: "Donation link and QR code", body: "One link for the description and one QR for the screen." },
      { title: "eSewa and Khalti", body: "Viewers pay with the wallet they already use.", feature: "esewa-khalti-payments" },
      { title: "Alerts on stream", body: "Name, amount and message appear live. Bigger tips get a bigger, different-coloured alert.", feature: "obs-overlays" },
      { title: "Top supporters board", body: "The top donors stay on screen, which quietly encourages the next tip." },
      { title: "Earnings dashboard", body: "Every tip, a revenue chart and your balance.", feature: "analytics-dashboard" },
      { title: "Withdrawals", body: "Request a payout and track its history." },
    ],
    steps: [
      { title: "Sign up", body: "The creator account is set up." },
      { title: "Add to OBS", body: "Paste one overlay link as a Browser Source." },
      { title: "Share the link", body: "Donation link in the description, QR on screen." },
      { title: "Get tipped", body: "Alerts play live; money shows in the dashboard." },
    ],
    gallery: [
      { caption: "Donation page with eSewa and Khalti", alt: "Donation page", shape: "phone" },
      { caption: "Tip alert on stream", alt: "Donation alert overlay" },
      { caption: "Top supporters board", alt: "Supporter leaderboard" },
      { caption: "Earnings and withdrawals", alt: "Creator earnings dashboard" },
    ],
    stack: ["express", "nodejs", "react"],
    faqs: [
      {
        q: "Can Nepali viewers donate to a YouTuber with eSewa?",
        a: "Yes, through Nepali Superchat. The viewer pays on a donation page with eSewa or Khalti and the alert plays on the stream.",
      },
      {
        q: "Does it replace YouTube Super Chat?",
        a: "It sits beside it. International viewers can keep using Super Chat; Nepali viewers use eSewa and Khalti.",
      },
      {
        q: "Does it work with OBS?",
        a: "Yes — it is a Browser Source in OBS, like any alert tool. See [how OBS overlays work](/features/obs-overlays).",
      },
    ],
    related: ["stream-overlay", "chhaka-cricket"],
    posts: ["nepali-superchat-for-youtubers", "esewa-khalti-payment-integration"],
    featured: true,
  },
  {
    slug: "stream-overlay",
    name: "Stream Overlay",
    kind: "Live stream overlays for OBS",
    headline: "Overlays that make a live stream feel like TV: polls, scores, loyalty bars and more.",
    seoTitle: "Live Stream Overlay for OBS & YouTube | Nepal",
    seoDescription:
      "Broadcast-quality OBS overlays for YouTube streamers, news channels and cricket streams: chat polls, loyalty bars, live scoreboard, news cards, one link.",
    keywords: [
      "OBS overlay",
      "YouTube live stream overlay",
      "live cricket score overlay",
      "news channel overlay",
      "chat poll overlay",
    ],
    summary:
      "Stream Overlay is one link you paste into OBS. Behind it is a dashboard where you switch widgets on: polls that viewers vote on in chat, loyalty bars that fill as people watch, a virtual pet the chat feeds, news speaker cards and election results, and a [live cricket scoreboard](/features/live-cricket-data). Tips from [Nepali Superchat](/products/nepali-superchat) appear in the same overlay.",
    status: "In production",
    forWho: [
      "YouTube streamers who want viewers to interact",
      "News channels and digital media going live",
      "Cricket and sports streams",
    ],
    problem:
      "Viewers leave a stream that feels like a static camera. TV keeps people with graphics that react: scores, polls, names. Those tools usually cost a broadcast budget. Stream Overlay brings them to a single OBS link.",
    features: [
      { title: "One link in OBS", body: "Every widget lives in one Browser Source and only appears when it has something to show.", feature: "obs-overlays" },
      { title: "Chat-voted polls", body: "Viewers vote by typing a letter in YouTube chat. Pause, resume and auto-end at a target." },
      { title: "Loyalty points and bars", body: "Viewers earn points for watching and chatting; progress bars fill live." },
      { title: "Virtual pet", body: "A companion on screen that chat feeds with a command." },
      { title: "News speaker cards and elections", body: "Name straps for speakers, and election results as broadcast graphics." },
      { title: "Live cricket scoreboard", body: "Score, overs and ball-by-ball events from the scoring backend.", feature: "live-cricket-data" },
      { title: "Drag and resize", body: "Place each widget where you want it; the size is remembered." },
    ],
    steps: [
      { title: "Account", body: "Your channel connected." },
      { title: "Choose widgets", body: "Switch on what your show needs." },
      { title: "Paste in OBS", body: "One Browser Source link." },
      { title: "Go live", body: "Run polls and graphics from the dashboard." },
    ],
    gallery: [
      { caption: "Chat poll live on stream", alt: "Poll overlay" },
      { caption: "Cricket scoreboard lower-third", alt: "Cricket score overlay" },
      { caption: "News speaker card", alt: "News name strap" },
      { caption: "Vertical 9:16 layout for Shorts", alt: "Vertical overlay", shape: "phone" },
    ],
    stack: ["express", "nodejs", "react", "nextjs"],
    faqs: [
      {
        q: "Does it work with YouTube Live and OBS?",
        a: "Yes. It reads YouTube live chat and renders in OBS as a Browser Source.",
      },
      {
        q: "Can I show a live cricket score on my stream?",
        a: "Yes — the scoreboard is fed by the same scoring backend as [Chhaka.com](/products/chhaka-cricket).",
      },
    ],
    related: ["nepali-superchat", "chhaka-cricket"],
    posts: ["nepali-superchat-for-youtubers"],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const featuredProducts = products.filter((p) => p.featured);

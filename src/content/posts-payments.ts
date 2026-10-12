import type { Post } from "./types";

/**
 * Payments series. Wallet fees are the wallets' own charges, given by Arjun
 * from current onboarding (2026) — not his prices — and always shown with
 * "confirm with the wallet". Document lists follow eSewa's and Khalti's own
 * published requirements; per-transaction fees are not public, so the copy
 * says to ask rather than guessing a number.
 */
export const paymentPosts: Post[] = [
  {
    slug: "esewa-khalti-merchant-account-cost",
    title: "eSewa and Khalti merchant accounts: what they cost, what papers you need, and how long it takes",
    seoTitle: "eSewa & Khalti Merchant Account Cost in Nepal (2026)",
    seoDescription:
      "What it costs to accept eSewa and Khalti on your website in 2026: about NPR 25,000 and 30,000 to set up, the documents each wallet asks for, and the timeline.",
    keywords: [
      "eSewa merchant account cost",
      "Khalti merchant registration fee",
      "eSewa payment gateway charges Nepal",
      "how to get eSewa merchant account",
      "Khalti payment gateway for website",
    ],
    date: "2026-10-12",
    readMins: 7,
    excerpt:
      "About NPR 25,000 for eSewa and NPR 30,000 for Khalti — plus papers and a wait. Here is the whole picture before you budget your online store.",
    body: [
      {
        p: "Every shop owner who plans an online store in Nepal asks the same question sooner or later: **what does it actually cost to take eSewa and Khalti on my website?** The website is one bill. The wallets are another, and they surprise people because nobody mentions them in the quote. This guide puts the numbers, the paperwork and the waiting time in one place.",
      },
      {
        note: "In 2026, setting up a merchant account costs about **NPR 25,000 with eSewa** and about **NPR 30,000 with Khalti**. These are the wallets' own fees — they are paid to eSewa and Khalti, not to your developer. Fees change, so confirm the current amount with each wallet before you budget.",
      },
      { h2: "First, what is a merchant account?" },
      {
        p: "Your personal eSewa or Khalti account lets you pay. A **merchant account** lets your business *get paid* — by a website or an app, automatically. Once it is approved, the wallet gives you a merchant code and secret keys. Your developer puts those keys into your store so that the \"Pay with eSewa\" button sends money to your business. How the button works behind the scenes is explained in [how eSewa and Khalti payments work on a website](/posts/esewa-khalti-payment-integration).",
      },
      {
        p: "You need one merchant account per wallet. Most stores open both, because shoppers stick to the wallet they already have — losing every Khalti user to save one setup fee is rarely a good trade.",
      },
      { h2: "What it costs: the full budget line" },
      {
        ul: [
          "**eSewa merchant setup** — about NPR 25,000 (2026).",
          "**Khalti merchant setup** — about NPR 30,000 (2026).",
          "**Per-payment charges** — both wallets take a share of each payment. Neither publishes a fixed public rate, and it can depend on your business type and volume, so ask for it in writing when you apply.",
          "**The website itself** — separate, and the biggest line. What moves that price is covered in [website cost in Nepal](/posts/website-cost-in-nepal).",
          "**Cash on delivery** — no wallet fee, but it costs you in failed deliveries and cash handling. Keep it anyway; many shoppers outside the valley still prefer it.",
        ],
      },
      {
        p: "Put the wallet fees in your launch budget next to the domain and hosting. A store that is finished but cannot take payments is the most common — and most avoidable — delay I see.",
      },
      { h2: "Which papers eSewa asks for" },
      {
        p: "eSewa opens merchant accounts only for legally registered businesses, and the list depends on what kind of business you are. Based on eSewa's own published requirements:",
      },
      {
        ul: [
          "**Sole proprietorship (firm):** firm registration certificate, PAN/VAT certificate, business licence if your trade needs one, the proprietor's citizenship copy, the latest tax clearance, and an authorisation letter if someone applies on your behalf.",
          "**Private limited company:** certificate of incorporation, PAN/VAT certificate, MOA/AOA, a board minute authorising the account and who signs, citizenship copies of the signatories, latest tax clearance, any industry licence, and eSewa's KYM (know-your-merchant) form.",
          "**Partnership firm:** partnership registration and deed, the firm's PAN, citizenship copies of every partner, latest tax clearance, proof of office address, an authorisation letter if needed, and the KYM form.",
        ],
      },
      { p: "eSewa also needs a business bank account for settlements, and you sign a merchant agreement." },
      { h2: "Which papers Khalti asks for" },
      {
        p: "Khalti's process starts online: you sign up on Khalti's merchant dashboard and fill in your business KYC there. The core documents are your company registration certificate, PAN/VAT certificate, latest tax clearance and your logo (it appears on the payment screen your customers see).",
      },
      {
        p: "A bonus with Khalti's payment gateway: besides the Khalti wallet, it can accept payments from partner banks' e-banking and mobile banking, SCT/VISA cards and connectIPS. One integration covers more shoppers.",
      },
      { h2: "How long it takes" },
      {
        ol: [
          "**Gather papers** — a day if your tax clearance is current; longer if it is not. Check this first.",
          "**Apply to both wallets** — the same week. Do not wait for one before starting the other.",
          "**Review** — anywhere from a few days to a few weeks per wallet, depending on how complete the file is.",
          "**Keys arrive** — your developer connects them and tests with real, small payments.",
          "**Go live** — the store takes money.",
        ],
      },
      {
        p: "The trick is order. Apply for the merchant accounts **before** the website is designed. The build then runs in parallel with the wallets' review instead of after it. On working software — like the stores I build — the website side is usually the shorter wait. See [how to start an online store in Nepal](/posts/start-an-online-store-in-nepal) for the whole sequence.",
      },
      { cta: "online-clothing-store" },
      { h2: "Do you need both wallets on day one?" },
      {
        p: "Ideally yes. If the budget forces a choice, look at your customers: ask your last fifty buyers which wallet they used, or check which one your Instagram buyers mention. Launch with that one plus cash on delivery, and add the second wallet as soon as you can. Adding a wallet later to a store I built is a settings change plus testing — the payment code for both is already there in every store, from [Kapda](/products/online-clothing-store) to [Yantra](/products/electronics-store).",
      },
      { h2: "What happens after approval" },
      {
        ul: [
          "**Test mode first.** Both wallets offer test (sandbox) credentials. Your developer builds and tests against those before touching real money — Khalti even offers a free demo account for this.",
          "**Live keys go in last,** followed by a few real small payments and a refund test.",
          "**Every payment is double-checked** with the wallet before the order is marked paid — the step that stops fake \"payment successful\" orders. More on that on the [eSewa & Khalti payments](/features/esewa-khalti-payments) page.",
          "**Settlement** — money collects in your merchant account and moves to your bank. Khalti lets you transfer from its merchant dashboard to your bank.",
          "**Alerts** — a [WhatsApp alert](/features/whatsapp-alerts) for every paid order means nobody misses a sale.",
        ],
      },
      { h2: "Common mistakes that cost time and money" },
      {
        ul: [
          "**Applying after the site is finished** — the store sits idle for weeks.",
          "**An expired tax clearance** — the single most common hold-up in the paperwork.",
          "**Leaving the wallet fees out of the budget** — then cutting one wallet at the last minute.",
          "**Not asking the per-transaction rate in writing** — it matters more than the setup fee once you sell regularly.",
          "**Trusting the 'payment successful' page alone** — always verify on the server. A good developer does this by default.",
          "**Dropping cash on delivery** to push people online — it quietly loses buyers outside Kathmandu.",
        ],
      },
      { h2: "Marketplaces, creators and other cases" },
      {
        p: "A [multi-seller marketplace](/products/multi-vendor-marketplace) usually needs only the platform's merchant accounts: the platform collects every payment and settles each seller from a ledger, so sellers do not each need their own. A YouTuber taking tips through [Nepali Superchat](/products/nepali-superchat) does not open merchant accounts at all — the platform's accounts receive the tips. A [booking site](/products/event-planner-website) that only takes enquiries can start with no wallet and add one when it starts taking deposits.",
      },
      { h2: "Questions to ask before you apply" },
      {
        ol: [
          "What is the current setup fee, and is anything charged yearly?",
          "What share of each payment do you keep, and when is it deducted?",
          "How often is money settled to my bank, and is there a minimum?",
          "Which documents are missing from my file right now?",
          "How do refunds work, and who pays the fee on a refunded payment?",
        ],
      },
      {
        p: "Get these answers before you sign. Then share them with your developer — refund rules in particular shape how the [order ledger](/features/orders-and-ledger) should behave.",
      },
      { cta: "demo" },
    ],
    products: ["online-clothing-store", "beauty-store", "electronics-store", "multi-vendor-marketplace"],
    features: ["esewa-khalti-payments", "orders-and-ledger", "whatsapp-alerts"],
    faqs: [
      {
        q: "How much does an eSewa merchant account cost?",
        a: "About NPR 25,000 to set up in 2026, paid to eSewa. Fees change, so confirm the current amount with eSewa before you budget.",
      },
      {
        q: "What is the Khalti merchant registration fee?",
        a: "About NPR 30,000 to set up in 2026, paid to Khalti. Confirm the current fee with Khalti when you apply.",
      },
      {
        q: "What documents are needed for an eSewa merchant account?",
        a: "It depends on your business type. A sole proprietorship needs its registration certificate, PAN/VAT, the proprietor's citizenship, latest tax clearance and any trade licence; companies and partnerships need more. The full lists are in this guide.",
      },
      {
        q: "Can I accept eSewa without a registered business?",
        a: "No. Both eSewa and Khalti open merchant accounts only for legally registered businesses.",
      },
      {
        q: "What are the eSewa and Khalti transaction charges?",
        a: "Both keep a share of each payment, but neither publishes one fixed public rate. Ask each wallet for the rate in writing when you apply. Also see [how wallet payments work](/posts/esewa-khalti-payment-integration).",
      },
      {
        q: "How long does merchant approval take?",
        a: "Anywhere from a few days to a few weeks per wallet. Apply before your website is designed so the build and the review run at the same time.",
      },
    ],
  },
];

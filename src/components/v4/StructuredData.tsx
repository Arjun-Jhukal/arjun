import { person, services } from "@/content/site";

/**
 * JSON-LD for the one page.
 *
 * Two graphs, because they answer two different questions Google asks:
 *   Person              who this is, and what they are called
 *   ProfessionalService what is on offer, and where — the part that matters for
 *                       "web developer in Nepal", since areaServed is how the
 *                       country is stated in a machine-readable way
 *
 * There is no FAQPage any more: the question block was removed from the page,
 * and structured data that claims something the page does not say is the
 * fastest way to lose the rich result entirely.
 *
 * Everything here mirrors copy that is actually on the page.
 */

const SITE = "https://arjunjhukal.com.np";

export default function StructuredData() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: person.name,
      alternateName: person.devanagari,
      url: SITE,
      image: `${SITE}/profile.jpg`,
      jobTitle: "Web Developer",
      email: `mailto:${person.email}`,
      telephone: person.phoneHref,
      knowsLanguage: ["Nepali", "English", "Hindi"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "WordPress",
        "Headless CMS",
        "E-commerce development",
        "Web performance",
        "Technical SEO",
      ],
      sameAs: person.elsewhere.map((link) => link.href),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: `${person.name} — Web Development`,
      description:
        "Freelance web development in Kathmandu, Nepal: business websites, online stores and content platforms built on Next.js, React and WordPress, with a CMS the client's own team can edit.",
      url: SITE,
      image: `${SITE}/og.png`,
      provider: { "@id": `${SITE}/#person` },
      areaServed: [
        { "@type": "Country", name: "Nepal" },
        { "@type": "City", name: "Kathmandu" },
      ],
      availableLanguage: ["en", "ne"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web development services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.lede,
          },
        })),
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // the payload is built from our own content constants, never user input
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

import { faqs, site } from "@/lib/data";

export function buildResidenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: site.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    telephone: site.phoneSchema,
  };
}

export function buildFaqSchema(items: typeof faqs = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function toJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

import { PRICING_PLANS } from "@/data/pricing";
import { FAQ_ITEMS } from "@/data/faq";

// JSON-LD for the homepage. Deliberately has NO aggregateRating/review —
// fabricating star ratings without real reviews violates Google's structured
// data guidelines and risks a manual action. Add that block once the
// (currently hidden, TESTIMONIALS_VISIBLE=false) testimonial section has
// real client reviews to source it from.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicalsia.com";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Medicalsia",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Aplikasi manajemen klinik modern untuk Indonesia — satu server, satu database, khusus untuk klinik Anda sendiri.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "cs@medicalsia.com",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
  };
}

export function getFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.filter((item) => !item.pending).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Medicalsia",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "Medicalsia mengurus pendaftaran, antrian, konsultasi, farmasi, sampai kasir dalam satu aplikasi, dengan notifikasi WhatsApp otomatis ke pasien.",
    offers: PRICING_PLANS.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.priceAmount,
      priceCurrency: "IDR",
      url: `${siteUrl}/harga`,
    })),
  };
}

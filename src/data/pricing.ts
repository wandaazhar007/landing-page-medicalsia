import { PriceCardData } from "@/components/ui/PriceCard";

// The figures here are a rough starting point for discussion, NOT final pricing.
// See docs/09-landing-page-brief.md, Pricing section, for full notes.
export const PRICING_PLANS: PriceCardData[] = [
  {
    name: "Starter",
    fromLabel: "Biaya bulanan mulai dari",
    price: "Rp350rb",
    priceSuffix: "/bulan",
    setupNote: "+ setup Rp1,5 juta (sekali)",
    features: [
      "Pendaftaran & rekam medis",
      "Appointment & antrian",
      "Konsultasi & resep digital",
      "Farmasi & kasir",
      "1 lokasi klinik",
      "Dukungan email",
    ],
    ctaLabel: "Pilih Starter",
    ctaHref: "/kontak",
  },
  {
    name: "Professional",
    fromLabel: "Biaya bulanan mulai dari",
    price: "Rp750rb",
    priceSuffix: "/bulan",
    setupNote: "+ setup Rp2,5 juta (sekali)",
    features: [
      "Semua fitur Starter",
      "Notifikasi WhatsApp & Email otomatis",
      "Dukungan prioritas",
      "Custom domain",
    ],
    ctaLabel: "Pilih Professional",
    ctaHref: "/kontak",
    highlighted: true,
    tag: "Paling Dipilih",
    primaryCta: true,
  },
  {
    name: "Enterprise / Multi-Cabang",
    fromLabel: "Biaya bulanan mulai dari",
    price: "Rp1,5jt",
    priceSuffix: "/bulan (bundel)",
    setupNote: "Setup: custom, diskon per cabang tambahan",
    features: [
      "Semua fitur Professional",
      "Beberapa deployment klinik (multi-cabang)",
      "Akses awal modul BPJS/EDC/Lab",
      "Dukungan dedicated + SLA",
    ],
    ctaLabel: "Hubungi Kami",
    ctaHref: "/kontak",
  },
];

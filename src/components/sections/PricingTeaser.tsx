import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import PriceCard, { PriceCardData } from "@/components/ui/PriceCard";
import styles from "@/components/ui/PriceGrid.module.scss";

const TEASER_PLANS: PriceCardData[] = [
  {
    name: "Starter",
    fromLabel: "Mulai dari",
    price: "Rp350rb",
    priceSuffix: "/bulan",
    features: ["Modul inti klinik"],
    ctaLabel: "Lihat Detail",
    ctaHref: "/harga",
  },
  {
    name: "Professional",
    fromLabel: "Mulai dari",
    price: "Rp750rb",
    priceSuffix: "/bulan",
    features: ["+ WhatsApp & Email otomatis"],
    ctaLabel: "Lihat Detail",
    ctaHref: "/harga",
    highlighted: true,
    tag: "Paling Dipilih",
    primaryCta: true,
  },
  {
    name: "Enterprise",
    fromLabel: "Multi-cabang",
    price: "Custom",
    features: ["Untuk beberapa cabang"],
    ctaLabel: "Hubungi Kami",
    ctaHref: "/kontak",
  },
];

export default function PricingTeaser() {
  return (
    <Section>
      <SectionHead title="Harga yang jelas dari awal" center>
        Tiga paket, disesuaikan skala klinik Anda.
      </SectionHead>
      <div className={styles.priceGrid}>
        {TEASER_PLANS.map((plan) => (
          <PriceCard key={plan.name} data={plan} />
        ))}
      </div>
    </Section>
  );
}

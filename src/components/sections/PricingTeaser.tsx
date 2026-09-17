import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import PriceCard from "@/components/ui/PriceCard";
import { PRICING_PLANS } from "@/data/pricing";
import styles from "@/components/ui/PriceGrid.module.scss";

// Trimmed-down teaser cards derived from PRICING_PLANS (single source of
// truth) so the homepage never drifts out of sync with /harga again — it
// used to duplicate the plan data by hand and silently showed a stale price.
const TEASER_OVERRIDES: Record<string, { fromLabel: string; features: string[] }> = {
  Starter: { fromLabel: "Mulai dari", features: ["Modul inti klinik"] },
  Professional: { fromLabel: "Mulai dari", features: ["+ WhatsApp & Email otomatis"] },
  "Enterprise / Multi-Cabang": { fromLabel: "Multi-cabang", features: ["Untuk beberapa cabang"] },
};

const TEASER_PLANS = PRICING_PLANS.map((plan) => ({
  ...plan,
  name: plan.name === "Enterprise / Multi-Cabang" ? "Enterprise" : plan.name,
  fromLabel: TEASER_OVERRIDES[plan.name]?.fromLabel ?? plan.fromLabel,
  features: TEASER_OVERRIDES[plan.name]?.features ?? plan.features,
  ctaLabel: plan.name === "Enterprise / Multi-Cabang" ? "Hubungi Kami" : "Lihat Detail",
  ctaHref: plan.name === "Enterprise / Multi-Cabang" ? "/kontak" : "/harga",
}));

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

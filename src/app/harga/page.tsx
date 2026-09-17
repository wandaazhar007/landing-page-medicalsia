import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import PriceCard from "@/components/ui/PriceCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FaqMoreButton from "@/components/ui/FaqMoreButton";
import CtaBand from "@/components/ui/CtaBand";
import { PRICING_PLANS } from "@/data/pricing";
import priceGridStyles from "@/components/ui/PriceGrid.module.scss";
import styles from "./harga.module.scss";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Tiga paket Medicalsia — Starter, Professional, dan Enterprise/Multi-Cabang. Biaya setup sekali di awal, plus biaya bulanan yang mencakup hosting dan dukungan teknis.",
  alternates: { canonical: "/harga" },
};

const PRICING_FAQ = [
  {
    question: "Apakah ada biaya tersembunyi?",
    answer:
      "Tidak. Biaya setup dan bulanan sudah mencakup hosting dan dukungan teknis. Biaya tambahan hanya muncul kalau klinik memilih layanan pihak ketiga sendiri (misal WhatsApp gateway), yang dikelola langsung oleh klinik.",
  },
  {
    question: "Bisa upgrade paket di kemudian hari?",
    answer: "Bisa, hubungi tim kami untuk proses upgrade paket kapan saja sesuai kebutuhan klinik yang berkembang.",
  },
  {
    question: "Apakah ada kontrak minimum?",
    answer: "Detail kontrak akan dijelaskan lengkap di halaman Syarat & Ketentuan.",
  },
];

export default function HargaPage() {
  return (
    <>
      <PageHero
        eyebrow="Harga"
        title="Harga yang jelas dari awal."
        lede="Tiga paket, disesuaikan skala klinik Anda. Biaya setup sekali di awal, plus biaya bulanan yang sudah mencakup hosting dan dukungan teknis."
      />
      <Divider />
      <Section>
        <div className={priceGridStyles.priceGrid}>
          {PRICING_PLANS.map((plan) => (
            <PriceCard key={plan.name} data={plan} />
          ))}
        </div>
        <div className={styles.priceNote}>
          Catatan: angka di atas adalah starting point kasar dan dapat berubah — hubungi tim kami untuk penawaran
          yang disesuaikan dengan kondisi klinik Anda, termasuk kalau Anda masih terikat kontrak dengan sistem lama.
        </div>
      </Section>
      <Section>
        <SectionHead title="Pertanyaan seputar harga" />
        <FaqAccordion items={PRICING_FAQ} />
        <FaqMoreButton />
      </Section>
      <CtaBand title="Butuh paket khusus?" ctaLabel="Hubungi Kami" ctaHref="/kontak">
        Untuk kebutuhan multi-cabang atau custom, tim kami siap diskusi langsung.
      </CtaBand>
    </>
  );
}

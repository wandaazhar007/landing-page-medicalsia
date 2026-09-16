import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/sections/ContactForm";
import ContactSidebar from "@/components/sections/ContactSidebar";
import styles from "./kontak.module.scss";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Ceritakan kondisi klinik Anda — isi form request demo atau hubungi tim Medicalsia langsung.",
  alternates: { canonical: "/kontak" },
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Ceritakan kondisi klinik Anda."
        lede="Isi form di bawah, atau hubungi kami langsung — tanpa komitmen di awal, kami bantu petakan kebutuhan klinik Anda."
      />
      <Divider />
      <Section>
        <div className={styles.grid}>
          <ContactForm />
          <ContactSidebar />
        </div>
      </Section>
    </>
  );
}

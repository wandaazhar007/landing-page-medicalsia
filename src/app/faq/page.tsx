import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Semua pertanyaan seputar Medicalsia dalam satu halaman — keamanan data, reliabilitas server, migrasi dari sistem lain, harga, dan fitur.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Semua pertanyaan, satu halaman."
        lede="Diurutkan dari yang paling sering ditanyakan. Tidak ketemu jawabannya? Langsung hubungi kami saja."
      />
      <Divider />
      <Section>
        <FaqAccordion items={FAQ_ITEMS} />
      </Section>
      <CtaBand title="Masih ada pertanyaan lain?" ctaLabel="Hubungi Kami" ctaHref="/kontak">
        Tim kami siap jawab langsung lewat WhatsApp atau email.
      </CtaBand>
    </>
  );
}

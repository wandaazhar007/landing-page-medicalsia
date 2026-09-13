import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FlowSection from "@/components/sections/FlowSection";
import Section from "@/components/ui/Section";
import ReliabilityBlock from "@/components/ui/ReliabilityBlock";
import CtaBand from "@/components/ui/CtaBand";
import HonestCard from "@/components/sections/HonestCard";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FaqShortSection from "@/components/sections/FaqShortSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Medicalsia — Aplikasi Manajemen Klinik untuk Indonesia",
  description:
    "Medicalsia mengurus pendaftaran, antrian, konsultasi, farmasi, sampai kasir dalam satu aplikasi, dengan notifikasi WhatsApp otomatis ke pasien.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FeatureGrid />
      <FlowSection />
      <Section>
        <ReliabilityBlock title="&#8220;Server-nya kuat, nggak?&#8221;">
          <p>
            Infrastruktur kami didukung SLA uptime hingga 99,99%, dipantau proaktif, dengan backup rutin. Kami nggak
            akan bilang &#8220;nggak pernah ada kendala sama sekali&#8221; — nggak ada sistem, dari siapa pun, yang
            bisa jujur mengklaim itu.
          </p>
          <p>
            Yang bisa kami janjikan: respons cepat, dan transparan setiap kali ada gangguan.{" "}
            <a href="/migrasi">Baca detail reliabilitas &amp; proses migrasi →</a>
          </p>
        </ReliabilityBlock>
      </Section>
      <CtaBand title="Sudah pakai aplikasi klinik lain?" ctaLabel="Lihat Proses Migrasi" ctaHref="/migrasi">
        Pindah ke Medicalsia nggak serumit yang dibayangkan. Kami bantu proses migrasinya, dari konsultasi sampai
        pendampingan staf.
      </CtaBand>
      <HonestCard />
      <TestimonialSection />
      <PricingTeaser />
      <FaqShortSection />
      <FinalCtaSection />
    </>
  );
}

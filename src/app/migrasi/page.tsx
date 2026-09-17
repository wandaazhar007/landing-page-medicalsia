import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import CompareTable from "@/components/ui/CompareTable";
import ReliabilityBlock from "@/components/ui/ReliabilityBlock";
import StepList from "@/components/ui/StepList";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FaqMoreButton from "@/components/ui/FaqMoreButton";
import CtaBand from "@/components/ui/CtaBand";
import styles from "./migrasi.module.scss";

export const metadata: Metadata = {
  title: "Kenapa Pindah?",
  description:
    "Sudah pakai aplikasi klinik lain? Lihat perbandingan, proses migrasi data, dan reliabilitas server Medicalsia sebelum memutuskan pindah.",
  alternates: { canonical: "/migrasi" },
};

const COMPARE_ROWS = [
  {
    old: "Reminder pasien masih manual telepon/WA satu-satu",
    next: "WhatsApp otomatis terkirim sendiri (booking, reminder, invoice, obat siap)",
  },
  {
    old: "Data terasa lambat, sering loading lama",
    next: "Setiap klinik punya database & server sendiri, tidak berbagi resource",
  },
  {
    old: "Sulit dapat dukungan teknis saat ada masalah",
    next: "Kontak langsung dengan tim pengembang, bukan CS berlapis",
  },
  {
    old: "Antrian masih kertas/manual",
    next: "Layar display otomatis + panggilan suara, dua layar terpisah",
  },
  {
    old: "Takut kehilangan data histori pasien saat pindah sistem",
    next: "Proses migrasi data terpandu, bukan Anda sendirian",
  },
];

const MIGRATION_STEPS = [
  { title: "Konsultasi Awal", description: "Ceritakan sistem yang dipakai sekarang." },
  { title: "Pemindahan Data", description: "Kami bantu proses migrasi data, sejauh sistem lama mengizinkan ekspor." },
  { title: "Setup Deployment", description: "Server dan database khusus klinik Anda disiapkan." },
  { title: "Pendampingan", description: "Staf dilatih sebelum sistem lama benar-benar ditinggalkan." },
  { title: "Go-Live", description: "Klinik resmi beroperasi penuh dengan Medicalsia." },
];

const MIGRATION_FAQ = [
  {
    question: "Apakah data pasien saya aman saat pindah?",
    answer:
      "Proses migrasi dilakukan terpandu, dan kredensial sensitif dienkripsi. Setiap klinik punya database terpisah sepenuhnya.",
  },
  {
    question: "Berapa lama proses migrasinya?",
    answer: "Bergantung volume data dan kompleksitas sistem lama — tim kami kasih estimasi setelah konsultasi awal.",
  },
  {
    question: "Apakah klinik akan mengalami downtime saat pindah?",
    answer:
      "Kami pakai masa transisi/pendampingan supaya tidak ada celah operasional — staf terbiasa dulu sebelum sistem lama ditinggalkan sepenuhnya.",
  },
];

export default function MigrasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Kenapa Pindah?"
        title="Sudah saatnya pindah dari sistem lama?"
        lede="Kami tahu pindah sistem itu menakutkan — data bisa hilang, staf harus belajar ulang, dan operasional bisa terganggu. Ini yang sebenarnya terjadi kalau Anda pindah ke Medicalsia."
      />
      <Divider />
      <Section>
        <SectionHead title="Yang biasanya jadi keluhan" />
        <CompareTable rows={COMPARE_ROWS} />
      </Section>
      <Section bordered>
        <ReliabilityBlock title="Soal reliabilitas server — jawaban jujurnya">
          <p>
            Infrastruktur kami didukung SLA uptime hingga 99,99%, dipantau proaktif, dengan strategi backup rutin.
            Karena setiap klinik punya database dan server sendiri (bukan berbagi dengan klinik lain), masalah teknis
            di satu klinik tidak akan menjalar ke klinik Anda.
          </p>
          <p>
            Kami tidak akan bilang &ldquo;tidak akan pernah ada kendala sama sekali&rdquo; — tidak ada sistem, dari
            penyedia manapun, yang bisa jujur menjanjikan itu. Yang kami janjikan: respons cepat dan transparan
            setiap kali ada gangguan.
          </p>
        </ReliabilityBlock>
      </Section>
      <Divider />
      <Section>
        <SectionHead title="Proses migrasinya seperti apa?" />
        <StepList steps={MIGRATION_STEPS} />
        <p className={styles.note}>
          Catatan jujur: kecepatan migrasi data sangat bergantung pada apakah sistem lama Anda mengizinkan ekspor
          data. Kami akan kasih estimasi realistis setelah sesi konsultasi awal — bukan janji generik di muka.
        </p>
      </Section>
      <Section>
        <SectionHead title="Pertanyaan seputar migrasi" />
        <FaqAccordion items={MIGRATION_FAQ} />
        <FaqMoreButton />
      </Section>
      <CtaBand title="Konsultasi migrasi, gratis" ctaLabel="Konsultasi Migrasi Gratis" ctaHref="/kontak">
        Ceritakan sistem yang Anda pakai sekarang, kami bantu petakan proses pindahnya.
      </CtaBand>
    </>
  );
}

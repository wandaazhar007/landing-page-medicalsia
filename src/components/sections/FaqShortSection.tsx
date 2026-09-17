import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FaqMoreButton from "@/components/ui/FaqMoreButton";

const HOME_FAQ = [
  {
    question: "Apakah data pasien saya aman?",
    answer:
      "Setiap klinik punya database sendiri yang terpisah sepenuhnya dari klinik lain, dan kredensial sensitif dienkripsi.",
  },
  {
    question: "Saya sudah pakai aplikasi klinik lain, bisa pindah?",
    answer: "Bisa. Kami bantu proses migrasinya lewat konsultasi awal, pemindahan data, dan masa pendampingan.",
  },
  {
    question: "Berapa biaya berlangganannya?",
    answer: "Ada 3 paket: Starter, Professional, dan Enterprise. Lihat rincian lengkap di halaman Harga.",
  },
];

export default function FaqShortSection() {
  return (
    <Section>
      <SectionHead title="Pertanyaan yang sering muncul" />
      <FaqAccordion items={HOME_FAQ} />
      <FaqMoreButton />
    </Section>
  );
}

import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import StepList from "@/components/ui/StepList";

const FLOW_STEPS = [
  { title: "Booking", description: "Lewat resepsionis atau link booking online klinik." },
  { title: "Antrian", description: "Nomor otomatis, dipanggil pakai suara di layar." },
  { title: "Konsultasi", description: "Dokter buka riwayat pasien, tulis resep digital." },
  { title: "Kasir & Farmasi", description: "Bayar dulu, obat disiapkan setelahnya." },
  { title: "Pulang", description: "Riwayat kunjungan tersimpan, siap dicetak kapan saja." },
];

export default function FlowSection() {
  return (
    <Section bordered>
      <SectionHead title="Satu alur, dari pasien datang sampai pulang bawa obat" />
      <StepList steps={FLOW_STEPS} />
    </Section>
  );
}

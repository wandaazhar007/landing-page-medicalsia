import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import styles from "./ProblemSection.module.scss";

const PAIN_POINTS = [
  "Resepsionis masih telepon satu-satu buat ingetin jadwal besok.",
  "Sistemnya lemot pas jam ramai, pasien jadi ikut ngantre di depan komputer.",
  "Butuh bantuan teknis, tapi nomor CS-nya nggak pernah kejawab.",
  "Antrian masih ditulis di kertas — gampang tercecer, gampang salah panggil.",
];

export default function ProblemSection() {
  return (
    <Section bordered>
      <SectionHead title="Masih begini setiap hari?">
        Kalau salah satu ini kedengaran familiar, kemungkinan besar sistem lama Anda yang jadi masalahnya — bukan tim
        Anda.
      </SectionHead>
      <div className={styles.painList}>
        {PAIN_POINTS.map((point) => (
          <div key={point} className={styles.painItem}>
            <div className={styles.bar} />
            <p>{point}</p>
          </div>
        ))}
      </div>
      <p className={styles.punch}>Medicalsia dibangun buat klinik yang capek sama semua itu.</p>
    </Section>
  );
}

import Section from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import styles from "./FinalCtaSection.module.scss";

export default function FinalCtaSection() {
  return (
    <Section className={styles.final}>
      <h2>Siap coba Medicalsia?</h2>
      <p>Ceritakan kondisi klinik Anda sekarang, kami bantu petakan apa yang paling pas — tanpa komitmen di awal.</p>
      <div className={styles.ctas}>
        <LinkButton href="/kontak">Request Demo Sekarang</LinkButton>
      </div>
    </Section>
  );
}

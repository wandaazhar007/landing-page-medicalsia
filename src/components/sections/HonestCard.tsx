import { ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import IconBox from "@/components/ui/IconBox";
import styles from "./HonestCard.module.scss";

export default function HonestCard() {
  return (
    <Section>
      <div className={styles.honestCard}>
        <IconBox>
          <ShieldCheck size={20} />
        </IconBox>
        <p>
          <strong>Medicalsia masih tergolong baru</strong> — dan kami cukup terbuka soal itu. Daripada mengisi bagian
          ini dengan testimoni yang belum kami punya, kami lebih memilih fokus jadi partner jangka panjang untuk
          klinik-klinik pertama yang percaya sama kami.
        </p>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { Check, CreditCard, MessageCircle, ShieldCheck, Tv } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import IconBox from "@/components/ui/IconBox";
import styles from "./FeatureGrid.module.scss";

export default function FeatureGrid() {
  return (
    <Section>
      <SectionHead title="Empat hal yang paling sering bikin klinik pindah ke Medicalsia">
        Bukan daftar fitur teknis — ini yang benar-benar terasa bedanya di operasional harian.{" "}
        <Link href="/fitur" className={styles.headLink}>
          Lihat semua fitur →
        </Link>
      </SectionHead>
      <div className={styles.grid}>
        <div className={`${styles.feat} ${styles.hi}`}>
          <IconBox dark>
            <MessageCircle size={20} />
          </IconBox>
          <div className={styles.featTitle}>Notifikasi WhatsApp, jalan sendiri</div>
          <p className={styles.featDesc}>
            Konfirmasi booking, pengingat jadwal, sampai kabar &ldquo;obat sudah siap diambil&rdquo; — semua terkirim
            otomatis dari nomor WhatsApp klinik Anda sendiri.
          </p>
          <div className={styles.featDemo}>
            <span className={styles.chip}>
              <Check size={12} /> Booking
            </span>
            <span className={styles.chip}>
              <Check size={12} /> Reminder
            </span>
            <span className={styles.chip}>
              <Check size={12} /> Obat Siap
            </span>
          </div>
        </div>
        <div className={styles.feat}>
          <IconBox>
            <Tv size={20} />
          </IconBox>
          <div className={styles.featTitle}>Dua layar antrian, bukan cuma satu</div>
          <p className={styles.featDesc}>
            Ruang tunggu dan farmasi masing-masing punya layar sendiri, lengkap dengan panggilan suara otomatis.
          </p>
        </div>
        <div className={styles.feat}>
          <IconBox>
            <CreditCard size={20} />
          </IconBox>
          <div className={styles.featTitle}>Kasir yang nggak bisa &ldquo;kebobolan&rdquo;</div>
          <p className={styles.featDesc}>
            Pasien wajib bayar dulu sebelum obat diserahkan — sistemnya yang menjaga alur ini, bukan cuma ingatan
            kasir.
          </p>
        </div>
        <div className={styles.feat}>
          <IconBox>
            <ShieldCheck size={20} />
          </IconBox>
          <div className={styles.featTitle}>Server sendiri, per klinik</div>
          <p className={styles.featDesc}>
            Data klinik Anda tidak numpang di server yang sama dengan klinik lain. Masalah di tempat lain, tidak ikut
            kena ke Anda.
          </p>
        </div>
      </div>
    </Section>
  );
}

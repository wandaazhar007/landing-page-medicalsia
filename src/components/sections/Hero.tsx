import Image from "next/image";
import { CalendarPlus, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import styles from "./Hero.module.scss";

const ECOSYSTEM_LOGOS = [
  { src: "/logos/satu-sehat.png", alt: "SATU SEHAT" },
  { src: "/logos/pcare-bpjs.png", alt: "PCare BPJS" },
  { src: "/logos/mobile-jkn.png", alt: "Mobile JKN" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.grid}>
        <div>
          <span className={styles.kicker}>
            <span className={styles.pulse} />
            Dibuat khusus untuk klinik di Indonesia
          </span>
          <h1>
            Kelola klinik Anda,
            <br />
            tanpa drama <em>pindah sistem</em>.
          </h1>
          <p className={styles.lede}>
            Medicalsia mengurus pendaftaran, antrian, konsultasi, farmasi, sampai kasir dalam satu aplikasi — dan
            mengirim WhatsApp ke pasien Anda secara otomatis, dari nomor klinik sendiri.
          </p>
          <div className={styles.ecosystem}>
            <span className={styles.ecosystemLabel}>Dirancang mengacu ke ekosistem SATU SEHAT &amp; BPJS</span>
            <div className={styles.ecosystemLogos}>
              {ECOSYSTEM_LOGOS.map((logo) => (
                <Image key={logo.alt} src={logo.src} alt={logo.alt} width={54} height={54} />
              ))}
            </div>
          </div>
          <div className={styles.heroCtas}>
            <LinkButton href="/kontak">
              <CalendarPlus size={18} />
              Request Demo
            </LinkButton>
            <LinkButton href="/fitur" variant="ghost">
              <Sparkles size={18} />
              Lihat Fitur
            </LinkButton>
          </div>
          <div className={styles.trustLine}>
            <CheckCircle2 size={16} />
            Server dipantau 24 jam, SLA uptime hingga 99,99%
          </div>
        </div>
        <div className={styles.illustration}>
          <div className={styles.ticket}>
            <div className={styles.label}>Antrian Sekarang</div>
            <div className={styles.num}>A12</div>
            <div className={styles.sub}>dr. Andi Wijaya · Poli Umum</div>
            <div className={styles.waBubble}>
              <div className={styles.who}>
                <MessageCircle size={14} />
                WhatsApp Klinik
              </div>
              <div className={styles.msg}>
                Nomor <b>A12</b> silakan menuju ruang dr. Andi. Ditunggu ya 🙏
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

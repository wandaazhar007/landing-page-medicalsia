import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import LegalNav from "@/components/ui/LegalNav";
import styles from "@/components/ui/LegalDoc.module.scss";

export const metadata: Metadata = {
  title: "Kebijakan Refund",
  description: "Kebijakan pengembalian dana Medicalsia — sebagian besar masih dalam proses penyusunan.",
};

export default function KebijakanRefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Kebijakan Refund"
        lede="Ketentuan pengembalian dana untuk biaya setup dan/atau biaya langganan bulanan Medicalsia."
      />
      <Divider />
      <Section>
        <LegalNav active="/kebijakan-refund" />
        <div className={styles.legalDoc}>
          <h2>
            1. Ruang Lingkup <span className={styles.pendingTag}>Segera Dilengkapi</span>
          </h2>
          <p>
            Kebijakan ini mengatur pengembalian dana untuk biaya setup dan/atau biaya langganan bulanan Medicalsia.
            Detail lengkap sedang disiapkan tim kami.
          </p>

          <h2>
            2. Kondisi yang Memenuhi Syarat Refund <span className={styles.pendingTag}>Segera Dilengkapi</span>
          </h2>
          <p>Detail kondisi yang memenuhi syarat pengembalian dana sedang disiapkan.</p>

          <h2>
            3. Kondisi yang Tidak Memenuhi Syarat Refund <span className={styles.pendingTag}>Segera Dilengkapi</span>
          </h2>
          <p>
            Umumnya, biaya setup tidak dapat dikembalikan karena mencakup kerja provisioning nyata (pembuatan server
            dan database khusus klinik Anda). Detail lengkap sedang disiapkan.
          </p>

          <h2>
            4. Proses Pengajuan Refund <span className={styles.pendingTag}>Segera Dilengkapi</span>
          </h2>
          <p>
            Cara pengajuan dan estimasi waktu proses sedang disiapkan. Untuk saat ini, silakan hubungi tim kami
            langsung untuk pertanyaan seputar refund.
          </p>

          <h2>
            5. Metode Pengembalian Dana <span className={styles.pendingTag}>Segera Dilengkapi</span>
          </h2>
          <p>Detail metode pengembalian dana sedang disiapkan.</p>

          <div className={styles.updated}>
            Dokumen ini adalah draft awal dan sedang dalam peninjauan hukum. Terakhir diperbarui: [akan diisi saat
            publikasi final]
          </div>
        </div>
      </Section>
    </>
  );
}

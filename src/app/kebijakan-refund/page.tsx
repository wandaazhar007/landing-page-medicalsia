import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import LegalNav from "@/components/ui/LegalNav";
import styles from "@/components/ui/LegalDoc.module.scss";

export const metadata: Metadata = {
  title: "Kebijakan Refund",
  description:
    "Ketentuan pengembalian dana Medicalsia untuk biaya setup dan langganan bulanan — kondisi yang memenuhi syarat refund, proses pengajuan, dan metode pengembalian dana.",
  alternates: { canonical: "/kebijakan-refund" },
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
          <h2>1. Ruang Lingkup</h2>
          <p>
            Kebijakan ini mengatur pengembalian dana untuk biaya setup dan biaya langganan bulanan Medicalsia yang
            dibayarkan oleh klinik pelanggan (&ldquo;Pelanggan&rdquo;).
          </p>

          <h2>2. Kondisi yang Memenuhi Syarat Refund</h2>
          <p>
            Pengembalian dana hanya berlaku untuk kesalahan penagihan yang terbukti berasal dari pihak Medicalsia,
            misalnya kelebihan tagih (double charge) atau kesalahan teknis pada sistem pembayaran. Kesalahan
            tersebut akan dikembalikan penuh sesuai nilai yang salah tagih.
          </p>

          <h2>3. Kondisi yang Tidak Memenuhi Syarat Refund</h2>
          <p>
            Biaya setup tidak dapat dikembalikan setelah proses provisioning (pembuatan server dan database khusus
            klinik Anda) dimulai. Biaya bulanan yang sudah dibayar untuk periode berjalan juga tidak dikembalikan
            (baik sebagian/prorata maupun penuh) apabila Pelanggan mengakhiri langganan di tengah periode —
            termasuk apabila pengakhiran terjadi sebelum masa kontrak minimum 6 bulan berakhir, di mana Pelanggan
            tetap wajib melunasi biaya bulanan untuk sisa masa kontrak minimum tersebut (lihat Syarat &amp;
            Ketentuan pasal 6).
          </p>

          <h2>4. Proses Pengajuan Refund</h2>
          <p>
            Pelanggan dapat mengajukan klaim refund untuk kondisi pada poin 2 dengan menghubungi tim kami melalui
            kontak resmi yang tersedia di halaman Kontak. Tim kami akan memverifikasi kesalahan penagihan sebelum
            memproses pengembalian dana.
          </p>

          <h2>5. Metode Pengembalian Dana</h2>
          <p>
            Dana yang memenuhi syarat refund dikembalikan melalui transfer bank ke rekening yang sama dengan yang
            digunakan untuk pembayaran, kecuali disepakati lain secara tertulis dengan Pelanggan.
          </p>
          {/* 
          <div className={styles.updated}>
            Dokumen ini adalah draft awal dan sedang dalam peninjauan hukum. Terakhir diperbarui: [akan diisi saat
            publikasi final]
          </div> */}

          <div className={styles.updated}>
            Terakhir diperbarui: <span className={styles.updatedDate}>16 September 2026</span>
          </div>
        </div>
      </Section>
    </>
  );
}

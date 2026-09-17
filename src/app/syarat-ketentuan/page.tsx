import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import LegalNav from "@/components/ui/LegalNav";
import styles from "@/components/ui/LegalDoc.module.scss";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan layanan Medicalsia untuk klinik pelanggan.",
  alternates: { canonical: "/syarat-ketentuan" },
};

export default function SyaratKetentuanPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Syarat &amp; Ketentuan"
        lede="Ketentuan penggunaan layanan Medicalsia — mohon dibaca sebelum mendaftar sebagai klinik pelanggan."
      />
      <Divider />
      <Section>
        <LegalNav active="/syarat-ketentuan" />
        <div className={styles.legalDoc}>
          <h2>1. Definisi &amp; Ruang Lingkup Layanan</h2>
          <p>
            Medicalsia adalah aplikasi manajemen klinik yang disediakan dalam model satu deployment (server dan
            database) terpisah per klinik pelanggan. Dengan mendaftar dan menggunakan layanan Medicalsia, klinik
            (&ldquo;Pelanggan&rdquo;) menyetujui syarat dan ketentuan berikut.
          </p>

          <h2>2. Pendaftaran &amp; Akun</h2>
          <p>
            Pendaftaran klinik baru dilakukan melalui proses onboarding yang dibantu langsung oleh tim kami.
            Pelanggan bertanggung jawab menjaga kerahasiaan kredensial akun staf yang diberikan akses ke sistem.
          </p>

          <h2>3. Kewajiban Pelanggan (Klinik)</h2>
          <ul>
            <li>Menjaga kerahasiaan dan keamanan data pasien yang diinput ke dalam sistem</li>
            <li>Mematuhi peraturan perundang-undangan yang berlaku terkait rekam medis elektronik dan perlindungan data pribadi</li>
            <li>Menggunakan layanan sesuai tujuan operasional klinik yang sah</li>
            <li>Bertanggung jawab atas akurasi data yang diinput ke dalam sistem</li>
          </ul>

          <h2>4. Kewajiban Medicalsia</h2>
          <ul>
            <li>Menyediakan layanan sesuai deskripsi pada paket berlangganan yang dipilih</li>
            <li>Menjaga infrastruktur dengan tingkat layanan yang wajar</li>
            <li>Memberikan dukungan teknis sesuai tingkat paket yang dipilih</li>
          </ul>

          <h2>5. Biaya &amp; Pembayaran</h2>
          <p>
            Biaya berlangganan terdiri dari biaya setup (sekali) dan biaya bulanan, sesuai paket yang dipilih.
            Ketentuan pembatalan dan pengembalian dana diatur dalam Kebijakan Refund terpisah.
          </p>

          <h2>6. Kontrak Minimum &amp; Perpanjangan</h2>
          <p>
            Berlangganan Medicalsia memiliki masa kontrak minimum 6 (enam) bulan sejak tanggal aktivasi. Jika
            Pelanggan mengakhiri layanan sebelum masa kontrak minimum berakhir, Pelanggan tetap wajib melunasi
            biaya bulanan untuk sisa masa kontrak minimum tersebut.
          </p>
          <p>
            Setelah masa kontrak minimum berakhir, langganan akan diperpanjang secara bulanan dan Pelanggan dapat
            mengakhiri layanan kapan saja sesuai ketentuan pada Kebijakan Refund.
          </p>

          <h2>7. Batasan Tanggung Jawab</h2>
          <p>
            Medicalsia adalah alat bantu operasional dan administratif klinik.{" "}
            <strong>Medicalsia bukan pengganti penilaian klinis atau keputusan medis profesional</strong> — seluruh
            keputusan diagnosis, pengobatan, dan tindakan medis tetap sepenuhnya menjadi tanggung jawab tenaga
            kesehatan yang menangani pasien.
          </p>

          <h2>8. Kekayaan Intelektual</h2>
          <p>
            Seluruh hak kekayaan intelektual atas perangkat lunak, desain, dan merek Medicalsia tetap menjadi milik
            Medicalsia. Data yang diinput Pelanggan (termasuk data pasien) tetap menjadi <span className={styles.updatedDate}>milik Pelanggan/pasien</span> terkait.
          </p>

          <h2>9. Hukum yang Berlaku</h2>
          <p>Syarat dan Ketentuan ini tunduk pada hukum Republik Indonesia.</p>

          {/* <div className={styles.updated}>
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

import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import LegalNav from "@/components/ui/LegalNav";
import styles from "@/components/ui/LegalDoc.module.scss";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Bagaimana Medicalsia mengumpulkan, menggunakan, dan melindungi data pribadi — mengacu pada UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.",
  alternates: { canonical: "/kebijakan-privasi" },
};

export default function KebijakanPrivasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Kebijakan Privasi"
        lede="Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi — mengacu pada UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi."
      />
      <Divider />
      <Section>
        <LegalNav active="/kebijakan-privasi" />
        <div className={styles.legalDoc}>
          <h2>Pendahuluan</h2>
          <p>
            Kebijakan Privasi ini menjelaskan bagaimana Medicalsia (&ldquo;kami&rdquo;) mengumpulkan, menggunakan,
            dan melindungi data pribadi dalam dua konteks berbeda: data pengunjung situs ini, dan data yang diproses
            lewat aplikasi Medicalsia oleh klinik pelanggan kami. Dalam konteks kedua, klinik bertindak sebagai{" "}
            <strong>Pengendali Data Pribadi</strong>, dan Medicalsia bertindak sebagai{" "}
            <strong>Prosesor Data Pribadi</strong> yang memproses data atas instruksi klinik.
          </p>

          <h2>Data yang Kami Kumpulkan</h2>
          <p>
            <strong>Dari situs ini (form kontak):</strong> nama, nama klinik, nomor HP/WhatsApp, email, isi pesan,
            dan sistem klinik yang sedang digunakan (jika diisi).
          </p>
          <p>
            <strong>Dari aplikasi Medicalsia (diproses atas nama klinik pelanggan):</strong> data pasien (nama, NIK,
            tanggal lahir, telepon, alamat, alergi, riwayat rekam medis, resep) dan data staf klinik (nama, email,
            telepon, peran/jabatan).
          </p>

          <h2>Tujuan Penggunaan Data</h2>
          <ul>
            <li>Merespons pertanyaan/permintaan demo melalui form kontak</li>
            <li>Menyediakan dan menjalankan layanan Medicalsia sesuai instruksi klinik pelanggan</li>
            <li>Meningkatkan kualitas layanan dan dukungan teknis</li>
            <li>Memenuhi kewajiban hukum yang berlaku</li>
          </ul>

          <h2>Dasar Hukum Pemrosesan</h2>
          <p>
            Sesuai UU PDP, pemrosesan data pribadi dilakukan berdasarkan persetujuan eksplisit dari subjek data,
            pemenuhan kewajiban kontraktual, dan/atau kewajiban hukum yang berlaku.
          </p>

          <h2>Retensi Data</h2>
          <p>
            Data rekam medis pasien disimpan sesuai ketentuan retensi rekam medis elektronik yang berlaku di
            Indonesia (paling singkat 25 tahun sejak kunjungan terakhir pasien). Data form kontak disimpan selama
            diperlukan untuk menindaklanjuti permintaan Anda.
          </p>

          <h2>Pembagian Data ke Pihak Ketiga</h2>
          <p>
            Kami dapat membagikan data terbatas ke penyedia hosting &amp; database, penyedia layanan WhatsApp, dan
            penyedia layanan email — sejauh diperlukan untuk operasional. Kami tidak menjual data pribadi kepada
            pihak ketiga mana pun untuk kepentingan pemasaran.
          </p>

          <h2>Keamanan Data</h2>
          <p>
            Kami menerapkan enkripsi kredensial sensitif, isolasi data per klinik (setiap klinik memiliki database
            terpisah), dan kontrol akses berbasis peran.
          </p>

          <h2>Hak Anda Sebagai Subjek Data</h2>
          <p>
            Sesuai UU PDP, Anda berhak mengakses, memperbaiki, menghapus data pribadi Anda, menarik persetujuan, dan
            mengajukan keberatan atas pemrosesan tertentu. Untuk data pasien yang diproses lewat aplikasi Medicalsia,
            permintaan sebaiknya diajukan langsung ke klinik tempat Anda berobat.
          </p>

          <h2>
            Data Anak
            {/* <span className={styles.pendingTag}>Segera Dilengkapi</span> */}
          </h2>
          <p>
            Untuk pasien anak di bawah umur, data diproses berdasarkan persetujuan orang tua/wali sesuai mekanisme
            yang diterapkan klinik masing-masing.
          </p>

          <h2>Kontak</h2>
          <p>
            Pertanyaan seputar kebijakan privasi ini dapat diajukan ke{" "}
            <a href="mailto:cs@medicalsia.com">cs@medicalsia.com</a>.
          </p>

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

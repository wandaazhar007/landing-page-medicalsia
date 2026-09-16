import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import styles from "./tentang.module.scss";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Medicalsia lahir dari pengamatan sederhana: klinik kecil-menengah di Indonesia pantas punya alat operasional yang sama baiknya dengan fasilitas kesehatan besar.",
  alternates: { canonical: "/tentang" },
};

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Dibangun karena klinik kecil pantas dapat alat yang bagus juga."
      />
      <Divider />
      <Section>
        <div className={styles.aboutBlock}>
          <p>
            Medicalsia lahir dari pengamatan sederhana: banyak klinik kecil-menengah di Indonesia masih menjalankan
            operasional secara manual — nomor antrian di kertas, reminder pasien lewat telepon satu-satu, dan tidak
            ada satu tempat untuk melihat riwayat pasien secara utuh. Bukan karena mereka tidak mau berubah, tapi
            karena software yang tersedia sering kali terlalu rumit, terlalu mahal, atau dibangun untuk rumah sakit
            besar — bukan untuk klinik dengan beberapa staf.
          </p>
          <p>
            Kami percaya klinik kecil pantas punya alat yang sama baiknya dengan yang dipakai fasilitas kesehatan
            besar, tanpa harus mengorbankan kesederhanaan yang mereka butuhkan sehari-hari.
          </p>
          <p>
            Karena itu Medicalsia dirancang dengan satu prinsip: setiap klinik mendapat server dan database miliknya
            sendiri — bukan berbagi dengan ratusan klinik lain di satu sistem yang sama. Ini berarti data lebih
            terjaga, performa lebih stabil, dan kalau ada masalah di satu klinik, klinik lain tidak ikut terdampak.
          </p>
          <p>
            Kami juga sadar banyak klinik yang membaca ini sudah pernah kecewa dengan vendor software sebelumnya —
            entah karena support yang lambat, biaya tersembunyi, atau data yang sulit dipindahkan. Itu sebabnya kami
            memilih untuk transparan sejak awal: soal harga, soal keterbatasan (termasuk soal reliabilitas server
            yang kami jelaskan apa adanya), dan soal siapa yang benar-benar mengerjakan produk ini.
          </p>

          <div className={styles.founderCard}>
            <div className={styles.founderAvatar}>W</div>
            <div>
              <h4>Tim di Balik Medicalsia</h4>
              <p>
                Dikembangkan oleh developer full-stack yang fokus membangun software operasional untuk bisnis
                kecil-menengah di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CtaBand title="Ingin ngobrol langsung?" ctaLabel="Hubungi Kami" ctaHref="/kontak">
        Kami senang mendengar cerita klinik Anda, apapun tahap yang sedang Anda pertimbangkan.
      </CtaBand>
    </>
  );
}

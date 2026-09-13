"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./ContactForm.module.scss";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim pesan");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung lewat email.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formCard}>
        <p className={styles.successMessage}>
          Terima kasih! Pesan Anda sudah kami terima. Tim kami akan menghubungi Anda secepatnya.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="nama">Nama</label>
            <input id="nama" name="nama" type="text" placeholder="Nama Anda" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="klinik">Nama Klinik</label>
            <input id="klinik" name="klinik" type="text" placeholder="Klinik Sehat Sentosa" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="hp">No. HP / WhatsApp</label>
            <input id="hp" name="hp" type="tel" placeholder="08xx-xxxx-xxxx" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="nama@email.com" required />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="sistem">Saat ini pakai sistem/aplikasi klinik apa?</label>
            <input id="sistem" name="sistem" type="text" placeholder="Opsional — misal: masih manual, atau nama sistem yang dipakai" />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="pesan">Pesan</label>
            <textarea id="pesan" name="pesan" placeholder="Ceritakan kebutuhan klinik Anda..." required />
          </div>
        </div>
        {status === "error" ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
        <Button type="submit" block disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className={styles.spinner} /> Mengirim...
            </>
          ) : (
            <>
              <Send size={16} /> Kirim &amp; Request Demo
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

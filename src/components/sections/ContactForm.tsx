"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./ContactForm.module.scss";

type Status = "idle" | "submitting" | "success" | "error";

type FieldName = "nama" | "klinik" | "hp" | "email" | "pesan";

type FieldErrors = Partial<Record<FieldName, string>>;

const PHONE_REGEX = /^[0-9+\-()\s]{9,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};

  const nama = String(formData.get("nama") ?? "").trim();
  const klinik = String(formData.get("klinik") ?? "").trim();
  const hp = String(formData.get("hp") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const pesan = String(formData.get("pesan") ?? "").trim();

  if (!nama) errors.nama = "Nama wajib diisi.";
  if (!klinik) errors.klinik = "Nama klinik wajib diisi.";

  if (!hp) {
    errors.hp = "No. HP/WhatsApp wajib diisi.";
  } else if (!PHONE_REGEX.test(hp)) {
    errors.hp = "Format no. HP tidak valid.";
  }

  if (!email) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!pesan) errors.pesan = "Pesan wajib diisi.";

  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(field: FieldName) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const errors = validate(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Gagal mengirim pesan");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : "Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung lewat email."
      );
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
      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from real visitors, bots tend to fill every input they find. */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={styles.formGrid}>
          <div className={`${styles.field} ${fieldErrors.nama ? styles.fieldError : ""}`}>
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              name="nama"
              type="text"
              placeholder="Nama Anda"
              aria-invalid={fieldErrors.nama ? "true" : undefined}
              onChange={() => clearFieldError("nama")}
            />
            {fieldErrors.nama ? <span className={styles.fieldErrorText}>{fieldErrors.nama}</span> : null}
          </div>
          <div className={`${styles.field} ${fieldErrors.klinik ? styles.fieldError : ""}`}>
            <label htmlFor="klinik">Nama Klinik</label>
            <input
              id="klinik"
              name="klinik"
              type="text"
              placeholder="Klinik Sehat Sentosa"
              aria-invalid={fieldErrors.klinik ? "true" : undefined}
              onChange={() => clearFieldError("klinik")}
            />
            {fieldErrors.klinik ? <span className={styles.fieldErrorText}>{fieldErrors.klinik}</span> : null}
          </div>
          <div className={`${styles.field} ${fieldErrors.hp ? styles.fieldError : ""}`}>
            <label htmlFor="hp">No. HP / WhatsApp</label>
            <input
              id="hp"
              name="hp"
              type="tel"
              placeholder="08xx-xxxx-xxxx"
              aria-invalid={fieldErrors.hp ? "true" : undefined}
              onChange={() => clearFieldError("hp")}
            />
            {fieldErrors.hp ? <span className={styles.fieldErrorText}>{fieldErrors.hp}</span> : null}
          </div>
          <div className={`${styles.field} ${fieldErrors.email ? styles.fieldError : ""}`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="nama@email.com"
              aria-invalid={fieldErrors.email ? "true" : undefined}
              onChange={() => clearFieldError("email")}
            />
            {fieldErrors.email ? <span className={styles.fieldErrorText}>{fieldErrors.email}</span> : null}
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="sistem">Saat ini pakai sistem/aplikasi klinik apa?</label>
            <input id="sistem" name="sistem" type="text" placeholder="Opsional — misal: masih manual, atau nama sistem yang dipakai" />
          </div>
          <div className={`${styles.field} ${styles.full} ${fieldErrors.pesan ? styles.fieldError : ""}`}>
            <label htmlFor="pesan">Pesan</label>
            <textarea
              id="pesan"
              name="pesan"
              placeholder="Ceritakan kebutuhan klinik Anda..."
              aria-invalid={fieldErrors.pesan ? "true" : undefined}
              onChange={() => clearFieldError("pesan")}
            />
            {fieldErrors.pesan ? <span className={styles.fieldErrorText}>{fieldErrors.pesan}</span> : null}
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

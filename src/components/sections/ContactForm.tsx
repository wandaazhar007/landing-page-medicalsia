"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./ContactForm.module.scss";

type Status = "idle" | "submitting" | "success" | "error";

type FieldName = "nama" | "klinik" | "hp" | "email" | "sistem" | "pesan";

type FieldErrors = Partial<Record<FieldName, string>>;

const STORAGE_KEY = "medicalsia:contact-form";

const INITIAL_VALUES: Record<FieldName, string> = {
  nama: "",
  klinik: "",
  hp: "",
  email: "",
  sistem: "",
  pesan: "",
};

const PHONE_REGEX = /^[0-9+\-()\s]{9,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function loadStoredValues(): Record<FieldName, string> {
  const values = { ...INITIAL_VALUES };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return values;
    const parsed = JSON.parse(raw);
    for (const field of Object.keys(INITIAL_VALUES) as FieldName[]) {
      if (typeof parsed[field] === "string") values[field] = parsed[field];
    }
  } catch {
    // Corrupted or inaccessible storage (private browsing, quota, etc.) — ignore.
  }
  return values;
}

function validate(values: Record<FieldName, string>): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.nama.trim()) errors.nama = "Nama wajib diisi.";
  if (!values.klinik.trim()) errors.klinik = "Nama klinik wajib diisi.";

  if (!values.hp.trim()) {
    errors.hp = "No. HP/WhatsApp wajib diisi.";
  } else if (!PHONE_REGEX.test(values.hp.trim())) {
    errors.hp = "Format no. HP tidak valid.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Format email tidak valid.";
  }

  if (!values.pesan.trim()) errors.pesan = "Pesan wajib diisi.";

  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState<Record<FieldName, string>>(INITIAL_VALUES);
  const websiteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValues(loadStoredValues());
  }, []);

  function updateField(field: FieldName, value: string) {
    setValues((prev) => {
      const next = { ...prev, [field]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore — persistence is a convenience, not a requirement.
      }
      return next;
    });
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleFieldChange(field: FieldName) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateField(field, event.target.value);
  }

  function clearStoredValues() {
    setValues(INITIAL_VALUES);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore.
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const errors = validate(values);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    const payload = { ...values, website: websiteRef.current?.value ?? "" };

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
      clearStoredValues();
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
        <div className={styles.success}>
          <CheckCircle size={40} className={styles.successIcon} />
          <h3 className={styles.successTitle}>Request demo berhasil terkirim!</h3>
          <p className={styles.successMessage}>
            Terima kasih, permintaan Anda sudah kami terima dan akan segera diproses. Tim kami akan menghubungi Anda
            secepatnya.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from real visitors, bots tend to fill every input they find. */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" ref={websiteRef} />
        </div>

        <div className={styles.formGrid}>
          <div className={`${styles.field} ${fieldErrors.nama ? styles.fieldError : ""}`}>
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              name="nama"
              type="text"
              placeholder="Nama Anda"
              value={values.nama}
              aria-invalid={fieldErrors.nama ? "true" : undefined}
              onChange={handleFieldChange("nama")}
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
              value={values.klinik}
              aria-invalid={fieldErrors.klinik ? "true" : undefined}
              onChange={handleFieldChange("klinik")}
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
              value={values.hp}
              aria-invalid={fieldErrors.hp ? "true" : undefined}
              onChange={handleFieldChange("hp")}
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
              value={values.email}
              aria-invalid={fieldErrors.email ? "true" : undefined}
              onChange={handleFieldChange("email")}
            />
            {fieldErrors.email ? <span className={styles.fieldErrorText}>{fieldErrors.email}</span> : null}
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="sistem">Saat ini pakai sistem/aplikasi klinik apa?</label>
            <input
              id="sistem"
              name="sistem"
              type="text"
              placeholder="Opsional — misal: masih manual, atau nama sistem yang dipakai"
              value={values.sistem}
              onChange={handleFieldChange("sistem")}
            />
          </div>
          <div className={`${styles.field} ${styles.full} ${fieldErrors.pesan ? styles.fieldError : ""}`}>
            <label htmlFor="pesan">Pesan</label>
            <textarea
              id="pesan"
              name="pesan"
              placeholder="Ceritakan kebutuhan klinik Anda..."
              value={values.pesan}
              aria-invalid={fieldErrors.pesan ? "true" : undefined}
              onChange={handleFieldChange("pesan")}
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

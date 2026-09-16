import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  nama?: string;
  klinik?: string;
  hp?: string;
  email?: string;
  sistem?: string;
  pesan?: string;
  // Honeypot field — real visitors never see or fill this input.
  website?: string;
};

const MAX_LENGTH = {
  nama: 100,
  klinik: 150,
  hp: 20,
  email: 200,
  sistem: 200,
  pesan: 3000,
} as const;

const SINGLE_LINE_FIELDS = ["nama", "klinik", "hp", "email", "sistem"] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-()\s]{9,20}$/;

// In-memory sliding-window limiter. Good enough for a single PM2 process;
// not meant to survive multi-instance/horizontal scaling.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function validate(body: ContactPayload): string | null {
  const { nama, klinik, hp, email, sistem, pesan } = body;

  if (!nama?.trim() || !klinik?.trim() || !hp?.trim() || !email?.trim() || !pesan?.trim()) {
    return "Field wajib belum lengkap.";
  }

  for (const field of SINGLE_LINE_FIELDS) {
    const value = body[field];
    if (value && /[\r\n]/.test(value)) {
      return "Input tidak valid.";
    }
  }

  for (const [field, max] of Object.entries(MAX_LENGTH)) {
    const value = body[field as keyof typeof MAX_LENGTH];
    if (value && value.length > max) {
      return `${field} terlalu panjang.`;
    }
  }

  if (!EMAIL_REGEX.test(email)) {
    return "Format email tidak valid.";
  }

  if (!PHONE_REGEX.test(hp)) {
    return "Format no. HP tidak valid.";
  }

  if (sistem && /[\r\n]/.test(sistem)) {
    return "Input tidak valid.";
  }

  return null;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Terlalu banyak permintaan. Coba lagi beberapa menit lagi." }, { status: 429 });
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Payload tidak valid." }, { status: 400 });
  }

  // Bot filled the honeypot field — pretend success without sending anything.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const nama = body.nama!.trim();
  const klinik = body.klinik!.trim();
  const hp = body.hp!.trim();
  const email = body.email!.trim();
  const pesan = body.pesan!.trim();
  const sistem = body.sistem?.trim();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_FORM_EMAIL_TO || "cs@medicalsia.com",
      replyTo: email,
      subject: `Request Demo — ${klinik}`.slice(0, 200),
      text: [
        `Nama: ${nama}`,
        `Nama Klinik: ${klinik}`,
        `No. HP/WhatsApp: ${hp}`,
        `Email: ${email}`,
        `Sistem/aplikasi klinik saat ini: ${sistem || "-"}`,
        "",
        "Pesan:",
        pesan,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Gagal mengirim email form kontak:", error);
    return NextResponse.json({ error: "Gagal mengirim email." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  nama?: string;
  klinik?: string;
  hp?: string;
  email?: string;
  sistem?: string;
  pesan?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { nama, klinik, hp, email, sistem, pesan } = body;

  if (!nama || !klinik || !hp || !email || !pesan) {
    return NextResponse.json({ error: "Field wajib belum lengkap." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
  }

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
      to: process.env.CONTACT_FORM_EMAIL_TO,
      replyTo: email,
      subject: `Request Demo — ${klinik}`,
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

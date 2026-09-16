import { BRAND_COLORS, escapeHtml, nl2br, renderEmailShell } from "./template";

type ContactLead = {
  nama: string;
  klinik: string;
  hp: string;
  email: string;
  sistem?: string;
  pesan: string;
};

function summaryRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0; width:170px; color:${BRAND_COLORS.textMuted}; font-size:14px; vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0; color:${BRAND_COLORS.ink}; font-size:14px; vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

export function buildInternalNotificationEmail(lead: ContactLead) {
  const subject = `Request Demo — ${lead.klinik}`.slice(0, 200);

  const text = [
    "Ada request demo baru masuk dari website.",
    "",
    `Nama: ${lead.nama}`,
    `Nama Klinik: ${lead.klinik}`,
    `No. HP/WhatsApp: ${lead.hp}`,
    `Email: ${lead.email}`,
    `Sistem/aplikasi klinik saat ini: ${lead.sistem || "-"}`,
    "",
    "Pesan:",
    lead.pesan,
  ].join("\n");

  const bodyHtml = `
    <p style="margin:0 0 20px; font-size:18px; font-weight:700; color:${BRAND_COLORS.ink};">Request demo baru masuk 🔔</p>
    <p style="margin:0 0 24px; color:${BRAND_COLORS.textMuted};">Ada calon klinik yang mengisi form request demo di website. Detailnya:</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BRAND_COLORS.border}; border-bottom:1px solid ${BRAND_COLORS.border};">
      ${summaryRow("Nama", lead.nama)}
      ${summaryRow("Nama Klinik", lead.klinik)}
      ${summaryRow("No. HP/WhatsApp", lead.hp)}
      ${summaryRow("Email", lead.email)}
      ${summaryRow("Sistem saat ini", lead.sistem || "-")}
    </table>
    <p style="margin:24px 0 8px; font-size:14px; font-weight:700; color:${BRAND_COLORS.ink};">Pesan:</p>
    <p style="margin:0; padding:16px; background:${BRAND_COLORS.bg}; border-radius:8px; color:${BRAND_COLORS.ink}; font-size:14px; line-height:1.6;">
      ${nl2br(lead.pesan)}
    </p>
  `;

  return { subject, text, html: renderEmailShell({ previewText: `Request demo baru dari ${lead.klinik}`, bodyHtml }) };
}

export function buildUserConfirmationEmail(lead: ContactLead) {
  const subject = "Request Demo Anda sudah kami terima — Medicalsia";

  const text = [
    `Halo ${lead.nama},`,
    "",
    `Terima kasih sudah mengisi form request demo Medicalsia untuk ${lead.klinik}. Permintaan Anda sudah kami terima dan akan segera diproses — tim kami akan menghubungi Anda secepatnya lewat email atau WhatsApp ke nomor ${lead.hp}.`,
    "",
    "Ringkasan yang Anda kirim:",
    `- Nama Klinik: ${lead.klinik}`,
    `- Sistem/aplikasi klinik saat ini: ${lead.sistem || "-"}`,
    `- Pesan: ${lead.pesan}`,
    "",
    "Kalau ada pertanyaan lain sebelum kami hubungi, balas email ini langsung.",
    "",
    "Salam,",
    "Tim Medicalsia",
  ].join("\n");

  const bodyHtml = `
    <p style="margin:0 0 20px; font-size:18px; font-weight:700; color:${BRAND_COLORS.ink};">Halo ${escapeHtml(lead.nama)}, 👋</p>
    <p style="margin:0 0 16px;">
      Terima kasih sudah mengisi form request demo Medicalsia untuk <strong>${escapeHtml(lead.klinik)}</strong>.
      Permintaan Anda sudah kami terima dan <strong>akan segera diproses</strong> — tim kami akan menghubungi Anda
      secepatnya lewat email ini atau WhatsApp ke nomor <strong>${escapeHtml(lead.hp)}</strong>.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0; border-top:1px solid ${BRAND_COLORS.border}; border-bottom:1px solid ${BRAND_COLORS.border};">
      ${summaryRow("Nama Klinik", lead.klinik)}
      ${summaryRow("Sistem saat ini", lead.sistem || "-")}
    </table>
    <p style="margin:0 0 4px; font-size:14px; font-weight:700; color:${BRAND_COLORS.ink};">Pesan Anda:</p>
    <p style="margin:0 0 24px; padding:16px; background:${BRAND_COLORS.bg}; border-radius:8px; color:${BRAND_COLORS.ink}; font-size:14px; line-height:1.6;">
      ${nl2br(lead.pesan)}
    </p>
    <p style="margin:0 0 8px;">Kalau ada pertanyaan lain sebelum kami hubungi, balas email ini langsung — kami baca semuanya.</p>
    <p style="margin:24px 0 0;">Salam,<br />Tim Medicalsia</p>
  `;

  return {
    subject,
    text,
    html: renderEmailShell({ previewText: "Request demo Anda sudah kami terima dan akan segera diproses.", bodyHtml }),
  };
}

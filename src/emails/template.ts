// Shared HTML shell for transactional emails (contact form notification + confirmation).
// Table-based layout with inline styles — the only markup pattern that renders
// consistently across Gmail, Apple Mail, and Outlook's Word-based engine.

const BRAND = {
  primary: "#1E40AF",
  accent: "#3B82F6",
  ink: "#0E1B3D",
  textMuted: "#5B647A",
  border: "#E4E7F0",
  bg: "#F7F8FC",
};

export const LOGO_CID = "medicalsia-logo";

type EmailShellOptions = {
  previewText: string;
  bodyHtml: string;
};

export function renderEmailShell({ previewText, bodyHtml }: EmailShellOptions): string {
  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Medicalsia</title>
  </head>
  <body style="margin:0; padding:0; background:${BRAND.bg}; font-family:Arial, Helvetica, sans-serif;">
    <span style="display:none; font-size:1px; color:${BRAND.bg}; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
      ${previewText}
    </span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid ${BRAND.border};">
            <tr>
              <td style="padding:28px 40px; border-bottom:1px solid ${BRAND.border};">
                <img src="cid:${LOGO_CID}" alt="Medicalsia" width="140" height="32" style="display:block; border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding:36px 40px; color:${BRAND.ink}; font-size:15px; line-height:1.65;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px; background:${BRAND.bg}; border-top:1px solid ${BRAND.border};">
                <p style="margin:0 0 4px; font-size:13px; color:${BRAND.textMuted};">
                  Medicalsia — Aplikasi manajemen klinik modern untuk Indonesia.
                </p>
                <p style="margin:0; font-size:13px; color:${BRAND.textMuted};">
                  © ${new Date().getFullYear()} Medicalsia ·
                  <a href="https://medicalsia.com" style="color:${BRAND.textMuted};">medicalsia.com</a> ·
                  <a href="mailto:cs@medicalsia.com" style="color:${BRAND.textMuted};">cs@medicalsia.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function nl2br(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

export const BRAND_COLORS = BRAND;

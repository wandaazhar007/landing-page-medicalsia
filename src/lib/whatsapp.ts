// Server-only — reads WHATSAPP_NUMBER (not NEXT_PUBLIC_*) so the raw number
// never ships in the client bundle. Callers get back a ready-to-use wa.me link.

export const WHATSAPP_DEFAULT_MESSAGE = "Halo Medicalsia, saya ingin tanya-tanya soal aplikasi manajemen klinik ini.";

export function getWhatsappHref(message: string = WHATSAPP_DEFAULT_MESSAGE): string | undefined {
  const number = process.env.WHATSAPP_NUMBER;
  if (!number) return undefined;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

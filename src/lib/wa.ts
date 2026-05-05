const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

// Always use full international format: 91XXXXXXXXXX
export const WA_NUMBER = raw.startsWith("91") ? raw : `91${raw}`;

/**
 * Build a wa.me URL with the correct number and optional pre-message.
 * Pass raw (un-encoded) text — this function handles encodeURIComponent.
 */
export function waUrl(text?: string): string {
  const base = `https://wa.me/${WA_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

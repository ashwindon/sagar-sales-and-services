// ============================================================================
// SITE CONFIG — the ONLY file the owner needs to edit.
//
// HOW TO CHANGE THE WHATSAPP NUMBER
// ---------------------------------
// 1. Replace WHATSAPP_NUMBER below with the real number, international format,
//    digits only (country code first, no "+", no spaces).
//    Example for India: '91XXXXXXXXXX' → e.g. '919812345678'
// 2. Replace WHATSAPP_GREETING with the message that should be pre-filled
//    when someone taps "Chat With Us on WhatsApp".
// 3. Placeholder contact details (phone display, address, email) are a few
//    lines below — swap them for the real details.
// Every WhatsApp button on the page reads from this file automatically.
// ============================================================================

export const BUSINESS_NAME = 'Sagar Sales and Services'
export const BUSINESS_TAGLINE = 'Solar energy and agricultural water solutions, all in one place.'

export const WHATSAPP_NUMBER = '91XXXXXXXXXX' // ← REPLACE with the real number (digits only)

export const WHATSAPP_GREETING =
  'Hello Sagar Sales and Services! I have a question about your solar and water products.'

// Placeholder contact details — REPLACE before going live.
export const CONTACT = {
  phoneDisplay: '+91 XX XXXX XXXX',
  address: 'Shop address placeholder, Main Road, City, State — 000000',
  email: 'hello@example.com',
}

// Builds the wa.me link with the prefilled greeting. Used by every CTA.
export function whatsappLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`
}

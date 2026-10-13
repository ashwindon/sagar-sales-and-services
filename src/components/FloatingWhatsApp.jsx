import { whatsappLink } from '../config'
import { WhatsAppIcon } from './Navbar'

// Floating WhatsApp button, fixed bottom-right, shown on mobile only (the
// nav pill + hero CTA already carry the action on desktop). 56px round —
// comfortably above the 44px minimum tap target.
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass-lg transition-transform duration-200 active:scale-95 lg:hidden cursor-pointer"
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}

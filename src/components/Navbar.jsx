import { useEffect, useRef, useState } from 'react'
import { BUSINESS_NAME, whatsappLink } from '../config'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact' },
]

// Floating glass navigation bar: wordmark left, anchor links centre,
// white WhatsApp pill right. Collapses to a hamburger + glass panel on mobile.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape; return focus to the toggle button.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:top-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-16 max-w-shell items-center justify-between rounded-full px-4 transition-shadow duration-200 sm:px-6 ${
          scrolled ? 'shadow-glass-lg' : 'shadow-glass'
        } glass-nav`}
      >
        {/* Wordmark: sun (solar) + droplet (water) mark */}
        <a href="#home" className="flex min-h-[44px] items-center gap-2.5" aria-label={`${BUSINESS_NAME} — back to top`}>
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky to-brand-leaf">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="3.6" fill="#fff" />
              <g stroke="#fff" strokeWidth="1.4" strokeLinecap="round">
                <path d="M10 2.4v1.4M10 16.2v1.4M2.4 10h1.4M16.2 10h1.4M4.6 4.6l1 1M14.4 14.4l1 1M4.6 15.4l1-1M14.4 5.6l1-1" />
              </g>
            </svg>
          </span>
          <span className="text-[15px] font-extrabold leading-tight text-brand-dusk sm:text-base">
            Sagar <span className="font-extrabold text-brand-deep">Sales and Services</span>
          </span>
        </a>

        {/* Desktop anchor links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2.5 text-sm font-semibold text-brand-dusk transition-colors duration-200 hover:bg-white/60 hover:text-brand-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Desktop WhatsApp pill */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-brand-deep shadow-glass transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex cursor-pointer"
          >
            <WhatsAppIcon className="h-4 w-4 text-brand-leaf" aria-hidden="true" />
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-brand-dusk transition-colors hover:bg-white/60 md:hidden cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile glass dropdown panel */}
      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-shell rounded-3xl p-2 glass md:hidden"
          role="group"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center rounded-2xl px-4 text-[15px] font-semibold text-brand-dusk transition-colors hover:bg-white/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 flex min-h-[48px] items-center gap-2 rounded-2xl bg-white px-4 text-[15px] font-bold text-brand-deep shadow-glass cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 text-brand-leaf" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export function WhatsAppIcon({ className = '', ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18a8.1 8.1 0 0 1-4.1-1.1l-.3-.18-3.1.88.83-3.02-.2-.31A8.07 8.07 0 1 1 12.04 20Zm4.44-6.03c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.94-1.2 7.3 7.3 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.5.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.1 3.64.58.25 1.02.4 1.37.51.58.19 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

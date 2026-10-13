import { whatsappLink } from '../config'

// Primary (and only) call to action: "Chat With Us on WhatsApp".
// White pill with dark text (AA contrast over glass and photography),
// small dark circular arrow icon on the right.
export default function CtaButton({ className = '' }) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat With Us on WhatsApp (opens in a new tab)"
      className={
        'group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 ' +
        'text-base font-bold text-brand-dusk shadow-glass transition-transform duration-200 ' +
        'hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ' +
        className
      }
    >
      Chat With Us on WhatsApp
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dusk text-white transition-transform duration-200 group-hover:translate-x-1"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 8h11M9 3.5 13.5 8 9 12.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}

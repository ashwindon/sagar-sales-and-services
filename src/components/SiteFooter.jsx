import SmartImage from './SmartImage'
import CtaButton from './CtaButton'
import { BUSINESS_NAME, CONTACT, whatsappLink } from '../config'
import { WhatsAppIcon } from './Navbar'

// ============================================================================
// Footer — showpiece, rebuilt around how footer.jpg was actually shot:
// sunflowers fill the LOWEST band of the frame, open sky above it. So the
// scene anchors to the BOTTOM of the section (scene strip) while the upper
// part stays a clean deep-blue sky gradient for readable white text.
//
// Structure, top to bottom:
//   1. Deep-blue sky zone: closing headline + WhatsApp CTA (AA contrast)
//   2. Readable frosted panel: brand / quick links / contact columns
//   3. Sunflower scene strip: the photo band, object-position center bottom
//   4. Copyright line on a dark scrim
//
// The footer image is decorative: alt="", no caption, never described as
// showing the business's products.
// ==========================================================================/
const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
]

const FOOTER_SIZES = '100vw'

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative isolate">
      {/* ── 1. Sky zone: headline + CTA ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-brand-dusk via-brand-deep to-brand-deep"
      />
      <div className="mx-auto w-full max-w-shell px-5 pb-2 pt-24 text-center sm:px-10 sm:pt-28">
        <div data-reveal className="mx-auto max-w-2xl">
          {/* Sunflower-yellow accent — footer only, per design brief */}
          <p className="text-sm font-bold uppercase tracking-widest text-brand-sun">Get in touch</p>
          <h2 className="font-display mt-3 text-4xl leading-[1.08] text-white sm:text-5xl">
            Ready to switch to solar or sort your water needs?
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton />
          </div>
        </div>
      </div>

      {/* ── 2. Glass panel: week-readable columns over solid sky colour ──── */}
      <div className="mx-auto w-full max-w-shell px-4 pt-12 sm:px-10 sm:pt-14">
        <div data-reveal className="rounded-3xl glass p-7 sm:p-10 lg:rounded-[2rem]">
          <span aria-hidden="true" className="mb-8 block h-1 w-24 rounded-full bg-brand-sun" />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr,0.8fr,1fr]">
            {/* Brand column */}
            <div>
              <p className="flex items-center gap-2.5 text-lg font-extrabold text-white">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="3.6" fill="#F5C51D" />
                    <g stroke="#F5C51D" strokeWidth="1.4" strokeLinecap="round">
                      <path d="M10 2.4v1.4M10 16.2v1.4M2.4 10h1.4M16.2 10h1.4M4.6 4.6l1 1M14.4 14.4l1 1M4.6 15.4l1-1M14.4 5.6l1-1" />
                    </g>
                  </svg>
                </span>
                Sagar <span className="font-extrabold">Sales and Services</span>
              </p>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white">
                {BUSINESS_NAME} is where you find solar energy equipment and
                agricultural water solutions — heaters, panels, pumps, motors
                and pipes — with installation support for home and farm.
              </p>
            </div>

            {/* Quick links column */}
            <nav aria-label="Footer">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-sun">Quick links</h3>
              <ul className="mt-4 space-y-1">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="flex min-h-[44px] items-center rounded-xl px-2 text-[15px] font-semibold text-white transition-colors hover:bg-white/15 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact column — placeholder details live in src/config.js */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-sun">Contact</h3>
              <ul className="mt-4 space-y-3 text-[15px] font-medium text-white">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{CONTACT.phoneDisplay}</span>
                </li>
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{CONTACT.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT.email}`} className="underline-offset-4 hover:underline">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-brand-deep shadow-glass transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 text-brand-leaf" aria-hidden="true" />
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Sunflower scene strip: the photo band, bottom-anchored ─────── */}
      {/* IMG SLOT: public/images/footer-*.webp|jpg (from images/footer.jpg).
          Sunflower field — decorative only. The image element keeps the photo's
          own framing (sky above, flowers below) inside a fixed-height strip,
          so the flowers sit at the bottom of the page and read as a scene
          instead of being smeared behind every footer row. */}
      <div className="relative mt-12 h-[40vh] min-h-[280px] max-h-[500px] overflow-hidden sm:h-[44vh] lg:mt-16">
        <div className="parallax-bg absolute -inset-y-[8%] inset-x-0">
          <SmartImage
            base="/images/footer"
            widths={[1280, 1920]}
            jpgWidth={1920}
            width={1920}
            height={1280}
            sizes={FOOTER_SIZES}
            decorative
            className="h-full w-full"
            imgClassName="[object-position:center_78%]" // flowers at the bottom, horizon + a little sky above them
          />
        </div>
        {/* Top feather from sky colour into the photo, and a bottom scrim so
            the copyright line below stays readable (WCAG AA) */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-deep to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#082449] via-[#082449]/70 to-transparent" />
        {/* Copyright line */}
        <p className="absolute inset-x-0 bottom-4 mx-auto max-w-shell px-6 text-center text-sm font-medium text-white sm:px-10">
          © 2026 Sagar Sales and Services
        </p>
      </div>
    </footer>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6.6 3h2.2l1.7 4.3-2 1.5a12 12 0 0 0 6.7 6.7l1.5-2L21 15.2v2.2A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6 2.6 2.6 0 0 1 6.6 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}
function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

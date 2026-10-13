// "Why Choose Us" — practical benefits phrased as general offerings, with no
// boasts or unsupported claims. Soft blue→green gradient background with
// glass cards on top keeps the airy, photographic feel of the rest of the page.
const BENEFITS = [
  {
    title: 'One place for solar and water needs',
    body: 'Solar panels and water heaters alongside pumps, motors and borewell pipes — so a farm or home can be fitted out together, not from four different shops.',
    icon: (
      // Combined sun + droplet glyph
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 2.6v1.2M9 14.2v.2M2.6 9h1.2M15.4 9h-.2M4.5 4.5l.9.9M13.5 13.5l-.9-.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 12.5c1.5 1.7 2.6 3.1 2.6 4.5a2.6 2.6 0 1 1-5.2 0c0-1.4 1.1-2.8 2.6-4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Installation support',
    body: 'Help with choosing and setting up the equipment you buy from us — placement, wiring guidance for panels, and pump and pipe fitting.',
    icon: (
      // Wrench
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.7 6.3a4 4 0 0 0-5.4 5.3L4 16.9a2 2 0 0 0 2.8 2.8l5.3-5.3a4 4 0 0 0 5.3-5.4l-2.1 2.1-2.2-.5-.5-2.2 2.1-2.1Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Products for farm and home use',
    body: 'Equipment selected to cover both settings — from household water heating to field-scale pumping and irrigation pipe.',
    icon: (
      // House
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 11.5 12 4l8 7.5M6 10v9h12v-9M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Answers before you buy',
    body: 'Questions about sizing, pricing or what fits your borewell? Message us on WhatsApp and we will help you figure it out.',
    icon: (
      // Chat bubble
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-4 4V6.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.5 10h7M8.5 13h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-24">
      {/* Soft blue→green gradient background (glass cards sit on top) */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100" />
      <div className="relative mx-auto max-w-shell px-6 sm:px-10">
        <div data-reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-leaf">Why choose us</p>
          <h2 className="font-display mt-3 text-4xl leading-[1.08] text-brand-dusk sm:text-5xl">
            Practical reasons customers come to us
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {BENEFITS.map((b) => (
            <li
              key={b.title}
              data-reveal
              className="rounded-3xl p-6 glass cursor-default sm:p-7 transition-shadow duration-200 hover:shadow-glass-lg"
            >
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-brand-deep">
                {b.icon}
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-brand-dusk">{b.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-brand-dusk/85">{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

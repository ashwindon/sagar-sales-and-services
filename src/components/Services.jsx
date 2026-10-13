import SmartImage from './SmartImage'

// ============================================================================
// Services — alternating image/text rows instead of a card grid.
// The photo sits on one side, the service copy on the other, and the sides
// swap with every row so each service gets its own moment. On phones the row
// stacks (photo on top, text underneath).
//
// Copy stays deliberately general — no invented numbers, brands or claims.
//
// IMG SLOTS (public/images/, generated from the images/ originals):
//   solar-panels-*        narrow crop: panels only (worker + third-party logo removed)
//   solar-water-heater-*  rooftop solar water heaters
//   pumps-motors-*        pump and motor units
//   borewell-pipes-*      pipe coils
//   installation.jpg      OPTIONAL photo for the installation row — drop it into
//                         images/, run `npm run optimize:images`, then swap the
//                         icon panel below for a SmartImage like the others.
// ==========================================================================/

const ROW_IMG_SIZES = '(max-width: 767px) 92vw, 46vw'

const SERVICES = [
  {
    id: 'panels',
    number: '01',
    kicker: 'Generate your own power',
    title: 'Solar Panels',
    body: 'Daylight becomes electricity for the house and the pump set — quietly, month after month, from rooftop or ground-mounted arrays.',
    facts: [
      'For household appliances and farm equipment',
      'Sized to how much power you actually use',
      'Mounting and wiring guidance from us',
    ],
    image: {
      base: '/images/solar-panels',
      widths: [640, 960],
      jpgWidth: 960,
      width: 960,
      height: 720,
      className: 'aspect-[4/3] w-full', // crop is generated: panels only, no worker or logo
    },
    alt: 'Rows of dark blue solar panels on a red-tiled rooftop',
  },
  {
    id: 'water-heaters',
    number: '02',
    kicker: 'Hot water, no running cost',
    title: 'Solar Water Heaters',
    body: 'Sun-heated water for morning baths, wash and kitchen use — the geyser does the backup work, not the daily work.',
    facts: [
      'Runs on sunlight — nothing to pay each time you use it',
      'Suited to daily demand at home or on the farm',
      'Guidance on tank size for your household or workforce',
    ],
    image: {
      base: '/images/solar-water-heater',
      widths: [640, 960],
      jpgWidth: 960,
      width: 960,
      height: 720,
      className: 'aspect-[4/3] w-full',
    },
    alt: 'Workers on a rooftop beside glass-tube solar water heater panels',
  },
  {
    id: 'installation',
    number: '03',
    kicker: 'Support after the sale',
    title: 'Installation and Related Services',
    body: 'The equipment only earns its keep once it is set up right. We guide the selection and the installation for what you buy here.',
    facts: [
      'Site guidance before you buy',
      'Setup support for panels, pumps and pipe lines',
      'Follow-up help for adjustments later',
    ],
    image: null, // no photo — glass icon panel; see IMG SLOTS note re installation.jpg
    alt: '',
  },
  {
    id: 'pumps',
    number: '04',
    kicker: 'Water where the crop is',
    title: 'Pumps and Motors',
    body: 'Pumping sets matched to your borewell, field size and irrigation plan — so the water reaches where the crop needs it.',
    facts: [
      'Matched to your borewell and field size',
      'Advice on head and discharge before you buy',
      'Pump and motor options for home and farm',
    ],
    image: {
      base: '/images/pumps-motors',
      widths: [640, 960],
      jpgWidth: 960,
      width: 960,
      height: 720,
      className: 'aspect-[4/3] w-full',
    },
    alt: 'Pump and motor unit lifting water beside a storage tank',
  },
  {
    id: 'pipes',
    number: '05',
    kicker: 'From source to field',
    title: 'Borewell Pipes',
    body: 'Pipes and fittings that carry water the whole way — down the borewell, across the field, season after season.',
    facts: [
      'Casing and delivery lines for borewells',
      'Sizes to suit different depths and distances',
      'Fittings sorted in the same place, one visit',
    ],
    image: {
      base: '/images/borewell-pipes',
      widths: [640, 960],
      jpgWidth: 960,
      width: 960,
      height: 720,
      className: 'aspect-[4/3] w-full',
    },
    alt: 'Coiled black borewell pipes stacked in a yard',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-shell px-6 sm:px-10">
        {/* Section heading */}
        <div data-reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-leaf">What we offer</p>
          <h2 className="font-display mt-3 text-4xl leading-[1.08] text-brand-dusk sm:text-5xl">
            Solar energy and water equipment, under one roof
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From panels on your rooftop to pipes in your borewell — products
            selected for homes and farms, with help getting them installed.
          </p>
        </div>

        {/* Alternating rows */}
        <ul className="mt-8">
          {SERVICES.map((s, i) => {
            const imageRight = i % 2 === 1 // swap sides every row
            return (
              <li
                key={s.id}
                data-reveal
                className="grid items-center gap-6 py-10 md:grid-cols-2 md:gap-10 lg:gap-16"
              >
                {/* ── Image side ─────────────────────────────────────────── */}
                {s.image ? (
                  <div className={imageRight ? 'md:order-2' : 'md:order-1'}>
                    <div className="overflow-hidden rounded-3xl shadow-glass">
                      <SmartImage {...s.image} sizes={ROW_IMG_SIZES} alt={s.alt} />
                    </div>
                  </div>
                ) : (
                  // No-photo service: glass panel with an icon instead of an image.
                  // Swap in a SmartImage here if images/installation.jpg is added.
                  <div className={imageRight ? 'md:order-2' : 'md:order-1'}>
                    <div className="glass flex aspect-[4/3] w-full flex-col items-center justify-center gap-6 rounded-3xl bg-gradient-to-br from-sky-100 to-emerald-100 p-10 !bg-[linear-gradient(135deg,#E0F2FE,#D1FAE5)] text-center">
                      <span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-deep text-white shadow-glass">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M14.7 6.3a4 4 0 0 0-5.4 5.3L4 16.9a2 2 0 0 0 2.8 2.8l5.3-5.3a4 4 0 0 0 5.3-5.4l-2.1 2.1-2.2-.5-.5-2.2 2.1-2.1Z"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="max-w-xs text-[15px] font-medium leading-relaxed text-slate-600">
                        Help with siting, setup and follow-up — the quiet part
                        of every sale, and often the part that matters most.
                      </p>
                    </div>
                  </div>
                )}

                {/* ── Text side ──────────────────────────────────────────── */}
                <div className={imageRight ? 'md:order-1' : 'md:order-2'}>
                  <p className="flex items-baseline gap-4">
                    <span aria-hidden="true" className="font-display text-4xl text-brand-sky">
                      {s.number}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-leaf">
                      {s.kicker}
                    </span>
                  </p>
                  <h3 className="font-display mt-4 text-3xl leading-tight text-brand-dusk sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[17px] leading-relaxed text-slate-600">{s.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.facts.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg
                          aria-hidden="true"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="mt-0.5 shrink-0 text-brand-leaf"
                        >
                          <circle cx="9" cy="9" r="8" fill="currentColor" opacity="0.15" />
                          <path d="m5.5 9.5 2 2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[15px] font-medium text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

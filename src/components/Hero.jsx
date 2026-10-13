import SmartImage from './SmartImage'
import CtaButton from './CtaButton'

// Full-viewport hero. Background: hero.jpg — solar panels on green grass under
// a bright blue sky; the panels run centre→right, so on wide screens the
// gradient covers the open sky on the left and the panels stay vivid.
// Deep-blue gradient overlay (strongest left → transparent right) keeps the
// white headline at WCAG AA contrast; object-position keeps panels visible
// on phones (where the crop narrows).

const HERO_SIZES = '100vw'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* IMG SLOT: public/images/hero-*.webp|jpg — generated from images/hero.jpg.
          Swap files here to use your own hero photo (solar panels on grass
          under a bright sky reads best behind the left gradient). */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="parallax-bg absolute -inset-y-[6%] inset-x-0">
          <SmartImage
            base="/images/hero"
            widths={[1280, 1920, 2560]}
            jpgWidth={1920}
            width={1920}
            height={1280}
            sizes={HERO_SIZES}
            eager
            decorative
            className="h-full w-full"
            imgClassName="[object-position:62%_center]"
          />
        </div>
        {/* Deep-blue gradient: strongest on the left where the headline sits,
            fading right so the photo stays bright and the panels visible. */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dusk/[0.92] via-brand-deep/[0.55] to-brand-deep/[0]" />
        {/* Slight bottom smoke for the hand-off into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/10" />
      </div>

      {/* Left-aligned headline block. Max-width keeps the line length
          readable (60–75ch guidance) on very wide screens. */}
      <div className="relative mx-auto w-full max-w-shell px-6 pb-24 pt-32 sm:px-10 lg:pb-32 lg:pt-36">
        <div className="max-w-3xl">
          <p className="hero-reveal text-sm font-bold uppercase tracking-[0.18em] text-brand-sun">
            Solar and agricultural water solutions
          </p>
          <h1 className="hero-reveal font-display mt-4 text-[2.65rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Powering your home and farm with solar and water solutions
          </h1>
          <p className="hero-reveal mt-5 max-w-xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
            Solar water heaters, panels, pumps, motors and borewell pipes —
            with installation support for homes and farms.
          </p>
          <div className="hero-reveal mt-9">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  )
}

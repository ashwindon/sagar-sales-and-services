import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import SiteFooter from './components/SiteFooter'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  // Guard against StrictMode double-invocation running initMotion twice.
  const initedRef = useRef(false)

  // GSAP + Lenis are code-split: the page renders (and the hero photo
  // streams) first, animation tooling loads right after first paint.
  useEffect(() => {
    if (initedRef.current) return
    initedRef.current = true

    let motion = null
    let cancelled = false
    import('./lib/motion').then(({ initMotion }) => {
      if (cancelled) return
      motion = initMotion()
      motion.setHeroIntro() // no-op under reduced motion
    })

    return () => {
      cancelled = true
      motion?.destroy?.()
    }
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <SiteFooter />
      </main>
      <FloatingWhatsApp />
    </>
  )
}

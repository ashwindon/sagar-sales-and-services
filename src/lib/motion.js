// ============================================================================
// Motion: Lenis smooth scroll + GSAP/ScrollTrigger, all wrapped behind
// prefers-reduced-motion. Everything here is subtle by design — gentle
// reveals, slight background parallax — no scrollytelling, no pinning,
// no scrubbed story sequences.
// ==========================================================================/
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Fade-up reveal for [data-reveal] elements. Stagger via data-reveal-delay (seconds). */
function applyReveals() {
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay: parseFloat(el.dataset.revealDelay || 0),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })
}

/** Slow background parallax: image drifts a few % while its section scrolls past. */
function applyParallax(selector, yPercent = 10) {
  document.querySelectorAll(selector).forEach((el) => {
    gsap.to(el, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section, footer'),
        start: 'top top',
        end: 'bottom top',
        scrub: true, // subtle background drift only; content scrolls normally
      },
    })
  })
}

export function initMotion() {
  if (prefersReducedMotion()) {
    // Reduced motion: no Lenis, no tweens. Content is fully visible already
    // because gsap.from styles are never applied.
    return { destroy() {}, setHeroIntro() {} }
  }

  const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  const tickerFn = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(tickerFn)
  gsap.ticker.lagSmoothing(0)

  applyReveals()
  applyParallax('.parallax-bg', 9)

  // Anchor links route through Lenis so smooth scrolling keeps working.
  const onAnchorClick = (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href')
    if (id.length < 2) return
    const target = document.querySelector(id)
    if (!target) return
    e.preventDefault()
    lenis.scrollTo(target, { offset: -96 })
    history.replaceState(null, '', id)
  }
  document.addEventListener('click', onAnchorClick)

  return {
    destroy() {
      document.removeEventListener('click', onAnchorClick)
      gsap.ticker.remove(tickerFn)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    },
    // Hero text reveal, called after first paint from App.
    setHeroIntro() {
      gsap.from('.hero-reveal', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.15,
        ease: 'power3.out',
      })
    },
  }
}

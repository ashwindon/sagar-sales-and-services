/** @type {import('tailwindcss').Config} */
// Bubblegum palette lives in src/index.css as CSS variables; tokens below mirror
// them so Tailwind utilities stay consistent across the page.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep blue (overlays, headings on light, footer sky gradient)
          deep: '#0B3C8D',
          dusk: '#0A2E66',
          // Sky blue
          sky: '#38BDF8',
          air: '#0EA5E9',
          // Fresh green accents
          leaf: '#22C55E',
          // Sunflower yellow — footer ONLY, per design brief
          sun: '#F5C51D',
        },
        ink: '#0F2B52',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        // Editorial display voice: slightly narrower + shorter for large
        // headings (kept distinct from body so it doesn't read as template-y).
        display: ['"Manrope"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // 16–24px rounded cards, pill buttons use rounded-full
        card: '1.25rem',
        xl2: '1.5rem',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(11, 60, 141, 0.18)',
        'glass-lg': '0 16px 48px rgba(11, 60, 141, 0.22)',
      },
      maxWidth: {
        // Centered content container (~1200–1280px) for the desktop layout
        shell: '78rem',
      },
    },
  },
  plugins: [],
}

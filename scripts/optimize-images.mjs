// ============================================================================
// Image optimizer — run with: npm run optimize:images
//
// Reads the six originals from ./images/ and writes web-optimized variants to
// public/images/: WebP at several widths (for srcset) + one JPEG fallback per
// picture. Content is never altered — only resized and compressed.
// Originals in images/ are left untouched.
// ==========================================================================/
import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SRC = path.resolve('images')
const OUT = path.resolve('public/images')

// Pre-crops, applied before resizing (contents otherwise untouched).
// solar-panels.jpg shows a rooftop array with a worker in orange overalls and
// a third-party logo along the RIGHT edge; the brief requires that they never
// be visible, so we keep the left ~68% of the frame (the panels themselves).
// footer.jpg has a wind-turbine farm along its horizon; this is a solar and
// water business and turbines must not be shown, so we keep the lower part of
// the frame — sunflowers with a small band of field above them.
const PRE_CROP = {
  'solar-panels': { leftFraction: 0.68 }, // keep LEFT 68% — panels only
  footer: { topFraction: 0.42 }, // drop the top 42% (turbines + most of the sky)
}

async function loadPrepared(name) {
  const input = sharp(path.join(SRC, `${name}.jpg`))
  const crop = PRE_CROP[name]
  if (!crop) return input
  const meta = await input.metadata()
  let extract = { left: 0, top: 0, width: meta.width, height: meta.height }
  if (crop.leftFraction) {
    extract.width = Math.round(meta.width * crop.leftFraction)
  }
  if (crop.topFraction) {
    extract.top = Math.round(meta.height * crop.topFraction)
    extract.height = meta.height - extract.top
  }
  return input.extract(extract)
}

// base name → webp widths + jpg fallback width
const PLAN = {
  hero: { widths: [1280, 1920, 2560], jpg: 1920 },
  footer: { widths: [1280, 1920, 2560], jpg: 1920 },
  'solar-panels': { widths: [640, 960, 1440], jpg: 960 },
  'solar-water-heater': { widths: [640, 960, 1440], jpg: 960 },
  'pumps-motors': { widths: [640, 960, 1440], jpg: 960 },
  'borewell-pipes': { widths: [640, 960, 1440], jpg: 960 },
}

await mkdir(OUT, { recursive: true })

for (const [name, { widths, jpg }] of Object.entries(PLAN)) {
  await stat(path.join(SRC, `${name}.jpg`)) // throws a clear error if the original is missing
  const prepared = await loadPrepared(name)

  for (const w of widths) {
    await prepared
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(path.join(OUT, `${name}-${w}.webp`))
  }

  await prepared
    .clone()
    .resize({ width: jpg, withoutEnlargement: true })
    .jpeg({ quality: 70, mozjpeg: true })
    .toFile(path.join(OUT, `${name}-${jpg}.jpg`))

  console.log(`✓ ${name}: ${widths.length} webp + 1 jpg fallback`)
}

console.log(`\nDone. Optimized images in public/images/ (originals untouched in images/).`)

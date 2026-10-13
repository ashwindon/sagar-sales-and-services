// SmartImage — the one place image handling lives.
//
// - WebP srcset with explicit width/height (no layout shift) and a JPG fallback
//   `<img src>` for browsers without WebP.
// - `loading="lazy"` + `decoding="async"` for everything below the fold; pass
//   `eager` + `fetchPriority="high"` for the hero only.
// - Renders inside a gradient slot (.img-slot: sky→deep blue) so the layout
//   still looks intentional if a file is missing or slow.
// - `decorative` renders alt="" (the footer background uses this).
export default function SmartImage({
  base, // e.g. '/images/solar-panels' (no extension)
  widths, // webp widths, e.g. [640, 960]
  jpgWidth, // width of the JPG fallback file
  width, // intrinsic width/height for CLS, matching aspect; from image metadata
  height,
  sizes,
  alt,
  className = '',
  imgClassName = '',
  decorative = false,
  eager = false,
  style,
}) {
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')
  return (
    <div className={`img-slot overflow-hidden ${className}`} style={style}>
      <img
        src={`${base}-${jpgWidth}.jpg`}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        alt={decorative ? '' : alt}
        aria-hidden={decorative ? true : undefined}
        loading={eager ? 'eager' : 'lazy'}
        {...(eager ? { fetchpriority: 'high' } : { decoding: 'async' })}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}

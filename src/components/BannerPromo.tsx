const LINK = "https://www.tulipafragrancias.com.br/q?keywords=body"

const ASPECT = 2158 / 729

export default function BannerPromo() {
  return (
    <a
      href={LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver ofertas de body care na Tulipa Fragrâncias"
      className="group relative block w-full overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50"
    >
      <div className="relative w-full" style={{ aspectRatio: `${ASPECT}` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 via-transparent to-rose-50/20 sm:bg-none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banner-arabe.webp"
          alt="Ofertas de body care na Tulipa Fragrâncias"
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          draggable={false}
        />
      </div>
    </a>
  )
}
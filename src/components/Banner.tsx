"use client"

const ASPECT = 1920 / 650

const PHONE = {
  leftPct: 112 / 1920,
  topPct: 171 / 650,
  widthPct: 129 / 1920,
  heightPct: 277 / 650,
}

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="relative w-full" style={{ aspectRatio: `${ASPECT}` }}>
        <img
          src="/banner.png"
          alt="Banner Dona Tulipa"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />

        <div
          className="absolute overflow-hidden rounded-[22px]"
          style={{
            left: `${PHONE.leftPct * 100}%`,
            top: `${PHONE.topPct * 100}%`,
            width: `${PHONE.widthPct * 100}%`,
            height: `${PHONE.heightPct * 100}%`,
          }}
        >
          <iframe
            src="https://www.instagram.com/p/DZQvYEBx61E/embed"
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            allowFullScreen
            title="Saboaria Artesanal"
          />
        </div>
      </div>
    </div>
  )
}

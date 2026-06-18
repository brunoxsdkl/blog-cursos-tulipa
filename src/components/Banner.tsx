"use client"

import { useState, useEffect, useCallback } from "react"

const videos = [
  { id: "DZQvYEBx61E", titulo: "Saboaria Artesanal" },
  { id: "DZF1v4_PvKg", titulo: "Velas Artesanais" },
  { id: "DXkp25hDJdk", titulo: "Cosméticos & Perfumaria" },
]

const ASPECT = 1920 / 650

const PHONE = {
  leftPct: 112 / 1920,
  topPct: 171 / 650,
  widthPct: 129 / 1920,
  heightPct: 277 / 650,
}

export default function Banner() {
  const [current, setCurrent] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) setContainerWidth(node.clientWidth)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % videos.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="relative w-full" style={{ aspectRatio: `${ASPECT}` }}>
        <img
          src="/banner.png"
          alt="Banner Dona Tulipa"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />

        <div
          className="absolute overflow-hidden"
          style={{
            left: `${PHONE.leftPct * 100}%`,
            top: `${PHONE.topPct * 100}%`,
            width: `${PHONE.widthPct * 100}%`,
            height: `${PHONE.heightPct * 100}%`,
          }}
        >
          {videos.map((video, i) => (
            <div
              key={video.id}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            >
              <iframe
                src={`https://www.instagram.com/p/${video.id}/embed`}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allowFullScreen
                title={video.titulo}
              />
            </div>
          ))}
        </div>

        <div
          className="absolute flex gap-1"
          style={{
            left: `${PHONE.leftPct * 100}%`,
            top: `${(PHONE.topPct + PHONE.heightPct) * 100 + 0.5}%`,
            width: `${PHONE.widthPct * 100}%`,
          }}
        >
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-1 h-1 rounded-full transition-all ${
                i === current ? "bg-rose-400" : "bg-rose-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

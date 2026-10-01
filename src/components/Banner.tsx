"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react"

const ASPECT = 1920 / 650

const PROMO_LINK = "https://www.tulipafragrancias.com.br/q?keywords=body"

const TOTAL = 2

const SLIDE_MS = 6000

const PHONE = {
  leftPct: 112 / 1920,
  topPct: 171 / 650,
  widthPct: 129 / 1920,
  heightPct: 277 / 650,
}

export default function Banner() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const touchStart = useRef<number | null>(null)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [soundOn, setSoundOn] = useState(false)

  const goTo = useCallback((index: number) => {
    setCurrent(((index % TOTAL) + TOTAL) % TOTAL)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, SLIDE_MS)
    return () => clearInterval(timer)
  }, [next, paused])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setSoundOn(!videoRef.current.muted)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current
    touchStart.current = null
    if (start == null) return
    const end = e.changedTouches[0]?.clientX ?? start
    const delta = end - start
    if (Math.abs(delta) < 40) return
    if (delta < 0) next()
    else prev()
  }

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative w-full" style={{ aspectRatio: `${ASPECT}` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 via-transparent to-rose-50/20 sm:bg-none" />

        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src="/banner.webp"
            alt="Banner Dona Tulipa"
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
          />

          <div
            className="absolute overflow-hidden rounded-[22px] group"
            style={{
              left: `${PHONE.leftPct * 100}%`,
              top: `${PHONE.topPct * 100}%`,
              width: `${PHONE.widthPct * 100}%`,
              height: `${PHONE.heightPct * 100}%`,
            }}
          >
            <video
              ref={videoRef}
              src="/andreia.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            <button
              onClick={toggleSound}
              className="absolute bottom-1 right-1 p-1 rounded-full bg-black/50 text-white transition-opacity"
              title={soundOn ? "Desativar som" : "Ativar som"}
            >
              {soundOn ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
            </button>
          </div>
        </div>

        <a
          href={PROMO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver ofertas de body care na Tulipa Fragrâncias"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className={`absolute inset-0 block transition-opacity duration-1000 ease-in-out ${
            current === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src="/banner-arabe.webp"
            alt="Ofertas de body care na Tulipa Fragrâncias"
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-[1.02]"
            draggable={false}
          />
        </a>

        <button
          onClick={prev}
          aria-label="Banner anterior"
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center rounded-full bg-white/70 text-rose-700 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={next}
          aria-label="Próximo banner"
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center rounded-full bg-white/70 text-rose-700 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para o banner ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                current === i ? "w-6 bg-rose-600" : "w-2 bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
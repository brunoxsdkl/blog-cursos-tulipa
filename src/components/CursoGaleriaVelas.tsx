"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, Play, Heart } from "lucide-react"

const hero = {
  src: "/velas.mp4",
  tipo: "video" as const,
  legenda: "Curso de Velas Artesanais",
}

const verticais = [
  { src: "/velas-video-01.mp4", tipo: "video" as const, legenda: "Preparação dos materiais" },
  { src: "/velas-destaque.mp4", tipo: "video" as const, legenda: "Destaque do curso" },
]

const quadrados = [
  { src: "/velas-video-02.mp4", tipo: "video" as const, legenda: "Mistura das essências" },
  { src: "/velas-video-03.mp4", tipo: "video" as const, legenda: "Modelagem artesanal" },
  { src: "/velas-video-04.mp4", tipo: "video" as const, legenda: "Acabamento e decoração" },
  { src: "/velas-video-05.mp4", tipo: "video" as const, legenda: "Resultado final" },
]

const todos = [hero, ...verticais, ...quadrados]

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(true); return
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShow(true), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return [ref, show] as const
}

function Lightbox({ idx, onClose, onPrev, onNext }: {
  idx: number; onClose: () => void; onPrev: () => void; onNext: () => void
}) {
  const item = todos[idx]
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose} role="dialog" aria-modal="true" aria-label="Galeria">
      <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors z-10" aria-label="Fechar">
          <X className="h-6 w-6" />
        </button>
        <div className="rounded-xl overflow-hidden bg-black/10 shadow-2xl">
          <video src={item.src} className="w-full max-h-[75vh] bg-black" controls autoPlay playsInline />
        </div>
        <p className="text-white/75 text-sm text-center mt-3 font-light tracking-wide">{item.legenda}</p>
      </div>
      {todos.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white/30 transition-all" aria-label="Anterior">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white/30 transition-all" aria-label="Próximo">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {todos.map((_, i) => (
              <div key={i} className={`rounded-full transition-all ${i === idx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/[0.06] group-hover/card:bg-black/15 transition-colors duration-500 rounded-xl">
      <div className="w-10 h-10 rounded-full bg-white/85 backdrop-blur-sm shadow-lg flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110">
        <Play className="h-4.5 w-4.5 text-rose-500 ml-0.5" />
      </div>
    </div>
  )
}

function CardHero({ src, tipo, legenda, onClick }: {
  src: string; tipo: "img" | "video"; legenda: string; onClick: () => void
}) {
  const [ref, show] = useFadeIn(0)
  return (
    <div ref={ref}
      className="group/card cursor-pointer transition-all duration-600 ease-out"
      style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(16px)" }}
      onClick={onClick} role="button" tabIndex={0} aria-label={legenda}
      onKeyDown={(e) => { if (e.key === "Enter") onClick() }}>
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(244,63,94,0.1)] ring-1 ring-rose-300/30 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,63,94,0.16)] hover:ring-rose-300/50 hover:-translate-y-1">
        {tipo === "img" ? (
          <img src={src} alt={legenda} loading="lazy"
            className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover transition-transform duration-700 group-hover/card:scale-[1.02]"
            draggable={false} />
        ) : (
          <div className="relative">
            <video src={src}
              className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover"
              autoPlay muted loop playsInline preload="none" />
            <PlayOverlay />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <p className="text-white/90 text-sm sm:text-base font-light tracking-wide drop-shadow-lg">{legenda}</p>
        </div>
      </div>
    </div>
  )
}

function CardVertical({ src, tipo, legenda, index, onClick }: {
  src: string; tipo: "img" | "video"; legenda: string; index: number; onClick: () => void
}) {
  const [ref, show] = useFadeIn(index * 70)
  return (
    <div ref={ref}
      className="group/card cursor-pointer transition-all duration-600 ease-out h-full"
      style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(12px)" }}
      onClick={onClick} role="button" tabIndex={0} aria-label={legenda}
      onKeyDown={(e) => { if (e.key === "Enter") onClick() }}>
      <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_2px_16px_rgba(244,63,94,0.08)] ring-1 ring-rose-300/30 transition-all duration-400 hover:shadow-[0_10px_34px_rgba(244,63,94,0.13)] hover:ring-rose-300/50 hover:-translate-y-0.5 h-full">
        <div className="relative h-full">
          <video src={src}
            className="w-full h-full object-cover sm:aspect-[9/16]"
            autoPlay muted loop playsInline preload="none" />
          <PlayOverlay />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-400 pointer-events-none">
          <p className="text-white text-[12px] font-light tracking-wide text-center drop-shadow-sm">{legenda}</p>
        </div>
      </div>
    </div>
  )
}

function CardSquare({ src, legenda, index, onClick }: {
  src: string; legenda: string; index: number; onClick: () => void
}) {
  const [ref, show] = useFadeIn(index * 70)
  return (
    <div ref={ref}
      className="group/card cursor-pointer transition-all duration-600 ease-out"
      style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(12px)" }}
      onClick={onClick} role="button" tabIndex={0} aria-label={legenda}
      onKeyDown={(e) => { if (e.key === "Enter") onClick() }}>
      <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_1px_6px_rgba(244,63,94,0.04)] ring-1 ring-rose-200/15 transition-all duration-400 hover:shadow-[0_8px_30px_rgba(244,63,94,0.1)] hover:ring-rose-300/30 hover:-translate-y-0.5">
        <div className="relative">
          <video src={src}
            className="w-full aspect-square object-cover"
            autoPlay muted loop playsInline preload="none" />
          <PlayOverlay />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-400 pointer-events-none">
          <p className="text-white text-[11px] font-light tracking-wide text-center drop-shadow-sm">{legenda}</p>
        </div>
      </div>
    </div>
  )
}

export default function CursoGaleriaVelas() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const open = useCallback((i: number) => setLightboxIdx(i), [])
  const close = useCallback(() => setLightboxIdx(null), [])
  const prev = useCallback(() => setLightboxIdx((i) => (i === 0 ? todos.length - 1 : i! - 1)), [])
  const next = useCallback(() => setLightboxIdx((i) => (i === todos.length - 1 ? 0 : i! + 1)), [])

  return (
    <section className="mb-14">
      <div className="text-center mb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-rose-400/50 font-medium mb-1">GALERIA</p>
        <h3 className="text-base font-light text-rose-700/60 tracking-wide flex items-center justify-center gap-2">
          Fotos & Vídeos do Curso
          <Heart className="h-3 w-3 text-rose-400/40 fill-rose-300/20" />
        </h3>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 space-y-4 sm:space-y-5">
        <CardHero src={hero.src} tipo={hero.tipo} legenda={hero.legenda} onClick={() => open(0)} />

        <div className="grid grid-cols-2 sm:grid-cols-7 gap-3 sm:gap-4">
          <div className="sm:col-span-2 sm:row-span-2">
            <CardVertical {...verticais[0]} index={1} onClick={() => open(1)} />
          </div>

          <div className="sm:col-span-3 grid grid-cols-2 gap-3 sm:gap-4 content-start">
            {quadrados.map((item, i) => (
              <CardSquare key={item.src} {...item} index={i + 3} onClick={() => open(i + 3)} />
            ))}
          </div>

          <div className="sm:col-span-2 sm:row-span-2">
            <CardVertical {...verticais[1]} index={2} onClick={() => open(2)} />
          </div>
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox idx={lightboxIdx} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  )
}

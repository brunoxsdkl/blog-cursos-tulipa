"use client"

import { useEffect, useRef } from "react"

const videos = [
  { id: "DZQvYEBx61E", titulo: "Saboaria Artesanal" },
  { id: "DZF1v4_PvKg", titulo: "Velas Artesanais" },
  { id: "DXkp25hDJdk", titulo: "Cosméticos & Perfumaria" },
]

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("opacity-100", "translate-y-0")
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-rose-200/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-100/80 border border-rose-200 rounded-full text-xs font-medium text-rose-600 mb-6 tracking-wide uppercase">
              Blog de Cursos
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-rose-900 leading-tight">
              Transforme criatividade
              <br />
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                em renda
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-rose-600 leading-relaxed">
              com nossos cursos artesanais. Aprenda técnicas exclusivas, crie produtos incríveis e construa seu negócio dos
              sonhos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="rounded-2xl border-2 border-pink-300/60 overflow-hidden shadow-lg bg-white"
              >
                <iframe
                  src={`https://www.instagram.com/p/${video.id}/embed`}
                  className="w-full h-[420px] sm:h-[360px] lg:h-[320px]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allowFullScreen
                  title={video.titulo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"

const videos = [
  { id: "DZQvYEBx61E", titulo: "Saboaria Artesanal" },
  { id: "DZF1v4_PvKg", titulo: "Velas Artesanais" },
  { id: "DXkp25hDJdk", titulo: "Cosméticos & Perfumaria" },
]

function PhoneFrame({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-xl border-4 border-neutral-800 w-full max-w-[280px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-neutral-900 rounded-b-2xl z-10 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neutral-700" />
          <div className="w-14 h-1.5 rounded-full bg-neutral-800" />
        </div>
        <div className="overflow-hidden rounded-[2.2rem] bg-black aspect-[9/19] relative">
          <iframe
            src={`https://www.instagram.com/p/${videoId}/embed`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            allowFullScreen
            title={title}
          />
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-neutral-600 rounded-full" />
      </div>
      <span className="mt-3 text-xs font-medium text-rose-600 text-center">{title}</span>
    </div>
  )
}

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              com nossos cursos artesanais. Aprenda técnicas exclusivas, crie produtos incríveis e construa seu negócio dos sonhos.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {videos.map((video) => (
              <PhoneFrame key={video.id} videoId={video.id} title={video.titulo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

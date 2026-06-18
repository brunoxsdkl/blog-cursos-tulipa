"use client"

import { useEffect, useRef } from "react"

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
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
          <p className="mt-6 text-lg sm:text-xl text-rose-600 max-w-xl leading-relaxed">
            com nossos cursos artesanais. Aprenda técnicas exclusivas, crie produtos incríveis e construa seu negócio dos sonhos.
          </p>
        </div>
      </div>
    </div>
  )
}

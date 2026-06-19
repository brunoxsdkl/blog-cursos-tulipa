"use client"

import { useState, useEffect } from "react"

const TARGET = new Date("2026-08-01T00:00:00")

function calc() {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    minutos: Math.floor((diff % 3600000) / 60000),
    segundos: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown() {
  const [t, setT] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setT(calc), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-rose-400 font-medium mb-2">
          CONTAGEM REGRESSIVA
        </p>
        <h2 className="text-lg sm:text-2xl uppercase tracking-[0.15em] font-medium text-rose-700/90">
          SEGUNDA TEMPORADA DE CURSOS 2026
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 sm:gap-8">
        {[
          { label: "DIAS", value: t.dias },
          { label: "HORAS", value: t.horas },
          { label: "MINUTOS", value: t.minutos },
          { label: "SEGUNDOS", value: t.segundos },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-b from-rose-50 to-pink-50 border border-rose-200 flex items-center justify-center shadow-sm">
              <span className="text-3xl sm:text-5xl font-bold text-rose-600 tabular-nums">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-rose-400 font-medium mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm uppercase tracking-[0.15em] font-medium shadow-lg shadow-rose-300/40 hover:shadow-rose-400/60 hover:scale-105 transition-all duration-300"
        >
          CONSULTE AS VAGAS!
        </a>
      </div>
    </section>
  )
}

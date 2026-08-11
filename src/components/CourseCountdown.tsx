"use client"

import { useState, useEffect } from "react"

export default function CourseCountdown({ date }: { date: string }) {
  const target = new Date(date).getTime()

  function calc() {
    const diff = target - Date.now()
    if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
    return {
      dias: Math.floor(diff / 86400000),
      horas: Math.floor((diff % 86400000) / 3600000),
      minutos: Math.floor((diff % 3600000) / 60000),
      segundos: Math.floor((diff % 60000) / 1000),
    }
  }

  const [t, setT] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setT(calc), 1000)
    return () => clearInterval(id)
  }, [target])

  const label = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  return (
    <div className="mt-4 border-t border-rose-100 pt-4">
      <div className="text-center mb-2">
        <p className="text-[10px] uppercase tracking-[0.15em] text-rose-400 font-medium">
          Próxima turma
        </p>
        <p className="text-sm font-semibold text-rose-700">{label}</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        {[
          { label: "dias", value: t.dias },
          { label: "horas", value: t.horas },
          { label: "min", value: t.minutos },
          { label: "seg", value: t.segundos },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-b from-rose-50 to-pink-50 border border-rose-200 flex items-center justify-center">
              <span className="text-sm font-bold text-rose-600 tabular-nums">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[8px] uppercase tracking-wider text-rose-400 font-medium mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { cursos } from "@/data/cursos"
import CourseCard from "./CourseCard"

type InfoVaga = { vagas_totais: number; vagas_preenchidas: number; valor?: number; data?: string | null; horario_inicio?: string | null; horario_termino?: string | null }

export default function CourseList() {
  const [precos, setPrecos] = useState<Record<string, number>>({})
  const [datas, setDatas] = useState<Record<string, string>>({})
  const [horarios, setHorarios] = useState<Record<string, { inicio: string | null; termino: string | null }>>({})

  useEffect(() => {
    fetch("/api/vagas")
      .then((r) => r.json())
      .then((data) => {
        if (data && !data.error) {
          const precoMap: Record<string, number> = {}
          const dataMap: Record<string, string> = {}
          const horarioMap: Record<string, { inicio: string | null; termino: string | null }> = {}
          for (const [slug, info] of Object.entries(data) as [string, InfoVaga][]) {
            if (typeof info.valor === "number" && info.valor > 0) precoMap[slug] = info.valor
            if (typeof info.data === "string" && info.data) dataMap[slug] = info.data
            horarioMap[slug] = { inicio: info.horario_inicio ?? null, termino: info.horario_termino ?? null }
          }
          setPrecos(precoMap)
          setDatas(dataMap)
          setHorarios(horarioMap)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-xl sm:text-2xl uppercase tracking-[0.15em] font-medium text-rose-700/80 mb-8">
        Todos os Cursos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cursos.map((curso) => (
          <CourseCard
            key={curso.id}
            curso={curso}
            preco={precos[curso.slug] ?? curso.preco}
            data={datas[curso.slug] ?? null}
            horario={horarios[curso.slug] ?? null}
          />
        ))}
      </div>
    </section>
  )
}
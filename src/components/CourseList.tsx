"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cursos } from "@/data/cursos"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatarDuracao } from "@/lib/duracao"
import { formatarDataBrasil, proximaDataISO } from "@/lib/data"

const VAGAS_TOTAIS = 20

type InfoVaga = { vagas_totais: number; vagas_preenchidas: number; valor?: number; data?: string | null; horario_inicio?: string | null; horario_termino?: string | null }

export default function CourseList() {
  const [vagasAoVivo, setVagasAoVivo] = useState<Record<string, InfoVaga> | null>(null)

  useEffect(() => {
    fetch("/api/vagas")
      .then((r) => r.json())
      .then((data) => {
        if (data && !data.error) {
          const map: Record<string, InfoVaga> = {}
          for (const [slug, info] of Object.entries(data) as [string, InfoVaga][]) {
            map[slug] = info
          }
          setVagasAoVivo(map)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section id="cursos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-xl sm:text-2xl uppercase tracking-[0.15em] font-medium text-rose-700/80 mb-8">
        Todos os Cursos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cursos.map((curso) => {
          const info = vagasAoVivo?.[curso.slug]
          const total = info?.vagas_totais ?? VAGAS_TOTAIS
          const preenchidas = info?.vagas_preenchidas ?? 0
          const restantes = Math.max(0, total - preenchidas)
          const valorExibido = (typeof info?.valor === "number" && info.valor > 0) ? info.valor : curso.preco
          const dataExibida = info?.data || proximaDataISO(curso.datas)
          const duracaoExibida = formatarDuracao(info?.horario_inicio, info?.horario_termino, curso.tempoLeitura)

          return (
            <Link key={curso.id} href={`/cursos/${curso.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 bg-white border-rose-100 hover:border-rose-300 hover:shadow-md">
                <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "1/1", minHeight: "200px" }}>
                  {curso.video ? (
                    <video
                      src={curso.video}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-50 to-pink-50 flex items-center justify-center">
                      <span className="text-4xl opacity-30">🌷</span>
                    </div>
                  )}
                  <Badge className="absolute top-2 left-2 bg-white/90 text-rose-700 border-rose-200 text-xs">
                    {curso.categoriaNome}
                  </Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-center text-sm uppercase tracking-[0.05em] font-medium text-rose-700/90 mb-2 leading-snug">
                    {curso.titulo}
                  </h3>

                  <div className="mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-rose-700">R$ {valorExibido.toFixed(2).replace(".", ",")}</span>
                  </div>

                  <div className="mb-2 rounded-lg bg-rose-50 border border-rose-100 py-1.5 text-center">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-rose-400 font-medium">Próxima turma</p>
                    <p className="text-sm font-semibold text-rose-700">
                      {formatarDataBrasil(dataExibida)}
                    </p>
                    <p className="text-[11px] text-rose-500 mt-0.5">Duração: {duracaoExibida}</p>
                  </div>

                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-rose-400 mb-1">
                      <span>VAGAS</span>
                      <span className="font-medium text-rose-600">
                        {preenchidas}/{total} PREENCHIDAS
                      </span>
                    </div>
                    <div className="w-full h-2 bg-rose-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full transition-all duration-500"
                        style={{ width: `${total > 0 ? (preenchidas / total) * 100 : 0}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-rose-500 mt-1.5 font-medium">
                      {restantes > 0
                        ? `${restantes} ${restantes === 1 ? "VAGA RESTANTE" : "VAGAS RESTANTES"}`
                        : "VAGAS ESGOTADAS"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

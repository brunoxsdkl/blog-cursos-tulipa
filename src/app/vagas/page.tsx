"use client"

import { useState, useEffect } from "react"
import { cursos } from "@/data/cursos"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const VAGAS_TOTAIS = 20

export default function VagasPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [vagasAoVivo, setVagasAoVivo] = useState<Record<string, number> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/vagas")
      .then((r) => r.json())
      .then((data) => {
        if (data && !data.error) {
          const map: Record<string, number> = {}
          for (const [slug, info] of Object.entries(data) as [string, { vagas_preenchidas: number }][]) {
            map[slug] = info.vagas_preenchidas
          }
          setVagasAoVivo(map)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-400 font-medium mb-2">
            SEGUNDA TEMPORADA 2026
          </p>
          <h1 className="text-xl sm:text-3xl uppercase tracking-[0.15em] font-medium text-rose-700/90 mb-3">
            CONSULTE AS VAGAS
          </h1>
          <p className="text-sm text-rose-400 max-w-md mx-auto">
            Selecione o curso desejado e fale diretamente com nossa consultora.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cursos.map((curso) => {
            const preenchidas = vagasAoVivo?.[curso.slug] ?? (loading ? 0 : 0)
            const restantes = VAGAS_TOTAIS - preenchidas
            const isSelected = selected === curso.id

            return (
              <button
                key={curso.id}
                onClick={() => setSelected(isSelected ? null : curso.id)}
                className="text-left focus:outline-none"
              >
                <Card
                  className={`h-full overflow-hidden transition-all duration-300 bg-white ${
                    isSelected
                      ? "border-rose-500 ring-2 ring-rose-300 shadow-lg shadow-rose-200/50"
                      : "border-rose-100 hover:border-rose-300 hover:shadow-md"
                  }`}
                >
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
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-xs uppercase tracking-[0.1em] font-medium text-rose-800 mb-2 line-clamp-2">
                      {curso.titulo}
                    </h3>

                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-rose-400 mb-1">
                        <span>VAGAS</span>
                        <span className="font-medium text-rose-600">
                          {preenchidas}/{VAGAS_TOTAIS} PREENCHIDAS
                        </span>
                      </div>
                      <div className="w-full h-2 bg-rose-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full transition-all duration-500"
                          style={{ width: `${(preenchidas / VAGAS_TOTAIS) * 100}%` }}
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
              </button>
            )
          })}
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/554199210392"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-medium shadow-lg transition-all duration-300 ${
              selected
                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-300/40 hover:shadow-rose-400/60 hover:scale-105"
                : "bg-rose-200 text-rose-400 cursor-not-allowed"
            }`}
            onClick={(e) => { if (!selected) e.preventDefault() }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            FALAR COM CONSULTOR
          </a>
        </div>
      </div>
    </div>
  )
}

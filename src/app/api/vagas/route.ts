import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

const cursosDoBlog: { slug: string; nomes: string[] }[] = [
  {
    slug: "saboaria-artesanal-modulo-1",
    nomes: ["Saboaria Artesanal", "Saboaria Artesanal – Módulo 1"],
  },
  {
    slug: "velas-artesanais-completo",
    nomes: ["Velas Artesanais", "Velas Artesanais – Apostila Completa", "Velas Artesanais – Apostila", "Velas Artesanais – Módulo 1", "Velas Artesanais - Modulo 1"],
  },
  {
    slug: "cosmeticos-perfumaria-completo",
    nomes: ["Cosméticos & Perfumaria Artesanal", "Cosmeticos & Perfumaria Artesanal", "Cosméticos & Perfumaria", "Cosmeticos & Perfumaria", "Cosméticos & Perfumaria – Módulo 1", "Cosmeticos & Perfumaria - Modulo 1"],
  },
  {
    slug: "produtos-limpeza",
    nomes: ["Produtos de Limpeza Artesanais", "Produtos de Limpeza"],
  },
]

const normalizar = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")

export async function GET() {
  const { data: cursos, error } = await supabase
    .from("cursos")
    .select("id, nome, vagas, valor, data, horario, horario_inicio, horario_termino, alunos(id, status_pagamento)")

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  type Turma = {
    data: string | null
    horario_inicio: string | null
    horario_termino: string | null
    vagas_totais: number
    vagas_preenchidas: number
  }

  const agrupado: Record<string, { valor: number; turmas: Turma[] }> = {}

  for (const curso of cursos || []) {
    const nomeNormalizado = normalizar(curso.nome)
    const entrada = cursosDoBlog.find((c) =>
      c.nomes.some((nome) => normalizar(nome) === nomeNormalizado)
    )
    if (entrada) {
      if (!agrupado[entrada.slug]) {
        agrupado[entrada.slug] = { valor: curso.valor ?? 0, turmas: [] }
      }
      agrupado[entrada.slug].turmas.push({
        data: curso.data ?? null,
        horario_inicio: curso.horario_inicio ?? null,
        horario_termino: curso.horario_termino ?? null,
        vagas_totais: curso.vagas ?? 20,
        vagas_preenchidas: curso.alunos?.filter((a) => a.status_pagamento === "Pago").length ?? 0,
      })
    }
  }

  const ordenarPorData = (turmas: Turma[]) =>
    [...turmas].sort((a, b) => {
      if (!a.data) return 1
      if (!b.data) return -1
      return a.data.localeCompare(b.data)
    })

  const vagas: Record<string, unknown> = {}
  for (const [slug, grupo] of Object.entries(agrupado)) {
    const turmas = ordenarPorData(grupo.turmas)
    const proxima = turmas[0]
    vagas[slug] = {
      valor: grupo.valor,
      turmas,
      data: proxima?.data ?? null,
      horario_inicio: proxima?.horario_inicio ?? null,
      horario_termino: proxima?.horario_termino ?? null,
      vagas_totais: proxima?.vagas_totais ?? 20,
      vagas_preenchidas: proxima?.vagas_preenchidas ?? 0,
    }
  }

  return NextResponse.json(vagas)
}

import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

const cursosDoBlog: { slug: string; nomes: string[] }[] = [
  {
    slug: "saboaria-artesanal-modulo-1",
    nomes: ["Saboaria Artesanal", "Saboaria Artesanal – Módulo 1"],
  },
  {
    slug: "velas-artesanais-completo",
    nomes: ["Velas Artesanais", "Velas Artesanais – Apostila Completa", "Velas Artesanais – Apostila"],
  },
  {
    slug: "cosmeticos-perfumaria-completo",
    nomes: ["Cosméticos & Perfumaria Artesanal", "Cosmeticos & Perfumaria Artesanal", "Cosméticos & Perfumaria", "Cosmeticos & Perfumaria"],
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
    .select("id, nome, vagas, alunos(id)")

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const vagas: Record<string, { vagas_totais: number; vagas_preenchidas: number }> = {}

  for (const curso of cursos || []) {
    const nomeNormalizado = normalizar(curso.nome)
    const entrada = cursosDoBlog.find((c) =>
      c.nomes.some((nome) => normalizar(nome) === nomeNormalizado)
    )
    if (entrada) {
      vagas[entrada.slug] = {
        vagas_totais: curso.vagas ?? 20,
        vagas_preenchidas: curso.alunos?.length ?? 0,
      }
    }
  }

  return NextResponse.json(vagas)
}

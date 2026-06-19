import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

const nomeParaSlug: Record<string, string> = {
  "Saboaria Artesanal – Módulo 1": "saboaria-artesanal-modulo-1",
  "Velas Artesanais – Apostila Completa": "velas-artesanais-completo",
  "Cosméticos & Perfumaria Artesanal": "cosmeticos-perfumaria-completo",
  "Faça & Lucre – Empreendedorismo Artesanal": "faca-lucre-empreendedorismo",
}

export async function GET() {
  const { data: cursos, error } = await supabase
    .from("cursos")
    .select("id, nome, vagas, alunos(id)")

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const vagas: Record<string, { vagas_totais: number; vagas_preenchidas: number }> = {}

  for (const curso of cursos || []) {
    const slug = nomeParaSlug[curso.nome]
    if (slug) {
      vagas[slug] = {
        vagas_totais: curso.vagas,
        vagas_preenchidas: curso.alunos?.length ?? 0,
      }
    }
  }

  return NextResponse.json(vagas)
}

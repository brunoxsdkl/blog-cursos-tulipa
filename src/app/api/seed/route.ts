import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { cursos } from "@/data/cursos"

export async function POST() {
  const results: { slug: string; ok: boolean; error?: string }[] = []

  for (const curso of cursos) {
    const slug = curso.slug
    const slugNormalizado = slug

    const { data: existing } = await supabase
      .from("cursos")
      .select("id")
      .eq("nome", curso.titulo)
      .maybeSingle()

    if (existing) {
      results.push({ slug, ok: true })
      continue
    }

    const { error } = await supabase.from("cursos").insert({
      id: crypto.randomUUID(),
      nome: curso.titulo,
      descricao: curso.descricao,
      horario: "A definir",
      vagas: 20,
      valor: 0,
      data: new Date().toISOString().split("T")[0],
    })

    if (error) {
      results.push({ slug, ok: false, error: error.message })
    } else {
      results.push({ slug, ok: true })
    }
  }

  return NextResponse.json({ seeded: results })
}

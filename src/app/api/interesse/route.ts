import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  const body = await req.json()

  const nome = (body.nome || "").trim()
  const email = (body.email || "").trim()
  const telefone = (body.telefone || "").trim()
  const cursos = Array.isArray(body.cursos) ? body.cursos.filter((c: unknown) => typeof c === "string" && c.trim()) : []

  if (!nome) {
    return NextResponse.json({ error: "Informe seu nome completo" }, { status: 400 })
  }
  if (cursos.length === 0) {
    return NextResponse.json({ error: "Selecione pelo menos um curso de interesse" }, { status: 400 })
  }

  const id = crypto.randomUUID()
  const { data, error } = await supabase
    .from("interessados")
    .insert({
      id,
      nome,
      email,
      telefone,
      cursos,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

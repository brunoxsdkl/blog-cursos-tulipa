"use client"

import { useState } from "react"
import { cursos } from "@/data/cursos"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, GraduationCap, Mail, MessageCircle, Phone, User } from "lucide-react"

export default function InteressePage() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [selecionados, setSelecionados] = useState<string[]>([])
  const [enviando, setEnviando] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState("")

  const toggle = (slug: string) => {
    setSelecionados((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro("")
    if (!nome.trim()) { setErro("Informe seu nome completo"); return }
    if (selecionados.length === 0) { setErro("Selecione pelo menos um curso de interesse"); return }
    setEnviando(true)
    try {
      const res = await fetch("/api/interesse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome.trim(),
          email: email.trim(),
          telefone: telefone.trim(),
          cursos: cursos.filter((c) => selecionados.includes(c.slug)).map((c) => c.titulo),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Erro ao enviar")
      setSucesso(true)
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : "Erro ao enviar")
    } finally {
      setEnviando(false)
    }
  }

  if (sucesso) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="border-rose-100 bg-white text-center p-10">
            <div className="text-6xl mb-4">🌷</div>
            <h1 className="text-2xl font-bold text-rose-800 mb-2">Interesse registrado!</h1>
            <p className="text-rose-500 mb-6">
              Recebemos seus dados. Nossa consultora entrará em contato assim que o curso desejado abrir turma.
            </p>
            <button
              onClick={() => { setSucesso(false); setNome(""); setEmail(""); setTelefone(""); setSelecionados([]) }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium shadow-lg hover:scale-105 transition-all"
            >
              <GraduationCap className="h-4 w-4" />
              Fazer novo registro
            </button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-400 font-medium mb-2">
            DONA TULIPA
          </p>
          <h1 className="text-2xl sm:text-4xl uppercase tracking-[0.1em] font-medium text-rose-700/90 mb-3">
            Quero fazer um curso
          </h1>
          <p className="text-sm text-rose-400 max-w-lg mx-auto">
            Preencha seus dados e marque os cursos de seu interesse. Assim que abrir a turma,
            nossa consultora entrará em contato com você.
          </p>
        </div>

        <Card className="border-rose-100 bg-white shadow-lg shadow-rose-100/50">
          <CardContent className="p-6 sm:p-10">
            <form onSubmit={enviar} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-rose-700 mb-2">
                  <User className="h-4 w-4 text-rose-400" />
                  Nome completo
                </label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/30 text-rose-800 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-rose-700 mb-2">
                    <Phone className="h-4 w-4 text-rose-400" />
                    Telefone / WhatsApp
                  </label>
                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/30 text-rose-800 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-rose-700 mb-2">
                    <Mail className="h-4 w-4 text-rose-400" />
                    E-mail
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/30 text-rose-800 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-rose-700 mb-3">
                  <GraduationCap className="h-4 w-4 text-rose-400" />
                  Cursos de interesse
                  <span className="text-xs text-rose-400">(marque um ou vários)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cursos.map((curso) => {
                    const ativo = selecionados.includes(curso.slug)
                    return (
                      <button
                        type="button"
                        key={curso.slug}
                        onClick={() => toggle(curso.slug)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          ativo
                            ? "border-rose-400 bg-rose-50 shadow-md shadow-rose-100"
                            : "border-rose-100 bg-white hover:border-rose-300"
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                            ativo ? "bg-rose-500 border-rose-500 text-white" : "border-rose-300"
                          }`}
                        >
                          {ativo && <Check className="h-3.5 w-3.5" />}
                        </span>
                        <span className="text-sm font-medium text-rose-700">{curso.titulo}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {erro && (
                <p className="text-sm font-semibold text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {erro}
                </p>
              )}

              <button
                type="submit"
                disabled={enviando}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium shadow-lg shadow-rose-200 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <MessageCircle className="h-4 w-4" />
                {enviando ? "Enviando..." : "Enviar interesse"}
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

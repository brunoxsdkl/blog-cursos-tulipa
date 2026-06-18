"use client"

import { useState, useMemo } from "react"
import { cursos, categorias, type CategoriaSlug } from "@/data/cursos"
import CourseCard from "./CourseCard"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

export default function CourseList() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaSlug | "todos">("todos")
  const [busca, setBusca] = useState("")

  const filtrados = useMemo(() => {
    let result = cursos
    if (categoriaAtiva !== "todos") {
      result = result.filter((c) => c.categoria === categoriaAtiva)
    }
    if (busca.trim()) {
      const term = busca.toLowerCase()
      result = result.filter(
        (c) =>
          c.titulo.toLowerCase().includes(term) ||
          c.descricao.toLowerCase().includes(term) ||
          c.tecnicas.some((t) => t.toLowerCase().includes(term))
      )
    }
    return result
  }, [categoriaAtiva, busca])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="w-full text-center text-lg sm:text-xl uppercase tracking-[0.15em] font-medium text-rose-700/80">
          {categoriaAtiva === "todos"
            ? "Todos os Cursos"
            : categorias.find((c) => c.slug === categoriaAtiva)?.nome}
        </h2>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-rose-300" />
          <Input
            placeholder="Buscar curso..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pl-9 border-rose-200 focus-visible:ring-rose-300 bg-white rounded-xl text-sm"
          />
          {busca && (
            <button
              onClick={() => setBusca("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-300 hover:text-rose-500"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCategoriaAtiva("todos")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            categoriaAtiva === "todos"
              ? "bg-rose-500 text-white shadow-sm"
              : "bg-rose-50 text-rose-600 hover:bg-rose-100"
          }`}
        >
          Todos
        </button>
        {categorias.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setCategoriaAtiva(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              categoriaAtiva === cat.slug
                ? "bg-rose-500 text-white shadow-sm"
                : "bg-rose-50 text-rose-600 hover:bg-rose-100"
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      {filtrados.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-rose-400 text-lg">Nenhum curso encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtrados.map((curso) => (
            <CourseCard key={curso.id} curso={curso} />
          ))}
        </div>
      )}
    </section>
  )
}

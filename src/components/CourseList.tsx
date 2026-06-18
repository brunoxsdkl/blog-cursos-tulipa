"use client"

import { useState } from "react"
import { cursos, categorias, type CategoriaSlug } from "@/data/cursos"
import CourseCard from "./CourseCard"

export default function CourseList() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaSlug | "todos">("todos")

  const filtrados = categoriaAtiva === "todos"
    ? cursos
    : cursos.filter((c) => c.categoria === categoriaAtiva)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-xl sm:text-2xl uppercase tracking-[0.15em] font-medium text-rose-700/80 mb-8">
        {categoriaAtiva === "todos"
          ? "Todos os Cursos"
          : categorias.find((c) => c.slug === categoriaAtiva)?.nome}
      </h2>

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

"use client"

import { cursos } from "@/data/cursos"
import CourseCard from "./CourseCard"

export default function CourseList() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-xl sm:text-2xl uppercase tracking-[0.15em] font-medium text-rose-700/80 mb-8">
        Todos os Cursos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cursos.map((curso) => (
          <CourseCard key={curso.id} curso={curso} />
        ))}
      </div>
    </section>
  )
}

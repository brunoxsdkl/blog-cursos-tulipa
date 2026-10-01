import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import CardCategoriaCriacao from "@/components/CardCategoriaCriacao"
import { categoriasCriacoes } from "@/data/criacoes"

export const metadata: Metadata = {
  title: "Criações da Dona Tulipa | Artesanato, Velas e Perfumaria",
  description:
    "Veja as melhores criações artesanais da Dona Tulipa: velas, saboaria, artesanato, perfumaria e identidade olfativa para empresas.",
  openGraph: {
    title: "Criações da Dona Tulipa",
    description:
      "As melhores criações artesanais da Dona Tulipa: velas, saboaria, artesanato, perfumaria e identidade olfativa para empresas.",
    type: "website",
  },
}

export default function CriacoesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Breadcrumbs items={[{ label: "Criações" }]} />

      <section className="text-center mb-10 sm:mb-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/60 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-rose-600 backdrop-blur-sm">
          <Sparkles className="h-3 w-3" />
          Faça &amp; Lucre
        </span>
        <h1 className="mt-5 font-heading text-3xl leading-tight font-bold text-rose-900 sm:text-4xl md:text-5xl">
          Criações da Dona Tulipa
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-rose-600/80 sm:text-base">
          Cada peça nasce de uma receita, de uma experimentação e de horas de trabalho no ateliê.
          Aqui você conhece as melhores criações que já saíram daqui — velas, saboaria, artesanato,
          perfumaria e identidade olfativa para empresas.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoriasCriacoes.map((categoria) => (
          <CardCategoriaCriacao key={categoria.slug} categoria={categoria} />
        ))}
      </div>

      <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-rose-300">
        Novas criações sendo selecionadas
      </p>

      <div className="mt-12 rounded-3xl border border-white/60 bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-center text-white shadow-[0_16px_50px_rgba(244,63,94,0.25)] sm:p-10">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Quer aprender a fazer?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-rose-50/90">
          O Faça &amp; Lucre é um método criado por Andréia para unir conhecimento, prática,
          criatividade e visão de negócio. Faça. Crie. Encante. Lucre.
        </p>
        <Link
          href="/interesse"
          className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.15em] text-rose-600 shadow-lg transition-all hover:bg-rose-50"
        >
          Quero fazer curso
        </Link>
      </div>
    </div>
  )
}

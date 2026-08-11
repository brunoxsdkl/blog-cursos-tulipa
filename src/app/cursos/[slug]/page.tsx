import { notFound } from "next/navigation"
import Link from "next/link"
import { cursos, getCursoPorSlug } from "@/data/cursos"
import { Badge } from "@/components/ui/badge"

import { Separator } from "@/components/ui/separator"
import Breadcrumbs from "@/components/Breadcrumbs"
import CursoFAQ from "@/components/CursoFAQ"
import CursoGaleria from "@/components/CursoGaleria"
import CursoGaleriaLimpeza from "@/components/CursoGaleriaLimpeza"
import CursoGaleriaCosmeticos from "@/components/CursoGaleriaCosmeticos"
import CursoGaleriaVelas from "@/components/CursoGaleriaVelas"
import { Clock, BarChart, CheckCircle, ArrowLeft, SprayCan, Droplets, Shirt, Sparkles, GlassWater, Brush, WashingMachine, Dog } from "lucide-react"
const iconesProduto: Record<string, React.ComponentType<{ className?: string }>> = {
  spray: SprayCan,
  detergente: Droplets,
  shirt: Shirt,
  sparkles: Sparkles,
  glass: GlassWater,
  multiuso: Brush,
  lava: WashingMachine,
  canil: Dog,
}

export async function generateStaticParams() {
  return cursos.map((curso) => ({ slug: curso.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const curso = getCursoPorSlug(slug as string)
  if (!curso) return { title: "Curso não encontrado" }
  return {
    title: `${curso.titulo} | Dona Tulipa`,
    description: curso.descricao,
    openGraph: {
      title: `${curso.titulo} | Dona Tulipa`,
      description: curso.descricao,
    },
  }
}

export default async function CursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const curso = getCursoPorSlug(slug)
  if (!curso) notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs
        items={[{ label: "Cursos", href: "/" }, { label: curso.titulo }]}
      />

      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-rose-400 hover:text-rose-600 mb-4 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-rose-100 text-rose-700 border-rose-200 text-sm px-3 py-1">
            {curso.categoriaNome}
          </Badge>
          <Badge variant="outline" className="border-rose-200 text-rose-500 text-sm px-3 py-1">
            <BarChart className="h-3.5 w-3.5 mr-1" />
            {curso.nivel}
          </Badge>
          <Badge variant="outline" className="border-rose-200 text-rose-500 text-sm px-3 py-1">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {curso.tempoLeitura}
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-900 leading-tight mb-4">
          {curso.titulo}
        </h1>
        <p className="text-lg text-rose-600 leading-relaxed">
          {curso.descricao}
        </p>
      </div>

      {curso.slug === "saboaria-artesanal-modulo-1" && <CursoGaleria />}
      {curso.slug === "produtos-limpeza" && <CursoGaleriaLimpeza />}
      {curso.slug === "cosmeticos-perfumaria-completo" && <CursoGaleriaCosmeticos />}
      {curso.slug === "velas-artesanais-completo" && <CursoGaleriaVelas />}

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-rose-900 mb-6">
          O que você vai aprender
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {curso.produtosDestaque && curso.produtosDestaque.length > 0 && (
            <div className="sm:col-span-2 p-5 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 border border-rose-200 text-white">
              <h3 className="text-base font-bold text-white mb-4">
                Produtos que você vai aprender a fazer
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {curso.produtosDestaque.map((prod, i) => {
                  const Icone = iconesProduto[prod.icone] ?? Sparkles
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white/15 border border-white/25"
                    >
                      <Icone className="h-5 w-5 shrink-0 text-white" />
                      <span className="text-sm font-medium text-white leading-tight">
                        {prod.nome}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          {curso.tecnicas.map((tec, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-rose-50/50 rounded-xl border border-rose-100"
            >
              <CheckCircle className="h-5 w-5 text-rose-400 mt-0.5 shrink-0" />
              <span className="text-sm text-rose-700 leading-relaxed">{tec}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator className="bg-rose-100 my-12" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-rose-900 mb-6">
          Benefícios do Curso
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {curso.beneficioDestaque && (
            <div className="sm:col-span-2 p-5 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 border border-rose-200 text-white">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 border border-white/25">
                  <Clock className="h-6 w-6 text-white animate-pulse" />
                </span>
                <span className="text-base font-semibold text-white">
                  {curso.beneficioDestaque}
                </span>
              </div>
            </div>
          )}
          {curso.beneficios.map((ben, i) => (
            <div
              key={i}
              className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-100"
            >
              <div className="flex items-start gap-3">
                <span className="text-rose-400 text-lg">✦</span>
                <span className="text-sm text-rose-700 leading-relaxed">{ben}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="bg-rose-100 my-12" />

      <CursoFAQ curso={curso} />
    </div>
  )
}

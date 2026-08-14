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
import { Clock, BarChart, CheckCircle, ArrowLeft, SprayCan, Droplets, Shirt, Sparkles, GlassWater, Brush, WashingMachine, Dog, Bath, Waves, Package, TestTube } from "lucide-react"
const iconesProduto: Record<string, React.ComponentType<{ className?: string }>> = {
  spray: SprayCan,
  detergente: Droplets,
  shirt: Shirt,
  sparkles: Sparkles,
  glass: GlassWater,
  multiuso: Brush,
  lava: WashingMachine,
  canil: Dog,
  banho: Bath,
  hidratante: Droplets,
  chuveiro: Waves,
  sais: Sparkles,
  esfoliante: Brush,
  perfume: SprayCan,
  sache: Package,
  aroma: TestTube,
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

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-rose-400 font-semibold mb-2">
          FORMAÇÃO DONA TULIPA
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-900 leading-tight mb-3">
          {curso.titulo}
        </h1>
        {curso.subtitulo && (
          <p className="text-base sm:text-lg uppercase tracking-[0.15em] text-rose-500 font-medium mb-4">
            {curso.subtitulo}
          </p>
        )}
        <p className="text-lg text-rose-600 leading-relaxed">
          {curso.descricao}
        </p>
        {curso.descricaoLonga && curso.descricaoLonga.length > 1 && (
          <div className="mt-4 space-y-3">
            {curso.descricaoLonga.slice(1).map((par, i) => (
              <p key={i} className="text-lg text-rose-600 leading-relaxed">
                {par}
              </p>
            ))}
          </div>
        )}
      </div>

      {curso.slug === "saboaria-artesanal-modulo-1" && <CursoGaleria />}
      {curso.slug === "produtos-limpeza" && <CursoGaleriaLimpeza />}
      {curso.slug === "cosmeticos-perfumaria-completo" && <CursoGaleriaCosmeticos />}
      {curso.slug === "velas-artesanais-completo" && <CursoGaleriaVelas />}

      {curso.faixaDestaque && (
        <div className="mb-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 border border-rose-200 text-white px-6 py-5 text-center shadow-lg shadow-rose-200/50">
          <p className="text-base sm:text-lg font-bold uppercase tracking-[0.15em]">
            ✨ {curso.faixaDestaque}
          </p>
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-rose-900 mb-6">
          O que você vai aprender
        </h2>
        {curso.aprendizado && curso.aprendizado.length > 0 ? (
          <div className="space-y-6">
            {curso.aprendizado.map((bloco, bi) => (
              <div key={bi} className="rounded-xl bg-rose-50/50 border border-rose-100 p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-rose-900 uppercase tracking-[0.08em] mb-4">
                  <span className="text-xl">{bloco.icone}</span>
                  {bloco.titulo}
                </h3>
                <ul className="space-y-2.5">
                  {bloco.itens.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-rose-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-rose-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
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
          {curso.tecnicas && curso.tecnicas.map((tec, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-rose-50/50 rounded-xl border border-rose-100"
            >
              <CheckCircle className="h-5 w-5 text-rose-400 mt-0.5 shrink-0" />
              <span className="text-sm text-rose-700 leading-relaxed">{tec}</span>
            </div>
          ))}
        </div>
        )}
      </section>

      {curso.fraseImpacto && (
        <div className="mb-12 p-6 rounded-xl bg-white border border-rose-100 shadow-sm">
          <p className="text-lg italic text-rose-700 font-medium text-center leading-relaxed">
            “{curso.fraseImpacto}”
          </p>
        </div>
      )}

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

      {curso.inclusos && curso.inclusos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-rose-900 mb-6">O que está incluso</h2>
          <div className="p-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 border border-rose-200 text-white shadow-lg shadow-rose-200/50">
            <p className="text-base text-white/90 mb-6">
              Ao participar do curso, você recebe:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {curso.inclusos.map((inc, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/15 border border-white/25 rounded-lg p-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 shrink-0" />
                  <span className="text-sm text-white leading-relaxed">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Separator className="bg-rose-100 my-12" />

      {curso.professora && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-rose-900 mb-6">Quem vai te ensinar?</h2>
          <div className="p-6 rounded-xl bg-white border border-rose-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold shrink-0">
                A
              </div>
              <div>
                <h3 className="text-lg font-bold text-rose-900">{curso.professora.nome}</h3>
                <p className="text-sm text-rose-500">{curso.professora.titulo}</p>
              </div>
            </div>
            <p className="text-sm text-rose-700 leading-relaxed mb-4">{curso.professora.bio}</p>
            {curso.professora.registros && curso.professora.registros.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {curso.professora.registros.map((reg, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-500 font-medium">
                    {reg}
                  </span>
                ))}
              </div>
            )}
            <p className="text-sm italic text-rose-600 font-medium">
              “{curso.professora.frase}”
            </p>
          </div>
        </section>
      )}

      <Separator className="bg-rose-100 my-12" />

      <CursoFAQ curso={curso} />

      {curso.ctaSubtitulo && curso.proximosModulos && curso.proximosModulos.length > 0 && (
        <section className="mt-12">
          <div className="p-8 rounded-xl bg-gradient-to-br from-rose-600 to-pink-600 border border-rose-200 text-white text-center shadow-lg shadow-rose-300/40">
            <p className="text-2xl font-bold mb-3">
              Pronta para colocar a mão na massa?
            </p>
            <p className="text-base uppercase tracking-[0.15em] font-semibold mb-1 text-white/90">
              {curso.categoriaNome}
            </p>
            <p className="text-sm uppercase tracking-[0.15em] text-white/80 mb-8">
              {curso.ctaSubtitulo}
            </p>
            <div className="max-w-xl mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
                Próximos módulos que teremos:
              </p>
              <div className="flex flex-col gap-2">
                {curso.proximosModulos.map((mod, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm font-medium text-white"
                  >
                    {mod}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

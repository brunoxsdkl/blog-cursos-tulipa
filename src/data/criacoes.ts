export type CriacaoSlug =
  | "velas"
  | "saboaria"
  | "artesanato"
  | "perfumaria"
  | "identidade-olfativa"

export interface MidiaCriacao {
  src: string
  tipo: "img" | "video"
  legenda: string
}

export interface CategoriaCriacao {
  slug: CriacaoSlug
  nome: string
  resumo: string
  capa?: string
  capaTipo?: "img" | "video"
  midias: MidiaCriacao[]
}

export const categoriasCriacoes: CategoriaCriacao[] = [
  {
    slug: "velas",
    nome: "Velas",
    resumo:
      "Velas artesanais em cera vegetal, com fragrâncias assinadas e acabamento feito à mão.",
    capa: "/velas-destaque.mp4",
    capaTipo: "video",
    midias: [
      { src: "/velas-video-01.mp4", tipo: "video", legenda: "Cera vegetal moldada à mão" },
      { src: "/velas-video-02.mp4", tipo: "video", legenda: "Detalhe do acabamento" },
      { src: "/velas-video-03.mp4", tipo: "video", legenda: "Corante natural e fragrância" },
      { src: "/velas-video-04.mp4", tipo: "video", legenda: "Pavio selecionado e acabamento manual" },
      { src: "/velas-video-05.mp4", tipo: "video", legenda: "Linha pronta para venda" },
    ],
  },
  {
    slug: "saboaria",
    nome: "Saboaria",
    resumo:
      "Sabonetes artesanais no método cold process, com corte livre e embalagens prontas para presente.",
    capa: "/saboaria.mp4",
    capaTipo: "video",
    midias: [
      { src: "/saboaria-1.jpg", tipo: "img", legenda: "Sabonete floral" },
      { src: "/saboaria-2.jpg", tipo: "img", legenda: "Textura e acabamento" },
      { src: "/saboaria-3.jpg", tipo: "img", legenda: "Linha completa" },
      { src: "/saboaria-video-1.mp4", tipo: "video", legenda: "Corte e secagem" },
      { src: "/saboaria-video-2.mp4", tipo: "video", legenda: "Composição de cores" },
      { src: "/saboaria-video-3.mp4", tipo: "video", legenda: "Embalagem artesanal" },
    ],
  },
  {
    slug: "artesanato",
    nome: "Artesanato",
    resumo:
      "Peças decorativas e presentes autorais, feitas com materiais naturais e Alma de ateliê.",
    capa: "/nossa terra.png",
    capaTipo: "img",
    midias: [
      { src: "/foto-principal.jpg", tipo: "img", legenda: "Ateliê Dona Tulipa" },
      { src: "/foto-secundaria.jpg", tipo: "img", legenda: "Produção artesanal" },
      { src: "/andreia.mp4", tipo: "video", legenda: "Bastidores da produção" },
      { src: "/video-principal.mp4", tipo: "video", legenda: "Detalhes da peça" },
      { src: "/video-quarta.mp4", tipo: "video", legenda: "Acabamento final" },
    ],
  },
  {
    slug: "perfumaria",
    nome: "Perfumaria",
    resumo:
      "Perfumes e cosméticos naturais com fragrâncias exclusivas e alta fixação.",
    capa: "/cosmeticos-destaque.mp4",
    capaTipo: "video",
    midias: [
      { src: "/cosmeticos-principal.jpg", tipo: "img", legenda: "Fragrância exclusiva" },
      { src: "/cosmeticos-foto-1.jpg", tipo: "img", legenda: "Linha de cosméticos" },
      { src: "/cosmeticos-vertical-1.jpg", tipo: "img", legenda: "Rótulo e embalagem" },
      { src: "/cosmeticos-vertical-2.jpg", tipo: "img", legenda: "Textura do produto" },
      { src: "/cosmeticos-video-01.mp4", tipo: "video", legenda: "Criação da fragrância" },
      { src: "/cosmeticos-video-02.mp4", tipo: "video", legenda: "Maceração" },
      { src: "/cosmeticos-video-03.mp4", tipo: "video", legenda: "Envasamento" },
      { src: "/cosmeticos-video-04.mp4", tipo: "video", legenda: "Linha finalizada" },
    ],
  },
  {
    slug: "identidade-olfativa",
    nome: "Identidade Olfativa para Empresas",
    resumo:
      "Assinatura olfativa para marcas e negócios: fragrância própria, aplicação do produto e do ambiente.",
    capa: "/consultora-elaine.jpeg",
    capaTipo: "img",
    midias: [],
  },
]

export function getCategoriaCriacao(slug: string): CategoriaCriacao | undefined {
  return categoriasCriacoes.find((c) => c.slug === slug)
}

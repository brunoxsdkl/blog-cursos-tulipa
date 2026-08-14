export interface Curso {
  id: string
  titulo: string
  slug: string
  categoria: CategoriaSlug
  categoriaNome: string
  descricao: string
  imagem: string
  video?: string
  nivel: "Iniciante" | "Intermediário" | "Avançado"
  tempoLeitura: string
  tecnicas?: string[]
  produtosDestaque?: { nome: string; icone: string }[]
  beneficios: string[]
  beneficioDestaque?: string
  inclusos?: string[]
  descricaoLonga?: string[]
  ctaSubtitulo?: string
  proximosModulos?: string[]
  subtitulo?: string
  faixaDestaque?: string
  fraseImpacto?: string
  aprendizado?: { icone: string; titulo: string; itens: string[] }[]
  tecnicasPraticas?: { numero: string; nome: string; descricao: string }[]
  professora?: {
    nome: string
    titulo: string
    bio: string
    registros?: string[]
    frase: string
  }
  datas: string[]
  faq: { pergunta: string; resposta: string }[]
}

export type CategoriaSlug =
  | "saboaria-artesanal"
  | "velas-artesanais"
  | "cosmeticos-perfumaria"
  | "produtos-limpeza"
  | "faca-lucre"

export const categorias: { slug: CategoriaSlug; nome: string; descricao: string }[] = [
  {
    slug: "saboaria-artesanal",
    nome: "Saboaria Artesanal",
    descricao: "Aprenda a produzir sabonetes artesanais premium com técnicas profissionais.",
  },
  {
    slug: "velas-artesanais",
    nome: "Velas Artesanais",
    descricao: "Crie velas decorativas e aromáticas que encantam clientes.",
  },
  {
    slug: "cosmeticos-perfumaria",
    nome: "Cosméticos & Perfumaria",
    descricao: "Domine a produção de cosméticos naturais e perfumaria artesanal.",
  },
  {
    slug: "produtos-limpeza",
    nome: "Produtos de Limpeza",
    descricao: "Fabrique produtos de limpeza eficientes e sustentáveis.",
  },
  {
    slug: "faca-lucre",
    nome: "Faça & Lucre",
    descricao: "Transforme seus conhecimentos em negócios lucrativos.",
  },
]

export const cursos: Curso[] = [
  {
    id: "saboaria-modulo-1",
    titulo: "FORMAÇÃO DONA TULIPA - Saboaria Artesanal – Módulo 1",
    slug: "saboaria-artesanal-modulo-1",
    categoria: "saboaria-artesanal",
    categoriaNome: "Saboaria Artesanal",
    descricao:
      "Aprenda a criar sabonetes artesanais do zero e transforme conhecimento em possibilidades de renda.",
    descricaoLonga: [
      "Aprenda a criar sabonetes artesanais do zero e transforme conhecimento em possibilidades de renda.",
      "Um curso prático e presencial, desenvolvido para quem deseja aprender as principais técnicas da saboaria artesanal, mesmo sem experiência anterior.",
      "Você vai aprender desde a escolha dos materiais e insumos até a produção, acabamento, embalagem, precificação e cuidados importantes para transformar sua produção artesanal em um produto com valor agregado.",
    ],
    ctaSubtitulo: "MÓDULO 1 - DO ZÉRO A PRIMEIRA PRODUÇÃO",
    proximosModulos: [
      "MÓDULO 2 - SABOARIA FITOTERÁPICA",
      "MÓDULO 3 - SABOARIA NATALINA",
      "MÓDULO 4 - SABOARIA AVANÇADA",
    ],
    imagem: "/images/saboaria.jpg",
    video: "/saboaria.mp4",
    nivel: "Iniciante",
    tempoLeitura: "4 horas",
    tecnicas: [
      "Fundamentos da Saboaria Artesanal – Conheça matérias-primas, utensílios, equipamentos e suas principais funções.",
      "Técnicas de produção – Aprenda técnicas artesanais na prática, com acompanhamento durante toda a produção.",
      "Cores, fragrâncias e acabamento – Aprenda como combinar elementos para criar sabonetes bonitos, aromáticos e comercialmente atrativos.",
      "Acabamento e embalagem – Veja como apresentar seu produto de maneira profissional e valorizar sua criação.",
      "Custo e precificação – Aprenda a calcular o custo de produção e estabelecer um preço de venda adequado.",
      "Noções para comercialização – Orientações iniciais para quem deseja transformar a saboaria em uma fonte de renda.",
    ],
    beneficios: [
      "Sabonetes artesanais de alto padrão que se destacam no mercado",
      "Redução de custos com produção própria e insumos acessíveis",
      "Produtos sustentáveis que atraem clientes conscientes",
      "Possibilidade de criar linhas exclusivas para datas sazonais",
    ],
    beneficioDestaque: "Curso presencial com duração de 4 horas",
    inclusos: [
      "Apostila do curso",
      "Todos os materiais utilizados na aula prática",
      "Produção dos produtos durante o curso",
      "Coffee break",
      "Orientações da professora",
      "Certificado digital de conclusão",
      "Conhecimento para continuar produzindo após o curso",
    ],
    professora: {
      nome: "Andréia Freitas",
      titulo: "Química • Aromaterapeuta • Graduanda em Estética e Cosmética",
      bio: "Química e Aromaterapeuta, com experiência prática no desenvolvimento e produção de produtos artesanais e atuação na área de ensino. Atualmente, amplia sua formação acadêmica na área de Estética e Cosmética pela Faculdade Pequeno Príncipe, unindo conhecimento químico, formação continuada e experiência prática.",
      registros: ["CRQ 09.403.803 – 9ª Região", "CRTH 10617"],
      frase:
        "Conhecimento que vai além da receita: técnica, prática e responsabilidade na produção artesanal.",
    },
    datas: ["2026-10-31T13:00:00", "2026-11-28T13:00:00"],
    faq: [
      {
        pergunta: "Preciso ter experiência para começar?",
        resposta:
          "O curso foi criado justamente para isso! Aqui você adquire conhecimento de forma leve, didática e divertida — não importa se está começando do zero ou já tem alguma base.",
      },
      {
        pergunta: "O material está incluso?",
        resposta:
          "Sim! Todo o material necessário para a prática durante o curso está incluso no valor. Você produzirá seu próprio produto e levará para casa o resultado final.",
      },
      {
        pergunta: "Posso comercializar os produtos que aprender no curso?",
        resposta:
          "O curso apresenta técnicas de produção artesanal e também orientações iniciais sobre custos, precificação, embalagem e comercialização. A venda dos produtos deve sempre observar a legislação sanitária vigente, as regras aplicáveis ao tipo de produto e as exigências dos órgãos competentes. A Lei Federal nº 15.154/2025 estabeleceu previsão de regras simplificadas para determinados produtos artesanais, observada a regulamentação sanitária aplicável.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, ao concluir o curso.",
      },
      {
        pergunta: "Esse curso serve para gerar renda?",
        resposta:
          "Você não precisa saber fazer sabonetes para começar. Você precisa aprender da maneira certa. No Saboaria Artesanal – Módulo 1, você terá contato com as técnicas, materiais e conhecimentos fundamentais para começar a produzir seus próprios sabonetes artesanais e dar os primeiros passos nesse universo.",
      },
    ],
  },
  {
    id: "velas-artesanais",
    titulo: "FORMAÇÃO DONA TULIPA - Velas Artesanais",
    subtitulo: "Módulo 1 | Fundamentos e Técnicas Essenciais",
    faixaDestaque: "1 MÓDULO | 6 TÉCNICAS | MUITA PRÁTICA | CONHECIMENTO TÉCNICO",
    fraseImpacto:
      "Aqui você não aprende apenas a fazer velas. Você aprende a entender o processo, escolher os materiais e dominar diferentes técnicas para criar produtos com acabamento e identidade.",
    slug: "velas-artesanais-completo",
    categoria: "velas-artesanais",
    categoriaNome: "Velas Artesanais",
    descricao:
      "Domine a arte da velas artesanais, desde as clássicas velas decorativas até as modernas velas aromáticas em potes de vidro. Um curso completo para quem quer empreender nesse mercado que cresce 25% ao ano.",
    imagem: "/images/velas.jpg",
    video: "/velas.mp4",
    nivel: "Iniciante",
    tempoLeitura: "4 horas",
    aprendizado: [
      {
        icone: "🔬",
        titulo: "CONHECIMENTO DAS MATÉRIAS-PRIMAS",
        itens: [
          "Principais tipos de ceras e suas características",
          "Escolha da matéria-prima de acordo com o tipo de vela",
          "Corantes: como utilizar e incorporar corretamente",
          "Essências: quantidade, aplicação e cuidados",
          "Óleos essenciais: utilização e particularidades",
          "Pavios: escolha, posicionamento e aplicação",
          "Equipamentos e recipientes adequados para o derretimento",
          "Cuidados e boas práticas durante a produção",
        ],
      },
      {
        icone: "🕯️",
        titulo: "PARTE PRÁTICA 6 TÉCNICAS",
        itens: [
          "Vela Piloto – A base para compreender o processo de fabricação e os principais fundamentos de uma vela artesanal.",
          "Vela com Especiarias – Uma técnica diferenciada que combina estética, textura e elementos decorativos.",
          "Vela Mosaico – Aprenda a trabalhar diferentes cores e elementos para criar um efeito visual sofisticado.",
          "Vela Luminária – Uma técnica decorativa que transforma a vela em uma verdadeira peça de ambientação.",
          "Vela de Massagem – Aprenda a produzir uma vela destinada à aplicação corporal, trabalhando uma composição de origem natural.",
          "Vela Gel Aquário – Uma técnica encantadora utilizando gel e elementos decorativos para criar o famoso efeito aquário.",
        ],
      },
    ],
    beneficios: [
      "Mercado em alta com clientes fiéis que buscam bem-estar e decoração",
      "Velas aromáticas são presentes perfeitos para datas comemorativas",
      "Possibilidade de criar linhas personalizadas por evento ou marca",
      "Lucro médio de 200% a 400% por unidade vendida",
    ],
    beneficioDestaque: "Curso presencial com duração de 4 horas",
    datas: ["2026-10-03T13:00:00", "2026-11-21T13:00:00"],
    faq: [
      {
        pergunta: "Preciso ter experiência?",
        resposta: "O curso foi criado justamente para isso! Aqui você adquire conhecimento de forma leve, didática e divertida — não importa se está começando do zero ou já tem alguma base.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Sim! Todo o material necessário para a prática durante o curso está incluso no valor. Você produzirá seu próprio produto e levará para casa o resultado final.",
      },
      {
        pergunta: "Posso vender os produtos depois?",
        resposta: "Sim! Você poderá vender seus produtos de forma artesanal, conforme a lei - 15.154/2025. O curso é focado em empreendedorismo. Você aprenderá a precificar, embalar e divulgar suas velas.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, ao concluir o curso.",
      },
      {
        pergunta: "Esse curso serve para gerar renda?",
        resposta: "Sim! Alunos relatam faturamento mensal entre R$ 1.200 e R$ 4.000 com vendas de velas artesanais.",
      },
    ],
  },
  {
    id: "cosmeticos-perfumaria",
    titulo: "FORMAÇÃO DONA TULIPA - Cosméticos & Perfumaria – Módulo 1",
    slug: "cosmeticos-perfumaria-completo",
    categoria: "cosmeticos-perfumaria",
    categoriaNome: "Cosméticos & Perfumaria",
    descricao:
      "Descubra o universo da cosmética e perfumaria artesanal. Aprenda a criar desde hidratantes e sabão liquidos até perfumes exclusivos com ingredientes seguros e eficazes.",
    imagem: "/images/cosmeticos.jpg",
    video: "/cosmeticos.mp4",
    nivel: "Intermediário",
    tempoLeitura: "4 horas",
    tecnicas: [
      "Cremes e loções hidratantes",
      "Conservantes e validade dos produtos",
      "Rotulagem C/lote e validade",
    ],
    produtosDestaque: [
      { nome: "Geleia de banho", icone: "banho" },
      { nome: "Loção hidratante", icone: "hidratante" },
      { nome: "Sais de chuveiro", icone: "chuveiro" },
      { nome: "Sais de banho", icone: "sais" },
      { nome: "Pasta esfoliante hidratante", icone: "esfoliante" },
      { nome: "Perfume", icone: "perfume" },
      { nome: "Sachê de gaveta", icone: "sache" },
      { nome: "Aromatizador de vareta", icone: "aroma" },
    ],
    beneficios: [
      "Produtos com alta procura e clientes dispostos a pagar mais por cosméticos naturais",
      "Ingredientes acessíveis e rendimento de até 90% de lucro por unidade",
      "Mercado de beleza limpa (clean beauty) em expansão no Brasil",
      "Possibilidade de criar marca própria com identidade única",
      "Fidelização de clientes que buscam produtos personalizados e livres de químicos agressivos",
    ],
    beneficioDestaque: "Curso presencial com duração de 4 horas",
    datas: ["2026-11-07T13:00:00"],
    faq: [
      {
        pergunta: "Preciso ter experiência?",
        resposta: "O curso foi criado justamente para isso! Aqui você adquire conhecimento de forma leve, didática e divertida — não importa se está começando do zero ou já tem alguma base.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Sim! Todo o material necessário para a prática durante o curso está incluso no valor. Você produzirá seu próprio produto e levará para casa o resultado final.",
      },
      {
        pergunta: "Posso vender os produtos depois?",
        resposta: "Sim. Você poderá vender seus produtos de forma artesanal, conforme a lei - 15.154/2025. Você aprende a regularizar seus produtos conforme a ANVISA e a criar uma marca profissional.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, ao concluir o curso.",
      },
      {
        pergunta: "Esse curso serve para gerar renda?",
        resposta: "Sim. Alunas faturaram de R$ 1.500 a R$ 5.000 mensais com cosméticos artesanais em feiras e redes sociais.",
      },
    ],
  },
  {
    id: "produtos-limpeza",
    titulo: "FORMAÇÃO DONA TULIPA - Produtos de Limpeza",
    slug: "produtos-limpeza",
    categoria: "produtos-limpeza",
    categoriaNome: "Produtos de Limpeza",
    descricao:
      "Aprenda a fabricar produtos de limpeza eficientes, sustentáveis e lucrativos. Domine as fórmulas e técnicas para produzir com qualidade profissional.",
    imagem: "/images/limpeza.jpg",
    video: "/limpeza.mp4",
    nivel: "Iniciante",
    tempoLeitura: "4 horas",
    tecnicas: [
      "Higienização e segurança na manipulação de insumos",
      "Material de apoio",
      "Fragrâncias e coloração para produtos de limpeza",
      "Embalagem, rotulagem e validade dos produtos",
      "Medir pH dos produtos",
    ],
    produtosDestaque: [
      { nome: "Desinfetante c/ essência", icone: "spray" },
      { nome: "Detergente", icone: "detergente" },
      { nome: "Amaciante de roupas", icone: "shirt" },
      { nome: "Alvejante s/ cloro", icone: "sparkles" },
      { nome: "Limpa vidros", icone: "glass" },
      { nome: "Multiuso", icone: "multiuso" },
      { nome: "Lava roupas", icone: "lava" },
      { nome: "Limpa canil", icone: "canil" },
    ],
    beneficios: [
      "Fórmulas testadas e aprovadas que funcionam de verdade",
      "Margem de lucro de até 300% sobre cada produto",
      "Certificado digital de conclusão da Dona Tulipa",
    ],
    beneficioDestaque: "Curso presencial com duração de 4 horas",
    datas: ["2026-10-17T13:00:00"],
    faq: [
      {
        pergunta: "Preciso ter experiência?",
        resposta: "Não! O curso é pensado para iniciantes. Você aprenderá do zero, com linguagem simples e passo a passo detalhado.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Sim! Todo o material necessário para a prática durante o curso está incluso no valor. Você produzirá seu próprio produto e levará para casa o resultado final.",
      },
      {
        pergunta: "Posso vender os produtos depois?",
        resposta: "Sim! Você poderá vender seus produtos de forma artesanal, conforme a lei - 15.154/2025. O curso ensina não só a produzir, mas também a precificar, embalar e vender seus produtos de limpeza.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, ao concluir o curso.",
      },
      {
        pergunta: "Esses produtos seguem a ANVISA?",
        resposta: "Sim, as fórmulas e orientações seguem as boas práticas de fabricação recomendadas pela ANVISA para pequenos produtores.",
      },
      {
        pergunta: "Quanto posso lucrar?",
        resposta: "Com baixo investimento inicial, é possível ter margens de lucro de até 300%. Muitos alunos já fazem da produção de limpeza sua renda principal.",
      },
    ],
  },
]

export function getCursoPorSlug(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug)
}

export function getCursosPorCategoria(categoria: CategoriaSlug): Curso[] {
  return cursos.filter((c) => c.categoria === categoria)
}

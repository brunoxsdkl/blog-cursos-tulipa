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
  tecnicas: string[]
  beneficios: string[]
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
    titulo: "Saboaria Artesanal – Módulo 1",
    slug: "saboaria-artesanal-modulo-1",
    categoria: "saboaria-artesanal",
    categoriaNome: "Saboaria Artesanal",
    descricao:
      "Aprenda do zero as técnicas fundamentais da saboaria artesanal. Este módulo aborda desde a escolha dos insumos até o processo completo de saponificação a frio, criando sabonetes únicos, sustentáveis e com alto valor agregado.",
    imagem: "/images/saboaria.jpg",
    video: "/saboaria.mp4",
    nivel: "Iniciante",
    tempoLeitura: "15 min",
    tecnicas: [
      "Saponificação a frio – processo completo da reação química entre soda cáustica e óleos vegetais",
      "Cálculo de receitas – uso de calculadora de soda para fórmulas precisas",
      "Escolha de óleos e manteigas – propriedades de cada insumo na dureza, espuma e hidratação",
      "Técnica de traço leve, médio e avançado para diferentes texturas",
      "Uso de argilas e corantes naturais para coloração orgânica",
      "Criação de blend de fragrâncias com óleos essenciais",
      "Técnica de marmorizado e camadas para sabonetes decorados",
      "Cura e armazenamento – tempo ideal e condições para cada tipo de sabonete",
      "Embalagem criativa e precificação para venda",
    ],
    beneficios: [
      "Sabonetes artesanais de alto padrão que se destacam no mercado",
      "Redução de custos com produção própria e insumos acessíveis",
      "Produtos sustentáveis e veganos que atraem clientes conscientes",
      "Possibilidade de criar linhas exclusivas para datas sazonais",
      "Margem de lucro de até 300% sobre o custo de produção",
    ],
    faq: [
      {
        pergunta: "Preciso ter experiência para começar?",
        resposta:
          "Não. O módulo 1 foi desenvolvido para iniciantes absolutos. Você aprenderá desde os fundamentos da reação química até as técnicas mais criativas de decoração.",
      },
      {
        pergunta: "O material está incluso?",
        resposta:
          "Disponibilizamos uma lista completa com fornecedores confiáveis e sugestões de kits iniciais com investimento a partir de R$ 80.",
      },
      {
        pergunta: "Posso vender os produtos depois?",
        resposta:
          "Sim! Todos os cursos são voltados para geração de renda. Você aprende técnicas profissionais e ainda recebe orientações sobre precificação, embalagem e divulgação.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim. Ao concluir o módulo, você recebe um certificado digital de conclusão reconhecido pela Dona Tulipa.",
      },
      {
        pergunta: "Quanto consigo produzir por lote?",
        resposta: "Com as receitas do curso, você produz de 6 a 12 sabonetes por lote, dependendo da técnica. Com prática, consegue escalar para produção comercial.",
      },
      {
        pergunta: "Esse curso serve para gerar renda?",
        resposta: "Com certeza. Muitas alunas começaram vendendo para amigos e hoje mantêm uma renda extra mensal de R$ 800 a R$ 3.000 com saboaria artesanal.",
      },
    ],
  },
  {
    id: "velas-artesanais",
    titulo: "Velas Artesanais – Apostila Completa",
    slug: "velas-artesanais-completo",
    categoria: "velas-artesanais",
    categoriaNome: "Velas Artesanais",
    descricao:
      "Domine a arte da velas artesanais, desde as clássicas velas decorativas até as modernas velas aromáticas em potes de vidro. Um curso completo para quem quer empreender nesse mercado que cresce 25% ao ano.",
    imagem: "/images/velas.jpg",
    video: "/velas.mp4",
    nivel: "Iniciante",
    tempoLeitura: "12 min",
    tecnicas: [
      "Escolha da cera ideal – parafina, soja, palma ou vegetal para cada tipo de vela",
      "Mechas e pavios – dimensão, posicionamento e tipo para queima perfeita",
      "Temperatura correta de derretimento e adição de fragrâncias",
      "Fixação de fragrâncias – blends que duram mais tempo na queima",
      "Velas em potes de vidro, alumínio e recipientes reutilizáveis",
      "Velas esculturais e decorativas em silicone",
      "Técnica de camadas coloridas e efeito areia",
      "Velas aromáticas terapêuticas com óleos essenciais",
      "Rótulos, embalagens e apresentação profissional para venda",
      "Precificação e cálculo de custos para maximizar lucro",
    ],
    beneficios: [
      "Mercado em alta com clientes fiéis que buscam bem-estar e decoração",
      "Produção de alto valor agregado com baixo custo de insumos",
      "Velas aromáticas são presentes perfeitos para datas comemorativas",
      "Possibilidade de criar linhas personalizadas por evento ou marca",
      "Lucro médio de 200% a 400% por unidade vendida",
    ],
    faq: [
      {
        pergunta: "Preciso ter experiência?",
        resposta: "Não. O curso ensina desde o básico da segurança com cera quente até técnicas decorativas avançadas.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Fornecemos lista detalhada de fornecedores com os melhores preços do mercado e indicação de kits para começar.",
      },
      {
        pergunta: "Posso vender os produtos depois?",
        resposta: "Sim! O curso é focado em empreendedorismo. Você aprenderá a precificar, embalar e divulgar suas velas.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, certificado digital de conclusão reconhecido pela Dona Tulipa.",
      },
      {
        pergunta: "Quanto consigo produzir?",
        resposta: "Com um lote básico você produz de 10 a 20 velas. Conforme escala, pode chegar a 100 velas por semana.",
      },
      {
        pergunta: "Esse curso serve para gerar renda?",
        resposta: "Sim! Alunas relatam faturamento mensal entre R$ 1.200 e R$ 4.000 com vendas de velas artesanais.",
      },
    ],
  },
  {
    id: "cosmeticos-perfumaria",
    titulo: "Cosméticos & Perfumaria Artesanal",
    slug: "cosmeticos-perfumaria-completo",
    categoria: "cosmeticos-perfumaria",
    categoriaNome: "Cosméticos & Perfumaria",
    descricao:
      "Descubra o universo da cosmética natural e perfumaria artesanal. Aprenda a criar desde hidratantes e bálsamos labiais até perfumes exclusivos com ingredientes naturais e seguros.",
    imagem: "/images/cosmeticos.jpg",
    nivel: "Intermediário",
    tempoLeitura: "18 min",
    tecnicas: [
      "Criação de bases para cremes e loções hidratantes",
      "Bálsamos labiais nutritivos com manteigas vegetais",
      "Perfumes sólidos e sprays com álcool de cereais",
      "Óleos corporais perfumados e sais de banho",
      "Emulsões – técnica de fase oleosa e aquosa",
      "Conservantes naturais e validade dos produtos",
      "Rotulagem conforme ANVISA para venda legal",
      "Criação de linhas completas (dia, noite, cuidados específicos)",
      "Embalagem sustentável e identidade visual para marca própria",
    ],
    beneficios: [
      "Produtos com alta procura e clientes dispostos a pagar mais por cosméticos naturais",
      "Ingredientes acessíveis e rendimento de até 90% de lucro por unidade",
      "Mercado de beleza limpa (clean beauty) em expansão no Brasil",
      "Possibilidade de criar marca própria com identidade única",
      "Fidelização de clientes que buscam produtos personalizados e livres de químicos agressivos",
    ],
    faq: [
      {
        pergunta: "Preciso ter experiência?",
        resposta: "Conhecimentos básicos de cosmética ajudam, mas o curso é estruturado para guiar iniciantes com interesse em formulaturas.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Sim. Inclui tabela de fornecedores, lista de insumos essenciais e planilha de precificação.",
      },
      {
        pergunta: "Posso vender os produtos depois?",
        resposta: "Sim. Você aprende a regularizar seus produtos conforme a ANVISA e a criar uma marca profissional.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, certificado digital de conclusão da Dona Tulipa.",
      },
      {
        pergunta: "Quanto consigo produzir?",
        resposta: "Depende da linha. Com um lote de hidratante você produz 20 a 30 unidades. Perfumes rendem de 15 a 25 frascos por lote.",
      },
      {
        pergunta: "Esse curso serve para gerar renda?",
        resposta: "Sim. Alunas faturaram de R$ 1.500 a R$ 5.000 mensais com cosméticos artesanais em feiras e redes sociais.",
      },
    ],
  },
  {
    id: "faca-lucre",
    titulo: "Faça & Lucre – Empreendedorismo Artesanal",
    slug: "faca-lucre-empreendedorismo",
    categoria: "faca-lucre",
    categoriaNome: "Faça & Lucre",
    descricao:
      "O guia definitivo para transformar sua habilidade manual em um negócio rentável. Aprenda a estruturar sua marca, precificar seus produtos, divulgar nas redes sociais e fidelizar clientes.",
    imagem: "/images/faca-lucre.jpg",
    video: "/limpeza.mp4",
    nivel: "Iniciante",
    tempoLeitura: "10 min",
    tecnicas: [
      "Estruturação de marca artesanal – nome, identidade visual e storytelling",
      "Precificação estratégica – cálculo de custos, margem e markup",
      "Fotografia de produtos para redes sociais com celular",
      "Marketing digital para artesãos – Instagram, TikTok e WhatsApp Business",
      "Gestão de encomendas e relacionamento com clientes",
      "Participação em feiras e bazares – dicas de exposição e abordagem",
      "Criação de kits e combos para aumentar ticket médio",
      "Logística e embalagem para envio pelos Correios",
      "Organização financeira básica para MEI e controle de fluxo de caixa",
    ],
    beneficios: [
      "Roteiro completo para sair do zero e ter seu primeiro cliente em 7 dias",
      "Estratégias que funcionam para pequenos negócios artesanais",
      "Modelos prontos de planilhas de precificação e controle financeiro",
      "Dicas reais de alunas que transformaram o artesanato em renda principal",
      "Acompanhamento de resultados com metas semanais alcançáveis",
    ],
    faq: [
      {
        pergunta: "Preciso ter experiência?",
        resposta: "Não. O curso é para quem está começando e quer estruturar o negócio de forma profissional desde o início.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Sim. Planilhas de precificação, calendário editorial para redes sociais e roteiro de 7 dias para primeira venda.",
      },
      {
        pergunta: "Posso vender os produtos depois?",
        resposta: "Sim! O curso foi feito para isso – ensinar você a vender e lucrar com seus produtos artesanais.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, certificado digital de conclusão da Dona Tulipa.",
      },
      {
        pergunta: "Quanto consigo produzir?",
        resposta: "A produção depende do seu segmento. O foco aqui é escalar vendas, não produção.",
      },
      {
        pergunta: "Esse curso serve para gerar renda?",
        resposta: "Com certeza. É o curso mais direto para você começar a faturar com artesanato de forma consistente.",
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

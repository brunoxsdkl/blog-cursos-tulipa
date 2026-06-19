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
          "O curso foi criado justamente para isso! Aqui você adquire conhecimento de forma leve, didática e divertida — não importa se está começando do zero ou já tem alguma base.",
      },
      {
        pergunta: "O material está incluso?",
        resposta:
          "Sim! Todo o material necessário para a prática durante o curso está incluso no valor. Você produzirá seu próprio produto e levará para casa o resultado final.",
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
        resposta: "O curso foi criado justamente para isso! Aqui você adquire conhecimento de forma leve, didática e divertida — não importa se está começando do zero ou já tem alguma base.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Sim! Todo o material necessário para a prática durante o curso está incluso no valor. Você produzirá seu próprio produto e levará para casa o resultado final.",
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
    video: "/cosmeticos.mp4",
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
        resposta: "O curso foi criado justamente para isso! Aqui você adquire conhecimento de forma leve, didática e divertida — não importa se está começando do zero ou já tem alguma base.",
      },
      {
        pergunta: "O material está incluso?",
        resposta: "Sim! Todo o material necessário para a prática durante o curso está incluso no valor. Você produzirá seu próprio produto e levará para casa o resultado final.",
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
    id: "produtos-limpeza",
    titulo: "Produtos de Limpeza Artesanais",
    slug: "produtos-limpeza",
    categoria: "produtos-limpeza",
    categoriaNome: "Produtos de Limpeza",
    descricao:
      "Aprenda a fabricar produtos de limpeza eficientes, sustentáveis e lucrativos. Do detergente ao multiuso, domine as fórmulas e técnicas para produzir com qualidade profissional.",
    imagem: "/images/limpeza.jpg",
    video: "/limpeza.mp4",
    nivel: "Iniciante",
    tempoLeitura: "15 min",
    tecnicas: [
      "Higienização e segurança na manipulação de insumos",
      "Fórmulas de detergente líquido e em pó",
      "Produção de álcool gel e desinfetantes",
      "Multiuso e limpadores específicos para cada superfície",
      "Fragrâncias e coloração para produtos de limpeza",
      "Embalagem, rotulagem e validade dos produtos",
      "Cálculo de custos e precificação para venda",
      "Adequação às normas da ANVISA para pequenos fabricantes",
      "Estratégias de venda e divulgação dos produtos",
    ],
    beneficios: [
      "Fórmulas testadas e aprovadas que funcionam de verdade",
      "Produção com baixo investimento inicial",
      "Margem de lucro de até 300% sobre cada produto",
      "Mercado com demanda constante e alta recorrência de compra",
      "Certificado digital de conclusão da Dona Tulipa",
    ],
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
        resposta: "Sim! O curso ensina não só a produzir, mas também a precificar, embalar e vender seus produtos de limpeza.",
      },
      {
        pergunta: "Recebo certificado?",
        resposta: "Sim, certificado digital de conclusão da Dona Tulipa.",
      },
      {
        pergunta: "Esses produtos seguem a ANVISA?",
        resposta: "Sim, as fórmulas e orientações seguem as boas práticas de fabricação recomendadas pela ANVISA para pequenos produtores.",
      },
      {
        pergunta: "Quanto posso lucrar?",
        resposta: "Com baixo investimento inicial, é possível ter margens de lucro de até 300%. Muitas alunas já fazem da produção de limpeza sua renda principal.",
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

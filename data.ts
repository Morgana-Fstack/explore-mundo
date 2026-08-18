export interface Review {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  reviews: Review[];
}

export const destinationsData: Destination[] = [
  {
    id: 'london',
    name: 'Passeio pelo Rio Tâmisa',
    location: 'Londres, Reino Unido',
    image: 'https://picsum.photos/seed/london/1200/800',
    description:
      "Londres, a capital da Inglaterra e do Reino Unido, é uma cidade do século 21 com uma história que remonta à era romana. Em seu centro erguem-se o imponente Parlamento, a icônica torre do relógio do 'Big Ben' e a Abadia de Westminster, local de coroação dos monarcas britânicos. Do outro lado do rio Tâmisa, a roda gigante London Eye oferece vistas panorâmicas do complexo cultural da Margem Sul e de toda a cidade.",
    reviews: [
      {
        name: 'João Silva',
        date: '12 de Ago, 2024',
        rating: 5,
        comment:
          'Uma experiência incrível! A paisagem é de tirar o fôlego e a organização da agência foi impecável.',
      },
      {
        name: 'Maria Oliveira',
        date: '5 de Ago, 2024',
        rating: 4,
        comment:
          'Lugar maravilhoso, mas pegamos um pouco de chuva. Mesmo assim, a viagem valeu muito a pena.',
      },
    ],
  },
  {
    id: 'madrid',
    name: 'Coração Vibrante da Espanha',
    location: 'Madri, Espanha',
    image: 'https://picsum.photos/seed/madrid/1200/800',
    description:
      'Madri, a capital da Espanha, é uma cidade de boulevards elegantes e parques extensos e bem cuidados, como o Buen Retiro. É famosa por seus ricos acervos de arte europeia, incluindo as obras de Goya, Velázquez e outros mestres espanhóis no Museu do Prado. O coração da antiga Madri dos Habsburgos é a Plaza Mayor, e nas proximidades fica o barroco Palácio Real e seu Arsenal.',
    reviews: [
      {
        name: 'Carlos Pereira',
        date: '22 de Jul, 2024',
        rating: 5,
        comment:
          'Madri é pura energia! A comida é fantástica e a vida noturna não para. Amei o Museu do Prado.',
      },
      {
        name: 'Ana Souza',
        date: '15 de Jul, 2024',
        rating: 4,
        comment:
          'Uma cidade linda e cheia de história. Andar pelas ruas já é um passeio.',
      },
    ],
  },
  {
    id: 'barcelona',
    name: 'Arquitetura e Mar Mediterrâneo',
    location: 'Barcelona, Espanha',
    image: 'https://picsum.photos/seed/barcelona/1200/800',
    description:
      'Barcelona, a cosmopolita capital da região da Catalunha na Espanha, é conhecida por sua arte e arquitetura. A fantástica igreja da Sagrada Família e outros marcos modernistas projetados por Antoni Gaudí marcam a cidade. O Museu Picasso e a Fundação Joan Miró mostram a arte moderna da cidade. A cultura de bares de tapas e a vida noturna vibrante completam o cenário.',
    reviews: [
      {
        name: 'Fernanda Lima',
        date: '10 de Set, 2024',
        rating: 5,
        comment:
          'As obras de Gaudí são de outro mundo. Barcelona tem uma vibe única, misturando praia e cidade grande.',
      },
    ],
  },
  {
    id: 'athens',
    name: 'Berço da Civilização Ocidental',
    location: 'Atenas, Grécia',
    image: 'https://picsum.photos/seed/athens/1200/800',
    description:
      'Atenas domina a região da Ática e é uma das cidades mais antigas do mundo, com seu território continuamente habitado por 3.400 anos. Berço da democracia, das artes, da ciência e da filosofia do mundo ocidental, Atenas é dominada por marcos do século V a.C., incluindo a Acrópole, uma cidadela no topo de uma colina com edifícios antigos como o templo do Partenon com suas colunas.',
    reviews: [
      {
        name: 'Ricardo Almeida',
        date: '01 de Jun, 2024',
        rating: 5,
        comment:
          'Estar na Acrópole é sentir a história viva. Uma viagem no tempo inesquecível.',
      },
    ],
  },
  {
    id: 'rome',
    name: 'A Cidade Eterna',
    location: 'Roma, Itália',
    image: 'https://picsum.photos/seed/rome/1200/800',
    description:
      'Roma, capital da Itália, é uma cidade cosmopolita, com quase 3.000 anos de arte, arquitetura e cultura influentes no mundo todo. Ruínas antigas como o Fórum e o Coliseu evocam o poder do antigo Império Romano. A Cidade do Vaticano, sede da Igreja Católica Romana, tem a Basílica de São Pedro e os museus do Vaticano, que abrigam obras-primas como os afrescos da Capela Sistina de Michelangelo.',
    reviews: [
      {
        name: 'Juliana Costa',
        date: '18 de Ago, 2024',
        rating: 5,
        comment:
          'Cada esquina de Roma conta uma história. A comida é divina e o Coliseu é monumental.',
      },
      {
        name: 'Pedro Martins',
        date: '11 de Ago, 2024',
        rating: 5,
        comment:
          'Me senti dentro de um filme. Jogar uma moeda na Fontana di Trevi foi mágico!',
      },
    ],
  },
  {
    id: 'rio',
    name: 'A Cidade Maravilhosa',
    location: 'Rio de Janeiro, Brasil',
    image: 'https://picsum.photos/seed/rio/1200/800',
    description:
      'O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor no topo do Corcovado e pelo Pão de Açúcar, um pico de granito com teleféricos para o seu cume. A cidade também é conhecida pelas suas vastas favelas. O seu animado Carnaval, com carros alegóricos, fantasias extravagantes e dançarinos de samba, é considerado o maior do mundo.',
    reviews: [
      {
        name: 'Lucas Andrade',
        date: '25 de Fev, 2024',
        rating: 5,
        comment:
          'A vista do Cristo Redentor é algo que todos deveriam ver uma vez na vida. Energia surreal!',
      },
    ],
  },
  {
    id: 'salvador',
    name: 'Coração Afro-Brasileiro',
    location: 'Salvador, Brasil',
    image: 'https://picsum.photos/seed/salvador/1200/800',
    description:
      'Salvador, a capital do estado da Bahia, no nordeste do Brasil, é conhecida pela sua arquitetura colonial portuguesa, pela cultura afro-brasileira e pelo litoral tropical. O Pelourinho é o seu coração histórico, com ruas de paralelepípedos que se abrem para grandes praças, igrejas barrocas coloridas e edifícios coloniais. A música e a dança são partes vibrantes da cultura local.',
    reviews: [
      {
        name: 'Beatriz Santos',
        date: '03 de Mar, 2024',
        rating: 4,
        comment:
          'A cultura em Salvador é muito rica. O Pelourinho é lindo e a comida baiana é uma delícia!',
      },
    ],
  },
  {
    id: 'saopaulo',
    name: 'A Selva de Pedra',
    location: 'São Paulo, Brasil',
    image: 'https://picsum.photos/seed/saopaulo/1200/800',
    description:
      'São Paulo, o vibrante centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com várias instituições culturais e uma rica tradição arquitetônica. Seus edifícios icônicos variam de sua catedral neogótica a arranha-céus modernistas como o Edifício Copan de Oscar Niemeyer. A cidade é um caldeirão de culturas, o que se reflete na sua gastronomia diversificada.',
    reviews: [
      {
        name: 'Gabriel Ferreira',
        date: '20 de Abr, 2024',
        rating: 4,
        comment:
          'São Paulo nunca dorme! Há sempre algo para fazer, um restaurante novo para experimentar ou uma exposição para visitar.',
      },
    ],
  },
  {
    id: 'bariloche',
    name: 'A Suíça Argentina',
    location: 'Bariloche, Argentina',
    image: 'https://picsum.photos/seed/bariloche/1200/800',
    description:
      'San Carlos de Bariloche, comumente chamada de Bariloche, é uma cidade na região da Patagônia Argentina. Faz fronteira com o Nahuel Huapi, um grande lago glacial cercado por montanhas dos Andes. Bariloche é conhecida por sua arquitetura em estilo alpino suíço e seu chocolate, vendido em lojas na Calle Mitre, a avenida principal. É uma base popular para caminhadas e esqui nas montanhas próximas.',
    reviews: [
      {
        name: 'Isabela Rocha',
        date: '15 de Jul, 2024',
        rating: 5,
        comment:
          'Paisagens deslumbrantes! Parece que você está dentro de um cartão postal. O chocolate quente é o melhor do mundo.',
      },
    ],
  },
];

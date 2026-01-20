export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  image: string;
  schedule: {
    day: string;
    time: string;
    stage: string;
  };
  social: {
    instagram?: string;
    spotify?: string;
    youtube?: string;
    twitter?: string;
  };
  highlights: string[];
}

export const artists: Artist[] = [
  {
    id: "the-echoes",
    name: "The Echoes",
    genre: "Rock Alternativo",
    bio: "The Echoes é uma banda de rock alternativo formada em 2015, conhecida por suas guitarras melódicas e letras introspectivas. Com três álbuns lançados, a banda conquistou milhões de fãs em toda a América Latina com sua energia contagiante e presença de palco impressionante.",
    image: "/images/artist-the-echoes.png",
    schedule: {
      day: "19 de Setembro",
      time: "18:00 - 19:00",
      stage: "Palco Principal"
    },
    social: {
      instagram: "theechoes_band",
      spotify: "the-echoes",
      youtube: "@theechoesband",
      twitter: "@theechoes"
    },
    highlights: [
      "3 álbuns de estúdio",
      "Mais de 50 milhões de streams",
      "Turnê internacional em 2024"
    ]
  },
  {
    id: "luna-nights",
    name: "Luna Nights",
    genre: "Indie Pop",
    bio: "Luna Nights é a projeto solo da cantora e compositora Luna Silva, que mistura indie pop com influências eletrônicas. Suas letras poéticas e produção inovadora conquistaram crítica e público, fazendo dela uma das artistas mais promissoras da cena indie brasileira.",
    image: "/images/artist-luna-nights.png",
    schedule: {
      day: "19 de Setembro",
      time: "19:30 - 20:30",
      stage: "Palco Principal"
    },
    social: {
      instagram: "lunanights_music",
      spotify: "luna-nights",
      youtube: "@lunanights",
      twitter: "@lunanights_"
    },
    highlights: [
      "Artista revelação 2023",
      "Colaborações com artistas internacionais",
      "Clipes com mais de 10M visualizações"
    ]
  },
  {
    id: "steel-horizon",
    name: "Steel Horizon",
    genre: "Heavy Metal",
    bio: "Steel Horizon é uma banda de heavy metal clássico que traz a energia dos anos 80 para os dias atuais. Com riffs poderosos e vocais épicos, a banda é conhecida por seus shows explosivos e pela dedicação aos fãs de metal tradicional.",
    image: "/images/artist-steel-horizon.png",
    schedule: {
      day: "19 de Setembro",
      time: "21:00 - 22:00",
      stage: "Palco Principal"
    },
    social: {
      instagram: "steelhorizon_metal",
      spotify: "steel-horizon",
      youtube: "@steelhorizonofficial",
      twitter: "@steelhorizonmtl"
    },
    highlights: [
      "Banda ativa há 15 anos",
      "Turnês na Europa e América do Norte",
      "Fãs dedicados em 30 países"
    ]
  },
  {
    id: "rhythm-collective",
    name: "Rhythm Collective",
    genre: "Funk/Soul",
    bio: "Rhythm Collective é uma banda que funde funk, soul e R&B em uma mistura irresistível. Com grooves contagiantes e harmonias sofisticadas, a banda traz a diversão e a dança para cada apresentação, criando uma experiência imersiva.",
    image: "/images/artist-rhythm-collective.png",
    schedule: {
      day: "19 de Setembro",
      time: "22:30 - 23:30",
      stage: "Palco Principal"
    },
    social: {
      instagram: "rhythmcollective_",
      spotify: "rhythm-collective",
      youtube: "@rhythmcollective",
      twitter: "@rhythmcollect"
    },
    highlights: [
      "Prêmio de Melhor Banda de Funk 2023",
      "Colaborações com DJs internacionais",
      "Shows lotados em festivais"
    ]
  },
  {
    id: "neon-pulse",
    name: "Neon Pulse",
    genre: "Synthwave/Eletrônico",
    bio: "Neon Pulse é um projeto eletrônico que mistura synthwave, darkwave e eletrônico experimental. Com produção de alta qualidade e apresentações visuais impressionantes, a banda cria uma atmosfera imersiva e futurista em cada show.",
    image: "/images/artist-neon-pulse.png",
    schedule: {
      day: "19 de Setembro",
      time: "00:00 - 01:00",
      stage: "Palco Eletrônico"
    },
    social: {
      instagram: "neonpulse_official",
      spotify: "neon-pulse",
      youtube: "@neonpulsemusic",
      twitter: "@neonpulsemusic"
    },
    highlights: [
      "Produção visual de classe mundial",
      "Colaborações com artistas eletrônicos renomados",
      "Presença em festivais internacionais"
    ]
  },
  {
    id: "acoustic-soul",
    name: "Acoustic Soul",
    genre: "Folk/Acústico",
    bio: "Acoustic Soul é um duo que traz intimidade e emoção através de composições acústicas e letras profundas. Com influências de folk, bossa nova e música brasileira, o duo cria momentos mágicos de conexão com o público.",
    image: "/images/artist-acoustic-soul.png",
    schedule: {
      day: "19 de Setembro",
      time: "16:00 - 17:00",
      stage: "Palco Secundário"
    },
    social: {
      instagram: "acousticsoul_duo",
      spotify: "acoustic-soul",
      youtube: "@acousticsoul",
      twitter: "@acousticsoul_"
    },
    highlights: [
      "Prêmio de Melhor Duo Acústico 2022",
      "Turnê internacional em 10 países",
      "Composições originais premiadas"
    ]
  }
];

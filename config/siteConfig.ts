export type SiteConfig = {
  brand: {
    name: string;
    highlight: string;
  };
  theme: {
    background: string;
    surface: string;
    surfaceSoft: string;
    foreground: string;
    muted: string;
    primary: string;
    primaryHover: string;
    border: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    image: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  specialtiesSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  specialties: Array<{
    title: string;
    description: string;
  }>;
  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    cardEyebrow: string;
    cardTitle: string;
    cardDescription: string;
  };
  testimonialsSection: {
    eyebrow: string;
    title: string;
    description: string;
    customerLabel: string;
  };
  testimonials: Array<{
    name: string;
    text: string;
  }>;
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    phone: string;
    whatsappMessage: string;
    address: string;
    email: string;
    hours: string;
    serviceArea: string;
  };
  footer: {
    description: string;
  };
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "PORTFOLIO-ROCHA",
    highlight: "PORTFOLIO-ROCHA",
  },
  theme: {
    background: "#080808",
    surface: "#141414",
    surfaceSoft: "#1F1F1F",
    foreground: "#FFFFFF",
    muted: "#B8B8B8",
    primary: "#E11D48",
    primaryHover: "#BE123C",
    border: "#2C2C2C",
  },
  hero: {
    eyebrow: "Moda, estilo e qualidade",
    title: "Peças modernas para vestir sua identidade.",
    description:
      "Camisetas, conjuntos e peças personalizadas com acabamento de qualidade, conforto e estilo para o dia a dia.",
    primaryButton: "Ver catálogo",
    secondaryButton: "Fazer pedido",
    image: "/images/confeccao.png",
    stats: [
      {
        value: "+500",
        label: "Peças produzidas",
      },
      {
        value: "100%",
        label: "Produção cuidadosa",
      },
      {
        value: "24h",
        label: "Atendimento rápido",
      },
    ],
  },
  specialtiesSection: {
    eyebrow: "Produtos",
    title: "Moda feita para destacar seu estilo.",
    description:
      "Trabalhamos com peças confortáveis, modernas e bem acabadas para clientes que buscam qualidade e personalidade.",
    ctaLabel: "Ver produto",
  },
  specialties: [
    {
      title: "Camisetas",
      description:
        "Modelos modernos, confortáveis e versáteis para uso no dia a dia, eventos ou marcas personalizadas.",
    },
    {
      title: "Conjuntos",
      description:
        "Peças práticas e estilosas para quem busca conforto sem abrir mão de uma boa apresentação.",
    },
    {
      title: "Peças Personalizadas",
      description:
        "Produção sob encomenda para empresas, equipes, eventos, igrejas, grupos e marcas próprias.",
    },
  ],
  about: {
    eyebrow: "Sobre a Confecção",
    title: "Qualidade, cuidado e estilo em cada peça.",
    description:
      "Nossa confecção nasceu para entregar peças bonitas, confortáveis e bem produzidas, com atenção aos detalhes e atendimento próximo ao cliente.",
    image: "/images/confeccao.png",
    features: [
      "Peças confortáveis e bem acabadas",
      "Produção com atenção aos detalhes",
      "Atendimento rápido pelo WhatsApp",
    ],
    cardEyebrow: "CONFECÇÃO PREMIUM",
    cardTitle: "Vista sua melhor versão.",
    cardDescription:
      "Criamos peças que unem conforto, estilo e qualidade para valorizar sua imagem em todos os momentos.",
  },
  testimonialsSection: {
    eyebrow: "Clientes",
    title: "Quem comprou recomenda.",
    description:
      "Veja a experiência de clientes que escolheram nossas peças e aprovaram a qualidade, o conforto e o atendimento.",
    customerLabel: "Cliente",
  },
  testimonials: [
    {
      name: "Bruna Carvalho",
      text:
        "Comprei camisetas e gostei muito da qualidade. O tecido é confortável e o acabamento ficou excelente.",
    },
    {
      name: "Jéssica Lima",
      text:
        "O conjunto ficou lindo no corpo. Atendimento rápido, produto bem embalado e entrega dentro do combinado.",
    },
    {
      name: "Daniel Santos",
      text:
        "Fiz um pedido personalizado para minha equipe e ficou muito bom. Recomendo pela qualidade e atenção.",
    },
  ],
  contact: {
    eyebrow: "Contato",
    title: "Faça seu pedido",
    description:
      "Entre em contato pelo WhatsApp para conhecer o catálogo, consultar modelos disponíveis ou solicitar peças personalizadas.",
    primaryButton: "Chamar no WhatsApp",
    secondaryButton: "Enviar e-mail",
    phone: "5519982144043",
    whatsappMessage: "Olá, gostaria de conhecer o catálogo e fazer um pedido.",
    address: "Hortolândia - SP",
    email: "contato@tkstyle.com.br",
    hours: "Segunda a sábado, 09h às 19h",
    serviceArea: "Moda, confecção e peças personalizadas",
  },
  footer: {
    description:
      "Moda, camisetas, conjuntos e peças personalizadas com qualidade, conforto e estilo.",
  },
};

export const SITE_CONFIG_STORAGE_KEY = "confeccao-premium:site-config";

export function mergeSiteConfig(config: Partial<SiteConfig> = {}): SiteConfig {
  return {
    ...siteConfig,
    ...config,
    brand: { ...siteConfig.brand, ...config.brand },
    theme: { ...siteConfig.theme, ...config.theme },
    hero: {
      ...siteConfig.hero,
      ...config.hero,
      stats: config.hero?.stats ?? siteConfig.hero.stats,
    },
    specialtiesSection: {
      ...siteConfig.specialtiesSection,
      ...config.specialtiesSection,
    },
    specialties: config.specialties ?? siteConfig.specialties,
    about: {
      ...siteConfig.about,
      ...config.about,
      features: config.about?.features ?? siteConfig.about.features,
    },
    testimonialsSection: {
      ...siteConfig.testimonialsSection,
      ...config.testimonialsSection,
    },
    testimonials: config.testimonials ?? siteConfig.testimonials,
    contact: { ...siteConfig.contact, ...config.contact },
    footer: { ...siteConfig.footer, ...config.footer },
  };
}

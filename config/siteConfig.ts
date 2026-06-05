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
    url?: string;
  }>;
  projects?: Array<{
    title: string;
    description: string;
    image: string;
    url: string;
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
    name: "LEANDRO",
    highlight: "ROCHA",
  },
  theme: {
    background: "#050505",
    surface: "#111111",
    surfaceSoft: "#1A1A1A",
    foreground: "#FFFFFF",
    muted: "#B8B8B8",
    primary: "#38BDF8",
    primaryHover: "#0EA5E9",
    border: "#2A2A2A",
  },
  hero: {
    eyebrow: "Desenvolvedor Web",
    title: "Landing pages e sites profissionais para pequenos negócios venderem mais.",
    description:
      "Crio sites modernos, rápidos e responsivos para empresas, profissionais liberais e comércios locais que precisam de presença online, mais autoridade e contato direto pelo WhatsApp.",
    primaryButton: "Solicitar orçamento",
    secondaryButton: "Ver projetos",
    image: "/images/portifolio.png",
    stats: [
      {
        value: "3+",
        label: "Projetos publicados",
      },
      {
        value: "100%",
        label: "Sites responsivos",
      },
      {
        value: "24h",
        label: "Prévia inicial rápida",
      },
    ],
  },
  specialtiesSection: {
    eyebrow: "Serviços",
    title: "Sites objetivos, bonitos e prontos para gerar contato.",
    description:
      "Criação de páginas profissionais para apresentar sua empresa, divulgar serviços, aumentar a confiança do cliente e facilitar o atendimento pelo WhatsApp.",
    ctaLabel: "Ver serviço",
  },
  specialties: [
    {
      title: "Landing Pages",
      description:
        "Páginas de alta conversão para apresentar serviços, divulgar ofertas e transformar visitantes em contatos pelo WhatsApp.",
    },
    {
      title: "Sites Institucionais",
      description:
        "Sites profissionais para empresas, autônomos, igrejas, clínicas, academias, barbearias, lojas e prestadores de serviço.",
    },
    {
      title: "Portfólios Profissionais",
      description:
        "Páginas personalizadas para mostrar trabalhos, fortalecer autoridade e passar mais confiança para novos clientes.",
    },
  ],
  about: {
    eyebrow: "Sobre mim",
    title: "Eu ajudo pequenos negócios a aparecerem melhor na internet.",
    description:
      "Sou Leandro Rocha, desenvolvedor web focado em criar landing pages e sites profissionais para negócios locais. Meu objetivo é entregar páginas bonitas, rápidas e diretas, com visual moderno e foco em gerar mais contatos para o cliente.",
    image: "/images/portifolio.png",
    features: [
      "Layout moderno e responsivo para celular, tablet e computador",
      "Botão de contato direto pelo WhatsApp",
      "Página personalizada de acordo com o segmento do cliente",
    ],
    cardEyebrow: "DESENVOLVIMENTO WEB",
    cardTitle: "Seu negócio com uma apresentação mais profissional.",
    cardDescription:
      "Criação de sites com foco em clareza, velocidade, aparência profissional e conversão para ajudar sua empresa a ser encontrada e gerar mais oportunidades.",
  },
  testimonialsSection: {
    eyebrow: "Portfólio",
    title: "Projetos publicados",
    description:
      "Veja alguns modelos de landing pages profissionais criadas para diferentes segmentos de mercado.",
    customerLabel: "Projeto",
  },
  testimonials: [
    {
      name: "Landing Page Advocacia",
      text:
        "Página profissional para advogado apresentar áreas de atuação, transmitir autoridade e receber contatos pelo WhatsApp.",
      url: "https://advocacia-two-kappa.vercel.app/",
    },
    {
      name: "Landing Page Academia",
      text:
        "Site moderno para academia divulgar planos, modalidades, estrutura e agendar avaliações com novos alunos.",
      url: "https://academia-one-zeta.vercel.app/",
    },
    {
      name: "Landing Page Barbearia",
      text:
        "Página visual para barbearia mostrar serviços, diferenciais, endereço, horários e facilitar agendamentos.",
      url: "https://barbearia-brown-xi.vercel.app/",
    },
  ],
  projects: [
    {
      title: "Advocacia",
      description:
        "Landing page para escritório de advocacia com foco em autoridade e contato rápido.",
      image: "/images/projetos/advocacia.png",
      url: "https://advocacia-two-kappa.vercel.app/",
    },
    {
      title: "Academia",
      description:
        "Landing page para academia apresentar planos, estrutura e modalidades.",
      image: "/images/projetos/academia.png",
      url: "https://academia-one-zeta.vercel.app/",
    },
    {
      title: "Barbearia",
      description:
        "Landing page para barbearia divulgar serviços, horários e agendamentos.",
      image: "/images/projetos/barbearia.png",
      url: "https://barbearia-brown-xi.vercel.app/",
    },
  ],
  contact: {
    eyebrow: "Contato",
    title: "Vamos criar o site do seu negócio?",
    description:
      "Entre em contato e me conte qual tipo de página você precisa. Posso criar uma landing page profissional para apresentar seus serviços, divulgar sua empresa e gerar mais oportunidades.",
    primaryButton: "Falar no WhatsApp",
    secondaryButton: "Enviar e-mail",
    phone: "5519982144043",
    whatsappMessage:
      "Olá, Leandro. Gostaria de fazer um orçamento para criar uma landing page ou site profissional.",
    address: "Hortolândia - SP",
    email: "leandrojoserocha@hotmail.com",
    hours: "Atendimento de segunda a sábado",
    serviceArea:
      "Criação de landing pages, sites institucionais e portfólios profissionais",
  },
  footer: {
    description:
      "Landing pages e sites profissionais para pequenos negócios venderem mais e terem presença digital.",
  },
};

export const SITE_CONFIG_STORAGE_KEY = "leandro-premium:site-config";

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
    projects: config.projects ?? siteConfig.projects,
    contact: { ...siteConfig.contact, ...config.contact },
    footer: { ...siteConfig.footer, ...config.footer },
  };
}
// Configurações da aplicação VIA - Orientação Vocacional

export const APP_CONFIG = {
  name: 'VIA - Orientação Vocacional',
  description: 'Descubra o curso ideal para seu futuro profissional',
  version: '1.0.0',
} as const;

export const API_CONFIG = {
  gemini: {
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    model: 'gemini-2.0-flash',
    timeout: 30000,
  },
} as const;

export const QUIZ_CONFIG = {
  totalQuestions: 4,
  maxPoints: 3,
  areas: {
    tecnologia: {
      name: 'Tecnologia e Inovação',
      description: 'Área focada em desenvolvimento tecnológico, programação, inovação digital e soluções tech.',
      color: 'blue',
    },
    saude: {
      name: 'Saúde e Bem-estar',
      description: 'Área dedicada ao cuidado com a saúde, medicina, enfermagem e bem-estar das pessoas.',
      color: 'green',
    },
    negocios: {
      name: 'Negócios e Gestão',
      description: 'Área voltada para administração, gestão empresarial, finanças e empreendedorismo.',
      color: 'purple',
    },
    arte: {
      name: 'Arte e Design',
      description: 'Área criativa que engloba design, artes visuais, comunicação visual e expressão artística.',
      color: 'pink',
    },
  },
} as const;

export const ROUTES = {
  home: '/',
  quiz: '/quiz',
  results: '/results',
} as const;

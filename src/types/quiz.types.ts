// Tipos para o sistema de questionário vocacional VIA

export interface Question {
  id: number;
  texto: string;
}

export interface Response {
  id: number;
  pergunta_id: number;
  texto: string;
  area: string;
  pontos: number;
}

export interface QuizAnswer {
  pergunta: string;
  resposta: string;
  area: string;
  pontos: number;
}

export interface AreaScores {
  tecnologia: number;
  saude: number;
  negocios: number;
  arte: number;
}

export interface VocationalResult {
  area_principal: string;
  pontuacao_total: number;
  porcentagem_compatibilidade: number;
  areas_secundarias: string[];
}

export interface DetailedAnalysis {
  area_principal: string;
  compatibilidade: number;
  pontos_fortes: string[];
  areas_desenvolvimento: string[];
  cursos_recomendados: string[];
  perspectivas_carreira: string;
  dicas_desenvolvimento: string[];
}

// Constantes das áreas vocacionais
export const AREAS_VOCACIONAIS = {
  tecnologia: "Tecnologia e Inovação",
  saude: "Saúde e Bem-estar",
  negocios: "Negócios e Gestão",
  arte: "Arte e Design"
} as const;

export type AreaVocacional = keyof typeof AREAS_VOCACIONAIS;

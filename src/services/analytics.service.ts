import api from "@/utils/api";

const KEY = "AIzaSyDkpDmHTz2_9fhB3NvBFW0BnIiaNCu4RbY";

// Tipos para a aplicação VIA - Orientação Vocacional
export interface QuizResult {
  area: string;
  pontuacao: number;
  descricao: string;
  cursos_sugeridos: string[];
  mercado_trabalho: string;
}

export interface VocationalAnalysis {
  area_principal: string;
  compatibilidade: number;
  pontos_fortes: string[];
  areas_desenvolvimento: string[];
  cursos_recomendados: string[];
  perspectivas_carreira: string;
  dicas_desenvolvimento: string[];
}

// Service para análise vocacional usando Gemini AI
export const analyzeVocationalProfile = async (
  respostas: Array<{
    pergunta: string;
    resposta: string;
    area: string;
    pontos: number;
  }>
): Promise<VocationalAnalysis> => {
  try {
    const prompt = `
Você é um especialista em orientação vocacional. Analise o perfil vocacional baseado nas seguintes respostas do questionário:

${respostas.map((r, index) => `
${index + 1}. ${r.pergunta}
   Resposta: ${r.resposta}
   Área: ${r.area}
   Pontuação: ${r.pontos}
`).join('')}

Com base nessas respostas, forneça uma análise completa em formato JSON com:
- area_principal: A área vocacional mais adequada
- compatibilidade: Percentual de compatibilidade (0-100)
- pontos_fortes: Lista de pontos fortes identificados
- areas_desenvolvimento: Áreas que podem ser desenvolvidas
- cursos_recomendados: Lista de cursos específicos recomendados
- perspectivas_carreira: Descrição das perspectivas no mercado
- dicas_desenvolvimento: Dicas práticas para desenvolvimento

Responda APENAS com JSON válido, sem explicações adicionais.
`;

    const response = await api.post(`?key=${KEY}`, {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ],
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.3,
        topP: 0.8,
        topK: 40
      }
    });

    const content = response.data.candidates[0].content.parts[0].text;
    return JSON.parse(content);
  } catch (error) {
    console.error("Erro ao analisar perfil vocacional:", error);
    throw new Error("Falha na análise do perfil vocacional");
  }
};

// Service para gerar recomendações de cursos específicos
export const getCourseRecommendations = async (area: string): Promise<string[]> => {
  try {
    const prompt = `
Baseado na área vocacional "${area}", liste 8-10 cursos específicos que são mais adequados.
Inclua cursos técnicos, superiores e de especialização.
Responda apenas com uma lista em formato JSON de strings com os nomes dos cursos.
`;

    const response = await api.post(`?key=${KEY}`, {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ],
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.2
      }
    });

    const content = response.data.candidates[0].content.parts[0].text;
    return JSON.parse(content);
  } catch (error) {
    console.error("Erro ao buscar recomendações de cursos:", error);
    return [];
  }
};

// Service para análise de mercado de trabalho por área
export const getMarketAnalysis = async (area: string): Promise<string> => {
  try {
    const prompt = `
Faça uma análise concisa do mercado de trabalho atual para a área "${area}".
Inclua:
- Demanda atual
- Faixa salarial média
- Principais oportunidades
- Tendências futuras

Responda em um parágrafo de máximo 200 palavras.
`;

    const response = await api.post(`?key=${KEY}`, {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ],
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.4
      }
    });

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Erro ao analisar mercado de trabalho:", error);
    return "Análise de mercado temporariamente indisponível.";
  }
};

// Service legado mantido para compatibilidade
export const getAnalytics = async (text: string) => {
  try {
    const response = await api.post(`?key=${KEY}`, {
      contents: [
        {
          parts: [
            {
              text: text
            }
          ]
        }
      ],
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.2,
        topP: 0.8,
        topK: 40
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching analytics:", error);
    throw error;
  }
};

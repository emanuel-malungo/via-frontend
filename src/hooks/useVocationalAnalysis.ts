import { useState } from 'react';
import { 
  analyzeVocationalProfile, 
  getCourseRecommendations, 
  getMarketAnalysis,
  VocationalAnalysis 
} from '@/services/analytics.service';
import { QuizAnswer, AREAS_VOCACIONAIS } from '@/types/quiz.types';

export const useVocationalAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<VocationalAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeProfile = async (answers: QuizAnswer[]) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await analyzeVocationalProfile(answers);
      setAnalysis(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro na análise';
      setError(errorMessage);
      console.error('Erro na análise vocacional:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getRecommendations = async (area: string) => {
    try {
      return await getCourseRecommendations(area);
    } catch (err) {
      console.error('Erro ao buscar recomendações:', err);
      return [];
    }
  };

  const getMarketInfo = async (area: string) => {
    try {
      return await getMarketAnalysis(area);
    } catch (err) {
      console.error('Erro ao buscar informações de mercado:', err);
      return 'Informações de mercado temporariamente indisponíveis.';
    }
  };

  const calculateBasicResult = (answers: QuizAnswer[]) => {
    const scores = {
      tecnologia: 0,
      saude: 0,
      negocios: 0,
      arte: 0,
    };

    answers.forEach((answer) => {
      if (answer.area in scores) {
        scores[answer.area as keyof typeof scores] += answer.pontos;
      }
    });

    const maxScore = Math.max(...Object.values(scores));
    const topArea = Object.keys(scores).find(
      (area) => scores[area as keyof typeof scores] === maxScore
    ) as keyof typeof scores;

    return {
      area: topArea,
      areaName: AREAS_VOCACIONAIS[topArea],
      score: maxScore,
      allScores: scores,
      percentage: Math.round((maxScore / (answers.length * 3)) * 100)
    };
  };

  return {
    isLoading,
    analysis,
    error,
    analyzeProfile,
    getRecommendations,
    getMarketInfo,
    calculateBasicResult,
    clearError: () => setError(null),
    clearAnalysis: () => setAnalysis(null)
  };
};

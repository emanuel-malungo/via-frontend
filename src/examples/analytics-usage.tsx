// Exemplo de uso do Analytics Service na aplicação VIA

import { useVocationalAnalysis } from '@/hooks/useVocationalAnalysis';
import { QuizAnswer } from '@/types/quiz.types';

// Exemplo de como usar o hook em um componente
export const ExampleUsage = () => {
  const {
    isLoading,
    analysis,
    error,
    analyzeProfile,
    getRecommendations,
    getMarketInfo,
    calculateBasicResult
  } = useVocationalAnalysis();

  // Exemplo de respostas do quiz
  const exampleAnswers: QuizAnswer[] = [
    {
      pergunta: "Qual área mais desperta seu interesse?",
      resposta: "Tecnologia e Inovação",
      area: "tecnologia",
      pontos: 3
    },
    {
      pergunta: "Como você prefere trabalhar?",
      resposta: "Individualmente",
      area: "tecnologia",
      pontos: 2
    },
    {
      pergunta: "Que tipo de ambiente de trabalho você prefere?",
      resposta: "Home office",
      area: "tecnologia",
      pontos: 1
    },
    {
      pergunta: "Qual seu nível de formação desejado?",
      resposta: "Curso Técnico",
      area: "tecnologia",
      pontos: 1
    }
  ];

  const handleAnalyze = async () => {
    // Análise básica (local)
    const basicResult = calculateBasicResult(exampleAnswers);
    console.log('Resultado básico:', basicResult);

    // Análise detalhada com IA
    const detailedAnalysis = await analyzeProfile(exampleAnswers);
    if (detailedAnalysis) {
      console.log('Análise detalhada:', detailedAnalysis);
      
      // Buscar recomendações de cursos
      const courses = await getRecommendations(detailedAnalysis.area_principal);
      console.log('Cursos recomendados:', courses);
      
      // Buscar informações de mercado
      const marketInfo = await getMarketInfo(detailedAnalysis.area_principal);
      console.log('Informações de mercado:', marketInfo);
    }
  };

  return (
    <div>
      <button onClick={handleAnalyze} disabled={isLoading}>
        {isLoading ? 'Analisando...' : 'Analisar Perfil'}
      </button>
      
      {error && <p>Erro: {error}</p>}
      
      {analysis && (
        <div>
          <h3>Análise Completa:</h3>
          <p>Área principal: {analysis.area_principal}</p>
          <p>Compatibilidade: {analysis.compatibilidade}%</p>
          <p>Pontos fortes: {analysis.pontos_fortes.join(', ')}</p>
          {/* Renderizar outros dados... */}
        </div>
      )}
    </div>
  );
};

/*
Funcionalidades disponíveis:

1. analyzeVocationalProfile(respostas): Análise completa com IA
2. getCourseRecommendations(area): Lista de cursos recomendados
3. getMarketAnalysis(area): Análise do mercado de trabalho
4. calculateBasicResult(answers): Cálculo local dos resultados
5. Hook useVocationalAnalysis: Gerenciamento de estado completo

Integração sugerida no quiz:
- Usar calculateBasicResult para resultado imediato
- Usar analyzeVocationalProfile para análise detalhada opcional
- Mostrar recomendações de cursos e mercado de trabalho
*/

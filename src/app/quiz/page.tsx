"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/page-layout";
import { GradientTitle } from "@/components/ui/gradient-title";
import { DecorativeIcon } from "@/components/ui/decorative/decorative-icon";
import { ClipboardList, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useVocationalAnalysis } from '@/hooks/useVocationalAnalysis';
import { QuizAnswer, Question, Response } from '@/types/quiz.types';
import { useRouter } from "next/navigation";

const questions: Question[] = [
  {
    id: 1,
    texto: "Qual área mais desperta seu interesse?",
  },
  {
    id: 2,
    texto: "Como você prefere trabalhar?",
  },
  {
    id: 3,
    texto: "Que tipo de ambiente de trabalho você prefere?",
  },
  {
    id: 4,
    texto: "Qual seu nível de formação desejado?",
  },
];

const responses: Response[] = [
  // Pergunta 1
  {
    id: 1,
    pergunta_id: 1,
    texto: "Tecnologia e Inovação",
    area: "tecnologia",
    pontos: 3,
  },
  {
    id: 2,
    pergunta_id: 1,
    texto: "Saúde e Bem-estar",
    area: "saude",
    pontos: 3,
  },
  {
    id: 3,
    pergunta_id: 1,
    texto: "Negócios e Gestão",
    area: "negocios",
    pontos: 3,
  },
  { id: 4, pergunta_id: 1, texto: "Arte e Design", area: "arte", pontos: 3 },

  // Pergunta 2
  { id: 5, pergunta_id: 2, texto: "Em equipe", area: "negocios", pontos: 2 },
  {
    id: 6,
    pergunta_id: 2,
    texto: "Individualmente",
    area: "tecnologia",
    pontos: 2,
  },
  {
    id: 7,
    pergunta_id: 2,
    texto: "Ajudando pessoas",
    area: "saude",
    pontos: 2,
  },
  { id: 8, pergunta_id: 2, texto: "Criando coisas", area: "arte", pontos: 2 },

  // Pergunta 3
  {
    id: 9,
    pergunta_id: 3,
    texto: "Escritório corporativo",
    area: "negocios",
    pontos: 1,
  },
  {
    id: 10,
    pergunta_id: 3,
    texto: "Home office",
    area: "tecnologia",
    pontos: 1,
  },
  {
    id: 11,
    pergunta_id: 3,
    texto: "Hospital/Clínica",
    area: "saude",
    pontos: 1,
  },
  {
    id: 12,
    pergunta_id: 3,
    texto: "Estúdio criativo",
    area: "arte",
    pontos: 1,
  },

  // Pergunta 4
  {
    id: 13,
    pergunta_id: 4,
    texto: "Curso Técnico",
    area: "tecnologia",
    pontos: 1,
  },
  {
    id: 14,
    pergunta_id: 4,
    texto: "Ensino Superior",
    area: "negocios",
    pontos: 1,
  },
  { id: 15, pergunta_id: 4, texto: "Pós-graduação", area: "saude", pontos: 1 },
  { id: 16, pergunta_id: 4, texto: "Qualquer nível", area: "arte", pontos: 1 },
];

export default function Quiz() {
  const router = useRouter();
  const { analyzeProfile, isLoading, analysis, error, calculateBasicResult } = useVocationalAnalysis();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Response[]>([]);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showBasicResult, setShowBasicResult] = useState<boolean>(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQuestionData = questions[currentQuestion];
  const currentResponses = responses.filter(
    (response) => response.pergunta_id === currentQuestionData?.id
  );

  const handleResponseSelect = (response: Response) => {
    setSelectedResponse(response.id);
  };

  const handleNext = async () => {
    if (selectedResponse) {
      const response = responses.find((r) => r.id === selectedResponse);
      if (response) {
        const newAnswers = [...answers, response];
        setAnswers(newAnswers);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedResponse(null);
      } else {
        setIsCompleted(true);
        
        // Iniciar análise inteligente
        const quizAnswers: QuizAnswer[] = [...answers, response!].map((answer, index) => ({
          pergunta: questions.find(q => q.id === answer.pergunta_id)?.texto || `Pergunta ${index + 1}`,
          resposta: answer.texto,
          area: answer.area,
          pontos: answer.pontos
        }));

        try {
          await analyzeProfile(quizAnswers);
        } catch (error) {
          console.error('Erro na análise:', error);
          setShowBasicResult(true);
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedResponse(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedResponse(null);
    setIsCompleted(false);
    setShowBasicResult(false);
  };

  if (isCompleted) {
    // Mostrar loading enquanto a análise está sendo processada
    if (isLoading) {
      return (
        <PageLayout>
          <div className="space-y-8">
            <DecorativeIcon 
              icon={ClipboardList} 
              decorationIcon={CheckCircle}
              size="lg"
            />

            <div className="space-y-4">
              <GradientTitle size="lg">
                Analisando seu Perfil...
              </GradientTitle>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Nossa IA está processando suas respostas para gerar uma análise personalizada.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          </div>
        </PageLayout>
      );
    }

    // Mostrar resultado da análise inteligente ou erro
    if (analysis || error || showBasicResult) {
      const basicResult = showBasicResult || error ? (() => {
        const quizAnswers: QuizAnswer[] = answers.map((answer, index) => ({
          pergunta: questions.find(q => q.id === answer.pergunta_id)?.texto || `Pergunta ${index + 1}`,
          resposta: answer.texto,
          area: answer.area,
          pontos: answer.pontos
        }));
        return calculateBasicResult(quizAnswers);
      })() : null;

      return (
        <PageLayout>
          <div className="space-y-8">
            <DecorativeIcon 
              icon={CheckCircle} 
              decorationIcon={ClipboardList}
              size="lg"
            />

            <div className="space-y-4">
              <GradientTitle size="lg">
                Sua Análise Vocacional
              </GradientTitle>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                {analysis ? 
                  "Baseado em suas respostas, nossa IA gerou uma análise personalizada para você:" :
                  "Com base nas suas respostas, aqui está sua análise vocacional:"
                }
              </p>
            </div>

            {/* Resultado principal */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {analysis?.area_principal || basicResult?.areaName}
                </CardTitle>
                {analysis?.compatibilidade && (
                  <p className="text-center text-muted-foreground">
                    {analysis.compatibilidade}% de compatibilidade
                  </p>
                )}
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Pontos Fortes */}
                {analysis?.pontos_fortes && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">🌟 Seus Pontos Fortes</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {analysis.pontos_fortes.map((ponto, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-sm">{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cursos Recomendados */}
                {analysis?.cursos_recomendados && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">🎓 Cursos Recomendados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {analysis.cursos_recomendados.map((curso, index) => (
                        <div key={index} className="bg-muted/50 p-3 rounded-lg">
                          <span className="text-sm">{curso}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Perspectivas de Carreira */}
                {analysis?.perspectivas_carreira && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">💼 Perspectivas de Carreira</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {analysis.perspectivas_carreira}
                    </p>
                  </div>
                )}

                {/* Dicas de Desenvolvimento */}
                {analysis?.dicas_desenvolvimento && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">💡 Dicas para Desenvolvimento</h3>
                    <ul className="space-y-2">
                      {analysis.dicas_desenvolvimento.map((dica, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-sm">{dica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Áreas de Desenvolvimento */}
                {analysis?.areas_desenvolvimento && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">🚀 Áreas para Desenvolver</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.areas_desenvolvimento.map((area, index) => (
                        <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resultado básico em caso de erro */}
                {(error || showBasicResult) && basicResult && (
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Esta área se alinha com suas preferências e interesses.
                    </p>
                    {error && (
                      <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                        A análise detalhada não está disponível no momento, mas aqui está seu resultado baseado nas respostas.
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRestart} variant="outline" size="lg">
                Refazer Questionário
              </Button>
              <Button onClick={() => router.push("/")} size="lg">
                Voltar ao Início
              </Button>
            </div>
          </div>
        </PageLayout>
      );
    }

    return null;
  }

  return (
    <PageLayout>
      <div className="space-y-8">
        <DecorativeIcon 
          icon={ClipboardList} 
          decorationIcon={CheckCircle}
          size="lg"
        />

        <div className="space-y-4">
          <GradientTitle size="md">
            Questionário Vocacional
          </GradientTitle>

          <p className="text-muted-foreground">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>

          <div className="w-full max-w-md mx-auto">
            <Progress value={progress} className="h-3" />
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              {currentQuestionData.texto}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {currentResponses.map((response) => (
                <button
                  key={response.id}
                  onClick={() => handleResponseSelect(response)}
                  className={`p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                    selectedResponse === response.id
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-medium">{response.texto}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between max-w-2xl mx-auto">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            size="lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <Button
            onClick={handleNext}
            disabled={!selectedResponse}
            size="lg"
          >
            {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}

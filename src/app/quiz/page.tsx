"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/page-layout";
import { GradientTitle } from "@/components/ui/gradient-title";
import { DecorativeIcon } from "@/components/ui/decorative/decorative-icon";
import { ClipboardList, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  texto: string;
}

interface Response {
  id: number;
  pergunta_id: number;
  texto: string;
  area: string;
  pontos: number;
}

interface Scores {
  tecnologia: number;
  saude: number;
  negocios: number;
  arte: number;
}

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
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Response[]>([]);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQuestionData = questions[currentQuestion];
  const currentResponses = responses.filter(
    (response) => response.pergunta_id === currentQuestionData?.id
  );

  const handleResponseSelect = (response: Response) => {
    setSelectedResponse(response.id);
  };

  const handleNext = () => {
    if (selectedResponse) {
      const response = responses.find((r) => r.id === selectedResponse);
      if (response) {
        setAnswers([...answers, response]);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedResponse(null);
      } else {
        setIsCompleted(true);
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

  const calculateResults = (): string => {
    const scores: Scores = {
      tecnologia: 0,
      saude: 0,
      negocios: 0,
      arte: 0,
    };

    answers.forEach((answer) => {
      scores[answer.area as keyof Scores] += answer.pontos;
    });

    const maxScore = Math.max(...Object.values(scores));
    const topArea = Object.keys(scores).find(
      (area) => scores[area as keyof Scores] === maxScore
    ) as keyof Scores;

    const areaNames = {
      tecnologia: "Tecnologia e Inovação",
      saude: "Saúde e Bem-estar",
      negocios: "Negócios e Gestão",
      arte: "Arte e Design",
    };

    return areaNames[topArea];
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedResponse(null);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const result = calculateResults();

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
              Questionário Concluído!
            </GradientTitle>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Com base nas suas respostas, a área mais indicada para você é:
            </p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardContent className="text-center py-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                {result}
              </h2>
              <p className="text-muted-foreground">
                Esta área se alinha com suas preferências e interesses.
              </p>
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

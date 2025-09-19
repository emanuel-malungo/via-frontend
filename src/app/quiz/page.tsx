"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const questions = [
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

const responses = [
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

  const [step, setStep] = useState<number>(0);

  return (
    <div>
      <h1>Questionário</h1>
      <p>Bem-vindo ao questionário! Por favor, responda as perguntas abaixo:</p>
    </div>
  );
}

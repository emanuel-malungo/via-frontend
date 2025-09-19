# VIA - Sistema de Orientação Vocacional 🎓

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-000000?style=flat&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

**VIA (Vocational Intelligence Assistant)** é uma aplicação web inteligente que ajuda estudantes a descobrirem o curso ideal para seu futuro profissional através de um questionário personalizado e análise por IA.

## 🌟 Características Principais

- **Questionário Inteligente**: Sistema de perguntas personalizadas para análise vocacional
- **Análise por IA**: Integração com Google Gemini AI para análises detalhadas e personalizadas
- **Interface Responsiva**: Design moderno e adaptável para todos os dispositivos
- **Recomendações Personalizadas**: Sugestões de cursos baseadas no perfil do usuário
- **Análise de Mercado**: Informações sobre perspectivas de carreira e mercado de trabalho
- **Performance Otimizada**: Construído com Next.js 15 e Turbopack para máxima velocidade

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.3** - Framework React com Server-Side Rendering
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4.0** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e customizáveis

### UI/UX
- **Lucide React** - Biblioteca de ícones moderna
- **class-variance-authority** - Gerenciamento de variantes de componentes
- **tailwind-merge** - Merge inteligente de classes Tailwind

### Integrações
- **Google Gemini AI** - Análise inteligente de perfil vocacional
- **Vercel Analytics** - Análise de performance e uso
- **Axios** - Cliente HTTP para requisições à API

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm
- Chave da API do Google Gemini

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/emanuel-malungo/via-frontend.git
cd via-frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` e adicione sua chave da API do Gemini:
```env
NEXT_PUBLIC_GEMINI_API_KEY=sua_chave_api_aqui
```

4. **Execute o projeto em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
src/
├── app/                     # App Router do Next.js
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── quiz/               # Página do questionário
├── components/             # Componentes reutilizáveis
│   ├── ui/                 # Componentes base (Button, Card, etc.)
│   ├── home/               # Componentes da página inicial
│   └── layout/             # Componentes de layout
├── services/               # Serviços e integrações API
├── hooks/                  # Custom React Hooks
├── types/                  # Definições de tipos TypeScript
├── config/                 # Configurações da aplicação
├── utils/                  # Funções utilitárias
└── assets/                 # Recursos estáticos
```

## 🎯 Funcionalidades

### Questionário Vocacional
- **4 perguntas estratégicas** cobrindo diferentes aspectos vocacionais
- **Sistema de pontuação** baseado em áreas de interesse
- **Interface progressiva** com indicador visual de progresso
- **Navegação bidirecional** (anterior/próxima)

### Áreas Vocacionais
1. **Tecnologia e Inovação** 💻
   - Desenvolvimento de software
   - Inovação digital
   - Soluções tecnológicas

2. **Saúde e Bem-estar** 🏥
   - Medicina e enfermagem
   - Cuidados com a saúde
   - Bem-estar geral

3. **Negócios e Gestão** 💼
   - Administração empresarial
   - Gestão e liderança
   - Empreendedorismo

4. **Arte e Design** 🎨
   - Design visual
   - Expressão artística
   - Comunicação criativa

### Análise Inteligente
- **Perfil personalizado** baseado nas respostas
- **Pontos fortes identificados**
- **Áreas de desenvolvimento sugeridas**
- **Cursos recomendados**
- **Perspectivas de carreira**
- **Dicas práticas de desenvolvimento**

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Executa em modo desenvolvimento com Turbopack
npm run build        # Gera build de produção
npm run start        # Executa build de produção
npm run lint         # Executa verificação de código
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure a variável de ambiente `NEXT_PUBLIC_GEMINI_API_KEY`
3. Deploy automático!

### Outras plataformas
```bash
npm run build
npm run start
```

## 🔑 Configuração da API

### Google Gemini AI
1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crie uma nova chave API
3. Adicione a chave no arquivo `.env.local`

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use TypeScript para tipagem estática
- Siga as convenções do ESLint configurado
- Mantenha componentes pequenos e reutilizáveis
- Documente funções complexas

## 📋 Roadmap

- [ ] **Sistema de usuários** - Login e histórico de testes
- [ ] **Mais perguntas** - Questionário expandido
- [ ] **Relatórios em PDF** - Exportação dos resultados
- [ ] **Integração com universidades** - Dados reais de cursos
- [ ] **Comparação de perfis** - Análise comparativa
- [ ] **App mobile** - Versão React Native

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Emanuel Malungo**
- GitHub: [@emanuel-malungo](https://github.com/emanuel-malungo)
- LinkedIn: [Emanuel Malungo](https://linkedin.com/in/emanuel-malungo)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente framework
- [Tailwind CSS](https://tailwindcss.com/) pelo sistema de design
- [Radix UI](https://www.radix-ui.com/) pelos componentes acessíveis
- [Google AI](https://ai.google.dev/) pela API Gemini
- [Lucide](https://lucide.dev/) pelos ícones

---

<div align="center">
  <p>Feito com ❤️ para ajudar estudantes a encontrarem seu caminho profissional</p>
  <p>© 2025 VIA - Orientação Vocacional</p>
</div>
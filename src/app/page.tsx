import Image from "next/image";
import icon from "@/assets/images/iconVIA.png";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Sparkles,
  Target,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl w-full text-center space-y-12">
          {/* Hero section */}
          <div className="space-y-8">
            {/* Logo and icon section */}
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-14 h-14 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-yellow-600" />
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src={icon}
                alt="VIA Logo"
                className="mx-auto w-32 h-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
              />

              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent leading-tight">
                  Orientação Vocacional
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Descubra o curso ideal para seu futuro profissional através do
                nosso questionário personalizado e inteligente.
              </p>
            </div>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Personalizado
              </h3>
              <p className="text-sm text-muted-foreground">
                Questionário adaptado ao seu perfil
              </p>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Inteligente</h3>
              <p className="text-sm text-muted-foreground">
                Análise baseada em dados
              </p>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Profissional</h3>
              <p className="text-sm text-muted-foreground">
                Orientação especializada
              </p>
            </div>
          </div>

          {/* CTA section */}
          <div className="space-y-6">
            <Button
              size="lg"
              className="group relative w-full md:w-auto px-12 h-16 text-lg font-semibold rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/25 transition-all duration-300 hover:shadow-3xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Começar Questionário
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <p className="text-sm text-muted-foreground">
              ⚡ Leva apenas 5-10 minutos para completar
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-purple-600"></div>
    </div>
  );
}

import icon from "@/assets/images/iconVIA.png";
import { 
  PageLayout, 
  HeroSection, 
  FeaturesSection, 
  CTASection 
} from "@/components";

export default function Home() {
  const handleStartQuiz = () => {
    // Aqui você pode adicionar a lógica para navegar para o questionário
    console.log("Iniciando questionário...");
  };

  return (
    <PageLayout>
      <HeroSection
        logoSrc={icon}
        logoAlt="VIA Logo"
        title="Orientação Vocacional"
        description="Descubra o curso ideal para seu futuro profissional através do nosso questionário personalizado e inteligente."
      />

      <FeaturesSection />

      <CTASection
        buttonText="Começar Questionário"
        onButtonClick={handleStartQuiz}
      />
    </PageLayout>
  );
}

import icon from "@/assets/images/iconVIA.png";
import { 
  PageLayout, 
  HeroSection, 
  FeaturesSection, 
  CTASection 
} from "@/components";

export default function Home() {
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
        href="/quiz"
      />
    </PageLayout>
  );
}

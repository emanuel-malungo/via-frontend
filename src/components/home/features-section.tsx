import { Target, Lightbulb, Briefcase, LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

interface FeaturesSectionProps {
  className?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: Target,
    title: "Personalizado",
    description: "Questionário adaptado ao seu perfil",
    iconColor: "from-blue-500 to-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Inteligente",
    description: "Análise baseada em dados",
    iconColor: "from-purple-500 to-purple-600"
  },
  {
    icon: Briefcase,
    title: "Profissional",
    description: "Orientação especializada",
    iconColor: "from-green-500 to-green-600"
  }
];

export function FeaturesSection({ 
  className = "", 
  features = defaultFeatures 
}: FeaturesSectionProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto ${className}`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          iconColor={feature.iconColor}
        />
      ))}
    </div>
  );
}

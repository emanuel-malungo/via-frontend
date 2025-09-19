import Image, { StaticImageData } from "next/image";
import { GraduationCap, Sparkles } from "lucide-react";
import { DecorativeIcon } from "@/components/ui/decorative/decorative-icon";
import { GradientTitle } from "@/components/ui/gradient-title";

interface HeroSectionProps {
  logoSrc: string | StaticImageData;
  logoAlt: string;
  title: string;
  description: string;
  className?: string;
}

export function HeroSection({ 
  logoSrc, 
  logoAlt, 
  title, 
  description, 
  className = "" 
}: HeroSectionProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      <DecorativeIcon 
        icon={GraduationCap} 
        decorationIcon={Sparkles}
        size="lg"
      />

      <div className="space-y-4">
        <Image
          src={logoSrc}
          alt={logoAlt}
          className="mx-auto w-32 h-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
        />

        <GradientTitle size="lg">
          {title}
        </GradientTitle>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

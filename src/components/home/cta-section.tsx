"use client";

import { CTAButton } from "@/components/ui/cta-button";
import { useRouter } from "next/navigation";

interface CTASectionProps {
  buttonText: string;
  helperText?: string;
  onButtonClick?: () => void;
  href?: string;
  className?: string;
}

export function CTASection({ 
  buttonText, 
  helperText = "⚡ Leva apenas 5-10 minutos para completar",
  onButtonClick,
  href,
  className = "" 
}: CTASectionProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onButtonClick) return onButtonClick();
    if (href) return router.push(href);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <CTAButton onClick={handleClick}>
        {buttonText}
      </CTAButton>

      {helperText && (
        <p className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
    </div>
  );
}

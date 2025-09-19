import { CTAButton } from "@/components/ui/cta-button";

interface CTASectionProps {
  buttonText: string;
  helperText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function CTASection({ 
  buttonText, 
  helperText = "⚡ Leva apenas 5-10 minutos para completar",
  onButtonClick,
  className = "" 
}: CTASectionProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <CTAButton onClick={onButtonClick}>
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

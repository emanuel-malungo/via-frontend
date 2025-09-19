import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
}

export function CTAButton({ 
  children, 
  onClick, 
  className = "",
  showArrow = true,
  fullWidth = false 
}: CTAButtonProps) {
  return (
    <Button
      size="lg"
      onClick={onClick}
      className={`group relative ${fullWidth ? 'w-full' : 'w-full md:w-auto'} px-12 h-16 text-lg font-semibold rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/25 transition-all duration-300 hover:shadow-3xl hover:shadow-primary/30 hover:-translate-y-1 ${className}`}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && (
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
}

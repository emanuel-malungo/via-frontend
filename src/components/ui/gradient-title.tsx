interface GradientTitleProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function GradientTitle({ children, size = "lg", className = "" }: GradientTitleProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl"
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <h1 className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent leading-tight`}>
        {children}
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
    </div>
  );
}

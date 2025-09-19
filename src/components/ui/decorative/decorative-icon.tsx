import { LucideIcon } from "lucide-react";

interface DecorativeIconProps {
  icon: LucideIcon;
  decorationIcon?: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DecorativeIcon({ 
  icon: Icon, 
  decorationIcon: DecorationIcon,
  size = "lg",
  className = "" 
}: DecorativeIconProps) {
  const sizeClasses = {
    sm: { container: "w-16 h-16", icon: "w-8 h-8", decoration: "w-6 h-6" },
    md: { container: "w-20 h-20", icon: "w-10 h-10", decoration: "w-6 h-6" },
    lg: { container: "w-28 h-28", icon: "w-14 h-14", decoration: "w-8 h-8" }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`relative ${className}`}>
      <div className={`${currentSize.container} bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-300`}>
        <Icon className={`${currentSize.icon} text-primary-foreground`} />
      </div>
      {DecorationIcon && (
        <div className={`absolute -top-2 -right-2 ${currentSize.decoration} bg-yellow-400 rounded-full flex items-center justify-center shadow-lg`}>
          <DecorationIcon className="w-4 h-4 text-yellow-600" />
        </div>
      )}
    </div>
  );
}

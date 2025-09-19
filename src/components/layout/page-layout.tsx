import { BackgroundElements } from "@/components/ui/decorative/background-elements";

interface PageLayoutProps {
  children: React.ReactNode;
  showBottomBar?: boolean;
  className?: string;
}

export function PageLayout({ 
  children, 
  showBottomBar = true, 
  className = "" 
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden ${className}`}>
      <BackgroundElements />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl w-full text-center space-y-12">
          {children}
        </div>
      </div>

      {showBottomBar && (
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-purple-600"></div>
      )}
    </div>
  );
}

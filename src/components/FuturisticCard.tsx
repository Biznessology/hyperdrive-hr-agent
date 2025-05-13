
import React from 'react';
import { cn } from "@/lib/utils";

interface FuturisticCardProps {
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
  children: React.ReactNode;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  title, 
  icon, 
  className, 
  glowEffect = false,
  children 
}) => {
  return (
    <div 
      className={cn(
        "bg-card/80 backdrop-blur-sm rounded-lg border border-border p-4",
        "transition-all duration-300 relative overflow-hidden",
        glowEffect && "before:absolute before:inset-0 before:bg-glow-bg before:opacity-50",
        className
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
          {icon && <div className="text-futuristic-primary">{icon}</div>}
          {title && <h3 className="text-lg font-semibold text-futuristic-primary text-glow">{title}</h3>}
        </div>
      )}
      <div>
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;

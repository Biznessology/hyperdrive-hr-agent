
import React from 'react';
import { cn } from "@/lib/utils";

interface HexagonIconProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  status?: 'default' | 'active' | 'inactive';
  pulse?: boolean;
  className?: string;
}

const HexagonIcon: React.FC<HexagonIconProps> = ({ 
  icon, 
  size = 'md', 
  status = 'default',
  pulse = false,
  className
}) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20"
  };

  const statusClasses = {
    default: "bg-muted text-futuristic-primary border-futuristic-primary/30",
    active: "bg-futuristic-primary/20 text-futuristic-primary border-futuristic-primary",
    inactive: "bg-muted/50 text-muted-foreground border-muted-foreground/30"
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center border",
          "clip-path-hexagon transition-all duration-300",
          statusClasses[status],
          pulse && "animate-pulse-glow"
        )}
        style={{ 
          clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"
        }}
      />
      <div className="relative z-10">
        {icon}
      </div>
    </div>
  );
};

export default HexagonIcon;

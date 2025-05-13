
import React from 'react';
import { cn } from "@/lib/utils";

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ 
  children, 
  className,
  animate = true
}) => {
  return (
    <div className={cn(
      "relative min-h-screen w-full overflow-hidden bg-futuristic-dark",
      className
    )}>
      {/* Grid background */}
      <div className="absolute inset-0 bg-mesh opacity-10"></div>
      
      {/* Glowing orbs */}
      {animate && (
        <>
          <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-futuristic-primary/10 filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-futuristic-accent/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </>
      )}
      
      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-futuristic-primary to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-futuristic-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-futuristic-primary to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-futuristic-primary to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;

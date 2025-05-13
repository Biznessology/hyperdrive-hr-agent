
import React, { useState, useEffect } from 'react';
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import FuturisticCard from './FuturisticCard';

interface FlowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'default' | 'active' | 'completed';
}

interface ProcessFlowProps {
  steps: FlowStep[];
  className?: string;
  activeStep?: number;
  onStepClick?: (step: FlowStep) => void;
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ 
  steps, 
  className,
  activeStep = 1,
  onStepClick
}) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [animatingStep, setAnimatingStep] = useState<number | null>(null);

  // Create a subtle animation effect on load
  useEffect(() => {
    let currentStep = 1;
    const interval = setInterval(() => {
      setAnimatingStep(currentStep);
      currentStep = currentStep < steps.length ? currentStep + 1 : 1;
      
      // Clear animation after short delay
      setTimeout(() => setAnimatingStep(null), 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className={cn("relative", className)}>
      {/* Connection lines in background */}
      <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-futuristic-primary/10 via-futuristic-primary/50 to-futuristic-primary/10 z-0"></div>
      
      <div className="relative z-10 flex flex-col gap-8">
        {steps.map((step, index) => {
          const isActive = step.id === activeStep;
          const isHovered = step.id === hoveredStep;
          const isAnimating = step.id === animatingStep;
          const isCompleted = step.status === 'completed' || step.id < activeStep;

          return (
            <div 
              key={step.id}
              className={cn(
                "flex items-start gap-4 transition-all duration-300",
                "opacity-70 hover:opacity-100",
                (isActive || isAnimating) && "opacity-100",
                isActive && "scale-105",
                isAnimating && "animate-pulse"
              )}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onStepClick && onStepClick(step)}
            >
              <div className="flex flex-col items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300",
                    isActive ? "bg-futuristic-primary border-white text-white scale-110 shadow-lg shadow-futuristic-primary/50" : 
                    isCompleted ? "bg-futuristic-success border-futuristic-success/50 text-white" : 
                    "bg-muted border-muted-foreground/50 text-muted-foreground"
                  )}
                >
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "w-0.5 h-12 mt-1 transition-all duration-500",
                      isCompleted ? "bg-gradient-to-b from-futuristic-success via-futuristic-success to-muted-foreground/30" : "bg-muted-foreground/30"
                    )}
                  />
                )}
              </div>

              <div 
                className={cn(
                  "flex-1 rounded-lg transition-all duration-300 p-3",
                  isActive && "translate-x-2 bg-futuristic-primary/5 border border-futuristic-primary/20 rounded-lg",
                  isHovered && !isActive && "bg-muted/20 rounded-lg"
                )}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className={cn(
                    "text-lg font-semibold transition-all duration-300",
                    isActive ? "text-futuristic-primary text-glow scale-105" : 
                    isHovered ? "text-futuristic-primary" : "text-white"
                  )}>
                    {step.title}
                  </span>
                  <div className={cn(
                    "text-futuristic-primary transition-all",
                    isActive ? "opacity-100 scale-110" : 
                    isHovered ? "opacity-100" : "opacity-50"
                  )}>
                    {step.icon}
                  </div>
                  {isCompleted && !isActive && (
                    <div className="ml-auto text-futuristic-success">
                      <Check size={16} />
                    </div>
                  )}
                </div>
                <p 
                  className={cn(
                    "text-sm text-muted-foreground transition-all duration-300",
                    (isActive || isHovered) && "text-gray-300"
                  )}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessFlow;

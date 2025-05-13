
import React, { useState } from 'react';
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

  return (
    <div className={cn("relative", className)}>
      <div className="relative z-10 flex flex-col gap-8">
        {steps.map((step, index) => {
          const isActive = step.id === activeStep;
          const isHovered = step.id === hoveredStep;
          const isCompleted = step.status === 'completed' || step.id < activeStep;

          return (
            <div 
              key={step.id}
              className={cn(
                "flex items-start gap-4 transition-all duration-300",
                "opacity-70 hover:opacity-100",
                isActive && "opacity-100 scale-105"
              )}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onStepClick && onStepClick(step)}
            >
              <div className="flex flex-col items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2",
                    isActive ? "bg-futuristic-primary border-white text-white" : 
                    isCompleted ? "bg-futuristic-success border-futuristic-success/50 text-white" : 
                    "bg-muted border-muted-foreground/50 text-muted-foreground"
                  )}
                >
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "w-0.5 h-12 mt-1",
                      isCompleted ? "bg-futuristic-success" : "bg-muted-foreground/30"
                    )}
                  />
                )}
              </div>

              <div 
                className={cn(
                  "flex-1 rounded-lg transition-all duration-300",
                  isActive && "translate-x-2"
                )}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className={cn(
                    "text-lg font-semibold",
                    isActive || isHovered ? "text-futuristic-primary text-glow" : "text-white"
                  )}>
                    {step.title}
                  </span>
                  <div className={cn(
                    "text-futuristic-primary transition-all",
                    isActive || isHovered ? "opacity-100" : "opacity-50"
                  )}>
                    {step.icon}
                  </div>
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


import React from 'react';
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change,
  icon,
  className 
}) => {
  const showTrend = typeof change !== 'undefined';
  const isPositive = change && change > 0;
  const trendColor = isPositive ? "text-futuristic-success" : "text-futuristic-error";
  
  return (
    <div 
      className={cn(
        "bg-card/80 backdrop-blur-sm rounded-lg border border-border p-4",
        "hover:border-futuristic-primary/50 transition-all duration-300",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <p className="text-2xl font-bold mt-1 text-white">{value}</p>
        </div>
        {icon && (
          <div className="text-futuristic-primary bg-futuristic-primary/10 p-2 rounded-md">
            {icon}
          </div>
        )}
      </div>
      
      {showTrend && (
        <div className={cn("flex items-center gap-1 mt-2 text-sm", trendColor)}>
          {isPositive ? (
            <>
              <TrendingUp size={16} />
              <span>+{Math.abs(change)}%</span>
            </>
          ) : (
            <>
              <TrendingDown size={16} />
              <span>-{Math.abs(change)}%</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MetricCard;

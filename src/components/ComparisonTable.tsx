
import React from 'react';
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  process: string;
  asIs: string;
  toBe: string;
  improvement?: string;
}

interface ComparisonTableProps {
  data: ComparisonItem[];
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data, className }) => {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border", className)}>
      <table className="w-full">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left text-sm font-medium text-futuristic-primary">Process</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white">As-Is</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-futuristic-primary">To-Be</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-futuristic-success">Improvement</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((item, index) => (
            <tr 
              key={index} 
              className={cn(
                "transition-colors",
                index % 2 === 0 ? 'bg-muted/30' : 'bg-transparent'
              )}
            >
              <td className="px-4 py-3 text-sm font-medium">{item.process}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{item.asIs}</td>
              <td className="px-4 py-3 text-sm text-futuristic-primary">{item.toBe}</td>
              <td className="px-4 py-3 text-sm text-futuristic-success">{item.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

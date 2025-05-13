
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface FuturisticTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

const FuturisticTabs: React.FC<FuturisticTabsProps> = ({ 
  tabs, 
  defaultTab, 
  onChange,
  className 
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  return (
    <div className={cn("flex", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "px-4 py-2 flex items-center gap-2 relative transition-all duration-300",
            "hover:text-futuristic-primary focus:outline-none",
            activeTab === tab.id
              ? "text-futuristic-primary font-medium"
              : "text-muted-foreground"
          )}
          onClick={() => handleTabChange(tab.id)}
        >
          {tab.icon && <span>{tab.icon}</span>}
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-futuristic-primary" />
          )}
        </button>
      ))}
    </div>
  );
};

export default FuturisticTabs;

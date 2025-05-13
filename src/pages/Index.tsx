import React, { useState, useEffect } from 'react';
import { 
  User, 
  Database, 
  Search, 
  Book, 
  BellRing, 
  CalendarCheck,
  LayoutDashboard,
  FileText,
  Users,
  UserCheck,
  Clock,
  BarChart,
  FileCheck,
  CheckCheck,
  CalendarCheck as CalendarCheckIcon
} from "lucide-react";

import FuturisticBackground from '@/components/FuturisticBackground';
import FuturisticCard from '@/components/FuturisticCard';
import ProcessFlow from '@/components/ProcessFlow';
import MetricCard from '@/components/MetricCard';
import FuturisticTabs from '@/components/FuturisticTabs';
import ComparisonTable from '@/components/ComparisonTable';
import CircularProgress from '@/components/CircularProgress';
import HexagonIcon from '@/components/HexagonIcon';

const SOLUTION_FLOW = [
  {
    id: 1,
    title: "Resume Ingestion Agent",
    description: "RPA bots scan configured portals, email inboxes, and job-post URLs to download new resumes automatically.",
    icon: <FileText size={18} />,
    status: 'completed' as const
  },
  {
    id: 2,
    title: "Resume Parsing & Matching Agent",
    description: "AI extracts structured fields (experience, skills, education) and computes a matching score versus the job description.",
    icon: <Search size={18} />,
    status: 'completed' as const
  },
  {
    id: 3,
    title: "Data Entry Agent",
    description: "High-confidence parsed data is auto-populated into the ATS; low-confidence fields flagged for human validation.",
    icon: <Database size={18} />,
    status: 'completed' as const
  },
  {
    id: 4,
    title: "Question Suggestion Agent",
    description: "Based on candidate profile and role type, AI proposes tailored screening questions for the HR initial call.",
    icon: <Book size={18} />,
    status: 'default' as const
  },
  {
    id: 5,
    title: "AI HR Calling Agent",
    description: "Conversational AI conducts the initial voice/video call to collect background details and basic assessments.",
    icon: <User size={18} />,
    status: 'default' as const
  },
  {
    id: 6,
    title: "Transcript Analysis Agent",
    description: "NLP analyzes the call transcript; applies scoring rules to either reject or advance the candidate.",
    icon: <FileCheck size={18} />,
    status: 'default' as const
  },
  {
    id: 7,
    title: "Internal Talent Matching Agent",
    description: "AI searches existing employee profiles for internal candidates matching open roles; suggests to HR.",
    icon: <Users size={18} />,
    status: 'default' as const
  },
  {
    id: 8,
    title: "Interview Scheduling Agent",
    description: "Upon selection of HR or internal interviewer, RPA schedules the technical interview, syncing calendars.",
    icon: <CalendarCheckIcon size={18} />,
    status: 'default' as const
  },
  {
    id: 9,
    title: "Interviewer Assistant Agent",
    description: "Provides customized question prompts and candidate insights to the technical interviewer just before the call.",
    icon: <UserCheck size={18} />,
    status: 'default' as const
  },
  {
    id: 10,
    title: "Offer/Rejection Agent",
    description: "Generates offer letters or rejection emails; sends via RPA with human-in-the-loop approval.",
    icon: <CheckCheck size={18} />,
    status: 'default' as const
  },
  {
    id: 11,
    title: "Reporting & Dashboarding Agent",
    description: "Aggregates metrics daily/weekly and updates a live dashboard.",
    icon: <BarChart size={18} />,
    status: 'default' as const
  }
];

const COMPARISON_DATA = [
  {
    process: "Resume Collection",
    asIs: "Manual download from multiple sources",
    toBe: "Automated ingestion from all sources"
  },
  {
    process: "Screening",
    asIs: "Manual reading and scoring",
    toBe: "AI-driven scoring and ranking"
  },
  {
    process: "Data Entry",
    asIs: "Manual entry into ATS fields",
    toBe: "Automated data extraction and entry"
  },
  {
    process: "Question Prep",
    asIs: "Generic templates or ad-hoc",
    toBe: "Dynamic, role-specific question generation"
  },
  {
    process: "Initial Call",
    asIs: "HR conducts call with manual notes",
    toBe: "AI agent conducts structured call"
  },
  {
    process: "Evaluation",
    asIs: "Manual review of notes/resumes",
    toBe: "NLP analysis with scoring algorithm"
  },
  {
    process: "Internal Search",
    asIs: "Separate process or overlooked",
    toBe: "Automatic matching with employee profiles"
  },
  {
    process: "Scheduling",
    asIs: "Email threads and manual invites",
    toBe: "Automated calendar syncing and invitations"
  },
  {
    process: "Interviewer Prep",
    asIs: "Self-directed research on candidate",
    toBe: "AI-generated briefing pack and questions"
  },
  {
    process: "Communications",
    asIs: "Manual email drafting and sending",
    toBe: "Auto-generated with one-click approval"
  },
  {
    process: "Analytics",
    asIs: "Manual reports from multiple systems",
    toBe: "Real-time dashboards with AI insights"
  }
];

const Index = () => {
  const [activeStep, setActiveStep] = useState(3);
  const [activeTab, setActiveTab] = useState('solution');
  const [animatedValues, setAnimatedValues] = useState({
    timeToHire: 0,
    costReduction: 0,
    hiringAccuracy: 0,
    candidateSatisfaction: 0
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        timeToHire: 65,
        costReduction: 42,
        hiringAccuracy: 78,
        candidateSatisfaction: 89
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleNextStep = () => {
    setActiveStep(prev => (prev < SOLUTION_FLOW.length ? prev + 1 : prev));
  };

  // Create an animation effect where the active step pulses and glows
  useEffect(() => {
    const interval = setInterval(() => {
      const nextStep = activeStep < SOLUTION_FLOW.length ? activeStep + 1 : 1;
      setActiveStep(nextStep);
    }, 5000); // Auto-advance every 5 seconds
    
    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <FuturisticBackground>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-2 px-4 rounded-full bg-futuristic-primary/20 text-futuristic-primary mb-4">
            Next-Generation Recruitment Automation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
            HR AI Agent <span className="text-futuristic-primary">Ecosystem</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming manual recruitment workflows into intelligent, automated processes with AI-driven solutions
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-futuristic-primary">01</span> Problem Statement
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FuturisticCard icon={<FileText />} title="Fragmented Sourcing">
              <p className="text-muted-foreground">
                Resumes come from multiple channels resulting in scattered data and manual collation.
              </p>
            </FuturisticCard>
            
            <FuturisticCard icon={<Search />} title="Manual Screening">
              <p className="text-muted-foreground">
                Recruiters spend excessive time opening, parsing, and comparing resumes to job descriptions.
              </p>
            </FuturisticCard>
            
            <FuturisticCard icon={<Database />} title="Data Entry Overhead">
              <p className="text-muted-foreground">
                Candidate information must be manually entered into HRIS/ATS systems, prone to errors and delays.
              </p>
            </FuturisticCard>
            
            <FuturisticCard icon={<CalendarCheck />} title="Scheduling Delays">
              <p className="text-muted-foreground">
                Coordinating availability between candidates, HR, and interviewers is slow and labor-intensive.
              </p>
            </FuturisticCard>
            
            <FuturisticCard icon={<Book />} title="Limited Guidance">
              <p className="text-muted-foreground">
                New recruiters lack context-aware suggestions for screening questions and next steps.
              </p>
            </FuturisticCard>
            
            <FuturisticCard icon={<BarChart />} title="Limited Analytics">
              <p className="text-muted-foreground">
                Leadership has little real-time visibility into key recruitment metrics.
              </p>
            </FuturisticCard>
          </div>
        </div>

        {/* Metrics Impact */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-futuristic-primary">02</span> Expected Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CircularProgress 
                value={animatedValues.timeToHire} 
                label="Reduction" 
                className="mx-auto mb-2"
              />
              <h3 className="text-lg font-medium text-futuristic-primary">Time to Hire</h3>
            </div>
            
            <div className="text-center">
              <CircularProgress 
                value={animatedValues.costReduction} 
                label="Savings" 
                className="mx-auto mb-2"
              />
              <h3 className="text-lg font-medium text-futuristic-primary">Cost Reduction</h3>
            </div>
            
            <div className="text-center">
              <CircularProgress 
                value={animatedValues.hiringAccuracy} 
                label="Improvement" 
                className="mx-auto mb-2"
              />
              <h3 className="text-lg font-medium text-futuristic-primary">Hiring Accuracy</h3>
            </div>
            
            <div className="text-center">
              <CircularProgress 
                value={animatedValues.candidateSatisfaction} 
                label="Positive" 
                className="mx-auto mb-2"
              />
              <h3 className="text-lg font-medium text-futuristic-primary">Candidate Experience</h3>
            </div>
          </div>
        </div>

        {/* Solution Flow & Process Comparison */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <FuturisticTabs 
            tabs={[
              { id: 'solution', label: 'Solution Flow', icon: <LayoutDashboard size={16} /> },
              { id: 'comparison', label: 'Process Comparison', icon: <BarChart size={16} /> },
            ]}
            defaultTab="solution"
            onChange={setActiveTab}
            className="mb-8"
          />
          
          {activeTab === 'solution' ? (
            <div>
              <FuturisticCard className="overflow-hidden" glowEffect>
                {/* Creative Process Flow Visualization */}
                <div className="relative">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-futuristic-primary/30 filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full bg-futuristic-accent/20 filter blur-3xl" 
                         style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                  </div>
                  
                  {/* Main process flow - removed the scrolling classes */}
                  <div className="relative z-10 p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-futuristic-primary">
                        AI-Powered Recruitment Pipeline
                      </h3>
                      <div className="flex gap-2 items-center">
                        <div className="h-2 w-2 rounded-full bg-futuristic-success"></div>
                        <span className="text-futuristic-success text-sm">Active</span>
                      </div>
                    </div>
                    
                    <ProcessFlow 
                      steps={SOLUTION_FLOW} 
                      activeStep={activeStep}
                      onStepClick={(step) => setActiveStep(step.id)}
                    />
                    
                    <div className="flex justify-center mt-8">
                      <div className="bg-futuristic-primary/10 border border-futuristic-primary/30 rounded-lg p-4 max-w-md">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <div className="p-2 bg-futuristic-primary/20 rounded-full">
                              {SOLUTION_FLOW[activeStep - 1]?.icon || <Database size={24} />}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-futuristic-primary mb-2">
                              {SOLUTION_FLOW[activeStep - 1]?.title || "Agent"}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {SOLUTION_FLOW[activeStep - 1]?.description || "Description"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            </div>
          ) : (
            <FuturisticCard glowEffect>
              <ComparisonTable data={COMPARISON_DATA} />
            </FuturisticCard>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-muted-foreground pt-8 border-t border-border">
          <p>HR AI Agent Ecosystem • Futuristic Recruitment Solution • {new Date().getFullYear()}</p>
        </div>
      </div>
    </FuturisticBackground>
  );
};

export default Index;

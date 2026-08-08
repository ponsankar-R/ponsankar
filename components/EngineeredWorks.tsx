'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArchitecturalPillar {
  title: string;
  description: string;
  techBadge: string;
}

interface WorkflowStep {
  step: string;
  name: string;
  detail: string;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  summary: string;
  imageSrc: string;
  github: string;
  stack: string[];
  pillars: ArchitecturalPillar[];
  workflowSteps: WorkflowStep[];
}

const projects: Project[] = [
  {
    id: 'connect-your-doctor',
    title: 'ConnectYourDoctor',
    tagline: 'Semantic Healthcare Search Engine for Complex Multi-Specialty Patient Matching',
    period: 'Jan 2025 - Mar 2025',
    summary:
      'Traditional medical systems often falter when a patient presents symptoms spanning multiple medical fields—such as overlapping pulmonary and renal issues. ConnectYourDoctor bridges this gap by using high-dimensional semantic search to analyze patient histories alongside published medical research, pairing complex cases with specialists who have documented clinical experience in those exact overlapping conditions.',
    imageSrc: '/images/connectyourdoctor-architecture.png',
    github: 'https://github.com/ponsankar-R/ConnectYourDoctor',
    stack: [
      'Supabase',
      'pgvector',
      'Vector Search',
      'OpenAI Embeddings',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Tailwind CSS'
    ],
    pillars: [
      {
        title: 'High-Dimensional Semantic Search Pipeline',
        description:
          'Utilizes Supabase with pgvector to generate and query vector embeddings of clinical papers and patient histories. Replaces rigid keyword queries with cosine-similarity matching to capture subtle contextual nuances in complex medical cases.',
        techBadge: 'Supabase / pgvector',
      },
      {
        title: 'Cross-Specialty Condition Resolver',
        description:
          'Engineered to evaluate overlapping co-morbidities across distinct medical disciplines. Evaluates historical health context and active contraindications to prevent treatment conflicts and ensure holistic specialist pairing.',
        techBadge: 'System Architecture',
      },
      {
        title: 'Clinical Literature Ingestion Engine',
        description:
          'Allows specialists to publish research papers and clinical case studies directly into the platform. Content is automatically vectorized and indexed, connecting doctors with patients whose diagnoses directly mirror their published work.',
        techBadge: 'Vector Ingestion',
      },
      {
        title: 'Low-Latency Clinical Data API',
        description:
          'A high-performance backend structured to parse both structured medical records and unstructured clinical notes while maintaining sub-second semantic retrieval speeds.',
        techBadge: 'Node.js / REST API',
      },
    ],
    workflowSteps: [
      { step: '01', name: 'Knowledge Ingestion', detail: 'Specialists submit research findings, case studies, and specialized clinical focus areas into the system.' },
      { step: '02', name: 'Vector Indexing', detail: 'Unstructured medical documents are transformed into dense mathematical vector representations via pgvector.' },
      { step: '03', name: 'Context Extraction', detail: 'Patients submit multi-symptom histories and diagnostic details for comprehensive evaluation.' },
      { step: '04', name: 'Semantic Distance Calculation', detail: 'The search engine computes vector similarity scores between patient profile vectors and specialist research vectors.' },
      { step: '05', name: 'Targeted Specialist Care', detail: 'Matches the patient with the physician whose published experience directly covers their specific combination of conditions.' },
    ],
  },
  {
    id: 'trah-logistics',
    title: 'Trah',
    tagline: 'Dynamic Corridor Matching Platform Eliminating Empty Freight Return Trips',
    period: 'Aug 2024 - Oct 2024',
    summary:
      'Freight haulers lose significant margin traveling empty on return trips. Trah transforms these empty backhaul miles into active cargo runs by dynamically matching returning drivers with shippers along their transit corridor—reducing freight costs for businesses while maximizing vehicle payload efficiency.',
    imageSrc: '/images/trah-workflow.png',
    github: 'https://github.com/ponsankar-R/Trah',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'AI Pricing Engine', 'Routing API', 'Tailwind CSS'],
    pillars: [
      {
        title: 'Multi-Stop Freight Routing Engine',
        description:
          'Calculates optimal mid-route pickup and drop-off points along extended transit corridors. Maximizes overall payload density without causing major route diversions for the carrier.',
        techBadge: 'Custom Routing API',
      },
      {
        title: 'Event-Driven Carrier Dispatch',
        description:
          'Monitors active vehicle positions and broadcast events, instantly notifying local shippers when available backhaul capacity opens along their delivery route.',
        techBadge: 'Event-Driven Architecture',
      },
      {
        title: 'Algorithmic Demand-Based Dynamic Pricing',
        description:
          'Evaluates real-time market demand, haul distance, vehicle weight capabilities, and route availability to calculate balanced rate quotes for both carriers and shippers.',
        techBadge: 'AI & Machine Learning',
      },
      {
        title: 'High-Concurrency Logistics Backend',
        description:
          'A resilient MongoDB and Node.js architecture built to handle simultaneous multi-user transactions, complex route updates, and state synchronizations under heavy load.',
        techBadge: 'Node.js / Express / MongoDB',
      },
    ],
    workflowSteps: [
      { step: '01', name: 'Route Registration', detail: 'Drivers log their origin, destination, backhaul schedule, and available weight capacity.' },
      { step: '02', name: 'Proximity Matching', detail: 'The routing engine identifies active shippers located directly along the planned transport corridor.' },
      { step: '03', name: 'Waypoint Optimization', detail: 'Schedules efficient intermediate stops to load and unload cargo without compromising trip timelines.' },
      { step: '04', name: 'Rate Balancing', detail: 'The pricing algorithm generates market-adjusted quotes that offer discounts to shippers and added yield to carriers.' },
      { step: '05', name: 'Contract Finalization', detail: 'Executes digital dispatch agreements to lock in multi-point transport schedules.' },
    ],
  },
  {
    id: 'logic-league-event-platform',
    title: 'Logic League Platform',
    tagline: 'Fault-Tolerant Assessment Platform Engineered for High-Concurrency Technical Events',
    period: 'Nov 2024 - Dec 2024',
    summary:
      'High-stakes coding hackathons and live assessments demand absolute stability under heavy traffic spikes. The Logic League Platform is a resilient event management engine designed to stream participant progress in real time, securely handle batch user verification, and maintain state integrity during high-concurrency competitive rounds.',
    imageSrc: '/images/logicleague-architecture.png',
    github: 'https://github.com/ponsankar-R/TheLogicLeagueEventPlatform',
    stack: [
      'Next.js',
      'React',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'REST APIs',
      'Node.js'
    ],
    pillars: [
      {
        title: 'Real-Time State Persistence Engine',
        description:
          'Maintains continuous asynchronous caching of participant progress during active testing windows, ensuring full recovery against browser reloads or unexpected connection disruptions.',
        techBadge: 'Next.js API Routes',
      },
      {
        title: 'High-Throughput Database Connection Pooling',
        description:
          'Utilizes cached database pipelines with Mongoose to handle intense write spikes from concurrent test submissions without hitting connection limits or latency bottlenecks.',
        techBadge: 'MongoDB / Mongoose',
      },
      {
        title: 'Server-Side Access & Roster Verification',
        description:
          'Protects test integrity using strict server-side validation steps that verify user identity against encrypted event rosters before granting entry to competition environments.',
        techBadge: 'Authentication Flow',
      },
      {
        title: 'Batch Data Processing Infrastructure',
        description:
          'Features scalable database schemas and background scripts capable of rapidly ingesting, validating, and indexing large candidate rosters and problem sets from raw datasets.',
        techBadge: 'Data Pipelines',
      },
    ],
    workflowSteps: [
      { step: '01', name: 'Identity Validation', detail: 'Participants authenticate through server-side authorization routines checking against pre-registered rosters.' },
      { step: '02', name: 'Session Hydration', detail: 'The engine initializes the session environment and pulls real-time user progress from the database.' },
      { step: '03', name: 'Assessment Execution', detail: 'Candidates complete timed logic tasks and code modules within an isolated event dashboard.' },
      { step: '04', name: 'Asynchronous State Sync', detail: 'Background API calls continuously save state and code snapshots to prevent data loss.' },
      { step: '05', name: 'Evaluation & Leaderboards', detail: 'Computes final metrics, syncs scores to database models, and generates real-time competition standings.' },
    ],
  },
  {
    id: 'yellow-monk',
    title: 'Yellow Monk',
    tagline: 'Socratic AI Problem-Solving Platform for Deep Root-Cause Analysis',
    period: 'Jan 2025 - Feb 2025',
    summary:
      'Standard AI tools often output generic advice because they attempt to solve problems before fully understanding them. Yellow Monk takes an exploratory approach: when presented with a complex challenge, it asks targeted, context-gathering questions to uncover hidden factors before generating a customized, highly structured resolution path.',
    imageSrc: '/images/yellow-monk-architecture.png',
    github: 'https://github.com/ponsankar-R/yellow-monk',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'OpenAI API',
      'React',
      'Node.js'
    ],
    pillars: [
      {
        title: 'Socratic Inquiry Engine',
        description:
          'Formulates specific, probing follow-up questions designed to guide users in articulating underlying constraints, hidden variables, and non-obvious root causes.',
        techBadge: 'OpenAI / Next.js',
      },
      {
        title: 'Contextual Synthesis Pipeline',
        description:
          'Aggregates user responses with original problem descriptions to map out systemic friction points and output actionable, step-by-step resolution frameworks.',
        techBadge: 'TypeScript / React',
      },
      {
        title: 'Decoupled Two-Stage API Architecture',
        description:
          'Separates the diagnostic questioning phase from final solution generation into distinct API pipelines, ensuring focused reasoning and higher response quality.',
        techBadge: 'Next.js API Routes',
      },
      {
        title: 'Distraction-Free Focus Environment',
        description:
          'Features a clean interface optimized for deep critical thinking, with smooth UI state transitions that eliminate visual noise during problem exploration.',
        techBadge: 'Tailwind CSS',
      },
    ],
    workflowSteps: [
      { step: '01', name: 'Problem Framing', detail: 'The user outlines an initial operational, technical, or strategic bottleneck within the platform.' },
      { step: '02', name: 'Diagnostic Ingestion', detail: 'The AI analyzes the input to identify missing context and generates probing follow-up questions.' },
      { step: '03', name: 'Contextual Expansion', detail: 'The user answers targeted questions, providing missing variables, constraints, and dependencies.' },
      { step: '04', name: 'Synthesis & Structural Mapping', detail: 'The synthesis pipeline merges all inputs to establish an accurate model of the root problem.' },
      { step: '05', name: 'Targeted Strategy Delivery', detail: 'Produces a clear, prioritized action plan specifically tailored to address the uncovered root causes.' },
    ],
  },
];

// Combine all project IDs plus the special 'more-github' ID
const ALL_ITEM_IDS = [...projects.map((p) => p.id), 'more-github'];

export default function EngineeredWorksSection() {
  const [selectedId, setSelectedId] = useState<string>(projects[0].id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // References to summary card DOM elements
  const cardRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const selectedProject = projects.find((p) => p.id === selectedId);

  // Navigate between items (Previous / Next)
  const navigateItem = useCallback((direction: 'prev' | 'next') => {
    setSelectedId((current) => {
      const currentIndex = ALL_ITEM_IDS.indexOf(current);
      if (currentIndex === -1) return ALL_ITEM_IDS[0];

      let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
      if (newIndex < 0) newIndex = ALL_ITEM_IDS.length - 1;
      if (newIndex >= ALL_ITEM_IDS.length) newIndex = 0;

      return ALL_ITEM_IDS[newIndex];
    });
  }, []);

  // Smoothly scroll active card into view whenever selectedId changes
  useEffect(() => {
    const activeCard = cardRefs.current[selectedId];
    if (activeCard) {
      activeCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedId]);

  // Keyboard navigation listener (← and →)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'Escape') {
        setLightboxImage(null);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateItem('prev');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateItem('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateItem]);

  return (
    <section id="engineered-works" className="py-24 max-w-6xl mx-auto px-6 relative bg-[#050505]">
      
      {/* Section Header */}
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#291A11] pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#E5A967] block mb-2 font-serif italic">
            Featured Platform Architectures
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#F5EBE6] tracking-tight">
            Engineered <span className="font-serif italic text-[#E5A967]">Works</span>
          </h2>
        </div>

        {/* Navigation Virtual Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateItem('prev')}
            aria-label="Previous Item"
            className="w-10 h-10 rounded-full bg-[#18100A] border border-[#4D301E] text-[#E5A967] hover:border-[#E5A967] hover:bg-[#22160F] transition-all flex items-center justify-center shadow-md active:scale-95 text-base cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={() => navigateItem('next')}
            aria-label="Next Item"
            className="w-10 h-10 rounded-full bg-[#18100A] border border-[#4D301E] text-[#E5A967] hover:border-[#E5A967] hover:bg-[#22160F] transition-all flex items-center justify-center shadow-md active:scale-95 text-base cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontally Scrollable Project Summary Cards Track */}
      <div className="flex gap-4 overflow-x-auto pb-6 pt-1 select-none scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Project Cards */}
        {projects.map((proj) => {
          const isActive = selectedId === proj.id;
          return (
            <button
              key={proj.id}
              ref={(el) => {
                cardRefs.current[proj.id] = el;
              }}
              onClick={() => setSelectedId(proj.id)}
              className={`flex-shrink-0 w-[280px] sm:w-[320px] text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-4 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-b from-[#281A12] to-[#180E08] border-[#E5A967] shadow-[0_8px_25px_rgba(229,169,103,0.25)] scale-[1.01]'
                  : 'bg-[#120B07] border-[#382112] hover:border-[#6B432A] opacity-75 hover:opacity-100'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5A967]/10 rounded-full blur-xl pointer-events-none" />
              )}

              {/* Title & Period */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-medium text-[#F5EBE6] truncate">{proj.title}</h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1C120B] border border-[#4D301E] text-[#E5A967] shrink-0">
                  {proj.period}
                </span>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-2 border-t border-[#291A11]/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1 max-w-[80%] overflow-hidden">
                  {proj.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-[#C8B09E] font-mono bg-[#18100A] px-2 py-0.5 rounded border border-[#3A2416]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span
                  className={`text-[11px] font-serif italic ${
                    isActive ? 'text-[#E5A967] font-semibold' : 'text-[#6B5242]'
                  }`}
                >
                  {isActive ? '● Active' : 'Select'}
                </span>
              </div>
            </button>
          );
        })}

        {/* SPECIAL "VIEW MORE PROJECTS" CARD */}
        <button
          key="more-github"
          ref={(el) => {
            cardRefs.current['more-github'] = el;
          }}
          onClick={() => setSelectedId('more-github')}
          className={`flex-shrink-0 w-[280px] sm:w-[320px] text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-4 cursor-pointer ${
            selectedId === 'more-github'
              ? 'bg-gradient-to-b from-[#2D1E13] via-[#1F130B] to-[#120B07] border-[#E5A967] shadow-[0_8px_25px_rgba(229,169,103,0.3)] scale-[1.01]'
              : 'bg-[#140C07] border-[#4D301E] hover:border-[#E5A967]/60 opacity-80 hover:opacity-100'
          }`}
        >
          {selectedId === 'more-github' && (
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5A967]/15 rounded-full blur-xl pointer-events-none" />
          )}

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#E5A967]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <h3 className="text-lg font-medium text-[#F5EBE6]">More Projects</h3>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1C120B] border border-[#5E3A24] text-[#E5A967]">
              GitHub ↗
            </span>
          </div>

          <div className="pt-2 border-t border-[#291A11]/80 flex items-center justify-between">
            <span className="text-[10px] text-[#C8B09E] font-mono truncate">
              ponsankar-R
            </span>
            <span
              className={`text-[11px] font-serif italic ${
                selectedId === 'more-github' ? 'text-[#E5A967] font-semibold' : 'text-[#6B5242]'
              }`}
            >
              {selectedId === 'more-github' ? '● Active' : 'View →'}
            </span>
          </div>
        </button>
      </div>

      {/* ACTIVE CONTENT DISPLAY AREA */}
      <AnimatePresence mode="wait">
        {selectedProject ? (
          /* STANDARD PROJECT DETAILED VIEW */
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl bg-gradient-to-b from-[#22160F] via-[#1B110B] to-[#120B07] border border-[#4D301E] overflow-hidden p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.95)] space-y-10"
          >
            {/* Project Header Info */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl sm:text-4xl font-medium text-[#F5EBE6]">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#140C07] border border-[#523520] text-xs font-mono text-[#E5A967]">
                    {selectedProject.period}
                  </span>
                </div>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#1C120B] border border-[#5E3A24] text-[#F5EBE6] hover:border-[#E5A967] hover:text-[#E5A967] transition-all text-xs font-medium shadow-md flex items-center gap-2"
                >
                  GitHub Repository ↗
                </a>
              </div>

              <p className="text-base text-[#E5A967] font-serif italic">
                "{selectedProject.tagline}"
              </p>

              <p className="text-sm sm:text-base text-[#C8B09E] font-light leading-relaxed max-w-4xl">
                {selectedProject.summary}
              </p>
            </div>

            {/* 1. Architecture / Workflow Image */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#9E8675] font-mono">
                <span>SYSTEM ARCHITECTURE & WORKFLOW DIAGRAM</span>
                <span className="text-[#E5A967] font-serif italic hidden sm:inline">
                  🔍 Click image to inspect high-resolution diagram
                </span>
              </div>

              <div
                onClick={() => setLightboxImage(selectedProject.imageSrc)}
                className="relative w-full rounded-2xl bg-[#080503] border border-[#523520] p-2 sm:p-4 overflow-hidden cursor-pointer group shadow-inner min-h-[220px] flex items-center justify-center"
              >
                <img
                  src={selectedProject.imageSrc}
                  alt={`${selectedProject.title} Architecture Diagram`}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0604]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6">
                  <span className="px-4 py-2 rounded-full bg-[#E5A967] text-[#0D0805] text-xs font-semibold shadow-lg">
                    Inspect Full Diagram ↗
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Operational Execution Pipeline */}
            <div className="space-y-4 pt-4 border-t border-[#2E1C11]">
              <h4 className="text-xs uppercase tracking-widest text-[#E5A967] font-serif italic">
                Operational Execution Pipeline
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {selectedProject.workflowSteps.map((ws) => (
                  <div
                    key={ws.step}
                    className="p-4 rounded-2xl bg-[#140C07] border border-[#382112] space-y-1.5"
                  >
                    <span className="text-xs font-mono font-bold text-[#E5A967] block">
                      {ws.step}. {ws.name}
                    </span>
                    <p className="text-xs text-[#C8B09E] font-light leading-relaxed">
                      {ws.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Architectural Pillars & System Thinking */}
            <div className="space-y-6 pt-4 border-t border-[#2E1C11]">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#E5A967] font-serif italic">
                  Architectural Pillars & Unique Innovation
                </h4>
                <p className="text-xs text-[#9E8675] mt-1 font-light">
                  Engineering decisions highlighting vector search accuracy, database design, and system thinking skills.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {selectedProject.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#140C07]/90 border border-[#382112] space-y-3 hover:border-[#E5A967]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-medium text-[#F5EBE6]">
                        {pillar.title}
                      </h5>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#22160F] border border-[#4D301E] text-[10px] text-[#E5A967] font-mono shrink-0">
                        {pillar.techBadge}
                      </span>
                    </div>
                    <p className="text-xs text-[#C8B09E] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack Pills */}
            <div className="pt-6 border-t border-[#2E1C11] flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#9E8675] font-mono mr-2">Technologies Used:</span>
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#140C07] border border-[#3D2516] text-xs text-[#C8B09E]"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        ) : (
          /* VIEW MORE PROJECTS ON GITHUB CARD */
          <motion.div
            key="more-github-display"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl bg-gradient-to-b from-[#2A1B11] via-[#1B110B] to-[#120B07] border-2 border-[#E5A967]/70 overflow-hidden p-8 sm:p-14 shadow-[0_20px_60px_rgba(229,169,103,0.15)] flex flex-col items-center text-center space-y-6 relative"
          >
            {/* Ambient Warm Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E5A967]/10 rounded-full blur-3xl pointer-events-none" />

            {/* GitHub Logo */}
            <div className="relative w-20 h-20 rounded-full bg-[#18100A] border border-[#5E3A24] flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-[#E5A967]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>

            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-4xl font-light text-[#F5EBE6]">
                Explore More <span className="font-serif italic text-[#E5A967]">Repositories</span>
              </h3>
              <p className="text-sm sm:text-base text-[#C8B09E] font-light leading-relaxed">
                Discover more full-stack web applications, AI integration experiments, developer tools, and backend system designs hosted on my GitHub profile.
              </p>
            </div>

            <a
              href="https://github.com/ponsankar-R"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D49B54] to-[#B37A38] text-[#0D0805] font-semibold text-sm hover:brightness-110 transition-all shadow-[0_6px_20px_rgba(212,155,84,0.3)] flex items-center gap-2"
            >
              <span>Visit github.com/ponsankar-R</span>
              <span className="text-base">↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX MODAL FOR HIGH-RES DIAGRAM PREVIEW */}
      <AnimatePresence>
        {lightboxImage && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          >
            <div className="relative max-w-6xl w-full flex justify-between items-center mb-4 text-xs text-[#C8B09E]">
              <span className="font-serif italic text-[#E5A967]">
                {selectedProject.title} — System Diagram
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-4 py-1.5 rounded-full bg-[#2B1B11] border border-[#523520] text-[#F5EBE6] hover:bg-[#E5A967] hover:text-[#0D0805] transition-all font-semibold"
              >
                ✕ Close Preview
              </button>
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[85vh] w-full rounded-2xl bg-[#0A0604] border-2 border-[#E5A967] overflow-auto p-2 shadow-[0_0_50px_rgba(229,169,103,0.3)]"
            >
              <img
                src={lightboxImage}
                alt="High Resolution Architecture Diagram"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
'use client';

import React from 'react';

const corePrinciples = [
  {
    title: 'System Thinking',
    description:
      'Analyzing end-to-end software ecosystems to ensure architectural resilience, data integrity, and low-latency interaction.',
  },
  {
    title: 'Complex Problem Solving',
    description:
      'Deconstructing bottleneck challenges into modular, testable components with algorithmic efficiency.',
  },
  {
    title: 'Team Collaboration',
    description:
      'Fostering cross-functional alignment, conducting thorough code reviews, and executing agile workflows effectively.',
  },
  {
    title: 'Emotional Intelligence',
    description:
      'Navigating dynamic team environments with empathy, active listening, adaptability, and constructive feedback.',
  },
  {
    title: 'Effective & Proactive Communication',
    description:
      'Articulating complex technical concepts clearly to both engineering peers and non-technical stakeholders.',
  },
];

const technicalSkills = [
  {
    category: 'Core Web Framework & Stack',
    mainTech: 'Next.js & Full-Stack Web',
    stack: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
    ],
    description:
      'Building performant, responsive web applications across the full lifecycle—from modern UI styling to scalable server-side APIs.',
  },
  {
    category: 'Database Systems',
    mainTech: 'MongoDB & PostgreSQL',
    stack: ['MongoDB', 'PostgreSQL', 'SQL Schema Design', 'ORM / Querying'],
    description:
      'Architecting resilient relational and document database models, optimized for data integrity and low-latency queries.',
  },
  {
    category: 'Version Control & Deployment',
    mainTech: 'Git & Vercel',
    stack: ['Git', 'GitHub', 'Vercel Platform', 'CI/CD Pipelines'],
    description:
      'Managing clean branch workflows, code reviews, continuous integration, and seamless production deployments.',
  },
  {
    category: 'Cloud Infrastructure',
    mainTech: 'AWS & IBM Cloud',
    stack: ['AWS', 'IBM Cloud', 'Serverless', 'Cloud Architecture'],
    description:
      'Deploying scalable backend services, cloud compute, and managed storage solutions on enterprise cloud platforms.',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 max-w-6xl mx-auto px-6 relative bg-[#050505]">
      {/* Header */}
      <div className="mb-16 border-b border-[#291A11] pb-8">
        <h2 className="text-3xl sm:text-5xl font-light text-[#F5EBE6] tracking-tight">
          Expertise & <span className="font-serif italic text-[#E5A967]">Technical Architecture</span>
        </h2>
        <p className="text-[#C8B09E] text-sm mt-3 max-w-2xl font-light leading-relaxed">
          Combining analytical system engineering principles with a high-performance modern web stack and cloud infrastructure.
        </p>
      </div>

      <div className="space-y-16">
        
        {/* Core Principles Section */}
        <div>
          <h3 className="text-lg font-medium text-[#F5EBE6] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A967]" />
            Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePrinciples.map((skill, index) => (
              <div
                key={index}
                className={`relative overflow-hidden p-7 rounded-3xl bg-gradient-to-b from-[#22160F] via-[#1B110B] to-[#120B07] border border-[#4D301E] hover:border-[#E5A967]/50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.8)] group ${
                  index === corePrinciples.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="text-lg font-serif italic text-[#E5A967] mb-2 group-hover:translate-x-1 transition-transform">
                  {skill.title}
                </div>
                <p className="text-xs text-[#C8B09E] font-light leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Section */}
        <div>
          <h3 className="text-lg font-medium text-[#F5EBE6] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A967]" />
            Technical Stack & Ecosystem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((tech, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl bg-[#18100A] border border-[#3B2314] hover:border-[#E5A967]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xs font-serif italic text-[#E5A967] mb-2">
                    {tech.category}
                  </div>
                  <h4 className="text-xl font-semibold text-[#F5EBE6] group-hover:text-[#E5A967] transition-colors mb-3">
                    {tech.mainTech}
                  </h4>
                  <p className="text-xs text-[#C8B09E] font-light leading-relaxed mb-5">
                    {tech.description}
                  </p>
                </div>

                {/* Sub-technologies pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#291A11]">
                  {tech.stack.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#22160F] text-[#E5A967] border border-[#3B2314]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Golden Section Divider with Center Diamond */}
      <div className="mt-24 flex items-center justify-center gap-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#4D301E] to-[#E5A967]/60" />
        <div className="relative flex items-center justify-center p-1">
          {/* Subtle Outer Glow */}
          <div className="absolute w-4 h-4 bg-[#E5A967]/20 rounded-full blur-sm" />
          {/* Golden Diamond */}
          <div className="w-2.5 h-2.5 rotate-45 bg-[#E5A967] border border-[#E5A967] shadow-[0_0_10px_rgba(229,169,103,0.8)] relative z-10" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E5A967]/60 via-[#4D301E] to-transparent" />
      </div>

    </section>
  );
}
'use client';

import React from 'react';

const timelineData = [
  {
    period: 'Feb 2024 - Aug 2026',
    role: 'Head Coordinator',
    organization: 'Coding Club',
    description: 'Led college-wide technical initiatives, organized national hackathons, and mentored student developers.',
    points: [
      'Organized 7+ hackathons and workshops, handling logistics, problem statements, and evaluation.',
      'Mentored students through hands-on development sessions, API integrations, and project deployments.',
    ],
  },
  {
    period: '2026',
    role: 'Technical Event Coordinator',
    organization: 'Kanal 2026 (National Symposium)',
    link: 'https://kanal2k26.tech/',
    description: 'Managed technical events and digital operations for a national-level college symposium.',
    points: [
      'Coordinated event schedules, rule execution, and technical logistics across multiple tracks.',
      'Supported the official platform for student registrations and event communications.',
    ],
  },
  {
    period: 'July 2025 - Aug 2025',
    role: 'AI & Cloud Intern',
    organization: 'Edunet Foundation x IBM SkillsBuild',
    description: 'Completed an intensive 4-week internship focused on cloud architecture and AI deployment.',
    points: [
      'Gained hands-on experience building and deploying technology solutions using IBM Cloud.',
      'Earned official certification after successfully delivering cloud-hosted AI projects.',
    ],
  },
  {
    period: 'Oct 2024',
    role: 'National Hackathon Finalist',
    organization: 'Intel OneAPI National Hackathon',
    description: 'Shortlisted among the top 25 teams out of 300+ participating nationwide.',
    points: [
      'Recognized with the "Best Idea Project" award by the Intel technical evaluation team.',
      'Designed and presented an innovative prototype built using Intel OneAPI tools.',
    ],
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 max-w-6xl mx-auto px-6 relative bg-[#050505]">
      
      {/* Header */}
      <div className="mb-16 border-b border-[#291A11] pb-8">
        <h2 className="text-3xl sm:text-5xl font-light text-[#F5EBE6] tracking-tight">
          Experience & <span className="font-serif italic text-[#E5A967]">Leadership</span>
        </h2>
        <p className="text-[#C8B09E] text-sm mt-3 max-w-2xl font-light leading-relaxed">
          A track record of technical leadership, event coordination, and recognized project achievements.
        </p>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative border-l border-[#4D301E] ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
        {timelineData.map((item, index) => (
          <div key={index} className="relative group">
            
            {/* Brass Timeline Node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#18100A] border-2 border-[#E5A967] shadow-[0_0_10px_#E5A967] group-hover:scale-125 transition-transform" />

            {/* Content Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#22160F] via-[#1B110B] to-[#120B07] border border-[#4D301E] p-7 shadow-[0_10px_25px_rgba(0,0,0,0.8)] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#2B1B11] pb-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#F5EBE6] group-hover:text-[#E5A967] transition-colors">
                    {item.role}
                  </h3>
                  
                  {/* Organization with conditional external link */}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#E5A967] font-serif italic underline underline-offset-2 hover:text-[#f3c18b] transition-colors inline-flex items-center gap-1"
                    >
                      {item.organization}
                      <span className="text-[10px]">↗</span>
                    </a>
                  ) : (
                    <p className="text-xs text-[#E5A967] font-serif italic">
                      {item.organization}
                    </p>
                  )}
                </div>

                <span className="text-[11px] font-mono text-[#9E8675] px-3 py-1 rounded-full bg-[#140C07] border border-[#3D2516] w-fit">
                  {item.period}
                </span>
              </div>

              <p className="text-xs text-[#C8B09E] font-light leading-relaxed pt-1">
                {item.description}
              </p>

              <ul className="space-y-1.5 pt-2">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#C8B09E]">
                    <span className="text-[#E5A967] mt-0.5">✦</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* Royal Purple Section Divider with Center Diamond */}
      <div className="mt-24 flex items-center justify-center gap-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#3B0764] to-[#A855F7]/60" />
        <div className="relative flex items-center justify-center p-1">
          {/* Ambient Purple Blur */}
          <div className="absolute w-5 h-5 bg-[#A855F7]/30 rounded-full blur-sm" />
          {/* Royal Purple Center Diamond */}
          <div className="w-2.5 h-2.5 rotate-45 bg-[#A855F7] border border-[#C084FC] shadow-[0_0_12px_rgba(168,85,247,0.9)] relative z-10" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#A855F7]/60 via-[#3B0764] to-transparent" />
      </div>

    </section>
  );
}
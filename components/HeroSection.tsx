'use client';

import React from 'react';

export default function HeroSection() {
  const values = [
    { title: 'Passion', quote: 'Boots Performance' },
    { title: 'Quality', quote: 'Shows Thinking' },
    { title: 'Humanity', quote: 'Gives Value' },
  ];

  const skillCategories = [
    {
      label: 'Frontend & UI',
      skills: 'Next.js • React • TypeScript • Tailwind CSS',
    },
    {
      label: 'Backend & Databases',
      skills: 'Node.js • Express • PostgreSQL • MongoDB • Redis',
    },
    {
      label: 'AI & Prompt Engineering',
      skills: 'LLM Integration • Prompt Engineering • RAG • Vector DBs',
    },
    {
      label: 'Cloud Platforms & DevOps',
      skills: 'AWS • GCP • Docker • CI/CD Pipelines • Serverless',
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Ambient Radial Backlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E5A967]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Core Bio */}
        <div className="lg:col-span-7 space-y-8">

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#F5EBE6] leading-[1.12]">
              Ponsankar R <br />
              <span className="font-serif italic text-[#E5A967] font-normal text-3xl sm:text-5xl">
                Developing High-Performance Intelligent Web Systems
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#C8B09E] font-light leading-relaxed max-w-xl">
              Specializing in scalable full-stack web applications, high-concurrency backend services, cloud deployment, and privacy-centric AI platforms. Driven by architectural robustness and clean design principles.
            </p>
          </div>

          {/* Philosophy / Values Cards */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {values.map((v, i) => (
              <div
                key={i}
                className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-b from-[#22160F] to-[#140C07] border border-[#4D301E] shadow-[0_10px_20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
                <div className="text-xl font-serif italic text-[#E5A967]">{v.title}</div>
                <div className="text-xs text-[#9E8675] mt-1 leading-snug">{v.quote}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a
              href="#engineered-works"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D49B54] to-[#B37A38] text-[#0D0805] font-semibold text-sm hover:brightness-110 transition-all shadow-[0_6px_20px_rgba(212,155,84,0.25)]"
            >
              View Engineered Works ↓
            </a>
            <a
              href="mailto:ponsankar.dev@gmail.com"
              className="px-8 py-3.5 rounded-full bg-[#1C120B] border border-[#5E3A24] text-[#F5EBE6] font-medium text-sm hover:border-[#E5A967] transition-all shadow-md"
            >
              Get in Touch
            </a>
          </div>

          {/* Contact Bar */}
          <div className="flex items-center gap-6 pt-4 text-xs text-[#9E8675] border-t border-[#26170F]">
            <a href="https://github.com/ponsankar-R" target="_blank" rel="noreferrer" className="hover:text-[#E5A967] transition-colors">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/ponsankar-r" target="_blank" rel="noreferrer" className="hover:text-[#E5A967] transition-colors">
              LinkedIn ↗
            </a>
            <span className="flex items-center gap-1.5 text-[#C8B09E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A967]" /> India
            </span>
          </div>

        </div>

        {/* Right Column: Profile & Skills Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            
            {/* Outer Warm Ambient Glow */}
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-[#E5A967]/20 via-[#3D2516]/40 to-transparent blur-xl transition-all duration-500 group-hover:opacity-100 opacity-70" />
            
            {/* Card Main Container */}
            <div className="relative rounded-[2.2rem] bg-gradient-to-b from-[#20140D] via-[#150D08] to-[#0A0604] border border-[#523520]/80 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.12)] space-y-6 overflow-hidden">
              
              {/* Subtle Noise/Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent rounded-[2.2rem] pointer-events-none" />

              <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0D0805] to-[#060402] border border-[#382112] p-6 text-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.9)] flex flex-col items-center">
                
                {/* Profile Image Container */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#2A190E] via-[#1A1009] to-[#3B2314] border border-[#7A5032]/60 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] mb-4 overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-[#E5A967]/5 blur-sm z-0" />
                  
                  {/* Direct Google Drive view link */}
                  <img 
                    src="https://lh3.googleusercontent.com/d/1OzJj_xbmWVfEuufGtddCXcl_J9Kr_nQE" 
                    alt="Ponsankar R"
                    className="relative z-10 w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 className="text-xl font-medium tracking-wide text-[#F5EBE6]">Ponsankar R</h3>
                <p className="text-xs text-[#E5A967] mt-1 font-serif italic tracking-wide">Full-Stack, Cloud & AI Systems</p>

                {/* Tech Stack Breakdown */}
                <div className="mt-6 w-full space-y-2.5 text-xs text-left">
                  {skillCategories.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#140C07]/90 border border-[#382112] shadow-sm">
                      <span className="text-[#9E8675] text-[10px] uppercase tracking-wider block mb-1">
                        {item.label}
                      </span>
                      <span className="text-[#F5EBE6] font-medium leading-snug block">
                        {item.skills}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
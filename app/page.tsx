'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EngineeredWorksSection from '@/components/EngineeredWorks';
import SkillsSection from '@/components/SkillsSection';
import TimelineSection from '@/components/TimelineSection';
import CertificationsSection from '@/components/CertificationsSection';
import ArticlesSection from '@/components/ArticlesSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Initial loading timer on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  // Smooth section transition trigger
  const handleNavigate = (targetHref: string) => {
    setIsLoading(true);

    setTimeout(() => {
      const element = document.querySelector(targetHref);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsLoading(false);
    }, 850);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5EBE6] selection:bg-[#E5A967] selection:text-[#050505] font-sans">
      
      {/* 3D Multi-Tone Kinetic Ball Loading Overlay */}
      <LoadingScreen isLoading={isLoading} />

      {/* Floating Wooden Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Section 01: Profile / Bio */}
      <HeroSection />

      {/* Section 02: Engineered Works */}
      <EngineeredWorksSection />

      {/* Section 03: Expertise & Technical Architecture */}
      <SkillsSection />

      {/* Section 04: Experience & Leadership Timeline */}
      <TimelineSection />

      {/* Section 05: Recognitions & Certifications */}
      <CertificationsSection />

      {/* Section 06: Articles & Insights */}
      <ArticlesSection />

      {/* Footer & Direct Contact Component */}
      <Footer />
      
    </main>
  );
}
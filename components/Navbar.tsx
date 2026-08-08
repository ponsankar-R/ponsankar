'use client';

import React from 'react';

const navItems = [
  { name: 'Profile', href: '#hero' },
  { name: 'Engineered Works', href: '#engineered-works' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Experience', href: '#timeline' },
  { name: 'Recognitions', href: '#certifications' },
  { name: 'Articles', href: '#articles' },
];

interface NavbarProps {
  onNavigate: (href: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50 max-w-5xl mx-auto px-4">
      <nav className="relative overflow-hidden flex items-center justify-between px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1A100A] via-[#241710] to-[#1A100A] border border-[#523520] shadow-[0_10px_30px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(229,169,103,0.2)] backdrop-blur-md">
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-2.5 group relative z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5A967] shadow-[0_0_8px_#E5A967]" />
          <span className="text-sm font-semibold tracking-wide text-[#F5EBE6]">
            Ponsankar <span className="text-[#E5A967] font-serif italic text-xs">R</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center space-x-7 text-[11px] font-medium text-[#C8B09E] relative z-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="hover:text-[#E5A967] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="relative z-10 text-xs font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-[#7A4B2E] to-[#54331C] text-[#F5EBE6] border border-[#96613A] hover:brightness-125 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'ponsankar.dev@gmail.com';
  const phone = '+91 9360407698';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#050505] border-t border-[#26170F] pt-20 pb-12 text-[#9E8675]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Quote Section */}
        <div className="mb-16 pb-12 border-b border-[#1C120B] text-center">
          <blockquote className="font-serif italic text-lg sm:text-2xl text-[#E5A967] mb-6 max-w-3xl mx-auto leading-relaxed">
            &ldquo;When passion and purpose are guided by humanity, they create a peaceful mind and build the powerful systems that drive the world.&rdquo;
          </blockquote>
          <p className="font-serif italic text-xl text-[#F5EBE6] mb-1">Ponsankar R</p>
          <p className="text-xs font-mono text-[#8C7667]">Software Engineer & Architect</p>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#1C120B]">
          
          {/* Column 1: Bio & Status (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140C07] border border-[#3D2516] text-[11px] font-mono text-[#E5A967]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open for Engineering Roles & Collaborations</span>
            </div>
            <h3 className="text-2xl font-light text-[#F5EBE6] tracking-tight">
              Let&apos;s build something <span className="font-serif italic text-[#E5A967]">extraordinary</span>.
            </h3>
            <p className="text-xs text-[#C8B09E] font-light leading-relaxed max-w-sm">
              Feel free to reach out for full-stack architecture discussions, AI integration, or technical inquiries.
            </p>
          </div>

          {/* Column 2: Direct Contact Actions (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E5A967]">Direct Contact</h4>
            
            {/* Email Box with One-Click Copy */}
            <div className="p-3.5 rounded-2xl bg-[#120B07] border border-[#2D1B11] flex items-center justify-between">
              <div className="truncate pr-2">
                <p className="text-[10px] font-mono text-[#8C7667] uppercase">Direct Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-xs font-mono text-[#F5EBE6] hover:text-[#E5A967] transition-colors truncate block"
                >
                  {email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-[#1C120B] border border-[#3D2516] text-[11px] font-mono text-[#E5A967] hover:border-[#E5A967] transition-all flex-shrink-0 cursor-pointer"
              >
                {copied ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            {/* Phone / Call Box */}
            <div className="p-3.5 rounded-2xl bg-[#120B07] border border-[#2D1B11] flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-[#8C7667] uppercase">Phone / WhatsApp</p>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="text-xs font-mono text-[#F5EBE6] hover:text-[#E5A967] transition-colors"
                >
                  {phone}
                </a>
              </div>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="px-3 py-1.5 rounded-xl bg-[#1C120B] border border-[#3D2516] text-[11px] font-mono text-[#E5A967] hover:border-[#E5A967] transition-all"
              >
                Call
              </a>
            </div>
          </div>

          {/* Column 3: Socials & Profiles Demo (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E5A967]">Social & Networks</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://github.com/ponsankar-R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5A967] transition-colors flex items-center justify-between group"
                >
                  <span>GitHub</span>
                  <span className="text-[10px] text-[#8C7667] group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ponsankar-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5A967] transition-colors flex items-center justify-between group"
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px] text-[#8C7667] group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
            
              <li>
                <a
                  href="https://leetcode.com/u/ponsankar26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5A967] transition-colors flex items-center justify-between group"
                >
                  <span>LeetCode</span>
                  <span className="text-[10px] text-[#8C7667] group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8C7667]">
          <p>© {new Date().getFullYear()} Ponsankar R. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Location: Tamil Nadu, India (IST)</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#E5A967] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
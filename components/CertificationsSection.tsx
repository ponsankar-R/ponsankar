'use client';

import React from 'react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  highlight: string;
  tag: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    title: 'Prompt Engineering Specialization',
    issuer: 'Vanderbilt University',
    date: 'Jun 2024',
    highlight:
      'Mastered prompt patterns, generative AI workflow optimization, and structured output design.',
    tag: 'Academic Credential',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/specialization/HXQMXX2FHHA8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
  },
  {
    title: 'Emerging Technologies (AI & Cloud) Internship',
    issuer: 'Edunet Foundation x AICTE x IBM SkillsBuild',
    date: 'Jul 2025 – Aug 2025',
    highlight:
      'Intensive program deploying technology-driven solutions on IBM Cloud infrastructure.',
    tag: 'Industry Internship',
    credentialUrl:
      'https://drive.google.com/file/d/1WwKpxwUb5gw8uLCnAwZ7QKCpP-cvheJs/view',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-28 max-w-6xl mx-auto px-6 relative bg-[#050505]">
      {/* Header */}
      <div className="mb-16 border-b border-[#291A11] pb-8">
        <h2 className="text-3xl sm:text-5xl font-light text-[#F5EBE6] tracking-tight">
          Recognitions & <span className="font-serif italic text-[#E5A967]">Certifications</span>
        </h2>
        <p className="text-[#C8B09E] text-sm mt-3 max-w-2xl font-light leading-relaxed">
          Academic certifications, industry internships, and specialized technical credentials.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-[#22160F] via-[#1B110B] to-[#120B07] border border-[#4D301E] hover:border-[#E5A967]/60 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5A967] px-3 py-1 rounded-full bg-[#140C07] border border-[#3D2516]">
                  {cert.tag}
                </span>
                <span className="text-xs font-mono text-[#9E8675]">{cert.date}</span>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#F5EBE6] group-hover:text-[#E5A967] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-serif italic text-[#E5A967] mt-1">
                  Issued by {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-[#C8B09E] font-light leading-relaxed pt-2">
                {cert.highlight}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#2B1B11] flex justify-end">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-serif italic text-[#E5A967] hover:underline hover:text-[#f3c89b] transition-colors cursor-pointer"
              >
                Verified Credential ✦
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
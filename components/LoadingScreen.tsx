'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]/95 backdrop-blur-2xl selection:bg-none"
        >
          {/* 3D Isometric Perspective Stage */}
          <div className="relative w-72 h-72 flex items-center justify-center [perspective:1200px]">
            
            {/* Ambient Multi-Tone Light Glow */}
            <div className="absolute w-44 h-44 bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />

            {/* Central Multi-Color 3D Sphere with Internal Moving Rings */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#1f1924_0%,#0c0a0e_70%,#000000_100%)] shadow-[0_0_35px_rgba(229,169,103,0.4)] border border-amber-400/40 flex items-center justify-center overflow-hidden [transform-style:preserve-3d]">
              
              {/* Internal Moving Ring 1: Electric Cyan & Gold */}
              <motion.div
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute w-16 h-16 rounded-full border-2 border-cyan-400 border-t-amber-300 border-b-transparent shadow-[0_0_12px_rgba(34,211,238,0.8)] [transform-style:preserve-3d]"
              />

              {/* Internal Moving Ring 2: Magenta & Lime */}
              <motion.div
                animate={{ rotateY: [360, 0], rotateZ: [0, 360] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                className="absolute w-12 h-12 rounded-full border-2 border-pink-500 border-r-lime-400 border-l-transparent shadow-[0_0_10px_rgba(236,72,153,0.8)] [transform-style:preserve-3d]"
              />

              {/* Internal Moving Ring 3: Deep Violet & Radiant Yellow */}
              <motion.div
                animate={{ rotateX: [360, 0], rotateZ: [360, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                className="absolute w-8 h-8 rounded-full border-2 border-violet-400 border-b-yellow-300 border-t-transparent shadow-[0_0_8px_rgba(139,92,246,0.9)] [transform-style:preserve-3d]"
              />

              {/* Core Multi-Tone Kinetic Center */}
              <div className="w-3.5 h-3.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#f59e0b_50%,#dc2626_100%)] shadow-[0_0_10px_#f59e0b]" />

            </div>

            {/* Tilted 3D Orbital Plane */}
            <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d] [transform:rotateX(68deg)_rotateY(-15deg)]">
              
              {/* Visible Golden Track Ring */}
              <div className="absolute w-56 h-56 rounded-full border-2 border-dashed border-[#E5A967]/30 shadow-[0_0_20px_rgba(229,169,103,0.2)]" />

              {/* 360-Degree Revolving Orbit Rig */}
              <motion.div
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                className="absolute w-56 h-56 rounded-full flex items-center justify-center [transform-style:preserve-3d]"
              >

                {/* 3D Square 1: Amber-Gold (Top) */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 [transform-style:preserve-3d]">
                  <motion.div
                    animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#78350F] via-[#E5A967] to-[#FDE047] border border-[#FEF08A]/70 shadow-[0_0_18px_rgba(229,169,103,0.9)] [transform:rotateX(45deg)_rotateY(45deg)]"
                  />
                </div>

                {/* 3D Square 2: Crimson Mahogany (Bottom) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 [transform-style:preserve-3d]">
                  <motion.div
                    animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                    className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#450A0A] via-[#991B1B] to-[#F59E0B] border border-[#F59E0B]/70 shadow-[0_0_15px_rgba(245,158,11,0.8)] [transform:rotateX(45deg)_rotateY(45deg)]"
                  />
                </div>

                {/* 3D Square 3: Emerald Sandalwood (Right) */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
                  <motion.div
                    animate={{ rotateZ: [0, 360] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                    className="w-7 h-7 rounded-md bg-gradient-to-tr from-[#064E3B] via-[#059669] to-[#FCD34D] border border-[#FCD34D]/60 shadow-[0_0_12px_rgba(252,211,77,0.8)]"
                  />
                </div>

                {/* 3D Square 4: Indigo Violet (Left) */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
                  <motion.div
                    animate={{ rotateZ: [360, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                    className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#311042] via-[#7C3AED] to-[#E5A967] border border-[#E5A967]/60 shadow-[0_0_12px_rgba(124,58,237,0.8)]"
                  />
                </div>

              </motion.div>

            </div>

          </div>

          {/* Status Badge */}
          <div className="mt-6 flex flex-col items-center gap-1.5">
            <span className="font-serif italic text-base text-[#E5A967] tracking-wider">
              Ponsankar R
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[#9E8675] uppercase">
              Initialising Architecture...
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
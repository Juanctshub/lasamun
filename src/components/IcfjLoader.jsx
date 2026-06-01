import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio, Terminal } from 'lucide-react';

export default function IcfjLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    'ESTABLISHED: SAT-LINK 108.4 // CORRESPONDENT FEED STABLE',
    'ALLOCATING AUDIO STREAM [WISIN.MP3] // 44.1 KHZ INTRO CALIBRATED',
    'BUFFERING COMPRESSOR GATE // NOISE REDUCTION RATIO ACTIVE',
    'SYNC: BROADCAST DECK DIGITAL ASSETS // NYC DIRECTORY SYNCED',
    'STATUS: READY FOR GLOBAL COVERAGE OPERATIONS // DEPLOYING DECK',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 6, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }

        const stepIndex = Math.min(Math.floor((next / 100) * steps.length), steps.length - 1);
        if (stepIndex !== activeStep) {
          setActiveStep(stepIndex);
        }

        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete, activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(12px)",
        scale: 1.02,
        transition: { duration: 0.6, ease: "easeOut" } 
      }}
      className="fixed inset-0 bg-[#040608] z-[2000] flex flex-col items-center justify-center text-[#00f0ff] font-mono select-none overflow-hidden"
    >
      {/* High-Contrast Visible Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          src="/york.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-[0.45]"
          style={{ filter: 'grayscale(0.2) brightness(0.35) contrast(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040608]/90 via-transparent to-[#040608]/95 z-10" />
      </div>

      {/* Razor-Sharp Professional Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-10" />

      {/* Professional framing bracket HUD */}
      <div className="absolute inset-8 border border-white/5 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#00f0ff]/50" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#00f0ff]/50" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#00f0ff]/50" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#00f0ff]/50" />
        
        <div className="absolute top-4 left-4 flex items-center gap-2 text-[9px] tracking-widest text-[#00f0ff]/80">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>BROADCASTING DECK SYNC // ACTIVE</span>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center max-w-lg px-6 z-20">
        
        {/* Minimalist Central Broadcast Pulse */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-8 bg-black/60 rounded-full border border-white/10 shadow-2xl backdrop-blur-md">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full border-2 border-[#00f0ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <Radio className="w-6 h-6 text-white" />
          </motion.div>
          
          {/* Animated radar rings radiating outward */}
          <div className="absolute w-28 h-28 rounded-full border border-[#00f0ff]/15 animate-ping" />
        </div>

        {/* Minimalist Professional Typography */}
        <h2 className="font-sans text-xl font-black uppercase tracking-[0.35em] text-white mt-4 mb-1 text-center">
          ICFJ PRESS DIGITAL
        </h2>
        <span className="text-[9px] tracking-[0.4em] text-[#00f0ff]/70 uppercase mb-8 block text-center">
          OPERATIONAL BROADCAST CENTER
        </span>

        {/* Typewriter Terminal Feed */}
        <div className="w-80 sm:w-[420px] bg-[#070b0f] border border-white/10 rounded-xl p-5 shadow-2xl mb-8 text-left">
          <div className="flex gap-2 items-center text-[8px] text-gray-500 tracking-wider uppercase mb-3 border-b border-white/5 pb-2">
            <Terminal className="w-3.5 h-3.5" /> SYSTEM SYSTEM INITIALIZATION:
          </div>
          <div className="font-mono text-[9px] text-[#c2eff7]/80 tracking-wide leading-relaxed min-h-[30px] uppercase">
            <span className="text-[#00f0ff] mr-2">&gt;</span>
            {steps[activeStep]}
          </div>
        </div>

        {/* Minimalist clean progress */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="text-[9px] text-gray-400 tracking-[0.25em] font-bold">
            ESTABLECIENDO ENLACE SATELEITAL: {progress}%
          </div>
          <div className="w-56 h-[2px] bg-white/10 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.5)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Compass } from 'lucide-react';

export default function VoynichLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [statusText, setStatusText] = useState('VILLA MONDRAGONE: LOCKING CONCENTRIC DIALS...');

  const steps = [
    'ALIGNING GLYPH ORBITAL-01 [SCRIPT]... [LOCKED]',
    'SYNCHRONIZING OPTICAL SPECTRUM [BOTANICAL]... [LOCKED]',
    'COSMIC SWEEP RATIO: [HERBAL OVERLAY]... [CALIBRATED]',
    'NEWBOLD MICROSCOPIC ALPHABET SCAN... [RESOLVED]',
    'BYPASSING COGNITIVE BARRIER SEC-9... [COMPLETED]',
  ];

  // Concentric glyph rings content
  const ring1 = "☉☽☿♁♃♄♅♆♇♈♉♊♋♌♍♎♏";
  const ring2 = "♏♐♑♒♓☄★✵✹❈❦❧☿☉☽♁♃";
  const ring3 = "★✵✹❈❦☉☽☿♁♃♄♅♆♇♈♉♊♋";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 5) + 3, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 900);
          return 100;
        }

        const stepIndex = Math.min(Math.floor((next / 100) * steps.length), steps.length - 1);
        if (stepIndex !== activeStep) {
          setActiveStep(stepIndex);
          setStatusText(steps[stepIndex]);
        }

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete, activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.08,
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 bg-[#060403] z-[2000] flex items-center justify-center text-[#d4af37] font-mono select-none overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          src="/vou.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-35"
          style={{ filter: 'sepia(0.8) brightness(0.6) contrast(1.2)' }}
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_#060403_100%)]" />
      </div>

      {/* Drifting Golden Smoke / Dust */}
      <div className="absolute inset-0 bg-[#3a2512]/20 mix-blend-color-dodge filter blur-3xl opacity-50 pointer-events-none animate-pulse-slow"></div>

      {/* Medieval Scientific Parchment Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 pointer-events-none" />

      {/* Central Interactive Astrolabe Dial Mechanism */}
      <div className="relative flex flex-col items-center justify-center scale-90 sm:scale-100 z-10">
        
        {/* Giant Mechanical Wheels */}
        <div className="relative w-80 h-80 flex items-center justify-center rounded-full border-2 border-[#d4af37]/20 bg-black/60 shadow-[0_0_80px_rgba(58,37,18,0.5),inset_0_0_50px_rgba(212,175,55,0.15)] backdrop-blur-sm">
          
          {/* Inner Glowing Core Medallion */}
          <div className="absolute w-20 h-20 rounded-full bg-black border border-[#d4af37]/40 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)] z-30">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="text-[#d4af37] flex items-center justify-center"
            >
              <Compass className="w-8 h-8 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            </motion.div>
          </div>

          {/* Concentric Astrolabe Ring 1 (Inner - Rotates clockwise) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="absolute w-[140px] h-[140px] rounded-full border border-[#d4af37]/15 flex items-center justify-center font-mono text-[9px] text-[#f3e5ab]/70 z-20"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <path id="textPath1" fill="none" d="M 50,50 m -22,0 a 22,22 0 1,1 44,0 a 22,22 0 1,1 -44,0" />
              <text fontSize="7" letterSpacing="3.5" fill="#d4af37" opacity="0.6">
                <textPath href="#textPath1">{ring1}</textPath>
              </text>
            </svg>
          </motion.div>

          {/* Concentric Astrolabe Ring 2 (Middle - Rotates counter-clockwise) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[210px] h-[210px] rounded-full border border-[#d4af37]/10 flex items-center justify-center font-mono text-[8px] text-[#d4af37]/50 z-10"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <path id="textPath2" fill="none" d="M 50,50 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0" />
              <text fontSize="6" letterSpacing="4.5" fill="#f3e5ab" opacity="0.5">
                <textPath href="#textPath2">{ring2}</textPath>
              </text>
            </svg>
          </motion.div>

          {/* Concentric Astrolabe Ring 3 (Outer - Rotates clockwise) */}
          <motion.div
            animate={{ rotate: 270 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="absolute w-[280px] h-[280px] rounded-full border border-[#d4af37]/5 flex items-center justify-center font-mono text-[7px] text-[#d4af37]/30 z-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <path id="textPath3" fill="none" d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
              <text fontSize="5.5" letterSpacing="5" fill="#d4af37" opacity="0.3">
                <textPath href="#textPath3">{ring3}</textPath>
              </text>
            </svg>
          </motion.div>

          {/* Chronometer sweep hand overlay */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute w-[130px] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#f3e5ab] origin-left left-[160px] top-[159px] z-20 pointer-events-none"
            style={{ transformOrigin: '0% 50%' }}
          />

          {/* Astrolabe degree markings */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => (
            <div
              key={idx}
              className="absolute w-4 h-[1px] bg-[#d4af37]/20"
              style={{
                transform: `rotate(${angle}deg) translate(144px)`,
              }}
            />
          ))}

        </div>

        {/* Codicology Heading */}
        <h2 className="font-maison text-3xl uppercase tracking-[0.3em] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5ab] to-[#d4af37] mt-8 mb-1 drop-shadow-md">
          INVESTIGACIÓN (1925)
        </h2>
        <span className="font-mono text-[9px] tracking-[0.45em] text-[#d4af37]/60 uppercase mb-8 block">
          MONDRAGONE ASTROLABE CALIBRATOR
        </span>

        {/* Dynamic calibration logs */}
        <div className="h-10 flex items-center justify-center w-full max-w-lg mb-4">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[9px] text-[#f3e5ab]/70 uppercase tracking-widest leading-relaxed text-center max-w-sm"
          >
            {statusText}
          </motion.p>
        </div>

        {/* Percentage Locking Gauge */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#d4af37] tracking-[0.4em] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
            {progress}% LOCKED
          </div>
          
          {/* Thin Progress bar wrapper */}
          <div className="w-48 h-[1px] bg-[#d4af37]/10 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.7)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

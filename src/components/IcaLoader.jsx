import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Book, Landmark } from 'lucide-react';

export default function IcaLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [statusText, setStatusText] = useState('CONGRESO DE AMERICANISTAS: OPENING DELEGATE ROSTER...');

  const steps = [
    'COLLECTING CRANEOMETRY ARCHIVES (GERMANY)... [DONE]',
    'RESOLVING TRANS-PACIFIC MIGRATION CHANNELS... [DATING]',
    'VERIFYING CLOVIS FIRST CONSENSUS BREAKDOWN... [WARNING]',
    'CALIBRATING STRATIGRAPHIC DATATION SCALES... [COMPLETED]',
    'ICA 1935 DEBATES PREPARED... [AUTHENTICATED]',
  ];

  // Latin and ancient coordinate values
  const coordinates = "51.5074° N, 0.1278° W | 19.4326° N, 99.1332° W | 12.0464° S, 77.0428° W";
  const ancientRings = "★ ANTROPOGENESIS ★ ORIGEN ★ RUTAS DE POBLAMIENTO ★ ICA 1935 ★";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 6) + 4, 100);
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
    }, 70);

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
      className="fixed inset-0 bg-[#0e0c0a] z-[2000] flex items-center justify-center text-[#c2a67a] font-mono select-none overflow-hidden"
    >
      {/* Background Image & Texture */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img 
          src="/a1.jpg"
          alt="Vintage Americanist Map"
          className="w-full h-full object-cover opacity-15"
          style={{ filter: 'sepia(0.9) brightness(0.4) contrast(1.1) blur(1px)' }}
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_#0e0c0a_100%)]" />
      </div>

      {/* Grid of measurement overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(194,166,122,0.06)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60 pointer-events-none" />

      {/* Retro scientific measuring corners */}
      <div className="absolute inset-10 border border-[#c2a67a]/5 pointer-events-none z-10 hidden md:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c2a67a]/30" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#c2a67a]/30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#c2a67a]/30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c2a67a]/30" />
        
        {/* Typographed stamp */}
        <div className="absolute bottom-4 left-4 text-[9px] text-[#c2a67a]/40 tracking-widest font-mono">
          ICA.VOL.1935.GENESIS.ANALYTICAL
        </div>
        <div className="absolute bottom-4 right-4 text-[9px] text-[#c2a67a]/40 tracking-widest font-mono">
          COORD: {coordinates}
        </div>
      </div>

      {/* Centerpiece Layout */}
      <div className="relative flex flex-col items-center justify-center scale-90 sm:scale-100 z-10">
        
        {/* Ancient Compasses / Dial Wheel */}
        <div className="relative w-80 h-80 flex items-center justify-center rounded-full border border-[#c2a67a]/20 bg-black/40 shadow-[0_0_80px_rgba(30,25,20,0.6),inset_0_0_50px_rgba(194,166,122,0.1)] backdrop-blur-sm">
          
          {/* Central Medallion */}
          <div className="absolute w-20 h-20 rounded-full bg-[#16120e] border border-[#c2a67a]/30 flex items-center justify-center shadow-[0_0_30px_rgba(194,166,122,0.15)] z-30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="text-[#c2a67a] flex items-center justify-center"
            >
              <Compass className="w-9 h-9 opacity-80" />
            </motion.div>
          </div>

          {/* Compass Rings */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[240px] h-[240px] rounded-full border border-[#c2a67a]/10 flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <path id="textPathIca" fill="none" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              <text fontSize="5.5" letterSpacing="4.2" fill="#c2a67a" opacity="0.6">
                <textPath href="#textPathIca">{ancientRings}</textPath>
              </text>
            </svg>
          </motion.div>

          {/* Outer Calibration Ring */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-[#c2a67a]/5 pointer-events-none" />

          {/* Rotating radar sweep */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute w-[140px] h-[1px] bg-gradient-to-r from-transparent via-[#c2a67a]/20 to-[#c2a67a]/80 origin-left left-[160px] top-[159.5px] z-20 pointer-events-none"
            style={{ transformOrigin: '0% 50%' }}
          />

          {/* Dial Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => (
            <div
              key={idx}
              className="absolute w-3.5 h-[1px] bg-[#c2a67a]/25"
              style={{
                transform: `rotate(${angle}deg) translate(144px)`,
              }}
            />
          ))}

        </div>

        {/* Vintage Congress Heading */}
        <h2 className="font-maison text-2xl sm:text-3xl uppercase tracking-[0.25em] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4ebd0] to-[#c2a67a] mt-8 mb-1 text-center drop-shadow-md">
          CONGRESO DE AMERICANISTAS
        </h2>
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#c2a67a]/70 uppercase mb-8 block text-center">
          XXVI CONGRESO INTERNACIONAL - LA PLATA 1935
        </span>

        {/* Log updates */}
        <div className="h-10 flex items-center justify-center w-full max-w-lg mb-4">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[9px] text-[#c2a67a]/85 uppercase tracking-[0.18em] leading-relaxed text-center max-w-sm"
          >
            {statusText}
          </motion.p>
        </div>

        {/* Locked Progress Tracker */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#c2a67a] tracking-[0.3em] font-bold">
            {progress}% RESTORED
          </div>
          
          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-[#c2a67a]/10 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#c2a67a]/70 shadow-[0_0_8px_rgba(194,166,122,0.5)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

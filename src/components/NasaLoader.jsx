import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, Radio, Shield, Globe } from 'lucide-react';

export default function NasaLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING DEEP SPACE NETWORK (DSN)...');

  const steps = [
    'CONNECTING TO GOLDSTONE OVAL ANTENNA (DSS-14)... [OK]',
    'LINK ACQUIRED. INITIATING DOWNLINK CAPTURE FROM SATELLITE ATLAS-9... [OK]',
    'DOWNLINK SECURED. ACQUIRING ISOTOPIC FIRMWARE FOR OBJECT 3i/ATLAS... [OK]',
    'DECRYPTING ANOMALOUS TELEMETRY CARRIER SIGNAL... [SUCCESS]',
    'AUTHORIZING PLANETARY DEFENSE PROTOCOL DECR-5... [GRANTED]',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 4, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Elegant delay for clean transition
          return 100;
        }
        
        // Progressively advance through the status messages
        const stepIndex = Math.floor((next / 100) * steps.length);
        if (stepIndex !== activeStep && stepIndex < steps.length) {
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
        filter: "blur(12px)",
        scale: 1.02,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#020205] z-[2000] flex items-center justify-center text-white font-mono select-none overflow-hidden"
    >
      {/* Stars Dust Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,82,165,0.08)_0%,_transparent_75%)]" />
      
      {/* Sci-Fi Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      {/* Radar Sweep Effect */}
      <div className="absolute w-[80vw] h-[80vw] rounded-full border border-blue-900/10 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/5 origin-center"
        />
        <div className="w-[60vw] h-[60vw] rounded-full border border-blue-950/20" />
        <div className="w-[40vw] h-[40vw] rounded-full border border-blue-950/30" />
      </div>

      <div className="flex flex-col items-center justify-center max-w-xl w-full px-6 text-center relative z-10">
        
        {/* Glowing Satellite Dish Emblem Container */}
        <div className="relative mb-8 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute w-24 h-24 bg-[#0052a5]/10 rounded-full blur-xl"
          />
          <div className="w-16 h-16 rounded-2xl border border-blue-500/30 bg-black/40 flex items-center justify-center p-3 shadow-[0_0_20px_rgba(0,82,165,0.2)]">
            <Radio className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
        </div>

        {/* Agency Heading */}
        <h2 className="font-maison text-2xl uppercase tracking-[0.4em] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-300 mb-1 drop-shadow-md">
          NASA DEEP SPACE
        </h2>
        <span className="font-mono text-[9px] tracking-[0.35em] text-blue-400/60 uppercase mb-8 block">
          Downlink Terminal • Satellite Link-9
        </span>

        {/* Loading Bar */}
        <div className="w-64 h-[1px] bg-white/10 rounded-full relative overflow-hidden mb-6">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Terminal logs typing out */}
        <div className="h-10 flex items-center justify-center w-full max-w-md">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed text-center"
          >
            {statusText}
          </motion.p>
        </div>
        
        {/* Simple percentage */}
        <span className="font-mono text-[10px] text-blue-400 tracking-[0.25em] mt-4 font-bold">{progress}% SECURED</span>
      </div>
    </motion.div>
  );
}

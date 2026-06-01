import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radio, ShieldAlert } from 'lucide-react';

export default function IcfjLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [statusText, setStatusText] = useState('ICFJ NEWSROOM: CALIBRATING BROADCAST FEED...');

  const steps = [
    'CONNECTING TO SECURE PRESS SERVER [ICFJ-NET]... [ESTABLISHED]',
    'INITIALIZING LIVE TELEPRINTER SYSTEM [TELEX]... [ACTIVE]',
    'ROUTING CORRESPONDENT AUDIO FEEDS [WISIN.MP3]... [BUFFERS READY]',
    'SYNCHRONIZING SATELLITE NETWORK UPLINK [NYC-YORK]... [CALIBRATED]',
    'JOURNALISTIC ACCESS GRANTED. START COVERAGE NOW... [LAUNCHING]',
  ];

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
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete, activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(15px)",
        scale: 1.08,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#04070a] z-[2000] flex items-center justify-center text-[#06b6d4] font-mono select-none overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          src="/york.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-25"
          style={{ filter: 'grayscale(0.5) brightness(0.4) contrast(1.2)' }}
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_#04070a_100%)]" />
      </div>

      {/* Futuristic digital broadcasting lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none animate-scanline" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(6,182,212,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Cyber Corner HUD widgets */}
      <div className="absolute inset-8 border border-[#06b6d4]/10 pointer-events-none z-10 hidden md:block">
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#06b6d4]/40" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#06b6d4]/40" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#06b6d4]/40" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#06b6d4]/40" />
        
        {/* Rec glowing blinking recording dot */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-[10px] tracking-widest text-[#06b6d4]/80 font-bold">REC FEED [NYC_STREAM_1]</span>
        </div>
        <div className="absolute top-4 right-4 text-[10px] text-[#06b6d4]/60 tracking-widest">
          SYS.UPTIME: 19:35:102
        </div>
      </div>

      {/* Central News Camera Focal / Shutter Mechanism */}
      <div className="relative flex flex-col items-center justify-center scale-90 sm:scale-100 z-10">
        
        {/* Camera Focal Aperture Outer Frame */}
        <div className="relative w-72 h-72 flex items-center justify-center rounded-full border border-[#06b6d4]/20 bg-black/50 shadow-[0_0_80px_rgba(6,182,212,0.15),inset_0_0_40px_rgba(6,182,212,0.05)] backdrop-blur-sm">
          
          {/* Glowing central shutter core */}
          <div className="absolute w-20 h-20 rounded-full bg-[#03060a] border border-[#06b6d4]/40 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] z-30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="text-[#06b6d4] flex items-center justify-center"
            >
              <Radio className="w-8 h-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] animate-pulse" />
            </motion.div>
          </div>

          {/* Glowing Shutter blades circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-[210px] h-[210px] rounded-full border border-[#06b6d4]/10 flex items-center justify-center z-10"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />
              <path d="M 50,4 M 46,20 L 50,4 L 54,20" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <path d="M 50,96 L 46,80 M 50,96 L 54,80" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <path d="M 4,50 L 20,46 M 4,50 L 20,54" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <path d="M 96,50 L 80,46 M 96,50 L 80,54" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </svg>
          </motion.div>

          {/* Sweeping frequency sweep hand */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="absolute w-[120px] h-[2px] bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-[#06b6d4] origin-left left-[144px] top-[143px] z-20 pointer-events-none"
            style={{ transformOrigin: '0% 50%' }}
          />

          {/* Cyber tick markings */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => (
            <div
              key={idx}
              className="absolute w-3.5 h-[1px] bg-[#06b6d4]/30"
              style={{
                transform: `rotate(${angle}deg) translate(130px)`,
              }}
            />
          ))}

        </div>

        {/* Broadcasting Heading */}
        <h2 className="font-maison text-3xl uppercase tracking-[0.25em] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#06b6d4] mt-8 mb-1 drop-shadow-md text-center">
          ICFJ PRENSA
        </h2>
        <span className="font-mono text-[9px] tracking-[0.45em] text-[#06b6d4]/60 uppercase mb-8 block text-center">
          NYC INTERNATIONAL PRESS CENTER
        </span>

        {/* Dynamic loading logs */}
        <div className="h-10 flex items-center justify-center w-full max-w-lg mb-4">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[9px] text-cyan-200/80 uppercase tracking-widest leading-relaxed text-center max-w-sm"
          >
            {statusText}
          </motion.p>
        </div>

        {/* Percentage Locking Gauge */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#06b6d4] tracking-[0.3em] font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
            {progress}% CONNECTED
          </div>
          
          {/* Thin Progress bar */}
          <div className="w-48 h-[1px] bg-[#06b6d4]/10 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#06b6d4] shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

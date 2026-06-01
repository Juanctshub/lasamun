import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Radio, Tv, HardDrive, Wifi, Activity } from 'lucide-react';

export default function IcfjLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);

  const steps = [
    'SYS: ESTABLISHING QUANTUM LINK WITH NYC HEADQUARTERS...',
    'NET: ROUTING WISIN.MP3 AUDIO CHANNELS [HIGH RESONANCE BASS]...',
    'CAM: CALIBRATING APERTURE & FOCUS GRID... [OK]',
    'SEC: BYPASSING REGIONAL FIREWALLS FOR EXCLUSIVE LEAKS...',
    'SAT: SATELLITE SYNC WITH NEW YORK ACTIVE [YORK.MP4 BOUND]...',
    'SYS: PRESS CREDENTIALS VERIFIED. READY FOR BROADCAST...',
  ];

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
          setTerminalLogs((prevLogs) => [...prevLogs, steps[stepIndex]].slice(-4));
        }

        return next;
      });
    }, 55);

    // Initial log
    setTerminalLogs([steps[0]]);

    return () => clearInterval(interval);
  }, [onComplete, activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.05,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#020406] z-[2000] flex flex-col items-center justify-center text-[#00f0ff] font-mono select-none overflow-hidden"
    >
      {/* Pumping Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          src="/york.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-20"
          style={{ filter: 'hue-rotate(180deg) brightness(0.3) contrast(1.4) saturate(1.5)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020406] via-[#020406]/90 to-[#020406] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.05)_0%,_#020406_100%)]" />
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Cyber Shutter scanning lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,240,255,0.04)_2px,transparent_2px)] bg-[size:100%_8px] pointer-events-none animate-scanline" />

      {/* High-Tech Camera Viewfinder HUD Overlay */}
      <div className="absolute inset-6 border border-[#00f0ff]/15 pointer-events-none z-10">
        {/* Corners */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00f0ff]" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00f0ff]" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00f0ff]" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00f0ff]" />

        {/* Viewfinder parameters */}
        <div className="absolute top-4 left-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-[10px] tracking-[0.25em] text-red-500 font-bold">LIVE STAGE FEED</span>
          <span className="text-[9px] text-[#00f0ff]/60 border border-[#00f0ff]/30 px-1 rounded">1080P</span>
          <span className="text-[9px] text-[#00f0ff]/60 border border-[#00f0ff]/30 px-1 rounded">60FPS</span>
        </div>

        <div className="absolute top-4 right-6 flex items-center gap-4 text-[9px] text-[#00f0ff]/70">
          <div className="flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>BITRATE: 8500 kb/s</span>
          </div>
          <span>BATTERY: 98%</span>
        </div>

        {/* Framing bracket grid */}
        <div className="absolute inset-x-20 inset-y-16 border border-dashed border-[#00f0ff]/5 flex items-center justify-center">
          <div className="w-[1px] h-12 bg-[#00f0ff]/10" />
          <div className="h-[1px] w-12 bg-[#00f0ff]/10 absolute" />
        </div>

        {/* Exposure/Level scales on side */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 items-center">
          {[+3, +2, +1, 0, -1, -2, -3].map((val) => (
            <span key={val} className={`text-[8px] font-bold ${val === 0 ? 'text-[#00f0ff]' : 'text-[#00f0ff]/30'}`}>
              {val > 0 ? `+${val}` : val}
            </span>
          ))}
        </div>
      </div>

      {/* Main Shutter & Dial Core */}
      <div className="relative flex flex-col items-center justify-center z-10 scale-95 sm:scale-100">
        
        {/* Wireframe Rotating Camera Aperture */}
        <div className="relative w-64 h-64 flex items-center justify-center rounded-full border border-[#00f0ff]/20 bg-black/60 shadow-[0_0_100px_rgba(0,240,255,0.1),inset_0_0_50px_rgba(0,240,255,0.05)] backdrop-blur-md">
          
          {/* Pulsing Central Lens Shutter */}
          <div className="absolute w-28 h-28 rounded-full bg-[#03060a] border border-[#00f0ff]/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.25)] z-30 overflow-hidden">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="text-[#00f0ff] relative w-full h-full flex items-center justify-center"
            >
              {/* Shutter Blade SVG lines */}
              <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-80 stroke-current fill-none stroke-[1]">
                <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
                <circle cx="50" cy="50" r="30" />
                <path d="M50,20 L80,50 M80,50 L50,80 M50,80 L20,50 M20,50 L50,20" />
              </svg>
            </motion.div>
            
            {/* Blinking central recording icon */}
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <Camera className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(0,240,255,1)] animate-pulse" />
            </div>
          </div>

          {/* Aperture ring dials rotating */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-[#00f0ff]/20 flex items-center justify-center z-10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-[220px] h-[220px] rounded-full border border-double border-[#ff00a0]/15 flex items-center justify-center z-0"
          />

          {/* Sweep scanning radar */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute w-[110px] h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-[#00f0ff] origin-left left-[128px] top-[127.5px] z-20 pointer-events-none"
            style={{ transformOrigin: '0% 50%' }}
          />

          {/* Calibration markings */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => (
            <div
              key={idx}
              className="absolute w-3 h-[1px] bg-[#00f0ff]/40"
              style={{
                transform: `rotate(${angle}deg) translate(114px)`,
              }}
            />
          ))}

        </div>

        {/* Dynamic Broadcast Heading */}
        <h2 className="font-maison text-3xl uppercase tracking-[0.25em] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00f0ff] mt-8 mb-1 drop-shadow-md text-center">
          ICFJ PRENSA
        </h2>
        <span className="font-mono text-[9px] tracking-[0.45em] text-[#ff00a0] uppercase mb-8 block text-center animate-pulse">
          NYC CORRESPONDENT CONTROL TERMINAL
        </span>

        {/* Glowing holographic telemetry logs screen */}
        <div className="w-80 sm:w-96 bg-[#04090e]/90 border border-[#00f0ff]/20 rounded-2xl p-4 min-h-[90px] flex flex-col justify-end shadow-[inset_0_0_20px_rgba(0,240,255,0.05),0_10px_35px_rgba(0,0,0,0.5)] mb-8">
          <div className="flex gap-1.5 items-center text-[8px] text-gray-500 tracking-widest uppercase mb-2 border-b border-[#00f0ff]/10 pb-1">
            <Radio className="w-3 h-3 text-[#ff00a0]" /> TELEMETRÍA EN TIEMPO REAL:
          </div>
          <div className="font-mono text-[9px] text-cyan-200/80 tracking-wide text-left flex flex-col gap-1 leading-snug">
            {terminalLogs.map((log, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-[#ff00a0]">&gt;</span>
                <span className="uppercase">{log}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Holographic 3D cylinder progress bar */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#00f0ff] tracking-[0.3em] font-bold drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">
            CONECTANDO AL SATÉLITE: {progress}%
          </div>
          <div className="w-56 h-2 bg-black border border-[#00f0ff]/20 rounded-full relative overflow-hidden p-[1px]">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#ff00a0] to-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.8)] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

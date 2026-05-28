import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CrisisLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [activeLogs, setActiveLogs] = useState([]);

  const logDatabase = [
    { pct: 0, text: "SYS: ESTABLISHING ANONYMOUS TOR TUNNEL [ONION ROUTING v4]..." },
    { pct: 15, text: "SYS: BYPASSING RUSSIAN STATE TELECOM BLOCKADES [ROSCOMNADZOR]..." },
    { pct: 30, text: "SYS: BOOTING DEEP WEB ENCRYPTED KRAKEN GATEWAY..." },
    { pct: 45, text: "SYS: DECRYPTING HYDRA LEGACY BLOCKCHAIN DATA..." },
    { pct: 60, text: "SYS: DETECTING COMPETING SERVERS: MEGA ENCRYPTED NETWORK..." },
    { pct: 75, text: "SYS: SYNCHRONIZING ILLICIT MARKET QUOTAS AND DOSSIERS..." },
    { pct: 90, text: "SYS: BYPASSING FINAL SECURITY FIREWALLS..." },
    { pct: 98, text: "SYS: ACCESS GRANTED. WELCOME TO KRAKEN ILLICIT MARKET." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1200); // Delay to let the final screen sink in
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Update logs based on the current percentage
  useEffect(() => {
    const triggered = logDatabase.filter(log => percent >= log.pct);
    setActiveLogs(triggered);
  }, [percent]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: "easeIn" } 
      }}
      className="fixed inset-0 bg-[#050508] z-[2000] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Cybernetic Dark Web Glow Background */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-[#ff007f]/5 blur-[180px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7928CA]/10 blur-[150px] pointer-events-none top-1/4 right-1/4 z-0" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,0,127,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,127,0.2)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="flex flex-col items-center max-w-lg w-full px-6 relative z-10 select-none">
        
        {/* Holographic Tor/Kraken Core Scanner */}
        <div className="relative w-40 h-40 mb-10 flex items-center justify-center bg-black/50 rounded-full border border-[#ff007f]/20 shadow-[0_0_40px_rgba(255,0,127,0.15)] overflow-hidden">
          {/* Rotating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border border-dashed border-[#ff007f]/40 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-5 border-2 border-[#7928CA]/30 rounded-full stroke-dasharray-[10_5]"
          />

          {/* Core Icon (Abstract Onion/Kraken) */}
          <div className="absolute w-20 h-20 text-[#ff007f]/70 flex items-center justify-center animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="#7928CA" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M42 42 C42 32, 58 32, 58 42 C58 46, 55 49, 50 52 C45 49, 42 46, 42 42 Z" fill="currentColor" opacity="0.8" />
              <circle cx="46.5" cy="42" r="1.5" fill="black" />
              <circle cx="53.5" cy="42" r="1.5" fill="black" />
              <path d="M46 50 Q40 58 32 64 M54 50 Q60 58 68 64 M48 51 Q44 64 42 74 M52 51 Q56 64 58 74 M50 52 Q50 68 50 78" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Active sweeping laser bar */}
          <motion.div
            animate={{ y: [-80, 80, -80] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff007f] to-transparent shadow-[0_0_15px_#ff007f] z-20"
          />
        </div>

        {/* Header Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-[#ff007f]/30 bg-[#ff007f]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff007f] animate-ping"></span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff007f] font-bold">TOR Routing v4</span>
          </div>

          <h3 className="font-maison text-[2.5rem] font-bold tracking-[0.1em] uppercase text-white leading-none mb-1">
            MERCADO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#7928CA]">KRAKEN</span>
          </h3>
          <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase block mt-2">
            DARK WEB SYNDICATE GATEWAY
          </span>
        </div>

        {/* Progress Bar & Decrypted Counter */}
        <div className="w-full max-w-[340px] flex flex-col items-center gap-3 mb-8">
          <div className="w-full flex justify-between items-baseline font-mono tracking-widest">
            <span className="uppercase text-[9px] text-white/50">Decryption Progress:</span>
            <span className="text-[#ff007f] font-bold text-base drop-shadow-[0_0_10px_rgba(255,0,127,0.6)]">
              {percent}%
            </span>
          </div>

          {/* Futuristic Data Bar */}
          <div className="w-full h-2 bg-white/5 border border-white/10 rounded-full p-[1px] relative overflow-hidden">
            <motion.div 
              className="h-full rounded-full bg-gradient-to-r from-[#7928CA] via-[#ff007f] to-white shadow-[0_0_10px_rgba(255,0,127,0.6)]"
              style={{ width: `${percent}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Dynamic Holographic Console Logs */}
        <div className="w-full h-28 bg-black/80 border border-white/10 rounded-2xl p-4 font-mono text-[9px] leading-relaxed text-left text-white/50 overflow-y-hidden shadow-inner relative max-w-[450px]">
          {/* Subtle scanning lines on terminal box */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.3)_50%)] pointer-events-none opacity-50 rounded-2xl" style={{ backgroundSize: '100% 4px' }}></div>
          
          <div className="flex flex-col justify-end h-full w-full gap-1">
            <AnimatePresence>
              {activeLogs.slice(-4).map((log, idx) => (
                <motion.div
                  key={log.pct}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`truncate flex items-center gap-2 ${idx === activeLogs.slice(-4).length - 1 ? 'text-[#ff007f] font-bold' : ''}`}
                >
                  <span className="text-[#7928CA] font-bold shrink-0">&gt;</span>
                  <span>{log.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

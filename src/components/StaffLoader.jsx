import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StaffLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [logs, setLogs] = useState([]);
  const [scrambledTitle, setScrambledTitle] = useState("");

  const mockLogsList = [
    "LOG: ESTABLISHING SECURE HANDSHAKE... [OK]",
    "LOG: ACCESSING PORT 8080 // DIPLOMATIC SECURE TUNNEL",
    "LOG: ACCESSING STAFF DIRECTORY DATABASE...",
    "LOG: DETECTING CREDENTIAL AUTHENTICATION...",
    "LOG: LEVEL 2 ENCRYPTED ACCESS GRANTED",
    "LOG: RESOLVING SYSTEM NAMESPACE: Barquisimeto",
    "LOG: GENERATING VECTOR AVATARS // CORE INITIALIZED",
    "LOG: DECRYPTING BIO-COORDINATE MATRIX...",
    "LOG: SYNCHRONIZING WITH GOVERNANCE NETWORK...",
    "LOG: DECRYPTION COMPLETED SUCCESSFULLY // REDIRECT"
  ];

  const fullTitle = "CARGANDO REGISTRO DE STAFF";

  // Loading percentage counter
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Brief delay for final fade out
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 5;
        return Math.min(prev + step, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Terminal logging logic syncing with percent progress
  useEffect(() => {
    const logIndex = Math.min(
      Math.floor((percent / 100) * mockLogsList.length),
      mockLogsList.length - 1
    );
    
    if (logs.length <= logIndex && mockLogsList[logIndex]) {
      setLogs((prev) => [...prev, mockLogsList[logIndex]].slice(-4)); // keep last 4 logs
    }
  }, [percent]);

  // Scrambler character decryption effect
  useEffect(() => {
    let currentIteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    
    const interval = setInterval(() => {
      setScrambledTitle(
        fullTitle
          .split("")
          .map((char, index) => {
            if (index < currentIteration || char === " ") {
              return fullTitle[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (currentIteration >= fullTitle.length) {
        clearInterval(interval);
      }
      
      currentIteration += 0.5; // speed of character reveal
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#020208] z-[2000] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Background space grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* Sweeping Laser Scanner Bar */}
      <motion.div 
        animate={{ y: ["-10vh", "110vh"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-yellow to-transparent shadow-[0_0_20px_#FFD100] z-10 pointer-events-none"
      />

      <div className="relative flex flex-col items-center max-w-lg w-full px-6 z-20">
        
        {/* Futuristic Tactical HUD Orbital Ring */}
        <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
          {/* Constellation circle 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-primary-yellow/40 rounded-full"
          />
          {/* Constellation circle 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 border border-primary-blue/30 rounded-full"
          />
          {/* Inner sensor ticks */}
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-28 h-28 border border-dotted border-white/20 rounded-full"
          />
          {/* Center core pulse */}
          <motion.div
            animate={{ scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-yellow/30 to-primary-blue/30 blur-xl opacity-90"
          />
          {/* Corner HUD Brackets */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-primary-yellow/50"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-primary-yellow/50"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-primary-yellow/50"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-primary-yellow/50"></div>

          {/* Centered Loading Counter */}
          <span className="absolute font-mono text-base text-white font-bold tracking-widest">{percent}%</span>
        </div>

        {/* Decrypted Header Vibe */}
        <span className="font-codec text-[10px] text-primary-yellow tracking-[0.4em] uppercase mb-2 block text-center font-bold">
          SECURE SCANNING DIRECTORY
        </span>
        
        <h3 className="font-maison text-2xl md:text-3xl font-extrabold uppercase tracking-[0.1em] mb-4 text-center text-white leading-none h-8 font-mono">
          {scrambledTitle}
        </h3>

        {/* Cyberpunk progress status bar */}
        <div className="w-72 h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-6">
          <div 
            className="h-full bg-gradient-to-r from-primary-yellow via-white to-primary-blue transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Dynamic Terminal Logs Console */}
        <div className="w-full bg-black/60 border border-white/5 rounded-2xl p-4 font-mono text-[10px] text-left text-white/50 min-h-[96px] backdrop-blur-md relative overflow-hidden shadow-2xl flex flex-col gap-1.5">
          <div className="absolute top-2 right-4 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
          <div className="text-[9px] text-white/20 border-b border-white/5 pb-1 mb-1 font-bold uppercase tracking-wider">
            [ TERMINAL CONSOLE LOGS ]
          </div>
          <AnimatePresence>
            {logs.map((log, idx) => (
              <motion.div
                key={log}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={idx === logs.length - 1 ? "text-primary-yellow font-bold" : "opacity-60"}
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <span className="font-mono text-[9px] text-white/30 tracking-[0.3em] uppercase mt-6 select-none">
          SYSTEM_ACCESS: GRANTED // BARQUISIMETO 2026
        </span>
      </div>
    </motion.div>
  );
}

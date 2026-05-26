import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StaffLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Wait briefly after 100% then fade out
          return 100;
        }
        // Random incremental steps to simulate a realistic network load
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#03030f] z-[2000] flex flex-col items-center justify-center text-white"
    >
      {/* Background space grit */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative flex flex-col items-center max-w-sm px-6">
        
        {/* Intersecting cybernetic orbit tracks */}
        <div className="relative w-36 h-36 mb-12 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-primary-yellow/40 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 border border-primary-blue/30 rounded-full"
          />
          <motion.div
            animate={{ scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-yellow/30 to-primary-blue/30 blur-xl opacity-80"
          />
          
          {/* Centered Loading Counter */}
          <span className="absolute font-mono text-sm text-white font-bold tracking-widest">{percent}%</span>
        </div>

        <span className="font-codec text-[10px] text-primary-yellow tracking-[0.35em] uppercase mb-2 block text-center font-bold">
          SISTEMA DE LIDERAZGO LASAMUN
        </span>
        
        <h3 className="font-maison text-2xl font-bold uppercase tracking-[0.15em] mb-6 text-center text-white leading-none">
          CARGANDO ARCHIVOS DE STAFF
        </h3>

        {/* Loading Progress Bar */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-4">
          <div 
            className="h-full bg-gradient-to-r from-primary-yellow via-white to-primary-blue transition-all duration-200"
            style={{ width: `${percent}%` }}
          />
        </div>

        <span className="font-mono text-[9px] text-white/30 tracking-[0.25em] uppercase select-none">
          SECURE PROTOCOL // CARACAS 2026
        </span>
      </div>
    </motion.div>
  );
}

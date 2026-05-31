import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StaffLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 4, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Elegant delay for clean transition
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(8px)",
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#050505] z-[2000] flex items-center justify-center text-white"
    >
      <div className="flex flex-col items-center justify-center max-w-xs w-full px-6 text-center">
        {/* Perfectly Centered Grayscale Logo */}
        <motion.img 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/lasamun.png" 
          alt="LASAMUN Logo" 
          className="w-24 h-24 mb-6 object-contain filter grayscale opacity-95"
        />

        {/* Clean centered text */}
        <h2 className="font-maison text-2xl uppercase tracking-[0.4em] font-extrabold mb-1">
          LASAMUN
        </h2>
        <span className="font-codec text-[9px] tracking-[0.3em] text-white/40 uppercase mb-8 block">
          Directorio de Staff
        </span>

        {/* Clean minimalist thin golden loading bar */}
        <div className="w-48 h-[1px] bg-white/10 rounded-full relative overflow-hidden mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        {/* Simple percentage */}
        <span className="font-mono text-[9px] text-[#D4AF37] tracking-widest">{progress}%</span>
      </div>
    </motion.div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StaffLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Elegant delay before fading out
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 10) + 5, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 1.2, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#050505] z-[2000] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center relative z-10"
      >
        <h2 className="font-maison text-3xl md:text-5xl uppercase tracking-[0.3em] font-light mb-2">
          LASAMUN
        </h2>
        <h3 className="font-codec text-sm md:text-base tracking-[0.5em] text-white/50 uppercase mb-16">
          Directorio Oficial
        </h3>

        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 font-mono text-[9px] text-white/30 tracking-widest uppercase"
        >
          {progress < 100 ? "Cargando perfiles..." : "Acceso concedido"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

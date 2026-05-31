import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export default function CorteLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1500); // Wait a moment at 100%
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 5) + 2, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      className="fixed inset-0 bg-[#0A0908] z-[2000] flex flex-col items-center justify-center text-[#E5D3B3] overflow-hidden"
    >
      {/* Royal / Court Background Textures */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200')] bg-cover bg-center opacity-5 mix-blend-overlay grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-[#0A0908]/90 to-[#0A0908]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col items-center relative z-10"
      >
        <img src="/corte.svg" alt="Corte Logo" className="w-24 h-24 mb-8 opacity-80 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
        
        <h2 className="font-maison text-2xl md:text-4xl tracking-[0.4em] uppercase font-light text-[#D4AF37] mb-2 text-center">
          Corte Federal
        </h2>
        <h3 className="font-codec text-[10px] md:text-xs tracking-[0.5em] text-[#E5D3B3]/50 uppercase mb-16 text-center">
          Distrito Sur de Nueva York
        </h3>

        <div className="w-48 h-[1px] bg-[#D4AF37]/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 font-mono text-[9px] text-[#D4AF37]/50 tracking-widest uppercase"
        >
          {progress < 100 ? "Estableciendo sesión..." : "El Tribunal está en sesión"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

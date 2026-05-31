import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export default function StaffLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Estableciendo conexión...');

  useEffect(() => {
    const statuses = [
      'Estableciendo conexión segura...',
      'Cargando bases de datos de directores...',
      'Renderizando archivo fotográfico...',
      'Desencriptando semblanzas...',
      'El Tribunal está listo...'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 4, 100);
        
        // Dynamic status updates based on progress intervals
        if (next < 25) setStatusText(statuses[0]);
        else if (next < 50) setStatusText(statuses[1]);
        else if (next < 75) setStatusText(statuses[2]);
        else if (next < 95) setStatusText(statuses[3]);
        else setStatusText(statuses[4]);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1200); // Elegant delay for dramatic transition
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(15px)",
        transition: { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
      className="fixed inset-0 bg-[#050505] z-[2000] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Luxury Golden Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center relative z-10 max-w-md w-full px-6"
      >
        {/* Glowing Official LASAMUN Logo */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-700 animate-pulse"></div>
          <motion.img 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/lasamun.png" 
            alt="LASAMUN Logo" 
            className="w-28 h-28 relative z-10 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] filter grayscale"
          />
        </div>

        {/* Cinematic Labels */}
        <h2 className="font-maison text-3xl md:text-4xl uppercase tracking-[0.45em] font-light mb-2 text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 font-extrabold">
          LASAMUN
        </h2>
        
        <div className="flex items-center gap-2 mb-14 text-white/40">
          <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-codec text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400">
            Directorio de Staff
          </span>
        </div>

        {/* Ultra-thin luxury gold progress bar container */}
        <div className="w-56 h-[1.5px] bg-white/5 border border-white/5 rounded-full relative overflow-hidden mb-6">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.9)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        {/* Dynamic status labels */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={statusText}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-[9px] text-[#D4AF37] tracking-[0.25em] uppercase font-light text-center h-4"
          >
            {statusText}
          </motion.div>
        </AnimatePresence>

        {/* Progress Percentage Indicator */}
        <span className="mt-2 font-mono text-[10px] text-white/20 tracking-widest">{progress}%</span>
      </motion.div>
    </motion.div>
  );
}

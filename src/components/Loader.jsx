import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onEnter }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the click-to-enter button after the star animation is mostly finished
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Stars */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="flex flex-col items-center justify-center gap-10 z-10 relative">
        {/* Glowing Interactive Star Logo */}
        <motion.img
          src="/star.png"
          alt="La Salle Star"
          initial={{ scale: 0.1, opacity: 0, filter: 'blur(0px) drop-shadow(0 0 20px rgba(255,209,0,1))' }}
          animate={showButton ? {
            scale: 1,
            opacity: 0.9,
            rotate: 360,
            filter: 'blur(0px) drop-shadow(0px 0px 30px rgba(255,209,0,0.8))'
          } : { 
            scale: [0.1, 1], 
            opacity: [0, 1], 
            rotate: [0, 360],
            filter: [
              'blur(0px) drop-shadow(0px 0px 30px rgba(255,209,0,1))', 
              'blur(0px) drop-shadow(0px 0px 40px rgba(255,209,0,1))'
            ]
          }}
          transition={showButton ? {
            duration: 1.5,
            ease: "easeOut"
          } : { 
            duration: 2.0, 
            ease: [0.5, 0, 0.2, 1]
          }}
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />

        {/* Premium Interactive Enter Button */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="flex flex-col items-center gap-4"
          >
            <button 
              onClick={onEnter}
              className="relative px-10 py-5 rounded-full border border-[#FFD100]/60 bg-white/5 backdrop-blur-md text-[#FFD100] font-codec text-sm uppercase tracking-[0.3em] font-extrabold shadow-[0_0_30px_rgba(255,209,0,0.15)] hover:shadow-[0_0_50px_rgba(255,209,0,0.5)] hover:bg-[#FFD100] hover:text-black transition-all duration-500 cursor-pointer animate-[pulse_2s_infinite]"
            >
              Comenzar Experiencia
            </button>
            <p className="font-mono text-[9px] text-white/30 tracking-[0.2em] uppercase">
              ✦ Audio Habilitado: Frutiger & LMFAO ✦
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

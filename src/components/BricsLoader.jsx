import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield } from 'lucide-react';

export default function BricsLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [stepText, setStepText] = useState('');

  const steps = [
    'Estableciendo enlace seguro con la Cumbre del Sur Global...',
    'Sincronizando agenda académica y diplomática...',
    'Cargando protocolo multilateral de Fortaleza...',
    'Verificando acreditaciones oficiales de delegados...',
    'Abriendo directorio oficial BRICS+...',
    'Bienvenido a la sesión plenaria de las potencias emergentes.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 6) + 4, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1200);
          return 100;
        }

        const stepIndex = Math.min(Math.floor((next / 100) * steps.length), steps.length - 1);
        if (stepIndex !== activeStep) {
          setActiveStep(stepIndex);
        }

        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete, activeStep]);

  useEffect(() => {
    let currentText = steps[activeStep];
    let i = 0;
    setStepText('');
    const typingInterval = setInterval(() => {
      if (i < currentText.length) {
        setStepText((prev) => prev + currentText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, [activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.05,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#040302] z-[2000] flex items-center justify-center text-[#d4af37] font-mono select-none overflow-hidden"
    >
      {/* Premium Cinematic Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0b0806_0%,_#020101_100%)] pointer-events-none" />

      {/* Elegant minimalist gold frame accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#d4af37]/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#d4af37]/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#d4af37]/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#d4af37]/20" />

      <div className="relative flex flex-col items-center justify-center max-w-xl w-full px-6 z-10">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-4 mb-12 w-full text-center border-b border-[#d4af37]/10"
        >
          <span className="text-[8px] tracking-[0.6em] text-[#d4af37]/40 uppercase block mb-1">Modelo de Naciones Unidas</span>
          <h2 className="text-xl sm:text-2xl font-serif italic font-bold uppercase tracking-wider text-white">BRICS+ SUMMIT</h2>
          <span className="text-[7px] text-gray-500 tracking-[0.4em] uppercase block mt-1">Sur Global y Orden Multipolar</span>
        </motion.div>

        {/* Central Spinning Glowing Emblem */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-12">
          {/* Animated concentric gold rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#d4af37]/15"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-[#d4af37]/10"
          />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-8 rounded-full bg-[#0d0a08]/90 border-2 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col items-center justify-center relative z-20 text-[#d4af37]"
          >
            <Globe className="w-12 h-12 stroke-[1.2] text-[#d4af37] animate-pulse" />
          </motion.div>
        </div>

        {/* Smooth, high-contrast typewriter monitor */}
        <div className="w-full bg-[#0c0a08]/85 border border-[#d4af37]/20 rounded-2xl p-5 min-h-[90px] flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-8 text-left relative overflow-hidden">
          <div className="absolute top-2 right-4 text-[7px] text-[#d4af37]/60 font-black tracking-widest animate-pulse">SECURE FEED</div>
          
          <div className="text-[8px] text-[#d4af37]/50 font-mono tracking-widest uppercase mb-1.5 border-b border-[#d4af37]/10 pb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
            ESTADO DE CONEXIÓN:
          </div>
          <div className="font-mono text-[10px] text-[#f4eee1] tracking-wide leading-relaxed min-h-[30px] uppercase">
            {stepText}
            <span className="animate-pulse font-black text-[#d4af37] ml-0.5">■</span>
          </div>
        </div>

        {/* Minimalist Golden Progress Bar */}
        <div className="flex flex-col items-center gap-2.5 w-full">
          <div className="font-mono text-[9px] text-[#d4af37]/80 tracking-[0.4em] font-bold uppercase">
            Sincronizando: {progress}%
          </div>
          <div className="w-full h-[1.5px] bg-[#d4af37]/10 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37]/50 to-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

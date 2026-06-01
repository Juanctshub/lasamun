import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Compass } from 'lucide-react';

export default function BricsLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [stepText, setStepText] = useState('');

  const steps = [
    'INICIANDO PROTOCOLO MULTILATERAL DE FORTALEZA...',
    'CALIBRANDO MECANISMO DE LIQUIDACIÓN COOPERATIVA...',
    'SINCRONIZANDO CANASTA MONETARIA DE LA CÚPULA DE RESERVAS (R5)...',
    'VERIFICANDO RESPALDOS SOBERANOS EN LINGOTES DE ORO FÍSICO...',
    'ABRIENDO BÓVEDA FINANCIERA DEL SUR GLOBAL...',
    'ACCESO PROTOCOLAR AUTORIZADO - BIENVENIDO DELEGADO.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 6) + 4, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1100);
          return 100;
        }

        const stepIndex = Math.min(Math.floor((next / 100) * steps.length), steps.length - 1);
        if (stepIndex !== activeStep) {
          setActiveStep(stepIndex);
        }

        return next;
      });
    }, 85);

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
    }, 18);

    return () => clearInterval(typingInterval);
  }, [activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(25px)",
        scale: 1.05,
        transition: { duration: 0.9, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#080706] z-[2000] flex items-center justify-center text-[#c5a059] font-mono select-none overflow-hidden"
    >
      {/* Ancient Copper Grid & Sunburst lines for Sovereign Look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#120f0d_0%,_#050403_100%)] pointer-events-none" />

      {/* Decorative Ornate Corner Borders */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#c5a059]/20 rounded-tl-xl" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#c5a059]/20 rounded-tr-xl" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#c5a059]/20 rounded-bl-xl" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#c5a059]/20 rounded-br-xl" />

      <div className="relative flex flex-col items-center justify-center max-w-xl w-full px-6 z-10">
        
        {/* Luxury Gold Seal Header */}
        <div className="pb-6 mb-10 w-full text-center border-b border-[#c5a059]/15">
          <span className="text-[8px] tracking-[0.5em] text-[#c5a059]/50 uppercase block mb-1">SOVEREIGN RESERVES VAULT DECK</span>
          <h2 className="text-xl sm:text-2xl font-serif italic font-black uppercase tracking-wider text-white">BRICS+ MULTILATERAL DECK</h2>
          <span className="text-[7px] text-gray-500 tracking-[0.35em] uppercase block mt-1">CUSTODIA FINANCIERA DEL SUR GLOBAL</span>
        </div>

        {/* The Grand Central Vault Gear (Physical Lock Mechanism - Highly Unique) */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-10">
          
          {/* Static outer golden dial with degrees */}
          <div className="absolute inset-0 rounded-full border-2 border-[#c5a059]/10 flex items-center justify-center">
            {Array.from({ length: 24 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute w-2 h-[1px] bg-[#c5a059]/30" 
                style={{ transform: `rotate(${i * 15}deg) translate(124px)` }}
              />
            ))}
          </div>

          {/* Golden Gear 1 (Outer rotating lock gear) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-dashed border-[#c5a059]/25 flex items-center justify-center"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute w-4 h-4 border-t border-l border-[#c5a059]/30" 
                style={{ transform: `rotate(${i * 45}deg) translate(92px)` }}
              />
            ))}
          </motion.div>

          {/* Golden Gear 2 (Inner gear rotating counter-clockwise) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute inset-10 rounded-full border-2 border-double border-[#c5a059]/15 flex items-center justify-center"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute text-[8px] font-black text-[#c5a059]/40" 
                style={{ transform: `rotate(${i * 60}deg) translate(52px)` }}
              >
                R5
              </div>
            ))}
          </motion.div>

          {/* Central Sovereign Vault Handle */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="w-28 h-28 rounded-full bg-[#181411] border-2 border-[#c5a059] shadow-[0_0_40px_rgba(197,160,89,0.2)] flex flex-col items-center justify-center relative z-20 text-[#c5a059] group"
          >
            <Landmark className="w-10 h-10 stroke-[1.2]" />
            <span className="text-[7.5px] font-bold text-gray-500 uppercase tracking-widest mt-1">SECURE</span>

            {/* Glowing locking indicator dot */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute inset-[-6px]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#c5a059] shadow-[0_0_12px_#c5a059] absolute top-0 left-1/2 -translate-x-1/2" />
            </motion.div>
          </motion.div>
        </div>

        {/* Vintage Parchment-Style Sync Monitor */}
        <div className="w-full bg-[#14100d] border border-[#c5a059]/20 rounded-2xl p-5 min-h-[90px] flex flex-col justify-between shadow-inner mb-8 text-left relative overflow-hidden">
          <div className="absolute top-2 right-4 text-[7px] text-emerald-500/60 font-black tracking-widest animate-pulse">SECURE FEED</div>
          
          <div className="text-[8px] text-[#c5a059]/50 font-mono tracking-widest uppercase mb-1.5 border-b border-[#c5a059]/10 pb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
            ESTADO DE DESBLOQUEO SOBERANO:
          </div>
          <div className="font-mono text-[10.5px] text-[#f2e7d5] tracking-wide leading-relaxed min-h-[30px] uppercase">
            {stepText}
            <span className="animate-pulse font-black text-[#c5a059] ml-0.5">■</span>
          </div>
        </div>

        {/* Progress percent & bar */}
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="font-mono text-[9px] text-[#c5a059] tracking-[0.35em] font-bold uppercase">
            ESTABLECIENDO CONSENSO MULTILATERAL: {progress}%
          </div>
          <div className="w-full h-[1.5px] bg-[#c5a059]/10 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#c5a059]/40 to-[#c5a059] shadow-[0_0_8px_rgba(197,160,89,0.5)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Coins, Globe, Cpu } from 'lucide-react';

export default function BricsLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');

  const steps = [
    'BRICS+ CORE TERMINAL // ESTABLECIENDO CANALES MULTILATERALES...',
    'CALCULANDO PODER PARITARIO DE COMPRA (PPP) DEL SUR GLOBAL...',
    'DESENCRIPTANDO PROTOCOLOS DE COMPENSACIÓN FINANCIERA BRICS PAY...',
    'SINCRONIZANDO CANASTA DE MONEDAS SOBERANAS (R5 RESERVES)...',
    'VERIFICANDO RESPALDOS SOBERANOS EN RESERVAS DE ORO...',
    'ACCESO A LA CUMBRE MULTILATERAL CONCEDIDO. BIENVENIDO, DELEGADO.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 6, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
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

  // Typewriter effect for step logs
  useEffect(() => {
    let currentText = steps[activeStep];
    let i = 0;
    setTypewriterText('');
    const typingInterval = setInterval(() => {
      if (i < currentText.length) {
        setTypewriterText((prev) => prev + currentText.charAt(i));
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
      className="fixed inset-0 bg-[#07080a] z-[2000] flex items-center justify-center text-[#c5a059] font-mono select-none overflow-hidden"
    >
      {/* Geopolitical high-tech matrix lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050507_90%)] pointer-events-none" />

      {/* Top and Bottom Decorative Golden Bevel Borders */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />

      <div className="relative flex flex-col items-center justify-center max-w-xl w-full px-6 z-10">
        
        {/* Header Block */}
        <div className="border-b border-[#c5a059]/25 pb-4 mb-8 w-full text-center">
          <span className="text-[9px] tracking-[0.45em] text-[#c5a059]/60 uppercase block mb-1">SOVEREIGN WEALTH & COOPERATION HUB</span>
          <h2 className="text-2xl font-black uppercase tracking-widest text-white">BRICS+ SUMMIT INITIALIZATION</h2>
          <span className="text-[7.5px] text-gray-500 tracking-[0.3em] uppercase block mt-1">MULTILATERAL SECURE DECK • LEVEL 6</span>
        </div>

        {/* Sovereign Seals Mandala (Interconnected currency wheels) */}
        <div className="relative w-56 h-56 flex items-center justify-center mb-8">
          
          {/* Static outer ring */}
          <div className="absolute inset-0 rounded-full border border-[#c5a059]/15 flex items-center justify-center">
            {/* Country flags / currency ticks */}
            {['B', 'R', 'I', 'C', 'S', '+'].map((char, i) => (
              <div 
                key={i} 
                className="absolute text-[8.5px] font-black text-[#c5a059]/30"
                style={{ transform: `rotate(${i * 60}deg) translate(100px)` }}
              >
                {char}
              </div>
            ))}
          </div>

          {/* Golden Orbit 1 - Fast spinning left */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-44 h-44 rounded-full border border-[#c5a059]/30 border-dashed"
          />

          {/* Golden Orbit 2 - Slower spinning right with ticks */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-36 h-36 rounded-full border-2 border-double border-[#c5a059]/20 flex items-center justify-center"
          >
            <div className="w-full h-[1px] bg-[#c5a059]/10 absolute transform rotate-45" />
            <div className="w-full h-[1px] bg-[#c5a059]/10 absolute transform rotate-135" />
          </motion.div>

          {/* Central Sovereign Core Symbol */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-[#0e1116] border-2 border-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.25)] flex items-center justify-center relative z-20 text-[#c5a059]"
          >
            <Coins className="w-10 h-10 stroke-[1.2]" />
            
            {/* Spinning orbital dots */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-[-4px]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white border border-[#c5a059] absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_white]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Technical Typewriter Log Display */}
        <div className="w-full bg-[#0d1014] border border-[#c5a059]/20 rounded-2xl p-5 min-h-[95px] flex flex-col justify-between shadow-2xl mb-8 text-left relative overflow-hidden">
          <div className="absolute top-2 right-3 text-[7px] text-gray-600 font-black animate-pulse">LIVE FEED</div>
          
          <div className="text-[8px] text-gray-500 font-mono tracking-widest uppercase mb-2 border-b border-[#c5a059]/10 pb-1 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
            GEOPOLITICAL SYNC STATUS:
          </div>
          <div className="font-mono text-[10.5px] text-[#ece2d0] tracking-wide leading-relaxed min-h-[35px] uppercase">
            {typewriterText}
            <span className="animate-pulse font-black text-[#c5a059] ml-0.5">_</span>
          </div>
        </div>

        {/* Progress percent & bar */}
        <div className="flex flex-col items-center gap-2.5 w-full">
          <div className="font-mono text-[9px] text-[#c5a059] tracking-[0.35em] font-bold">
            CONSOLIDANDO ALIANZA DE COOPERACIÓN: {progress}%
          </div>
          <div className="w-full h-[2px] bg-white/5 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#c5a059] shadow-[0_0_10px_rgba(197,160,89,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

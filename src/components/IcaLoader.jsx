import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, FileText, Globe } from 'lucide-react';

export default function IcaLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');

  const steps = [
    'TELEGRAMA ICA: ESTABLECIENDO CONEXIÓN CON LA PLATA...',
    'CARGANDO PLACAS GEOLÓGICAS Y MUESTRAS DE CRÁNEOS...',
    'DESENCRIPTANDO ARCHIVOS CONFIDENCIALES DE EUROPA CENTRAL...',
    'INICIALIZANDO RUTA DE MIGRACIÓN TRANSPACÍFICA...',
    'CONGRESO AUTORIZADO - BIENVENIDO DELEGADO.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 5, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 900);
          return 100;
        }

        const stepIndex = Math.min(Math.floor((next / 100) * steps.length), steps.length - 1);
        if (stepIndex !== activeStep) {
          setActiveStep(stepIndex);
        }

        return next;
      });
    }, 80);

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
    }, 20);

    return () => clearInterval(typingInterval);
  }, [activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(15px)",
        scale: 1.05,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#120f0d] z-[2000] flex items-center justify-center text-[#d4b285] font-mono select-none overflow-hidden"
    >
      {/* Heavy vintage grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,178,133,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Top and Bottom Vintage Borders */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#d4b285]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#d4b285]/20 to-transparent" />

      <div className="relative flex flex-col items-center justify-center max-w-lg px-6 z-10">
        
        {/* Vintage Telegram Header */}
        <div className="border-b border-[#d4b285]/30 pb-4 mb-8 w-full text-center">
          <span className="text-[10px] tracking-[0.4em] text-[#d4b285]/55 uppercase block mb-1">SERVICIO DE TELEGRAFÍA NACIONAL</span>
          <h2 className="text-xl font-bold uppercase tracking-wider text-white">CONGRESO AMERICANISTAS 1935</h2>
        </div>

        {/* Rotating Compass Rose (Unique loader compared to Voynich's Concentric Rings) */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-8">
          {/* Static outer compass circle */}
          <div className="absolute inset-0 rounded-full border border-[#d4b285]/20 flex items-center justify-center">
            {/* Degree ticks */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <div 
                key={i} 
                className="absolute w-2 h-[1px] bg-[#d4b285]/40" 
                style={{ transform: `rotate(${deg}deg) translate(92px)` }}
              />
            ))}
          </div>

          {/* Rotating inner compass rose */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="w-36 h-36 relative flex items-center justify-center opacity-85 text-[#d4b285]"
          >
            <Compass className="w-24 h-24 stroke-[1.2]" />
            {/* Compass labels */}
            <span className="absolute top-1 text-[9px] font-bold">N</span>
            <span className="absolute bottom-1 text-[9px] font-bold">S</span>
            <span className="absolute right-1 text-[9px] font-bold">E</span>
            <span className="absolute left-1 text-[9px] font-bold">O</span>
          </motion.div>

          {/* Glowing central core */}
          <div className="absolute w-4 h-4 rounded-full bg-[#1c1612] border border-[#d4b285] shadow-[0_0_15px_rgba(212,178,133,0.5)] z-20" />
        </div>

        {/* Telegram Typewriter Box */}
        <div className="w-full bg-[#1c1612] border border-[#d4b285]/20 rounded-2xl p-6 min-h-[100px] flex flex-col justify-between shadow-inner mb-8">
          <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2 border-b border-[#d4b285]/10 pb-1">
            ESTADO DE CONEXIÓN TELEGRÁFICA:
          </div>
          <div className="font-mono text-xs text-[#ece2d0] tracking-wide leading-relaxed min-h-[40px] uppercase">
            {typewriterText}
            <span className="animate-pulse font-bold ml-1">|</span>
          </div>
        </div>

        {/* Progress percent */}
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="font-mono text-[10px] text-[#d4b285] tracking-[0.3em] font-bold">
            RESTABLECIENDO COMUNICACIÓN: {progress}%
          </div>
          <div className="w-full h-[1.5px] bg-[#d4b285]/10 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#d4b285] shadow-[0_0_8px_rgba(212,178,133,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

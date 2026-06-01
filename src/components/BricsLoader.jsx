import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield, Landmark } from 'lucide-react';

export default function BricsLoader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INICIANDO CONEXIÓN SEGURA');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const loadingSequence = [
      { progress: 15, text: 'ESTABLECIENDO PROTOCOLO MULTILATERAL...', delay: 600 },
      { progress: 35, text: 'AUTENTICANDO CREDENCIALES DIPLOMÁTICAS...', delay: 1400 },
      { progress: 55, text: 'SINCRONIZANDO ÍNDICES SOBERANOS...', delay: 2200 },
      { progress: 80, text: 'DESPLEGANDO ENTORNO BRICS+...', delay: 3000 },
      { progress: 100, text: 'ACCESO CONCEDIDO.', delay: 3800 },
    ];

    loadingSequence.forEach(({ progress, text, delay }) => {
      setTimeout(() => {
        setProgress(progress);
        setLoadingText(text);
        if (progress > 20) setShowLogo(true);
      }, delay);
    });

    const finishTimeout = setTimeout(() => {
      onLoadingComplete();
    }, 4500);

    return () => clearTimeout(finishTimeout);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#060504] z-[100] flex flex-col items-center justify-center overflow-hidden font-mono text-[#c5a059]">
      
      {/* Background elegant gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.08)_0%,_#060504_70%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ 
              y: "-100vh", 
              opacity: [0, 1, 0] 
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-[#c5a059] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(197,160,89,0.8)"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md px-8 flex flex-col items-center">
        
        {/* Logo Reveal */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 flex justify-center w-full"
            >
              <img 
                src="/brics_logo.png" 
                alt="BRICS+" 
                className="w-full max-w-xs h-auto object-contain filter drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]" 
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimalist Progress Bar */}
        <div className="w-full mb-6">
          <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] mb-2 font-bold opacity-80">
            <span>NDB SECURE LINK</span>
            <span>{progress}%</span>
          </div>
          <div className="h-0.5 w-full bg-[#c5a059]/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#c5a059]/50 via-[#ffd700] to-[#c5a059]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Dynamic Status Text */}
        <motion.div
          key={loadingText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-4 flex items-center"
        >
          <span className="text-[10px] tracking-widest text-[#c5a059]/90 font-medium">
            {loadingText}
          </span>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-[-40px] left-[-40px] opacity-20 animate-pulse">
          <Globe className="w-32 h-32 text-[#c5a059]" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[-40px] right-[-40px] opacity-10">
          <Landmark className="w-32 h-32 text-[#c5a059]" strokeWidth={0.5} />
        </div>

      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center opacity-40">
        <span className="text-[7px] uppercase tracking-[0.3em]">NEW DEVELOPMENT BANK © 2026</span>
      </div>

    </div>
  );
}

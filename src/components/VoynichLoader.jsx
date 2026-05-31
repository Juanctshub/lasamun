import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, Binary, Sparkles } from 'lucide-react';

export default function VoynichLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [statusText, setStatusText] = useState('DECODING SECURE ARCHIVE: VILLAMONDRAGONE-1912...');

  const steps = [
    'ANALYZING CARBON DATING ANOMALY (FOLIO 42R)... [OK]',
    'ISOLATING ISOTOPIC INK COMPOSITION... [ANOMALOUS IRON DETECTED]',
    'INITIALIZING BRUTE-FORCE GLYPH RECONSTRUCTION (ROMAINE NEWBOLD THESIS)... [OK]',
    'PARSING ASTRONOMICAL SPIRALS AND BOTANICAL ANATOMY LOGS... [SUCCESS]',
    'ATTEMPTING TEMPORAL COORDINATE RE-ALIGNMENT... [DECRYPTED]',
  ];

  // Random Voynich-like glyphs characters for aesthetic animation
  const glyphsList = "☿☉☽♁♃♄♅♆♇♈♉♊♋♌♍♎♏♐♑♒♓☄★✵✹❈❦❧";
  const [randomGlyphs, setRandomGlyphs] = useState('');

  useEffect(() => {
    // Generate random glyph array for background decoration
    const intervalGlyph = setInterval(() => {
      let result = '';
      for (let i = 0; i < 15; i++) {
        result += glyphsList.charAt(Math.floor(Math.random() * glyphsList.length)) + ' ';
      }
      setRandomGlyphs(result);
    }, 150);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 6) + 4, 100);
        if (next >= 100) {
          clearInterval(interval);
          clearInterval(intervalGlyph);
          setTimeout(onComplete, 850);
          return 100;
        }

        const stepIndex = Math.floor((next / 100) * steps.length);
        if (stepIndex !== activeStep && stepIndex < steps.length) {
          setActiveStep(stepIndex);
          setStatusText(steps[stepIndex]);
        }

        return next;
      });
    }, 70);

    return () => {
      clearInterval(interval);
      clearInterval(intervalGlyph);
    };
  }, [onComplete, activeStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(15px)",
        scale: 1.05,
        transition: { duration: 0.9, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#070503] z-[2000] flex items-center justify-center text-[#d4af37] font-mono select-none overflow-hidden"
    >
      {/* Drifting Parchment Particles / Dust */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#3a2512_0%,_transparent_80%)]" />
      
      {/* Old parchment fine grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,_transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

      {/* Medieval concentric scroll patterns overlay */}
      <div className="absolute w-[90vw] h-[90vw] rounded-full border border-[#d4af37]/5 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/0 to-[#d4af37]/5 origin-center"
        />
        <div className="w-[70vw] h-[70vw] rounded-full border border-[#d4af37]/3" />
        <div className="w-[50vw] h-[50vw] rounded-full border border-[#d4af37]/5 border-dashed" />
      </div>

      <div className="flex flex-col items-center justify-center max-w-xl w-full px-6 text-center relative z-10">
        
        {/* Ancient Medallion Emblem */}
        <div className="relative mb-8 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#d4af37]/5 rounded-full blur-2xl pointer-events-none"
          />
          <div className="w-24 h-24 rounded-full border border-[#d4af37]/30 bg-black/80 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)] relative overflow-hidden group">
            <BookOpen className="w-10 h-10 text-[#d4af37] animate-pulse drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            {/* Spinning inner circle with Voynich glyphs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#d4af37]/20 pointer-events-none"
            />
          </div>
        </div>

        {/* Codicology Heading */}
        <h2 className="font-maison text-2xl uppercase tracking-[0.3em] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5ab] to-[#d4af37] mb-1 drop-shadow-md">
          INVESTIGACIÓN (1925)
        </h2>
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#d4af37]/60 uppercase mb-8 block">
          Villa Mondragone Archive • Cripto-Decryption Terminal
        </span>

        {/* Animated scrolling glyph tape */}
        <div className="w-full bg-black/40 border border-[#d4af37]/10 rounded-xl p-3.5 mb-6 backdrop-blur-sm relative overflow-hidden min-h-[44px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span 
              key={randomGlyphs}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="font-mono text-[11px] text-[#f3e5ab] tracking-[0.25em] block text-center"
            >
              {randomGlyphs || '☉ ☿ ☽ ♁ ♃ ♄ ♅ ♆ ♇'}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Progress Bar (Parhment-Border Styled) */}
        <div className="w-64 h-[3px] bg-[#d4af37]/10 rounded-full relative overflow-hidden mb-6">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] shadow-[0_0_10px_rgba(212,175,55,0.6)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Typewriter Academic Logs */}
        <div className="h-12 flex items-center justify-center w-full max-w-md">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed text-center"
          >
            {statusText}
          </motion.p>
        </div>
        
        {/* Progress Indicator */}
        <span className="font-mono text-[9px] text-[#d4af37] tracking-[0.25em] mt-4 font-bold flex items-center gap-1.5 uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} /> {progress}% DECRYPTED
        </span>
      </div>
    </motion.div>
  );
}

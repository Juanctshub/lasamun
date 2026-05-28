import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Lock, Search, Network, ShieldCheck, TerminalSquare } from 'lucide-react';

export default function CrisisLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);

  const sequence = [
    { text: "INICIANDO PROTOCOLO ONION...", icon: TerminalSquare, color: "text-white" },
    { text: "CONECTANDO A LA RED TOR...", icon: Globe, color: "text-[#7928CA]" },
    { text: "ESTABLECIENDO NODOS DE RETRANSMISIÓN", icon: Network, color: "text-[#7928CA]" },
    { text: "BUSCANDO SERVICIOS OCULTOS (.ONION)", icon: Search, color: "text-[#ff007f]" },
    { text: "LOCALIZANDO KRAKEN SYNDICATE...", icon: Search, color: "text-[#ff007f]" },
    { text: "BYPASS DE FIREWALL RUSO COMPLETADO", icon: ShieldCheck, color: "text-emerald-500" },
    { text: "ACCESO CONCEDIDO.", icon: Lock, color: "text-emerald-500" }
  ];

  useEffect(() => {
    if (phase < sequence.length) {
      const timer = setTimeout(() => {
        setPhase(prev => prev + 1);
      }, phase === 2 ? 1500 : 800); // Wait longer on relay nodes
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1200);
    }
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 bg-[#050508] z-[2000] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(121,40,202,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Main Terminal Window */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-black/80 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(121,40,202,0.15)] backdrop-blur-md relative"
      >
        {/* Fake Browser Header */}
        <div className="bg-[#111] px-4 py-3 flex items-center gap-3 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="mx-auto flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-white/50 font-mono text-[10px] tracking-widest w-2/3 justify-center">
            <Lock className="w-3 h-3 text-emerald-500" />
            http://krak7qzv...onion
          </div>
        </div>

        {/* Console Body */}
        <div className="p-8 md:p-12 min-h-[300px] flex flex-col items-center justify-center relative">
          
          <AnimatePresence mode="wait">
            {phase < sequence.length ? (
              <motion.div 
                key={phase}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center gap-6"
              >
                {/* Dynamic Icon */}
                {React.createElement(sequence[phase].icon, {
                  className: `w-16 h-16 ${sequence[phase].color} animate-pulse drop-shadow-[0_0_15px_currentColor]`
                })}

                <h2 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] font-bold text-white/90">
                  {sequence[phase].text}
                </h2>

                {/* Simulated Relay Hop Visuals (Only shows on phase 2) */}
                {phase === 2 && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-[10px] font-mono text-white/40 mt-4"
                  >
                    <span>Tú</span>
                    <span className="text-[#7928CA] animate-pulse">→</span>
                    <span className="border border-white/10 px-2 py-1 rounded">Alemania (Guard)</span>
                    <span className="text-[#7928CA] animate-pulse">→</span>
                    <span className="border border-white/10 px-2 py-1 rounded">Rumania (Middle)</span>
                    <span className="text-[#7928CA] animate-pulse">→</span>
                    <span className="border border-white/10 px-2 py-1 rounded">Rusia (Exit)</span>
                  </motion.div>
                )}

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                  <motion.div 
                    className={`h-full ${phase >= 5 ? 'bg-emerald-500' : 'bg-gradient-to-r from-[#7928CA] to-[#ff007f]'}`}
                    initial={{ width: `${(phase / sequence.length) * 100}%` }}
                    animate={{ width: `${((phase + 1) / sequence.length) * 100}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-emerald-500 gap-4"
              >
                <div className="w-24 h-24 rounded-full border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                <h2 className="font-maison text-3xl font-bold uppercase tracking-widest text-white">Acceso Seguro</h2>
                <p className="font-mono text-xs text-white/50 tracking-widest">ENCRIPTACIÓN END-TO-END CONFIRMADA</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>

    </motion.div>
  );
}

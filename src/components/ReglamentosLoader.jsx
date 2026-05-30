import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShieldCheck, FileSearch } from 'lucide-react';

export default function ReglamentosLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Inicializando Protocolos...");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    
    const messages = [
      "Autenticando Acceso...",
      "Cargando Normativas...",
      "Sincronizando Archivos...",
      "Acceso Concedido."
    ];

    const updateInterval = setInterval(() => {
      currentProgress += Math.random() * 8 + 2;
      if (currentProgress > 100) currentProgress = 100;
      
      setProgress(currentProgress);

      if (currentProgress < 30) setStatus(messages[0]);
      else if (currentProgress < 60) setStatus(messages[1]);
      else if (currentProgress < 90) setStatus(messages[2]);
      else setStatus(messages[3]);

      if (currentProgress >= 100) {
        clearInterval(updateInterval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 500);
      }
    }, 150);

    return () => clearInterval(updateInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[5000] flex flex-col items-center justify-center bg-[#F8F9FA] text-[#0033A0] overflow-hidden"
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0033A0] rounded-full blur-[150px] mix-blend-multiply" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-yellow rounded-full blur-[180px] mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
            <div className="relative flex justify-center items-center mb-10 w-24 h-24">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[2px] border-dashed border-[#0033A0]/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-[1px] border-[#0033A0]/20 rounded-full"
              />
              <FileSearch className="w-10 h-10 text-[#0033A0]" />
            </div>

            <div className="w-full flex justify-between items-end mb-3">
              <span className="font-codec font-bold tracking-[0.2em] uppercase text-[10px] text-[#0033A0]/60">
                {status}
              </span>
              <span className="font-mono text-xs font-medium text-[#0033A0]">
                {Math.floor(progress)}%
              </span>
            </div>

            <div className="w-full h-1.5 bg-[#0033A0]/10 rounded-full overflow-hidden relative backdrop-blur-sm">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0033A0] to-primary-yellow"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: progress > 90 ? 1 : 0, y: progress > 90 ? 0 : 10 }}
              className="mt-8 flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 rounded-lg border border-green-500/20"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="font-codec text-[10px] font-bold uppercase tracking-widest">Protocolos Verificados</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

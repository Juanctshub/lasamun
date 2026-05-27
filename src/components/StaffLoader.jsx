import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StaffLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [activeLogs, setActiveLogs] = useState([]);

  const logDatabase = [
    { pct: 0, text: "SYS: INICIANDO DESENCRIPTACIÓN DE CREDENCIALES [CONCILIUM v2.6]..." },
    { pct: 10, text: "SEC: INICIANDO ENLACE SEGURO CON LA BASE DE DATOS DIPLOMÁTICA..." },
    { pct: 22, text: "NET: PROTOCOLO TLS 1.3 ESTABLECIDO EN PUERTO 8443..." },
    { pct: 35, text: "DB: CARGANDO REGISTRO DE DIGNATARIOS Y DOSSIERS [AES-256]..." },
    { pct: 48, text: "BIO: SINCRONIZANDO MAPA VECTORIAL DE HOLOGRAMAS Y FIRMAS..." },
    { pct: 60, text: "SEC: ACCESO CONCEDIDO A PERFILES DE DIRECCIÓN GENERAL..." },
    { pct: 72, text: "SYS: GENERANDO CREDENCIALES VIRTUALES DIPLOMÁTICAS..." },
    { pct: 85, text: "GEO: MAPEO COMPLETO COORDINADAS BARQUISIMETO: 10.4806° N, 66.9036° W" },
    { pct: 95, text: "ACCESO: PERFIL AUTORIZADO. BIENVENIDO AL CONSEJO DE MINISTRES." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1200); // Elegant delay to absorb the final logs
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 6;
        return Math.min(prev + step, 100);
      });
    }, 140);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Update logs based on the current percentage
  useEffect(() => {
    const triggered = logDatabase.filter(log => percent >= log.pct);
    setActiveLogs(triggered);
  }, [percent]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 bg-[#030307] z-[2000] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* High-Tech Security Grid Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,209,0,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,209,0,0.15) 1px, transparent 1px)
          `, 
          backgroundSize: '30px 30px' 
        }} 
      />

      {/* Cybernetic Ambient Glow Background */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary-yellow/5 blur-[160px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none top-1/3 left-1/4 z-0 animate-pulse" />

      {/* Center Console Bracket Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] aspect-square border border-white/[0.02] rounded-full pointer-events-none z-0">
        <div className="absolute inset-[-15px] border-t border-b border-primary-yellow/10 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-[-30px] border-l border-r border-primary-blue/10 rounded-full animate-[spin_50s_linear_infinite_reverse]" />
      </div>

      <div className="flex flex-col items-center max-w-lg w-full px-6 relative z-10 select-none">
        
        {/* Holographic Circular Scanner HUD */}
        <div className="relative w-36 h-36 mb-12 flex items-center justify-center bg-black/45 rounded-full border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Rotating focal vector lines */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border border-dashed border-primary-yellow/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-primary-blue/30 rounded-full stroke-dasharray-[10_5]"
          />

          {/* Glowing central core fingerprint / security badge icon */}
          <div className="absolute w-20 h-20 text-primary-yellow/40 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
              <path 
                d="M 50 10 C 27.9 10, 10 27.9, 10 50 C 10 72.1, 27.9 90, 50 90 C 72.1 90, 90 72.1, 90 50 C 90 27.9, 72.1 10, 50 10 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
              />
              <path 
                d="M 28 50 C 28 37.8, 37.8 28, 50 28 C 62.2 28, 72 37.8, 72 50 C 72 62.2, 62.2 72, 50 72 C 37.8 72, 28 62.2, 28 50 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
              {/* Abstract coordinate constellation arcs */}
              <path d="M 50 18 A 32 32 0 0 1 82 50" fill="none" stroke="#FFD100" strokeWidth="2" strokeLinecap="round" />
              <path d="M 18 50 A 32 32 0 0 1 50 82" fill="none" stroke="#0033A0" strokeWidth="2" strokeLinecap="round" />
              
              <circle cx="50" cy="50" r="10" fill="currentColor" className="animate-ping" opacity="0.3" />
              <circle cx="50" cy="50" r="4" fill="#FFD100" />
            </svg>
          </div>

          {/* Active sweeping laser bar */}
          <motion.div
            animate={{ y: [-72, 72, -72] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-primary-yellow to-transparent shadow-[0_0_12px_#FFD100] z-20"
          />

          {/* Glass glare shimmer inside circle */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
        </div>

        {/* Counter and Header Info */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-primary-yellow/15 bg-primary-yellow/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-yellow animate-ping"></span>
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-primary-yellow font-bold">Autenticación Requerida</span>
          </div>

          <h3 className="font-maison text-[2.2rem] font-bold tracking-[0.15em] uppercase text-white leading-none mb-1">
            CREDENCIALES <span className="gradient-text">LASAMUN</span>
          </h3>
          
          <span className="font-mono text-[9px] text-white/30 tracking-[0.4em] uppercase block">
            CONSEJO DE SEGURIDAD // DIRECCIÓN EJECUTIVA
          </span>
        </div>

        {/* Progress Bar & Decrypted Counter */}
        <div className="w-full max-w-[320px] flex flex-col items-center gap-2 mb-8">
          <div className="w-full flex justify-between items-baseline font-mono text-[9px] text-white/40 tracking-wider">
            <span className="uppercase text-[8px]">Descifrando Registros:</span>
            <span className="text-primary-yellow font-bold text-sm drop-shadow-[0_0_8px_rgba(255,209,0,0.5)]">
              {percent}%
            </span>
          </div>

          {/* Futuristic Data Bar */}
          <div className="w-full h-[6px] bg-white/5 border border-white/10 rounded-full p-[1px] overflow-hidden relative">
            <motion.div 
              className="h-full rounded-full bg-gradient-to-r from-primary-blue via-primary-yellow to-white shadow-[0_0_8px_rgba(255,209,0,0.6)]"
              style={{ width: `${percent}%` }}
              transition={{ ease: "easeOut" }}
            />
            {/* Tick indicators inside progress bar */}
            <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/20"></div>
            <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white/20"></div>
            <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white/20"></div>
          </div>
        </div>

        {/* Dynamic Holographic Console Logs */}
        <div className="w-full h-24 bg-black/60 border border-white/5 rounded-2xl p-4 font-mono text-[8.5px] leading-relaxed text-left text-white/45 overflow-y-hidden shadow-inner relative max-w-[420px]">
          {/* Subtle scanning lines on terminal box */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] pointer-events-none opacity-45 rounded-2xl" style={{ backgroundSize: '100% 3px, 3px 100%' }}></div>
          
          <div className="flex flex-col justify-end h-full w-full gap-0.5">
            <AnimatePresence>
              {activeLogs.slice(-3).map((log, idx) => (
                <motion.div
                  key={log.pct}
                  initial={{ opacity: 0, x: -10, y: 5 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`truncate flex items-center gap-1.5 ${idx === 2 ? 'text-primary-yellow font-bold' : ''}`}
                >
                  <span className="text-primary-blue font-bold shrink-0">&gt;</span>
                  <span>{log.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Coords Stamp at Bottom */}
        <div className="mt-8 flex items-center gap-4 text-white/25 font-mono text-[8px] tracking-[0.25em] uppercase">
          <span>LAT: 10.4806° N</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <span>LON: 66.9036° W</span>
        </div>

      </div>
    </motion.div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, Cpu, Terminal, Lock, Unlock, Database, Users, Sparkles, X, Eye } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Voynich() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);
  const [showMesa, setShowMesa] = useState(false);
  
  const bgVideoRef = useRef(null);

  useEffect(() => {
    // Switch to medieval love/mystery sound loop
    audioSystem.switchToVoynich();
    
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(err => {
        console.warn("Background video autoplay blocked or failed:", err);
      });
    }
  }, []);

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    const normalized = passcode.trim().toUpperCase();
    if (normalized === 'ROMAINE' || normalized === 'NEWBOLD' || normalized === 'VOYNICH' || normalized === 'MONDRAGONE') {
      setError(false);
      setShowPasscode(false);
      setAccessGranted(true);
      
      setTimeout(() => {
        setAccessGranted(false);
        setEasterEggActive(true);
      }, 2200); // Decryption visual glitch duration
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const closeEasterEgg = () => {
    setEasterEggActive(false);
  };

  return (
    <section id="voynich-section" className="min-h-screen relative bg-transparent text-[#f3e5ab] overflow-x-hidden pt-24 pb-32 font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* Deep-Space Academic Dark Video Background */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#070503]">
        <video 
          ref={bgVideoRef}
          src="/vou.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-35 transition-opacity duration-1000"
          style={{ filter: 'sepia(0.6) brightness(0.4) contrast(1.15) blur(1px)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("Bg video loop failed:", err));
            }
          }}
        />
        {/* Gradients to merge background beautifully */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070503] via-[#070503]/85 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070503] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_#070503_100%)] z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl">
        
        {/* Top Header */}
        <div className="max-w-4xl mx-auto mb-20 pt-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Centered Large Circular Medallion Medival Frame */}
            <div 
              onClick={() => setShowPasscode(true)}
              className="w-48 h-48 mb-8 cursor-pointer group relative flex items-center justify-center rounded-full border border-[#d4af37]/20 p-2 bg-black/60 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              title="Descifrar manuscrito..."
            >
              {/* Spinning rings behind logo */}
              <div className="absolute inset-0 bg-[#d4af37]/5 rounded-full blur-2xl group-hover:bg-[#d4af37]/15 transition-all duration-700 pointer-events-none"></div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute w-[108%] h-[108%] rounded-full border border-[#d4af37]/10 border-dashed"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute w-[98%] h-[98%] rounded-full border border-[#d4af37]/20 border-dotted"
              />
              
              {/* Medieval Book Emblem SVG */}
              <div className="relative z-10 w-28 h-28 flex items-center justify-center text-[#d4af37] filter drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M25 20 H75 C80 20, 85 24, 85 28 V80 C85 84, 80 88, 75 88 H25 C20 88, 15 84, 15 80 V28 C15 24, 20 20, 25 20 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M30 20 V88" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M35 32 H70 M35 44 H70 M35 56 H60 M35 68 H70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M50 40 V60 M40 50 H60" stroke="#d4af37" strokeWidth="1" />
                </svg>
              </div>

              {/* Glowing radar line indicator */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/0 to-[#d4af37]/15 pointer-events-none origin-center"
              />
            </div>

            <h1 className="font-maison text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#f3e5ab] drop-shadow-md">
              INVESTIGACIÓN (1925)
            </h1>
            <p className="font-mono text-[#d4af37] tracking-[0.35em] uppercase text-xs md:text-sm border-b border-[#d4af37]/20 pb-4 mb-8">
              El Enigma del Manuscrito Voynich
            </p>

            <div className="inline-flex items-center gap-3 bg-[#3a2512]/20 border border-[#d4af37]/30 px-6 py-3 rounded-full backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse"></span>
              <span className="font-codec text-xs md:text-sm tracking-widest uppercase text-white font-bold">
                TÓPICO: EL ENIGMA DEL MANUSCRITO VOYNICH
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Extensive Historical Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert max-w-none font-codec font-light leading-relaxed text-gray-300 text-sm md:text-base text-left"
            >
              {/* Core Quote Box */}
              <div className="text-lg md:text-xl text-white font-maison leading-snug mb-8 border-l-4 border-[#d4af37] pl-6 py-2 bg-[#d4af37]/5 rounded-r-2xl">
                💫 El estudio del Manuscrito Voynich ha constituido uno de los diálogos más desconcertantes de la criptografía y la historia medieval.
              </div>

              <p className="mb-6">
                Tras su adquisición en 1912 por el bibliófilo Wilfrid Voynich en la Villa Mondragone, el volumen se erige hoy como un desafío que trasciende la simple bibliografía. El manuscrito demarca un objeto que desafía toda convencionalidad: un códice redactado en un sistema de escritura completamente desconocido e ilustrado con una botánica y astronomía que parecen pertenecer a un mundo ajeno a la realidad científica conocida; además, carece de visibles errores y correcciones, lo que es inusual para un manuscrito de la época.
              </p>

              {/* Graphic Vector Cryptanalysis Circle representing Voynich glyph network */}
              <div className="bg-black/60 border border-[#d4af37]/25 rounded-3xl p-6 my-10 relative overflow-hidden flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_75%)]" />
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#d4af37]/50 mb-4 self-start">MONDRAGONE GLYPH ANALYZER - DECR-12</span>
                
                {/* SVG Cryptanalysis Circle */}
                <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto relative z-10 text-[#d4af37]">
                  {/* Circle outline */}
                  <circle cx="200" cy="100" r="75" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
                  <circle cx="200" cy="100" r="50" fill="none" stroke="rgba(212,175,55,0.08)" strokeDasharray="3 3" />
                  
                  {/* Center Emblem */}
                  <circle cx="200" cy="100" r="10" fill="#070503" stroke="#d4af37" strokeWidth="1.5" />
                  
                  {/* Nodes around the circle representing glyph connections */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 200 + 75 * Math.cos(rad);
                    const y = 100 + 75 * Math.sin(rad);
                    const glyphs = ["☿", "☉", "☽", "♁", "♃", "♄", "♈", "♉"];
                    return (
                      <g key={idx}>
                        <circle cx={x} cy={y} r="5" fill="#070503" stroke="#d4af37" strokeWidth="1" />
                        <text x={x + 8} y={y + 3} fill="rgba(243,229,171,0.7)" fontSize="9" fontFamily="monospace">{glyphs[idx]}</text>
                      </g>
                    );
                  })}
                  
                  {/* Decryption rays intersecting */}
                  <motion.path
                    d="M 125 100 L 275 100 M 200 25 L 200 175 M 147 47 L 253 153 M 147 153 L 253 47"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    opacity="0.3"
                  />
                  
                  {/* Decrypted trace trail path */}
                  <motion.path
                    d="M 125 100 L 200 25 L 275 100 L 200 175 Z"
                    fill="none"
                    stroke="#f3e5ab"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    opacity="0.85"
                  />
                  
                  {/* Active ping beacon */}
                  <circle cx="200" cy="25" r="4" fill="#d4af37" className="animate-ping" style={{ animationDuration: '2s' }} />
                </svg>
              </div>

              <p className="mb-6">
                A más de una década de su adquisición, el escaso conocimiento sobre el manuscrito hace pensar que tan solo ayer fue dado a conocer al público. La reciente tesis del profesor William Romaine Newbold propone que el manuscrito oculta conocimientos científicos imposibles para el medievo, como la estructura de nebulosas espirales o procesos biológicos microscópicos; además, ante la imposibilidad de hallar una raíz lingüística terrestre, se comienza a plantear que el libro es un objeto que simplemente no debería existir en nuestra línea temporal.
              </p>

              <div className="bg-[#3a2512]/15 border border-[#d4af37]/20 p-8 rounded-2xl my-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
                <h3 className="font-maison text-xl text-white mb-4 uppercase tracking-wide">La Disyuntiva del Idioma</h3>
                <p className="text-gray-400 text-sm md:text-base mb-0">
                  La disyuntiva conduce a cuestionamientos fundamentales sobre el códice: ¿Se trata de una lengua genuina inventada por el ser humano, una lengua perdida, o un código secreto? ¿Fue escrito para que nadie lo entendiera, a modo de expresión personal-artística, o para que solo un grupo selecto con la clave pudiera leerlo?
                </p>
              </div>

              <div className="text-lg md:text-xl font-maison text-[#f3e5ab]/90 border-l-2 border-[#d4af37]/40 pl-5 italic mt-8 leading-relaxed">
                ¿Es el Manuscrito Voynich un mapa cifrado hacia conocimientos prohibidos del pasado, o una de las farsas más sublimes y duraderas de la historia del libro?
              </div>

            </motion.div>
          </div>

          {/* Right Column: Parameters, Document Links, Dossier Images */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Parameters Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#0b0704]/90 backdrop-blur-xl border border-[#d4af37]/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 text-[#d4af37]">
                <Sparkles className="w-36 h-36" />
              </div>
              
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#d4af37] mb-2">Parámetros del Comité</h3>
              <div className="text-2xl sm:text-3xl font-maison font-black text-white mb-6 uppercase tracking-wide">Modalidad y Ciclo</div>
              
              <div className="flex items-center gap-4 bg-[#3a2512]/15 p-4 rounded-2xl border border-[#3a2512]/30 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20">
                  <FileText className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="text-left">
                  <div className="font-codec text-xs text-[#d4af37]/60 uppercase tracking-widest">Formato Operativo</div>
                  <div className="font-bold text-lg text-white">Mixto / Individual</div>
                </div>
              </div>

              {/* Technical Specifications Overlay Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-[#3a2512]/40 pt-6">
                {[
                  { label: "CÓDICE", val: "MS 408 Voynich" },
                  { label: "ESTATUS", val: "DESAFÍO CRIPTO" },
                  { label: "ADQUISICIÓN", val: "1912 Mondragone" },
                  { label: "ESCRITURA", val: "SINFÍN CORRECCIÓN" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-black/40 border border-[#d4af37]/5 p-3.5 rounded-xl text-left">
                    <span className="font-mono text-[8px] text-[#d4af37]/50 uppercase tracking-widest block mb-0.5">{stat.label}</span>
                    <span className="font-mono text-xs text-[#f3e5ab] font-bold">{stat.val}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                <button 
                  onClick={() => window.open('https://drive.google.com/file/d/1-b1DQqWR2000lnLk5it1IrRRt8sPiLme/view?usp=sharing', '_blank')}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-[#d4af37]/10 border border-white/10 hover:border-[#d4af37]/45 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/60 border border-white/5 rounded-lg group-hover:border-[#d4af37]/30 transition-colors">
                    <Download className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-[#d4af37] transition-colors">Guía Académica</span>
                    <span className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">Ver Carpeta Voynich</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => window.open('https://drive.google.com/file/d/1PLTWtkaMW7vwApTS5O56OZhGRQ4cRx2B/view?usp=sharing', '_blank')}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-[#d4af37]/10 border border-white/10 hover:border-[#d4af37]/45 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/60 border border-white/5 rounded-lg group-hover:border-[#d4af37]/30 transition-colors">
                    <Eye className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-[#d4af37] transition-colors">Códice Voynich</span>
                    <span className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">Ver Manuscrito Original (PDF)</span>
                  </div>
                </button>

                <button 
                  onClick={() => setShowMesa(true)}
                  className="group flex items-center gap-4 bg-[#d4af37]/10 hover:bg-[#d4af37]/15 border border-[#d4af37]/30 hover:border-[#d4af37]/50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/60 border border-[#d4af37]/20 rounded-lg group-hover:border-[#d4af37]/30 transition-colors">
                    <Users className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-[#d4af37] uppercase">Mesa Directiva</span>
                    <span className="block font-mono text-[9px] text-[#f3e5ab]/60 uppercase tracking-widest mt-1">Conoce a tu mesa</span>
                  </div>
                </button>
              </div>

            </motion.div>

            {/* Classified Decrypt Console Trigger Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-black/60 border border-[#d4af37]/20 hover:border-[#d4af37]/45 rounded-3xl p-6 relative overflow-hidden flex items-center justify-between transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#3a2512]/20 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="font-mono text-[10px] text-[#d4af37] font-bold uppercase tracking-widest">CIPHER DECRYPTION TERMINAL</div>
                  <div className="font-mono text-xs text-gray-400 mt-0.5">Acceso a clave cripto de Newbold.</div>
                </div>
              </div>
              <button 
                onClick={() => setShowPasscode(true)}
                className="bg-[#d4af37]/15 hover:bg-[#d4af37] text-[#d4af37] hover:text-black border border-[#d4af37]/30 px-3.5 py-1.5 rounded-lg font-mono text-[10px] uppercase font-bold tracking-widest transition-all duration-300 shadow-md"
              >
                Decrypt
              </button>
            </motion.div>

            {/* Immersive Voynich Exhibit Dossier Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden group border border-[#d4af37]/20 bg-black/40">
                <img src="/v1.jpg" alt="Botanical folio" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter sepia-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <span className="font-mono text-[8px] text-[#d4af37] tracking-[0.25em] uppercase block mb-1">Dossier Exhibit 01</span>
                  <h4 className="font-maison font-bold text-sm text-white">Anomalous Botanical Folio</h4>
                  <span className="font-mono text-[8px] text-white/40 block mt-0.5">Illustrations of non-existent botanical specimens</span>
                </div>
              </div>
              
              <div className="relative h-44 rounded-2xl overflow-hidden group border border-[#d4af37]/20 bg-black/40">
                <img src="/v2.webp" alt="Astronomical spiral" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter sepia-[0.2] contrast-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <span className="font-mono text-[8px] text-[#d4af37] tracking-[0.25em] uppercase block mb-1">Dossier Exhibit 02</span>
                  <h4 className="font-maison font-bold text-sm text-white">Cosmological Chart Folio</h4>
                  <span className="font-mono text-[8px] text-white/40 block mt-0.5">Spiral structures resembling modern galaxy sweeps</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* 1. Passcode Decryption Entry Modal */}
      <AnimatePresence>
        {showPasscode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className={`w-full max-w-md bg-[#090704] border border-[#d4af37]/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl ${error ? 'animate-shake' : ''}`}
            >
              {/* Golden tech background line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4af37]" />
              
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3a2512]/40 border border-[#d4af37]/30 rounded-2xl flex items-center justify-center text-[#d4af37] shadow-inner">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>

              <h3 className="font-maison text-2xl font-black text-white uppercase mb-2">VOYNICH KEY ENTRY</h3>
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-6">
                Ingrese contraseña para descifrar el Códice (Ej: Romaine, Newbold, Voynich, Mondragone)
              </p>

              <form onSubmit={handlePasscodeSubmit} className="space-y-4">
                <input 
                  type="text" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="NEWBOLD..."
                  className="w-full bg-black border border-[#d4af37]/30 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-xl px-4 py-3 font-mono text-sm tracking-widest text-center text-[#f3e5ab] focus:outline-none uppercase placeholder:text-gray-700 placeholder:tracking-normal transition-all"
                  autoFocus
                />
                
                <div className="flex gap-3">
                  <button 
                    type="button"
                    onClick={() => setShowPasscode(false)}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all text-gray-400 hover:text-white"
                  >
                    Abortar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-[#d4af37] hover:bg-[#f3e5ab] text-black rounded-xl py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md shadow-[#d4af37]/20"
                  >
                    Verificar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Decryption Glitch Transition Screen */}
      <AnimatePresence>
        {accessGranted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4000] bg-[#070503] flex flex-col items-center justify-center font-mono text-[#d4af37] p-6 select-none"
          >
            <div className="w-full max-w-lg space-y-4 text-left">
              <div className="flex items-center gap-3 text-[#d4af37] mb-6 animate-pulse">
                <ShieldAlert className="w-8 h-8" />
                <span className="font-mono text-sm font-black tracking-widest">VOYNICH INTERPOLATION DECRYPT SUCCESSFUL</span>
              </div>
              
              <div className="font-mono text-xs space-y-1.5 border-l-2 border-[#d4af37]/40 pl-4 py-2 text-gray-400">
                <div>[SYSTEM] MAPPING PARCHMENT SPECTRUM... [OK]</div>
                <div>[SYSTEM] PARSING NEWBOLD MICRO-ALPHABET MATRIX... [OK]</div>
                <div>[SYSTEM] RESOLVING BINARY ROTATION VECTOR... [OK]</div>
                <div>[SYSTEM] TRANSLATING FORCES FOR FOLIO 68R...</div>
              </div>

              {/* Fake progress load */}
              <div className="w-full h-1 bg-[#3a2512] rounded-full relative overflow-hidden mt-6">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2.0, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/3 bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Immersive Decrypted Folio Secret (Easter Egg Modal) */}
      <AnimatePresence>
        {easterEggActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] bg-black/95 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="w-full max-w-4xl bg-[#070503] border border-[#d4af37]/30 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Golden Warning Frame */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#d4af37]" />
              
              {/* Close Button */}
              <button 
                onClick={closeEasterEgg}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-[#d4af37] text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 z-50 border border-white/10 hover:border-[#d4af37]"
              >
                <Unlock className="w-5 h-5 text-[#d4af37] group-hover:text-black" />
              </button>

              <div className="flex flex-col gap-6 font-mono text-left max-w-3xl mx-auto pt-6 text-sm">
                
                {/* Header warning */}
                <div className="flex items-center gap-4 bg-[#3a2512]/20 border border-[#d4af37]/30 p-4 rounded-xl text-[#d4af37]">
                  <Sparkles className="w-6 h-6 shrink-0 animate-bounce" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-widest">DECRYPTED MANUSCRIPT SHEET • FOLIO 68R</div>
                    <div className="text-[10px] text-[#f3e5ab]/80 mt-0.5">TRANSLATED ACCORDING TO WILLIAM NEWBOLD'S TELESCOPIC DECODING SCHEME.</div>
                  </div>
                </div>

                <div className="border border-white/10 p-6 rounded-2xl bg-black/40 space-y-4 text-gray-300">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-400">ID: MS-408-FOLIO-68R-DECRYPTED</span>
                    <span className="text-[#d4af37] font-bold animate-pulse">CÓDICE DESCIFRADO</span>
                  </div>

                  <p className="leading-relaxed">
                    <strong>[SECTOR DE BOTÁNICA ANÓMALA - FOLIO 68R]</strong><br />
                    Las observaciones microscópicas cifradas en el trazo de los filamentos florales no corresponden a células vegetales normales. El patrón de ramificación sigue una progresión geométrica idéntica a la estructura cristalina del carbono puro, imitando fibras metálicas entrelazadas con cloroplastos exógenos. La planta actúa como un receptor solar capaz de procesar energía radiante a frecuencias que superan el espectro visible de la Tierra.
                  </p>

                  <p className="leading-relaxed">
                    <strong>[ASTRONOMÍA Y NEBULOSAS - ANÁLISIS DE NEWBOLD]:</strong><br />
                    El mapa estelar desplegable muestra la constelación de Andrómeda con una resolución angular imposible para el siglo XV. La espiral central no describe un remolino de viento, sino una nebulosa en expansión activa. La tesis de que el manuscrito oculta conocimientos científicos exógenos cobra fuerza; los caracteres micrográficos que componen cada glifo mayor están formados por trazos estenográficos que codifican observaciones ópticas con lentes convexos siglos antes de la invención del telescopio.
                  </p>

                  <div className="bg-[#3a2512]/20 p-4 rounded-xl border border-[#d4af37]/20 text-[#f3e5ab]">
                    <span className="font-bold uppercase tracking-wider block mb-1">Diagnóstico Codicilógico Final:</span>
                    El Manuscrito Voynich no es simplemente un texto medieval. Es una bitácora científica de tecnología interestelar/temporal oculta bajo el velo de la criptografía de Villa Mondragone.
                  </div>
                </div>

                <div className="text-center mt-6">
                  <button 
                    onClick={closeEasterEgg}
                    className="bg-white/5 hover:bg-[#d4af37] text-gray-400 hover:text-black border border-white/10 hover:border-[#d4af37] px-8 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all"
                  >
                    Cerrar Transmisión Segura
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Mesa Directiva Modal Popup (Voynich Scroll Style) */}
      <AnimatePresence>
        {showMesa && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowMesa(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#090704] border border-[#d4af37]/30 rounded-[2.5rem] p-8 md:p-10 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Golden scroll borders */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#d4af37]" />
              <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[2.2rem] pointer-events-none" />

              <button 
                onClick={() => setShowMesa(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 hover:border-[#d4af37] rounded-full flex items-center justify-center transition-all duration-300 z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-6 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl flex items-center justify-center text-[#d4af37]">
                <Users className="w-8 h-8 animate-pulse" />
              </div>

              <h3 className="font-maison text-3xl font-extrabold text-white uppercase tracking-tight mb-2">
                MESA DIRECTIVA
              </h3>
              <p className="font-mono text-[10px] text-[#d4af37] tracking-[0.35em] uppercase mb-8 border-b border-white/10 pb-4">
                INVESTIGACIÓN DE COLOGÍA • ESTACIÓN MONDRAGONE
              </p>

              {/* Members Dossier Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
                {/* Presidente Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#d4af37]/30 transition-all duration-300">
                  <span className="font-mono text-[8px] text-[#d4af37] tracking-[0.2em] uppercase block mb-1">Presidente</span>
                  <h4 className="font-maison font-bold text-xl text-white group-hover:text-[#d4af37] transition-colors">Daniel Zambrano</h4>
                  <div className="w-8 h-[1px] bg-white/10 mx-auto my-3 group-hover:bg-[#d4af37]/30 transition-colors" />
                  <p className="text-[10px] text-gray-500 font-codec leading-relaxed">Criptoanalista Principal y Director de la Sección de Codicología y Textos Ocultos.</p>
                </div>

                {/* Vicepresidente Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#d4af37]/30 transition-all duration-300">
                  <span className="font-mono text-[8px] text-[#d4af37] tracking-[0.2em] uppercase block mb-1">Vicepresidente</span>
                  <h4 className="font-maison font-bold text-xl text-white group-hover:text-[#d4af37] transition-colors">Mathias Martinez</h4>
                  <div className="w-8 h-[1px] bg-white/10 mx-auto my-3 group-hover:bg-[#d4af37]/30 transition-colors" />
                  <p className="text-[10px] text-gray-500 font-codec leading-relaxed">Investigador de Anomalías Cronométricas, Botánicas y Historiografía del Medievo.</p>
                </div>
              </div>

              <button 
                onClick={() => setShowMesa(false)}
                className="bg-white/5 hover:bg-[#d4af37] text-gray-400 hover:text-black border border-white/10 hover:border-[#d4af37] px-8 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all"
              >
                Cerrar Dossier
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

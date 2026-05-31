import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, Lock, Unlock, Users, Sparkles, X, Eye, HelpCircle, BookOpen, Key, Compass } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Voynich() {
  const [activeFolio, setActiveFolio] = useState(1); // 1: Manuscrito, 2: Tesis, 3: Mesa/Docs
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);
  const [showMesa, setShowMesa] = useState(false);

  // Hover magnifier coordinates
  const [magnifierCoords, setMagnifierCoords] = useState({ x: 0, y: 0, show: false });
  const containerRef = useRef(null);

  const bgVideoRef = useRef(null);

  useEffect(() => {
    audioSystem.switchToVoynich();
    
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(err => {
        console.warn("Background video autoplay blocked or failed:", err);
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    if (x >= 0 && y >= 0 && x <= width && y <= height) {
      setMagnifierCoords({ x, y, show: true });
    } else {
      setMagnifierCoords({ x: 0, y: 0, show: false });
    }
  };

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
      }, 2200); // Glitch decrypt
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <section id="voynich-section" className="min-h-screen relative bg-transparent text-[#f3e5ab] overflow-x-hidden pt-24 pb-32 font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* Sepia-tinted looping background video */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#070503]">
        <video 
          ref={bgVideoRef}
          src="/vou.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-20 transition-opacity duration-1000"
          style={{ filter: 'sepia(0.8) brightness(0.25) contrast(1.3) blur(2px)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("Bg video loop failed:", err));
            }
          }}
        />
        {/* Gradients merging the margins */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070503] via-[#070503]/85 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070503] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(58,37,18,0.15)_0%,_#070503_100%)] z-10"></div>
      </div>

      {/* Pulsating Audio Frequency wave representing love.mp3 rhythm */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-1 opacity-20 z-20 pointer-events-none">
        {[2, 3, 5, 2, 8, 4, 3, 6, 9, 5, 3, 7, 2, 4, 6, 8, 5, 3, 1].map((val, i) => (
          <motion.div 
            key={i}
            animate={{ height: [val * 2, val * 4.5, val * 2] }}
            transition={{ repeat: Infinity, duration: 1 + (i % 3) * 0.2, ease: "easeInOut" }}
            className="w-[2px] bg-[#d4af37]"
            style={{ height: `${val * 3}px` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20 max-w-7xl">
        
        {/* Title Capsule */}
        <div className="max-w-4xl mx-auto mb-16 pt-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[9px] text-[#d4af37] tracking-[0.45em] uppercase mb-2">Sección de Codicología Oculta</span>
            <h1 className="font-maison text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5ab] to-[#d4af37] drop-shadow-md">
              MANUSCRITO VOYNICH
            </h1>
            <p className="font-mono text-gray-500 tracking-[0.3em] uppercase text-[9px] border-b border-[#3a2512] pb-3 mb-6">
              Comité de Investigación (1925)
            </p>
          </motion.div>
        </div>

        {/* LABORATORY SCHOLAR DESK INTERFACE */}
        <div className="relative flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto">
          
          {/* Background Laboratory Decorations */}
          <div className="absolute -top-20 -left-16 w-[300px] h-[300px] border-[1px] border-[#d4af37]/5 rounded-full flex items-center justify-center pointer-events-none z-0 hidden lg:flex">
             <div className="w-[200px] h-[200px] border-[1px] border-[#d4af37]/10 rounded-full" />
             <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent rotate-45" />
             <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent -rotate-45" />
          </div>

          <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] opacity-10 pointer-events-none z-0 hidden lg:block">
             <svg viewBox="0 0 100 100" className="w-full h-full text-[#d4af37] animate-[spin_80s_linear_infinite]">
                <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="currentColor" strokeWidth="0.25" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.1" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.1" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.1" />
             </svg>
          </div>

          {/* Floating Ink / Blood Splatter */}
          <div className="absolute top-1/4 -right-12 w-32 h-32 bg-[#3a0000] rounded-full blur-[40px] opacity-20 pointer-events-none z-0" />
          <div className="absolute bottom-10 -left-20 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-[60px] opacity-20 pointer-events-none z-0" />

          {/* Target HUD corners around the book area */}
          <div className="absolute -inset-8 border border-[#d4af37]/5 pointer-events-none z-0 hidden xl:block">
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#d4af37]/40" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#d4af37]/40" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[#d4af37]/40" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#d4af37]/40" />
            
            <span className="absolute -top-3 right-6 font-mono text-[8px] text-[#d4af37]/40 uppercase tracking-widest bg-[#070503] px-2">Sector: Astrometría</span>
            <span className="absolute -bottom-3 left-6 font-mono text-[8px] text-[#d4af37]/40 uppercase tracking-widest bg-[#070503] px-2">Mondragone Sensor Grid // Active</span>
            
            {/* Some decorative scattered elements on the desk */}
            <div className="absolute top-20 -left-6 flex flex-col gap-1 opacity-20">
              <span className="font-mono text-[7px] text-white">∆x: 0.0034</span>
              <span className="font-mono text-[7px] text-white">∆y: 0.9912</span>
            </div>
          </div>
          
          {/* Left Sidebar: Parchment Folder Tabs Selector (Medieval Folders) */}
          <div className="w-full lg:w-1/4 flex lg:flex-col gap-4 justify-center lg:justify-start">
            {[
              { id: 1, label: "Folio I: El Origen", icon: BookOpen, desc: "Códice y Descifrado" },
              { id: 2, label: "Folio II: Anomalías", icon: Compass, desc: "Nebulosas y Estructuras" },
              { id: 3, label: "Folio III: Tribunal", icon: Users, desc: "Mesa y Directrices" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFolio(tab.id)}
                className={`flex-1 lg:flex-initial text-left p-5 rounded-2xl border transition-all duration-500 backdrop-blur-md relative overflow-hidden group ${
                  activeFolio === tab.id 
                    ? 'bg-[#2b1b0e]/80 border-[#d4af37]/60 shadow-[0_0_25px_rgba(212,175,55,0.15)] text-[#f3e5ab]' 
                    : 'bg-black/50 border-white/5 hover:border-[#d4af37]/30 text-gray-400 hover:text-white'
                }`}
              >
                {/* Golden wax-seal in corner of active folder */}
                {activeFolio === tab.id && (
                  <motion.div 
                    layoutId="waxSeal"
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#8c1a1a] border border-[#d4af37]/30 flex items-center justify-center shadow-md shadow-black"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#630f0f] border border-[#d4af37]/20" />
                  </motion.div>
                )}

                <div className="flex items-center gap-3 relative z-10">
                  <tab.icon className={`w-5 h-5 shrink-0 ${activeFolio === tab.id ? 'text-[#d4af37] animate-pulse' : 'text-gray-500'}`} />
                  <div>
                    <div className="font-maison font-bold text-xs sm:text-sm uppercase tracking-wide">{tab.label}</div>
                    <div className="font-mono text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">{tab.desc}</div>
                  </div>
                </div>
              </button>
            ))}

            {/* Quick Decrypt Widget */}
            <div className="hidden lg:flex items-center justify-between p-5 rounded-2xl border border-red-950/20 bg-black/60 relative overflow-hidden group hover:border-[#d4af37]/35 transition-colors">
              <div>
                <span className="font-mono text-[8px] text-red-500 tracking-wider uppercase font-bold">Decrypt MS 408</span>
                <span className="block font-mono text-[10px] text-gray-400 mt-1">Bypass satélite de Mondragone.</span>
              </div>
              <button 
                onClick={() => setShowPasscode(true)}
                className="p-2 border border-[#d4af37]/30 hover:border-[#d4af37] bg-white/5 hover:bg-[#d4af37] text-[#d4af37] hover:text-black rounded-lg transition-all"
              >
                <Key className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Central Workspace: Open Codicology Folio Book Simulator */}
          <div className="w-full lg:w-3/4 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFolio}
                initial={{ opacity: 0, rotateY: -10, filter: "blur(5px)" }}
                animate={{ opacity: 1, rotateY: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, rotateY: 10, filter: "blur(5px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative rounded-[2.5rem] bg-[#ede1cb] border-[8px] border-[#3a2512] shadow-[0_25px_60px_rgba(0,0,0,0.8)] min-h-[520px] text-black font-serif overflow-hidden select-text"
              >
                {/* Codex parchment fine lines background */}
                <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#3a2512_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                {/* Book vertical middle shadow crease */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-black/10 via-black/50 to-black/10 pointer-events-none z-20 hidden md:block" />
                
                {/* Book Edge / Page Stacking Effect */}
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-20 rounded-r-[2.5rem] border-r border-white/40" />
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-20 rounded-l-[2.5rem] border-l border-white/40" />

                {/* TAB CONTENT 1: ORIGIN & MAGNIFIER VIEWPORT */}
                {activeFolio === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                    
                    {/* Left Page: Narrative Text */}
                    <div className="p-8 sm:p-10 border-r border-[#3a2512]/10 h-full flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[8px] tracking-[0.25em] text-red-800 uppercase font-bold mb-4">★ FOLIO 01R • SCRIPTUM ORIGINE ★</div>
                        <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6 border-b border-[#3a2512]/20 pb-2">El Misterio del Códice</h3>
                        <p className="text-sm leading-relaxed text-amber-950/80 mb-4 antialiased">
                          El estudio del Manuscrito Voynich ha constituido uno de los diálogos más desconcertantes de la criptografía y la historia medieval. Tras su adquisición en 1912 por el bibliófilo Wilfrid Voynich en la Villa Mondragone, el volumen se erige hoy como un desafío que trasciende la simple bibliografía.
                        </p>
                        <p className="text-sm leading-relaxed text-amber-950/80 antialiased">
                          El manuscrito demarca un objeto que desafía toda convencionalidad: un códice redactado en un sistema de escritura completamente desconocido e ilustrado con una botánica y astronomía que parecen pertenecer a un mundo ajeno a la realidad científica conocida; además, carece de visibles errores y correcciones, lo que es inusual para un manuscrito de la época.
                        </p>
                      </div>
                      
                      {/* Wax Seal Quote stamp */}
                      <div className="flex gap-4 items-center bg-[#8c1a1a]/5 border border-[#8c1a1a]/20 p-4 rounded-xl mt-6">
                        <div className="w-10 h-10 rounded-full bg-[#8c1a1a] flex items-center justify-center text-white shrink-0 shadow shadow-black">
                          <Eye className="w-5 h-5" />
                        </div>
                        <p className="font-serif italic text-[11px] text-[#630f0f] leading-snug text-left">"¿Fantasía medieval, lengua perdida, o un código exógeno cifrado para que solo selectos sabios lograsen interpretarlo?"</p>
                      </div>
                    </div>

                    {/* Right Page: Experimental Cursor Magnifier Decryptor */}
                    <div className="p-8 sm:p-10 flex flex-col justify-between h-full bg-[#e8dbbf]">
                      <div className="text-left w-full">
                        <div className="font-mono text-[8px] tracking-[0.25em] text-red-800 uppercase font-bold mb-4">★ FOLIO 01V • MICROSCOPIC OVERLAY ★</div>
                        <span className="block font-serif italic text-xs text-amber-900/60 mb-6">Pasa el cursor para escanear y traducir morfologías.</span>
                        
                        {/* Interactive Magnifier Viewport Area */}
                        <div 
                          ref={containerRef}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={() => setMagnifierCoords(prev => ({ ...prev, show: false }))}
                          className="relative h-64 w-full rounded-2xl overflow-hidden border border-[#3a2512]/30 cursor-crosshair bg-black/10 select-none shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]"
                        >
                          {/* Original Image (v1.jpg) */}
                          <img 
                            src="/v1.jpg" 
                            alt="Voynich botanical" 
                            className="absolute inset-0 w-full h-full object-cover filter sepia-[0.4]" 
                          />

                          {/* CSS Circular Decrypt Magnifier Lens following the mouse */}
                          {magnifierCoords.show && (
                            <div 
                              className="absolute rounded-full pointer-events-none border border-[#d4af37] bg-black/90 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                              style={{
                                width: '130px',
                                height: '130px',
                                left: `${magnifierCoords.x - 65}px`,
                                top: `${magnifierCoords.y - 65}px`,
                                backgroundImage: 'radial-gradient(circle, rgba(58,37,18,0.2) 0%, rgba(0,0,0,0.95) 100%)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {/* Decrypted Vector telemetries inside Lens */}
                              <div className="text-[7px] font-mono text-[#d4af37] text-center p-2 leading-tight">
                                <span className="block font-bold text-white uppercase tracking-wider mb-0.5">FOLIO DECODED</span>
                                <span className="block text-gray-400">[CELLULAR_ANOMALY]</span>
                                <span className="block text-[#f3e5ab] mt-1 italic">Fibra metálica entrelazada con cloroplastos.</span>
                              </div>
                              {/* Glowing fine vector grid inside lens */}
                              <div className="absolute inset-0 border border-[#d4af37]/20 rounded-full bg-[linear-gradient(rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px)] bg-[size:10px_10px]" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Morphological Analysis Footer card */}
                      <div className="bg-[#ede1cb] border border-[#3a2512]/15 p-4 rounded-xl text-left mt-6">
                        <span className="font-mono text-[8px] text-amber-900 uppercase font-bold block mb-1">Dossier Morphological Scan</span>
                        <p className="font-serif text-[11px] leading-snug text-amber-950/80 mb-0">La botánica ilustrada exhibe un sistema venoso geométrico que no encaja con ninguna taxonomía vegetal terrestre registrada.</p>
                      </div>
                    </div>

                  </div>
                )}

                {/* TAB CONTENT 2: NEWBOLD TESIS & ACTIVE SVG PLANETARY CONNECTOR */}
                {activeFolio === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                    
                    {/* Left Page: Thesis detail */}
                    <div className="p-8 sm:p-10 border-r border-[#3a2512]/10 h-full flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[8px] tracking-[0.25em] text-red-800 uppercase font-bold mb-4">★ FOLIO 02R • NEWBOLD CALIBRATION ★</div>
                        <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6 border-b border-[#3a2512]/20 pb-2">Tesis Newbold</h3>
                        <p className="text-sm leading-relaxed text-amber-950/80 mb-4 antialiased text-left">
                          A más de una década de su adquisición, la tesis del profesor William Romaine Newbold propone que el manuscrito oculta conocimientos científicos imposibles para el medievo, como la estructura de nebulosas espirales o procesos biológicos microscópicos.
                        </p>
                        <p className="text-sm leading-relaxed text-amber-950/80 antialiased text-left">
                          Ante la imposibilidad de hallar una raíz lingüística terrestre, se comienza a plantear que el libro es un objeto que simplemente no debería existir en nuestra línea temporal. ¿Se trata de un cometa, o de un portal a conocimientos interestelares prohibidos?
                        </p>
                      </div>

                      <div className="bg-black/5 p-4 rounded-xl border border-[#3a2512]/15 text-left mt-6">
                        <span className="font-mono text-[8px] text-amber-900 uppercase font-bold block mb-1">Isotopic Ratio Log</span>
                        <p className="font-serif text-[11px] leading-snug text-amber-950/70 mb-0">El pigmento de hierro analizado en las espirales no coincide con la composición de los metales forjados en Europa en el siglo XV.</p>
                      </div>
                    </div>

                    {/* Right Page: Immersive Astronomical Diagram & SVG Analyzer */}
                    <div className="p-8 sm:p-10 flex flex-col justify-between h-full bg-[#e8dbbf]">
                      <div className="text-left w-full">
                        <div className="font-mono text-[8px] tracking-[0.25em] text-red-800 uppercase font-bold mb-4">★ FOLIO 02V • ASTRONOMICAL SPIRALS ★</div>
                        <span className="block font-serif italic text-xs text-amber-900/60 mb-4">Espectro estelar de Andrómeda (v2.webp) y simulación de giros.</span>

                        <div className="relative h-44 rounded-xl overflow-hidden border border-[#3a2512]/30 shadow-inner bg-black/10">
                          <img src="/v2.webp" alt="Voynich astronomical" className="absolute inset-0 w-full h-full object-cover filter sepia-[0.3]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                            <span className="font-mono text-[8px] text-white font-bold uppercase tracking-widest">Active Cosmological Folio</span>
                          </div>
                        </div>

                        {/* Interactive decryption trace overlay inside the book page */}
                        <div className="mt-4 p-3 bg-black/5 border border-[#3a2512]/10 rounded-xl flex items-center justify-between">
                          <span className="font-mono text-[9px] text-amber-950/70 uppercase">Cripto-Analizador:</span>
                          <span className="font-mono text-[10px] text-amber-900 font-bold animate-pulse">MSS_DECODE_RUNNING</span>
                        </div>
                      </div>

                      {/* SVG Astrolabe Plotter inside Book */}
                      <svg viewBox="0 0 200 60" className="w-full h-auto text-amber-950/30 mt-6 relative z-10">
                        <circle cx="100" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                        <line x1="50" x2="150" y1="30" y2="30" stroke="currentColor" strokeWidth="0.25" />
                        <motion.circle 
                          cx="100" cy="30" r="2" fill="#8c1a1a"
                          animate={{ cx: [75, 125, 75] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>

                  </div>
                )}

                {/* TAB CONTENT 3: TRIBUNAL & DRIVE ACADEMIC LETTERS */}
                {activeFolio === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                    
                    {/* Left Page: Wax-Sealed Mesa Directiva */}
                    <div className="p-8 sm:p-10 border-r border-[#3a2512]/10 h-full flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[8px] tracking-[0.25em] text-red-800 uppercase font-bold mb-4">★ FOLIO 03R • TRIBUNALE MONDRAGONE ★</div>
                        <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6 border-b border-[#3a2512]/20 pb-2">Mesa Directiva</h3>
                        
                        {/* Daniel Card */}
                        <div className="bg-white/40 border border-[#3a2512]/10 rounded-2xl p-5 mb-4 relative overflow-hidden group hover:border-[#8c1a1a]/30 transition-all duration-300">
                          <span className="font-mono text-[8px] text-red-800 tracking-[0.2em] uppercase block mb-1">Presidente</span>
                          <h4 className="font-serif font-black text-lg text-amber-950">Daniel Zambrano</h4>
                          <p className="text-[10px] text-amber-900 leading-snug mt-1 font-sans">Criptoanalista Principal y Director de la Sección de Codicología y Textos Ocultos de la Villa.</p>
                        </div>

                        {/* Mathias Card */}
                        <div className="bg-white/40 border border-[#3a2512]/10 rounded-2xl p-5 relative overflow-hidden group hover:border-[#8c1a1a]/30 transition-all duration-300">
                          <span className="font-mono text-[8px] text-red-800 tracking-[0.2em] uppercase block mb-1">Vicepresidente</span>
                          <h4 className="font-serif font-black text-lg text-amber-950">Mathias Martinez</h4>
                          <p className="text-[10px] text-amber-900 leading-snug mt-1 font-sans">Investigador de Anomalías Cronométricas, Botánicas e Historiografía del Medievo.</p>
                        </div>
                      </div>

                      <div className="mt-4 font-mono text-[7px] text-amber-900/40 text-center uppercase tracking-widest">Estación Mondragone • Investigación 1925</div>
                    </div>

                    {/* Right Page: Academic Documents styled as Letters */}
                    <div className="p-8 sm:p-10 flex flex-col justify-between h-full bg-[#e8dbbf]">
                      <div className="text-left w-full">
                        <div className="font-mono text-[8px] tracking-[0.25em] text-red-800 uppercase font-bold mb-4">★ FOLIO 03V • SCHOLAR ARCHIVES ★</div>
                        <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6 border-b border-[#3a2512]/20 pb-2">Documentos</h3>

                        <div className="grid grid-cols-1 gap-4">
                          <button 
                            onClick={() => window.open('https://drive.google.com/file/d/1-b1DQqWR2000lnLk5it1IrRRt8sPiLme/view?usp=sharing', '_blank')}
                            className="group flex items-center gap-4 bg-white/40 hover:bg-[#8c1a1a]/10 border border-[#3a2512]/20 hover:border-[#8c1a1a]/50 p-4 rounded-xl transition-all duration-300"
                          >
                            <div className="p-3 bg-black/5 border border-white/20 rounded-lg group-hover:border-[#8c1a1a]/30">
                              <Download className="w-5 h-5 text-amber-900 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-left font-serif">
                              <span className="block font-black text-amber-950 text-sm group-hover:text-[#8c1a1a]">Guía Académica</span>
                              <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">Dossier de Criptografía</span>
                            </div>
                          </button>

                          <button 
                            onClick={() => window.open('https://drive.google.com/file/d/1PLTWtkaMW7vwApTS5O56OZhGRQ4cRx2B/view?usp=sharing', '_blank')}
                            className="group flex items-center gap-4 bg-white/40 hover:bg-[#8c1a1a]/10 border border-[#3a2512]/20 hover:border-[#8c1a1a]/50 p-4 rounded-xl transition-all duration-300"
                          >
                            <div className="p-3 bg-black/5 border border-white/20 rounded-lg group-hover:border-[#8c1a1a]/30">
                              <FileText className="w-5 h-5 text-amber-900 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-left font-serif">
                              <span className="block font-black text-amber-950 text-sm group-hover:text-[#8c1a1a]">Códice Completo</span>
                              <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">Manuscrito Escaneado (PDF)</span>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Small visual of old document stamp */}
                      <div className="flex items-center justify-end opacity-25 mt-6">
                        <svg viewBox="0 0 100 100" className="w-16 h-16 text-red-900">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                          <text x="32" y="55" fontSize="13" fontWeight="bold" fontFamily="monospace" fill="currentColor">VILLA</text>
                        </svg>
                      </div>
                    </div>

                  </div>
                )}

              </motion.div>
            </AnimatePresence>
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
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#d4af37]" />
              
              <button 
                onClick={closeEasterEgg}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-[#d4af37] text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 z-50 border border-white/10 hover:border-[#d4af37]"
              >
                <Unlock className="w-5 h-5 text-[#d4af37] group-hover:text-black" />
              </button>

              <div className="flex flex-col gap-6 font-mono text-left max-w-3xl mx-auto pt-6 text-sm">
                
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

    </section>
  );
}

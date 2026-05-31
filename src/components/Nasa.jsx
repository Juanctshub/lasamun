import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, Cpu, Terminal, Lock, Unlock, Database, RefreshCw, ChevronRight, HelpCircle, Users, Globe, X } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Nasa() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);
  const [showMesa, setShowMesa] = useState(false);
  
  const bgVideoRef = useRef(null);

  useEffect(() => {
    // Switch to main cosmic sound loop
    audioSystem.switchToNasa();
    
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(err => {
        console.warn("Background video autoplay blocked or failed:", err);
      });
    }
  }, []);

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    const normalized = passcode.trim().toUpperCase();
    if (normalized === 'ATLAS' || normalized === '3I' || normalized === '3I/ATLAS' || normalized === 'DEFENSA') {
      setError(false);
      setShowPasscode(false);
      setAccessGranted(true);
      
      setTimeout(() => {
        setAccessGranted(false);
        setEasterEggActive(true);
      }, 2000); // Decrypt glitch duration
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const closeEasterEgg = () => {
    setEasterEggActive(false);
  };

  return (
    <section id="nasa-section" className="min-h-screen relative bg-transparent text-white overflow-x-hidden pt-24 pb-32 font-sans selection:bg-[#0052a5] selection:text-white">
      
      {/* Cosmic Deep-Space Video Background */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#020205]">
        <video 
          ref={bgVideoRef}
          src="/nasa.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-60 transition-opacity duration-1000"
          style={{ filter: 'blur(3px) brightness(0.6)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("Bg video loop failed:", err));
            }
          }}
        />
        {/* Gradients to merge background elegantly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/75 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,82,165,0.08)_0%,_#020205_100%)] z-10"></div>
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
            {/* Centered Large NASA Logo replacing the previous SVG */}
            <div 
              onClick={() => setShowPasscode(true)}
              className="w-48 h-48 mb-8 cursor-pointer group relative flex items-center justify-center"
              title="Acceder al Servidor DSN..."
            >
              {/* Complex concentric sci-fi rings behind logo */}
              <div className="absolute inset-0 bg-[#0052a5]/5 rounded-full blur-2xl group-hover:bg-[#0052a5]/20 transition-all duration-700 pointer-events-none"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute w-[110%] h-[110%] rounded-full border border-blue-500/10 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute w-[95%] h-[95%] rounded-full border border-blue-500/20 border-dotted"
              />
              
              {/* NASA Logo image */}
              <img 
                src="/nasa.png" 
                alt="NASA Logo" 
                className="w-40 h-40 object-contain relative z-10 transition-all duration-700 filter drop-shadow-[0_0_20px_rgba(0,82,165,0.7)] group-hover:scale-105"
              />

              {/* Glowing radar line indicator */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/20 pointer-events-none origin-center"
              />
            </div>

            <h1 className="font-maison text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 drop-shadow-md">
              NASA (2025)
            </h1>
            <p className="font-mono text-blue-400 tracking-[0.35em] uppercase text-xs md:text-sm border-b border-blue-500/20 pb-4 mb-8">
              National Aeronautics and Space Administration
            </p>

            <div className="inline-flex items-center gap-3 bg-blue-950/20 border border-blue-500/30 px-6 py-3 rounded-full backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="font-codec text-xs md:text-sm tracking-widest uppercase text-blue-100 font-bold">
                TÓPICO: EL CASO DEL 3i/ATLAS
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Extensive Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert max-w-none font-codec font-light leading-relaxed text-gray-300 text-sm md:text-base"
            >
              {/* Core Quote Box */}
              <div className="text-lg md:text-xl text-white font-maison leading-snug mb-8 border-l-4 border-blue-500 pl-6 py-2 bg-blue-950/10 rounded-r-2xl">
                💫 La exploración de nuestro vecindario cósmico ha dejado de ser una observación pasiva para convertirse en un estudio de encuentros inesperados.
              </div>

              <p className="mb-6">
                Durante décadas, asumimos que todo lo que cruzaba el Sistema Solar pertenecía a nuestra propia genealogía estelar, nacido de la misma nube de gas y polvo que formó al Sol. Sin embargo, el descubrimiento de visitantes provenientes de otros sistemas estelares ha roto esa burbuja de aislamiento, obligando a la astronomía a redefinir sus categorías y a enfrentarse a comportamientos que desafían las leyes de la lógica planetaria tradicional.
              </p>

              {/* Graphic Vector Orbital System representing 3i/ATLAS trajectory */}
              <div className="bg-black/50 border border-blue-950/50 rounded-3xl p-6 my-10 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,82,165,0.06)_0%,_transparent_75%)]" />
                <span className="font-mono text-[9px] tracking-widest uppercase text-blue-400/50 mb-4 self-start">DSN DEEP-SPACE TELEMETRY - GRID-09</span>
                
                {/* SVG Orbital Plotter */}
                <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto relative z-10 text-white">
                  {/* Planetary Orbits */}
                  <circle cx="200" cy="100" r="25" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <circle cx="200" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 2" />
                  <circle cx="200" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.1)" />
                  
                  {/* Sun */}
                  <circle cx="200" cy="100" r="8" fill="#F59E0B" className="animate-pulse" />
                  
                  {/* Planets */}
                  <circle cx="225" cy="100" r="3" fill="#60A5FA" /> {/* Earth */}
                  <circle cx="150" cy="100" r="2" fill="#F87171" /> {/* Mars */}
                  
                  {/* Path of 3i/ATLAS */}
                  <motion.path
                    d="M 50 20 Q 200 130 350 180"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                  />
                  {/* Static trajectory reference line */}
                  <path d="M 50 20 Q 200 130 350 180" fill="none" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="1" />
                  
                  {/* Intruder Beacon Indicator */}
                  <circle cx="218" cy="122" r="3.5" fill="#EF4444" className="animate-ping" style={{ animationDuration: '2s' }} />
                  <circle cx="218" cy="122" r="2" fill="#EF4444" />
                  
                  {/* Text Tags */}
                  <text x="210" y="90" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">SOL</text>
                  <text x="235" y="125" fill="#EF4444" fontSize="8" fontFamily="monospace" fontWeight="bold">3i/ATLAS Trajectory</text>
                </svg>
              </div>

              <p className="mb-6">
                La gestión de la NASA respecto al objeto interestelar <strong>3i/ATLAS</strong> ha dejado de ser un ejercicio de astronomía convencional para convertirse en una crisis de soberanía y credibilidad institucional. A diferencia de sus predecesores, el <em>'Oumuamua</em> y el <em>Borisov</em>, este tercer intruso presenta anomalías que fracturan los modelos astrofísicos estándar: una cola orientada inexplicablemente hacia el Sol, cambios bruscos de reflectividad que sugieren una geometría artificial y una firma de isótopos metálicos procesados que no coinciden con ninguna genealogía estelar conocida.
              </p>

              <div className="bg-blue-950/15 border border-blue-500/20 p-8 rounded-2xl my-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <h3 className="font-maison text-xl text-white mb-4 uppercase tracking-wide">Firma Anómala en Análisis</h3>
                <p className="text-gray-400 text-sm md:text-base mb-0">
                  La problemática se agudiza ante la naturaleza del movimiento de rotación tipo <strong>tumbling</strong> sin pérdida de masa aparente, lo que plantea una duda inquietante sobre si nos hallamos ante un fenómeno natural atípico o un artefacto de tecnología exógena.
                </p>
              </div>

              <p className="mb-6">
                Mientras la narrativa oficial de la NASA sostiene una campaña de colaboración científica internacional, la activación encubierta del <strong>Protocolo de Defensa Planetaria</strong> ha filtrado una realidad mucho más alarmante hacia la opinión pública, transformando la curiosidad científica en un estado de horror y sospecha global.
              </p>

              <div className="text-lg md:text-xl font-maison text-blue-200 border-l-2 border-blue-500/40 pl-5 italic mt-8 leading-relaxed">
                ¿Es el 3i/ATLAS el mensajero final de una física interestelar que aún no logramos investigar, o es la evidencia tangible de que la humanidad ha dejado de estar sola en un universo que, hasta hoy, creíamos bajo nuestra vigilancia?
              </div>

            </motion.div>
          </div>

          {/* Right Column: Parameters, Interactive Metadata Console */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Parameters Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#05050a]/90 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Globe className="w-36 h-36 text-blue-500" />
              </div>
              
              <h3 className="font-mono text-xs tracking-widest uppercase text-blue-400 mb-2">Parámetros del Comité</h3>
              <div className="text-2xl sm:text-3xl font-maison font-black text-white mb-6 uppercase tracking-wide">Modalidad y Ciclo</div>
              
              <div className="flex items-center gap-4 bg-blue-950/20 p-4 rounded-2xl border border-blue-900/30 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-codec text-xs text-blue-400/50 uppercase tracking-widest">Formato Operativo</div>
                  <div className="font-bold text-lg text-white">Mixto / Individual</div>
                </div>
              </div>

              {/* Technical Specifications Overlay Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-blue-950/40 pt-6">
                {[
                  { label: "OBJETO", val: "3i/ATLAS" },
                  { label: "ESTATUS", val: "CRISIS-D5" },
                  { label: "VELOCIDAD", val: "88.4 km/s" },
                  { label: "TUMBLING", val: "4.8 s (ACTIVO)" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-black/40 border border-white/5 p-3.5 rounded-xl text-left">
                    <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-0.5">{stat.label}</span>
                    <span className="font-mono text-xs text-blue-300 font-bold">{stat.val}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                <button 
                  onClick={() => window.open('https://drive.google.com/file/d/1n5lsBqbnoiMpmBsbWOyGjN4a5Gac5wmD/view?usp=sharing', '_blank')}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-blue-600/15 border border-white/10 hover:border-blue-500/50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/60 border border-white/5 rounded-lg group-hover:border-blue-500/30 transition-colors">
                    <Download className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-blue-400 transition-colors">Guía de Documentos</span>
                    <span className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">Ver Carpeta Oficial NASA</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => setShowMesa(true)}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-blue-600/15 border border-white/10 hover:border-blue-500/50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/60 border border-white/5 rounded-lg group-hover:border-blue-500/30 transition-colors">
                    <Users className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-blue-400 transition-colors">Mesa Directiva</span>
                    <span className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">Conoce a tu mesa</span>
                  </div>
                </button>
              </div>

            </motion.div>

            {/* Classified Bypass Console Trigger Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-black/60 border border-red-500/20 hover:border-red-500/40 rounded-3xl p-6 relative overflow-hidden flex items-center justify-between transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-500">
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-widest">DSN CLASSIFIED NETWORK</div>
                  <div className="font-mono text-xs text-gray-400 mt-0.5">Acceso militar restringido de la NASA.</div>
                </div>
              </div>
              <button 
                onClick={() => setShowPasscode(true)}
                className="bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 px-3.5 py-1.5 rounded-lg font-mono text-[10px] uppercase font-bold tracking-widest transition-all duration-300 shadow-md"
              >
                Bypass
              </button>
            </motion.div>

            {/* NASA Immersive Exhibit Dossier Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8 animate-pulse-slow"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden group border border-blue-500/20 bg-black/40">
                <img src="/n1.webp" alt="3i/ATLAS Spectrum" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <span className="font-mono text-[8px] text-blue-400 tracking-[0.25em] uppercase block mb-1">Dossier Exhibit 01</span>
                  <h4 className="font-maison font-bold text-sm text-white">Anomalous Isotopic Spectrum</h4>
                  <span className="font-mono text-[8px] text-white/40 block mt-0.5">Spectroscopic analysis showing processed iron-60</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-2xl overflow-hidden group border border-blue-500/20 bg-black/40">
                  <img src="/n2.jpg" alt="Thermal Signature" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale sepia-[0.2]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-left">
                    <span className="font-mono text-[7px] text-blue-400 tracking-wider uppercase block">Exhibit 02</span>
                    <h5 className="font-maison font-bold text-[11px] text-white leading-tight">Thermal Sweep</h5>
                  </div>
                </div>

                <div className="relative h-32 rounded-2xl overflow-hidden group border border-blue-500/20 bg-black/40">
                  <img src="/n3.jpg" alt="Tumbling Orbit" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale sepia-[0.1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-left">
                    <span className="font-mono text-[7px] text-blue-400 tracking-wider uppercase block">Exhibit 03</span>
                    <h5 className="font-maison font-bold text-[11px] text-white leading-tight">Tumbling Log</h5>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* 1. Passcode Encryption Entry Modal */}
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
              className={`w-full max-w-md bg-[#05050a] border border-blue-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl ${error ? 'animate-shake' : ''}`}
            >
              {/* Subtle tech background line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500" />
              
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-950/40 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>

              <h3 className="font-maison text-2xl font-black text-white uppercase mb-2">DSN LINK SECURITY</h3>
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-6">
                Ingrese contraseña de bypass del satélite (Pista: Objeto de la crisis)
              </p>

              <form onSubmit={handlePasscodeSubmit} className="space-y-4">
                <input 
                  type="text" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="CODE_ATLAS_9..."
                  className="w-full bg-black border border-blue-900/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-xl px-4 py-3 font-mono text-sm tracking-widest text-center text-blue-400 focus:outline-none uppercase placeholder:text-gray-700 placeholder:tracking-normal transition-all"
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
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md shadow-blue-500/20"
                  >
                    Verificar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Success Glitch Transition Screen */}
      <AnimatePresence>
        {accessGranted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4000] bg-black flex flex-col items-center justify-center font-mono text-cyan-400 p-6 select-none"
          >
            <div className="w-full max-w-lg space-y-4">
              <div className="flex items-center gap-3 text-red-500 mb-6 animate-pulse">
                <ShieldAlert className="w-8 h-8" />
                <span className="font-mono text-sm font-black tracking-widest">DSN DECRYPTION BYPASS SUCCESSFUL</span>
              </div>
              
              <div className="font-mono text-xs space-y-1.5 border-l-2 border-cyan-400/40 pl-4 py-2">
                <div>[SYSTEM] INITIALIZING DECRYPTOR SEQUENCE... [OK]</div>
                <div>[SYSTEM] OVERPASSING NASA FIERY PROTOCOL-B... [OK]</div>
                <div>[SYSTEM] CONNECTING TO CLASSIFIED REPOSITORY SECTOR-9... [OK]</div>
                <div>[SYSTEM] DOWNLOADING REDACTED ARCHIVES FOR 3i/ATLAS...</div>
              </div>

              {/* Fake progress load */}
              <div className="w-full h-1 bg-cyan-950 rounded-full relative overflow-hidden mt-6">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/3 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Immersive Classified Telemetry Reveal Screen (Easter Egg Modal) */}
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
              className="w-full max-w-4xl bg-[#030308] border border-red-500/30 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Classified Warning Frame */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-red-500" />
              <div className="absolute top-10 left-10 w-8 h-8 text-red-500/10 pointer-events-none">
                <ShieldAlert className="w-full h-full" />
              </div>

              {/* Close Button */}
              <button 
                onClick={closeEasterEgg}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all duration-300 z-50 border border-white/10 hover:border-red-500"
              >
                <Unlock className="w-5 h-5 text-red-400 group-hover:text-white" />
              </button>

              <div className="flex flex-col gap-6 font-mono text-left max-w-3xl mx-auto pt-6 text-sm">
                
                {/* Header warning */}
                <div className="flex items-center gap-4 bg-red-950/20 border border-red-500/30 p-4 rounded-xl text-red-400">
                  <ShieldAlert className="w-6 h-6 shrink-0 animate-bounce" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-widest">CLASSIFIED DOCUMENT • LEVEL 5 EYES ONLY</div>
                    <div className="text-[10px] text-red-400/80 mt-0.5">UNAUTHORIZED REPRODUCTION IS SUBJECT TO IMMEDIATE MILITARY PROSECUTION.</div>
                  </div>
                </div>

                <div className="border border-white/10 p-6 rounded-2xl bg-black/40 space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-400">ID: NASA-DSN-3i-CONFIDENCIAL</span>
                    <span className="text-red-500 font-bold animate-pulse">TRANSMISIÓN INTERCEPTADA</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    <strong>[SATELLITE DOWNLINK RECON - DSN SEC-9]</strong><br />
                    Las mediciones del Goldstone DSN indican una emisión modulada periódica a 1.42 GHz proveniente del núcleo del 3i/ATLAS. Esta frecuencia no coincide con ningún proceso térmico natural. El movimiento de rotación tipo <em>tumbling</em> no es caótico; la velocidad angular y el vector de orientación siguen una secuencia binaria que reorienta periódicamente el colector de reflectores metálicos hacia los planetas interiores del Sistema Solar.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    <strong>[REDACTADO]:</strong><br />
                    Las firmas espectroscópicas de los isótopos de hierro-60 procesados y silicio-carbono ultra-puro revelan una densidad cristalina equivalente al grafeno multicapa artificial. El Protocolo de Defensa Planetaria está operando con un despliegue preventivo del satélite militar ATLAS-9 para interceptar y desviar potenciales emisiones de datos dirigidas al exterior del Sistema Solar.
                  </p>

                  <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-red-200">
                    <span className="font-bold uppercase tracking-wider block mb-1">Diagnóstico Final Encubierto:</span>
                    El objeto 3i/ATLAS no es un cometa. Es una sonda transmisora activa de origen exógeno. La humanidad ha dejado de estar sola.
                  </div>
                </div>

                <div className="text-center mt-6">
                  <button 
                    onClick={closeEasterEgg}
                    className="bg-white/5 hover:bg-white text-gray-400 hover:text-black border border-white/10 hover:border-white px-8 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all"
                  >
                    Cerrar Transmisión Segura
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Mesa Directiva Modal Popup (NASA Sci-Fi Style) */}
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
              className="w-full max-w-2xl bg-[#020205] border border-blue-500/30 rounded-[2.5rem] p-8 md:p-10 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Blue DSN trim lines */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#0052a5]" />
              <div className="absolute inset-2 border border-blue-500/10 rounded-[2.2rem] pointer-events-none" />

              <button 
                onClick={() => setShowMesa(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white rounded-full flex items-center justify-center transition-all duration-300 z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400">
                <Users className="w-8 h-8 animate-pulse" />
              </div>

              <h3 className="font-maison text-3xl font-extrabold text-white uppercase tracking-tight mb-2">
                MESA DIRECTIVA
              </h3>
              <p className="font-mono text-[10px] text-blue-400 tracking-[0.35em] uppercase mb-8 border-b border-white/10 pb-4">
                NASA DEEP SPACE COMMAND • ESTACIÓN ATLAS-9
              </p>

              {/* Members Dossier Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
                {/* Presidente Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                  <span className="font-mono text-[8px] text-blue-400 tracking-[0.2em] uppercase block mb-1">Presidente</span>
                  <h4 className="font-maison font-bold text-xl text-white group-hover:text-blue-400 transition-colors">Isaias Tovar</h4>
                  <div className="w-8 h-[1px] bg-white/10 mx-auto my-3 group-hover:bg-blue-500/30 transition-colors" />
                  <p className="text-[10px] text-gray-500 font-codec leading-relaxed">Director del Centro de Misión y Comunicaciones de la Red del Espacio Profundo (DSN).</p>
                </div>

                {/* Vicepresidente Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                  <span className="font-mono text-[8px] text-blue-400 tracking-[0.2em] uppercase block mb-1">Vicepresidente</span>
                  <h4 className="font-maison font-bold text-xl text-white group-hover:text-blue-400 transition-colors">Victoria Hernandez</h4>
                  <div className="w-8 h-[1px] bg-white/10 mx-auto my-3 group-hover:bg-blue-500/30 transition-colors" />
                  <p className="text-[10px] text-gray-500 font-codec leading-relaxed">Directora de Astrofísica y Coordinación del Protocolo de Defensa Planetaria.</p>
                </div>
              </div>

              <button 
                onClick={() => setShowMesa(false)}
                className="bg-white/5 hover:bg-white text-gray-400 hover:text-black border border-white/10 hover:border-white px-8 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all"
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

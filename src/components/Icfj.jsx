import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, FileText, Download, ShieldAlert, Cpu, Terminal, RefreshCw, ChevronRight, HelpCircle, Users, X, Award, CheckCircle, AlertTriangle, Play, Activity, Tv, Eye } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Icfj() {
  const [activeLeak, setActiveLeak] = useState('leak1');
  const [showMesaModal, setShowMesaModal] = useState(false);
  const [activeFrequencies, setActiveFrequencies] = useState([]);
  
  // Soundboard state
  const [soundboardPulse, setSoundboardPulse] = useState(false);
  const [activePad, setActivePad] = useState(null);

  // Fact check states
  const [checkedStatements, setCheckedStatements] = useState({});
  const [checkingId, setCheckingId] = useState(null);

  const bgVideoRef = useRef(null);

  useEffect(() => {
    // Play wisin.mp3 immediately for ICFJ
    audioSystem.switchToIcfj();

    // Create random heights for the pumping music audio wave bars
    const interval = setInterval(() => {
      const freqs = Array.from({ length: 24 }, () => Math.floor(Math.random() * 8) + 2);
      setActiveFrequencies(freqs);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleFactCheck = (id, isTrue) => {
    setCheckingId(id);
    setTimeout(() => {
      setCheckedStatements((prev) => ({
        ...prev,
        [id]: isTrue ? 'APPROVED' : 'DEBUNKED'
      }));
      setCheckingId(null);
    }, 1200);
  };

  const triggerSoundpad = (padId) => {
    setActivePad(padId);
    setSoundboardPulse(true);
    setTimeout(() => {
      setSoundboardPulse(false);
      setActivePad(null);
    }, 600);
  };

  const exclusiveLeaks = {
    leak1: {
      title: "CABLE NASA: EL INCIDENTE 3I/ATLAS",
      source: "NASA Intelligence Hub // Deep Space Leaks",
      content: "Señales electromagnéticas encriptadas captadas por el radiotelescopio de Arecibo confirman que el objeto 3i/ATLAS no es un cometa de hielo inerte. La NASA mantiene reuniones a puerta cerrada con delegados de seguridad militar para mitigar el pánico geopolítico global. Se ha ordenado censura en cables generales de radiodifusión.",
      status: "INTERCEPTADO EN VIVO"
    },
    leak2: {
      title: "CABLE VOYNICH: CÓDICE MS 408",
      source: "Cripto-Análisis Avanzado // Villa Mondragone",
      content: "Las ilustraciones herbales y astronómicas no corresponden a la flora terrestre del siglo XV. Interpolaciones informáticas revelan capas superpuestas de microfilm digital invisibles al ojo humano. El manuscrito es una bitácora científica de tecnología de transferencia interestelar camuflada como herbolaria medieval.",
      status: "DECRIPCIÓN CUÁNTICA"
    },
    leak3: {
      title: "CABLE ICA: MIRAMAR CORTOCIRCUITO",
      source: "Archivos Desclasificados // La Plata 1935",
      content: "El geólogo Ameghino y el presidente Cataldo firmaron un manifiesto secreto denunciando el saqueo y confiscación de cráneos pampeanos antiguos por arqueólogos de Europa Central. Se busca evitar que la humanidad acepte un origen filogenético profundo no alineado con las jerarquías deterministas alemanas.",
      status: "ARCHIVOS DE LA PLATA"
    }
  };

  const factCheckStatements = [
    {
      id: 'stmt1',
      text: "La NASA oculta que el 3i/ATLAS posee un sistema de autopropulsión y una órbita guiada artificialmente.",
      isTrue: true,
      explanation: "VERIFICADO. Datos internos filtrados de la NASA muestran cambios sutiles de velocidad no explicables por viento solar o desgasificación cometaria ordinaria, apuntando a propulsores funcionales."
    },
    {
      id: 'stmt2',
      text: "Los cráneos de Miramar son falsificaciones talladas en arcilla por Florentino Ameghino para ganar fama.",
      isTrue: false,
      explanation: "FALSO. Estudios estratigráficos modernos y análisis químicos de los loess pampeanos confirman que son restos humanos genuinos fosilizados en estratos del Plioceno, descartando cualquier fraude."
    },
    {
      id: 'stmt3',
      text: "El Manuscrito Voynich fue escrito por extraterrestres utilizando un código cuántico imposible de romper.",
      isTrue: false,
      explanation: "FALSO. El texto está redactado en una lengua con estructura gramatical humana (ley de Zipf). Es un sistema de cifrado criptográfico terrestre extraordinario, no de origen alienígena directo."
    }
  ];

  return (
    <section id="icfj-section" className="min-h-screen relative bg-[#020508] text-[#00f0ff] overflow-x-hidden pt-28 pb-32 font-mono selection:bg-[#00f0ff] selection:text-black">
      
      {/* Background Broadcasting Loop Video */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video 
          ref={bgVideoRef}
          src="/york.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-35 transition-opacity duration-1000"
          style={{ filter: 'hue-rotate(180deg) brightness(0.2) contrast(1.3) saturate(1.5)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("York video loop failed:", err));
            }
          }}
        />
        <div className="absolute inset-0 bg-[#020508]/85 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.06)_0%,_#020508_100%)] z-10" />
      </div>

      {/* Floating Holographic Cyber Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00f0ff] opacity-10 animate-float"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 12 + 6}s`
            }}
          />
        ))}
      </div>

      {/* Pulsing Flash Overlay when Soundpad is clicked */}
      <AnimatePresence>
        {soundboardPulse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#00f0ff] z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Live Cyber Ticker Tape */}
      <div className="absolute top-16 left-0 right-0 h-8 bg-gradient-to-r from-black/80 via-[#00f0ff]/10 to-black/80 border-y border-[#00f0ff]/25 overflow-hidden flex items-center z-20">
        <div className="flex gap-16 whitespace-nowrap animate-marquee font-bold text-[9px] text-[#00f0ff] tracking-[0.35em] uppercase">
          <span>LIVE TRANSMISSION FEED // REPRODUCTOR DE AUDIO DE WISIN COMPLETAMENTE CALIBRADO</span>
          <span>★</span>
          <span>FILTRACIÓN EXCLUSIVA: DOCUMENTOS INTERNOS REVELAN CONEXIÓN ENTRE VILLA MONDRAGONE Y NASA</span>
          <span>★</span>
          <span>ICFJ NEWSROOM: FACT CHECKING EN TIEMPO REAL ACTIVO // CONTRASTANDO CABLES GEOPOLÍTICOS</span>
          <span>★</span>
          <span>XXVI CONGRESO EN CRISIS // LEAKS DE MIRAMAR COMPLETO</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl mt-6">
        
        {/* Title Capsule */}
        <div className="max-w-4xl mx-auto mb-16 pt-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[9px] text-[#ff00a0] tracking-[0.45em] uppercase mb-2 animate-pulse">CORRESPONSAL CENTRAL DE MODELO</span>
            <h1 className="font-maison text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#00f0ff] drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              PRENSA ICFJ
            </h1>
            <p className="font-mono text-gray-500 tracking-[0.3em] uppercase text-[9px] border-b border-[#0e222e] pb-3 mb-6">
              CENTRO INTERNACIONAL DE PERIODISTAS
            </p>
          </motion.div>
        </div>

        {/* -------------------- 3D CYBER MONITOR CONTROL ROOM -------------------- */}
        
        {/* Real-time Sat Feeds Monitoring Grid (ICFJ is the central room) */}
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 mb-8">
          {[
            { name: "SATELLITE 3I/ATLAS", target: "NASA (2025)", status: "MONITORING FEED", color: "text-[#00f0ff] border-[#00f0ff]/20 bg-[#00f0ff]/5" },
            { name: "VILLA MONDRAGONE", target: "VOYNICH (1925)", status: "DECRYPTING LINK", color: "text-[#ff00a0] border-[#ff00a0]/20 bg-[#ff00a0]/5" },
            { name: "LA PLATA ARCHIVE", target: "ICA (1935)", status: "TELEPRINT RUNNING", color: "text-amber-500 border-amber-500/20 bg-amber-500/5" }
          ].map((feed, i) => (
            <div key={i} className={`p-3 border rounded-2xl flex flex-col justify-between text-left backdrop-blur-md relative overflow-hidden ${feed.color}`}>
              {/* Animated scanning sweep */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,rgba(0,240,255,0.06)_50%,transparent_55%)] bg-[size:100%_40px] pointer-events-none animate-scanline" />
              
              <div className="flex justify-between items-center mb-1">
                <span className="text-[8px] font-bold tracking-wider">{feed.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              </div>
              <span className="font-maison text-sm md:text-base font-extrabold text-white leading-tight uppercase">{feed.target}</span>
              <div className="flex justify-between items-center text-[7px] opacity-60 tracking-widest mt-2 border-t border-white/5 pt-1.5">
                <span>STATUS: {feed.status}</span>
                <span>SEC-CH: 0{i+1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Work Grid Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT PANEL (7 cols): Teleprinter Leaked Cable (CRT effect) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#05090f]/90 border-2 border-[#00f0ff]/30 rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,240,255,0.1)] relative overflow-hidden">
            {/* Tech bracket lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f0ff]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00f0ff]" />

            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#00f0ff]/20 pb-3">
                <Radio className="w-5 h-5 text-[#00f0ff] animate-pulse" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">TELEX Y FILTRACIONES SATELEITALES [TELEPRINTER]</h3>
              </div>

              {/* Selector buttons styled as broadcast channels */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {Object.keys(exclusiveLeaks).map((leakId) => (
                  <button
                    key={leakId}
                    onClick={() => setActiveLeak(leakId)}
                    className={`px-4 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeLeak === leakId
                        ? 'bg-[#00f0ff] text-black border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.4)] font-black'
                        : 'bg-[#0d141e] border-[#00f0ff]/20 text-[#00f0ff]/70 hover:border-[#00f0ff]/40 hover:text-white'
                    }`}
                  >
                    {leakId === 'leak1' ? 'Canal NASA' : leakId === 'leak2' ? 'Canal Voynich' : 'Canal ICA'}
                  </button>
                ))}
              </div>

              {/* Holographic curved CRT monitor leak card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeak}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#080d15] border-2 border-[#00f0ff]/15 rounded-3xl p-6 min-h-[220px] text-left relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]"
                >
                  {/* CRT Glass curvature shadow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(0,0,0,0.4)_100%)] pointer-events-none z-10" />

                  {/* Intercept seal */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#ff00a0]/15 border border-[#ff00a0]/40 px-2 py-1 rounded text-[8px] text-[#ff00a0] font-bold uppercase tracking-widest animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff00a0] animate-ping" />
                    {exclusiveLeaks[activeLeak].status}
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-1 uppercase tracking-wider pr-20">
                    {exclusiveLeaks[activeLeak].title}
                  </h4>
                  <span className="text-[8px] text-cyan-400 font-bold tracking-widest block uppercase mb-4">
                    ORIGEN DE SEÑAL: {exclusiveLeaks[activeLeak].source}
                  </span>

                  <div className="space-y-4 text-xs leading-relaxed text-[#c2eff7]/80">
                    <p className="border-l-2 border-[#00f0ff]/40 pl-3 leading-relaxed font-light font-mono">
                      {exclusiveLeaks[activeLeak].content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pumping Wisin frequency audio wave bars */}
            <div className="mt-8 pt-4 border-t border-[#00f0ff]/15 flex flex-col gap-3">
              <span className="text-[9px] text-[#ff00a0] font-bold uppercase tracking-widest text-left animate-pulse">SISTEMA CORRESPONSAL WISIN EN VIVO [BASS FREQ]</span>
              <div className="flex items-end gap-1 justify-start h-10 px-1 border-b border-[#00f0ff]/10 pb-1">
                {activeFrequencies.map((val, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: val * 4.2 }}
                    transition={{ ease: "easeOut" }}
                    className="w-2.5 bg-gradient-to-t from-[#ff00a0] to-[#00f0ff] rounded-t-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                    style={{ height: `${val * 2.5}px` }}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL (5 cols): AI Truth-Detector Matrix */}
          <div className="lg:col-span-5 flex flex-col bg-[#05090f]/90 border-2 border-[#00f0ff]/30 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden justify-between">
            {/* Tech bracket lines */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00f0ff]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f0ff]" />

            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#00f0ff]/20 pb-3">
                <ShieldAlert className="w-5 h-5 text-[#ff00a0]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">AI TRUTH-DETECTOR RADAR MATRIX</h3>
              </div>

              <p className="text-[9px] leading-relaxed text-gray-500 mb-6 text-left">
                Verifique los cables captados del espectro electromagnético. El escáner buscará firmas sintéticas de inteligencia artificial:
              </p>

              {/* Statement List */}
              <div className="space-y-4">
                {factCheckStatements.map((stmt) => {
                  const isChecked = checkedStatements[stmt.id];
                  const isChecking = checkingId === stmt.id;

                  return (
                    <div 
                      key={stmt.id} 
                      className={`p-4 rounded-2xl bg-[#090e15] border transition-all duration-300 text-left relative overflow-hidden ${
                        isChecked === 'APPROVED' 
                          ? 'border-emerald-500/40 bg-emerald-500/5' 
                          : isChecked === 'DEBUNKED'
                            ? 'border-[#ff00a0]/40 bg-[#ff00a0]/5'
                            : 'border-[#00f0ff]/10'
                      }`}
                    >
                      {/* Scanning line for fact checking */}
                      {isChecking && (
                        <div className="absolute inset-x-0 h-0.5 bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,1)] animate-scanline z-20 pointer-events-none" />
                      )}

                      <p className="text-xs text-[#c2eff7]/90 leading-relaxed font-light mb-3">"{stmt.text}"</p>
                      
                      <div className="flex justify-between items-center relative z-10">
                        <span className="font-mono text-[8px] text-gray-500 uppercase">SAT-LINK SECURE: OK</span>
                        
                        {isChecked ? (
                          <div className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${
                            isChecked === 'APPROVED' ? 'text-emerald-400' : 'text-[#ff00a0]'
                          }`}>
                            {isChecked === 'APPROVED' ? (
                              <>
                                <CheckCircle className="w-3.5 h-3.5" /> TRUTH: VERIFIED
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-3.5 h-3.5 animate-bounce" /> FALSE: DEBUNKED
                              </>
                            )}
                          </div>
                        ) : (
                          <button
                            onClick={() => handleFactCheck(stmt.id, stmt.isTrue)}
                            disabled={checkingId !== null}
                            className="px-3 py-1.5 rounded-lg border border-[#00f0ff]/30 hover:border-[#00f0ff] text-[8px] text-[#00f0ff] font-bold uppercase tracking-widest hover:bg-[#00f0ff] hover:text-black transition-all shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                          >
                            {isChecking ? 'SCANNING SPEC...' : 'ESCULTAR SEÑAL'}
                          </button>
                        )}
                      </div>

                      {/* Explanatory description card */}
                      <AnimatePresence>
                        {isChecked && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 pt-3 border-t border-white/5 text-[9.5px] text-gray-400 leading-relaxed"
                          >
                            {stmt.explanation}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soundboard Interactive Pads (Super top-tier feature) */}
            <div className="mt-6 pt-4 border-t border-[#00f0ff]/10">
              <span className="text-[8px] text-gray-500 uppercase tracking-widest block text-left mb-2.5">STUDIO LIVE BROADCAST PAD PANEL:</span>
              <div className="grid grid-cols-4 gap-2">
                {['FLASH INFO', 'SATELLITE', 'RADAR', 'ON-AIR'].map((pad, idx) => (
                  <button
                    key={idx}
                    onClick={() => triggerSoundpad(idx + 1)}
                    className={`py-2 px-1 text-[8.5px] font-black uppercase tracking-wider rounded-lg border transition-all duration-300 ${
                      activePad === idx + 1
                        ? 'bg-[#00f0ff] text-black border-[#00f0ff] scale-95 shadow-[0_0_15px_rgba(0,240,255,0.6)]'
                        : 'bg-[#0d141f] border-[#00f0ff]/20 text-[#00f0ff]/80 hover:border-[#ff00a0]/50 hover:text-white'
                    }`}
                  >
                    {pad}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* -------------------- DYNAMIC NEON MÁRQUEZ QUOTE WALL -------------------- */}
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-red-950/20 via-[#00f0ff]/5 to-cyan-950/20 border-2 border-[#00f0ff]/40 p-8 shadow-[0_15px_40px_rgba(0,240,255,0.1)] text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff]" />

          <p className="font-serif italic text-lg sm:text-2xl text-white leading-relaxed mb-4">
            "Los periodistas se han extraviado en el laberinto de una tecnología disparada sin control hacia el futuro."
          </p>
          <span className="font-mono text-xs tracking-widest text-[#00f0ff] uppercase font-black shadow-glow animate-pulse">— GABRIEL GARCÍA MÁRQUEZ</span>
        </div>

        {/* Lower Official Press Navigation Board */}
        <div className="max-w-5xl mx-auto p-8 rounded-[2rem] bg-[#070b10]/95 border-2 border-[#00f0ff]/30 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_15px_40px_rgba(0,240,255,0.08)]">
          <div className="text-center md:text-left">
            <span className="font-mono text-[8px] text-[#ff00a0] tracking-[0.3em] uppercase block mb-1">MESA DIRECTIVA Y PROTOCOLO DE PRENSA</span>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">CREDENCIALES Y REGLAMENTOS OFICIALES</h4>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Wax seal invite for Conoce a tu mesa */}
            <button 
              onClick={() => setShowMesaModal(true)}
              className="px-6 py-3 border border-[#00f0ff]/40 hover:border-[#00f0ff] text-[#00f0ff] hover:text-black hover:bg-[#00f0ff] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_5px_15px_rgba(0,240,255,0.15)] flex items-center gap-2 group font-bold"
            >
              <Users className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Conoce a tu Mesa
            </button>

            {/* Academic Guide link */}
            <a 
              href="https://drive.google.com/file/d/1UNNXOzxPL3bKhF2ZX_-RHBwffv2eyBq0/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#00f0ff] text-black hover:bg-cyan-300 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_5px_15px_rgba(0,240,255,0.3)] flex items-center gap-2 group font-bold border border-cyan-400/20"
            >
              <FileText className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Guía de Prensa
            </a>

            {/* ICFJ Regulations */}
            <a 
              href="https://drive.google.com/file/d/1DObtROSNbqmLqN-pywk3wcFpPRa9E4LW/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-950/40 text-red-400 hover:bg-red-900/30 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group border border-red-500/20"
            >
              <Award className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Reglamento ICFJ
            </a>
          </div>
        </div>

      </div>

      {/* CONOCE A TU MESA MODAL (Ultra-Premium Holographic Shutter Card) */}
      <AnimatePresence>
        {showMesaModal && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMesaModal(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm rounded-[2.5rem] bg-[#070b10] border-2 border-[#00f0ff] p-8 text-[#a5e5f3] z-10 shadow-[0_20px_50px_rgba(0,240,255,0.2)] text-center font-mono overflow-hidden"
            >
              {/* Scanline overlay for modal */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

              <button 
                onClick={() => setShowMesaModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#00f0ff]/10 border-2 border-[#00f0ff] flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Radio className="w-8 h-8 text-[#00f0ff]" />
              </div>
              
              <span className="text-[8px] text-[#ff00a0] tracking-[0.35em] uppercase block mb-1 font-bold animate-pulse">OFFICIAL PRESS PASS</span>
              <h3 className="text-xl font-black text-white uppercase mb-6 border-b border-[#00f0ff]/20 pb-3">DIRECCIÓN GENERAL DE PRENSA</h3>

              {/* Holographic ID pass card items */}
              <div className="space-y-6 text-center text-[#c2eff7] leading-relaxed">
                <div className="p-4 bg-[#0d131a] rounded-2xl border border-[#00f0ff]/15 relative overflow-hidden group hover:border-[#00f0ff]/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#ff00a0] font-bold">SEC_01</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">DIRECTOR GENERAL DE PRENSA</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Gabriel García</h4>
                  <p className="text-[9px] text-[#00f0ff] mt-0.5 uppercase tracking-widest">Coordinador General y Control de Telex</p>
                </div>

                <div className="p-4 bg-[#0d131a] rounded-2xl border border-[#00f0ff]/15 relative overflow-hidden group hover:border-[#00f0ff]/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#ff00a0] font-bold">SEC_02</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">DIRECTORA ASOCIADA DE BROADCAST</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Elena Fuentes</h4>
                  <p className="text-[9px] text-[#00f0ff] mt-0.5 uppercase tracking-widest">Supervisión Editorial y Fact Checking</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#00f0ff]/10 text-[8px] text-gray-500">
                ICFJ INTERNATIONAL MODEL SECURITY AGENT // VERIFIED PRESS PASS
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

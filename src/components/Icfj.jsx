import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, FileText, Download, ShieldAlert, Cpu, Terminal, RefreshCw, ChevronRight, HelpCircle, Users, X, Award, CheckCircle, AlertTriangle, Play, Activity, Tv, Eye, Layers } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Icfj() {
  const [activeLeak, setActiveLeak] = useState('leak1');
  const [showMesaModal, setShowMesaModal] = useState(false);
  const [activeFrequencies, setActiveFrequencies] = useState([]);
  const [activePad, setActivePad] = useState(null);

  // Fact check states
  const [checkedStatements, setCheckedStatements] = useState({});
  const [checkingId, setCheckingId] = useState(null);

  // Custom live telex publisher states
  const [customHeadline, setCustomHeadline] = useState('');
  const [headlines, setHeadlines] = useState([
    "LIVE CORRESPONDENT TRANSMISSION SYSTEM // NYC OPERATIONS CENTRE // WISIN.MP3 PLAYBACK ACTIVE",
    "ALERT: NASA DETECTS ANOMALOUS ACCELERATION IN INTERSTELLAR INTRUDER 3I/ATLAS",
    "CONGRESS DIARY LEAKED // Miramar deep fossils confirmed by 1935 commission archives",
    "VOYNICH CODE MS 408 DECRYPTION REPORT SUBMITTED FOR ETHICAL VERIFICATION"
  ]);

  // Theme explanation interactive tab state
  const [activeThemeTab, setActiveThemeTab] = useState('mision');

  const bgVideoRef = useRef(null);

  useEffect(() => {
    // Switch to wisin.mp3 on mount
    audioSystem.switchToIcfj();

    // Create random heights for the pumping music audio wave bars
    const interval = setInterval(() => {
      const freqs = Array.from({ length: 28 }, () => Math.floor(Math.random() * 8) + 2);
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
    setTimeout(() => {
      setActivePad(null);
    }, 400);
  };

  const exclusiveLeaks = {
    leak1: {
      title: "INFORME ESPECIAL: ANOMALÍA 3I/ATLAS",
      source: "NASA Jet Propulsion Lab / Space Reconnaissance Office",
      date: "31 Mayo 2026",
      secLevel: "TOP SECRET // LEVEL 5",
      words: "84 palabras",
      content: "Fuerzas gravitacionales anómalas registradas en los telescopios espaciales confirman que el intruso interestelar 3i/ATLAS posee variaciones de aceleración no naturales. Científicos descartan desgasificación de hielo ordinaria, postulando un motor inercial sintético funcional bajo la corteza del regolito. La NASA exige total confidencialidad para evitar colapsos diplomáticos.",
      status: "INTERCEPTADO"
    },
    leak2: {
      title: "RESOLUCIÓN VOYNICH: CÓDICE MS 408",
      source: "Cripto-Análisis Avanzado / Mondragone Archives",
      date: "30 Mayo 2026",
      secLevel: "CONFIDENTIAL // DECRYPT",
      words: "91 palabras",
      content: "Algoritmos avanzados descifraron capas de micro-trazos geométricos en los folios herbales y astronómicos del manuscrito medieval. Las ilustraciones botánicas muestran especímenes imposibles de mapear en la flora terrestre del siglo XV. Los reportes confirman que el manuscrito actúa como una bitácora científica encriptada para transferencias de coordenadas interestelares.",
      status: "DECRIPCIÓN"
    },
    leak3: {
      title: "MIRAMAR CORTOCIRCUITO: PACTO 1935",
      source: "Archivos Desclasificados / Americanistas La Plata",
      date: "29 Mayo 2026",
      secLevel: "RESTRICTED // HISTORIC",
      words: "79 palabras",
      content: "Correspondencia privada recuperada del congreso de La Plata de 1935 confirma que delegados de Europa Central ejercieron presiones ideológicas severas sobre Ameghino y Cataldo. Se ordenó clasificar el hallazgo de cráneos pampeanos profundos para evitar socavar las tesis Beringia que justifican los modelos coloniales de la época.",
      status: "CLASIFICADO"
    }
  };

  const factCheckStatements = [
    {
      id: 'stmt1',
      text: "La NASA oculta que el 3i/ATLAS posee un sistema de autopropulsión y una órbita guiada artificialmente.",
      isTrue: true,
      explanation: "VERIFICADO CON RIGOR. Datos telemétricos filtrados de la NASA muestran cambios periódicos de velocidad lineal imposibles de atribuir a la física cometaria ordinaria, probando la existencia de propulsores funcionales."
    },
    {
      id: 'stmt2',
      text: "Los cráneos excavados en Miramar son falsificaciones de arcilla talladas por Ameghino para justificar su autoctonismo.",
      isTrue: false,
      explanation: "DESMENTIDO CON RIGOR. Análisis geológicos modernos y pruebas de fluorina en los loess pampeanos confirman que son fósiles humanos auténticos del período Plioceno, descartando rotundamente cualquier fraude científico."
    },
    {
      id: 'stmt3',
      text: "El Manuscrito Voynich fue impreso con tipografía moderna del siglo XX para simular una procedencia medieval.",
      isTrue: false,
      explanation: "DESMENTIDO CON RIGOR. Pruebas destructivas de carbono-14 en el pergamino y espectrografía de las tintas demuestran de forma irrefutable una datación exacta en el rango de 1404 a 1438 d.C."
    }
  ];

  return (
    <section id="icfj-section" className="min-h-screen relative bg-[#040608] text-[#00f0ff] overflow-x-hidden pt-28 pb-32 font-mono selection:bg-[#00f0ff] selection:text-black">
      
      {/* High-Contrast Clear Background Video Layer - Vividly visible, no blur */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#020304]">
        <video 
          ref={bgVideoRef}
          src="/york.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-[0.80] transition-opacity duration-1000"
          style={{ filter: 'brightness(0.55) contrast(1.15) saturate(1.2)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("York video loop failed:", err));
            }
          }}
        />
        {/* Soft, clean professional overlays (No heavy blackouts / transparent) */}
        <div className="absolute inset-0 bg-[#040608]/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.03)_0%,_#040608_95%)] z-10" />
      </div>

      {/* Razor-sharp grid lines representing a professional dashboard */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Live Moving Ticker Tape */}
      <div className="absolute top-16 left-0 right-0 h-8 bg-black/90 border-y border-white/10 overflow-hidden flex items-center z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex gap-16 whitespace-nowrap font-bold text-[9px] text-[#00f0ff] tracking-[0.35em] uppercase w-max pr-16"
        >
          {[...headlines, ...headlines].map((text, idx) => (
            <React.Fragment key={idx}>
              <span>{text}</span>
              <span>★</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl mt-6">
        
        {/* Editorial Masthead Title */}
        <div className="max-w-4xl mx-auto mb-16 pt-6 text-center border-b border-white/10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] tracking-[0.45em] text-[#00f0ff] uppercase mb-2 block font-bold">THE INTERNATIONAL JOURNALISM INITIATIVE</span>
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase mb-1 tracking-tight text-white leading-none">
              ICFJ PRESS MONITOR
            </h1>
            <span className="text-[9px] text-gray-500 tracking-[0.3em] uppercase block mt-1">
              DIGITAL EDITORIAL & OPERATIONS DECK • NYC STATION
            </span>
          </motion.div>
        </div>

        {/* Real-time Sat Feeds Monitoring Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { name: "SAT FEED 01: NASA (2025)", info: "3i/ATLAS trajectory monitoring", status: "TELEMETRY STABLE", metric: "LNK: 99.4%" },
            { name: "SAT FEED 02: VOYNICH (1925)", info: "Codicology decryption database", status: "DECODING CORE", metric: "IPS: 142/s" },
            { name: "SAT FEED 03: ICA (1935)", info: "Stratigraphic Miramar archives", status: "TELEPRINT RUNNING", metric: "VOL: 85.1" }
          ].map((feed, i) => (
            <div key={i} className="p-4 border border-white/15 rounded-2xl bg-black/80 backdrop-blur-md text-left flex flex-col justify-between min-h-[90px] shadow-2xl">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold text-[#00f0ff] tracking-widest uppercase">{feed.name}</span>
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              </div>
              <span className="text-xs text-white/95 font-light leading-snug">{feed.info}</span>
              <div className="flex justify-between items-center text-[8px] text-gray-400 tracking-wider mt-3 border-t border-white/5 pt-2">
                <span>STATUS: {feed.status}</span>
                <span>{feed.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE JOURNALISM DIRECTIVE TERMINAL (Theme Explanation) */}
        <div className="max-w-7xl mx-auto mb-10 bg-black/80 border border-white/15 rounded-3xl p-6 text-left shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 border-b border-white/15 pb-2">
            <Radio className="w-4 h-4 text-[#ff00a0] animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">MANIFIESTO Y LÍNEA EDITORIAL DEL COMITÉ</h3>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Interactive Selector Buttons */}
            <div className="flex flex-row md:flex-col gap-2 shrink-0 w-full md:w-56">
              {[
                { id: 'mision', label: "La Misión y Verdad" },
                { id: 'rigor', label: "Rigor Analítico" },
                { id: 'ecosistema', label: "Ecosistema Digital" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveThemeTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl border text-[10px] font-bold uppercase tracking-widest text-left transition-all ${
                    activeThemeTab === tab.id
                      ? 'bg-[#00f0ff] text-black border-[#00f0ff] shadow-md'
                      : 'bg-[#0d1319]/40 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic briefing dispatch text */}
            <div className="flex-1 bg-[#0d1319]/50 border border-white/5 rounded-2xl p-5 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <AnimatePresence mode="wait">
                {activeThemeTab === 'mision' && (
                  <motion.div
                    key="mision"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[9px] text-[#ff00a0] tracking-widest block uppercase mb-2">★ DICTAMEN I: LA VERDAD FRENTE A LAS FRONTERAS ★</span>
                    En un mundo donde la información fluye a velocidades vertiginosas y las herramientas digitales redefinen las fronteras del conocimiento, el periodismo emerge como pilar indispensable para discernir la verdad de la ficción, esto a través de análisis de superficialidad y otras herramientas necesarias en un corresponsal.
                  </motion.div>
                )}

                {activeThemeTab === 'rigor' && (
                  <motion.div
                    key="rigor"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[9px] text-[#ff00a0] tracking-widest block uppercase mb-2">★ DICTAMEN II: EL CORRESPONSAL ANALÍTICO ★</span>
                    Los delegados del Centro Internacional de Periodistas (ICFJ) representan la vanguardia editorial de este modelo: un espacio donde los delegados no solo se encargarán de narrar eventos sucedidos en un ámbito diplomático, sino que los diseccionan con rigor analítico, creatividad auténtica y responsabilidad ética.
                  </motion.div>
                )}

                {activeThemeTab === 'ecosistema' && (
                  <motion.div
                    key="ecosistema"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[9px] text-[#ff00a0] tracking-widest block uppercase mb-2">★ DICTAMEN III: INTEGRIDAD FRENTE A LA IA ★</span>
                    En el ecosistema informativo actual, el desafío no es solo la rapidez, sino la integridad del dato. Los delegados del ICFJ asumen la tarea crítica de verificar y contrastar en tiempo real, actuando como un filtro necesario frente a la desinformación y el uso malintencionado de la inteligencia artificial.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* -------------------- HIGH-DENSITY PROFESSIONAL WORKSPACE -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT PANEL (4 cols): Active Telex Wire List */}
          <div className="lg:col-span-4 flex flex-col bg-black/60 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                <Activity className="w-4 h-4 text-[#00f0ff]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">TELEX INTERCEPTADOS</h3>
              </div>

              {/* High-density directory-style list */}
              <div className="flex flex-col gap-3">
                {Object.keys(exclusiveLeaks).map((leakId) => {
                  const isActive = activeLeak === leakId;
                  const item = exclusiveLeaks[leakId];

                  return (
                    <button
                      key={leakId}
                      onClick={() => setActiveLeak(leakId)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                        isActive
                          ? 'bg-[#00f0ff]/5 border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.08)]'
                          : 'bg-[#0d1319]/40 border-white/5 hover:border-white/20 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-[9px] font-bold tracking-widest ${isActive ? 'text-[#00f0ff]' : 'text-gray-500'}`}>
                          {item.secLevel}
                        </span>
                        <span className="text-[8px] text-gray-500">{item.date}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white leading-snug uppercase mb-1">{item.title}</h4>
                      <div className="flex justify-between items-center text-[7.5px] opacity-60 mt-2 border-t border-white/5 pt-1.5 w-full">
                        <span>ORIGEN: {item.source.split(' // ')[0]}</span>
                        <span>{item.words}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {/* Live Telex Dispatcher - High-fidelity interactivity */}
              <div className="mt-6 pt-4 border-t border-white/5 text-left">
                <span className="text-[8.5px] text-[#00f0ff] tracking-widest block uppercase mb-2.5">DESPACHAR TITULAR A LA CINTA EN VIVO</span>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!customHeadline.trim()) return;
                    setHeadlines((prev) => [`[FLASH CABLE] ${customHeadline.toUpperCase()}`, ...prev]);
                    setCustomHeadline('');
                  }}
                  className="flex gap-2"
                >
                  <input 
                    type="text" 
                    placeholder="REDACCIÓN DE ÚLTIMA HORA..."
                    value={customHeadline}
                    onChange={(e) => setCustomHeadline(e.target.value)}
                    className="flex-1 bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-[#00f0ff] placeholder-white/20 focus:outline-none focus:border-[#00f0ff] transition-all font-mono uppercase"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-[#00f0ff] text-black text-[10px] font-black rounded-xl uppercase tracking-wider transition-all hover:scale-95 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                  >
                    PUBLICAR
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[8.5px] text-gray-500 text-left">
              REGISTRY NETWORK DIRECTORY SYSTEM CORRESPONDENT
            </div>
          </div>


          {/* MIDDLE PANEL (5 cols): Real Newspaper Editing Suite */}
          <div className="lg:col-span-5 flex flex-col bg-black/60 border border-white/10 rounded-3xl p-6 shadow-2xl justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                <FileText className="w-4 h-4 text-[#00f0ff]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">REDACCIÓN & ANÁLISIS EDITORIAL</h3>
              </div>

              {/* Newspaper Styled Editing Box (Very professional & non-AI) */}
              <div className="bg-[#ece5d8] border border-gray-400 rounded-2xl p-6 min-h-[300px] text-[#2c1d11] font-serif text-left shadow-2xl relative">
                {/* Vintage stamp watermark overlay */}
                <div className="absolute top-4 right-4 border-2 border-red-800/20 text-red-800/20 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-widest transform rotate-12">
                  DRAFT APPROVED
                </div>
                
                <h4 className="font-serif italic text-lg sm:text-xl font-black text-amber-950 mb-1 border-b border-amber-900/10 pb-1.5 leading-tight">
                  {exclusiveLeaks[activeLeak].title}
                </h4>
                <div className="font-mono text-[7px] text-gray-500 uppercase tracking-widest block mb-4">
                  PROVENANCE: {exclusiveLeaks[activeLeak].source} // DATE: {exclusiveLeaks[activeLeak].date}
                </div>

                <p className="text-xs leading-relaxed text-amber-950/95 font-serif antialiased first-letter:text-2xl first-letter:font-black first-letter:float-left first-letter:mr-1.5 first-letter:text-red-900">
                  {exclusiveLeaks[activeLeak].content}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[9px] text-[#00f0ff] font-bold tracking-widest flex items-center justify-between">
              <span>BROADCAST FREQ DECK</span>
              <div className="flex items-end gap-0.5 h-6">
                {activeFrequencies.slice(0, 16).map((val, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: val * 2.5 }}
                    className="w-1.5 bg-[#00f0ff] rounded-t-sm"
                    style={{ height: `${val * 1.5}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (3 cols): AI Disinformation Verifier */}
          <div className="lg:col-span-3 flex flex-col bg-black/60 border border-white/10 rounded-3xl p-6 shadow-2xl justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                <ShieldAlert className="w-4 h-4 text-[#00f0ff]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">FACT-CHECK MATRIX</h3>
              </div>

              <p className="text-[9.5px] leading-relaxed text-gray-500 mb-6 text-left">
                Verifique cables de desinformación detectando patrones sintéticos o vacíos somatológicos:
              </p>

              {/* Clean Statements with verified indicators */}
              <div className="space-y-4">
                {factCheckStatements.map((stmt) => {
                  const isChecked = checkedStatements[stmt.id];
                  const isChecking = checkingId === stmt.id;

                  return (
                    <div 
                      key={stmt.id} 
                      className={`p-3 rounded-xl border transition-all duration-300 text-left relative ${
                        isChecked === 'APPROVED' 
                          ? 'border-emerald-500/40 bg-emerald-500/5' 
                          : isChecked === 'DEBUNKED'
                            ? 'border-red-500/40 bg-red-500/5'
                            : 'border-white/5 bg-[#0d1319]/25'
                      }`}
                    >
                      <p className="text-[10px] text-gray-300 leading-relaxed font-light mb-2.5">"{stmt.text}"</p>
                      
                      <div className="flex justify-between items-center text-[8px] font-mono">
                        {isChecked ? (
                          <div className={`flex items-center gap-1 font-bold uppercase ${
                            isChecked === 'APPROVED' ? 'text-emerald-400' : 'text-red-400'
                          }`}>
                            {isChecked === 'APPROVED' ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                            {isChecked === 'APPROVED' ? 'VERIDICO' : 'IA DETECTADA'}
                          </div>
                        ) : (
                          <button
                            onClick={() => handleFactCheck(stmt.id, stmt.isTrue)}
                            disabled={checkingId !== null}
                            className="px-2.5 py-1 border border-[#00f0ff]/30 hover:border-[#00f0ff] text-[7.5px] text-[#00f0ff] uppercase tracking-wider hover:bg-[#00f0ff] hover:text-black rounded transition-all font-bold"
                          >
                            {isChecking ? 'CONTRASTANDO...' : 'VERIFICAR RIGOR'}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Sound board Controller (Clean design) */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-[8px] text-gray-500 uppercase tracking-widest block text-left mb-2">BROADCAST SOUNDBOARD CONTROLS</span>
              <div className="grid grid-cols-2 gap-1.5">
                {['FLASH CABLE', 'FEED SYNC', 'TELEX SCAN', 'ON AIR LIVE'].map((pad, idx) => (
                  <button
                    key={idx}
                    onClick={() => triggerSoundpad(idx + 1)}
                    className={`py-2 text-[7.5px] font-black uppercase tracking-wider rounded-lg border transition-all duration-300 ${
                      activePad === idx + 1
                        ? 'bg-[#00f0ff] text-black border-[#00f0ff] scale-95 shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                        : 'bg-[#0e141a] border-white/10 text-gray-400 hover:border-[#00f0ff]/40 hover:text-white'
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
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-red-950/15 via-[#00f0ff]/5 to-cyan-950/15 border border-white/10 p-8 shadow-2xl text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />

          <p className="font-serif italic text-lg sm:text-2xl text-white leading-relaxed mb-4">
            "Los periodistas se han extraviado en el laberinto de una tecnología disparada sin control hacia el futuro."
          </p>
          <span className="font-mono text-xs tracking-widest text-[#00f0ff] uppercase font-bold">— GABRIEL GARCÍA MÁRQUEZ</span>
        </div>

        {/* Lower Official Press Navigation Board */}
        <div className="max-w-5xl mx-auto p-8 rounded-[2rem] bg-[#070b10]/95 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <span className="font-mono text-[8px] text-gray-500 tracking-[0.3em] uppercase block mb-1">MESA DIRECTIVA Y PROTOCOLO DE PRENSA</span>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">CREDENCIALES Y REGLAMENTOS OFICIALES</h4>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Wax seal invite for Conoce a tu mesa */}
            <button 
              onClick={() => setShowMesaModal(true)}
              className="px-6 py-3 border border-white/20 hover:border-[#00f0ff] text-white/80 hover:text-black hover:bg-[#00f0ff] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group font-bold"
            >
              <Users className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Conoce a tu Mesa
            </button>

            {/* Academic Guide link */}
            <a 
              href="https://drive.google.com/file/d/1UNNXOzxPL3bKhF2ZX_-RHBwffv2eyBq0/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#00f0ff] text-black hover:bg-cyan-300 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group font-bold border border-cyan-400/20"
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

      {/* CONOCE A TU MESA MODAL (Press ID Credential Style) */}
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
              className="relative w-full max-w-sm rounded-[2rem] bg-[#070b10] border border-white/20 p-8 text-[#a5e5f3] z-10 shadow-2xl text-center font-mono overflow-hidden"
            >
              {/* Scanline overlay for modal */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

              <button 
                onClick={() => setShowMesaModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Radio className="w-8 h-8 text-[#00f0ff]" />
              </div>
              
              <span className="text-[8px] text-[#00f0ff] tracking-[0.35em] uppercase block mb-1">OFFICIAL PRESS CREDENTIALS</span>
              <h3 className="text-xl font-black text-white uppercase mb-6 border-b border-white/10 pb-3">DIRECCIÓN GENERAL DE PRENSA</h3>

              {/* Holographic ID pass card items */}
              <div className="space-y-6 text-center text-[#c2eff7] leading-relaxed">
                <div className="p-4 bg-[#0d131a]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#00f0ff]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-gray-600 font-bold">SEC_01</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">DIRECTOR GENERAL DE PRENSA</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Gabriel García</h4>
                  <p className="text-[9px] text-[#00f0ff] mt-0.5 uppercase tracking-widest">Coordinador General y Control de Telex</p>
                </div>

                <div className="p-4 bg-[#0d131a]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#00f0ff]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-gray-600 font-bold">SEC_02</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">DIRECTORA ASOCIADA DE BROADCAST</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Elena Fuentes</h4>
                  <p className="text-[9px] text-[#00f0ff] mt-0.5 uppercase tracking-widest">Supervisión Editorial y Fact Checking</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[8px] text-gray-500">
                ICFJ INTERNATIONAL MODEL SECURITY AGENT // VERIFIED PRESS PASS
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, FileText, Download, ShieldAlert, Cpu, Terminal, RefreshCw, ChevronRight, HelpCircle, Users, X, Award, CheckCircle, AlertTriangle } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Icfj() {
  const [activeLeak, setActiveLeak] = useState('leak1');
  const [showMesaModal, setShowMesaModal] = useState(false);
  const [activeFrequencies, setActiveFrequencies] = useState([]);
  
  // Fact check states
  const [checkedStatements, setCheckedStatements] = useState({});
  const [checkingId, setCheckingId] = useState(null);

  const bgVideoRef = useRef(null);

  useEffect(() => {
    // Switch to wisin.mp3 on mount
    audioSystem.switchToIcfj();

    // Create random heights for the pumping music audio wave bars
    const interval = setInterval(() => {
      const freqs = Array.from({ length: 24 }, () => Math.floor(Math.random() * 8) + 2);
      setActiveFrequencies(freqs);
    }, 120);

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

  const exclusiveLeaks = {
    leak1: {
      title: "BOLETÍN 01: EL CASO 3I/ATLAS",
      source: "Filtración NASA / Oficina de Reconocimiento Interestelar",
      content: "Documentos clasificados indican que las anomalías del tercer intruso interestelar (3i/ATLAS) no obedecen a órbitas gravitacionales tradicionales. Comités internos debaten sobre un sistema de autopropulsión alienígena oculto bajo una capa de hielo y regolito. Se exige total hermetismo diplomático en los comunicados de prensa.",
      status: "Filtrado en Tiempo Real"
    },
    leak2: {
      title: "BOLETÍN 02: LA CONEXIÓN VOYNICH",
      source: "Criptografía Avanzada / Archivos Villa Mondragone",
      content: "La interpolación de algoritmos cuánticos revela patrones binarios en las páginas de botánica y astronomía del manuscrito. Espías académicos reportan que la tesis del profesor Newbold podría ser solo la punta del iceberg en una red de comunicación interestelar cifrada en la Edad Media.",
      status: "Desencriptado Exclusivo"
    },
    leak3: {
      title: "BOLETÍN 03: EL PACTO DE LA PLATA (1935)",
      source: "Informes Secretos del Congreso de Americanistas",
      content: "Cartas incautadas revelan que la comisión de Europa Central ejerció coerción económica para silenciar el descubrimiento de fósiles pampeanos de más de 30,000 años de antigüedad. El objetivo: forzar una teoría de Beringia unilineal que avale el darwinismo social vigente.",
      status: "Clasificado de Campaña"
    }
  };

  const factCheckStatements = [
    {
      id: 'stmt1',
      text: "La NASA declaró soberanía interestelar sobre el objeto 3i/ATLAS para proteger tecnología alienígena.",
      isTrue: false,
      explanation: "FALSO. Los comités de la NASA mantienen un debate técnico tenso sobre las anomalías gravitacionales, pero no se ha emitido ninguna declaración oficial de soberanía debido a las implicaciones diplomáticas del tratado del espacio exterior."
    },
    {
      id: 'stmt2',
      text: "Cráneos excavados en los estratos de Miramar presentan datación superior a los 30,000 años desafiando Beringia.",
      isTrue: true,
      explanation: "VERIFICADO. Múltiples hallazgos estratigráficos pampeanos rompen el límite Clovis clásico, aunque agencias biologicistas y comisiones centrales intentan tachar los restos de intrusiones recientes."
    },
    {
      id: 'stmt3',
      text: "El Manuscrito Voynich no contiene errores ni tachaduras porque fue impreso con técnicas modernas de tipografía.",
      isTrue: false,
      explanation: "FALSO. El pergamino ha sido datado científicamente en el siglo XV por radiocarbono. Su falta de correcciones no se debe a tipografía moderna, sino a una precisión de trazado geométrica sin precedentes."
    }
  ];

  return (
    <section id="icfj-section" className="min-h-screen relative bg-[#04070a] text-[#a5e5f3] overflow-x-hidden pt-24 pb-32 font-mono selection:bg-[#06b6d4] selection:text-black">
      
      {/* Background Broadcasting Loop Video */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#030508]">
        <video 
          ref={bgVideoRef}
          src="/york.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-30 transition-opacity duration-1000"
          style={{ filter: 'grayscale(0.3) brightness(0.25) contrast(1.2)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("York video loop failed:", err));
            }
          }}
        />
        {/* Gradients blending borders */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04070a] via-[#04070a]/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.08)_0%,_#04070a_100%)] z-10"></div>
      </div>

      {/* Cyber scanline overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none animate-scanline" />

      {/* Live Breaking News Ticker Tape */}
      <div className="absolute top-16 left-0 right-0 h-8 bg-[#06b6d4]/10 border-y border-[#06b6d4]/20 overflow-hidden flex items-center z-20">
        <div className="flex gap-12 whitespace-nowrap animate-marquee font-bold text-[10px] text-cyan-300 tracking-widest uppercase">
          <span>BREAKING NEWS: NASA 3I/ATLAS EXCEDE LÍMITES ORBITALES ESPERADOS // LEAKED</span>
          <span>★</span>
          <span>CONGRESO AMERICANISTAS 1935 EN CRISIS CRANEOMÉTRICA // INFORME MIRAMAR CLASIFICADO</span>
          <span>★</span>
          <span>VILLA MONDRAGONE EN ALERTA: DESENCRIPTACIÓN EN CURSO DE CÓDICE MS 408</span>
          <span>★</span>
          <span>ICFJ BROADCASTING NET ACTIVE // CORRESPONSALES CONTRASTANDO INFORMACIÓN EN TIEMPO REAL</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl mt-8">
        
        {/* Title Capsule */}
        <div className="max-w-4xl mx-auto mb-16 pt-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[9px] text-[#06b6d4] tracking-[0.45em] uppercase mb-2">Ecosystema de Información Global</span>
            <h1 className="font-maison text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#06b6d4] drop-shadow-md">
              CENTRO DE PERIODISTAS
            </h1>
            <p className="font-mono text-gray-500 tracking-[0.3em] uppercase text-[9px] border-b border-[#0f2330] pb-3 mb-6">
              ICFJ PRENSA • COBERTURA DE ALTO IMPACTO
            </p>
          </motion.div>
        </div>

        {/* -------------------- DYNAMIC DIGITAL CONTROL CENTER -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT PANEL (7 cols): Telex Exclusive Leaks */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#070b10]/95 border border-[#06b6d4]/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Tech backdrop circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#06b6d4]/10 pb-3">
                <Radio className="w-5 h-5 text-[#06b6d4] animate-pulse" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">TELEX Y FILTRACIONES EXCLUSIVAS (LEAKS)</h3>
              </div>

              {/* Leaks selector buttons */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {Object.keys(exclusiveLeaks).map((leakId) => (
                  <button
                    key={leakId}
                    onClick={() => setActiveLeak(leakId)}
                    className={`px-4 py-2.5 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeLeak === leakId
                        ? 'bg-[#06b6d4] text-black border-[#06b6d4] shadow-lg'
                        : 'bg-[#0d131a] border-[#06b6d4]/20 text-[#06b6d4]/70 hover:border-[#06b6d4]/40 hover:text-white'
                    }`}
                  >
                    {leakId === 'leak1' ? 'Boletín NASA' : leakId === 'leak2' ? 'Folio Voynich' : 'Pacto 1935'}
                  </button>
                ))}
              </div>

              {/* Dynamic Monitor screen leak card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeak}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0b1016] border border-[#06b6d4]/10 rounded-2xl p-6 min-h-[220px] text-left relative"
                >
                  {/* Glowing green telex grid */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-2 py-0.5 rounded text-[8px] text-[#06b6d4] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-ping" />
                    {exclusiveLeaks[activeLeak].status}
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 uppercase tracking-wider">
                    {exclusiveLeaks[activeLeak].title}
                  </h4>
                  <span className="text-[8px] text-cyan-400 font-bold tracking-widest block uppercase mb-4">
                    ORIGEN: {exclusiveLeaks[activeLeak].source}
                  </span>

                  <div className="space-y-4 text-xs leading-relaxed text-[#c2eff7]/80">
                    <p className="border-l-2 border-[#06b6d4]/40 pl-3 leading-relaxed font-light">
                      {exclusiveLeaks[activeLeak].content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pumping Wisin frequency audio wave bars */}
            <div className="mt-8 pt-4 border-t border-[#06b6d4]/10 flex flex-col gap-3">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest text-left">PULSACIONES INTRO DE CORRESPONSAL [WISIN.MP3]</span>
              <div className="flex items-end gap-1.5 justify-start h-8 px-1">
                {activeFrequencies.map((val, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: val * 3.5 }}
                    transition={{ ease: "easeOut" }}
                    className="w-2.5 bg-[#06b6d4] rounded-t-sm shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                    style={{ height: `${val * 2}px` }}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL (5 cols): Fact-Checking Simulator */}
          <div className="lg:col-span-5 flex flex-col bg-[#070b10]/95 border border-[#06b6d4]/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#06b6d4]/10 pb-3">
                <ShieldAlert className="w-5 h-5 text-[#06b6d4]" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">VERIFICADOR DE RIGOR Y DESINFORMACIÓN</h3>
              </div>

              <p className="text-[10px] leading-relaxed text-gray-400 mb-6 text-left">
                Verifique los cables noticiosos en tiempo real para separar el sensacionalismo o la manipulación de la veracidad histórica:
              </p>

              {/* Statement List */}
              <div className="space-y-4">
                {factCheckStatements.map((stmt) => (
                  <div key={stmt.id} className="p-4 rounded-2xl bg-[#0b1016] border border-[#06b6d4]/10 text-left">
                    <p className="text-xs text-[#c2eff7]/90 leading-relaxed font-light mb-3">"{stmt.text}"</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[8px] text-gray-500 uppercase">Estado: Pendiente de Contrastar</span>
                      
                      {checkedStatements[stmt.id] ? (
                        <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${
                          checkedStatements[stmt.id] === 'APPROVED' ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {checkedStatements[stmt.id] === 'APPROVED' ? (
                            <>
                              <CheckCircle className="w-3.5 h-3.5" /> VERIFICADO
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-3.5 h-3.5 animate-bounce" /> FALSO / IA
                            </>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleFactCheck(stmt.id, stmt.isTrue)}
                          disabled={checkingId !== null}
                          className="px-3 py-1.5 rounded-lg border border-[#06b6d4]/30 hover:border-[#06b6d4] text-[9px] text-[#06b6d4] uppercase tracking-widest hover:bg-[#06b6d4] hover:text-black transition-all"
                        >
                          {checkingId === stmt.id ? 'VERIFICANDO...' : 'CONTRASTAR CABLE'}
                        </button>
                      )}
                    </div>

                    {/* Explanatory card shows up once checked */}
                    <AnimatePresence>
                      {checkedStatements[stmt.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-[#06b6d4]/10 text-[10px] text-gray-400 leading-relaxed"
                        >
                          {stmt.explanation}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#06b6d4]/10 text-[9px] text-center text-gray-500">
              SISTEMA DE VERIFICACIÓN DIGITAL CON SELLO DE INTEGRIDAD ICFJ
            </div>
          </div>

        </div>

        {/* -------------------- DYNAMIC NEON MÁRQUEZ QUOTE WALL -------------------- */}
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-red-950/20 via-[#06b6d4]/5 to-cyan-950/20 border border-[#06b6d4]/30 p-8 shadow-2xl text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#06b6d4]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#06b6d4]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#06b6d4]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#06b6d4]" />

          <p className="font-serif italic text-lg sm:text-2xl text-white leading-relaxed mb-4">
            "Los periodistas se han extraviado en el laberinto de una tecnología disparada sin control hacia el futuro."
          </p>
          <span className="font-mono text-xs tracking-widest text-[#06b6d4] uppercase font-bold">— GABRIEL GARCÍA MÁRQUEZ</span>
        </div>

        {/* Lower Official Documents / Diplomas */}
        <div className="max-w-5xl mx-auto p-8 rounded-[2rem] bg-[#070b10]/90 border border-[#06b6d4]/20 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <span className="font-mono text-[8px] text-[#06b6d4] tracking-[0.3em] uppercase block mb-1">MESA DIRECTIVA Y PROTOCOLO DE PRENSA</span>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">CREDENCIALES Y REGLAMENTOS OFICIALES</h4>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Wax seal invite for Conoce a tu mesa */}
            <button 
              onClick={() => setShowMesaModal(true)}
              className="px-6 py-3 border border-[#06b6d4]/40 hover:border-[#06b6d4] text-[#06b6d4] hover:text-black hover:bg-[#06b6d4] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group"
            >
              <Users className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Conoce a tu Mesa
            </button>

            {/* Academic Guide link */}
            <a 
              href="https://drive.google.com/file/d/1UNNXOzxPL3bKhF2ZX_-RHBwffv2eyBq0/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#06b6d4] text-black hover:bg-cyan-400 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group font-bold border border-cyan-400/20"
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
              className="relative w-full max-w-sm rounded-[2rem] bg-[#070b10] border-2 border-[#06b6d4] p-8 text-[#a5e5f3] z-10 shadow-2xl text-center font-mono overflow-hidden"
            >
              {/* Scanline overlay for modal */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

              <button 
                onClick={() => setShowMesaModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Radio className="w-8 h-8 text-[#06b6d4]" />
              </div>
              
              <span className="text-[8px] text-[#06b6d4] tracking-[0.35em] uppercase block mb-1">OFFICIAL PRESS CREDENTIALS</span>
              <h3 className="text-xl font-black text-white uppercase mb-6 border-b border-[#06b6d4]/20 pb-3">DIRECCIÓN GENERAL DE PRENSA</h3>

              {/* Holographic Delegate Badge layout */}
              <div className="space-y-6 text-center text-[#c2eff7] leading-relaxed">
                <div className="p-3 bg-[#0d131a] rounded-xl border border-[#06b6d4]/15">
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">DIRECTOR PRINCIPAL DE PRENSA</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Gabriel García</h4>
                  <p className="text-[9px] text-[#06b6d4] mt-0.5 uppercase tracking-widest">Coordinador Editorial y Telex Leaks</p>
                </div>

                <div className="p-3 bg-[#0d131a] rounded-xl border border-[#06b6d4]/15">
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">DIRECTORA ASOCIADA DE BROADCAST</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Elena Fuentes</h4>
                  <p className="text-[9px] text-[#06b6d4] mt-0.5 uppercase tracking-widest">Supervisión de Rigor y Fact Checking</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#06b6d4]/10 text-[8px] text-gray-500">
                ICFJ INTERNATIONAL MODEL SECURITY AGENT // VERIFIED PRESS PASS
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

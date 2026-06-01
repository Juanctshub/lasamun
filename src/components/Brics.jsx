import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  Coins, 
  Scale, 
  FileText, 
  Download, 
  Users, 
  X, 
  Award, 
  CheckCircle, 
  TrendingUp, 
  AlertTriangle, 
  Globe, 
  Activity, 
  Settings, 
  ChevronRight, 
  BookOpen, 
  Fingerprint, 
  ShieldCheck, 
  FileCheck 
} from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Brics() {
  const [activeTab, setActiveTab] = useState('topic');
  const [activeNarrativeTab, setActiveNarrativeTab] = useState('intro');
  const [selectedCountry, setSelectedCountry] = useState('china');
  const [showMesaModal, setShowMesaModal] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);

  const bgVideoRef = useRef(null);

  useEffect(() => {
    audioSystem.switchToBrics();

    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(err => {
        console.warn("BRICS background video autoplay blocked or failed:", err);
      });
    }
  }, []);

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    const normalized = passcode.trim().toUpperCase();
    if (normalized === 'BRICS' || normalized === 'GOLD' || normalized === 'PAY') {
      setError(false);
      setShowPasscode(false);
      setAccessGranted(true);

      setTimeout(() => {
        setAccessGranted(false);
        setEasterEggActive(true);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const countries = {
    china: {
      name: "República Popular China",
      flag: "🇨🇳",
      role: "Liderazgo Industrial y Financiero",
      stance: "Promueve la internacionalización del Renminbi y la canalización de inversiones masivas en infraestructura crítica mediante el Nuevo Banco de Desarrollo (NDB). Apoya activamente la desdolarización global.",
      focus: "Financiamiento soberano y estabilidad logística.",
      capital: "Pekín",
      color: "border-red-500/30 text-red-400"
    },
    india: {
      name: "República de la India",
      flag: "🇮🇳",
      role: "Equilibrio Multipolar",
      stance: "Fomenta el comercio bilateral en monedas locales sin adoptar una postura confrontativa radical hacia el Norte Global. Actúa como puente entre Occidente y el Sur Global.",
      focus: "Sistemas de pago digital soberanos y soberanía tecnológica.",
      capital: "Nueva Delhi",
      color: "border-orange-500/30 text-orange-400"
    },
    russia: {
      name: "Federación de Rusia",
      flag: "🇷🇺",
      role: "Soberanía Energética y Tecnológica",
      stance: "Impulsa sistemas de mensajería financiera alternativos (BRICS Pay) y liquidaciones directas de hidrocarburos respaldados en materias primas para evadir sanciones unilaterales.",
      focus: "Independencia financiera e infraestructura de pagos paralela.",
      capital: "Moscú",
      color: "border-blue-500/30 text-blue-400"
    },
    brazil: {
      name: "República Federativa del Brasil",
      flag: "🇧🇷",
      role: "Lanzamiento de Canastas Multilaterales",
      stance: "Propone la creación de un activo de reserva común (la canasta R5) y presiona por la reforma democrática del FMI y el Banco Mundial.",
      focus: "Desarrollo agrícola sostenible y soberanía alimentaria.",
      capital: "Brasilia",
      color: "border-green-500/30 text-green-400"
    },
    southafrica: {
      name: "República de Sudáfrica",
      flag: "🇿🇦",
      role: "Conectividad Africana",
      stance: "Aboga por la inclusión del continente africano en las cadenas globales de valor de minerales estratégicos (platino, manganeso) y el financiamiento equitativo.",
      focus: "Integración del Área de Libre Comercio Continental Africana.",
      capital: "Pretoria",
      color: "border-yellow-600/30 text-yellow-500"
    },
    saudiarabia: {
      name: "Reino de Arabia Saudita",
      flag: "🇸🇦",
      role: "Soberanía de Recursos Petrolíferos",
      stance: "Explora transacciones energéticas multi-moneda (incluyendo yuanes y rupias) para diversificar sus reservas nacionales e insertarse en los fondos mundiales de inversión.",
      focus: "Transición energética global y flujos de capital soberano.",
      capital: "Riad",
      color: "border-emerald-600/30 text-emerald-400"
    },
    egypt: {
      name: "República Árabe de Egipto",
      flag: "🇪🇬",
      role: "Puente Comercial Estratégico",
      stance: "Busca mitigar la escasez de divisas mediante liquidaciones multilaterales de importaciones clave (trigo) a través de acuerdos de compensación bilaterales del bloque.",
      focus: "Seguridad alimentaria e integración logística del Canal de Suez.",
      capital: "El Cairo",
      color: "border-amber-700/30 text-amber-600"
    },
    ethiopia: {
      name: "República Democrática Federal de Etiopía",
      flag: "🇪🇹",
      role: "Desarrollo del Cuerno de África",
      stance: "Enfatiza el derecho de las naciones en desarrollo al aprovechamiento hidroeléctrico y energético (Gran Presa del Renacimiento Etíope) con respaldo crediticio del NDB.",
      focus: "Independencia industrial y soberanía hídrica nacional.",
      capital: "Adís Abeba",
      color: "border-[#d4af37]/30 text-[#d4af37]"
    },
    iran: {
      name: "República Islámica de Irán",
      flag: "🇮🇷",
      role: "Corredor Logístico del Golfo",
      stance: "Alinea sus redes de transporte logístico (Corredor Norte-Sur) con las potencias del bloque para romper bloqueos comerciales tradicionales occidentales.",
      focus: "Resiliencia económica y exportación de materias primas críticas.",
      capital: "Teherán",
      color: "border-teal-500/30 text-teal-400"
    },
    uae: {
      name: "Emiratos Árabes Unidos",
      flag: "🇦🇪",
      role: "Financiamiento Global de Vanguardia",
      stance: "Aporta liquidez de capital a través de fondos soberanos de alta capacidad de inversión, liderando proyectos conjuntos de tecnología y finanzas verdes del Sur Global.",
      focus: "Moneda de liquidación complementaria y transporte marítimo.",
      capital: "Abu Dabi",
      color: "border-cyan-500/30 text-cyan-400"
    }
  };

  return (
    <section id="brics-section" className="min-h-screen relative bg-[#040302] text-[#d4af37] overflow-x-hidden pt-28 pb-32 font-mono selection:bg-[#d4af37] selection:text-black">
      
      {/* BACKGROUND VIDEO LAYER - HIGH CONTRAST & CLEAR VISIBILITY */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#030202]">
        <video 
          ref={bgVideoRef}
          src="/ri.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-[0.90] transition-opacity duration-1000"
          style={{ filter: 'brightness(0.35) contrast(1.3) saturate(0.85)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("RI video loop failed:", err));
            }
          }}
        />
        {/* Sleek luxury gradient overlays */}
        <div className="absolute inset-0 bg-[#040302]/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.035)_0%,_#040302_95%)] z-10" />
      </div>

      {/* Ornate Copper Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      {/* Dynamic Moving Sovereign Ticker */}
      <div className="absolute top-16 left-0 right-0 h-8 bg-[#090807]/90 border-y border-[#d4af37]/20 overflow-hidden flex items-center z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 38 }}
          className="flex gap-16 whitespace-nowrap font-bold text-[8.5px] text-[#d4af37] tracking-[0.4em] uppercase w-max pr-16"
        >
          {Array.from({ length: 4 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span>CONSOLIDACIÓN BRICS+ 2026</span>
              <span>★</span>
              <span>R5 FINANCIAL BASKET ACTIVATED</span>
              <span>★</span>
              <span>SUR GLOBAL UNIDO MULTILATERAL</span>
              <span>★</span>
              <span>MERCADOS EMERGENTES EN RECONFIGURACIÓN</span>
              <span>★</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl mt-10">
        
        {/* ==================== CINETMATIC HERO HEADER ==================== */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center mb-8 border-b border-[#d4af37]/15 pb-8 cursor-pointer"
            onClick={() => setShowPasscode(true)}
          >
            <div className="relative group">
              {/* Gold halo backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 to-amber-500/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="/brics_logo.png" 
                alt="BRICS+ Logo" 
                className="relative w-full max-w-xl sm:max-w-2xl h-28 sm:h-32 object-contain filter drop-shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] tracking-[0.5em] text-white font-bold uppercase mb-2"
          >
            CUMBRE MULTILATERAL DEL SUR GLOBAL
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-5xl font-serif italic font-black text-white leading-tight max-w-4xl"
          >
            Consolidación de los BRICS+
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm text-gray-400 mt-4 tracking-widest max-w-3xl font-mono uppercase"
          >
            Fortalecimiento de la Cooperación del Sur Global para un Desarrollo Global Justo
          </motion.p>
        </div>

        {/* ==================== PREMIUM CATEGORY NAVIGATOR (TABS) ==================== */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap border-b border-[#d4af37]/15 pb-6">
          {[
            { id: 'topic', label: '📚 El Tópico', desc: 'Introducción y Ejes de Debate' },
            { id: 'mesa', label: '🤝 Mesa Directiva', desc: 'Conoce a tu Mesa Directiva' },
            { id: 'delegations', label: '🌍 Delegaciones', desc: 'Países y Posicionamientos' },
            { id: 'docs', label: '📁 Documentos', desc: 'Guía y Reglamentos' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 rounded-2xl border transition-all duration-500 font-mono text-xs uppercase tracking-widest text-left min-w-[160px] flex flex-col justify-between group ${
                activeTab === tab.id
                  ? 'bg-[#d4af37]/10 border-[#d4af37] text-white shadow-[0_0_20px_rgba(212,175,55,0.12)]'
                  : 'bg-[#0c0a08]/50 border-white/5 text-gray-400 hover:border-[#d4af37]/35 hover:text-white'
              }`}
            >
              <span className="font-black text-sm block mb-0.5">{tab.label}</span>
              <span className="text-[7.5px] text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-wider">{tab.desc}</span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabIndicator" 
                  className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#d4af37] rotate-45 border-t border-l border-[#d4af37] hidden sm:block"
                />
              )}
            </button>
          ))}
        </div>

        {/* ==================== CORE CONTENT AREA ==================== */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: EL TÓPICO */}
            {activeTab === 'topic' && (
              <motion.div
                key="topic-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left side: Premium Book Layout for topic texts */}
                <div className="lg:col-span-8 bg-[#0b0a09]/95 border-2 border-[#d4af37]/25 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[2.2rem] pointer-events-none" />
                  
                  <div>
                    {/* Inner narrative tabs */}
                    <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
                      {[
                        { id: 'intro', label: 'Consolidación' },
                        { id: 'frictions', label: 'Fricciones Geopolíticas' },
                        { id: 'diversity', label: 'Diversidad y Legitimidad' }
                      ].map((subTab) => (
                        <button
                          key={subTab.id}
                          onClick={() => setActiveNarrativeTab(subTab.id)}
                          className={`px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-widest border transition-all ${
                            activeNarrativeTab === subTab.id
                              ? 'bg-[#d4af37] text-black border-[#d4af37] font-black'
                              : 'bg-transparent border-white/5 text-gray-400 hover:border-[#d4af37]/30 hover:text-white'
                          }`}
                        >
                          {subTab.label}
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#fcfaf5] border border-gray-300 rounded-[2rem] p-6 sm:p-8 text-[#261f17] font-serif text-left shadow-2xl relative overflow-hidden">
                      <div className="absolute top-4 right-4 border border-amber-900/30 text-amber-900/40 px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-widest transform rotate-12 uppercase">
                        NDB Classified
                      </div>

                      <AnimatePresence mode="wait">
                        {activeNarrativeTab === 'intro' && (
                          <motion.div
                            key="intro-t"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <h4 className="text-xl sm:text-2xl italic font-black text-amber-950 leading-tight">
                              El Desafío Definitivo al Orden del Norte Global
                            </h4>
                            <p className="text-sm sm:text-base leading-relaxed text-amber-950/95 font-serif antialiased first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-amber-900">
                              El ascenso de los BRICS+ se presenta como el desafío definitivo al orden económico del Norte Global. Con una fuerza que ya representa el 30% del PIB mundial y supera el crecimiento anual del G7, el bloque busca consolidar un multilateralismo inclusivo que desplace la hegemonía del dólar. Sin embargo, detrás de las cifras de expansión, emergen interrogantes que ponen en duda la cohesión real de esta alianza.
                            </p>
                          </motion.div>
                        )}

                        {activeNarrativeTab === 'frictions' && (
                          <motion.div
                            key="frictions-t"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <h4 className="text-xl sm:text-2xl italic font-black text-amber-950 leading-tight">
                              Fricciones Geopolíticas e Informalidad Sistémica
                            </h4>
                            <p className="text-sm sm:text-base leading-relaxed text-amber-950/95 font-serif antialiased first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-amber-900">
                              Las tensiones geopolíticas entre China e India y las disputas históricas entre nuevos miembros como Egipto y Etiopía representan un riesgo latente para la estabilidad y el consenso del bloque; del mismo modo, a pesar de los esfuerzos por sistemas como BRICS Pay, el dólar aún domina el 60% del comercio exterior. Los BRICS+ funcionan bajo una cooperación intergubernamental que a menudo roza la informalidad.
                            </p>
                          </motion.div>
                        )}

                        {activeNarrativeTab === 'diversity' && (
                          <motion.div
                            key="diversity-t"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <h4 className="text-xl sm:text-2xl italic font-black text-amber-950 leading-tight">
                              El Reto de la Diversidad y la Legitimidad
                            </h4>
                            <p className="text-sm sm:text-base leading-relaxed text-amber-950/95 font-serif antialiased first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-amber-900">
                              La expansión de los BRICS va más allá de un aumento númerico en sus miembros, es un reto para la legitimidad del bloque: La pregunta ya no es si los BRICS pueden crecer, sino si pueden sobrevivir a su propia diversidad sin paralizarse o fragmentarse ante las presiones de Occidente. ¿Seguirán siendo un bloque de asistencia económica o se consolidarán como una alianza antiimperialista?
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="mt-8 text-[9px] text-[#d4af37]/70 font-bold tracking-widest flex items-center justify-between uppercase">
                    <span>Multilateral Diplomatic Dispatch</span>
                    <div className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    </div>
                  </div>
                </div>

                {/* Right side: Key axes of debate list */}
                <div className="lg:col-span-4 bg-[#0b0a09]/90 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
                      <BookOpen className="w-4 h-4 text-[#d4af37]" />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-white">Ejes de Discusión</h3>
                    </div>

                    <div className="space-y-4 text-left">
                      {[
                        { title: "Desdolarización Económica", text: "Viabilidad y diseño del mecanismo financiero BRICS Pay y el rol del oro soberano." },
                        { title: "Consenso Multilateral", text: "Cómo articular la toma de decisiones unánimes entre potencias regionales rivales (China vs India)." },
                        { title: "Infraestructura Física", text: "Incentivo a canales logísticos intercontinentales libres del control institucional del Atlántico Norte." },
                        { title: "Seguridad y Soberanía", text: "Cooperación energética, tecnológica y alimentaria como blindaje soberano colectivo." }
                      ].map((item, idx) => (
                        <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#d4af37]/20 transition-all duration-300">
                          <span className="text-[9px] text-[#d4af37] font-bold block mb-1">0{idx + 1}. {item.title}</span>
                          <p className="text-[10px] text-gray-400 leading-relaxed font-light">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 border border-[#d4af37]/15 bg-[#d4af37]/5 rounded-2xl flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span className="text-[8px] text-gray-400 uppercase tracking-widest leading-normal">
                      Alineación geopolítica y fricciones internas críticas en debate activo.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: MESA DIRECTIVA */}
            {activeTab === 'mesa' && (
              <motion.div
                key="mesa-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-10">
                  <span className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase block mb-1">CONOCE A LA DIRECCIÓN DE SESIÓN</span>
                  <h3 className="text-xl sm:text-2xl font-serif italic text-white font-bold">Mesa Directiva Plenaria</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  
                  {/* President Card */}
                  <div className="relative group rounded-[2.5rem] bg-[#0c0a08]/90 border border-[#d4af37]/35 p-8 text-center overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500">
                    <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[2.2rem] pointer-events-none" />
                    <div className="absolute top-3 right-3 p-1 text-[7px] text-[#d4af37]/60 font-bold border border-[#d4af37]/20 rounded bg-black/60 tracking-widest">SEC_01</div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-[#d4af37]/70 transition-colors duration-500 shadow-inner">
                        <Fingerprint className="w-12 h-12 text-[#d4af37] animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent pointer-events-none" />
                      </div>

                      <span className="text-[9px] text-[#d4af37] tracking-[0.3em] uppercase block mb-1 font-bold">PRESIDENTE DE LA PLENARIA</span>
                      <h4 className="text-2xl font-bold text-white tracking-wide font-serif mb-2">Christian La Cruz</h4>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-4">Acreditado Oficial del Sur Global</span>
                      
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent my-4" />
                      
                      <p className="text-xs text-gray-400 italic leading-relaxed font-serif px-2">
                        "Consolidar la cooperación transfronteriza y un balance multipolar exige un diálogo riguroso, pragmatismo técnico y el máximo compromiso soberano de cada delegación."
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-[8px] text-[#d4af37]/60 font-mono tracking-widest uppercase">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>CUMBRE BRICS+ VERIFIED SIGNATORY</span>
                    </div>
                  </div>

                  {/* Vice-President Card */}
                  <div className="relative group rounded-[2.5rem] bg-[#0c0a08]/90 border border-[#d4af37]/35 p-8 text-center overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500">
                    <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[2.2rem] pointer-events-none" />
                    <div className="absolute top-3 right-3 p-1 text-[7px] text-[#d4af37]/60 font-bold border border-[#d4af37]/20 rounded bg-black/60 tracking-widest">SEC_02</div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-[#d4af37]/70 transition-colors duration-500 shadow-inner">
                        <FileCheck className="w-12 h-12 text-[#d4af37] animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent pointer-events-none" />
                      </div>

                      <span className="text-[9px] text-[#d4af37] tracking-[0.3em] uppercase block mb-1 font-bold">VICEPRESIDENTE DE LA PLENARIA</span>
                      <h4 className="text-2xl font-bold text-white tracking-wide font-serif mb-2">Joel Rodriguez</h4>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-4">Acreditado Oficial del Sur Global</span>
                      
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent my-4" />
                      
                      <p className="text-xs text-gray-400 italic leading-relaxed font-serif px-2">
                        "La soberanía financiera y el desarrollo equitativo dependen del diseño de infraestructuras de pagos y liquidaciones justas y transparentes para todos."
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-[8px] text-[#d4af37]/60 font-mono tracking-widest uppercase">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>CUMBRE BRICS+ VERIFIED SIGNATORY</span>
                    </div>
                  </div>

                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowMesaModal(true)}
                    className="px-8 py-3.5 bg-gradient-to-r from-[#d4af37]/80 to-[#d4af37] text-black font-black uppercase text-xs rounded-xl tracking-widest hover:scale-[1.03] transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] border border-[#d4af37]/20"
                  >
                    Ver Credenciales Oficiales de Mesa
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 3: DELEGACIONES */}
            {activeTab === 'delegations' && (
              <motion.div
                key="delegations-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left panel: Delegations Country Selector list */}
                <div className="lg:col-span-4 bg-[#0b0a09]/90 border border-white/5 rounded-[2rem] p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
                    <Globe className="w-4 h-4 text-[#d4af37]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white">Delegaciones Oficiales</h3>
                  </div>

                  <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                    {Object.keys(countries).map((countryKey) => (
                      <button
                        key={countryKey}
                        onClick={() => setSelectedCountry(countryKey)}
                        className={`w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all duration-300 ${
                          selectedCountry === countryKey
                            ? 'bg-[#d4af37]/10 border-[#d4af37] text-white shadow-[0_0_12px_rgba(212,175,55,0.06)]'
                            : 'bg-[#12100e]/40 border-white/5 hover:border-[#d4af37]/20 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-2xl shrink-0">{countries[countryKey].flag}</span>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-bold tracking-widest block uppercase text-white truncate">
                            {countries[countryKey].name.split(' ')[0]}
                          </span>
                          <span className="text-[7.5px] text-gray-500 uppercase tracking-widest truncate block mt-0.5">
                            {countries[countryKey].role}
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${selectedCountry === countryKey ? 'text-[#d4af37] translate-x-0.5' : 'text-gray-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right panel: Detailed Stance Card */}
                <div className="lg:col-span-8 bg-[#0b0a09]/95 border-2 border-[#d4af37]/25 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[2.2rem] pointer-events-none" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedCountry}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-left"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                        <div className="flex items-center gap-4">
                          <span className="text-5xl sm:text-6xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            {countries[selectedCountry].flag}
                          </span>
                          <div>
                            <span className="text-[8px] text-[#d4af37] tracking-[0.4em] uppercase block mb-1">SOVEREIGN REPRESENTATIVE DECK</span>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight font-serif">{countries[selectedCountry].name}</h3>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <span className="text-[8px] border border-white/10 px-2.5 py-1 rounded bg-black/60 text-gray-400 font-bold uppercase tracking-widest font-mono">
                            CAPITAL: {countries[selectedCountry].capital}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                          <div>
                            <span className="text-[7.5px] text-gray-500 font-black tracking-widest uppercase block mb-2">POSICIONAMIENTO MULTILATERAL</span>
                            <p className="text-xs text-gray-300 leading-relaxed font-light font-mono">
                              {countries[selectedCountry].stance}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#d4af37]/5 border border-[#d4af37]/15 flex flex-col justify-between">
                          <div>
                            <span className="text-[7.5px] text-[#d4af37]/70 font-black tracking-widest uppercase block mb-2">ENFOQUE ESTRATÉGICO</span>
                            <p className="text-xs text-white/90 leading-relaxed font-mono">
                              {countries[selectedCountry].focus}
                            </p>
                          </div>
                          <div className="mt-4 pt-2 border-t border-[#d4af37]/10 flex items-center justify-between text-[7px] text-[#d4af37] uppercase tracking-wider font-bold">
                            <span>Soberanía del Bloque</span>
                            <span>Alineado</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="text-[8px] text-gray-600 border-t border-white/5 pt-4 uppercase text-left flex justify-between items-center">
                    <span>BRICS+ OFFICIAL DELEGATE ACCREDITATION SYSTEM</span>
                    <span>ACTIVE</span>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB 4: RECURSOS Y GUÍAS */}
            {activeTab === 'docs' && (
              <motion.div
                key="docs-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-10">
                  <span className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase block mb-1">BIBLIOTECA ACADÉMICA</span>
                  <h3 className="text-xl sm:text-2xl font-serif italic text-white font-bold">Documentación de Fortaleza</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  
                  {/* Academic Guide Card */}
                  <div className="relative group rounded-[2.5rem] bg-[#0c0a08]/95 border-2 border-[#d4af37]/30 p-8 sm:p-10 overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] transition-all duration-500 text-left">
                    <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[2.2rem] pointer-events-none" />
                    
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/35 flex items-center justify-center mb-6 text-[#d4af37]">
                        <BookOpen className="w-7 h-7" />
                      </div>
                      
                      <span className="text-[8px] text-gray-500 uppercase tracking-widest font-mono font-bold block mb-1">CATEDRA ACADÉMICA BRICS+</span>
                      <h4 className="text-xl font-bold font-serif text-white uppercase tracking-tight mb-3">Guía Académica Oficial</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light mb-6 font-mono">
                        Documento oficial que contiene el trasfondo histórico, los marcos jurídicos, el análisis macroeconómico de Fortaleza y las directivas académicas fundamentales de debate.
                      </p>
                    </div>

                    <a 
                      href="https://drive.google.com/file/d/1FL6KVkepPErWBNT9ZODT9QILWBpR6l2v/view?usp=sharing"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#d4af37] text-black hover:bg-white rounded-xl font-mono text-xs uppercase tracking-widest font-black transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(212,175,55,0.25)] border border-[#d4af37]/20"
                    >
                      <Download className="w-4 h-4 group-hover:scale-115 transition-transform" />
                      Descargar Guía Drive
                    </a>
                  </div>

                  {/* Rules Card */}
                  <div className="relative group rounded-[2.5rem] bg-[#0c0a08]/95 border-2 border-[#d4af37]/35 p-8 sm:p-10 overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] transition-all duration-500 text-left">
                    <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[2.2rem] pointer-events-none" />
                    
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/35 flex items-center justify-center mb-6 text-[#d4af37]">
                        <Scale className="w-7 h-7" />
                      </div>
                      
                      <span className="text-[8px] text-gray-500 uppercase tracking-widest font-mono font-bold block mb-1">PROTOCOLO DE REUNIONES</span>
                      <h4 className="text-xl font-bold font-serif text-white uppercase tracking-tight mb-3">Reglamento Interno</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light mb-6 font-mono">
                        Directiva jurídica que rige los tiempos de interpelación, el protocolo formal de alianzas, las enmiendas financieras del NDB y las mociones plenarias.
                      </p>
                    </div>

                    <a 
                      href="https://drive.google.com/file/d/1FL6KVkepPErWBNT9ZODT9QILWBpR6l2v/view?usp=sharing"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 border border-[#d4af37]/35 hover:border-[#d4af37] text-white hover:text-black hover:bg-[#d4af37] rounded-xl font-mono text-xs uppercase tracking-widest font-black transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    >
                      <FileText className="w-4 h-4 group-hover:scale-115 transition-transform" />
                      Acceder a Reglamento
                    </a>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* ==================== VINTAGE PASSCODE EASTER EGG OVERLAYS ==================== */}

      {/* CONOCE A TU MESA MODAL (VIP Gold Pass Style) */}
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
              className="relative w-full max-w-sm rounded-[2rem] bg-[#0d0c0b] border border-[#d4af37]/30 p-8 text-[#ece2d0] z-10 shadow-2xl text-center font-mono overflow-hidden"
            >
              {/* Scanline overlay for modal */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
              <div className="absolute inset-2 border border-[#d4af37]/10 rounded-[1.8rem] pointer-events-none" />

              <button 
                onClick={() => setShowMesaModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/35 flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                <Globe className="w-8 h-8 animate-pulse" />
              </div>
              
              <span className="text-[8px] text-[#d4af37] tracking-[0.35em] uppercase block mb-1">OFFICIAL CUMBRE REPRESENTATIVE PASS</span>
              <h3 className="text-xl font-black text-white uppercase mb-6 border-b border-[#d4af37]/20 pb-3">DIRECCIÓN GENERAL DE BRICS+</h3>

              {/* Holographic ID pass card items */}
              <div className="space-y-6 text-center text-[#ece2d0] leading-relaxed">
                <div className="p-4 bg-[#141210]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#d4af37]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#d4af37] font-bold">SEC_01</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Presidente</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Christian La Cruz</h4>
                  <p className="text-[9px] text-[#d4af37] mt-0.5 uppercase tracking-widest">Diplomacia y Coordinación del Bloque</p>
                </div>

                <div className="p-4 bg-[#141210]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#d4af37]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#d4af37] font-bold">SEC_02</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Vicepresidente</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Joel Rodriguez</h4>
                  <p className="text-[9px] text-[#d4af37] mt-0.5 uppercase tracking-widest">Logística Monetaria y BRICS Pay</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[8px] text-gray-500">
                BRICS+ INTERNATIONAL CUMBRE SECURITY AGENT // VERIFIED GOLD PASS
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Passcode Modal */}
      <AnimatePresence>
        {showPasscode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-md bg-[#0a0a0c] border border-[#d4af37]/20 rounded-2xl p-8 shadow-2xl">
              <button 
                onClick={() => setShowPasscode(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col items-center text-center mb-8">
                <Coins className="w-12 h-12 text-[#d4af37] mb-4" />
                <h2 className="font-mono text-xl text-white uppercase tracking-widest">Reserva Confidencial</h2>
                <p className="text-gray-500 text-sm mt-2">Ingrese la clave de compensación para verificar el respaldo.</p>
                <p className="text-gray-600 text-xs mt-4 italic bg-white/5 py-2 px-4 rounded border border-white/10">
                  PISTA:<br/>El acrónimo del bloque, el activo metal que lo respalda, o su plataforma de pago.
                </p>
              </div>

              <form onSubmit={handlePasscodeSubmit} className="flex flex-col gap-4">
                <motion.input 
                  animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  type="password" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="CLAVE ENCRIPTADA..."
                  className={`w-full bg-black border ${error ? 'border-red-500 text-red-500' : 'border-[#d4af37]/30 text-white'} rounded-xl px-4 py-4 font-mono text-center tracking-widest outline-none focus:border-[#d4af37] transition-colors`}
                  autoFocus
                />
                <button 
                  type="submit"
                  className="w-full bg-[#d4af37] text-black font-mono font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-white transition-all"
                >
                  DESENCRIPTAR
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Access Granted Glitch Screen */}
      <AnimatePresence>
        {accessGranted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#0c0f13] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDE5NywxNjAsODksMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-10" />
            
            <motion.h1 
              animate={{ 
                x: [0, -4, 4, -4, 4, 0],
                opacity: [1, 0.8, 1, 0.5, 1],
                color: ['#ffffff', '#d4af37', '#ffffff']
              }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="font-maison text-4xl md:text-7xl font-black text-white uppercase tracking-tighter text-center z-20"
            >
              SINCRONIZANDO<br/>RESERVA DE COMPENSACIÓN
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Classified Treaty Reveal */}
      <AnimatePresence>
        {easterEggActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10001] bg-[#07090b] flex items-center justify-center p-6"
          >
            {/* Geometric accents */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#d4af37]/30" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#d4af37]/30" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#d4af37]/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#d4af37]/30" />

            <div className="max-w-2xl w-full bg-[#0d1014] border border-[#d4af37]/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left font-mono">
              <button 
                onClick={() => setEasterEggActive(false)}
                className="absolute top-6 right-6 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white p-3 rounded-full transition-all group"
              >
                <X className="w-5 h-5 group-hover:scale-115 transition-transform" />
              </button>

              <div className="flex items-center gap-3 mb-6 border-b border-[#d4af37]/20 pb-4">
                <Award className="w-8 h-8 text-[#d4af37] animate-pulse" />
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none">TRATADO CONFIDENCIAL DE FORTALEZA</h3>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mt-1">SOVEREIGN GOLD LIQUIDITY DIRECTIVE</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-300 leading-relaxed max-h-[300px] overflow-y-auto pr-2 mb-6">
                <p className="font-bold text-[#d4af37] uppercase tracking-wider">SECCIÓN DE SEGURIDAD 12: ELIMINACIÓN DE SWIFT</p>
                <p>
                  1. Las partes contratantes acuerdan de forma unánime e irrevocable que toda liquidación transfronteriza de commodities clave (petróleo crudo, gas licuado, trigo, soja y minerales de tierras raras) se realizará exclusivamente utilizando sistemas de compensación BRICS Pay y activos digitales respaldados en oro físico depositados en el Nuevo Banco de Desarrollo (NDB).
                </p>
                <p>
                  2. La compensación a través de sistemas controlados por el dólar estadounidense queda estrictamente clasificada como un canal secundario sujeto a aranceles de contingencia en caso de que existan presiones ideológicas de Occidente.
                </p>
                <p>
                  3. Las reservas de divisas nacionales se diversificarán gradualmente para igualar el coeficiente de peso del oro de Fortaleza, garantizando la paridad inalterable de los balances soberanos de cada miembro firmante.
                </p>
              </div>

              <button 
                onClick={() => setEasterEggActive(false)}
                className="w-full bg-[#d4af37] hover:bg-white text-black font-bold text-xs uppercase py-3 rounded-xl transition-all"
              >
                CERRAR TRATADO CLASIFICADO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

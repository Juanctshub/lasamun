import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Coins, Scale, FileText, Download, Users, X, Award, CheckCircle, TrendingUp, AlertOctagon, HelpCircle, Activity, Globe, DollarSign, PlusCircle } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Brics() {
  const [activeTab, setActiveTab] = useState('expansion');
  const [showMesaModal, setShowMesaModal] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);

  // Geopolitical alignment selections
  const [selectedPair, setSelectedPair] = useState('china-india');

  // BRICS Pay transaction history state
  const [transactions, setTransactions] = useState([
    { id: 'TX-9041', from: 'Brazil (BRL)', to: 'Russia (RUB)', amount: '12,400,000', commodity: 'Soybeans', status: 'VALIDADO' },
    { id: 'TX-9042', from: 'China (CNY)', to: 'Saudi Arabia (SAR)', amount: '85,000,000', commodity: 'Crude Oil', status: 'VALIDADO' },
    { id: 'TX-9043', from: 'India (INR)', to: 'South Africa (ZAR)', amount: '4,200,000', commodity: 'Industrial Machinery', status: 'VALIDADO' }
  ]);
  const [customAmount, setCustomAmount] = useState('');
  const [customCommodity, setCustomCommodity] = useState('Wheat');
  const [customFrom, setCustomFrom] = useState('China (CNY)');
  const [customTo, setCustomTo] = useState('Egypt (EGP)');

  // Fluctuating financial indices
  const [dollarShare, setDollarShare] = useState(58.45);
  const [goldOunce, setGoldOunce] = useState(2424.80);
  const [bricsIndex, setBricsIndex] = useState(104.22);

  const bgVideoRef = useRef(null);

  useEffect(() => {
    // Switch to brics.mp3 on mount
    audioSystem.switchToBrics();

    // Explicitly play video on mount
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(err => {
        console.warn("BRICS background video autoplay blocked or failed:", err);
      });
    }

    // Flicker rates interval
    const interval = setInterval(() => {
      setDollarShare((prev) => +(prev + (Math.random() * 0.08 - 0.045)).toFixed(2));
      setGoldOunce((prev) => +(prev + (Math.random() * 4.0 - 1.8)).toFixed(2));
      setBricsIndex((prev) => +(prev + (Math.random() * 0.12 - 0.05)).toFixed(2));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleBricsPaySubmit = (e) => {
    e.preventDefault();
    if (!customAmount.trim()) return;

    const newTx = {
      id: `TX-${Math.floor(Math.random() * 9000) + 1000}`,
      from: customFrom,
      to: customTo,
      amount: parseFloat(customAmount).toLocaleString(),
      commodity: customCommodity,
      status: 'VALIDADO'
    };

    setTransactions((prev) => [newTx, ...prev]);
    setCustomAmount('');
  };

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

  const geopoliticalBriefings = {
    'china-india': {
      title: "Delhi ↔ Beijing: Rivalidad del Dragón y el Elefante",
      alignment: 42,
      friction: "CRÍTICA",
      color: "from-amber-600 to-red-600",
      content: "Las tensiones fronterizas en el Himalaya (línea LAC) y la competencia por la influencia comercial en el Océano Índico representan la brecha de confianza más profunda dentro del bloque. A pesar de los discursos de cooperación en foros internacionales, ambas potencias nucleares mantienen contingentes militares listos y compiten por el liderazgo industrial de los mercados emergentes."
    },
    'egypt-ethiopia': {
      title: "Cairo ↔ Addis Ababa: Crisis Hidrológica del Nilo",
      alignment: 55,
      friction: "ELEVADA",
      color: "from-blue-600 to-amber-700",
      content: "La gran presa del Renacimiento Etíope (GERD) en el Nilo Azul sigue siendo una disputa existencial. Egipto percibe el control del flujo del agua como una amenaza directa a su seguridad nacional, mientras que Etiopía lo defiende como su motor clave de soberanía energética. La integración de ambos en el bloque busca obligar a un arbitraje pacífico alternativo a Occidente."
    },
    'russia-brazil': {
      title: "Brasilia ↔ Moscow: Respaldo Comercial y Commodities",
      alignment: 85,
      friction: "ESTABLE",
      color: "from-emerald-600 to-blue-500",
      content: "Una de las relaciones más armoniosas y estratégicas. Brasil, gigante agropecuario, depende profundamente de los fertilizantes nitrogenados rusos para sostener sus récords de exportación de soja y carne. A cambio, Moscú encuentra en Brasil un aliado geopolítico neutral clave que rechaza las sanciones unilaterales y promueve firmemente sistemas alternativos al dólar."
    }
  };

  return (
    <section id="brics-section" className="min-h-screen relative bg-[#040608] text-[#c5a059] overflow-x-hidden pt-28 pb-32 font-mono selection:bg-[#c5a059] selection:text-black">
      
      {/* High-Contrast Clear Background Video Layer */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#030405]">
        <video 
          ref={bgVideoRef}
          src="/ri.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-[0.80] transition-opacity duration-1000"
          style={{ filter: 'brightness(0.50) contrast(1.20) saturate(0.95)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("RI video loop failed:", err));
            }
          }}
        />
        {/* Sleek dark gradient overlays */}
        <div className="absolute inset-0 bg-[#040608]/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.025)_0%,_#040608_95%)] z-10" />
      </div>

      {/* Grid overlay for console style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Live Ticker Bar */}
      <div className="absolute top-16 left-0 right-0 h-8 bg-black/90 border-y border-[#c5a059]/20 overflow-hidden flex items-center z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex gap-16 whitespace-nowrap font-bold text-[8.5px] text-[#c5a059] tracking-[0.35em] uppercase w-max pr-16"
        >
          {Array.from({ length: 4 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span>CONSOLIDACIÓN BRICS+ 2026</span>
              <span>★</span>
              <span>DE-DOLLARIZATION INDEX: CNY/RUB SETTLEMENT ACTIVE</span>
              <span>★</span>
              <span>SOVEREIGN COMMODITIES LEDGER CONNECTED</span>
              <span>★</span>
              <span>ALERT: RESERVE WEIGHT SHIFTS DETECTED</span>
              <span>★</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl mt-6">
        
        {/* Sovereign Header */}
        <div className="max-w-4xl mx-auto mb-16 pt-6 text-center border-b border-[#c5a059]/15 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div 
              className="w-24 h-24 mb-4 cursor-pointer relative group flex items-center justify-center"
              onClick={() => setShowPasscode(true)}
              title="Acceso al expediente de reservas"
            >
              <div className="absolute inset-0 bg-[#c5a059]/5 rounded-full blur-xl group-hover:bg-[#c5a059]/20 transition-all" />
              <img 
                src="/brics_logo.png" 
                alt="BRICS Logo" 
                className="w-20 h-20 relative z-10 transition-transform group-hover:scale-105 duration-500 filter drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]" 
              />
            </div>
            
            <span className="text-[10px] tracking-[0.45em] text-[#c5a059] uppercase mb-2 block font-bold">MULTILATERAL GEOPOLITICAL DECK</span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-1 tracking-tight text-white leading-none">
              BRICS+ SUMMIT 2026
            </h1>
            <span className="text-[9px] text-gray-500 tracking-[0.3em] uppercase block mt-1">
              COOPERATION FOR A JUST GLOBAL DEVELOPMENT
            </span>
          </motion.div>
        </div>

        {/* Live Index Exchange Tracker Board */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          
          <div className="p-4 border border-[#c5a059]/15 rounded-2xl bg-black/80 backdrop-blur-md text-left flex flex-col justify-between min-h-[90px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-800/40" />
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">USD GLOBAL COMMERCE SHARE</span>
              <DollarSign className="w-3 h-3 text-red-500 animate-pulse" />
            </div>
            <div className="font-mono text-xl sm:text-2xl font-black text-white/95">
              {dollarShare}% <span className="text-[9px] font-normal text-red-500">▼ REGRESIÓN</span>
            </div>
            <span className="text-[7.5px] text-gray-500 tracking-wider">SWIFT REPORT / INT-COMMERCE RATINGS</span>
          </div>

          <div className="p-4 border border-[#c5a059]/15 rounded-2xl bg-black/80 backdrop-blur-md text-left flex flex-col justify-between min-h-[90px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059]/40" />
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">BRICS COMMODITY INDEX (BCI)</span>
              <TrendingUp className="w-3 h-3 text-emerald-500" />
            </div>
            <div className="font-mono text-xl sm:text-2xl font-black text-white/95">
              {bricsIndex} <span className="text-[9px] font-normal text-emerald-500">▲ +0.22%</span>
            </div>
            <span className="text-[7.5px] text-gray-500 tracking-wider">R5 SOVEREIGN BASKET AVERAGE WEIGHT</span>
          </div>

          <div className="p-4 border border-[#c5a059]/15 rounded-2xl bg-black/80 backdrop-blur-md text-left flex flex-col justify-between min-h-[90px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-800/40" />
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">SOVEREIGN GOLD RESERVES</span>
              <Coins className="w-3 h-3 text-emerald-500 animate-bounce" />
            </div>
            <div className="font-mono text-xl sm:text-2xl font-black text-white/95">
              ${goldOunce} <span className="text-[9px] font-normal text-emerald-500">/ OZ</span>
            </div>
            <span className="text-[7.5px] text-gray-500 tracking-wider">GOLD STANDARD EQUIVALENCY METRIC</span>
          </div>

        </div>

        {/* INTERACTIVE MULTILATERAL DIRECTIVE TERMINAL (Theme Explanation) */}
        <div className="max-w-7xl mx-auto mb-10 bg-black/80 border border-[#c5a059]/15 rounded-3xl p-6 text-left shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 border-b border-[#c5a059]/15 pb-2">
            <Globe className="w-4 h-4 text-[#c5a059] animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">INTERROGANTES CLAVES Y LÍNEA COOPERATIVA</h3>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Interactive Selectors */}
            <div className="flex flex-row md:flex-col gap-2 shrink-0 w-full md:w-56">
              {[
                { id: 'expansion', label: "Consolidación y Peso" },
                { id: 'tensiones', label: "Tensiones Geopolíticas" },
                { id: 'hegemonia', label: "Desafío al Dólar" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl border text-[10px] font-bold uppercase tracking-widest text-left transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-md'
                      : 'bg-[#0d1319]/40 border-[#c5a059]/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Briefing text block */}
            <div className="flex-1 bg-[#0d1319]/40 border border-[#c5a059]/5 rounded-2xl p-5 text-xs sm:text-sm text-gray-300 leading-relaxed min-h-[140px]">
              <AnimatePresence mode="wait">
                {activeTab === 'expansion' && (
                  <motion.div
                    key="expansion"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[9px] text-[#c5a059] tracking-widest block uppercase mb-2">★ CAPÍTULO I: EL ASCENSO DEL SUR GLOBAL ★</span>
                    El ascenso de los BRICS+ se presenta como el desafío definitivo al orden económico del Norte Global. Con una fuerza que ya representa el 30% del PIB mundial y supera el crecimiento anual del G7, el bloque busca consolidar un multilateralismo inclusivo que desplace la hegemonía del dólar. Sin embargo, detrás de las cifras de expansión, emergen interrogantes que ponen en duda la cohesión real de esta alianza.
                  </motion.div>
                )}

                {activeTab === 'tensiones' && (
                  <motion.div
                    key="tensiones"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[9px] text-[#c5a059] tracking-widest block uppercase mb-2">★ CAPÍTULO II: CONFLICTOS E INFORMALIDAD ★</span>
                    Las tensiones geopolíticas entre China e India y las disputas históricas entre nuevos miembros como Egipto y Etiopía representan un riesgo latente para la estabilidad y el consenso del bloque; del mismo modo, los BRICS+ funcionan bajo una cooperación intergubernamental que a menudo roza la informalidad; sin tratados vinculantes, el bloque depende exclusivamente del consenso.
                  </motion.div>
                )}

                {activeTab === 'hegemonia' && (
                  <motion.div
                    key="hegemonia"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[9px] text-[#c5a059] tracking-widest block uppercase mb-2">★ CAPÍTULO III: LA LEGITIMIDAD EN JUEGO ★</span>
                    La expansión de los BRICS va más allá de un aumento númerico en sus miembros, es un reto para la legitimidad del bloque: La pregunta ya no es si los BRICS pueden crecer, sino si pueden sobrevivir a su propia diversidad sin paralizarse o fragmentarse ante las presiones de Occidente. ¿Seguirán siendo un bloque de asistencia económica o una alianza antiimperialista?
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* -------------------- HIGH-DENSITY PROFESSIONAL WORKSPACE -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 max-w-7xl mx-auto">
          
          {/* LEFT PANEL (4 cols): Geopolitical Alignment Analyzer */}
          <div className="lg:col-span-4 flex flex-col bg-black/60 border border-[#c5a059]/15 rounded-3xl p-6 shadow-2xl relative overflow-hidden justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#c5a059]/10 pb-3">
                <Activity className="w-4 h-4 text-[#c5a059]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">ANÁLISIS DE FRICCIÓN ALINEAMIENTOS</h3>
              </div>

              {/* Selector buttons for alignment pairs */}
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  { id: 'china-india', label: "China ↔ India" },
                  { id: 'egypt-ethiopia', label: "Egipto ↔ Etiopía" },
                  { id: 'russia-brazil', label: "Rusia ↔ Brasil" }
                ].map((pair) => (
                  <button
                    key={pair.id}
                    onClick={() => setSelectedPair(pair.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all duration-300 ${
                      selectedPair === pair.id
                        ? 'bg-[#c5a059]/5 border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.06)]'
                        : 'bg-[#0d1319]/20 border-white/5 hover:border-[#c5a059]/30 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-widest block uppercase text-white mb-0.5">
                      {pair.label}
                    </span>
                    <span className="text-[7.5px] text-gray-500 uppercase tracking-widest">
                      Fricción: {geopoliticalBriefings[pair.id].friction}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic brief box */}
              <div className="bg-[#0e1115] border border-[#c5a059]/10 rounded-2xl p-4 text-left">
                <h4 className="text-xs font-bold text-white uppercase mb-2">
                  {geopoliticalBriefings[selectedPair].title}
                </h4>
                
                {/* Visual meter alignment */}
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex justify-between text-[8px] font-bold text-gray-400 tracking-wider">
                    <span>COHESIÓN GEOPOLÍTICA:</span>
                    <span>{geopoliticalBriefings[selectedPair].alignment}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full relative overflow-hidden">
                    <motion.div
                      key={selectedPair}
                      initial={{ width: 0 }}
                      animate={{ width: `${geopoliticalBriefings[selectedPair].alignment}%` }}
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${geopoliticalBriefings[selectedPair].color}`}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>

                <p className="text-[10.5px] leading-relaxed text-gray-400">
                  {geopoliticalBriefings[selectedPair].content}
                </p>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#c5a059]/10 text-[8px] text-gray-600 text-left">
              MULTILATERAL BALANCE DECK COMPILATION SYSTEM
            </div>
          </div>

          {/* MIDDLE PANEL (5 cols): BRICS Pay Ledger Simulator */}
          <div className="lg:col-span-5 flex flex-col bg-black/60 border border-[#c5a059]/15 rounded-3xl p-6 shadow-2xl justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#c5a059]/10 pb-3">
                <Landmark className="w-4 h-4 text-[#c5a059]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">BRICS PAY TRANSACTION LEDGER</h3>
              </div>

              {/* Form to submit transaction */}
              <form onSubmit={handleBricsPaySubmit} className="grid grid-cols-2 gap-3 mb-6 text-left">
                <div className="flex flex-col gap-1">
                  <label className="text-[7.5px] text-gray-500 uppercase tracking-widest font-black">ORIGEN DE LIQUIDACIÓN:</label>
                  <select 
                    value={customFrom}
                    onChange={(e) => setCustomFrom(e.target.value)}
                    className="bg-[#0c0e12] border border-white/10 rounded-lg p-2 text-[10px] text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option>Brazil (BRL)</option>
                    <option>Russia (RUB)</option>
                    <option>India (INR)</option>
                    <option>China (CNY)</option>
                    <option>South Africa (ZAR)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[7.5px] text-gray-500 uppercase tracking-widest font-black">DESTINO LIQUIDACIÓN:</label>
                  <select 
                    value={customTo}
                    onChange={(e) => setCustomTo(e.target.value)}
                    className="bg-[#0c0e12] border border-white/10 rounded-lg p-2 text-[10px] text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option>Saudi Arabia (SAR)</option>
                    <option>Egypt (EGP)</option>
                    <option>Ethiopia (ETB)</option>
                    <option>UAE (AED)</option>
                    <option>Iran (IRR)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-[7.5px] text-gray-500 uppercase tracking-widest font-black">ACTIVO / COMMODITY VINCULADO:</label>
                  <select 
                    value={customCommodity}
                    onChange={(e) => setCustomCommodity(e.target.value)}
                    className="bg-[#0c0e12] border border-white/10 rounded-lg p-2 text-[10px] text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option>Wheat & Grain Reserves</option>
                    <option>Crude Oil & Gas Barrels</option>
                    <option>Gold Bullion Ounces</option>
                    <option>Agricultural Fertilizers</option>
                    <option>Industrial Minerals</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-[7.5px] text-gray-500 uppercase tracking-widest font-black">MONTO DE TRANSFERENCIA (COMMODITY EQUIVALENT):</label>
                  <div className="flex gap-2">
                    <input 
                      type="number"
                      placeholder="Monto en USD..."
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="flex-1 bg-[#0c0e12] border border-white/10 rounded-lg p-2 text-[10px] text-[#c5a059] focus:outline-none focus:border-[#c5a059]"
                    />
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-[#c5a059] hover:bg-[#b59049] text-black font-black text-[9px] uppercase rounded-lg transition-transform hover:scale-95 shadow-[0_0_10px_rgba(197,160,89,0.3)]"
                    >
                      LIQUIDAR
                    </button>
                  </div>
                </div>
              </form>

              {/* Transactions list */}
              <div className="border border-white/10 rounded-2xl bg-[#090b0e] p-3 text-left">
                <span className="text-[7.5px] text-gray-500 font-bold uppercase tracking-widest block mb-2">RECORDE DE LIQUIDACIONES LEDGER (EN VIVO)</span>
                <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex justify-between items-center text-[9px] bg-white/[0.02] border border-white/5 p-2 rounded-lg font-mono">
                      <div className="flex flex-col">
                        <span className="font-bold text-white">{tx.from} ➔ {tx.to}</span>
                        <span className="text-[7.5px] text-gray-500">{tx.commodity} // ID: {tx.id}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-[#c5a059] block">${tx.amount}</span>
                        <span className="text-[7px] text-emerald-400 font-bold uppercase tracking-widest">{tx.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL (3 cols): Geopolitical Exhibits Dossier */}
          <div className="lg:col-span-3 flex flex-col bg-black/60 border border-[#c5a059]/15 rounded-3xl p-6 shadow-2xl justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#c5a059]/10 pb-3">
                <FileText className="w-4 h-4 text-[#c5a059]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">EXHIBITS GEOPOLÍTICOS</h3>
              </div>

              <p className="text-[9.5px] leading-relaxed text-gray-500 mb-4 text-left">
                Documentos gráficos analizados en las sesiones multilaterales de soberanía:
              </p>

              {/* Exhibits Grid */}
              <div className="space-y-4">
                {[
                  { name: "Exhibit b1: Alianza", img: "/b1.jpg", desc: "Cumbre de Integración Multilateral de Nuevos Miembros" },
                  { name: "Exhibit b2: Soberanía", img: "/b2.jpg", desc: "Monitoreo de Infraestructuras Industriales del Sur Global" },
                  { name: "Exhibit b3: Finanzas", img: "/b3.jpg", desc: "Sistemas de Arbitraje y Compensaciones BRICS Pay" }
                ].map((ex, i) => (
                  <div key={i} className="group relative rounded-xl border border-white/10 bg-[#0c0e12]/60 overflow-hidden hover:border-[#c5a059]/40 transition-all duration-300">
                    <div className="h-24 w-full overflow-hidden relative">
                      <img src={ex.img} alt={ex.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2 left-2 text-[8px] font-bold text-[#c5a059] tracking-wider uppercase">{ex.name.split(': ')[0]}</span>
                    </div>
                    <div className="p-2 text-left">
                      <p className="text-[8px] text-gray-400 leading-tight leading-snug">{ex.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Official Navigation & Documentation Board */}
        <div className="max-w-5xl mx-auto p-8 rounded-[2rem] bg-[#070b10]/95 border border-[#c5a059]/20 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl mt-8">
          <div className="text-center md:text-left">
            <span className="font-mono text-[8px] text-gray-500 tracking-[0.3em] uppercase block mb-1">MESA DIRECTIVA Y REGLAMENTOS DE CUMBRE</span>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">CREDENCIALES Y MARCO REGULATORIO</h4>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Conoce a tu mesa */}
            <button 
              onClick={() => setShowMesaModal(true)}
              className="px-6 py-3 border border-white/20 hover:border-[#c5a059] text-white/80 hover:text-black hover:bg-[#c5a059] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group font-bold"
            >
              <Users className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Conoce a tu Mesa
            </button>

            {/* Academic Guide link */}
            <a 
              href="https://drive.google.com/file/d/1FL6KVkepPErWBNT9ZODT9QILWBpR6l2v/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#c5a059] text-black hover:bg-[#d5b069] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group font-bold border border-[#c5a059]/20"
            >
              <FileText className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Reglamento Interno
            </a>
          </div>
        </div>

      </div>

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
              className="relative w-full max-w-sm rounded-[2rem] bg-[#070b10] border border-[#c5a059]/30 p-8 text-[#ece2d0] z-10 shadow-2xl text-center font-mono overflow-hidden"
            >
              {/* Scanline overlay for modal */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
              <div className="absolute inset-2 border border-[#c5a059]/10 rounded-[1.8rem] pointer-events-none" />

              <button 
                onClick={() => setShowMesaModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/35 flex items-center justify-center mx-auto mb-4 text-[#c5a059]">
                <Globe className="w-8 h-8 animate-pulse" />
              </div>
              
              <span className="text-[8px] text-[#c5a059] tracking-[0.35em] uppercase block mb-1">OFFICIAL CUMBRE REPRESENTATIVE PASS</span>
              <h3 className="text-xl font-black text-white uppercase mb-6 border-b border-[#c5a059]/20 pb-3">DIRECCIÓN GENERAL DE BRICS+</h3>

              {/* Holographic ID pass card items */}
              <div className="space-y-6 text-center text-[#c2eff7] leading-relaxed">
                <div className="p-4 bg-[#0d131a]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#c5a059]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#c5a059] font-bold">SEC_01</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Presidente</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Carlos Mendes</h4>
                  <p className="text-[9px] text-[#c5a059] mt-0.5 uppercase tracking-widest">Diplomacia y Coordinación del Bloque</p>
                </div>

                <div className="p-4 bg-[#0d131a]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#c5a059]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#c5a059] font-bold">SEC_02</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Vicepresidente</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Arushi Sharma</h4>
                  <p className="text-[9px] text-[#c5a059] mt-0.5 uppercase tracking-widest">Logística Monetaria y BRICS Pay</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[8px] text-gray-500">
                BRICS+ INTERNATIONAL CUMBRE SECURITY AGENT // VERIFIED GOLD PASS
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* EASTER EGG COMPONENTS */}

      {/* Passcode Modal */}
      <AnimatePresence>
        {showPasscode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-md bg-[#0a0a0c] border border-[#c5a059]/20 rounded-2xl p-8 shadow-2xl">
              <button 
                onClick={() => setShowPasscode(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col items-center text-center mb-8">
                <Coins className="w-12 h-12 text-[#c5a059] mb-4" />
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
                  className={`w-full bg-black border ${error ? 'border-red-500 text-red-500' : 'border-[#c5a059]/30 text-white'} rounded-xl px-4 py-4 font-mono text-center tracking-widest outline-none focus:border-[#c5a059] transition-colors`}
                  autoFocus
                />
                <button 
                  type="submit"
                  className="w-full bg-[#c5a059] text-black font-mono font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-white transition-all"
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
                color: ['#ffffff', '#c5a059', '#ffffff']
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
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#c5a059]/30" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/30" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#c5a059]/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#c5a059]/30" />

            <div className="max-w-2xl w-full bg-[#0d1014] border border-[#c5a059]/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left font-mono">
              <button 
                onClick={() => setEasterEggActive(false)}
                className="absolute top-6 right-6 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white p-3 rounded-full transition-all group"
              >
                <X className="w-5 h-5 group-hover:scale-115 transition-transform" />
              </button>

              <div className="flex items-center gap-3 mb-6 border-b border-[#c5a059]/20 pb-4">
                <Award className="w-8 h-8 text-[#c5a059] animate-pulse" />
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none">TRATADO CONFIDENCIAL DE FORTALEZA</h3>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mt-1">SOVEREIGN GOLD LIQUIDITY DIRECTIVE</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-300 leading-relaxed max-h-[300px] overflow-y-auto pr-2 mb-6">
                <p className="font-bold text-[#c5a059] uppercase tracking-wider">SECCIÓN DE SEGURIDAD 12: ELIMINACIÓN DE SWIFT</p>
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
                className="w-full bg-[#c5a059] hover:bg-white text-black font-bold text-xs uppercase py-3 rounded-xl transition-all"
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

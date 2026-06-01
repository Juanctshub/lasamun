import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Coins, Scale, FileText, Download, Users, X, Award, CheckCircle, TrendingUp, AlertTriangle, Globe, DollarSign, Activity, Settings, ChevronRight } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Brics() {
  const [activeNarrativeTab, setActiveNarrativeTab] = useState('ppp');
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
    { id: 'TX-7011', from: 'Brasil (BRL)', to: 'Rusia (RUB)', amount: '15,800,000', commodity: 'Fertilizantes', status: 'COMPLETADO' },
    { id: 'TX-7012', from: 'China (CNY)', to: 'Egipto (EGP)', amount: '42,000,000', commodity: 'Granos de Trigo', status: 'COMPLETADO' },
    { id: 'TX-7013', from: 'India (INR)', to: 'Sudáfrica (ZAR)', amount: '8,500,000', commodity: 'Mineral de Hierro', status: 'COMPLETADO' }
  ]);
  const [customAmount, setCustomAmount] = useState('');
  const [customCommodity, setCustomCommodity] = useState('Granos de Trigo');
  const [customFrom, setCustomFrom] = useState('China (CNY)');
  const [customTo, setCustomTo] = useState('Egipto (EGP)');

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
      status: 'COMPLETADO'
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
      title: "Delhi ↔ Beijing: Cooperación de Potencias Nucleares",
      alignment: 42,
      friction: "CRÍTICA",
      color: "from-amber-600 to-red-700",
      content: "Las tensiones de soberanía fronteriza en la línea LAC del Himalaya y la competencia comercial en el Océano Índico representan la brecha más profunda de confianza del bloque. A pesar del diálogo en foros comunes, ambas potencias compiten fuertemente por liderar el Sur Global."
    },
    'egypt-ethiopia': {
      title: "El Cairo ↔ Adís Abeba: Disputa Hidrológica del Nilo",
      alignment: 55,
      friction: "ELEVADA",
      color: "from-[#c5a059]/40 to-blue-800",
      content: "La gran presa del Renacimiento Etíope (GERD) sigue siendo un conflicto existencial. Egipto percibe el control del flujo del agua como una amenaza directa a su seguridad nacional, mientras que Etiopía lo defiende como un pilar fundamental de su soberanía energética."
    },
    'russia-brazil': {
      title: "Brasilia ↔ Moscú: Respaldo Agroalimentario y Fertilizantes",
      alignment: 85,
      friction: "ESTABLE",
      color: "from-emerald-600 to-yellow-600",
      content: "Una relación de alta sinergia. Brasil depende del nitrógeno ruso para sostener sus cosechas récord, mientras que Moscú encuentra en Brasil un socio geopolítico clave que rechaza sanciones unilaterales y promueve balances financieros multilaterales."
    }
  };

  return (
    <section id="brics-section" className="min-h-screen relative bg-[#060504] text-[#c5a059] overflow-x-hidden pt-28 pb-32 font-mono selection:bg-[#c5a059] selection:text-black">
      
      {/* High-Contrast Clear Background Video Layer */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#030202]">
        <video 
          ref={bgVideoRef}
          src="/ri.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-[0.80] transition-opacity duration-1000"
          style={{ filter: 'brightness(0.45) contrast(1.25) saturate(0.9)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("RI video loop failed:", err));
            }
          }}
        />
        {/* Sleek warm gradient overlays */}
        <div className="absolute inset-0 bg-[#060504]/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.03)_0%,_#060504_95%)] z-10" />
      </div>

      {/* Ornate Copper Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Live Sovereign Ticker */}
      <div className="absolute top-16 left-0 right-0 h-8 bg-[#090807]/90 border-y border-[#c5a059]/20 overflow-hidden flex items-center z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 42 }}
          className="flex gap-16 whitespace-nowrap font-bold text-[8.5px] text-[#c5a059] tracking-[0.4em] uppercase w-max pr-16"
        >
          {Array.from({ length: 4 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span>CONSOLIDACIÓN BRICS+ 2026</span>
              <span>★</span>
              <span>R5 FINANCIAL BASKET ACTIVATED</span>
              <span>★</span>
              <span>SOVEREIGN WEALTH & RESERVE METRIC SYSTEM</span>
              <span>★</span>
              <span>DE-DOLLARIZATION COEFFICIENT IN PROCESS</span>
              <span>★</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl mt-8">
        
        {/* -------------------- THREE-COLUMN LUXURY VAULT DECK -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT PANEL (3 cols): Central Sovereign reserves & de-dollarization dials */}
          <div className="lg:col-span-3 flex flex-col bg-[#0b0a09]/85 border border-[#c5a059]/20 rounded-[2rem] p-6 shadow-2xl justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Landmark className="w-24 h-24 text-[#c5a059]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#c5a059]/15 pb-3">
                <TrendingUp className="w-4 h-4 text-[#c5a059]" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">RESERVAS SOBERANAS</h3>
              </div>

              {/* Fluctuating Index metrics card style */}
              <div className="space-y-6 text-left">
                
                <div className="bg-[#12100e] border border-[#c5a059]/10 p-4 rounded-2xl relative">
                  <span className="text-[7.5px] text-gray-500 font-bold block uppercase tracking-widest mb-1">Dólar en Comercio Global</span>
                  <div className="text-2xl font-black text-white font-mono flex items-baseline gap-1.5 leading-none">
                    {dollarShare}%
                    <span className="text-[9px] text-red-500 font-bold">▼ REGRESIÓN</span>
                  </div>
                  <span className="text-[7px] text-gray-500 block mt-1 tracking-wider">REDUCCIÓN HISTÓRICA CONTINUA</span>
                </div>

                <div className="bg-[#12100e] border border-[#c5a059]/10 p-4 rounded-2xl relative">
                  <span className="text-[7.5px] text-gray-500 font-bold block uppercase tracking-widest mb-1">BRICS Currency Basket (BCI)</span>
                  <div className="text-2xl font-black text-white font-mono flex items-baseline gap-1.5 leading-none">
                    {bricsIndex}
                    <span className="text-[9px] text-emerald-500 font-bold">▲ ACUMULACIÓN</span>
                  </div>
                  <span className="text-[7px] text-gray-500 block mt-1 tracking-wider">PESO ASIGNADO EN BASE R5</span>
                </div>

                <div className="bg-[#12100e] border border-[#c5a059]/10 p-4 rounded-2xl relative">
                  <span className="text-[7.5px] text-gray-500 font-bold block uppercase tracking-widest mb-1">Reserva en Oro Físico</span>
                  <div className="text-2xl font-black text-white font-mono flex items-baseline gap-1.5 leading-none">
                    ${goldOunce}
                    <span className="text-[8px] text-emerald-500 font-bold">/ OZ</span>
                  </div>
                  <span className="text-[7px] text-gray-500 block mt-1 tracking-wider">VALORACIÓN COMERCIAL STANDARD</span>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#c5a059]/10 text-[8px] text-gray-600 text-left">
              NDB CENTRAL BANK RESERVES MONITORING
            </div>
          </div>

          {/* MIDDLE PANEL (6 cols): The Grand Sovereign Commodities Vault (Luxury Codex Theme) */}
          <div className="lg:col-span-6 flex flex-col bg-[#0b0a09]/90 border-2 border-[#c5a059]/30 rounded-[2.5rem] p-8 shadow-2xl justify-between relative overflow-hidden">
            
            {/* Elegant luxury framing lines */}
            <div className="absolute inset-2 border border-[#c5a059]/10 rounded-[2.2rem] pointer-events-none" />
            
            <div className="flex flex-col items-center">
              
              {/* STRETCHED AND ENLARGED BRICS BANNER LOGO (ALARGADO Y MAS GRANDE) */}
              <div 
                className="w-full flex justify-center mb-8 border-b border-[#c5a059]/15 pb-6 cursor-pointer"
                onClick={() => setShowPasscode(true)}
              >
                <motion.img 
                  src="/brics_logo.png" 
                  alt="BRICS+ Logo" 
                  className="w-full max-w-lg sm:max-w-xl h-24 sm:h-28 object-contain filter drop-shadow-[0_0_25px_rgba(197,160,89,0.6)] hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>

              {/* Luxury Serif Narrative Codex */}
              <div className="bg-[#f0e7d5] border border-gray-400 rounded-3xl p-6 text-[#291e13] font-serif text-left shadow-inner w-full mb-6 relative">
                {/* Gold Seal Watermark overlay */}
                <div className="absolute top-4 right-4 border border-[#b59049]/40 text-[#b59049]/40 px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-widest transform rotate-12">
                  NDB CONFIDENTIAL
                </div>

                <div className="flex justify-between items-center mb-3 border-b border-amber-900/10 pb-2">
                  <span className="font-mono text-[7px] text-amber-900/80 tracking-widest uppercase block">
                    CUMBRE MULTILATERAL DE COOPERACIÓN DEL SUR GLOBAL
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {activeNarrativeTab === 'ppp' && (
                    <motion.div
                      key="ppp"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg italic font-black text-amber-950 mb-2 leading-tight">
                        El Desafío Definitivo al Orden del Norte Global
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-amber-950/95 font-serif antialiased first-letter:text-3xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-amber-900">
                        El ascenso de los BRICS+ se presenta como el desafío definitivo al orden económico del Norte Global. Con una fuerza que ya representa el 30% del PIB mundial y supera el crecimiento anual del G7, el bloque busca consolidar un multilateralismo inclusivo que desplace la hegemonía del dólar. Sin embargo, detrás de las cifras de expansión, emergen interrogantes que ponen en duda la cohesión real de esta alianza.
                      </p>
                    </motion.div>
                  )}

                  {activeNarrativeTab === 'tension' && (
                    <motion.div
                      key="tension"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg italic font-black text-amber-950 mb-2 leading-tight">
                        Fricciones Geopolíticas e Informalidad Sistémica
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-amber-950/95 font-serif antialiased first-letter:text-3xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-amber-900">
                        Las tensiones geopolíticas entre China e India y las disputas históricas entre nuevos miembros como Egipto y Etiopía representan un riesgo latente para la estabilidad y el consenso del bloque; del mismo modo, a pesar de los esfuerzos por sistemas como BRICS Pay, el dólar aún domina el 60% del comercio exterior. Los BRICS+ funcionan bajo una cooperación intergubernamental que a menudo roza la informalidad.
                      </p>
                    </motion.div>
                  )}

                  {activeNarrativeTab === 'soberania' && (
                    <motion.div
                      key="soberania"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg italic font-black text-amber-950 mb-2 leading-tight">
                        El Reto de la Diversidad y la Legitimidad
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-amber-950/95 font-serif antialiased first-letter:text-3xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-amber-900">
                        La expansión de los BRICS va más allá de un aumento númerico en sus miembros, es un reto para la legitimidad del bloque: La pregunta ya no es si los BRICS pueden crecer, sino si pueden sobrevivir a su propia diversidad sin paralizarse o fragmentarse ante las presiones de Occidente. ¿Seguirán siendo un bloque de asistencia económica o se consolidarán como una alianza antiimperialista?
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Codex Selector Tabs */}
                <div className="flex gap-2 mt-6 pt-4 border-t border-amber-900/10 justify-end">
                  {[
                    { id: 'ppp', label: "Consolidación" },
                    { id: 'tension', label: "Tensiones" },
                    { id: 'soberania', label: "Legitimidad" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveNarrativeTab(tab.id)}
                      className={`px-3 py-1.5 rounded-lg border font-mono text-[9px] uppercase tracking-wider transition-all font-bold ${
                        activeNarrativeTab === tab.id
                          ? 'bg-[#1c140d] text-[#f2e7d5] border-[#1c140d]'
                          : 'bg-transparent border-amber-900/20 text-amber-900 hover:border-amber-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 text-[9px] text-[#c5a059] font-bold tracking-widest flex items-center justify-between">
              <span>MULTILATERAL BLOCK DISPATCH</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              </div>
            </div>

          </div>

          {/* RIGHT PANEL (3 cols): BRICS Pay Settlement Simulator */}
          <div className="lg:col-span-3 flex flex-col bg-[#0b0a09]/85 border border-[#c5a059]/20 rounded-[2rem] p-6 shadow-2xl justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#c5a059]/15 pb-3">
                <Coins className="w-4 h-4 text-[#c5a059]" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">BRICS PAY TRANSACTION</h3>
              </div>

              <form onSubmit={handleBricsPaySubmit} className="space-y-4 text-left">
                
                <div className="flex flex-col gap-1">
                  <label className="text-[7px] text-gray-500 uppercase tracking-widest font-black">ORIGEN DE DIVISAS:</label>
                  <select 
                    value={customFrom}
                    onChange={(e) => setCustomFrom(e.target.value)}
                    className="bg-[#12100e] border border-[#c5a059]/20 rounded-xl p-2.5 text-[9.5px] text-white focus:outline-none focus:border-[#c5a059] w-full"
                  >
                    <option>Brasil (BRL)</option>
                    <option>Rusia (RUB)</option>
                    <option>India (INR)</option>
                    <option>China (CNY)</option>
                    <option>Sudáfrica (ZAR)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[7px] text-gray-500 uppercase tracking-widest font-black">DESTINO DE LIQUIDACIÓN:</label>
                  <select 
                    value={customTo}
                    onChange={(e) => setCustomTo(e.target.value)}
                    className="bg-[#12100e] border border-[#c5a059]/20 rounded-xl p-2.5 text-[9.5px] text-white focus:outline-none focus:border-[#c5a059] w-full"
                  >
                    <option>Arabia Saudita (SAR)</option>
                    <option>Egipto (EGP)</option>
                    <option>Etiopía (ETB)</option>
                    <option>EAU (AED)</option>
                    <option>Irán (IRR)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[7px] text-gray-500 uppercase tracking-widest font-black">COMMODITY VINCULADO:</label>
                  <select 
                    value={customCommodity}
                    onChange={(e) => setCustomCommodity(e.target.value)}
                    className="bg-[#12100e] border border-[#c5a059]/20 rounded-xl p-2.5 text-[9.5px] text-white focus:outline-none focus:border-[#c5a059] w-full"
                  >
                    <option>Granos de Trigo</option>
                    <option>Barriles de Crudo</option>
                    <option>Oro en Lingotes</option>
                    <option>Fertilizantes Nitrogenados</option>
                    <option>Minerales de Tierras Raras</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[7px] text-gray-500 uppercase tracking-widest font-black">MONTO DE TRANSFERENCIA (USD EQUIVALENT):</label>
                  <input 
                    type="number" 
                    placeholder="Monto en USD..."
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="bg-[#12100e] border border-[#c5a059]/20 rounded-xl p-2.5 text-[10px] text-[#c5a059] placeholder-[#c5a059]/30 focus:outline-none focus:border-[#c5a059] w-full"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#b59049] text-black font-black text-[9.5px] rounded-xl uppercase tracking-widest transition-transform hover:scale-95 shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                >
                  EJECUTAR TRANSACCIÓN
                </button>

              </form>

            </div>

            {/* Micro transaction list for ledger */}
            <div className="mt-4 border border-white/5 bg-black/50 rounded-xl p-2.5 text-left">
              <span className="text-[7px] text-gray-500 font-bold block uppercase tracking-widest mb-1.5">LEDGER TRANSACTIONS VINCULADOS</span>
              <div className="space-y-1.5 max-h-[85px] overflow-y-auto pr-1">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex justify-between items-center text-[8.5px] bg-[#12100e] border border-white/5 p-1.5 rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-bold text-white leading-tight">{tx.from} ➔ {tx.to}</span>
                      <span className="text-[6.5px] text-gray-500">{tx.commodity}</span>
                    </div>
                    <span className="font-black text-[#c5a059]">${tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* -------------------- GEOPOLITICAL ALIGNMENT & FRICTION MATRIX (Full Width) -------------------- */}
        <div className="max-w-7xl mx-auto bg-[#0b0a09]/85 border border-[#c5a059]/25 rounded-[2.5rem] p-8 text-left shadow-2xl mb-12 relative overflow-hidden">
          
          <div className="flex items-center gap-2 mb-6 border-b border-[#c5a059]/15 pb-3">
            <Globe className="w-4 h-4 text-[#c5a059]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">MATRIZ GEOPOLÍTICA BRICS+ (ALINEACIÓN DE SOCIOS)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Dynamic Selector Buttons */}
            <div className="md:col-span-4 flex flex-col gap-3">
              {[
                { id: 'china-india', label: "Delhi ↔ Beijing (LAC Himalaya)" },
                { id: 'egypt-ethiopia', label: "El Cairo ↔ Adís Abeba (GERD Nilo)" },
                { id: 'russia-brazil', label: "Brasilia ↔ Moscú (Nitrógeno & Soja)" }
              ].map((pair) => (
                <button
                  key={pair.id}
                  onClick={() => setSelectedPair(pair.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
                    selectedPair === pair.id
                      ? 'bg-[#c5a059]/10 border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.08)]'
                      : 'bg-[#12100e]/40 border-white/5 hover:border-[#c5a059]/30 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold tracking-widest block uppercase text-white mb-0.5">
                    {pair.label.split(' (')[0]}
                  </span>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest">
                    PAR: {pair.label.split(' (')[1].slice(0, -1)}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Col: Animated Alignment Details and meters */}
            <div className="md:col-span-8 bg-[#12100e] border border-[#c5a059]/10 rounded-3xl p-6 relative overflow-hidden">
              
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#c5a059]/10">
                <h4 className="text-sm font-bold text-white uppercase">{geopoliticalBriefings[selectedPair].title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-[7.5px] text-gray-500 uppercase tracking-widest font-black">NIVEL DE FRICCIÓN:</span>
                  <span className="text-[9.5px] text-red-500 font-bold uppercase tracking-widest bg-red-950/40 border border-red-500/20 px-2.5 py-0.5 rounded">
                    {geopoliticalBriefings[selectedPair].friction}
                  </span>
                </div>
              </div>

              {/* Progress Chart */}
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex justify-between text-[8px] font-bold text-gray-400 tracking-wider">
                  <span>COHESIÓN COMERCIAL Y ALINEAMIENTO GEOPOLÍTICO:</span>
                  <span>{geopoliticalBriefings[selectedPair].alignment}%</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full relative overflow-hidden">
                  <motion.div
                    key={selectedPair}
                    initial={{ width: 0 }}
                    animate={{ width: `${geopoliticalBriefings[selectedPair].alignment}%` }}
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${geopoliticalBriefings[selectedPair].color}`}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-400">
                {geopoliticalBriefings[selectedPair].content}
              </p>

            </div>

          </div>

        </div>

        {/* -------------------- GEOPOLITICAL PICTURE DOSSIER (Full Width) -------------------- */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { name: "Exhibit b1: Alianza", img: "/b1.jpg", desc: "Cumbre de Integración y Expansión Multilateral de Nuevos Miembros" },
            { name: "Exhibit b2: Soberanía", img: "/b2.jpg", desc: "Monitoreo de Infraestructuras y Reservas de Soberanía Alimentaria" },
            { name: "Exhibit b3: Finanzas", img: "/b3.jpg", desc: "Sistemas de Compensaciones de Reservas BRICS Pay y Liquidaciones" }
          ].map((ex, i) => (
            <div key={i} className="group relative rounded-2xl border border-[#c5a059]/20 bg-[#0b0a09]/80 overflow-hidden hover:border-[#c5a059]/50 transition-all duration-500 shadow-2xl flex flex-col justify-between">
              <div className="h-44 w-full overflow-hidden relative">
                <img src={ex.img} alt={ex.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold text-[#c5a059] tracking-widest uppercase">{ex.name.split(': ')[0]}</span>
              </div>
              <div className="p-4 text-left">
                <p className="text-[10px] text-gray-400 leading-relaxed font-light">{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Official Navigation & Documentation Board */}
        <div className="max-w-5xl mx-auto p-8 rounded-[2rem] bg-[#0b0a09]/95 border border-[#c5a059]/20 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl mt-8">
          <div className="text-center md:text-left">
            <span className="font-mono text-[8px] text-gray-500 tracking-[0.3em] uppercase block mb-1">MESA DIRECTIVA Y MARCO REGULATORIO</span>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">CREDENCIALES Y MARCO REGULATORIO DE FORTALEZA</h4>
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
              className="relative w-full max-w-sm rounded-[2rem] bg-[#0d0c0b] border border-[#c5a059]/30 p-8 text-[#ece2d0] z-10 shadow-2xl text-center font-mono overflow-hidden"
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
                <div className="p-4 bg-[#141210]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#c5a059]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#c5a059] font-bold">SEC_01</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Presidente</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Christian La Cruz</h4>
                  <p className="text-[9px] text-[#c5a059] mt-0.5 uppercase tracking-widest">Diplomacia y Coordinación del Bloque</p>
                </div>

                <div className="p-4 bg-[#141210]/60 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#c5a059]/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-1 text-[7px] text-[#c5a059] font-bold">SEC_02</div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Vicepresidente</span>
                  <h4 className="text-lg font-bold text-white tracking-wide">Joel Rodriguez</h4>
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

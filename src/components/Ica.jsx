import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Compass, Key, Lock, Unlock, Users, Landmark, MapPin, Layers, Image as ImageIcon, X } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Ica() {
  const [activeRoute, setActiveRoute] = useState('bering');
  const [activeStratum, setActiveStratum] = useState(1);
  const [showMesaModal, setShowMesaModal] = useState(false);
  
  // Safe Box decryption states
  const [safeCombination, setSafeCombination] = useState('');
  const [safeUnlocked, setSafeUnlocked] = useState(false);
  const [safeError, setSafeError] = useState('');

  useEffect(() => {
    // Play toby.mp3 immediately for ICA
    audioSystem.switchToIca();
  }, []);

  const handleUnlockSafe = (e) => {
    e.preventDefault();
    const cleanCombo = safeCombination.toUpperCase().trim();
    if (cleanCombo === 'CLOVIS' || cleanCombo === 'AMEGHINO' || cleanCombo === '1935' || cleanCombo === 'GENESIS') {
      setSafeUnlocked(true);
      setSafeError('');
    } else {
      setSafeError('Combinación errónea. Pistas: AMEGHINO, CLOVIS, 1935, GENESIS');
      setSafeUnlocked(false);
    }
  };

  // Migration Routes detailed data (Topic B)
  const migrationRoutes = {
    bering: {
      name: "Ruta de Beringia (Estrecho del Norte)",
      proponent: "Ales Hrdlicka (Impuesta por la Academia Anglosajona)",
      evidence: "Puntas de proyectil Clovis y similitud morfológica asiática.",
      description: "Tesis oficialista clásica. Sostiene que grupos siberianos cruzaron el estrecho hace 12,000 años siguiendo la megafauna a través de un corredor libre de hielo. Cualquier hallazgo anterior es catalogado como 'intrusión geológica' o error científico.",
      dissent: "La craneometría sudamericana muestra rasgos paleoamericanos antiguos no relacionados con los paleo-mongoloides del norte, sugiriendo poblamientos previos."
    },
    pacific: {
      name: "Ruta Costera Pacífica",
      proponent: "Paul Rivet (Teoría Polinésica/Oceanía)",
      evidence: "Similitudes lingüísticas, herramientas polinesias y restos biológicos.",
      description: "Propone que navegantes de Melanesia y Polinesia cruzaron el océano Pacífico en canoas monoxilas aprovechando las corrientes ecuatoriales, arribando directamente a las costas de Sudamérica. Esto explicaría fechados antiguos en el Cono Sur.",
      dissent: "Considerada 'improbable' por científicos biologicistas europeos debido a la falta de tecnología naviera aceptada en sus esquemas evolutivos primarios."
    },
    autoctona: {
      name: "Autoctonismo Pampeano",
      proponent: "Florentino Ameghino (La Tesis Argentina en disputa)",
      evidence: "Restos fósiles óseos en estratos de Miramar y Monte Hermoso.",
      description: "Postula que el ser humano se originó biológicamente en las pampas argentinas durante la era terciaria, migrando luego hacia el resto del planeta. En 1935, este debate se reabre no solo como ciencia, sino como un símbolo de soberanía intelectual frente a la hegemonía europea.",
      dissent: "Rotundamente rechazada por antropólogos de Europa Central empeñados en clasificaciones dolicocéfalas para justificar determinismos raciales."
    }
  };

  // Strata data (Topic A)
  const strataLayers = [
    {
      id: 1,
      depth: "0.0 - 1.5 Metros",
      layerName: "Estrato Superior (Humus y Limos)",
      age: "Aprox. 11,000 AP",
      findings: "Puntas de proyectil talladas simétricamente, carbón vegetal de fogatas recientes.",
      theories: "Consenso Clovis. Poblamiento tardío dominante. Nivel superficial estable."
    },
    {
      id: 2,
      depth: "1.5 - 3.5 Metros",
      layerName: "Estrato Pampeano Medio (Loess consolidado)",
      age: "Aprox. 15,000 AP",
      findings: "Muestras de herramientas de madera y restos vegetales masticados (Miramar).",
      theories: "Rutas pre-Clovis costeras. Evidencia geológica que fractura el dogma oficialista del norte."
    },
    {
      id: 3,
      depth: "3.5 - 5.5 Metros",
      layerName: "Estrato Ensenadense (Arcillas rojas compactas)",
      age: "Aprox. 30,000 AP",
      findings: "Percutores líticos y fogones profundos no asociados a fauna europea.",
      theories: "Presencia paleoamericana antigua transoceánica. Tildado de 'pseudocientífico' por agencias de Berlín."
    },
    {
      id: 4,
      depth: "5.5 - 8.0+ Metros",
      layerName: "Estrato Primordial (Sedimento de Miramar)",
      age: "Aprox. 50,000+ AP",
      findings: "Restos fósiles en discusión, marcas de percusión antrópica en fémures de megafauna.",
      theories: "Filogenia autoctona y prehistoria profunda. Zonas prohibidas bajo ataque de la craneometría determinista."
    }
  ];

  return (
    <section id="ica-section" className="min-h-screen relative bg-[#0e0a07] text-[#dfccb7] overflow-x-hidden pt-28 pb-32 font-mono selection:bg-[#c3a479] selection:text-[#0e0a07]">
      
      {/* Immersive Sepia Background Map Overlay */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img 
          src="/a1.jpg"
          alt="Ancient American Map"
          className="absolute min-w-full min-h-full object-cover opacity-[0.08]"
          style={{ filter: 'sepia(1) brightness(0.2) contrast(1.3)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0a07] via-transparent to-[#0e0a07] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#0e0a07_100%)] z-10" />
      </div>

      {/* Decorative measuring grid lines on desk */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(195,164,121,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(195,164,121,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 max-w-7xl">
        
        {/* Telegram-style Letterhead Header */}
        <div className="max-w-5xl mx-auto border-4 border-double border-[#c3a479]/30 p-6 md:p-8 bg-[#18130f]/90 backdrop-blur-md rounded-2xl mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Subtle copper corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c3a479]/60" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c3a479]/60" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c3a479]/60" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c3a479]/60" />

          <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#c3a479]/20 pb-4 mb-6 gap-4">
            <div className="text-center md:text-left">
              <span className="text-[10px] tracking-[0.3em] text-[#c3a479]/70 uppercase block mb-1">CONGRESO INTERNACIONAL DE AMERICANISTAS</span>
              <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-white tracking-wider">ICA (1935)</h1>
            </div>
            <div className="border border-[#c3a479]/30 rounded-lg px-4 py-2 text-center bg-[#110d0a]">
              <span className="text-[8px] tracking-[0.2em] text-[#c3a479] block uppercase">SEDE OFICIAL</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest mt-0.5">LA PLATA, ARGENTINA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-left leading-relaxed">
            <div>
              <div className="font-bold text-[#c3a479] mb-1 uppercase tracking-wider">💫 TÓPICO A:</div>
              <p className="text-gray-400">Antropogénesis y origen del ser humano. Debates somatológicos frente al determinismo biológico europeo.</p>
            </div>
            <div>
              <div className="font-bold text-[#c3a479] mb-1 uppercase tracking-wider">💫 TÓPICO B:</div>
              <p className="text-gray-400">Rutas de poblamiento y teorías de la llegada del hombre a América. Desafíos a la hegemonía Beringia/Clovis.</p>
            </div>
          </div>
        </div>

        {/* -------------------- MAIN WORKSPACE PANEL -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT SECTION (7 cols): Route Navigation & Theory Board */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#130f0c] border border-[#c3a479]/25 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Compass className="w-48 h-48 text-[#c3a479]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#c3a479]/10 pb-3">
                <MapPin className="w-5 h-5 text-[#c3a479]" />
                <h3 className="text-base font-bold uppercase tracking-wider text-white">PLANIFICADOR DE RUTAS Y TEORÍAS (TÓPICO B)</h3>
              </div>

              {/* Route Map selector tab buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(migrationRoutes).map((routeId) => (
                  <button
                    key={routeId}
                    onClick={() => setActiveRoute(routeId)}
                    className={`px-4 py-2.5 rounded-xl border text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeRoute === routeId
                        ? 'bg-[#c3a479] text-[#0e0a07] border-[#c3a479] shadow-lg'
                        : 'bg-[#1a1410] border-[#c3a479]/20 text-[#c3a479]/75 hover:border-[#c3a479]/50 hover:text-white'
                    }`}
                  >
                    {routeId === 'bering' ? 'Beringia' : routeId === 'pacific' ? 'Ruta Pacífica' : 'Autoctonismo'}
                  </button>
                ))}
              </div>

              {/* Dynamic Typewriter Route Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoute}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1a1410] border border-[#c3a479]/10 rounded-2xl p-6 min-h-[220px] text-left"
                >
                  <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">
                    {migrationRoutes[activeRoute].name}
                  </h4>
                  <span className="text-[9px] text-[#c3a479] font-bold tracking-widest block uppercase mb-4">
                    PROPONENTE: {migrationRoutes[activeRoute].proponent}
                  </span>

                  <div className="space-y-4 text-xs leading-relaxed">
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-1">Evidencia Científica Recopilada</span>
                      <p className="text-gray-300 italic">"{migrationRoutes[activeRoute].evidence}"</p>
                    </div>

                    <div>
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-1">Descripción del Expediente</span>
                      <p className="text-gray-400">{migrationRoutes[activeRoute].description}</p>
                    </div>

                    <div className="border-t border-[#c3a479]/10 pt-3 mt-3">
                      <span className="text-[9px] text-red-400 font-bold uppercase tracking-widest block mb-1">Objeción del Debate (1935)</span>
                      <p className="text-red-300/80 font-serif italic text-xs leading-snug">{migrationRoutes[activeRoute].dissent}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-4 border-t border-[#c3a479]/10 text-[9px] text-gray-500 flex justify-between">
              <span>EXPLORADOR MIGRATORIO CORRELATIVO</span>
              <span>ICA REG. N° 4591</span>
            </div>
          </div>

          {/* RIGHT SECTION (5 cols): Vertical Stratigraphic Trench (Topic A) */}
          <div className="lg:col-span-5 flex flex-col bg-[#130f0c] border border-[#c3a479]/25 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6 border-b border-[#c3a479]/10 pb-3">
              <Layers className="w-5 h-5 text-[#c3a479]" />
              <h3 className="text-base font-bold uppercase tracking-wider text-white">TRINCHERA ESTRATIGRÁFICA (TÓPICO A)</h3>
            </div>

            <p className="text-[11px] leading-relaxed text-gray-400 mb-6 text-left">
              Haga clic en las distintas capas del suelo pampeano para examinar la antigüedad de los restos óseos y líticos excavados:
            </p>

            {/* Vertical Stratigraphic Column Visualizer */}
            <div className="flex flex-col gap-2 mb-6 flex-1 justify-between">
              {strataLayers.map((stratum, i) => {
                const colors = ['bg-[#5c493c]/80', 'bg-[#4a3a2f]/80', 'bg-[#3b2d24]/80', 'bg-[#2b1f17]/80'];
                const selectedColors = ['bg-[#c3a479] text-[#0e0a07]', 'bg-[#b69263] text-[#0e0a07]', 'bg-[#aa8150] text-[#0e0a07]', 'bg-[#9d703e] text-white'];
                const isActive = activeStratum === stratum.id;

                return (
                  <button
                    key={stratum.id}
                    onClick={() => setActiveStratum(stratum.id)}
                    className={`w-full py-4 px-4 rounded-xl border transition-all duration-300 flex justify-between items-center text-left ${
                      isActive
                        ? `${selectedColors[i]} border-white/20 shadow-xl scale-[1.02]`
                        : `${colors[i]} border-[#c3a479]/15 text-[#dfccb7]/80 hover:border-[#c3a479]/35 hover:text-white`
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono tracking-widest font-bold block">{stratum.depth}</span>
                      <span className="text-xs font-serif italic font-bold">{stratum.layerName}</span>
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase font-bold bg-black/20 px-2 py-0.5 rounded">
                      {stratum.age}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Deep Trench stratum description */}
            <div className="bg-[#1a1410] border border-[#c3a479]/10 rounded-2xl p-4 text-left text-xs leading-relaxed">
              <span className="text-[9px] text-[#c3a479] font-bold tracking-widest uppercase block mb-1">Restos extraídos en esta profundidad:</span>
              <p className="text-gray-300 italic mb-2">"{strataLayers[activeStratum - 1].findings}"</p>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-1">Conflicto Teórico:</span>
              <p className="text-gray-400">{strataLayers[activeStratum - 1].theories}</p>
            </div>

          </div>

        </div>

        {/* -------------------- LOWER SECTION: EVIDENCE CORKBOARD & SAFE -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Evidences Tray (Images a1, a2, a3) - 7 cols */}
          <div className="lg:col-span-7 bg-[#130f0c] border border-[#c3a479]/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#c3a479]/10 pb-3">
                <ImageIcon className="w-5 h-5 text-[#c3a479]" />
                <h3 className="text-base font-bold uppercase tracking-wider text-white">GABINETE DE FOTOGRAFÍA CIENTÍFICA</h3>
              </div>

              {/* Styled as antique polaroids or pinned plates */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { src: '/a1.jpg', title: "PLACA I: Miramar 1935", info: "Estratigrafía y percutores." },
                  { src: '/a2.jpg', title: "PLACA II: Cráneo Pampeano", info: "Toma craneométrica dolicocéfala." },
                  { src: '/a3.jpg', title: "PLACA III: Loess Lítico", info: "Marcas antrópicas en huesos." }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#ece2d0] p-3 rounded-lg border border-[#c3a479]/30 shadow-2xl transform rotate-[-1deg] hover:rotate-[1deg] hover:scale-105 transition-all duration-300 text-black font-serif"
                  >
                    <div className="w-full h-28 overflow-hidden bg-gray-200 border border-gray-400 mb-2">
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover filter sepia-[0.4] contrast-110 brightness-95" />
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] font-bold text-amber-950 block leading-tight">{item.title}</span>
                      <span className="font-mono text-[7px] text-gray-500 uppercase tracking-widest block mt-0.5">{item.info}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-[9px] text-gray-500">
              ★ PLACAS FOTOGRÁFICAS REGISTRADAS EN CAMPAÑA CON DATOS SOMATOLÓGICOS COMPLEMENTARIOS ★
            </div>
          </div>

          {/* Combination Safe Box (Easter Egg) - 5 cols */}
          <div className="lg:col-span-5 bg-[#16120e] border border-[#c3a479]/20 rounded-3xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-[#c3a479]/10 pb-3">
                <Lock className="w-5 h-5 text-[#c3a479]" />
                <h3 className="text-base font-bold uppercase tracking-wider text-white">CAJA FUERTE ANTIGUA: DIARIOS CLASIFICADOS</h3>
              </div>

              <p className="text-[11px] leading-relaxed text-gray-400 mb-6 text-left">
                Introduzca la palabra clave en el disco de combinación para abrir los diarios confidenciales de Ameghino intervenidos por comités europeos:
              </p>

              <form onSubmit={handleUnlockSafe} className="space-y-4">
                <input 
                  type="text"
                  placeholder="COMBINACIÓN (Clave)"
                  value={safeCombination}
                  onChange={(e) => setSafeCombination(e.target.value)}
                  className="w-full bg-[#201712] border border-[#c3a479]/20 rounded-xl px-4 py-3 text-center text-white font-mono tracking-widest focus:outline-none focus:border-[#c3a479] transition-all uppercase placeholder-[#c3a479]/30"
                />

                {safeError && (
                  <p className="text-[10px] text-red-500 font-mono tracking-wider text-center">{safeError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#701c1c] hover:bg-[#8f2828] text-white rounded-xl font-bold font-mono text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md border border-red-500/10"
                >
                  GIRAR DISCO DE SEGURIDAD
                </button>
              </form>
            </div>

            {/* Render decrypted letter inside the safe */}
            <AnimatePresence>
              {safeUnlocked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 rounded-xl bg-[#ece2d0] border border-[#c3a479] text-black text-[11px] font-serif text-left shadow-inner relative"
                >
                  <Unlock className="absolute top-2 right-2 w-4 h-4 text-emerald-700 animate-pulse" />
                  <span className="font-mono text-[8px] text-emerald-800 tracking-widest uppercase block mb-2 font-bold">✓ EXPEDIENTE DESENCRIPTADO:</span>
                  <p className="italic leading-relaxed text-amber-950">
                    "...Los comisionados de Alemania insisten en callar Miramar. Quieren fijar Beringia como ruta única para sostener que América es un continente vacío, sin prehistoria profunda, justificando biológicamente un ordenamiento colonial. Elymar teme que las muestras óseas sean incautadas al salir del congreso..."
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* -------------------- LOWER GENERAL NAVIGATION BOARD -------------------- */}
        <div className="max-w-5xl mx-auto p-8 rounded-[2rem] bg-[#16120e] border border-[#c3a479]/20 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <span className="font-mono text-[8px] text-[#c3a479] tracking-[0.3em] uppercase block mb-1">DIRECCIÓN GENERAL Y PROTOCOLOS</span>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">EXPEDIENTES CIENTÍFICOS OFICIALES ICA 1935</h4>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Wax seal invite for Conoce a tu mesa */}
            <button 
              onClick={() => setShowMesaModal(true)}
              className="px-6 py-3 border border-[#c3a479]/40 hover:border-[#c3a479] text-[#c3a479] hover:text-[#0e0a07] hover:bg-[#c3a479] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group"
            >
              <Users className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Diploma de la Mesa
            </button>

            {/* Academic Guide link */}
            <a 
              href="https://drive.google.com/file/d/1dyIhjMysc6BxSM_Bj14a_2E33jYlD8ys/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#701c1c] text-white hover:bg-[#8f2828] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group border border-red-500/20"
            >
              <FileText className="w-4 h-4 group-hover:scale-115 transition-transform" />
              Guía de Documentación
            </a>
          </div>
        </div>

      </div>

      {/* DIPLOMA CONOCE A TU MESA MODAL */}
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
              className="relative w-full max-w-lg rounded-[2.5rem] bg-[#ece2d0] border-[8px] border-[#382b21] p-8 text-black z-10 shadow-2xl select-text text-center font-serif"
            >
              {/* Paper background grid */}
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#30251c_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-[2rem]" />
              
              <button 
                onClick={() => setShowMesaModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-black z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <Landmark className="w-12 h-12 text-[#701c1c] mx-auto mb-4" />
              
              <span className="font-mono text-[9px] text-[#701c1c] tracking-[0.3em] uppercase block mb-1">DIPLOMA ACADÉMICO OFICIAL</span>
              <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6 border-b border-[#30251c]/15 pb-2">Mesa Directiva del Congreso</h3>

              <div className="space-y-6 text-center text-amber-950 font-serif leading-relaxed px-4">
                <div>
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-1">PRESIDENTE DE LA ASOCIACIÓN</span>
                  <h4 className="text-2xl font-black italic tracking-wide text-amber-950">Cataldo Querecia</h4>
                  <p className="text-[10px] font-mono text-gray-600 mt-1 uppercase tracking-widest">Delegado y Académico en Antropogenia Física</p>
                </div>

                <div className="w-24 h-[1px] bg-[#30251c]/15 mx-auto" />

                <div>
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-1">VICEPRESIDENTE DEL CONGRESO</span>
                  <h4 className="text-2xl font-black italic tracking-wide text-amber-950">Elymar Ledezma</h4>
                  <p className="text-[10px] font-mono text-gray-600 mt-1 uppercase tracking-widest">Coodinadora de Asuntos Americanistas y Logística</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#30251c]/10 font-mono text-[8px] text-gray-500">
                UNIVERSIDAD NACIONAL DE LA PLATA • ARGENTINA, NOVIEMBRE DE 1935
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, Globe, FileLock2, X, Download, Users } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Brics() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);
  const [showMesa, setShowMesa] = useState(false);
  const bgVideoRef = useRef(null);

  useEffect(() => {
    audioSystem.switchToBrics();
    
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(err => {
        console.warn("Background video autoplay blocked or failed:", err);
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
      }, 2500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const closeEasterEgg = () => {
    setEasterEggActive(false);
  };

  return (
    <section id="brics-section" className="min-h-screen relative bg-transparent text-white overflow-x-hidden pt-24 pb-32">
      
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#050505]">
        <video 
          ref={bgVideoRef}
          src="/ri.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-90 transition-opacity duration-1000"
          style={{ filter: 'brightness(0.7) contrast(1.1) saturate(1.2)' }}
          onEnded={() => {
            if (bgVideoRef.current) {
              bgVideoRef.current.currentTime = 0;
              bgVideoRef.current.play().catch(err => console.log("Bg video loop failed:", err));
            }
          }}
        />
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_100%)] z-10 opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header Block */}
        <div className="max-w-5xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div 
              className="w-full max-w-2xl md:max-w-4xl h-40 md:h-64 mb-8 cursor-pointer group relative flex items-center justify-center"
              onClick={() => setShowPasscode(true)}
              title="Soberanía Económica"
            >
              <div className="absolute inset-0 bg-[#c5a059]/10 rounded-full blur-3xl group-hover:bg-[#c5a059]/20 transition-all duration-500"></div>
              <img src="/brics_logo.png" alt="BRICS+ Logo" className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_0_20px_rgba(197,160,89,0.8)]" />
            </div>
            <p className="font-mono text-[#c5a059] tracking-[0.4em] uppercase text-sm md:text-base border-b border-[#c5a059]/30 pb-4 mb-8 text-center px-4">
              Alianza Estratégica Multilateral
            </p>

            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
              <span className="font-codec text-[10px] md:text-sm tracking-widest uppercase text-white/80">
                Tópico: Consolidación de los BRICS+: Fortalecimiento de la Cooperación del Sur Global para un Desarrollo Global Justo.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none font-codec font-light leading-relaxed text-gray-300"
            >
              <p className="text-xl md:text-2xl text-white font-maison leading-snug mb-8 border-l-4 border-[#c5a059] pl-6">
                El ascenso de los BRICS+ se presenta como el desafío definitivo al orden económico del Norte Global. Con una fuerza que ya representa el 30% del PIB mundial y supera el crecimiento anual del G7, el bloque busca consolidar un multilateralismo inclusivo que desplace la hegemonía del dólar. 
              </p>
              
              <p>
                Sin embargo, detrás de las cifras de expansión, emergen interrogantes que ponen en duda la cohesión real de esta alianza. Las tensiones geopolíticas entre China e India y las disputas históricas entre nuevos miembros como Egipto y Etiopía representan un riesgo latente para la estabilidad y el consenso del bloque.
              </p>

              <div className="my-10 grid grid-cols-2 gap-4">
                <img src="/b1.jpg" alt="Cumbre BRICS+" className="w-full h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-white/10" />
                <img src="/b3.jpg" alt="Alianza Global" className="w-full h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-white/10" />
              </div>

              <p>
                Del mismo modo, a pesar de los esfuerzos por sistemas como BRICS Pay, el dólar aún domina el 60% del comercio exterior. Los BRICS+ funcionan bajo una cooperación intergubernamental que a menudo dificulta la toma de decisiones, mientras lidian con la heterogeneidad de sus economías y sistemas políticos.
              </p>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl my-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059]"></div>
                <h3 className="font-maison text-2xl text-white mb-4">El Futuro del Sur Global</h3>
                <p className="mb-0 text-gray-400">
                  ¿Podrán los BRICS+ superar sus contradicciones internas y forjar un frente unido que reforme verdaderamente el sistema internacional, o quedarán reducidos a un foro de potencias emergentes con intereses divergentes? El reto ya no es solo expandirse, sino actuar como una fuerza cohesionada frente al orden mundial existente.
                </p>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Visuals & Modality */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#c5a059]/20 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe className="w-32 h-32 text-[#c5a059]" />
              </div>
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#c5a059] mb-2">Parámetros del Comité</h3>
              <div className="text-3xl font-maison font-bold text-white mb-6 uppercase">Modalidad y Ciclo</div>
              
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <div className="font-codec text-sm text-gray-400 uppercase tracking-wider">Formato Operativo</div>
                  <div className="font-bold text-xl text-white">Mixto / Individual</div>
                </div>
              </div>

              {/* Botones de Mesa Directiva y Documentos */}
              <div className="grid grid-cols-1 gap-4 mt-8">

                <button 
                  onClick={() => window.open('https://drive.google.com/file/d/1FL6KVkepPErWBNT9ZODT9QILWBpR6l2v/view?usp=sharing', '_blank')}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-[#c5a059]/10 border border-white/10 hover:border-[#c5a059]/50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/50 border border-white/5 rounded-lg group-hover:border-[#c5a059]/30 transition-colors">
                    <Download className="w-5 h-5 text-[#c5a059] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-[#c5a059] transition-colors">Reglamento de BRICS+</span>
                    <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">Ver Documento Oficial</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => setShowMesa(true)}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-[#c5a059]/10 border border-white/10 hover:border-[#c5a059]/50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/50 border border-white/5 rounded-lg group-hover:border-[#c5a059]/30 transition-colors">
                    <Users className="w-5 h-5 text-[#c5a059] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-[#c5a059] transition-colors">Mesa Directiva</span>
                    <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">Conoce a tu mesa</span>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Dynamic Image Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 h-full"
            >
              <div className="col-span-2 relative h-48 rounded-2xl overflow-hidden group">
                <img src="/b2.jpg" alt="BRICS Summit" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#c5a059] tracking-widest uppercase">Cumbre Histórica</div>
              </div>
              
              <div className="relative h-40 rounded-2xl overflow-hidden group">
                <img src="/b1.jpg" alt="Multilateralism" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale sepia-[0.3]" />
                <div className="absolute bottom-3 left-3">
                  <FileLock2 className="w-5 h-5 text-white/50" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative h-[4.5rem] rounded-xl overflow-hidden group">
                  <img src="/b3.jpg" alt="BRICS Leaders" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale" />
                </div>
                <div className="relative h-[4.5rem] rounded-xl overflow-hidden group">
                  <img src="/b2.jpg" alt="South Global" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Sleek bottom navigation bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-20 p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group hover:border-[#c5a059]/30 transition-all duration-500"
        >
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#c5a059]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="text-left">
            <span className="font-mono text-[9px] text-[#c5a059] tracking-[0.35em] uppercase block mb-1">Enlaces Oficiales</span>
            <h4 className="font-maison font-bold text-xl text-white">Recursos y Personal</h4>
          </div>
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button 
              onClick={() => setShowMesa(true)}
              className="flex-1 sm:flex-none px-6 py-3 bg-[#c5a059] text-black font-mono text-xs uppercase tracking-widest font-black rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-[#c5a059]/10"
            >
              Conoce a tu mesa
            </button>
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1FL6KVkepPErWBNT9ZODT9QILWBpR6l2v/view?usp=sharing', '_blank')}
              className="flex-1 sm:flex-none px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white font-mono text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300"
            >
              Reglamento
            </button>
          </div>
        </motion.div>

      </div>

      {/* --- EASTER EGG COMPONENTS --- */}

      {/* Passcode Modal */}
      <AnimatePresence>
        {showPasscode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl">
              <button 
                onClick={() => setShowPasscode(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col items-center text-center mb-8">
                <FileLock2 className="w-12 h-12 text-[#c5a059] mb-4" />
                <h2 className="font-mono text-xl text-white uppercase tracking-widest">Reserva Confidencial</h2>
                <p className="text-gray-500 text-sm mt-2 font-codec">Ingrese la clave para verificar el respaldo en oro.</p>
                <p className="text-gray-600 text-xs mt-4 italic bg-white/5 py-2 px-4 rounded border border-white/10">
                  PISTA:<br/>El acrónimo del bloque, el metal que lo respalda, o su método de pago.
                </p>
              </div>

              <form onSubmit={handlePasscodeSubmit} className="flex flex-col gap-4">
                <motion.input 
                  animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  type="password" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="CLAVE CONFIDENCIAL..."
                  className={`w-full bg-black border ${error ? 'border-red-500 text-red-500' : 'border-white/20 text-white'} rounded-xl px-4 py-4 font-mono text-center tracking-widest outline-none focus:border-[#c5a059] transition-colors`}
                  autoFocus
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-black font-mono font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-[#c5a059] hover:text-white transition-all"
                >
                  Desencriptar
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
            {/* Fake CRT/Glitch lines */}
            <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-50 z-10"></div>
            
            <motion.h1 
              animate={{ 
                x: [0, -5, 5, -5, 5, 0],
                opacity: [1, 0.8, 1, 0.5, 1],
                color: ['#ffffff', '#c5a059', '#ffffff']
              }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="font-maison text-5xl md:text-8xl font-black text-white uppercase tracking-tighter text-center z-20 mix-blend-difference"
            >
              SINCRONIZANDO<br/>RESERVA
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Document Reveal */}
      <AnimatePresence>
        {easterEggActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10001] bg-[#07090b] flex items-center justify-center p-6"
          >
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#c5a059]/30" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/30" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#c5a059]/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#c5a059]/30" />

            <div className="max-w-2xl w-full bg-[#0d1014] border border-[#c5a059]/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left font-mono">
              <button 
                onClick={closeEasterEgg}
                className="absolute top-6 right-6 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white p-3 rounded-full transition-all group"
              >
                <X className="w-5 h-5 group-hover:scale-115 transition-transform" />
              </button>

              <div className="flex items-center gap-3 mb-6 border-b border-[#c5a059]/20 pb-4">
                <Globe className="w-8 h-8 text-[#c5a059] animate-pulse" />
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none">TRATADO CONFIDENCIAL DE FORTALEZA</h3>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest block mt-1">SOVEREIGN GOLD LIQUIDITY DIRECTIVE</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-300 leading-relaxed max-h-[300px] overflow-y-auto pr-2 mb-6">
                <p className="font-bold text-[#c5a059] uppercase tracking-wider">SECCIÓN DE SEGURIDAD 12: ELIMINACIÓN DE SWIFT</p>
                <p>
                  1. Las partes contratantes acuerdan de forma unánime e irrevocable que toda liquidación transfronteriza de commodities clave se realizará exclusivamente utilizando sistemas de compensación BRICS Pay y activos digitales respaldados en oro físico depositados en el Nuevo Banco de Desarrollo (NDB).
                </p>
                <p>
                  2. La compensación a través de sistemas controlados por el dólar estadounidense queda estrictamente clasificada como un canal secundario sujeto a aranceles de contingencia en caso de que existan presiones ideológicas de Occidente.
                </p>
                <p>
                  3. Las reservas de divisas nacionales se diversificarán gradualmente para igualar el coeficiente de peso del oro de Fortaleza, garantizando la paridad inalterable de los balances soberanos de cada miembro firmante.
                </p>
              </div>

              <button 
                onClick={closeEasterEgg}
                className="w-full bg-[#c5a059] hover:bg-white text-black font-bold text-xs uppercase py-3 rounded-xl transition-all"
              >
                CERRAR TRATADO CLASIFICADO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mesa Directiva Modal Popup */}
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
              className="w-full max-w-2xl bg-[#0a0a0c] border border-[#c5a059]/30 rounded-[2.5rem] p-8 md:p-10 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Gold trim lines */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#c5a059]" />
              <div className="absolute inset-2 border border-[#c5a059]/10 rounded-[2.2rem] pointer-events-none" />

              <button 
                onClick={() => setShowMesa(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white rounded-full flex items-center justify-center transition-all duration-300 z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-6 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-2xl flex items-center justify-center text-[#c5a059]">
                <Users className="w-8 h-8" />
              </div>

              <h3 className="font-maison text-3xl font-extrabold text-white uppercase tracking-tight mb-2">
                MESA DIRECTIVA
              </h3>
              <p className="font-mono text-[10px] text-[#c5a059] tracking-[0.35em] uppercase mb-8 border-b border-white/10 pb-4">
                Cumbre BRICS+ 2026
              </p>

              {/* Members Dossier Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
                {/* Presidente Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#c5a059]/30 transition-all duration-300">
                  <span className="font-mono text-[8px] text-[#c5a059] tracking-[0.2em] uppercase block mb-1">Presidente</span>
                  <h4 className="font-maison font-bold text-xl text-white group-hover:text-[#c5a059] transition-colors">Christian La Cruz</h4>
                  <div className="w-8 h-[1px] bg-white/10 mx-auto my-3 group-hover:bg-[#c5a059]/30 transition-colors" />
                  <p className="text-[10px] text-gray-500 font-codec leading-relaxed">Presidencia y moderación formal del foro diplomático del Sur Global.</p>
                </div>

                {/* Vicepresidente Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#c5a059]/30 transition-all duration-300">
                  <span className="font-mono text-[8px] text-[#c5a059] tracking-[0.2em] uppercase block mb-1">Vicepresidente</span>
                  <h4 className="font-maison font-bold text-xl text-white group-hover:text-[#c5a059] transition-colors">Joel Rodriguez</h4>
                  <div className="w-8 h-[1px] bg-white/10 mx-auto my-3 group-hover:bg-[#c5a059]/30 transition-colors" />
                  <p className="text-[10px] text-gray-500 font-codec leading-relaxed">Copresidencia y supervisión logística de deliberaciones multilaterales.</p>
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

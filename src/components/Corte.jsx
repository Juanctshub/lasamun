import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, Gavel, FileLock2, X, Download, Users } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Corte() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the jeffrey.mp3 audio
    audioSystem.switchToCorte();
    // App.jsx handles the audio transitions when leaving, so no cleanup needed here
  }, []);

  // Easter Egg Logic
  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    const normalized = passcode.trim().toUpperCase();
    if (normalized === 'MAXWELL' || normalized === 'EPSTEIN' || normalized === 'CONFIDENCIAL') {
      // Access granted
      setError(false);
      setShowPasscode(false);
      setAccessGranted(true);
      
      // Stop the normal jeffrey track for the video audio
      audioSystem.pauseAll();

      setTimeout(() => {
        setAccessGranted(false);
        setEasterEggActive(true);
      }, 2500); // Glitch screen duration
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // shake effect
    }
  };

  const closeEasterEgg = () => {
    setEasterEggActive(false);
    audioSystem.switchToCorte(); // resume jeffrey.mp3
  };

  return (
    <section id="corte-section" className="min-h-screen relative bg-transparent text-white overflow-x-hidden pt-24 pb-32">
      
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-60"
          style={{ filter: 'blur(3px) brightness(0.6)' }}
        >
          <source src="/fondo.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_100%)] z-10 opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header Block */}
        <div className="max-w-4xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div 
              className="w-36 h-36 mb-6 cursor-pointer group relative flex items-center justify-center"
              onClick={() => setShowPasscode(true)} // Hidden trigger
              title="¿Buscando la verdad?"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-xl group-hover:bg-[#D4AF37]/30 transition-all duration-500"></div>
              <img src="/corte.svg" alt="Corte Logo" className="w-32 h-32 relative z-10 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
            </div>

            <h1 className="font-maison text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#D4AF37]/70 drop-shadow-lg">
              Corte Federal
            </h1>
            <p className="font-mono text-[#D4AF37] tracking-[0.4em] uppercase text-sm md:text-base border-b border-[#D4AF37]/30 pb-4 mb-8">
              Distrito Sur de Nueva York (2021)
            </p>

            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-codec text-sm tracking-widest uppercase text-white/80">Tópico: Caso de Ghislaine Maxwell</span>
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
              <p className="text-xl md:text-2xl text-white font-maison leading-snug mb-8 border-l-4 border-[#D4AF37] pl-6">
                Ghislaine Maxwell, socialité británica e hija del magnate de medios Robert Maxwell, se posiciona hoy como la pieza ejecutiva y logística fundamental en la red de tráfico sexual de Jeffrey Epstein.
              </p>
              
              <p>
                Su rol fue determinante, no solo como reclutora de menores, a quienes captaba aprovechando su estatus y vulnerabilidad, sino también como la facilitadora que conectaba este sistema de abusos con figuras influyentes de la política y la realeza. Tras años de impunidad y el polémico suicidio de Epstein, Maxwell fue capturada y condenada en el año 2021, marcando un hito judicial que expuso la cara más oscura de la élite.
              </p>
              
              <div className="my-10 grid grid-cols-2 gap-4">
                <img src="/g1.webp" alt="Evidence 1" className="w-full h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-white/10" />
                <img src="/g2.jpg" alt="Evidence 2" className="w-full h-48 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-white/10" />
              </div>

              <p>
                El proceso ante la Corte Federal del Distrito Sur de Nueva York expone una estructura criminal de alta sofisticación que utilizó la legitimidad socioeconómica como un escudo operativo. El problema central en este punto del proceso reside en el desafío histórico de romper el círculo de impunidad que protege a las figuras de alto estatus.
              </p>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl my-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                <h3 className="font-maison text-2xl text-white mb-4">El Veredicto Pendiente</h3>
                <p className="mb-0 text-gray-400">
                  ¿Se convertirá el juicio contra Maxwell en el primer golpe real contra la infraestructura del tráfico de influencias, o terminará siendo una demostración de que el poder económico sigue siendo un refugio inexpugnable ante la ley?
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
              className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gavel className="w-32 h-32 text-[#D4AF37]" />
              </div>
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#D4AF37] mb-2">Parámetros del Comité</h3>
              <div className="text-3xl font-maison font-bold text-white mb-6 uppercase">Modalidad y Ciclo</div>
              
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-codec text-sm text-gray-400 uppercase tracking-wider">Formato Operativo</div>
                  <div className="font-bold text-xl text-white">Mixto / Individual</div>
                </div>
              </div>

              {/* Botones de Mesa Directiva y Guia Academica */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                <button 
                  onClick={() => window.alert('Guía Académica en desarrollo...')}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-[#D4AF37]/10 border border-white/10 hover:border-[#D4AF37]/50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/50 border border-white/5 rounded-lg group-hover:border-[#D4AF37]/30 transition-colors">
                    <Download className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-[#D4AF37] transition-colors">Guía Académica</span>
                    <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">Descargar Documento</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => window.alert('Mesa Directiva será anunciada pronto...')}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-[#D4AF37]/10 border border-white/10 hover:border-[#D4AF37]/50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="p-3 bg-black/50 border border-white/5 rounded-lg group-hover:border-[#D4AF37]/30 transition-colors">
                    <Users className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-white uppercase group-hover:text-[#D4AF37] transition-colors">Mesa Directiva</span>
                    <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">Personal del Tribunal</span>
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
                <img src="/g3.jpg" alt="Maxwell Case" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#D4AF37] tracking-widest uppercase">Exhibit A - SDNY</div>
              </div>
              
              <div className="relative h-40 rounded-2xl overflow-hidden group">
                <img src="/g4.avif" alt="Maxwell Case" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale sepia-[0.3]" />
                <div className="absolute bottom-3 left-3">
                  <FileLock2 className="w-5 h-5 text-white/50" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative h-[4.5rem] rounded-xl overflow-hidden group">
                  <img src="/g5.avif" alt="Maxwell Case" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale" />
                </div>
                <div className="relative h-[4.5rem] rounded-xl overflow-hidden group">
                  <img src="/g5.jpg" alt="Maxwell Case" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
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
                <FileLock2 className="w-12 h-12 text-red-500 mb-4" />
                <h2 className="font-mono text-xl text-white uppercase tracking-widest">Acceso Restringido</h2>
                <p className="text-gray-500 text-sm mt-2 font-codec">Ingrese la clave de acceso para desencriptar el expediente.</p>
                <p className="text-gray-600 text-xs mt-4 italic bg-white/5 py-2 px-4 rounded border border-white/10">
                  PISTA:<br/>El apellido de quien orquestó todo o de su facilitadora principal.
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
                  className={`w-full bg-black border ${error ? 'border-red-500 text-red-500' : 'border-white/20 text-white'} rounded-xl px-4 py-4 font-mono text-center tracking-widest outline-none focus:border-[#D4AF37] transition-colors`}
                  autoFocus
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-black font-mono font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-[#D4AF37] hover:text-white transition-all"
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
            className="fixed inset-0 z-[10000] bg-red-900 flex items-center justify-center overflow-hidden"
          >
            {/* Fake CRT/Glitch lines */}
            <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-50 z-10"></div>
            
            <motion.h1 
              animate={{ 
                x: [0, -5, 5, -5, 5, 0],
                opacity: [1, 0.8, 1, 0.5, 1],
                color: ['#ffffff', '#ff0000', '#ffffff']
              }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="font-maison text-5xl md:text-8xl font-black text-white uppercase tracking-tighter text-center z-20 mix-blend-difference"
            >
              Información<br/>Confidencial
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Video Player */}
      <AnimatePresence>
        {easterEggActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10001] bg-black flex items-center justify-center"
          >
            <button 
              onClick={closeEasterEgg}
              className="absolute top-6 right-6 z-[10002] bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 p-3 rounded-full transition-all group"
            >
              <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <video 
              ref={videoRef}
              src="/easter.mp4" 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
              onEnded={closeEasterEgg} // Automatically close when done
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

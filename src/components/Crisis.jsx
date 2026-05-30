import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, Download, ShieldAlert, Crosshair, Users, X, Database, Globe, Activity, Terminal } from 'lucide-react';

// 3D Tilt Card Component
const TiltCard = ({ title, text, icon: Icon, color, bgImage, delay }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 1200 }}
      className="w-full relative h-[420px] cursor-crosshair group"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#050508]"
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity duration-700"
          style={{ backgroundImage: `url(${bgImage})`, transform: "translateZ(-50px) scale(1.1)" }}
        />
        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" style={{ transform: "translateZ(-20px)" }} />
        
        {/* Content Layer */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ transform: "translateZ(60px)" }}>
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-black/60 backdrop-blur-md border" style={{ borderColor: `${color}50`, color: color }}>
            <Icon className="w-6 h-6 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <h3 className="font-maison text-3xl font-extrabold uppercase text-white mb-3 tracking-wide drop-shadow-md">
            {title}
          </h3>
          <p className="font-codec text-sm text-white/70 leading-relaxed font-light drop-shadow-md">
            {text}
          </p>
        </div>
        
        {/* Glowing Edge Border on Hover */}
        <div className="absolute inset-0 border-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ borderColor: color, transform: "translateZ(1px)" }} />
      </motion.div>
    </motion.div>
  );
};

export default function Crisis() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="crisis" className="pt-24 pb-32 bg-[#020204] relative overflow-hidden min-h-screen text-white selection:bg-[#ff007f] selection:text-white">
      
      {/* Immersive 3D Grid & Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ perspective: "1000px" }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [transform:rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-40 origin-top" />
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#ff007f]/10 rounded-full blur-[250px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#7928CA]/15 rounded-full blur-[250px] pointer-events-none z-0 mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* MASSIVE HERO SECTION */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Glitch text overlay effect */}
            <h1 className="font-maison text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-extrabold tracking-tighter uppercase leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 relative z-10 drop-shadow-[0_0_30px_rgba(255,0,127,0.3)]">
              KRAKEN
            </h1>
            <h1 className="absolute top-0 left-[-4px] font-maison text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-extrabold tracking-tighter uppercase leading-[0.8] text-[#ff007f] opacity-50 mix-blend-screen z-0 animate-pulse">
              KRAKEN
            </h1>
            <h1 className="absolute top-0 left-[4px] font-maison text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-extrabold tracking-tighter uppercase leading-[0.8] text-[#7928CA] opacity-50 mix-blend-screen z-0">
              KRAKEN
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-[#ff007f] bg-[#ff007f]/10 border border-[#ff007f]/30 px-6 py-2 rounded-full flex items-center gap-3 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,127,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#ff007f] animate-ping" />
              Syndicate Gateway Open
            </div>
            <div className="font-codec text-sm text-white/50 tracking-widest flex items-center gap-3 uppercase">
              <Globe className="w-4 h-4 text-[#7928CA]" /> Modalidad: Mixto / Individual
            </div>
          </motion.div>
        </div>

        {/* 3D EXPERIMENTAL DOSSIERS */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-maison text-3xl md:text-5xl uppercase font-bold tracking-tight">Expedientes Clasificados</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TiltCard 
              title="El Colapso de Hydra"
              text="Hace solo unos años Alemania y EE.UU. incautaron los servidores de Hydra, decomisando 543 bitcoins y deteniendo la venta de ilícitos en Rusia. Ahora, el vacío de poder ha desatado el caos."
              icon={Database}
              color="#7928CA"
              bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
              delay={0.1}
            />
            <TiltCard 
              title="Kraken vs Mega"
              text="Kraken busca consolidarse como el heredero absoluto del monopolio, pero la llegada emergente de Mega ha desatado una ciberguerra sin precedentes por el control de la red."
              icon={Crosshair}
              color="#ff007f"
              bgImage="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800"
              delay={0.3}
            />
            <TiltCard 
              title="La Paradoja del Kremlin"
              text="El gobierno ruso tolera indirectamente estos mercados porque mueven inmensas cantidades de criptomonedas, evadiendo sanciones internacionales, haciendo el problema casi imparable."
              icon={ShieldAlert}
              color="#10B981"
              bgImage="https://images.unsplash.com/photo-1541888062868-8091176b6638?q=80&w=800"
              delay={0.5}
            />
          </div>
        </div>

        {/* TACTICAL COMMAND CENTER */}
        <div className="bg-[#0a0a0f] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          {/* Cyber Lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #7928CA 0, #7928CA 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* The Central Question */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full font-mono text-[10px] text-white/50 tracking-widest uppercase">
                <Terminal className="w-3 h-3 text-[#ff007f]" /> Directiva Central
              </div>
              <h3 className="font-maison text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold leading-none mb-6">
                El Monopolio <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#7928CA]">¿Vale el Riesgo?</span>
              </h3>
              <p className="font-codec text-lg text-white/60 font-light max-w-xl mx-auto lg:mx-0">
                ¿Mantenemos el frágil duopolio con Mega, o destruimos a la competencia arriesgando la ira total del gobierno y la intervención extranjera?
              </p>
            </div>

            {/* Action Buttons Matrix */}
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <button onClick={() => setActiveModal('guia')} className="group relative bg-[#050508] border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-[#ff007f] transition-colors duration-500 flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-[#ff007f]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="w-8 h-8 text-white/40 group-hover:text-[#ff007f] mb-4 transition-colors" />
                <span className="font-maison text-xl uppercase font-bold">Guía Académica</span>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-2 group-hover:text-[#ff007f]/70">Descarga Segura</span>
              </button>

              <button onClick={() => setActiveModal('reglamento')} className="group relative bg-[#050508] border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-[#7928CA] transition-colors duration-500 flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-[#7928CA]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <FileText className="w-8 h-8 text-white/40 group-hover:text-[#7928CA] mb-4 transition-colors" />
                <span className="font-maison text-xl uppercase font-bold">Reglamento</span>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-2 group-hover:text-[#7928CA]/70">Reglas Crisis</span>
              </button>

              <button onClick={() => setActiveModal('mesa')} className="col-span-2 group relative bg-gradient-to-r from-[#ff007f]/20 to-[#7928CA]/20 border border-[#ff007f]/30 p-8 rounded-3xl overflow-hidden hover:border-[#ff007f] transition-all duration-500 flex items-center justify-between">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-14 h-14 bg-black/50 border border-[#ff007f]/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-[#ff007f]" />
                  </div>
                  <div className="text-left">
                    <span className="block font-maison text-2xl uppercase font-bold text-white mb-1">Directorio de Mesa</span>
                    <span className="block font-mono text-[10px] text-white/60 uppercase tracking-widest">Inspeccionar Expedientes de Crisis</span>
                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* OVERLAYS & MODALS (Reusing the sleek ones we had) */}
      <AnimatePresence>
        {activeModal === 'guia' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-md w-full bg-[#050508] border border-white/10 rounded-[2rem] p-10 text-center relative overflow-hidden shadow-[0_0_100px_rgba(255,0,127,0.2)]"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff007f] to-[#7928CA]" />
              <Download className="w-16 h-16 text-[#ff007f] mx-auto mb-6 animate-bounce" />
              <h3 className="font-maison text-3xl uppercase font-bold mb-3">Descarga Segura</h3>
              <p className="font-codec text-base text-white/50 mb-10 leading-relaxed">El dossier académico encriptado (.PDF) se descargará pronto. Asegure su conexión Tor antes de abrir.</p>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-full py-4 rounded-full bg-white/10 hover:bg-white/20 font-mono text-xs uppercase tracking-[0.2em] transition-colors border border-white/10 hover:border-white/30"
              >
                Cerrar Terminal
              </button>
            </motion.div>
          </motion.div>
        )}

        {activeModal === 'reglamento' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-2xl w-full max-h-[85vh] bg-slate-950/80 border border-white/10 rounded-[2rem] flex flex-col overflow-hidden relative shadow-[0_20px_100px_rgba(121,40,202,0.3)] backdrop-blur-3xl"
            >
              <div className="p-8 border-b border-white/10 flex justify-between items-center bg-black/60 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7928CA] to-transparent" />
                <div className="flex items-center gap-4">
                  <FileText className="w-8 h-8 text-[#7928CA]" />
                  <h3 className="font-maison text-2xl uppercase font-bold tracking-wide">Reglamento del Comité</h3>
                </div>
                <button onClick={() => setActiveModal(null)} className="p-3 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-10 overflow-y-auto font-codec text-base text-white/60 leading-relaxed font-light custom-scrollbar">
                <p className="mb-6">El Comité de Crisis operará bajo reglas de procedimiento especializadas, diseñadas para simular el entorno acelerado y de alta tensión del mercado ilícito y el contraespionaje internacional.</p>
                <ul className="list-disc pl-6 flex flex-col gap-4 mb-10 text-white/80">
                  <li><strong>Acciones de Crisis (Directivas):</strong> Los delegados podrán emitir directivas públicas, privadas y encubiertas.</li>
                  <li><strong>Portafolios Individuales:</strong> Cada delegado cuenta con recursos específicos dentro de la Federación Rusa.</li>
                  <li><strong>Sesiones No Moderadas Constantes:</strong> El flujo del comité requerirá negociaciones subterráneas continuas.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeModal === 'mesa' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <div className="max-w-6xl w-full relative">
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute -top-16 right-0 md:top-0 md:-right-20 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/50 hover:text-white transition-all z-20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-16">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#ff007f] font-bold">Classified Profiles</span>
                <h3 className="font-maison text-4xl md:text-6xl uppercase font-extrabold mt-4 tracking-tight drop-shadow-xl">Directorio de Crisis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { name: "Andrés Rodríguez", role: "Director de Crisis", code: "LSM-KRAKEN-01", color: "#ff007f", sig: "M 15 50 Q 30 20 45 40 T 70 30 T 95 60 T 130 35 T 160 50" },
                  { name: "Valeria Gómez", role: "Coordinadora Int.", code: "LSM-KRAKEN-02", color: "#7928CA", sig: "M 15 35 Q 40 65 60 25 T 90 40 T 120 20 T 150 55" }
                ].map((mesa, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                    className="bg-slate-950/80 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col group hover:border-white/20 transition-all"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundColor: mesa.color }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.4)_50%)] pointer-events-none opacity-30 bg-[size:100%_4px]" />
                    
                    <div className="flex justify-between items-start mb-10 relative z-10">
                      <div>
                        <h4 className="font-maison text-3xl font-bold uppercase tracking-wide">{mesa.name}</h4>
                        <span className="font-mono text-[11px] uppercase tracking-widest mt-2 block font-bold" style={{ color: mesa.color }}>{mesa.role}</span>
                      </div>
                      <span className="font-mono text-[9px] text-white/40 border border-white/10 px-3 py-1.5 rounded-md bg-black/60 shadow-inner">{mesa.code}</span>
                    </div>

                    <div className="w-full flex-1 border-t border-dashed border-white/10 mt-auto pt-8 relative z-10 flex flex-col justify-end">
                      <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em] mb-4">Firma Digital Registrada</span>
                      <div className="h-24 w-full bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/[0.04] transition-colors">
                        <svg viewBox="0 0 180 80" className="w-[80%] h-[80%] opacity-90 drop-shadow-[0_0_8px_currentColor]" style={{ color: mesa.color }}>
                          <motion.path 
                            d={mesa.sig} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.5 + (idx * 0.2) }}
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

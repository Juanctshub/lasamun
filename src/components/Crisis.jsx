import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, Crosshair, Users, X, Database, Globe, Activity, Terminal, Lock } from 'lucide-react';

const TerminalBlock = ({ title, subtitle, text, icon: Icon, color, delay, span = 1 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.6 }}
    className={`bg-[#050508]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-[${color}]/50 transition-colors ${span === 2 ? 'md:col-span-2' : ''}`}
  >
    {/* Tech scanline background */}
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }} />
    
    {/* Glowing accent top line */}
    <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />

    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-black/50 border rounded-lg" style={{ borderColor: `${color}30` }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <h3 className="font-mono text-sm tracking-[0.2em] uppercase text-white/50 mb-1">{subtitle}</h3>
          <h2 className="font-maison text-2xl font-bold text-white uppercase tracking-wide">{title}</h2>
        </div>
      </div>
      <Lock className="w-4 h-4 text-white/20" />
    </div>

    <p className="font-codec text-white/60 leading-relaxed font-light text-sm md:text-base pr-4">
      {text}
    </p>

    {/* Decorative dots */}
    <div className="absolute bottom-4 right-4 flex gap-1">
      <div className="w-1 h-1 rounded-full bg-white/20" />
      <div className="w-1 h-1 rounded-full bg-white/20" />
      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
    </div>
  </motion.div>
);

export default function Crisis() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="crisis" className="pt-24 pb-32 bg-[#020204] relative overflow-hidden min-h-screen text-white selection:bg-[#ff007f] selection:text-white">
      
      {/* Immersive 3D Grid & Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ perspective: "1000px" }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-40 origin-top" />
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#ff007f]/10 rounded-full blur-[250px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#7928CA]/10 rounded-full blur-[250px] pointer-events-none z-0 mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* MASSIVE HERO SECTION */}
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center mb-16">
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
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-[#ff007f] bg-[#ff007f]/5 border border-[#ff007f]/20 px-6 py-2 rounded-full flex items-center gap-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff007f] animate-ping" />
              Syndicate Gateway Open
            </div>
            <div className="font-codec text-sm text-white/50 tracking-widest flex items-center gap-3 uppercase">
              <Globe className="w-4 h-4 text-[#7928CA]" /> Modalidad: Mixto / Individual
            </div>
          </motion.div>
        </div>

        {/* DASHBOARD: TERMINAL DATA BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <TerminalBlock 
            subtitle="Expediente 01"
            title="El Colapso de Hydra"
            text="Hace solo unos años Alemania y EE.UU. incautaron los servidores de Hydra, decomisando 543 bitcoins y deteniendo la venta de ilícitos en Rusia. El cierre del mercado cibernético más grande de la federación ha desatado un vacío de poder caótico y sumamente lucrativo."
            icon={Database}
            color="#7928CA"
            delay={0.1}
            span={2}
          />
          <TerminalBlock 
            subtitle="Expediente 02"
            title="Kraken vs Mega"
            text="Kraken busca consolidarse como el heredero absoluto del monopolio, pero la llegada emergente de Mega ha frenado sus ansias, desatando una ciberguerra interna sin precedentes."
            icon={Crosshair}
            color="#ff007f"
            delay={0.3}
          />
          <TerminalBlock 
            subtitle="Expediente 03"
            title="La Paradoja del Kremlin"
            text="Existen tensiones internas. El gobierno ruso tolera indirectamente estos mercados porque mueven inmensas cantidades de criptomonedas, evadiendo sanciones internacionales."
            icon={ShieldAlert}
            color="#10B981"
            delay={0.5}
            span={3}
          />
        </div>

        {/* TACTICAL COMMAND CENTER */}
        <div className="bg-[#050508] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* The Central Question */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6 bg-[#ff007f]/10 text-[#ff007f] px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase border border-[#ff007f]/20">
                <Terminal className="w-3 h-3" /> Directiva Central
              </div>
              <h3 className="font-maison text-4xl lg:text-5xl uppercase font-extrabold leading-tight mb-4">
                El Monopolio <br/> <span className="text-[#7928CA]">¿Vale el Riesgo?</span>
              </h3>
              <p className="font-codec text-base text-white/50 font-light max-w-xl mx-auto lg:mx-0">
                ¿Mantenemos el frágil duopolio con Mega, o destruimos a la competencia arriesgando la ira total del gobierno y la intervención extranjera? Selecciona un protocolo para proceder.
              </p>
            </div>

            {/* Action Buttons Matrix */}
            <div className="flex-1 w-full flex flex-col gap-4">
              <button onClick={() => setActiveModal('guia')} className="group flex items-center justify-between w-full bg-white/5 border border-white/10 hover:border-[#ff007f]/50 p-6 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-black/50 border border-white/5 rounded-lg group-hover:border-[#ff007f]/30 transition-colors">
                    <Download className="w-5 h-5 text-white/60 group-hover:text-[#ff007f]" />
                  </div>
                  <div className="text-left">
                    <span className="block font-maison text-xl uppercase font-bold text-white group-hover:text-[#ff007f] transition-colors">Guía Académica</span>
                    <span className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Descarga Segura Encriptada</span>
                  </div>
                </div>
                <Activity className="w-5 h-5 text-white/10 group-hover:text-[#ff007f] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button onClick={() => setActiveModal('reglamento')} className="group flex items-center justify-between w-full bg-white/5 border border-white/10 hover:border-[#7928CA]/50 p-6 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-black/50 border border-white/5 rounded-lg group-hover:border-[#7928CA]/30 transition-colors">
                    <FileText className="w-5 h-5 text-white/60 group-hover:text-[#7928CA]" />
                  </div>
                  <div className="text-left">
                    <span className="block font-maison text-xl uppercase font-bold text-white group-hover:text-[#7928CA] transition-colors">Reglamento</span>
                    <span className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Procedimientos de Crisis</span>
                  </div>
                </div>
                <Activity className="w-5 h-5 text-white/10 group-hover:text-[#7928CA] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button onClick={() => setActiveModal('mesa')} className="group flex items-center justify-between w-full bg-white/5 border border-white/10 hover:border-white/30 p-6 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-black/50 border border-white/5 rounded-lg group-hover:border-white/20 transition-colors">
                    <Users className="w-5 h-5 text-white/60 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <span className="block font-maison text-xl uppercase font-bold text-white transition-colors">Directorio de Mesa</span>
                    <span className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Inspeccionar Expedientes</span>
                  </div>
                </div>
                <Activity className="w-5 h-5 text-white/10 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
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
              className="max-w-md w-full bg-[#050508] border border-[#ff007f]/20 rounded-2xl p-10 text-center relative overflow-hidden shadow-[0_0_100px_rgba(255,0,127,0.15)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff007f] to-[#7928CA]" />
              <Download className="w-12 h-12 text-[#ff007f] mx-auto mb-6 animate-bounce" />
              <h3 className="font-maison text-2xl uppercase font-bold mb-3">Descarga Segura</h3>
              <p className="font-codec text-sm text-white/50 mb-10 leading-relaxed">El dossier académico encriptado (.PDF) se descargará pronto. Asegure su conexión Tor antes de abrir.</p>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 font-mono text-xs uppercase tracking-[0.2em] transition-colors border border-white/10 hover:border-white/20"
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
              className="max-w-2xl w-full max-h-[85vh] bg-[#050508] border border-[#7928CA]/20 rounded-2xl flex flex-col overflow-hidden relative shadow-[0_20px_100px_rgba(121,40,202,0.15)]"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7928CA] to-transparent" />
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-[#7928CA]" />
                  <h3 className="font-maison text-xl uppercase font-bold tracking-wide">Reglamento del Comité</h3>
                </div>
                <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-white/10 rounded-md transition-colors text-white/50 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto font-codec text-sm text-white/60 leading-relaxed font-light custom-scrollbar">
                <p className="mb-6">El Comité de Crisis operará bajo reglas de procedimiento especializadas, diseñadas para simular el entorno acelerado y de alta tensión del mercado ilícito y el contraespionaje internacional.</p>
                <ul className="list-disc pl-5 flex flex-col gap-3 text-white/70">
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
            <div className="max-w-5xl w-full relative">
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute -top-12 right-0 md:-top-16 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/50 hover:text-white transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#ff007f] font-bold">Classified Profiles</span>
                <h3 className="font-maison text-3xl md:text-5xl uppercase font-extrabold mt-4 tracking-tight">Directorio de Crisis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Andrés Rodríguez", role: "Director de Crisis", code: "LSM-KRAKEN-01", color: "#ff007f", sig: "M 15 50 Q 30 20 45 40 T 70 30 T 95 60 T 130 35 T 160 50" },
                  { name: "Valeria Gómez", role: "Coordinadora Int.", code: "LSM-KRAKEN-02", color: "#7928CA", sig: "M 15 35 Q 40 65 60 25 T 90 40 T 120 20 T 150 55" }
                ].map((mesa, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                    className="bg-[#050508] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-all"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full opacity-50" style={{ backgroundColor: mesa.color }} />
                    
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div>
                        <h4 className="font-maison text-2xl font-bold uppercase tracking-wide">{mesa.name}</h4>
                        <span className="font-mono text-[10px] uppercase tracking-widest mt-1 block font-bold" style={{ color: mesa.color }}>{mesa.role}</span>
                      </div>
                      <span className="font-mono text-[9px] text-white/40 border border-white/10 px-2 py-1 rounded bg-black/60">{mesa.code}</span>
                    </div>

                    <div className="w-full border-t border-dashed border-white/10 pt-6 relative z-10">
                      <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em] mb-3 block">Firma Digital</span>
                      <div className="h-16 w-full flex items-center">
                        <svg viewBox="0 0 180 80" className="h-full opacity-70" style={{ color: mesa.color }}>
                          <motion.path 
                            d={mesa.sig} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 + (idx * 0.1) }}
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

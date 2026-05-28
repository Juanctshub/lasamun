import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, Crosshair, Users, X, Database, Globe, Activity, Eye } from 'lucide-react';

// Custom Animated Stats Meter
const StatMeter = ({ label, value, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col gap-2 w-full"
  >
    <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">
      <span>{label}</span>
      <span style={{ color }}>{value}%</span>
    </div>
    <div className="w-full h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden relative">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full shadow-[0_0_10px_currentColor]"
        style={{ backgroundColor: color, color: color }}
      />
    </div>
  </motion.div>
);

// Dynamic Image Card Component
const DossierCard = ({ title, icon: Icon, text, color, imgUrl, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative bg-black/40 border border-white/10 rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-end p-8 cursor-pointer"
  >
    {/* Background Image that fades in on hover */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"
      style={{ backgroundImage: `url(${imgUrl})` }}
    />
    
    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent" />
    
    {/* Colored Edge Highlight */}
    <div className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: color }} />

    <div className="relative z-10 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/60 border" style={{ borderColor: `${color}40`, color: color }}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-maison text-2xl md:text-3xl font-bold text-white uppercase tracking-wide group-hover:text-white transition-colors">
          {title}
        </h3>
      </div>
      <p className="font-codec text-sm md:text-base text-white/60 leading-relaxed font-light group-hover:text-white/90 transition-colors">
        {text}
      </p>
      
      <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: color }}>
        <Eye className="w-3 h-3" />
        <span>Archivo Desclasificado</span>
      </div>
    </div>
  </motion.div>
);

export default function Crisis() {
  const [activeModal, setActiveModal] = useState(null);

  const mesaDirectiva = [
    {
      id: 1,
      name: "Andrés Rodríguez",
      role: "Director de Crisis",
      code: "LSM-KRAKEN-01",
      color: "#ff007f",
      signature: "M 15 50 Q 30 20 45 40 T 70 30 T 95 60 T 130 35 T 160 50"
    },
    {
      id: 2,
      name: "Valeria Gómez",
      role: "Coordinadora de Inteligencia",
      code: "LSM-KRAKEN-02",
      color: "#7928CA",
      signature: "M 15 35 Q 40 65 60 25 T 90 40 T 120 20 T 150 55"
    }
  ];

  return (
    <section id="crisis" className="pt-28 pb-48 bg-[#050508] relative overflow-hidden text-white min-h-screen">
      
      {/* Immersive Main Background (Abstract Tech Pattern) */}
      <div 
        className="absolute inset-0 opacity-[0.15] bg-cover bg-center pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-[#050508] to-[#050508] pointer-events-none" />

      {/* Cybernetic Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-[#ff007f]/10 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-[#7928CA]/10 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* HERO HEADER */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#ff007f]/40"></div>
            <span className="font-mono text-[#ff007f] text-[10px] uppercase tracking-[0.4em] font-extrabold px-4 py-1.5 rounded-full border border-[#ff007f]/30 bg-[#ff007f]/10 backdrop-blur-md">
              Clearance: Syndicate Level
            </span>
            <div className="w-12 h-[1px] bg-[#ff007f]/40"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-maison text-[3rem] sm:text-[5rem] md:text-[6.5rem] font-extrabold tracking-tight uppercase mb-6 leading-none drop-shadow-2xl"
          >
            MERCADO ILÍCITO <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] via-[#7928CA] to-[#ff007f] animate-pulse">KRAKEN</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 mt-4 border border-white/10 px-8 py-3 rounded-full bg-black/60 backdrop-blur-xl shadow-2xl"
          >
            <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#ff007f]" /> Dark Web</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-[#7928CA]" /> Modalidad: Mixto / Individual</span>
          </motion.div>
        </div>

        {/* DOSSIER GRID (Dynamic Images instead of just text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <DossierCard 
            title="El Colapso de Hydra"
            icon={Database}
            color="#7928CA"
            delay={0.1}
            imgUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
            text="Hace solo unos años Alemania, en conjunto con EE.UU., lograron incautar los servidores de Hydra, el mercado ilícito cibernético más grande de Rusia, decomisando 543 bitcoins y deteniendo la venta de drogas y armas. En la actualidad, el panorama ha cambiado drásticamente."
          />
          <DossierCard 
            title="Kraken vs Mega"
            icon={Crosshair}
            color="#ff007f"
            delay={0.2}
            imgUrl="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop"
            text="Kraken se ha consolidado como heredero de Hydra. Sin embargo, la consolidación de Mega como uno de los mayores mercados emergentes ha frenado las ansias de Kraken para establecer un monopolio. Enfrentan tensiones internas y amenazas internacionales contundentes."
          />
          <DossierCard 
            title="La Paradoja del Kremlin"
            icon={ShieldAlert}
            color="#10B981"
            delay={0.3}
            imgUrl="https://images.unsplash.com/photo-1541888062868-8091176b6638?q=80&w=800&auto=format&fit=crop"
            text="El gobierno ruso sabe que Kraken y Mega son un peligro. Pero estas plataformas mueven inmensas cantidades de criptomonedas que ayudan a eludir sanciones internacionales. Esta 'tolerancia' estatal ha permitido que el problema crezca hasta volverse casi imparable."
          />
        </div>

        {/* BOTTOM SECTION: Central Problem & Actions */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Central Problem (Glitch/Neon Banner) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 flex flex-col"
          >
            <div className="bg-gradient-to-br from-[#ff007f]/20 via-black to-[#7928CA]/10 border border-[#ff007f]/40 rounded-[2.5rem] p-10 md:p-14 shadow-[0_0_50px_rgba(255,0,127,0.15)] relative overflow-hidden h-full flex flex-col justify-center">
              {/* Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.4)_50%)] pointer-events-none opacity-50" style={{ backgroundSize: '100% 4px' }}></div>
              
              <div className="relative z-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#ff007f] font-bold mb-4 block flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff007f] animate-ping" />
                  El Problema Central
                </span>
                <p className="font-maison text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase">
                  ¿Vale la pena mantener el duopolio, o destruirán a la competencia para establecerse como el monopolio absoluto del mercado ilícito?
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Stats & Action Buttons */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            
            {/* Telemetry Stats HUD */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col gap-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7928CA]/10 rounded-full blur-3xl"></div>
              
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Syndicate Telemetry</h4>
                <Activity className="w-4 h-4 text-white/30 animate-pulse" />
              </div>
              
              <StatMeter label="Kraken Market Share" value={58} color="#ff007f" delay={0.2} />
              <StatMeter label="Mega Emerging Control" value={42} color="#7928CA" delay={0.4} />
              <StatMeter label="State Tolerance Index" value={85} color="#10B981" delay={0.6} />
            </motion.div>

            {/* Tactical Action Buttons (Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setActiveModal('guia')}
                className="bg-white/[0.03] hover:bg-white/10 border border-white/10 hover:border-[#ff007f]/50 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center group h-32"
              >
                <Download className="w-8 h-8 text-white/40 group-hover:text-[#ff007f] group-hover:-translate-y-1 transition-all mb-3" />
                <span className="font-maison text-lg uppercase font-bold tracking-wide">Guía</span>
              </button>

              <button 
                onClick={() => setActiveModal('reglamento')}
                className="bg-white/[0.03] hover:bg-white/10 border border-white/10 hover:border-[#7928CA]/50 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center group h-32"
              >
                <FileText className="w-8 h-8 text-white/40 group-hover:text-[#7928CA] group-hover:-translate-y-1 transition-all mb-3" />
                <span className="font-maison text-lg uppercase font-bold tracking-wide">Reglamento</span>
              </button>

              <button 
                onClick={() => setActiveModal('mesa')}
                className="col-span-2 bg-gradient-to-r from-[#ff007f]/10 to-[#7928CA]/10 hover:from-[#ff007f]/20 hover:to-[#7928CA]/20 border border-[#ff007f]/30 transition-all duration-300 rounded-2xl p-6 flex items-center justify-between group shadow-[0_0_20px_rgba(255,0,127,0.15)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/60 border border-[#ff007f]/50 flex items-center justify-center text-[#ff007f] group-hover:scale-110 group-hover:bg-[#ff007f] group-hover:text-white transition-all">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-maison text-xl uppercase font-bold tracking-wide text-white">¿Quién es mi Mesa?</span>
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* OVERLAYS & MODALS */}
      <AnimatePresence>
        
        {/* Guia Academica Modal / Notification */}
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

        {/* Reglamento Modal */}
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
                  <li><strong>Acciones de Crisis (Directivas):</strong> Los delegados podrán emitir directivas públicas, privadas y encubiertas para alterar el curso del mercado, sobornar funcionarios o atacar servidores rivales.</li>
                  <li><strong>Portafolios Individuales:</strong> Cada delegado cuenta con recursos y contactos específicos dentro de la Federación Rusa o la red internacional.</li>
                  <li><strong>Sesiones No Moderadas Constantes:</strong> El flujo del comité requerirá negociaciones subterráneas continuas en foros anónimos.</li>
                </ul>
                <div className="p-6 rounded-2xl bg-[#7928CA]/10 border border-[#7928CA]/30 text-[#7928CA] font-mono text-xs uppercase tracking-widest text-center shadow-[0_0_20px_rgba(121,40,202,0.1)]">
                  El reglamento oficial completo se publicará en el Dossier Académico.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ¿Quien es mi Mesa? Modal (Dossiers) */}
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
                {mesaDirectiva.map((mesa, idx) => (
                  <motion.div 
                    key={mesa.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                    className="bg-slate-950/80 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col group hover:border-white/20 transition-all"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundColor: mesa.color }} />
                    
                    {/* Dark web scanlines */}
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
                            d={mesa.signature}
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 + (idx * 0.2) }}
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

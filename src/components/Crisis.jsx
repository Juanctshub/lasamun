import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, Crosshair, Users, X, Database, Globe, Activity } from 'lucide-react';

// Custom Animated Stats Meter
const StatMeter = ({ label, value, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col gap-2 w-full"
  >
    <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest text-white/50">
      <span>{label}</span>
      <span style={{ color }}>{value}%</span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
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

export default function Crisis() {
  const [activeModal, setActiveModal] = useState(null); // 'guia', 'reglamento', 'mesa'

  // Committee Directors Data
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
      
      {/* Dark Web Ambience Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff007f]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#7928CA]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px] z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#ff007f]/40"></div>
            <span className="font-mono text-[#ff007f] text-[9px] uppercase tracking-[0.35em] font-extrabold px-3 py-1 rounded-full border border-[#ff007f]/20 bg-[#ff007f]/10">
              Clearance: Syndicate Level
            </span>
            <div className="w-8 h-[1px] bg-[#ff007f]/40"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-maison text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-extrabold tracking-tight uppercase mb-4 leading-none"
          >
            MERCADO ILÍCITO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#7928CA]">KRAKEN</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mt-4 border border-white/10 px-6 py-2 rounded-full bg-black/50"
          >
            <span className="flex items-center gap-2"><Globe className="w-3 h-3 text-[#ff007f]" /> Dark Web</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-[#7928CA]" /> Modalidad: Mixto / Individual</span>
          </motion.div>
        </div>

        {/* Two Column Layout: Narrative Briefing (Left) vs HUD Stats (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20">
          
          {/* LEFT COLUMN: Classified Briefing Narrative */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#7928CA] to-transparent opacity-50" />
              <h3 className="font-maison text-2xl font-bold text-white mb-3 uppercase tracking-wide flex items-center gap-3">
                <Database className="w-5 h-5 text-[#7928CA]" /> El Colapso de Hydra
              </h3>
              <p className="font-codec text-sm text-white/60 leading-relaxed font-light">
                Hace solo unos años Alemania, en conjunto con Estados Unidos, lograron incautar los servidores de Hydra, el mercado ilícito cibernético más grande de toda la Federación Rusa, decomisando 543 bitcoins (alrededor de 25.000.000 de dólares) y parando la venta de drogas, documentos falsificados y armas dentro de todo el país. En la actualidad, el panorama ha cambiado drásticamente.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#ff007f] to-transparent opacity-50" />
              <h3 className="font-maison text-2xl font-bold text-white mb-3 uppercase tracking-wide flex items-center gap-3">
                <Crosshair className="w-5 h-5 text-[#ff007f]" /> Surgimiento de Kraken vs Mega
              </h3>
              <p className="font-codec text-sm text-white/60 leading-relaxed font-light">
                Kraken se ha consolidado como la organización ilícita heredera del mercado de Hydra. Sin embargo, enfrentan amenazas contundentes: la consolidación de <strong>Mega</strong> como uno de los mayores mercados emergentes ha frenado las ansias de Kraken para establecerse como el monopolio del ciberdelito en Rusia. Además, no solo cuentan con tensiones internas por el gobierno ruso, sino también por fuerzas internacionales similares a las que desmantelaron Hydra.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#10B981] to-transparent opacity-50" />
              <h3 className="font-maison text-2xl font-bold text-white mb-3 uppercase tracking-wide flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-[#10B981]" /> La Paradoja del Kremlin
              </h3>
              <p className="font-codec text-sm text-white/60 leading-relaxed font-light">
                El gobierno ruso se encuentra en una posición complicada. Por un lado, saben que Kraken y Mega son un peligro público. Por otro lado, estas plataformas mueven cantidades inmensas de criptomonedas que ayudan a que el dinero siga fluyendo en el país a pesar de las sanciones internacionales. Esta "tolerancia" del Estado ha permitido que el problema crezca hasta volverse casi imposible de detener.
              </p>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Action Buttons & Stats HUD */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            
            {/* The Central Problem Banner (Glowing) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#ff007f]/20 to-black border border-[#ff007f]/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,127,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%)] pointer-events-none opacity-30" style={{ backgroundSize: '100% 4px' }}></div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#ff007f] font-bold mb-3 block">El Problema Central</span>
              <p className="font-maison text-2xl font-extrabold text-white leading-tight">
                ¿Vale la pena mantener el duopolio, o destruirán a la competencia para establecerse como el monopolio absoluto del mercado ilícito?
              </p>
            </motion.div>

            {/* Telemetry Stats HUD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black/50 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col gap-6"
            >
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-3">Syndicate Telemetry</h4>
              <StatMeter label="Kraken Market Share" value={58} color="#ff007f" delay={0.4} />
              <StatMeter label="Mega Emerging Control" value={42} color="#7928CA" delay={0.6} />
              <StatMeter label="State Tolerance Index" value={85} color="#10B981" delay={0.8} />
            </motion.div>

            {/* Tactical Action Buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <button 
                onClick={() => setActiveModal('guia')}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ff007f]/50 transition-all duration-300 rounded-2xl p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-[#ff007f] group-hover:text-[#ff007f] transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                  <span className="font-maison text-lg uppercase font-bold tracking-wide">Guía Académica</span>
                </div>
                <span className="font-mono text-[8px] text-white/30 tracking-widest uppercase group-hover:text-[#ff007f]/70">Download .PDF</span>
              </button>

              <button 
                onClick={() => setActiveModal('reglamento')}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#7928CA]/50 transition-all duration-300 rounded-2xl p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-[#7928CA] group-hover:text-[#7928CA] transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-maison text-lg uppercase font-bold tracking-wide">Reglamento</span>
                </div>
                <span className="font-mono text-[8px] text-white/30 tracking-widest uppercase group-hover:text-[#7928CA]/70">View Charter</span>
              </button>

              <button 
                onClick={() => setActiveModal('mesa')}
                className="w-full bg-gradient-to-r from-[#ff007f]/10 to-[#7928CA]/10 hover:from-[#ff007f]/20 hover:to-[#7928CA]/20 border border-[#ff007f]/30 transition-all duration-300 rounded-2xl p-4 flex items-center justify-between group shadow-[0_0_15px_rgba(255,0,127,0.1)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/60 border border-[#ff007f]/50 flex items-center justify-center text-[#ff007f] group-hover:scale-110 transition-transform">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="font-maison text-lg uppercase font-bold tracking-wide">¿Quién es mi Mesa?</span>
                </div>
                <span className="font-mono text-[8px] text-[#ff007f]/70 tracking-widest uppercase">Inspect Dossiers</span>
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
            className="fixed inset-0 z-[3000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-md w-full bg-[#050508] border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff007f] to-[#7928CA]" />
              <Download className="w-12 h-12 text-[#ff007f] mx-auto mb-4 animate-bounce" />
              <h3 className="font-maison text-2xl uppercase font-bold mb-2">Iniciando Descarga Segura</h3>
              <p className="font-codec text-sm text-white/50 mb-8">El dossier académico encriptado (.PDF) se descargará pronto. Asegure su conexión Tor antes de abrir.</p>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 font-mono text-[10px] uppercase tracking-widest transition-colors"
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
            className="fixed inset-0 z-[3000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-2xl w-full max-h-[80vh] bg-slate-950 border border-white/10 rounded-3xl flex flex-col overflow-hidden relative shadow-[0_20px_60px_rgba(121,40,202,0.15)]"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#7928CA]" />
                  <h3 className="font-maison text-xl uppercase font-bold tracking-wide">Reglamento del Comité</h3>
                </div>
                <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto font-codec text-sm text-white/60 leading-relaxed font-light custom-scrollbar">
                <p className="mb-4">El Comité de Crisis operará bajo reglas de procedimiento especializadas, diseñadas para simular el entorno acelerado y de alta tensión del mercado ilícito y el contraespionaje internacional.</p>
                <ul className="list-disc pl-5 flex flex-col gap-3 mb-6">
                  <li><strong>Acciones de Crisis (Directivas):</strong> Los delegados podrán emitir directivas públicas, privadas y encubiertas para alterar el curso del mercado, sobornar funcionarios o atacar servidores rivales.</li>
                  <li><strong>Portafolios Individuales:</strong> Cada delegado cuenta con recursos y contactos específicos dentro de la Federación Rusa o la red internacional.</li>
                  <li><strong>Sesiones No Moderadas Constantes:</strong> El flujo del comité requerirá negociaciones subterráneas continuas.</li>
                </ul>
                <div className="p-4 rounded-xl bg-[#7928CA]/10 border border-[#7928CA]/30 text-[#7928CA] font-mono text-[10px] uppercase tracking-widest text-center">
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
            <div className="max-w-5xl w-full relative">
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute -top-12 right-0 md:top-0 md:-right-16 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/50 hover:text-white transition-all z-20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff007f] font-bold">Classified Profiles</span>
                <h3 className="font-maison text-3xl md:text-5xl uppercase font-extrabold mt-2 tracking-tight">Directorio de Crisis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mesaDirectiva.map((mesa, idx) => (
                  <motion.div 
                    key={mesa.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                    className="bg-slate-950/80 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl flex flex-col"
                  >
                    {/* Dark web scanlines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.3)_50%)] pointer-events-none opacity-30 bg-[size:100%_4px]" />
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div>
                        <h4 className="font-maison text-2xl font-bold uppercase">{mesa.name}</h4>
                        <span className="font-mono text-[9px] uppercase tracking-widest mt-1 block" style={{ color: mesa.color }}>{mesa.role}</span>
                      </div>
                      <span className="font-mono text-[8px] text-white/30 border border-white/10 px-2 py-1 rounded bg-black/50">{mesa.code}</span>
                    </div>

                    <div className="w-full flex-1 border-t border-dashed border-white/10 mt-auto pt-6 relative z-10 flex flex-col justify-end">
                      <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest mb-2">Firma Digital Registrada</span>
                      <div className="h-16 w-full bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-center">
                        <svg viewBox="0 0 180 80" className="w-[80%] h-[80%] opacity-90 drop-shadow-[0_0_5px_currentColor]" style={{ color: mesa.color }}>
                          <motion.path 
                            d={mesa.signature}
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
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

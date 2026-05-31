import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, Crosshair, Users, X, Database, Globe, Activity, Terminal, Lock, Cpu, Server, WifiOff } from 'lucide-react';

const TerminalBlock = ({ title, subtitle, text, icon: Icon, color, image, delay, span = 1 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.6 }}
    className={`bg-[#050508]/90 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,127,0.1)] ${span === 2 ? 'md:col-span-2' : ''}`}
  >
    {/* Background Image with Darknet Filter */}
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20 group-hover:opacity-40 transition-opacity duration-700 filter contrast-125 grayscale"
        style={{ backgroundImage: `url(${image})` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/90 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,127,0.03)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none" />
    </div>
    
    {/* Glowing accent top line */}
    <div className="absolute top-0 left-0 w-full h-[3px] opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-10" style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }} />

    <div className="relative z-10 flex justify-between items-start mb-8">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-black/60 border rounded-xl backdrop-blur-md transition-colors" style={{ borderColor: `${color}40` }}>
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <div>
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-white/50 mb-1 flex items-center gap-2">
            <Cpu className="w-3 h-3 text-white/30" /> {subtitle}
          </h3>
          <h2 className="font-maison text-2xl md:text-3xl font-bold text-white uppercase tracking-wide drop-shadow-md">{title}</h2>
        </div>
      </div>
      <Lock className="w-5 h-5 text-white/20" />
    </div>

    <p className="relative z-10 font-codec text-white/70 leading-relaxed font-light text-sm md:text-base pr-4 border-l-2 pl-4" style={{ borderColor: `${color}40` }}>
      {text}
    </p>

    {/* Decorative Elements */}
    <div className="absolute bottom-6 right-6 flex gap-2 z-10">
      <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">Encrypted</div>
      <div className="w-1.5 h-1.5 rounded-full mt-1.5 animate-pulse" style={{ backgroundColor: color }} />
    </div>
  </motion.div>
);

export default function Crisis() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="crisis" className="pt-24 pb-32 bg-[#020204] relative overflow-hidden min-h-screen text-white selection:bg-[#ff007f] selection:text-white">
      
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50"
        >
          <source src="/2.mp4" type="video/mp4" />
        </video>
        {/* Dark Black Gradient Overlay over the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020204]/90 via-[#020204]/70 to-[#020204] z-10" />
      </div>

      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ perspective: "1000px" }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-60 origin-top" />
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#ff007f]/15 rounded-full blur-[250px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#7928CA]/20 rounded-full blur-[250px] pointer-events-none z-0 mix-blend-screen" />

      {/* WARNING TAPE DECORATION */}
      <div className="absolute top-20 left-0 w-full overflow-hidden whitespace-nowrap z-0 opacity-10 bg-[#ff007f] transform -rotate-2 py-1 flex items-center justify-center font-mono text-black font-bold tracking-widest uppercase">
        RESTRICTED AREA • DARKNET MARKETPLACE KRAKEN • UNAUTHORIZED ACCESS PROHIBITED • RESTRICTED AREA • DARKNET MARKETPLACE KRAKEN • UNAUTHORIZED ACCESS PROHIBITED • RESTRICTED AREA
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* MASSIVE HERO SECTION */}
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center mb-16 relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* ASCII DECORATION BEHIND TEXT */}
            <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 font-mono text-[10px] text-[#ff007f]/30 leading-none text-left pointer-events-none whitespace-pre opacity-50">
{`    ▄█   ▄█▄    █▀▄▀█   ▄█    █▀▄▀█ 
    ██ ▄▀  ██   ██ ██  ██     ██ ██ 
    ███    ██ ▄ ██ ██  ██ ▄   ██ ██ 
    ██     ██   ██ ██  ██     ██ ██ `}
            </div>

            {/* Glitch text overlay effect */}
            <h1 className="font-maison text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-extrabold tracking-tighter uppercase leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 relative z-10 drop-shadow-[0_0_40px_rgba(255,0,127,0.4)]">
              KRAKEN
            </h1>
            <h1 className="absolute top-0 left-[-6px] font-maison text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-extrabold tracking-tighter uppercase leading-[0.8] text-[#ff007f] opacity-50 mix-blend-screen z-0 animate-pulse">
              KRAKEN
            </h1>
            <h1 className="absolute top-0 left-[6px] font-maison text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-extrabold tracking-tighter uppercase leading-[0.8] text-[#7928CA] opacity-50 mix-blend-screen z-0">
              KRAKEN
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-black font-bold bg-[#ff007f] px-6 py-2 rounded-sm flex items-center gap-3 shadow-[0_0_30px_rgba(255,0,127,0.4)]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Syndicate Gateway Open
            </div>
            <div className="font-codec text-sm text-white/50 tracking-widest flex items-center gap-3 uppercase bg-white/5 px-6 py-2 rounded-sm border border-white/10 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-[#7928CA]" /> Modalidad: Mixto / Individual
            </div>
          </motion.div>
        </div>

        {/* DASHBOARD: TERMINAL DATA BLOCKS WITH DEEP WEB IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <TerminalBlock 
            subtitle="Expediente 01"
            title="El Colapso de Hydra"
            text="Hace solo unos años Alemania y EE.UU. incautaron los servidores de Hydra, decomisando 543 bitcoins y deteniendo la venta de ilícitos en Rusia. El cierre del mercado cibernético más grande de la federación ha desatado un vacío de poder caótico y sumamente lucrativo."
            icon={Server}
            color="#7928CA"
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
            delay={0.1}
            span={2}
          />
          <TerminalBlock 
            subtitle="Expediente 02"
            title="Kraken vs Mega"
            text="Kraken busca consolidarse como el heredero absoluto del monopolio, pero la llegada emergente de Mega ha frenado sus ansias, desatando una ciberguerra interna sin precedentes."
            icon={Crosshair}
            color="#ff007f"
            image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800"
            delay={0.3}
          />
          <TerminalBlock 
            subtitle="Expediente 03"
            title="La Paradoja del Kremlin"
            text="Existen tensiones internas. El gobierno ruso tolera indirectamente estos mercados porque mueven inmensas cantidades de criptomonedas, evadiendo sanciones internacionales."
            icon={ShieldAlert}
            color="#10B981"
            image="https://images.unsplash.com/photo-1541888062868-8091176b6638?q=80&w=800"
            delay={0.5}
            span={3}
          />
        </div>

        {/* TACTICAL COMMAND CENTER */}
        <div className="bg-[#050508]/80 backdrop-blur-xl border-t border-b border-[#ff007f]/20 py-16 px-8 md:px-16 relative overflow-hidden shadow-[0_0_100px_rgba(255,0,127,0.05)]">
          
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510511459019-5efa3cd4aafb?q=80&w=1200')] bg-cover bg-center mix-blend-overlay opacity-5 grayscale" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            
            {/* The Central Question */}
            <div className="flex-1 text-center lg:text-left relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#ff007f] opacity-50 rounded-full" />
              <div className="inline-flex items-center gap-2 mb-6 bg-[#ff007f]/10 text-[#ff007f] px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase border border-[#ff007f]/20">
                <Terminal className="w-3 h-3" /> Execute Protocol
              </div>
              <h3 className="font-maison text-4xl lg:text-5xl md:text-[3.5rem] uppercase font-extrabold leading-[1.1] mb-6 drop-shadow-lg">
                El Monopolio <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#7928CA]">¿Vale el Riesgo?</span>
              </h3>
              <p className="font-codec text-lg text-white/60 font-light max-w-xl mx-auto lg:mx-0">
                ¿Mantenemos el frágil duopolio con Mega, o destruimos a la competencia arriesgando la ira total del gobierno y la intervención extranjera? Selecciona un protocolo.
              </p>
            </div>

            {/* Action Buttons Matrix */}
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onClick={() => setActiveModal('guia')} className="group flex flex-col items-start justify-between w-full bg-black/50 border border-white/10 hover:border-[#ff007f] p-8 rounded-2xl transition-all duration-300 relative overflow-hidden min-h-[160px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff007f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="w-8 h-8 text-[#ff007f] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-left relative z-10">
                  <span className="block font-maison text-2xl uppercase font-bold text-white group-hover:text-[#ff007f] transition-colors">Guía Académica</span>
                  <span className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Descarga Encriptada</span>
                </div>
              </button>

              <button onClick={() => window.open('https://drive.google.com/file/d/1s-wQDVaB28la1m1Sjc6BNwtKvpIo897a/view?usp=sharing', '_blank')} className="group flex flex-col items-start justify-between w-full bg-black/50 border border-white/10 hover:border-[#7928CA] p-8 rounded-2xl transition-all duration-300 relative overflow-hidden min-h-[160px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7928CA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FileText className="w-8 h-8 text-[#7928CA] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-left relative z-10">
                  <span className="block font-maison text-2xl uppercase font-bold text-white group-hover:text-[#7928CA] transition-colors">Reglamento</span>
                  <span className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Reglas de Crisis (Drive)</span>
                </div>
              </button>

              <button onClick={() => setActiveModal('mesa')} className="md:col-span-2 group flex items-center justify-between w-full bg-[#ff007f]/10 border border-[#ff007f]/30 hover:bg-[#ff007f]/20 hover:border-[#ff007f] p-8 rounded-2xl transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-black/50 border border-[#ff007f]/50 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,0,127,0.2)]">
                    <Users className="w-6 h-6 text-[#ff007f]" />
                  </div>
                  <div className="text-left">
                    <span className="block font-maison text-3xl uppercase font-bold text-white">Directorio de Mesa</span>
                    <span className="block font-mono text-xs text-white/60 uppercase tracking-[0.2em] mt-1">Inspeccionar Expedientes de Directorio</span>
                  </div>
                </div>
                <Activity className="w-6 h-6 text-[#ff007f] opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

          </div>
        </div>

        {/* PLATAFORMA KRAKEN LINKS */}
        <div className="mt-24 mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-maison text-3xl md:text-5xl uppercase font-bold tracking-tight">Plataforma Kraken</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff007f]/50 to-transparent" />
          </div>
          <p className="font-codec text-lg text-white/60 mb-12 max-w-4xl leading-relaxed font-light">
            Acceso al portal clasificado para la gestión logística de distribución e ideología del sindicato. Los siguientes documentos proporcionan las normativas, los flujos comerciales y los procedimientos necesarios para operar dentro de la red profunda de Kraken sin dejar rastros en la superficie.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://drive.google.com/file/d/1XtGZbWHhhmXP6nr7eec4LjBipLkF5bUL/view?usp=sharing" 
              target="_blank" rel="noreferrer"
              className="group bg-[#050508]/80 backdrop-blur-md border border-white/10 hover:border-[#ff007f]/50 p-8 rounded-2xl transition-all duration-500 relative overflow-hidden shadow-[0_0_30px_rgba(255,0,127,0.05)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff007f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-[#ff007f]/10 rounded-lg w-min mb-6 group-hover:bg-[#ff007f]/20 transition-colors">
                <FileText className="w-6 h-6 text-[#ff007f]" />
              </div>
              <h4 className="font-maison text-xl font-bold uppercase mb-2 group-hover:text-[#ff007f] transition-colors">Reglamento de Plataforma KRAKEN</h4>
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">Acceder a la directiva</span>
            </a>

            <a 
              href="https://drive.google.com/file/d/1nVMP02VBF8trqK-mXifhvElupogpdt5l/view?usp=drive_link" 
              target="_blank" rel="noreferrer"
              className="group bg-[#050508]/80 backdrop-blur-md border border-white/10 hover:border-[#7928CA]/50 p-8 rounded-2xl transition-all duration-500 relative overflow-hidden shadow-[0_0_30px_rgba(121,40,202,0.05)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#7928CA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-[#7928CA]/10 rounded-lg w-min mb-6 group-hover:bg-[#7928CA]/20 transition-colors">
                <Activity className="w-6 h-6 text-[#7928CA]" />
              </div>
              <h4 className="font-maison text-xl font-bold uppercase mb-2 group-hover:text-[#7928CA] transition-colors">Proceso de Pedidos</h4>
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">Acceder a la directiva</span>
            </a>

            <a 
              href="https://drive.google.com/file/d/102xrKYiB4X5NRhLVAEJCWu7UeYCyWc7n/view?usp=drive_link" 
              target="_blank" rel="noreferrer"
              className="group bg-[#050508]/80 backdrop-blur-md border border-white/10 hover:border-white/50 p-8 rounded-2xl transition-all duration-500 relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-white/5 rounded-lg w-min mb-6 group-hover:bg-white/10 transition-colors">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-maison text-xl font-bold uppercase mb-2 group-hover:text-white transition-colors">Memorandum Ideológico</h4>
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">Acceder a la directiva</span>
            </a>
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
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-md w-full bg-[#050508] border border-[#ff007f]/40 rounded-2xl p-10 text-center relative overflow-hidden shadow-[0_0_150px_rgba(255,0,127,0.3)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff007f] to-[#7928CA]" />
              <Download className="w-14 h-14 text-[#ff007f] mx-auto mb-6 animate-bounce" />
              <h3 className="font-maison text-3xl uppercase font-bold mb-3 tracking-wide">Descarga Segura</h3>
              <p className="font-codec text-sm text-white/50 mb-10 leading-relaxed">El dossier académico encriptado (.PDF) se descargará pronto. Asegure su conexión Tor antes de abrir.</p>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-full py-4 rounded-lg bg-white/5 hover:bg-white/10 font-mono text-xs uppercase tracking-[0.3em] transition-colors border border-white/10 hover:border-[#ff007f]/50 text-white hover:text-[#ff007f]"
              >
                [ Cerrar Terminal ]
              </button>
            </motion.div>
          </motion.div>
        )}



        {activeModal === 'mesa' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <div className="max-w-6xl w-full relative">
              <button 
                onClick={() => setActiveModal(null)}
                className="fixed top-6 right-6 p-3 bg-black/80 hover:bg-[#ff007f]/30 border border-[#ff007f]/50 rounded-full text-white hover:text-white transition-all z-50 shadow-[0_0_20px_rgba(255,0,127,0.3)] backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-12 mt-8">
                <span className="font-mono text-xs uppercase tracking-[0.5em] text-[#ff007f] font-bold">Classified Profiles</span>
                <h3 className="font-maison text-3xl md:text-5xl uppercase font-extrabold mt-4 tracking-tighter drop-shadow-2xl">Directorio de Crisis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Juan Méndez", role: "Presidente", code: "KRAKEN-PRES", color: "#ff007f", sig: "M 15 50 Q 30 20 45 40 T 70 30 T 95 60 T 130 35 T 160 50" },
                  { name: "Gabriel Rodríguez", role: "Vicepresidente", code: "KRAKEN-VP", color: "#7928CA", sig: "M 15 35 Q 40 65 60 25 T 90 40 T 120 20 T 150 55" },
                  { name: "Luis Mariano", role: "Head Crisis Staff", code: "STAFF-HEAD", color: "#10B981", sig: "M 20 40 Q 50 10 70 50 T 110 30 T 150 45" },
                  { name: "Raul Aveledo", role: "Co Crisis Staff", code: "STAFF-CO", color: "#F59E0B", sig: "M 10 60 Q 40 20 80 50 T 120 40 T 160 30" }
                ].map((mesa, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                    className="bg-black/60 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-white/30 transition-all backdrop-blur-md shadow-2xl"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full shadow-[0_0_30px_currentColor]" style={{ backgroundColor: mesa.color, color: mesa.color }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20" />
                    
                    <div className="flex justify-between items-start mb-10 relative z-10">
                      <div>
                        <h4 className="font-maison text-3xl font-bold uppercase tracking-wide">{mesa.name}</h4>
                        <span className="font-mono text-[11px] uppercase tracking-widest mt-2 block font-bold" style={{ color: mesa.color }}>{mesa.role}</span>
                      </div>
                      <span className="font-mono text-[10px] text-white/50 border border-white/20 px-3 py-1.5 rounded bg-black shadow-inner">{mesa.code}</span>
                    </div>

                    <div className="w-full border-t border-dashed border-white/20 pt-8 relative z-10">
                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mb-4 block">Firma Digital Registrada</span>
                      <div className="h-24 w-full flex items-center bg-black/50 rounded-xl border border-white/5 px-4">
                        <svg viewBox="0 0 180 80" className="h-full w-full opacity-80" style={{ color: mesa.color }}>
                          <motion.path 
                            d={mesa.sig} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
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

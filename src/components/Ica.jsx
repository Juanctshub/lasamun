import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ShieldAlert, BookOpen, Compass, Key, Lock, Unlock, Users, ChevronRight, HelpCircle, X, Award } from 'lucide-react';
import audioSystem from '../utils/audioSystem';

export default function Ica() {
  const [activeFolio, setActiveFolio] = useState(1);
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [decrypted, setDecrypted] = useState(false);
  const [decryptError, setDecryptError] = useState('');
  const [activeStratum, setActiveStratum] = useState(1);
  const [showMesaModal, setShowMesaModal] = useState(false);
  
  useEffect(() => {
    // Switch to ICA toby.mp3 track on component load
    audioSystem.switchToIca();
  }, []);

  const handleDecrypt = (e) => {
    e.preventDefault();
    const normalized = passcode.toUpperCase().trim();
    if (normalized === 'CLOVIS' || normalized === 'AMEGHINO' || normalized === 'GENESIS' || normalized === '1935') {
      setDecrypted(true);
      setDecryptError('');
    } else {
      setDecryptError('Sello Antropológico Inválido. Intente con: AMEGHINO, CLOVIS, GENESIS o 1935');
      setDecrypted(false);
    }
  };

  // Strata data representing the stratigraphic slider
  const stratigraphy = [
    {
      depth: "0 - 1.5 metros",
      age: "11,500 AP (Años al Presente)",
      title: "Consenso Clovis",
      artifacts: "Puntas Clovis (armas de piedra estilizadas)",
      desc: "Representa el límite aceptado tradicionalmente por la teoría oficial anglosajona. El hombre llegó a través del Estrecho de Bering al final de la última glaciación. Se asume caza masiva de megafauna.",
      status: "Consensuado / Oficial"
    },
    {
      depth: "1.5 - 3 metros",
      age: "14,500 AP",
      title: "Monte Verde (Chile)",
      artifacts: "Herramientas de madera pulida, huellas de pies infantiles",
      desc: "Evidencia que rompe el consenso tradicional de Bering. Si el hombre ya estaba en el extremo sur hace 14.500 años, debió llegar mucho antes o por rutas marítimas pacíficas. Altamente polémico en 1935.",
      status: "Anomalía Aceptada"
    },
    {
      depth: "3 - 5 metros",
      age: "35,000 AP",
      title: "Pedra Furada (Brasil)",
      artifacts: "Pinturas rupestres, fogones estructurados",
      desc: "Hallazgos descubiertos en abrigos rocosos de Piauí que apuntan a una presencia extremadamente antigua de origen transoceánico o africano. Los antropólogos europeos lo califican como 'simples fracturas naturales de piedra'.",
      status: "Bajo Ataque Académico"
    },
    {
      depth: "5 - 8 metros",
      age: "50,000+ AP",
      title: "Antropogénesis Autoctonista",
      artifacts: "Huesos tallados, cráneos dolicocéfalos",
      desc: "Teoría de Florentino Ameghino que postula que el ser humano se originó de forma autóctona en las pampas americanas. La ciencia alemana la descalifica buscando imponer taxonomías biológicas y jerarquías raciales en Europa Central.",
      status: "Clasificado / Prohibido"
    }
  ];

  return (
    <section id="ica-section" className="min-h-screen relative bg-transparent text-[#e5d4bc] overflow-x-hidden pt-24 pb-32 font-sans selection:bg-[#c2a67a] selection:text-black">
      
      {/* Sepia vintage background image layer */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#0e0c0a]">
        <img 
          src="/a1.jpg"
          alt="Vintage Americanist Map"
          className="absolute min-w-full min-h-full object-cover opacity-15 transition-opacity duration-1000"
          style={{ filter: 'sepia(0.9) brightness(0.2) contrast(1.2)' }}
        />
        {/* Shadow overlays merging the borders */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-[#0e0c0a]/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0c0a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_#0e0c0a_100%)] z-10"></div>
      </div>

      {/* Subtle compass coordinate overlays */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-1 opacity-20 z-20 pointer-events-none text-xs tracking-widest font-mono">
        ★ SECCIÓN DE ANTROPOLOGÍA FÍSICA Y ARQUEOLOGÍA AMERICANA ★
      </div>

      <div className="container mx-auto px-4 relative z-20 max-w-7xl">
        
        {/* Title Capsule */}
        <div className="max-w-4xl mx-auto mb-16 pt-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[9px] text-[#c2a67a] tracking-[0.45em] uppercase mb-2">XXVI Congreso Internacional</span>
            <h1 className="font-maison text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4ebd0] to-[#c2a67a] drop-shadow-md">
              CONGRESO DE AMERICANISTAS
            </h1>
            <p className="font-mono text-gray-500 tracking-[0.3em] uppercase text-[9px] border-b border-[#30251c] pb-3 mb-6">
              ICA (1935) • La Plata, Argentina
            </p>
          </motion.div>
        </div>

        {/* Vintage Desk Workspace */}
        <div className="relative flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto">
          
          {/* Compass / Skeleton decorative rings */}
          <div className="absolute -top-20 -left-16 w-[300px] h-[300px] border border-[#c2a67a]/5 rounded-full flex items-center justify-center pointer-events-none z-0 hidden lg:flex">
             <div className="w-[200px] h-[200px] border border-[#c2a67a]/10 rounded-full" />
             <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#c2a67a]/15 to-transparent rotate-45" />
             <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#c2a67a]/15 to-transparent -rotate-45" />
          </div>

          {/* Left Sidebar: Antique Ledger tabs */}
          <div className="w-full lg:w-1/4 flex lg:flex-col gap-4 justify-center lg:justify-start">
            {[
              { id: 1, label: "Tomo I: Tópicos", icon: BookOpen, desc: "Bases Antropológicas" },
              { id: 2, label: "Tomo II: Excavación", icon: Compass, desc: "Estratigrafía Interactiva" },
              { id: 3, label: "Tomo III: Galería", icon: Award, desc: "Pruebas Arqueológicas" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFolio(tab.id)}
                className={`flex-1 lg:flex-initial text-left p-5 rounded-2xl border transition-all duration-500 backdrop-blur-md relative overflow-hidden group ${
                  activeFolio === tab.id 
                    ? 'bg-[#261d15]/80 border-[#c2a67a]/60 shadow-[0_0_25px_rgba(194,166,122,0.15)] text-[#f4ebd0]' 
                    : 'bg-black/50 border-white/5 hover:border-[#c2a67a]/30 text-gray-400 hover:text-white'
                }`}
              >
                {/* Vintage Wax Seal in corner of active tab */}
                {activeFolio === tab.id && (
                  <motion.div 
                    layoutId="icaWaxSeal"
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#701c1c] border border-[#c2a67a]/30 flex items-center justify-center shadow-md shadow-black"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#521313] border border-[#c2a67a]/20" />
                  </motion.div>
                )}

                <div className="flex items-center gap-3 relative z-10">
                  <tab.icon className={`w-5 h-5 shrink-0 ${activeFolio === tab.id ? 'text-[#c2a67a] animate-pulse' : 'text-gray-500'}`} />
                  <div>
                    <div className="font-maison font-bold text-xs sm:text-sm uppercase tracking-wide">{tab.label}</div>
                    <div className="font-mono text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">{tab.desc}</div>
                  </div>
                </div>
              </button>
            ))}

            {/* classified lock box widget */}
            <div className="hidden lg:flex flex-col p-5 rounded-2xl border border-amber-950/20 bg-black/60 relative overflow-hidden group hover:border-[#c2a67a]/35 transition-colors">
              <div className="flex justify-between items-center w-full mb-3">
                <div>
                  <span className="font-mono text-[8px] text-amber-600 tracking-wider uppercase font-bold">DIARIOS CLASIFICADOS</span>
                  <span className="block font-mono text-[10px] text-gray-400 mt-1">Expedientes Antropométricos 1935</span>
                </div>
                <button 
                  onClick={() => setShowPasscode(true)}
                  className="p-2 border border-[#c2a67a]/30 hover:border-[#c2a67a] bg-white/5 hover:bg-[#c2a67a] text-[#c2a67a] hover:text-black rounded-lg transition-all"
                >
                  <Key className="w-3.5 h-3.5" />
                </button>
              </div>
              {decrypted && (
                <div className="text-[10px] text-emerald-500 font-mono tracking-wide animate-pulse">
                  ✓ ACCESO PERMITIDO - DIARIOS ABIERTOS
                </div>
              )}
            </div>
          </div>

          {/* Central Workspace: Vintage Paper Document Simulator */}
          <div className="w-full lg:w-3/4 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFolio}
                initial={{ opacity: 0, rotateY: -10, filter: "blur(5px)" }}
                animate={{ opacity: 1, rotateY: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, rotateY: 10, filter: "blur(5px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative rounded-[2.5rem] bg-[#ece2d0] border-[8px] border-[#382b21] shadow-[0_25px_60px_rgba(0,0,0,0.8)] min-h-[540px] text-black font-serif overflow-hidden select-text"
              >
                {/* Vintage paper grid and grain textures */}
                <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#30251c_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.4)_0%,_transparent_100%)] pointer-events-none" />

                {/* Left/Right folding shadow crease for book effect */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-black/5 via-black/35 to-black/5 pointer-events-none z-20 hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/15 to-transparent pointer-events-none z-20 rounded-r-[2.5rem] border-r border-white/40" />
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/15 to-transparent pointer-events-none z-20 rounded-l-[2.5rem] border-l border-white/40" />

                {/* FOLIO 1: TOPIC DEBATES & MAIN BRIEF */}
                {activeFolio === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                    
                    {/* Left Page */}
                    <div className="p-8 sm:p-10 border-r border-[#30251c]/10 h-full flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[8px] tracking-[0.25em] text-[#701c1c] uppercase font-bold mb-4">★ INFORME PREPARATORIO • TOMO I ★</div>
                        <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6 border-b border-[#30251c]/25 pb-2">El Origen en Disputa</h3>
                        <p className="text-sm leading-relaxed text-amber-950/85 mb-4 antialiased">
                          Las corrientes del poblamiento humano en América han constituido uno de los diálogos más prolongados de la antropología. Bajo el marco interpretativo de 1935, se observa un auge en el surgimiento de diversas tesis, donde se impone la idea de que el 'hombre americano' existe desde apenas hace 12 mil años.
                        </p>
                        <p className="text-sm leading-relaxed text-amber-950/85 antialiased">
                          No obstante, el surgimiento de técnicas más rigurosas de datación geológica y los hallazgos recientes están fragmentando este consenso antiguo, dando paso a cuestionamientos que sugieren una presencia aborigen mucho más profunda en el tiempo.
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-4 border-t border-[#30251c]/10">
                        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">Estatus del Ciclo</span>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#701c1c] animate-pulse" />
                          <span className="font-mono text-[10px] font-bold text-amber-950 tracking-wider">MODALIDAD MIXTA / INDIVIDUAL</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Page */}
                    <div className="p-8 sm:p-10 h-full flex flex-col justify-between bg-[#f2e9d8]/40">
                      <div>
                        <div className="font-mono text-[8px] tracking-[0.25em] text-amber-800 uppercase font-bold mb-4">★ ANOTACIÓN CIENTÍFICA CRÍTICA ★</div>
                        <h3 className="font-serif italic text-xl font-bold text-amber-950 mb-6 pb-2 border-b border-[#30251c]/10">Taxonomía y Control Político</h3>
                        
                        <p className="text-xs sm:text-sm leading-relaxed text-amber-950/80 mb-4 antialiased">
                          Nuestra taxonomía humana, tradicionalmente anclada en la craneometría y la somatología, está siendo peligrosamente influenciada por agendas políticas en Europa Central. 
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed text-amber-950/80 mb-4 antialiased">
                          La reciente reestructuración de las instituciones académicas y el colapso de las garantías democráticas han forzado una redefinición de los objetivos científicos, donde la esencia biológica y social del ser humano se debate hoy bajo la sombra del determinismo racial de la Alemania nacionalsocialista.
                        </p>

                        <div className="p-4 bg-amber-900/5 rounded-xl border border-amber-950/10 mb-4">
                          <div className="flex gap-2.5 items-start">
                            <ShieldAlert className="w-4 h-4 text-[#701c1c] shrink-0 mt-0.5" />
                            <p className="text-[11px] font-serif italic text-[#5c1616] leading-snug">
                              "¿Buscamos el origen de nuestra cultura americana de forma científica, o estamos, consciente o inconscientemente, validando las nuevas jerarquías que dictan el curso biológico del totalitarismo?"
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-4 border-t border-[#30251c]/10">
                        <span className="font-mono text-[8px] text-gray-500 tracking-wider uppercase font-bold">AGENDA GENERAL DE DEBATE</span>
                        <div className="flex flex-col gap-1.5 font-mono text-[9px] text-[#30251c]/80 uppercase">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#701c1c] font-black">TÓPICO A:</span> ANTROPOGÉNESIS Y ORIGEN BIOLÓGICO
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#701c1c] font-black">TÓPICO B:</span> RUTAS Y TEORÍAS DE POBLAMIENTO
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* FOLIO 2: STRATIGRAPHIC EXCAVATION SLIDER */}
                {activeFolio === 2 && (
                  <div className="p-8 sm:p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[8px] tracking-[0.25em] text-[#701c1c] uppercase font-bold mb-3">★ HERRAMIENTA ESTRATIGRÁFICA INTERACTIVA ★</div>
                      <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-3">Estudio de Capas de Excavación</h3>
                      <p className="text-sm leading-relaxed text-amber-950/80 mb-6 font-serif">
                        Deslice o seleccione las distintas profundidades estratigráficas para examinar los hallazgos arqueológicos y entender cómo desafían la cronología aceptada por los comités científicos europeos en 1935.
                      </p>

                      {/* Stratigraphic Layer Visual Blocks */}
                      <div className="grid grid-cols-4 gap-2.5 mb-6">
                        {stratigraphy.map((layer, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveStratum(index + 1)}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                              activeStratum === index + 1 
                                ? 'bg-amber-950 text-[#ece2d0] border-amber-950 shadow-md scale-[1.03]' 
                                : 'bg-[#e5d9c2] hover:bg-[#ded1b6] border-[#30251c]/15 text-black'
                            }`}
                          >
                            <span className="font-mono text-[10px] font-bold tracking-widest">{layer.depth}</span>
                            <span className="font-mono text-[8px] opacity-70 mt-1">{layer.title}</span>
                          </button>
                        ))}
                      </div>

                      {/* Active Layer Details Card */}
                      <div className="p-5 rounded-2xl bg-[#f5eddb]/80 border border-[#30251c]/15 shadow-inner">
                        <div className="flex justify-between items-baseline mb-3 border-b border-[#30251c]/10 pb-2">
                          <h4 className="font-serif italic text-lg font-black text-amber-950">
                            {stratigraphy[activeStratum - 1].title}
                          </h4>
                          <span className="font-mono text-[9px] bg-amber-950/10 text-[#701c1c] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {stratigraphy[activeStratum - 1].status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed font-serif">
                          <div>
                            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Datación Radiocarbónica / Geológica</span>
                            <span className="font-bold text-amber-950 block mb-3 text-sm">{stratigraphy[activeStratum - 1].age}</span>

                            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Restos / Artefactos Extraídos</span>
                            <span className="font-bold text-amber-950 block text-xs italic">{stratigraphy[activeStratum - 1].artifacts}</span>
                          </div>
                          <div>
                            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-1">Análisis Arqueológico</span>
                            <p className="text-amber-950/80 leading-relaxed font-light">{stratigraphy[activeStratum - 1].desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#30251c]/10 flex items-center justify-between text-[9px] font-mono text-gray-500">
                      <span>METRIC RATIO: STRATIGRAPHY VERIFICATION</span>
                      <span>1935 RECORDING SYSTEM CORP.</span>
                    </div>
                  </div>
                )}

                {/* FOLIO 3: ANTIQUE PHOTO ARCHIVE */}
                {activeFolio === 3 && (
                  <div className="p-8 sm:p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[8px] tracking-[0.25em] text-[#701c1c] uppercase font-bold mb-3">★ ARCHIVO FOTOGRÁFICO DE CAMPAÑA ★</div>
                      <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6">Fotografías Científicas ICA</h3>

                      {/* Displaying a1, a2, a3 as stylized retro museum Polaroids */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { src: '/a1.jpg', caption: "Placa I: Cartografía y Excavación", desc: "Registro de rutas de poblamiento prehistóricas." },
                          { src: '/a2.jpg', caption: "Placa II: Restos Óseos", desc: "Anotaciones de craneometría de dolicocéfalos pampeanos." },
                          { src: '/a3.jpg', caption: "Placa III: Material Lítico", desc: "Herramientas líticas que prueban dataciones pre-Clovis." }
                        ].map((pic, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-3 shadow-xl rounded-sm border border-black/10 transform rotate-[-2deg] hover:rotate-[2deg] hover:scale-105 transition-all duration-300"
                          >
                            <div className="w-full h-32 overflow-hidden bg-gray-200 border border-gray-300">
                              <img src={pic.src} alt={pic.caption} className="w-full h-full object-cover filter sepia contrast-125" />
                            </div>
                            <div className="mt-3 text-center">
                              <h5 className="font-serif italic text-[11px] font-bold text-amber-950 leading-tight">{pic.caption}</h5>
                              <p className="font-mono text-[7.5px] text-gray-500 mt-1 leading-snug">{pic.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#30251c]/10 text-center font-mono text-[8px] text-gray-500">
                      ★ FOTOGRAFÍAS RECOPILADAS EN LA CUENCA DE LA PLATA E HISTORIA PAMPEANA - EXPEDIENTE EXCLUSIVO ★
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* DECIPHER DIARY WIDGET MOBILE VERSION */}
        <div className="flex lg:hidden flex-col mt-8 p-6 rounded-3xl border border-amber-950/20 bg-black/60 relative overflow-hidden">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="font-mono text-[8px] text-amber-600 tracking-wider uppercase font-bold">DIARIOS CLASIFICADOS</span>
              <span className="block font-mono text-[10px] text-gray-400 mt-1">Expedientes Antropométricos 1935</span>
            </div>
            <button 
              onClick={() => setShowPasscode(true)}
              className="p-2 border border-[#c2a67a]/30 hover:border-[#c2a67a] bg-white/5 hover:bg-[#c2a67a] text-[#c2a67a] hover:text-black rounded-lg transition-all"
            >
              <Key className="w-3.5 h-3.5" />
            </button>
          </div>
          {decrypted && (
            <div className="text-[10px] text-emerald-500 font-mono tracking-wide animate-pulse">
              ✓ ACCESO PERMITIDO - DIARIOS ABIERTOS
            </div>
          )}
        </div>

        {/* Dynamic Decrypted Diaries Section (Hidden until correct password entered) */}
        <AnimatePresence>
          {decrypted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 max-w-5xl mx-auto rounded-[2rem] bg-[#16120e] border border-emerald-500/20 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.7)] text-left"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-emerald-500/20 pb-3">
                <Unlock className="w-6 h-6 text-emerald-500 animate-bounce" />
                <div>
                  <h4 className="font-maison text-lg md:text-xl font-bold text-white uppercase tracking-wider">DIARIO CIENTÍFICO DESCIFRADO - CLASIFICADO EXP-1935</h4>
                  <span className="font-mono text-[9px] text-emerald-500 tracking-widest uppercase">CORRESPONDENCIA SECRETA DE LA PLATA A MÚNICH</span>
                </div>
              </div>
              <p className="font-serif italic text-sm text-gray-300 leading-relaxed mb-4">
                "...Los informes enviados desde Berlín insisten en que descartemos de inmediato cualquier datación superior a los 10,000 años en suelo americano. Afirman que establecer una prehistoria profunda o un autoctonismo filogenético en las pampas debilita la tesis de la supremacía y poblamiento ordenado por linajes primordiales. Nuestra investigación ha sido severamente intervenida. Cataldo teme que no nos permitan publicar los cráneos excavados en los estratos inferiores de Miramar..."
              </p>
              <div className="flex justify-between items-center font-mono text-[8px] text-emerald-500/60 pt-4 border-t border-emerald-500/10">
                <span>SELLO: ARCHIVO GENERAL AMERICANISTA</span>
                <span>DESTINO: COMITÉ DE INVESTIGACIÓN POLÍTICA</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lower Official Navigation Board */}
        <div className="max-w-5xl mx-auto mt-16 p-8 rounded-[2rem] bg-black/60 border border-white/5 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <span className="font-mono text-[8px] text-[#c2a67a] tracking-[0.3em] uppercase block mb-1">MESA DIRECTIVA Y REGLAMENTACIÓN</span>
            <h4 className="font-maison text-xl font-bold text-white uppercase">DOCUMENTOS OFICIALES ICA 1935</h4>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Wax seal invitation for Conoce a tu mesa */}
            <button 
              onClick={() => setShowMesaModal(true)}
              className="px-6 py-3 border border-[#c2a67a]/40 hover:border-[#c2a67a] text-[#c2a67a] hover:text-black hover:bg-[#c2a67a] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group"
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Conoce a tu Mesa
            </button>

            {/* Academic Guide link */}
            <a 
              href="https://drive.google.com/file/d/1dyIhjMysc6BxSM_Bj14a_2E33jYlD8ys/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#701c1c] text-white hover:bg-[#8f2828] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 group border border-red-500/20"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Guía Académica
            </a>
          </div>
        </div>

      </div>

      {/* PASSCODE ENTRY MODAL */}
      <AnimatePresence>
        {showPasscode && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPasscode(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md rounded-3xl bg-[#16120e] border border-[#c2a67a]/30 p-8 text-[#e5d4bc] z-10 shadow-2xl text-center"
            >
              <button 
                onClick={() => setShowPasscode(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <Lock className="w-12 h-12 text-[#c2a67a] mx-auto mb-4 animate-pulse" />
              
              <h3 className="font-maison text-2xl font-black text-white uppercase mb-2">SELLO CIENTÍFICO ICA</h3>
              <p className="font-mono text-xs text-gray-400 mb-6">
                Ingrese contraseña para descifrar correspondencia privada (Ej: AMEGHINO, CLOVIS, GENESIS, 1935)
              </p>

              <form onSubmit={handleDecrypt} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="CONTRASEÑA CRONOLÓGICA" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-[#201a14] border border-[#c2a67a]/20 rounded-xl px-4 py-3 text-center text-[#ece2d0] font-mono tracking-widest focus:outline-none focus:border-[#c2a67a] transition-all uppercase"
                />
                
                {decryptError && (
                  <p className="text-[10px] text-red-500 font-mono tracking-wider">{decryptError}</p>
                )}

                <button 
                  type="submit"
                  className="w-full py-3 bg-[#701c1c] hover:bg-[#8f2828] text-white rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-md font-bold"
                >
                  DESBLOQUEAR EXPEDIENTE
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CONOCE A TU MESA MODAL (Invites Style) */}
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
              {/* Paper fine dots */}
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#30251c_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-[2rem]" />
              
              <button 
                onClick={() => setShowMesaModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-black z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <Landmark className="w-12 h-12 text-[#701c1c] mx-auto mb-4" />
              
              <span className="font-mono text-[9px] text-[#701c1c] tracking-[0.3em] uppercase block mb-1">DOCUMENTO ACADÉMICO OFICIAL</span>
              <h3 className="font-serif italic text-2xl font-black text-amber-950 mb-6 border-b border-[#30251c]/15 pb-2">Mesa Directiva del Congreso</h3>

              {/* Invitation diploma styling */}
              <div className="space-y-6 text-center text-amber-950 font-serif leading-relaxed px-4">
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">PRESIDENTE DEL COMITÉ</span>
                  <h4 className="text-2xl font-black italic tracking-wide text-amber-950">Cataldo Querecia</h4>
                  <p className="text-[11px] font-mono text-gray-600 mt-1 uppercase tracking-widest">Delegado y Académico en Antropogenia</p>
                </div>

                <div className="w-24 h-[1px] bg-[#30251c]/15 mx-auto" />

                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">VICEPRESIDENTE DEL COMITÉ</span>
                  <h4 className="text-2xl font-black italic tracking-wide text-amber-950">Elymar Ledezma</h4>
                  <p className="text-[11px] font-mono text-gray-600 mt-1 uppercase tracking-widest">Delegada de Asuntos Americanistas y Logística</p>
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

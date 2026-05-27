import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BookOpen, Settings, Star, Fingerprint, FileText, CheckCircle2, Lock, X } from 'lucide-react';

// Custom Gold EMV Smart-Chip Vector
const GoldSmartChip = () => (
  <div className="w-11 h-8 rounded-lg bg-gradient-to-br from-[#FFE893] via-[#FFD100] to-[#9E7C00] p-[2px] relative shadow-[0_4px_12px_rgba(255,209,0,0.25)] border border-[#FFD100]/40 shrink-0">
    <div className="w-full h-full border border-black/10 rounded-md relative flex flex-col justify-between p-0.5 opacity-90">
      <div className="h-[1px] bg-black/20 w-full" />
      <div className="flex justify-between w-full h-[40%] my-0.5">
        <div className="w-[1px] bg-black/20 h-full" />
        <div className="w-[1px] bg-black/20 h-full" />
        <div className="w-[1px] bg-black/20 h-full" />
      </div>
      <div className="h-[1px] bg-black/20 w-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4.5 h-3.5 border border-black/15 rounded-sm bg-gradient-to-br from-[#FFE893] to-[#9E7C00]"></div>
      </div>
    </div>
  </div>
);

// High-Tech Biometric Pass Photo Viewer with Active Laser Scanner
const BiometricPassPhoto = ({ name, color, isHovered }) => {
  return (
    <div className="w-full aspect-[4/5] bg-black/60 border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center">
      {/* Corner crosshairs bracket styling */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30" />

      {/* Grid crosshair dots */}
      <span className="absolute top-1/2 left-4 -translate-y-1/2 font-mono text-[6px] text-white/20 select-none">[+]</span>
      <span className="absolute top-1/2 right-4 -translate-y-1/2 font-mono text-[6px] text-white/20 select-none">[+]</span>

      {/* Subtle digital scanning grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

      {/* Biometric scanning rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className={`w-32 h-32 rounded-full border border-dashed border-white/5 animate-[spin_25s_linear_infinite] transition-colors duration-500 ${isHovered ? 'border-primary-yellow/20' : ''}`} />
        <div className={`w-20 h-20 rounded-full border border-white/5 animate-[spin_12s_linear_infinite_reverse] transition-colors duration-500 ${isHovered ? 'border-primary-yellow/10' : ''}`} />
      </div>

      {/* Futuristic Vector Profile Outline */}
      <svg viewBox="0 0 100 100" className="w-[70%] h-[70%] relative z-10 opacity-75">
        <defs>
          <radialGradient id={`bio-radial-${name}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={`${color}30`} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={`bio-fig-grad-${name}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={`${color}10`} />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="32" fill={`url(#bio-radial-${name})`} opacity="0.6" />
        
        {/* Head */}
        <circle cx="50" cy="38" r="11" fill={`url(#bio-fig-grad-${name})`} stroke={color} strokeWidth="0.75" />
        {/* Shoulders */}
        <path d="M26 76 C26 62, 36 57, 50 57 C64 57, 74 62, 74 76 C74 80, 68 82, 50 82 C32 82, 26 80, 26 76 Z" fill={`url(#bio-fig-grad-${name})`} stroke={color} strokeWidth="0.75" />
        
        {/* Focus lines */}
        {isHovered && (
          <>
            <line x1="50" y1="12" x2="50" y2="22" stroke="#FFD100" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="18" y1="50" x2="28" y2="50" stroke="#FFD100" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="72" y1="50" x2="82" y2="50" stroke="#FFD100" strokeWidth="0.5" strokeDasharray="1 1" />
          </>
        )}
      </svg>

      {/* Holographic scanning laser line */}
      <motion.div
        animate={{ y: [-70, 70, -70] }}
        transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-yellow/70 to-transparent shadow-[0_0_8px_rgba(255,209,0,0.8)] z-20"
      />

      {/* Scanning status banner */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/75 border border-white/10 rounded px-2.5 py-0.5 flex items-center gap-1.5 backdrop-blur-md">
        <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-[#FFD100] animate-ping' : 'bg-white/30'}`} />
        <span className="font-mono text-[7px] text-white/50 tracking-widest uppercase">
          {isHovered ? "BIOMETRIC ACTIVE" : "STANDBY SCAN"}
        </span>
      </div>
    </div>
  );
};

export default function Staff() {
  const [activeDept, setActiveDept] = useState('Todos');
  const [selectedMember, setSelectedMember] = useState(null);
  const [typedQuote, setTypedQuote] = useState("");
  
  // 3D Tilt States
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const departments = ['Todos', 'Ejecutivo', 'Académico', 'Logística'];

  const staffList = [
    {
      id: 1,
      name: "Andrés Rodríguez",
      role: "Secretario General",
      dept: "Ejecutivo",
      quote: "La diplomacia es el arte de expandir perspectivas donde la mirada común solo percibe límites insalvables.",
      color: "#FFD100", // Gold
      icon: Shield,
      secId: "LSM-SG-01",
      signature: "M 15 50 Q 30 20 45 40 T 70 30 T 95 60 T 130 35 T 160 50"
    },
    {
      id: 2,
      name: "Santiago Pérez",
      role: "Director Académico",
      dept: "Ejecutivo",
      quote: "El debate riguroso, el pensamiento crítico y la investigación profunda forjan a los verdaderos líderes del mañana.",
      color: "#3B82F6", // Blue
      icon: BookOpen,
      secId: "LSM-DA-02",
      signature: "M 20 40 Q 35 60 50 30 T 80 50 T 110 30 T 140 60"
    },
    {
      id: 3,
      name: "Valeria Gómez",
      role: "Directora de Logística",
      dept: "Ejecutivo",
      quote: "La excelencia operativa es el motor invisible y riguroso que transforma las grandes ideas en realidades de alto nivel.",
      color: "#EC4899", // Pink
      icon: Settings,
      secId: "LSM-DL-03",
      signature: "M 15 35 Q 40 65 60 25 T 90 40 T 120 20 T 150 55"
    },
    {
      id: 4,
      name: "Camila Silva",
      role: "Sub-Secretaria General",
      dept: "Ejecutivo",
      quote: "La unión de voluntades y la cooperación multilateral generan el impacto global real que nuestras sociedades demandan.",
      color: "#10B981", // Emerald
      icon: Star,
      secId: "LSM-SS-04",
      signature: "M 18 55 Q 30 20 50 45 T 85 30 T 120 60 T 155 35"
    },
    {
      id: 5,
      name: "Sofía Méndez",
      role: "Coordinadora Académica",
      dept: "Académico",
      quote: "La ciencia, la política y la investigación estructurada deben guiar el rumbo ético de la gobernanza global en este siglo.",
      color: "#14B8A6", // Teal
      icon: BookOpen,
      secId: "LSM-CA-05",
      signature: "M 22 45 Q 40 15 55 50 T 90 30 T 125 60"
    },
    {
      id: 6,
      name: "Mateo Díaz",
      role: "Director de Prensa (ICFJ)",
      dept: "Logística",
      quote: "Comunicar con veracidad y documentar el rigor parlamentario es el primer paso indispensable hacia la transparencia democrática.",
      color: "#06B6D4", // Cyan
      icon: Settings,
      secId: "LSM-DP-06",
      signature: "M 15 50 Q 35 30 55 55 T 85 40 T 115 65 T 145 35"
    },
    {
      id: 7,
      name: "Isabella Conti",
      role: "Coordinadora de Protocolo",
      dept: "Logística",
      quote: "El respeto mutuo, la solemnidad parlamentaria y la diplomacia formal abren las puertas al diálogo más constructivo y duradero.",
      color: "#F59E0B", // Amber
      icon: Settings,
      secId: "LSM-CP-07",
      signature: "M 20 35 Q 45 65 65 30 T 95 50 T 125 25 T 155 60"
    },
    {
      id: 8,
      name: "Daniel Vargas",
      role: "Coordinador de Finanzas",
      dept: "Logística",
      quote: "Administrar recursos con absoluta transparencia y eficiencia operativa garantiza un ecosistema académico sostenible en el tiempo.",
      color: "#8B5CF6", // Purple
      icon: Settings,
      secId: "LSM-CF-08",
      signature: "M 18 45 Q 35 15 60 55 T 95 35 T 130 65"
    }
  ];

  // Letter-by-letter quote typist sequence in the dossier overlay
  useEffect(() => {
    if (!selectedMember) {
      setTypedQuote("");
      return;
    }
    setTypedQuote("");
    let idx = 0;
    const text = selectedMember.quote;
    const typingInterval = setInterval(() => {
      setTypedQuote((prev) => prev + text.charAt(idx));
      idx++;
      if (idx >= text.length) {
        clearInterval(typingInterval);
      }
    }, 25);

    return () => clearInterval(typingInterval);
  }, [selectedMember]);

  const handleMouseMove = (e, memberId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // max 12 degrees tilt angle on X and Y
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;
    setRotateX(rotX);
    setRotateY(rotY);
    setHoveredCardId(memberId);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHoveredCardId(null);
  };

  const filteredStaff = activeDept === 'Todos'
    ? staffList
    : staffList.filter(member => member.dept === activeDept);

  const getDeptLevel = (dept) => {
    switch (dept) {
      case 'Ejecutivo': return 'LEVEL 01';
      case 'Académico': return 'LEVEL 02';
      case 'Logística': return 'LEVEL 03';
      default: return 'LEVEL 00';
    }
  };

  return (
    <section id="staff" className="pt-28 pb-48 bg-[#030307] relative overflow-hidden text-white min-h-screen">
      
      {/* Studio Gold Tech Ambient Glow Leaks */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-yellow/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Cybernetic Dot Matrix background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-primary-yellow/40"></div>
            <span className="font-mono text-primary-yellow text-[9px] uppercase tracking-[0.35em] font-extrabold px-3 py-1 rounded-full border border-primary-yellow/15 bg-primary-yellow/5">
              Secure Registry Database
            </span>
            <div className="w-8 h-[1px] bg-primary-yellow/40"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-maison text-[2.8rem] sm:text-[4.5rem] md:text-[5.5rem] font-extrabold tracking-tight uppercase mb-4 leading-none"
          >
            CUERPO <span className="gradient-text">DIPLOMÁTICO</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-codec text-xs sm:text-sm text-white/40 max-w-xl leading-relaxed font-light mt-1"
          >
            Verificación e inspección de credenciales oficiales autorizadas del II Aniversario de LASAMUN en Barquisimeto.
          </motion.p>
        </div>

        {/* Security Clearance Tab Filter Rack */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-20 max-w-2xl mx-auto bg-black/45 border border-white/5 rounded-3xl p-2 backdrop-blur-xl shadow-2xl relative">
          {/* Subtle security line stamp */}
          <span className="absolute -top-3 left-6 font-mono text-[7px] text-white/20 uppercase tracking-widest bg-[#030307] px-2 select-none border-l border-r border-white/10">
            Clearance Level Select
          </span>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`font-mono text-[8.5px] uppercase tracking-[0.2em] px-4.5 py-3 rounded-2xl transition-all duration-300 select-none flex items-center gap-2 border ${
                activeDept === dept 
                  ? 'bg-primary-yellow text-black font-extrabold border-primary-yellow shadow-[0_0_15px_rgba(255,209,0,0.3)]'
                  : 'text-white/40 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10'
              }`}
            >
              <span className={`text-[7px] font-bold ${activeDept === dept ? 'bg-black/10 text-black' : 'text-primary-yellow/55'}`}>
                [{getDeptLevel(dept)}]
              </span>
              <span>{dept}</span>
            </button>
          ))}
        </div>

        {/* Diplomatic Card Passport Rack Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredStaff.map((member) => {
              const isCardHovered = hoveredCardId === member.id;
              
              return (
                <motion.div
                  layout
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  onMouseMove={(e) => handleMouseMove(e, member.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setSelectedMember(member)}
                  className="group relative rounded-3xl bg-slate-950/45 border border-white/10 backdrop-blur-2xl p-6 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-500 hover:border-primary-yellow/30 min-h-[440px] shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isCardHovered 
                      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` 
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                    transition: isCardHovered ? 'none' : 'transform 0.5s ease-out, border-color 0.3s'
                  }}
                >
                  {/* Holographic light leak glare sheen overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" 
                    style={{
                      transform: isCardHovered 
                        ? `translate3d(${(rotateY * 2.5)}px, ${(rotateX * 2.5)}px, 0)` 
                        : 'translate3d(0,0,0)'
                    }}
                  />

                  {/* Header Credentials Strip */}
                  <div className="flex justify-between items-center mb-4 shrink-0 relative z-20">
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[7px] text-white/30 tracking-widest uppercase">
                        LASAMUN DIPLOMATIC CORPS
                      </span>
                      <span className="font-mono text-[8px] text-primary-yellow tracking-widest uppercase font-extrabold">
                        OFFICIAL ACCESS PASS
                      </span>
                    </div>
                    {/* Access level stamp */}
                    <span 
                      className="font-mono text-[7.5px] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded border"
                      style={{ color: member.color, borderColor: `${member.color}25`, backgroundColor: `${member.color}10` }}
                    >
                      {getDeptLevel(member.dept)}
                    </span>
                  </div>

                  {/* Biometric Avatar Visualizer */}
                  <div className="mb-5 shrink-0 relative z-20">
                    <BiometricPassPhoto name={member.name} color={member.color} isHovered={isCardHovered} />
                  </div>

                  {/* Physical Passport Info Layout details */}
                  <div className="w-full flex-1 flex flex-col justify-end relative z-20 text-left">
                    
                    {/* Chip and Role section */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex flex-col">
                        <span className="font-mono text-[7px] text-white/30 tracking-widest uppercase">
                          POSICIÓN OFICIAL // RANK
                        </span>
                        <span 
                          className="font-mono text-[9px] uppercase tracking-[0.2em] font-extrabold mt-0.5"
                          style={{ color: member.color }}
                        >
                          {member.role}
                        </span>
                      </div>
                      <GoldSmartChip />
                    </div>

                    <h4 className="font-maison font-bold text-2xl text-white tracking-wide group-hover:text-primary-yellow transition-colors duration-300">
                      {member.name}
                    </h4>

                    {/* Passport Card Divider */}
                    <div className="w-full h-[1px] bg-white/10 my-3 group-hover:bg-primary-yellow/20 transition-colors duration-500" />

                    {/* Barcode block with security metrics */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col font-mono text-[6.5px] text-white/20 tracking-wider">
                        <span>SYS_ID: {member.secId}</span>
                        <span>GEO: 10.4806° N</span>
                      </div>
                      
                      {/* Realistic barcode SVG element */}
                      <svg className="h-6 w-20 text-white/35 group-hover:text-white/60 transition-colors" viewBox="0 0 100 30" fill="currentColor">
                        <rect x="0" y="0" width="3" height="30" />
                        <rect x="5" y="0" width="1" height="30" />
                        <rect x="8" y="0" width="4" height="30" />
                        <rect x="14" y="0" width="2" height="30" />
                        <rect x="18" y="0" width="1" height="30" />
                        <rect x="21" y="0" width="3" height="30" />
                        <rect x="26" y="0" width="1" height="30" />
                        <rect x="29" y="0" width="5" height="30" />
                        <rect x="36" y="0" width="2" height="30" />
                        <rect x="40" y="0" width="1" height="30" />
                        <rect x="43" y="0" width="3" height="30" />
                        <rect x="48" y="0" width="4" height="30" />
                        <rect x="54" y="0" width="1" height="30" />
                        <rect x="57" y="0" width="2" height="30" />
                        <rect x="61" y="0" width="5" height="30" />
                        <rect x="68" y="0" width="1" height="30" />
                        <rect x="71" y="0" width="3" height="30" />
                        <rect x="76" y="0" width="2" height="30" />
                        <rect x="80" y="0" width="4" height="30" />
                        <rect x="86" y="0" width="1" height="30" />
                        <rect x="89" y="0" width="3" height="30" />
                        <rect x="94" y="0" width="1" height="30" />
                        <rect x="97" y="0" width="3" height="30" />
                      </svg>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Cinematic Diplomatic Dossier Fullscreen Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            {/* Modal Glass Panel Container */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-4xl w-full bg-slate-950/90 border border-white/10 rounded-[2.5rem] shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden p-8 md:p-12 z-10 flex flex-col md:flex-row gap-10 items-stretch"
            >
              
              {/* Futuristic matrix scan lines on modal background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.15)_50%)] pointer-events-none opacity-20 z-0 bg-[size:100%_4px]" />
              
              {/* Outer decorative focus corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />

              {/* Close Button Trigger */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/55 hover:text-primary-yellow hover:border-primary-yellow hover:scale-110 transition-all duration-300 z-20 cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* LEFT PANE - Biometric Passport Dossier */}
              <div className="w-full md:w-5/12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-10 shrink-0 text-left relative z-10">
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <Fingerprint className="w-5 h-5 text-primary-yellow animate-pulse" />
                    <span className="font-mono text-[9px] text-primary-yellow tracking-[0.3em] uppercase font-bold">
                      Dossier Verification
                    </span>
                  </div>

                  {/* Large High-Fidelity Biometric Picture Box */}
                  <div className="w-full aspect-[4/5] max-w-[240px] mx-auto md:mx-0 rounded-2xl bg-black/70 border border-white/15 p-1 relative overflow-hidden shadow-inner flex items-center justify-center">
                    
                    {/* Inner scanner targets */}
                    <div className="absolute inset-2 border border-white/5 rounded-xl pointer-events-none" />
                    
                    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] opacity-85 text-[#FFD100]">
                      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
                      <circle cx="50" cy="38" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
                      <path d="M22 80 C22 64, 34 58, 50 58 C66 58, 78 64, 78 80 C78 85, 72 87, 50 87 C28 87, 22 85, 22 80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                      
                      {/* Active face tracking crosshairs */}
                      <circle cx="50" cy="38" r="2" fill="#FFD100" />
                      <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.25" opacity="0.3" />
                      <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.25" opacity="0.3" />
                    </svg>

                    {/* Modal Active Laser Line Sweep */}
                    <motion.div
                      animate={{ y: [-110, 110, -110] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-0 right-0 h-[2.5px] bg-[#FFD100] shadow-[0_0_12px_rgba(255,209,0,1)] z-10"
                    />

                    {/* Bio Scanner overlay tag */}
                    <div className="absolute bottom-2 right-2 bg-black/80 border border-[#FFD100]/30 rounded px-1.5 py-0.5">
                      <span className="font-mono text-[6px] text-primary-yellow tracking-widest uppercase font-extrabold">
                        GRID MATCH: OK
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vector Hand-drawn Cursive Signature (Animates in dynamically) */}
                <div className="mt-8 relative pt-4 border-t border-dashed border-white/10 flex flex-col justify-end w-full">
                  <span className="font-mono text-[7px] text-white/35 tracking-widest uppercase mb-1 block">
                    Firma Autorizada // Authorized Seal
                  </span>
                  
                  <div className="w-full h-16 relative bg-white/[0.01] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 180 80" className="w-full h-full text-primary-yellow opacity-90 drop-shadow-[0_0_4px_rgba(255,209,0,0.5)]">
                      <motion.path 
                        d={selectedMember.signature}
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
                      />
                    </svg>

                    {/* Red Stamp Overlay stamp */}
                    <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-28 h-28 pointer-events-none z-0 rotate-[-12deg]">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-[#EF4444]/35 font-extrabold">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 2" />
                        <circle cx="50" cy="50" r="37" fill="none" stroke="currentColor" strokeWidth="1" />
                        <path d="M12 50 H88 M50 12 V88" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1" />
                        <text x="50" y="42" textAnchor="middle" fontSize="6.5" fill="currentColor" letterSpacing="1">APPROVED</text>
                        <text x="50" y="52" textAnchor="middle" fontSize="6.5" fill="currentColor" letterSpacing="1">DIPLOMATIC</text>
                        <text x="50" y="62" textAnchor="middle" fontSize="6.5" fill="currentColor" letterSpacing="1">COUNCIL</text>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT PANE - Secure Dossier Information Panel */}
              <div className="w-full md:w-7/12 flex flex-col justify-between relative z-10 text-left">
                
                {/* Credentials Table details */}
                <div className="flex-1 flex flex-col justify-start">
                  
                  {/* Department & Security Clearance ID badge */}
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-6">
                    <div>
                      <span className="font-mono text-[7px] text-white/30 tracking-widest uppercase">
                        DEPARTAMENTO OFICIAL
                      </span>
                      <h4 className="font-maison text-lg text-white tracking-widest font-extrabold uppercase mt-0.5">
                        {selectedMember.dept}
                      </h4>
                    </div>
                    
                    <div className="text-right">
                      <span className="font-mono text-[7px] text-white/30 tracking-widest uppercase">
                        SECURITY CLEARANCE
                      </span>
                      <h4 
                        className="font-mono text-xs tracking-widest font-extrabold mt-0.5"
                        style={{ color: selectedMember.color }}
                      >
                        {getDeptLevel(selectedMember.dept)} // GRANTED
                      </h4>
                    </div>
                  </div>

                  {/* Serial Profile details */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8 text-xs font-mono">
                    <div>
                      <span className="text-[7.5px] text-white/30 uppercase tracking-widest block mb-1">CÓDIGO DE CREDENCIAL:</span>
                      <span className="text-white tracking-wider font-extrabold">{selectedMember.secId}</span>
                    </div>
                    <div>
                      <span className="text-[7.5px] text-white/30 uppercase tracking-widest block mb-1">RANGO DIPLOMÁTICO:</span>
                      <span className="tracking-wider font-extrabold" style={{ color: selectedMember.color }}>
                        {selectedMember.role}
                      </span>
                    </div>
                    <div>
                      <span className="text-[7.5px] text-white/30 uppercase tracking-widest block mb-1">UBICACIÓN / SEDE:</span>
                      <span className="text-white tracking-wider">Barquisimeto, VEN</span>
                    </div>
                    <div>
                      <span className="text-[7.5px] text-white/30 uppercase tracking-widest block mb-1">EMISIÓN GLOBAL:</span>
                      <span className="text-white tracking-wider">EDICIÓN II ANIVERSARIO</span>
                    </div>
                  </div>

                  {/* Secret Diplomatic quote statement with Typewriter typing */}
                  <div className="bg-black/50 border border-white/5 rounded-3xl p-6 md:p-8 min-h-[160px] relative shadow-inner">
                    <span className="absolute -top-3 left-6 font-mono text-[7px] text-white/20 uppercase tracking-widest bg-[#06060c] px-2 select-none border-l border-r border-white/5">
                      Declaración de Misión // Diplomatic Directive
                    </span>
                    
                    {/* Retro console glowing scanlines inside quote block */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.1)_50%)] pointer-events-none opacity-20 rounded-3xl bg-[size:100%_3px]" />
                    
                    <p className="font-codec text-xs sm:text-sm text-white/70 leading-relaxed font-light italic">
                      "{typedQuote}"
                      {/* Active typing blinker cursor */}
                      {typedQuote.length < selectedMember.quote.length && (
                        <span className="w-1.5 h-3.5 bg-primary-yellow inline-block ml-1 animate-[pulse_0.8s_infinite] align-middle" />
                      )}
                    </p>
                  </div>

                </div>

                {/* De-Authorize & Dismiss Console Trigger */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full py-4.5 rounded-full border border-[#EF4444]/40 bg-[#EF4444]/5 hover:bg-[#EF4444] hover:text-white transition-all duration-500 font-mono text-[9px] uppercase tracking-[0.35em] text-[#EF4444] font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] group"
                  >
                    <Lock className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                    <span>Cerrar Sesión e Inspección // Terminate Session</span>
                  </button>
                </div>

              </div>

            </motion.div>

            {/* Backplane backdrop dismiss handler */}
            <div 
              className="absolute inset-0 z-0 bg-transparent" 
              onClick={() => setSelectedMember(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BookOpen, Settings, Star } from 'lucide-react';

// Futuristic Abstract Geometric Vector SVG Avatar Generator
const AvatarSVG = ({ name, color }) => {
  const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const stars = Array.from({ length: 6 }).map((_, i) => ({
    x: 20 + ((seed * (i + 1)) % 60),
    y: 20 + ((seed * (i + 3)) % 60),
    r: 1 + (i % 1.5)
  }));

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full z-10 relative">
      <defs>
        {/* Background Radial Glow */}
        <radialGradient id={`avatar-bg-${name}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={`${color}35`} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Silhouette Gradient */}
        <linearGradient id={`avatar-fig-${name}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={`${color}20`} />
        </linearGradient>
      </defs>

      {/* Cybernetic Tech Grid */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
      <path d="M50 4 V96 M4 50 H96" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />

      {/* Slow-Spinning Constellation Rings */}
      <circle 
        cx="50" 
        cy="50" 
        r="42" 
        fill="none" 
        stroke={color} 
        strokeWidth="1" 
        opacity="0.25" 
        strokeDasharray="8 6" 
        className="animate-[spin_45s_linear_infinite]"
        style={{ transformOrigin: '50px 50px' }}
      />
      <circle 
        cx="50" 
        cy="50" 
        r="32" 
        fill="none" 
        stroke={color} 
        strokeWidth="0.5" 
        opacity="0.35" 
        strokeDasharray="2 4"
        className="animate-[spin_25s_linear_reverse_infinite]"
        style={{ transformOrigin: '50px 50px' }}
      />

      {/* Ambient Back Glow */}
      <circle cx="50" cy="50" r="32" fill={`url(#avatar-bg-${name})`} />

      {/* Abstract Star Coordinates */}
      {stars.map((star, i) => (
        <circle key={i} cx={star.x} cy={star.y} r={star.r} fill="white" opacity="0.3" />
      ))}

      {/* Glowing Outer Pins */}
      <path d="M50 10 V16 M10 50 H16 M50 84 V90 M84 50 H90" stroke={color} strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />

      {/* Minimalist Futuristic Avatar Silhouette */}
      {/* Head */}
      <circle cx="50" cy="38" r="11" fill={`url(#avatar-fig-${name})`} stroke={color} strokeWidth="0.8" opacity="0.9" />
      {/* Shoulders */}
      <path d="M26 76 C26 61, 36 56, 50 56 C64 56, 74 61, 74 76 C74 80, 68 83, 50 83 C32 83, 26 80, 26 76 Z" fill={`url(#avatar-fig-${name})`} stroke={color} strokeWidth="0.8" opacity="0.85" />
      
      {/* Dynamic Chest Core Ring */}
      <circle cx="50" cy="66" r="3" fill="white" opacity="0.8" />
      <circle cx="50" cy="66" r="5" fill="none" stroke={color} strokeWidth="0.75" opacity="0.5" />
    </svg>
  );
};

export default function Staff() {
  const [activeDept, setActiveDept] = useState('Todos');

  const departments = ['Todos', 'Ejecutivo', 'Académico', 'Logística'];

  const staffList = [
    {
      id: 1,
      name: "Andrés Rodríguez",
      role: "Secretario General",
      dept: "Ejecutivo",
      quote: "La diplomacia es el arte de expandir perspectivas donde la mirada común solo percibe límites insalvables.",
      color: "#FFD100", // Yellow
      icon: Shield
    },
    {
      id: 2,
      name: "Santiago Pérez",
      role: "Director Académico",
      dept: "Ejecutivo",
      quote: "El debate riguroso, el pensamiento crítico y la investigación profunda forjan a los verdaderos líderes del mañana.",
      color: "#3B82F6", // Blue
      icon: BookOpen
    },
    {
      id: 3,
      name: "Valeria Gómez",
      role: "Directora de Logística",
      dept: "Ejecutivo",
      quote: "La excelencia operativa es el motor invisible y riguroso que transforma las grandes ideas en realidades inolvidables.",
      color: "#EC4899", // Pink
      icon: Settings
    },
    {
      id: 4,
      name: "Camila Silva",
      role: "Sub-Secretaria General",
      dept: "Ejecutivo",
      quote: "La unión de voluntades y la cooperación multilateral generan el impacto global real que nuestras sociedades demandan.",
      color: "#10B981", // Emerald
      icon: Star
    },
    {
      id: 5,
      name: "Sofía Méndez",
      role: "Coordinadora Académica",
      dept: "Académico",
      quote: "La ciencia, la política y la investigación estructurada deben guiar el rumbo ético de la gobernanza global en este siglo.",
      color: "#14B8A6", // Teal
      icon: BookOpen
    },
    {
      id: 6,
      name: "Mateo Díaz",
      role: "Director de Prensa (ICFJ)",
      dept: "Logística",
      quote: "Comunicar con veracidad y documentar el rigor parlamentario es el primer paso indispensable hacia la transparencia democrática.",
      color: "#06B6D4", // Cyan
      icon: Settings
    },
    {
      id: 7,
      name: "Isabella Conti",
      role: "Coordinadora de Protocolo",
      dept: "Logística",
      quote: "El respeto mutuo, la solemnidad parlamentaria y la diplomacia formal abren las puertas al diálogo más constructivo y duradero.",
      color: "#F59E0B", // Amber
      icon: Settings
    },
    {
      id: 8,
      name: "Daniel Vargas",
      role: "Coordinador de Finanzas",
      dept: "Logística",
      quote: "Administrar recursos con absoluta transparencia y eficiencia operativa garantiza un ecosistema académico sostenible en el tiempo.",
      color: "#8B5CF6", // Purple
      icon: Settings
    }
  ];

  const filteredStaff = activeDept === 'Todos'
    ? staffList
    : staffList.filter(member => member.dept === activeDept);

  return (
    <section id="staff" className="pt-24 pb-48 bg-black relative overflow-hidden text-white min-h-screen">
      
      {/* Drifting subtle cosmic background blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_75%)] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="font-codec text-white/40 text-xs uppercase tracking-[0.3em] font-bold">Liderazgo & Excelencia</span>
            <div className="w-8 h-[1px] bg-white/20"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-maison text-[3rem] sm:text-[4.5rem] md:text-[6rem] font-bold tracking-tight uppercase mb-6 leading-none"
          >
            NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow via-white to-primary-blue">STAFF</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-codec text-xs sm:text-sm text-white/50 max-w-xl leading-relaxed font-light mt-2"
          >
            El equipo organizador de la décima edición de LASAMUN. Líderes comprometidos con forjar un modelo que expanda límites y conecte voluntades.
          </motion.p>
        </div>

        {/* Dynamic Department Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16 max-w-lg mx-auto bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-full p-2 backdrop-blur-md">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`font-codec text-xs uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 select-none ${
                activeDept === dept 
                  ? 'bg-gradient-to-r from-primary-yellow to-yellow-500 text-black font-bold shadow-lg shadow-primary-yellow/10'
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Staff Members Interactive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredStaff.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 overflow-hidden flex flex-col items-center justify-between text-center transition-all duration-500 hover:border-white/20 min-h-[380px] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Asymmetric Radial Glow behind card */}
                <div 
                  className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ background: member.color }}
                />

                {/* Floating Department Badge */}
                <span className="absolute top-4 right-4 font-mono text-[9px] text-white/30 tracking-widest uppercase border border-white/5 rounded-full px-3 py-1 bg-black/40">
                  {member.dept}
                </span>

                {/* Abstract Geometric Vector Avatar Wrapper */}
                <div className="w-28 h-28 rounded-full bg-black/40 border border-white/5 p-1 relative z-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-500 shadow-lg">
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `radial-gradient(circle, ${member.color}30 0%, transparent 70%)` }}
                  />
                  <AvatarSVG name={member.name} color={member.color} />
                </div>

                {/* Text and Quote Details */}
                <div className="mt-6 flex-1 flex flex-col justify-end w-full">
                  <h4 className="font-maison font-bold text-xl text-white group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h4>
                  
                  <span 
                    className="font-codec text-[10px] uppercase tracking-[0.2em] font-bold mt-1 block"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </span>
                  
                  <div className="w-6 h-[1px] bg-white/10 mx-auto my-3 group-hover:w-16 transition-all duration-500"></div>

                  <p className="font-codec text-xs text-white/40 leading-relaxed font-light italic transition-colors duration-500 group-hover:text-white/70 line-clamp-3 select-none">
                    "{member.quote}"
                  </p>
                </div>
                
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Multi-layered Small Wave SVG Divider blending into TopFotos (cosmic indigo) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 text-[#0b0b2b]" style={{ transform: 'translateY(1px)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 lg:h-32">
          {/* Layer 1: Semi-transparent wave */}
          <path d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z" className="fill-current opacity-30"></path>
          {/* Layer 2: Semi-transparent wave with different phase */}
          <path d="M0,50 C200,20 400,80 700,40 C1000,0 1100,60 1200,30 L1200,120 L0,120 Z" className="fill-current opacity-55"></path>
          {/* Layer 3: Solid wave */}
          <path d="M0,60 C300,20 600,100 900,40 C1050,10 1150,50 1200,60 L1200,120 L0,120 Z" className="fill-current"></path>
        </svg>
      </div>

    </section>
  );
}

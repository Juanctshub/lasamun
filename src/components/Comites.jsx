import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Scale, Users, Gavel, Globe2, ArrowUpRight, Camera } from 'lucide-react';

// Custom designed vector SVG logos as high-fidelity fallbacks
const CommitteeLogo = ({ name }) => {
  const [imgError, setImgError] = useState(false);

  // Directly load local assets if available
  if (name === 'ICFJ' && !imgError) {
    return (
      <img 
        src="/icfj.png"
        alt="ICFJ Logo"
        className="w-full h-full object-contain filter drop-shadow-md rounded-lg p-0.5"
        onError={() => setImgError(true)}
      />
    );
  }

  if (name === 'Investigación (1925)' && !imgError) {
    return (
      <img 
        src="/voynich.avif"
        alt="Voynich Manuscript Logo"
        className="w-full h-full object-cover filter drop-shadow-md rounded-lg"
        onError={() => setImgError(true)}
      />
    );
  }

  const domainMap = {
    'OIT': 'ilo.org',
    'AU': 'au.int',
    'BRICS': 'infobrics.org',
    'ICA (1935)': 'si.edu', // Smithsonian Institution sunburst logo representing American history/anthropology
    'NASA': 'nasa.gov',
    'CORTE (2021)': 'uscourts.gov', // US Federal Courts system
    'CRISIS': 'torproject.org' // Tor Project (Deep/Dark Web onion logo)
  };

  const domain = domainMap[name];
  const token = 'pk_a2EPYS03QO6UAR0NQDWBvA';

  const renderSvgFallback = () => {
    switch (name) {
      case 'OIT':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M50 25 a25 25 0 1 0 0.001 0" fill="none" stroke="currentColor" strokeWidth="3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
              <g key={idx} transform={`rotate(${angle} 50 50)`}>
                <rect x="47.5" y="20" width="5" height="7" rx="1.5" fill="currentColor" />
              </g>
            ))}
            <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M22 62 Q20 50 26 38" fill="none" stroke="#FFD100" strokeWidth="2" strokeLinecap="round" />
            <path d="M78 62 Q80 50 74 38" fill="none" stroke="#FFD100" strokeWidth="2" strokeLinecap="round" />
            {[42, 48, 54, 60].map((y, i) => (
              <g key={i}>
                <ellipse cx="23" cy={y} rx="2" ry="3" fill="#FFD100" transform={`rotate(-10 23 ${y})`} />
                <ellipse cx="77" cy={y} rx="2" ry="3" fill="#FFD100" transform={`rotate(10 77 ${y})`} />
              </g>
            ))}
          </svg>
        );
      case 'AU':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#FFD100" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M44 32 C48 30, 52 31, 55 33 C58 35, 60 40, 58 43 C56 46, 59 48, 62 49 C65 50, 68 53, 67 56 C66 59, 61 63, 60 66 C59 69, 56 73, 54 74 C52 75, 49 71, 48 68 C47 65, 44 63, 43 60 C42 57, 39 56, 38 52 C37 48, 35 45, 36 42 C37 39, 40 34, 44 32 Z" fill="currentColor" opacity="0.85" />
            <path d="M18 50 A32 32 0 0 0 50 82 A32 32 0 0 0 82 50" fill="none" stroke="#FFD100" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'BRICS':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#10B981" /><stop offset="100%" stopColor="#3B82F6" /></linearGradient>
              <linearGradient id="b2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#EF4444" /><stop offset="100%" stopColor="#F59E0B" /></linearGradient>
              <linearGradient id="b3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient>
              <linearGradient id="b4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F59E0B" /><stop offset="100%" stopColor="#10B981" /></linearGradient>
              <linearGradient id="b5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#EC4899" /><stop offset="100%" stopColor="#EF4444" /></linearGradient>
            </defs>
            {[0, 72, 144, 216, 288].map((angle, i) => {
              const grads = ['url(#b1)', 'url(#b2)', 'url(#b3)', 'url(#b4)', 'url(#b5)'];
              return (
                <g key={i} transform={`rotate(${angle} 50 50)`}>
                  <path d="M50 50 C40 33, 45 13, 50 10 C55 13, 60 33, 50 50 Z" fill={grads[i]} opacity="0.85" />
                </g>
              );
            })}
            <circle cx="50" cy="50" r="7" fill="white" opacity="0.9" />
            <circle cx="50" cy="50" r="3.5" fill="#0b0b2b" />
          </svg>
        );
      case 'ICFJ':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
            <path d="M15 50 H85" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <path d="M50 15 V85" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <path d="M22 30 C35 38, 65 38, 78 30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <path d="M22 70 C35 62, 65 62, 78 70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <path d="M35 65 L60 40 L65 45 L40 70 Z" fill="currentColor" />
            <path d="M60 40 L68 32 L72 36 L65 45 Z" fill="#FFD100" />
            <line x1="28" y1="72" x2="35" y2="65" stroke="#FFD100" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        );
      case 'ICA (1935)':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
            <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#FFD100" strokeWidth="1" />
            <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 3" />
            <path d="M50 12 L53 22 L47 22 Z M50 88 L53 78 L47 78 Z M12 50 L22 53 L22 47 Z M88 50 L78 53 L78 47 Z" fill="#FFD100" />
            <path d="M24 24 L32 32 M76 24 L68 32 M24 76 L32 68 M76 76 L68 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="42.5" y="42.5" width="15" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="3" fill="#FFD100" />
          </svg>
        );
      case 'Investigación (1925)':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500">
            <rect x="22" y="16" width="56" height="68" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="28" x2="70" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
            <line x1="30" y1="36" x2="60" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
            <path d="M50 72 C40 60, 42 48, 50 42 C58 48, 60 60, 50 72 Z" fill="#FFD100" opacity="0.25" />
            <path d="M50 72 Q45 55 50 42 Q55 55 50 72" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="42" r="3.5" fill="#10B981" />
            <circle cx="34" cy="52" r="2" fill="#FFD100" />
            <circle cx="66" cy="48" r="2.5" fill="#FFD100" />
            <path d="M34 52 L38 56 M66 48 L61 50" stroke="#FFD100" strokeWidth="0.8" />
          </svg>
        );
      case 'NASA':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
            <circle cx="50" cy="50" r="42" fill="#0033A0" stroke="currentColor" strokeWidth="2" />
            <circle cx="30" cy="35" r="1.2" fill="white" opacity="0.9" />
            <circle cx="70" cy="65" r="1.5" fill="white" opacity="0.9" />
            <circle cx="68" cy="30" r="1" fill="white" opacity="0.9" />
            <circle cx="32" cy="68" r="1.2" fill="white" opacity="0.9" />
            <path d="M15 62 C35 25, 75 25, 88 52 C70 70, 30 75, 15 62 Z" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="50" cy="50" rx="36" ry="11" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(-25 50 50)" />
            <polygon points="77,31 83,29 79,35" fill="white" />
          </svg>
        );
      case 'CORTE (2021)':
        return (
          <img 
            src="/corte.svg"
            alt="Corte Logo"
            className="w-full h-full object-contain filter drop-shadow-md rounded-lg p-0.5"
            onError={() => setImgError(true)}
          />
        );
      case 'CRISIS':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500">
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#7928CA" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M42 42 C42 32, 58 32, 58 42 C58 46, 55 49, 50 52 C45 49, 42 46, 42 42 Z" fill="currentColor" />
            <circle cx="46.5" cy="42" r="1.5" fill="black" />
            <circle cx="53.5" cy="42" r="1.5" fill="black" />
            <circle cx="46.5" cy="42" r="0.5" fill="#ff007f" />
            <circle cx="53.5" cy="42" r="0.5" fill="#ff007f" />
            <path d="M46 50 Q40 58 32 64 M54 50 Q60 58 68 64 M48 51 Q44 64 42 74 M52 51 Q56 64 58 74 M50 52 Q50 68 50 78" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="64" r="2.5" fill="#ff007f" />
            <circle cx="68" cy="64" r="2.5" fill="#ff007f" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (domain && !imgError) {
    return (
      <img 
        src={`https://img.logo.dev/${domain}?token=${token}`}
        alt={`${name} Logo`}
        className="w-full h-full object-contain filter drop-shadow-md transition-all duration-300 rounded-lg p-0.5"
        onError={() => setImgError(true)}
      />
    );
  }

  return renderSvgFallback();
};

export default function Comites() {
  const [hoveredComite, setHoveredComite] = useState(null);

  const comites = [
    { id: 1, name: 'OIT', desc: 'Organización Internacional del Trabajo', topic: 'Justicia Social y Trabajo Decente Global', color: '#3B82F6' },
    { id: 2, name: 'AU', desc: 'African Union', topic: 'Integración, Progreso y Desarrollo Sostenible Africano', color: '#10B981' },
    { id: 3, name: 'BRICS', desc: 'Cooperación del Sur Global', topic: 'Fortalecimiento y Alianzas Financieras Multilaterales', color: '#F59E0B' },
    { id: 4, name: 'ICFJ', desc: 'Prensa (Centro Internacional de Periodistas)', topic: 'Libertad de Prensa y Cobertura de Veracidad Global', color: '#06B6D4' },
    { id: 5, name: 'ICA (1935)', desc: 'Congreso Internacional de Americanistas', topic: 'Preservación Histórica, Identidades y Lenguas de América', color: '#D97706' },
    { id: 6, name: 'Investigación (1925)', desc: 'Investigación del Manuscrito de Voynich', topic: 'Criptografía, Lingüística y el Desafío del Códice Oculto', color: '#10B981' },
    { id: 7, name: 'NASA', desc: 'National Aeronautics and Space Administration (2025)', topic: 'Tópico: El caso del 3i/Atlas', color: '#0052a5' },
    { id: 8, name: 'CORTE (2021)', desc: 'Corte Federal del Distrito Sur de Nueva York', topic: 'Litigio Civil y Jurisprudencia sobre la Privacidad en el Siglo XXI', color: '#64748B' },
    { id: 9, name: 'CRISIS', desc: 'Gabinete de Crisis: Mercado Ilícito de Kraken', topic: 'Operaciones en la Dark Web, Ciberseguridad y Persecución Tecnológica', color: '#EC4899' },
  ];

  return (
    <section id="comites" className="pt-32 pb-48 bg-[radial-gradient(ellipse_at_top,_#0a0a0a_0%,_#000000_100%)] relative overflow-hidden text-white min-h-screen">
      
      {/* Dynamic Background Glow based on hovered committee */}
      <div className="absolute inset-0 pointer-events-none z-0 transition-colors duration-700 opacity-20" 
           style={{ backgroundColor: hoveredComite !== null ? comites[hoveredComite].color : 'transparent' }}>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[1px] bg-white/30"></div>
            <span className="font-codec text-white/50 text-xs uppercase tracking-[0.3em] font-bold">Estructura 2026</span>
            <div className="w-12 h-[1px] bg-white/30"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-maison text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] font-bold tracking-tight uppercase mb-6 leading-none px-4 text-center"
          >
            COMITÉS Y <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-blue-400">MESA</span>
          </motion.h2>
        </div>

        {/* Mesa Directiva (Sleek Glass Cards Redesigned) */}
        <div className="mb-32">
          <h3 className="font-codec text-sm text-white/40 tracking-[0.3em] uppercase mb-8 ml-4 text-center md:text-left">Mesa Directiva de Alta Gama</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: 'Alana Cuicas', 
                role: 'SECRETARIA GENERAL', 
                photo: '/alana.jpg', 
                icon: Landmark, 
                desc: 'Coordinación ejecutiva y protocolar integral del modelo.' 
              },
              { 
                name: 'Carla Marín', 
                role: 'SECRETARIA ACADÉMICA', 
                photo: '/carla.jpg', 
                icon: Scale, 
                desc: 'Supervisión de contenidos, investigaciones y rigor de comités.' 
              },
              { 
                name: 'Gabriel Rodríguez', 
                role: 'SECRETARIO DE LOGÍSTICA', 
                photo: '/gabriel.jpg', 
                icon: Users, 
                desc: 'Gestión operativa, espacios interactivos y despliegue del evento.' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden hover:border-primary-yellow/40 transition-all duration-500 backdrop-blur-xl flex flex-col p-6 min-h-[380px] shadow-2xl"
              >
                {/* Abstract corner decor */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-blue/10 rounded-full blur-2xl group-hover:bg-primary-yellow/20 transition-all duration-500 pointer-events-none"></div>
                
                {/* Large Non-Circular Photo Layout */}
                <div className="w-full h-48 rounded-2xl border border-white/10 group-hover:border-primary-yellow/30 overflow-hidden shadow-lg transition-all duration-500 mb-6 shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                  <img src={item.photo} alt={item.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Glowing Icon Badge moved to image corner */}
                  <div className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center bg-black/60 backdrop-blur-md text-white/70 group-hover:text-primary-yellow group-hover:border-primary-yellow/60 transition-all duration-500 shadow-xl">
                    <item.icon className="w-5 h-5 drop-shadow-md" />
                  </div>
                </div>

                {/* Name, Title & Description Container */}
                <div className="text-left relative z-10 flex-1 flex flex-col justify-start">
                  <span className="font-mono text-[9px] text-[#FFD100] tracking-[0.2em] uppercase font-bold block mb-1.5">{item.role}</span>
                  <h4 className="font-maison font-bold text-2xl md:text-3xl text-white group-hover:text-primary-yellow transition-colors duration-300 leading-none mb-4">{item.name}</h4>
                  
                  <div className="h-[1px] w-12 bg-white/20 group-hover:bg-primary-yellow/50 transition-colors duration-500 mb-4" />
                  
                  <p className="font-codec text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed m-0">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comites (Interactive Sleek List with custom Vector Logos) */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-codec text-sm text-white/40 tracking-[0.3em] uppercase mb-8 ml-4 text-center md:text-left">Comités Oficiales 2026</h3>
          
          <div className="border-t border-white/10 flex flex-col">
            {comites.map((comite, index) => (
              <motion.div 
                key={comite.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredComite(index)}
                onMouseLeave={() => setHoveredComite(null)}
                onClick={() => {
                  if (comite.name === 'CRISIS') {
                    window.location.hash = '#crisis';
                  } else if (comite.name === 'CORTE (2021)') {
                    window.location.hash = '#corte';
                  } else if (comite.name === 'NASA') {
                    window.location.hash = '#nasa';
                  } else if (comite.name === 'ICFJ') {
                    window.location.hash = '#icfj';
                  } else if (comite.name === 'Investigación (1925)') {
                    window.location.hash = '#voynich';
                  } else if (comite.name === 'ICA (1935)') {
                    window.location.hash = '#ica';
                  }
                }}
                className="group border-b border-white/10 py-6 px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer relative overflow-hidden transition-all duration-500 hover:pl-10"
              >
                {/* Hover Background Accent Line */}
                <div 
                  className="absolute left-0 top-0 w-1.5 h-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ backgroundColor: comite.color }}
                ></div>

                <div className="flex items-center gap-4 md:gap-8 relative z-10 w-full md:w-auto">
                  {/* Serial Number */}
                  <span className="font-codec text-white/20 text-base md:text-xl font-bold w-6 shrink-0">0{comite.id}</span>
                  
                  {/* Custom Glowing Committee Logo Container */}
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center p-2.5 shrink-0 transition-all duration-500 shadow-md group-hover:scale-105"
                    style={{ 
                      boxShadow: hoveredComite === index ? `0 10px 30px ${comite.color}20` : 'none',
                      borderColor: hoveredComite === index ? comite.color : 'rgba(255,255,255,0.1)'
                    }}
                  >
                    <CommitteeLogo name={comite.name} />
                  </div>

                  {/* Name and description info */}
                  <div className="ml-2 md:ml-4 text-left">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                      <h3 className="font-maison text-2xl md:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-white transition-all duration-300 leading-tight">
                        {comite.name}
                      </h3>
                      <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase md:translate-y-[-2px]">{comite.desc}</span>
                    </div>
                    <p className="font-codec text-white/50 text-xs md:text-sm lg:text-base leading-snug mt-1 group-hover:text-white/80 transition-colors border-l-2 border-white/5 group-hover:border-white/10 pl-3">
                      {comite.topic}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-4 self-end md:self-center mt-4 md:mt-0">
                  {/* Subtle active status dot */}
                  <span className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" style={{ backgroundColor: comite.color }}></span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white/20 group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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

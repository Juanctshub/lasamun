import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Scale, Users, Gavel, Globe2, ArrowUpRight } from 'lucide-react';

export default function Comites() {
  const [hoveredComite, setHoveredComite] = useState(null);

  const comites = [
    { id: 1, name: 'DISEC', desc: 'Desarme y Seguridad Internacional', icon: Landmark, color: '#0033A0' },
    { id: 2, name: 'CDH', desc: 'Consejo de Derechos Humanos', icon: Scale, color: '#FFD100' },
    { id: 3, name: 'ECOSOC', desc: 'Consejo Económico y Social', icon: Users, color: '#0033A0' },
    { id: 4, name: 'CRISIS', desc: 'Gabinete Histórico de Crisis', icon: Gavel, color: '#FFD100' },
    { id: 5, name: 'OEA', desc: 'Organización de los Estados Americanos', icon: Globe2, color: '#0033A0' },
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
            className="font-maison text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tight uppercase mb-6 leading-none px-4"
          >
            COMITÉS Y <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-blue-400">MESA</span>
          </motion.h2>
        </div>

        {/* Mesa Directiva (Sleek Glass Cards) */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {['SECRETARIO GENERAL', 'DIR. ACADÉMICO', 'DIR. LOGÍSTICA'].map((role, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative h-48 md:h-64 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors backdrop-blur-md flex flex-col justify-between p-6 cursor-default"
              >
                {/* Abstract corner decor */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl group-hover:bg-primary-yellow/20 transition-colors"></div>
                
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 text-white/50 group-hover:text-white group-hover:border-primary-yellow transition-all">
                  <Users className="w-5 h-5" />
                </div>
                
                <div>
                  <span className="font-codec text-xs text-white/40 tracking-widest uppercase mb-1 block">Posición Oficial</span>
                  <h4 className="font-maison font-bold text-2xl text-white group-hover:text-primary-yellow transition-colors">{role}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comites (Interactive Sleek List) */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-codec text-sm text-white/40 tracking-[0.3em] uppercase mb-8 ml-4">Comités Oficiales</h3>
          
          <div className="border-t border-white/10">
            {comites.map((comite, index) => (
              <motion.div 
                key={comite.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredComite(index)}
                onMouseLeave={() => setHoveredComite(null)}
                className="group border-b border-white/10 py-6 md:py-8 px-4 flex items-center justify-between cursor-pointer relative overflow-hidden transition-all hover:pl-8"
              >
                {/* Hover Background Accent Line */}
                <div 
                  className="absolute left-0 top-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: comite.color }}
                ></div>

                <div className="flex items-center gap-6 md:gap-12 relative z-10">
                  <span className="font-codec text-white/20 text-lg md:text-2xl font-bold w-8">0{comite.id}</span>
                  <div>
                    <h3 className="font-maison text-3xl md:text-5xl font-bold text-white mb-2 group-hover:tracking-wide transition-all">{comite.name}</h3>
                    <p className="font-codec text-white/50 text-sm md:text-lg group-hover:text-white/80 transition-colors">{comite.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-6">
                  {/* Icon appears on hover on desktop */}
                  <div className="hidden md:flex w-16 h-16 rounded-full border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" style={{ backgroundColor: `${comite.color}20`, borderColor: comite.color }}>
                    <comite.icon className="w-8 h-8" style={{ color: comite.color }} />
                  </div>
                  
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white/20 group-hover:text-white transition-colors group-hover:rotate-45" />
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

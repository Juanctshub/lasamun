import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, ArrowUpRight, Award, Zap } from 'lucide-react';

export default function Staff() {
  const [activeDept, setActiveDept] = useState('Todos');
  const [selectedMember, setSelectedMember] = useState(null);

  const departments = ['Todos', 'Ejecutivo', 'Académico', 'Logística'];

  const staffList = [
    {
      id: 1,
      name: "Andrés Rodríguez",
      role: "Secretario General",
      dept: "Ejecutivo",
      quote: `La diplomacia es el arte de expandir perspectivas donde la mirada común solo percibe límites insalvables.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Santiago Pérez",
      role: "Director Académico",
      dept: "Ejecutivo",
      quote: `El debate riguroso, el pensamiento crítico y la investigación profunda forjan a los verdaderos líderes del mañana.`,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Valeria Gómez",
      role: "Directora de Logística",
      dept: "Ejecutivo",
      quote: `La excelencia operativa es el motor invisible y riguroso que transforma las grandes ideas en realidades de alto nivel.`,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Camila Silva",
      role: "Sub-Secretaria General",
      dept: "Ejecutivo",
      quote: `La unión de voluntades y la cooperación multilateral generan el impacto global real que nuestras sociedades demandan.`,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Sofía Méndez",
      role: "Coordinadora Académica",
      dept: "Académico",
      quote: `La ciencia, la política y la investigación estructurada deben guiar el rumbo ético de la gobernanza global en este siglo.`,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 12,
      name: "Gabriel Rodríguez",
      role: "Secretario de Logística",
      dept: "Logística",
      quote: `Hola, un placer, soy Gabriel Rodríguez, secretario de logística, delegué en mi periodo de tercer y parte de cuarto año, y me he ausentado del MUN por cuestiones deportivas, pero eso no significa que me ausente en el modelo y de mi delegación. Tengo muchas expectativas del circuito, deseándoles a todos suerte especialmente a los de crisis con el comité de Kraken ideado por mí.

Todo está conectado. 💙💫`,
      image: "/gabriel.jpg"
    },
    {
      id: 9,
      name: "Diego Mendoza",
      role: "Secretario de Logística Adjunto",
      dept: "Logística",
      quote: `Hola, soy Diego Mendoza y soy el Secretario de Logística adjunto de esta II Edición de LASAMUN, mi trayectoria empieza desde hace 2 años en dónde entre al Modelo de Naciones Unidas sin saber nada de política y ahora no paro de pensar en cuando será la próxima vez que delegue, me especializo en comités estilo prensa y ONU, sobre todo con temas de tecnología, espero que sea de su agrado y sobre todo que disfruten el modelo, nos vemos en poco tiempo.

Todo está conectado. 💙💫`,
      image: "/diego.jpg"
    },
    {
      id: 6,
      name: "Mateo Díaz",
      role: "Director de Prensa",
      dept: "Logística",
      quote: `Comunicar con veracidad y documentar el rigor parlamentario es el primer paso indispensable hacia la transparencia democrática.`,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 13,
      name: "Arianna Mendoza",
      role: "Secretaria de Medios",
      dept: "Logística",
      quote: `Hola, soy Arianna Mendoza, secretaria de Publicidad y Medios de LASAMUN. Llevo delegando desde hace dos años, iniciando mi trayecto en el MUN gracias a Voces de la Democracia.

Espero que disfruten mucho de este modelo que hemos organizado con cariño y esfuerzo.

Les deseo muchos éxitos los tres días de modelo ✨

Todo está conectado. 💙💫`,
      image: "/arianna.jpg"
    },
    {
      id: 10,
      name: "Gisel Palma",
      role: "Jefa de Protocolo",
      dept: "Logística",
      quote: `¡Hola! Soy Gisel Palma. Durante el último año y medio he tenido la oportunidad de formar parte del equipo de protocolo en diferentes ponencias y jornadas académicas dentro del Instituto La Salle, una experiencia que para mí ha sido increíble.

En esta ocasión, me parece sumamente emocionante participar por primera vez como Jefa de Protocolo en un modelo. Estoy lista para dar lo mejor de mí junto al equipo. ¡Muchísima suerte en el modelo, chicos!

Todo está conectado. 💫💙`,
      image: "/gisel.jpg"
    },
    {
      id: 11,
      name: "Daniel Sigala",
      role: "Jefe Protocolar",
      dept: "Logística",
      quote: `Hola mi nombre es Daniel Sigala, en esta ocasión soy Jefe Protocolar, un honor para mi; agradezco todo lo que esta maravillosa actividad ha fomentado en mi persona y por toda la gente que he conocido, que disfruten del modelo!

Todo está conectado. 💫💙`,
      image: "/daniel.jpg"
    },
    {
      id: 7,
      name: "Isabella Conti",
      role: "Coordinadora de Protocolo",
      dept: "Logística",
      quote: `El respeto mutuo, la solemnidad parlamentaria y la diplomacia formal abren las puertas al diálogo más constructivo y duradero.`,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Daniel Vargas",
      role: "Coordinador de Finanzas",
      dept: "Logística",
      quote: `Administrar recursos con absoluta transparencia y eficiencia operativa garantiza un ecosistema académico sostenible en el tiempo.`,
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredStaff = activeDept === 'Todos'
    ? staffList
    : staffList.filter(member => member.dept === activeDept);

  return (
    <section id="staff" className="pt-32 pb-48 bg-[#050505] relative min-h-screen text-white overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Luxury Ambient Glow Layers */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Grain Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Luxury Header Design */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] text-[#D4AF37] tracking-[0.35em] uppercase font-bold">
              LASAMUN 2026 • Directorio Oficial
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="font-maison text-5xl md:text-8xl font-black tracking-tight uppercase leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-md"
          >
            Staff <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#D4AF37]/80">Organizador</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-codec text-gray-400 max-w-2xl leading-relaxed font-light text-base md:text-lg"
          >
            El cuerpo de directores, estrategas y coordinadores dedicados a forjar un ecosistema de debate riguroso, excelencia académica y despliegue operativo sin precedentes.
          </motion.p>
        </div>

        {/* Elegant Glassmorphic Filter Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center mb-20 max-w-xl mx-auto"
        >
          <div className="flex flex-wrap md:flex-nowrap gap-1 p-1.5 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl shadow-2xl w-full justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`font-codec text-[10px] md:text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-500 w-full md:w-auto text-center ${
                  activeDept === dept 
                    ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20 scale-100'
                    : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cinematic Grid Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredStaff.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer flex flex-col justify-between bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-[#D4AF37]/50 rounded-[2rem] p-4 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
              >
                <div>
                  {/* Photo Container */}
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative border border-white/5 shadow-inner">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    
                    {/* Corner Tag */}
                    <span className="absolute top-4 left-4 z-20 bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[8px] font-mono uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-bold">
                      {member.dept}
                    </span>

                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />

                    {/* Deluxe Hover Icon */}
                    <div className="absolute bottom-4 right-4 z-20 w-11 h-11 bg-[#D4AF37] text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-[#D4AF37]/35 border border-black/10 scale-95 group-hover:scale-100">
                      <ArrowUpRight className="w-5 h-5 font-bold" />
                    </div>
                  </div>

                  {/* Info Text */}
                  <div className="text-center px-2 pb-2">
                    <h4 className="font-maison font-bold text-2xl text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-1.5">
                      {member.name}
                    </h4>
                    <p className="font-codec text-xs text-gray-400 tracking-wider font-light">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deluxe Cinema Theatre Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
          >
            {/* Elegant Radial Modal Lights */}
            <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-blue-950/20 rounded-full blur-[100px] pointer-events-none" />

            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 z-50 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 45, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 45, scale: 0.98 }}
              transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
              className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 z-10 max-h-[85vh] overflow-y-auto md:overflow-visible pr-2"
            >
              {/* Profile Image Column */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative border border-white/15 drop-shadow-[0_0_35px_rgba(212,175,55,0.15)] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
              </div>

              {/* Seminar Text Column */}
              <div className="w-full md:w-7/12 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-6 text-[#D4AF37]/50 font-mono text-[9px] tracking-[0.3em] uppercase">
                  <Zap className="w-3 h-3 text-[#D4AF37]" />
                  <span>LASAMUN 2026</span>
                </div>

                <h3 className="font-maison text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#D4AF37] mb-3 leading-none tracking-tight">
                  {selectedMember.name}
                </h3>
                
                <p className="font-mono text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#D4AF37] font-bold mb-8 pb-4 border-b border-white/10 flex items-center justify-center md:justify-start gap-2">
                  <span>{selectedMember.role}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-white/60">{selectedMember.dept}</span>
                </p>

                <div className="relative mb-8">
                  <Quote className="absolute -top-6 -left-8 w-16 h-16 text-[#D4AF37]/10 pointer-events-none" />
                  <p className="font-codec text-lg md:text-2xl text-gray-200 leading-relaxed font-light italic border-l-2 border-[#D4AF37] pl-6 md:pl-8 text-left whitespace-pre-line">
                    "{selectedMember.quote}"
                  </p>
                </div>
                
                <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto md:mx-0" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

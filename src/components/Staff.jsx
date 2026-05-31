import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, ArrowUpRight, Award } from 'lucide-react';

export default function Staff() {
  const [activeDept, setActiveDept] = useState('Todos');
  const [selectedMember, setSelectedMember] = useState(null);

  const departments = ['Todos', 'Logística', 'Medios'];

  const staffList = [
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
      id: 13,
      name: "Arianna Mendoza",
      role: "Secretaria de Medios",
      dept: "Medios",
      quote: `Hola, soy Arianna Mendoza, secretaria de Publicidad y Medios de LASAMUN. Llevo delegando desde hace dos años, iniciando mi trayecto en el MUN gracias a Voces de la Democracia.

Espero que disfruten mucho de este modelo que hemos organizado con cariño y esfuerzo.

Les deseo muchos éxitos los tres días de modelo ✨

Todo está conectado. 💙💫`,
      image: "/arianna.jpg"
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
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] text-[#D4AF37] tracking-[0.3em] uppercase font-bold">
              LASAMUN 2026
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="font-maison text-5xl md:text-8xl font-black tracking-tight uppercase leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500"
          >
            Staff <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#D4AF37]/80">Organizador</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-codec text-gray-400 max-w-2xl leading-relaxed font-light text-base"
          >
            El cuerpo de directores, estrategas y coordinadores dedicados a forjar un ecosistema de debate riguroso, excelencia académica y despliegue operativo.
          </motion.p>
        </div>

        {/* Elegant Glassmorphic Filter Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center mb-16 max-w-md mx-auto"
        >
          <div className="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl shadow-2xl w-full justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`font-codec text-[10px] md:text-xs uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-500 w-full text-center ${
                  activeDept === dept 
                    ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cinematic Grid Gallery (Proportional cards for 5 members) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredStaff.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer flex flex-col justify-between bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-[#D4AF37]/50 rounded-[2rem] p-4 transition-all duration-500 shadow-2xl hover:shadow-[0_0_20px_rgba(212,175,55,0.06)]"
              >
                <div>
                  {/* Photo Container */}
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative border border-white/5 shadow-inner">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    
                    {/* Corner Tag */}
                    <span className="absolute top-3 left-3 z-20 bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[8px] font-mono uppercase tracking-[0.25em] px-2.5 py-1 rounded-full font-bold">
                      {member.dept}
                    </span>

                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />

                    {/* Deluxe Hover Icon */}
                    <div className="absolute bottom-3 right-3 z-20 w-9 h-9 bg-[#D4AF37] text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-xl border border-black/10">
                      <ArrowUpRight className="w-4 h-4 font-bold" />
                    </div>
                  </div>

                  {/* Info Text */}
                  <div className="text-center px-1 pb-1">
                    <h4 className="font-maison font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-1">
                      {member.name}
                    </h4>
                    <p className="font-codec text-[11px] text-gray-400 tracking-wider font-light">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Elegant Centered Card Modal (Responsive & perfectly adapted) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
              className="relative w-full max-w-4xl bg-[#0f0f11] border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white rounded-full flex items-center justify-center transition-all duration-300 z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Portrait Photo (Proportional & well-adapted) */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="w-full aspect-[3/4] max-h-[260px] md:max-h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-xl relative">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover filter grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Side: Proportional Typography Details */}
              <div className="w-full md:w-7/12 flex flex-col text-left justify-center">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[8px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full font-bold">
                    {selectedMember.dept}
                  </span>
                  <span className="font-mono text-[9px] text-white/30 tracking-[0.3em] uppercase">
                    LASAMUN 2026
                  </span>
                </div>

                <h3 className="font-maison text-2xl md:text-4xl font-extrabold uppercase text-white tracking-tight mb-2">
                  {selectedMember.name}
                </h3>
                
                <p className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[#D4AF37]/80 font-semibold mb-6 border-b border-white/10 pb-3">
                  {selectedMember.role}
                </p>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-6 w-8 h-8 text-[#D4AF37]/10 pointer-events-none" />
                  <p className="font-codec text-xs md:text-sm text-gray-300 leading-relaxed font-light italic border-l-2 border-[#D4AF37]/45 pl-5 whitespace-pre-line">
                    {selectedMember.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

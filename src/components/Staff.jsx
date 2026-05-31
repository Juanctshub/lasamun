import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, ArrowUpRight } from 'lucide-react';

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
      quote: "La diplomacia es el arte de expandir perspectivas donde la mirada común solo percibe límites insalvables.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Santiago Pérez",
      role: "Director Académico",
      dept: "Ejecutivo",
      quote: "El debate riguroso, el pensamiento crítico y la investigación profunda forjan a los verdaderos líderes del mañana.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Valeria Gómez",
      role: "Directora de Logística",
      dept: "Ejecutivo",
      quote: "La excelencia operativa es el motor invisible y riguroso que transforma las grandes ideas en realidades de alto nivel.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Camila Silva",
      role: "Sub-Secretaria General",
      dept: "Ejecutivo",
      quote: "La unión de voluntades y la cooperación multilateral generan el impacto global real que nuestras sociedades demandan.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Sofía Méndez",
      role: "Coordinadora Académica",
      dept: "Académico",
      quote: "La ciencia, la política y la investigación estructurada deben guiar el rumbo ético de la gobernanza global en este siglo.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Mateo Díaz",
      role: "Director de Prensa",
      dept: "Logística",
      quote: "Comunicar con veracidad y documentar el rigor parlamentario es el primer paso indispensable hacia la transparencia democrática.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Isabella Conti",
      role: "Coordinadora de Protocolo",
      dept: "Logística",
      quote: "El respeto mutuo, la solemnidad parlamentaria y la diplomacia formal abren las puertas al diálogo más constructivo y duradero.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Daniel Vargas",
      role: "Coordinador de Finanzas",
      dept: "Logística",
      quote: "Administrar recursos con absoluta transparencia y eficiencia operativa garantiza un ecosistema académico sostenible en el tiempo.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredStaff = activeDept === 'Todos'
    ? staffList
    : staffList.filter(member => member.dept === activeDept);

  return (
    <section id="staff" className="pt-32 pb-48 bg-[#F8F9FA] relative min-h-screen selection:bg-black selection:text-white">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Minimalist Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-[0.4em] mb-4 block">
            Directorio Oficial
          </span>
          <h2 className="font-maison text-5xl md:text-7xl font-extrabold tracking-tighter uppercase text-black mb-6">
            Conoce a tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-800">Mesa</span>
          </h2>
          <p className="font-codec text-gray-500 max-w-2xl leading-relaxed font-light">
            Descubre a los líderes, estrategas y pensadores que hacen posible la segunda edición de LASAMUN. Un equipo comprometido con la excelencia académica.
          </p>
        </div>

        {/* Elegant Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-20 max-w-xl mx-auto">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`font-codec text-sm uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeDept === dept 
                  ? 'bg-black text-white shadow-xl'
                  : 'bg-transparent text-gray-500 border border-gray-200 hover:border-black hover:text-black'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Clean Grid Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredStaff.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer"
              >
                {/* Photo Container */}
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Info Text */}
                <div className="text-center">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">
                    {member.dept}
                  </span>
                  <h4 className="font-maison font-bold text-2xl text-black mb-1">
                    {member.name}
                  </h4>
                  <p className="font-codec text-sm text-gray-500">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Elegant Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors z-50"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20"
            >
              <div className="w-full md:w-5/12">
                <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>

              <div className="w-full md:w-7/12 text-center md:text-left">
                <Quote className="w-12 h-12 text-gray-200 mb-8 mx-auto md:mx-0" />
                <h3 className="font-maison text-4xl md:text-6xl font-extrabold uppercase text-black mb-4">
                  {selectedMember.name}
                </h3>
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400 mb-12">
                  {selectedMember.role} • {selectedMember.dept}
                </p>
                <p className="font-codec text-xl md:text-3xl text-gray-800 leading-tight font-light italic mb-12">
                  "{selectedMember.quote}"
                </p>
                
                <div className="w-24 h-[1px] bg-black/20 mx-auto md:mx-0" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

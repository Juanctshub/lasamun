import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, ShoppingBag, Heart, X, Check, ShieldCheck, Layers, Eye } from 'lucide-react';

export default function AlmeidasAd() {
  const [activeTab, setActiveTab] = useState('peluche'); // 'peluche' or 'trofeo'
  const [showReserva, setShowReserva] = useState(false);

  const productData = {
    peluche: {
      title: "Peluche Coleccionable",
      tag: "EDICIÓN COLECTOR 01",
      image: "/mini.png",
      glowColor: "rgba(212, 175, 55, 0.15)",
      shadowColor: "rgba(212, 175, 55, 0.35)",
      specs: [
        { label: "MODELO", value: "Mini Almeida Teddy" },
        { label: "MATERIAL", value: "Felpa Premium Ultra-Soft" },
        { label: "DETALLES", value: "Bordado a Mano Oficial" },
        { label: "EDICIÓN", value: "Estrictamente Limitada" }
      ]
    },
    trofeo: {
      title: "Trofeo de Campeón",
      tag: "EDICIÓN CAMPEÓN 02",
      image: "/mini2.png",
      glowColor: "rgba(59, 130, 246, 0.15)",
      shadowColor: "rgba(59, 130, 246, 0.35)",
      specs: [
        { label: "MODELO", value: "Almeida Victory Trophy" },
        { label: "MATERIAL", value: "Polímero y Base Acrílica" },
        { label: "DETALLES", value: "Grabado Láser LASAMUN" },
        { label: "EDICIÓN", value: "Especial para Ganadores" }
      ]
    }
  };

  const current = productData[activeTab];

  return (
    <section id="almeidas-ad" className="relative py-32 bg-[#030303] overflow-hidden text-white border-y border-white/5 selection:bg-[#D4AF37] selection:text-black">
      
      {/* Luxury Golden Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[45vw] h-[45vw] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Subtle Grain Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* Technical Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Luxury Brand Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase font-bold">LIMITED EXHIBITION SERIES</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-maison text-4xl sm:text-7xl font-black uppercase tracking-tight leading-none mb-6 text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500"
          >
            Mini's Almeida <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#D4AF37]">en Venta!</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-16 h-[1.5px] bg-[#D4AF37]/45 mb-6"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="font-codec text-gray-400 max-w-xl leading-relaxed font-light text-sm md:text-base"
          >
            Adquiere la pieza coleccionable más codiciada de la II Edición de LASAMUN. Ediciones limitadas diseñadas para conquistar el circuito.
          </motion.p>
        </div>

        {/* Dynamic Interactive Stage & Copy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Spotlight Stage */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Spotlight Showcase Container */}
            <div className="bg-white/[0.01] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-between shadow-2xl relative overflow-hidden backdrop-blur-3xl">
              
              {/* Abstract Laser Lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
              
              {/* Tab Selector Segmented Control */}
              <div className="flex bg-black/60 border border-white/10 rounded-full p-1 w-full max-w-xs justify-center relative z-20 mb-8">
                <button
                  onClick={() => setActiveTab('peluche')}
                  className={`flex items-center justify-center gap-2 font-codec text-[9px] uppercase tracking-widest py-2 px-4 rounded-full transition-all duration-300 w-full ${
                    activeTab === 'peluche'
                      ? 'bg-[#D4AF37] text-black font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3 h-3" /> Peluche
                </button>
                <button
                  onClick={() => setActiveTab('trofeo')}
                  className={`flex items-center justify-center gap-2 font-codec text-[9px] uppercase tracking-widest py-2 px-4 rounded-full transition-all duration-300 w-full ${
                    activeTab === 'trofeo'
                      ? 'bg-blue-500 text-white font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Award className="w-3 h-3" /> Trofeo
                </button>
              </div>

              {/* Pedestal Tag */}
              <div className="font-mono text-[7px] text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-3 py-1.5 rounded-full font-bold tracking-widest uppercase mb-4 relative z-20">
                {current.tag}
              </div>

              {/* Dynamic Showcase Stage */}
              <div className="w-full aspect-square max-h-[300px] flex items-center justify-center relative mt-4">
                
                {/* Spotlight Ambient Light Cone */}
                <div 
                  className="absolute w-48 h-48 rounded-full blur-[40px] pointer-events-none transition-all duration-700 opacity-20"
                  style={{ backgroundColor: current.glowColor }}
                />

                {/* Pedestal Floor Reflection */}
                <div className="absolute bottom-4 w-40 h-4 bg-white/[0.03] border border-white/5 rounded-full blur-sm transform rotate-x-60 pointer-events-none" />

                {/* Animated Image Element */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center z-10"
                  >
                    <motion.img 
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      src={current.image} 
                      alt={current.title} 
                      className="w-4/5 h-4/5 object-contain filter group-hover:scale-105 transition-all duration-700"
                      style={{ 
                        filter: `drop-shadow(0 15px 30px ${current.shadowColor})`
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Professional Technical Plaque */}
              <div className="w-full bg-black/60 border border-white/10 rounded-2xl p-4 text-center mt-8 shadow-inner relative z-20">
                <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-[0.25em] mb-1 font-semibold">Exhibition Plaque</span>
                <span className="font-maison font-black text-white uppercase text-base tracking-wider block">{current.title}</span>
                <span className="block font-mono text-[7px] text-[#D4AF37] tracking-[0.1em] mt-1.5 font-bold">[ ALMEIDA SERIES 2026 ]</span>
              </div>
            </div>

            {/* Technical Specifications Grid Sheet */}
            <motion.div
              key={`specs-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {current.specs.map((spec, index) => (
                <div key={index} className="bg-white/[0.01] border border-white/5 p-3.5 rounded-2xl text-left">
                  <span className="block font-mono text-[7px] text-gray-500 uppercase tracking-widest font-bold mb-1">{spec.label}</span>
                  <span className="font-codec text-xs font-bold text-gray-200">{spec.value}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Editorial Copywriting */}
          <div className="lg:col-span-6 flex flex-col text-left justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="font-maison text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                La Dinámica Especial
              </h3>

              <div className="font-codec text-gray-300 font-light text-base leading-relaxed mb-8 border-l-2 border-[#D4AF37] pl-6 md:pl-8 space-y-6">
                <p className="text-lg text-white font-medium">
                  Para esta edición del modelo tendremos una dinámica totalmente interactiva y especial en todos los comités. 
                </p>
                <p>
                  Por eso, los <strong>MINI Almeidas</strong> estarán disponibles de forma estrictamente limitada en sus corazones... porque seamos honestos y realistas, ¿quién no querría poseer, abrazar y tener a su lado al peluche más atractivo, elegante y codiciado de todo el circuito?
                </p>
              </div>

              {/* Technical badges spec list */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/10 p-4 rounded-2xl">
                  <Heart className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <span className="block text-[8px] text-gray-500 font-mono uppercase tracking-widest font-bold">Unidades limitadas</span>
                    <span className="font-bold text-xs text-white">Edición Limitada</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/10 p-4 rounded-2xl">
                  <Award className="w-5 h-5 text-blue-400" />
                  <div>
                    <span className="block text-[8px] text-gray-500 font-mono uppercase tracking-widest font-bold">Campeón del Circuito</span>
                    <span className="font-bold text-xs text-white">Trofeo Almeida</span>
                  </div>
                </div>
              </div>

              {/* --- STUNNING HIGH-END GOLDEN TICKET TICKET BUTTON --- */}
              <div className="relative group w-full md:w-auto inline-block">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-2xl blur-xl group-hover:bg-[#D4AF37]/25 transition-all duration-500 pointer-events-none" />
                
                <button 
                  onClick={() => setShowReserva(true)}
                  className="relative w-full md:w-auto overflow-hidden bg-black/40 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-codec font-black tracking-[0.3em] text-[10px] md:text-xs uppercase px-10 py-5 transition-all duration-500 shadow-2xl active:scale-95 border-y border-dashed border-[#D4AF37] hover:border-solid hover:border-[#D4AF37] rounded-xl flex items-center justify-center gap-3"
                >
                  {/* Left Ticket Notch Cutout */}
                  <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-4 bg-[#030303] border-r border-[#D4AF37] rounded-r-full group-hover:border-transparent transition-all" />
                  
                  {/* Right Ticket Notch Cutout */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-4 bg-[#030303] border-l border-[#D4AF37] rounded-l-full group-hover:border-transparent transition-all" />
                  
                  {/* Continuous Glossy Shine Sweep Effect */}
                  <motion.div 
                    animate={{ x: ["-150%", "150%"] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 group-hover:via-black/10 to-transparent skew-x-12 pointer-events-none"
                  />
                  
                  <ShoppingBag className="w-4 h-4" />
                  Reservar Mi Mini Almeida
                </button>
              </div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* Deluxe VIP Certificate Reservation Modal */}
      <AnimatePresence>
        {showReserva && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setShowReserva(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0b0b0d] border border-[#D4AF37]/30 rounded-[2.5rem] p-8 md:p-10 shadow-3xl text-center"
            >
              {/* Outer border of certificate */}
              <div className="absolute inset-2 border border-[#D4AF37]/15 rounded-[2rem] pointer-events-none" />

              <button 
                onClick={() => setShowReserva(false)}
                className="absolute top-5 right-5 w-9 h-9 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded-full flex items-center justify-center transition-all z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-2xl blur-md animate-pulse"></div>
                <ShieldCheck className="w-7 h-7 text-[#D4AF37] relative z-10" />
              </div>

              <span className="block font-mono text-[9px] text-[#D4AF37] tracking-[0.35em] uppercase font-bold mb-2">
                RESERVACIÓN REGISTRADA
              </span>
              
              <h4 className="font-maison text-2xl md:text-3xl font-black uppercase text-white tracking-tight mb-4">
                ¡Tu Mini Almeida!
              </h4>
              
              <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto mb-6" />

              <p className="font-codec text-sm text-gray-300 font-light leading-relaxed mb-8 px-2 text-center">
                Para consolidar tu Mini Almeida (en cualquiera de sus dos codiciadas versiones), acércate directamente al <strong>stand oficial del comité organizador de LASAMUN 2026</strong> durante el primer día del circuito.
              </p>

              <div className="font-mono text-[9px] text-[#D4AF37] tracking-[0.2em] uppercase font-bold bg-[#D4AF37]/5 border border-[#D4AF37]/25 py-3.5 rounded-xl">
                ⚠️ STOCK LIMITADO POR CORAZÓN
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

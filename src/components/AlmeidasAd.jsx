import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, ShoppingBag, Heart, X, Check } from 'lucide-react';

export default function AlmeidasAd() {
  const [showReserva, setShowReserva] = useState(false);

  return (
    <section id="almeidas-ad" className="relative py-28 bg-[#050505] overflow-hidden text-white border-y border-white/5 selection:bg-[#D4AF37] selection:text-black">
      
      {/* Luxury Golden Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Grain Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block (Animate on Mount for 100% visibility) */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#D4AF37] mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase font-bold">EDICIÓN DE COLECCIÓN</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-maison text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-4 text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
          >
            Mini's Almeida <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#D4AF37]">en Venta!</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-codec text-gray-400 max-w-xl leading-relaxed font-light text-sm md:text-base"
          >
            Adquiere la pieza más emblemática y codiciada de la II Edición de LASAMUN. Ediciones limitadas diseñadas para conquistar el circuito.
          </motion.p>
        </div>

        {/* Dynamic Interactive Ad Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Asymmetric Showcase Pedestals */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 relative">
            
            {/* Pedestal 1: Plush Version */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-between shadow-2xl relative group hover:border-[#D4AF37]/50 transition-colors backdrop-blur-md"
            >
              <div className="absolute top-4 left-4 z-20 font-mono text-[7px] text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded-full">
                EDICIÓN PELUCHE
              </div>
              
              {/* Floating Plush Illustration */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full aspect-square flex items-center justify-center p-2 mt-4 relative z-10"
              >
                <img 
                  src="/mini.png" 
                  alt="Mini Almeida Peluche" 
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <div className="text-center mt-4">
                <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest mb-1">Collector Item</span>
                <span className="font-maison font-bold text-white uppercase text-base tracking-wider block">Peluche Almeida</span>
              </div>
            </motion.div>

            {/* Pedestal 2: Trophy Version */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-between shadow-2xl relative group hover:border-blue-500/50 transition-colors backdrop-blur-md mt-6 lg:mt-10"
            >
              <div className="absolute top-4 left-4 z-20 font-mono text-[7px] text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                EDICIÓN TROFEO
              </div>
              
              {/* Floating Trophy Illustration */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full aspect-square flex items-center justify-center p-2 mt-4 relative z-10"
              >
                <img 
                  src="/mini2.png" 
                  alt="Mini Almeida Trofeo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(59,130,246,0.25)] group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <div className="text-center mt-4">
                <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest mb-1">Champion Special</span>
                <span className="font-maison font-bold text-white uppercase text-base tracking-wider block">Trofeo Almeida</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Info Copy */}
          <div className="lg:col-span-6 flex flex-col text-left justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="font-maison text-3xl font-extrabold text-white mb-6 uppercase tracking-tight leading-snug">
                ¿Preparado para Conquistar el Circuito?
              </h3>

              <div className="font-codec text-gray-300 font-light text-base leading-relaxed mb-8 border-l-2 border-[#D4AF37]/50 pl-6 space-y-4">
                <p>
                  Para esta edición del modelo tendremos una <strong>dinámica totalmente especial y exclusiva</strong>. 
                </p>
                <p>
                  Por eso, los <strong>MINI Almeidas</strong> estarán disponibles de forma estrictamente limitada en sus corazones... porque seamos honestos, ¿quién no querría poseer y tener a su lado al peluche más atractivo, elegante y codiciado de todo el circuito?
                </p>
              </div>

              {/* Bullet Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <Heart className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest">Edición Especial</span>
                    <span className="font-bold text-xs">Pocas Unidades</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <Award className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest">Colección Oficial</span>
                    <span className="font-bold text-xs">Trofeo Inmortal</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => setShowReserva(true)}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 hover:from-white hover:to-white text-black font-codec font-bold tracking-widest text-xs uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#D4AF37]/25 hover:shadow-white/15 scale-100 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                Reservar Mi Mini Almeida
              </button>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Reservation Popup Modal */}
      <AnimatePresence>
        {showReserva && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/85 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setShowReserva(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0f0f11] border border-white/10 rounded-[2rem] p-8 shadow-2xl text-center"
            >
              <button 
                onClick={() => setShowReserva(false)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 bg-[#D4AF37]/15 border border-[#D4AF37]/35 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Check className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <h4 className="font-maison text-2xl font-bold uppercase text-white tracking-tight mb-2">¡Reserva tu Mini Almeida!</h4>
              <p className="font-codec text-sm text-gray-400 font-light leading-relaxed mb-6">
                Para consolidar tu Mini Almeida (en cualquiera de sus dos codiciadas versiones), acércate directamente al <strong>stand oficial del comité organizador de LASAMUN 2026</strong> durante el primer día del circuito.
              </p>

              <span className="block font-mono text-[9px] text-[#D4AF37] tracking-[0.2em] uppercase font-bold bg-[#D4AF37]/5 border border-[#D4AF37]/20 py-2.5 rounded-lg">
                ¡UNIDADES EXTREMADAMENTE LIMITADAS!
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

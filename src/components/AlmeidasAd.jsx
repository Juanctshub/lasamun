import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, ShoppingBag, Heart, X, Check, ShieldCheck, HelpCircle } from 'lucide-react';

export default function AlmeidasAd() {
  const [showReserva, setShowReserva] = useState(false);

  return (
    <section id="almeidas-ad" className="relative py-32 bg-[#030303] overflow-hidden text-white border-y border-white/5 selection:bg-[#D4AF37] selection:text-black">
      
      {/* Luxury Golden Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[45vw] h-[45vw] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Subtle Grain Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* Elegant Technical Grid Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Luxury Brand Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
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
            Descubre y reserva la pieza coleccionable más codiciada de la II Edición de LASAMUN. Diseños exclusivos construidos para conmemorar tu liderazgo.
          </motion.p>
        </div>

        {/* Dynamic Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Floating Glass Pedestals */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
            
            {/* Pedestal 1: Plush Version (The Collector Glass) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 rounded-[2.5rem] p-8 flex flex-col items-center justify-between shadow-2xl relative group transition-all duration-500 backdrop-blur-3xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)]"
            >
              {/* Corner Tag */}
              <div className="absolute top-5 left-5 z-20 font-mono text-[7px] text-[#D4AF37] border border-[#D4AF37]/35 bg-[#D4AF37]/5 px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                EDICIÓN 01
              </div>

              {/* Floating Plush Illustration */}
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full aspect-square flex items-center justify-center p-3 mt-6 relative z-10"
              >
                {/* Under-glow for Plush */}
                <div className="absolute w-3/4 h-3/4 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all duration-500 pointer-events-none z-0" />
                <img 
                  src="/mini.png" 
                  alt="Mini Almeida Peluche" 
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(212,175,55,0.3)] group-hover:scale-105 group-hover:rotate-2 transition-transform duration-700 z-10"
                />
              </motion.div>

              {/* Engraved Plaque */}
              <div className="w-full bg-black/50 border border-white/10 rounded-xl p-3.5 text-center mt-6 shadow-inner group-hover:border-[#D4AF37]/30 transition-colors">
                <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-[0.25em] mb-1 font-semibold">Collector Plaque</span>
                <span className="font-maison font-black text-white uppercase text-sm tracking-wider block">Peluche Almeida</span>
                <span className="block font-mono text-[7px] text-[#D4AF37] tracking-[0.1em] mt-1.5 font-bold">[ ALMEIDA COLL. 2026 ]</span>
              </div>
            </motion.div>

            {/* Pedestal 2: Trophy Version (The Champion Glass) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 hover:border-blue-500/50 rounded-[2.5rem] p-8 flex flex-col items-center justify-between shadow-2xl relative group transition-all duration-500 backdrop-blur-3xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)] mt-0 sm:mt-12"
            >
              {/* Corner Tag */}
              <div className="absolute top-5 left-5 z-20 font-mono text-[7px] text-blue-400 border border-blue-500/35 bg-blue-500/5 px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                EDICIÓN 02
              </div>

              {/* Floating Trophy Illustration */}
              <motion.div
                animate={{ y: [12, -12, 12] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full aspect-square flex items-center justify-center p-3 mt-6 relative z-10"
              >
                {/* Under-glow for Trophy */}
                <div className="absolute w-3/4 h-3/4 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500 pointer-events-none z-0" />
                <img 
                  src="/mini2.png" 
                  alt="Mini Almeida Trofeo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(59,130,246,0.3)] group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-700 z-10"
                />
              </motion.div>

              {/* Engraved Plaque */}
              <div className="w-full bg-black/50 border border-white/10 rounded-xl p-3.5 text-center mt-6 shadow-inner group-hover:border-blue-500/30 transition-colors">
                <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-[0.25em] mb-1 font-semibold">Champion Special</span>
                <span className="font-maison font-black text-white uppercase text-sm tracking-wider block">Trofeo Almeida</span>
                <span className="block font-mono text-[7px] text-blue-400 tracking-[0.1em] mt-1.5 font-bold">[ CHAMPION EDITION 🏆 ]</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Editorial Copywriting */}
          <div className="lg:col-span-6 flex flex-col text-left justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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

              {/* Features Specification Cards */}
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

              {/* Elegant Gold CTA Button */}
              <button 
                onClick={() => setShowReserva(true)}
                className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 hover:from-white hover:to-white text-black font-codec font-bold tracking-widest text-xs uppercase px-8 py-4.5 rounded-xl transition-all duration-300 shadow-2xl shadow-[#D4AF37]/20 hover:shadow-white/10 scale-100 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                Reservar Mi Mini Almeida
              </button>
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
              {/* Outer Glow certificate card */}
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

import React from 'react';
import { motion } from 'framer-motion';
import { Music, Camera, Sparkles, Zap, Flame } from 'lucide-react';

export default function Starvibe() {
  return (
    <section id="starvibe" className="relative min-h-screen py-32 bg-black overflow-hidden flex flex-col justify-center">
      
      {/* Intense Festival Background (Optimized Hardware Acceleration) */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
        {/* Neon Pink Orb */}
        <div className="absolute top-0 left-[10%] w-[50vw] h-[50vw] bg-[#ff007f]/20 rounded-full blur-[120px] mix-blend-screen" />
        {/* Neon Cyan Orb */}
        <div className="absolute bottom-0 right-[10%] w-[60vw] h-[60vw] bg-[#00f0ff]/15 rounded-full blur-[150px] mix-blend-screen" />
        {/* Deep Purple Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#7928CA]/20 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Subtle Stardust Texture */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* Marquee Background Text (Súper Fiestero / Festival Vibe) */}
      <div className="absolute top-1/3 left-0 w-full overflow-hidden whitespace-nowrap -rotate-3 opacity-[0.03] pointer-events-none z-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="inline-flex whitespace-nowrap"
        >
          <h2 className="font-maison text-[8rem] sm:text-[14rem] md:text-[20rem] font-bold text-white uppercase leading-none tracking-tighter">
            STARVIBE BEYOND DEBATE STARVIBE BEYOND DEBATE STARVIBE
          </h2>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#ff007f]/30 bg-[#ff007f]/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,0,127,0.3)]"
          >
            <Flame className="w-5 h-5 text-[#ff007f] animate-pulse" />
            <span className="text-white font-codec text-sm tracking-[0.3em] font-bold">AFTERPARTY & MEDIA</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-maison text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-6 relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 block drop-shadow-2xl">
              STAR<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#7928CA]">VIBE</span>
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-codec text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md space-y-6"
          >
            <p>
              El sentido de la palabra "interconexión" no es solo para dar un sentido a la ramificación de problemáticas, representa una fuente de solidaridad y fortaleza. En esta II Edición de LASAMUN deseamos recordar el valor de la esperanza, forjamos una comunidad de creación, pensamiento crítico, unida por el amor y el sueño de valernos por la justicia y la sostenibilidad.
            </p>
            <p>
              Es por ello que, siguiendo con esta idea, se han diseñado espacios idóneos para desenvolverte como delegado y como humano, buscando que en este Modelo de Naciones Unidas reine la fraternidad mediante actividades recreativas.
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Neon Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Social Events Card (Bigger) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 sm:p-10 md:p-14 text-left group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#ff007f]/50 transition-colors backdrop-blur-xl"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff007f]/20 rounded-full blur-[50px] group-hover:bg-[#ff007f]/40 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff007f] to-[#7928CA] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,0,127,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-maison text-5xl font-bold text-white mb-4">Eventos Sociales</h3>
              <p className="font-codec text-gray-400 text-lg leading-relaxed mb-8">Fiestas de gala, DJ sets en vivo y networking nocturno diseñados para celebrar la verdadera diplomacia y crear lazos que duran toda la vida.</p>
              
              <div className="inline-flex items-center gap-2 text-[#ff007f] font-codec font-bold tracking-widest text-sm uppercase cursor-pointer hover:text-white transition-colors">
                Descubrir Lineup <Zap className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Press Corps Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 sm:p-10 md:p-12 text-left group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#00f0ff]/50 transition-colors backdrop-blur-xl flex flex-col justify-center"
          >
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-[50px] group-hover:bg-[#00f0ff]/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00f0ff] to-[#0055ff] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-maison text-4xl font-bold text-white mb-4">Press Corps</h3>
              <p className="font-codec text-gray-400 text-lg leading-relaxed">Cobertura mediática en vivo, entrevistas exclusivas y la captura de cada momento histórico del evento.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

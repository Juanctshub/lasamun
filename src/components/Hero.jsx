import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-48 overflow-hidden z-10 bg-[#050505]" style={{ transform: 'translateZ(0)' }}>
      
      {/* Optimized Twinkling Stars (Pure GPU accelerated CSS) */}
      <style>{`
        @keyframes twinkle-hero {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.25; }
        }
        .hero-stars {
          position: absolute;
          width: 1.5px;
          height: 1.5px;
          background: white;
          box-shadow: 
            5vw 10vh 1px white, 15vw 12vh 2px white, 25vw 5vh 1px white,
            35vw 18vh 2.5px white, 45vw 2vh 1px white, 55vw 15vh 2px white,
            65vw 8vh 1px white, 75vw 12vh 2.5px white, 85vw 4vh 1px white,
            95vw 16vh 2px white, 8vw 45vh 1.5px white, 18vw 60vh 1px white,
            28vw 52vh 2px white, 38vw 40vh 1px white, 48vw 65vh 2px white,
            58vw 50vh 1.5px white, 68vw 58vh 1px white, 78vw 48vh 2.5px white,
            88vw 62vh 1px white, 98vw 42vh 2px white, 12vw 80vh 2px white,
            22vw 75vh 1px white, 32vw 88vh 2px white, 42vw 82vh 1.5px white,
            52vw 90vh 1px white, 62vw 85vh 2px white, 72vw 78vh 2px white,
            82vw 92vh 1px white, 92vw 85vh 1.5px white;
          animation: twinkle-hero 6s infinite linear;
          pointer-events: none;
          will-change: opacity;
        }
      `}</style>

      {/* GPU Accelerated Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hero-stars absolute inset-0"></div>
      </div>

      {/* Deep Background Typography Parallax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="font-maison font-bold text-[20vw] leading-none text-transparent opacity-5 whitespace-nowrap select-none" style={{ WebkitTextStroke: '2px white' }}>
          LASAMUN
        </h1>
      </div>

      {/* Intense Glowing Orbs (Hardware composited) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ transform: 'translateZ(0)' }}>
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-primary-blue/15 rounded-full blur-[150px] mix-blend-screen"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.08, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-primary-yellow/12 rounded-full blur-[150px] mix-blend-screen"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
      </div>
      
      <div className="absolute inset-0 z-10 bg-[url('/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-20 max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white font-codec text-sm md:text-base tracking-[0.2em] mb-10 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse"></span>
          EDICIÓN 2026
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-maison text-4xl sm:text-6xl md:text-[7rem] leading-[0.85] font-bold mb-8 text-white tracking-tight"
        >
          <span className="text-secondary-white block drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">DESCUBRE EL MUN</span>
          <span className="font-codec font-medium tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow via-white to-primary-blue block mt-2 drop-shadow-[0_0_20px_rgba(255,209,0,0.2)]">
            LASALLISTA
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="font-codec text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Transforma tu visión del mundo. Un espacio interactivo donde las ideas brillantes forjan el futuro global.
        </motion.p>
      </div>



      {/* Yellow glow adapting to the wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary-yellow/30 to-transparent z-10 pointer-events-none blur-3xl"></div>

      {/* Multi-layered Organic SVG Divider blending into Tematica (#F9FAFB) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 text-[#F9FAFB]" style={{ transform: 'translateY(1px)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 lg:h-32">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.63,22.78,109.11,44.95,178.5,50.77,227.18,54.84,275.5,58.33,321.39,56.44Z" className="fill-current opacity-40"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}

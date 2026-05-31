import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const menuItems = [
    { name: 'Inicio', href: '#home', hoverClass: 'hover:text-primary-yellow hover:drop-shadow-[0_0_20px_rgba(255,209,0,0.6)]' },
    { name: 'Temática', href: '#tematica', hoverClass: 'hover:text-primary-yellow hover:drop-shadow-[0_0_20px_rgba(255,209,0,0.6)]' },
    { name: 'Save The Date', href: '#savethedate', hoverClass: 'hover:text-primary-yellow hover:drop-shadow-[0_0_20px_rgba(255,209,0,0.6)]' },
    { name: 'Comités', href: '#comites', hoverClass: 'hover:text-white hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]' },
    { name: 'Reglamentos Generales', href: '#reglamentos', hoverClass: 'hover:text-white hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]' },
    { name: 'Staff', href: '#staff', hoverClass: 'hover:text-primary-yellow hover:drop-shadow-[0_0_20px_rgba(255,209,0,0.6)]' },
    { name: 'Top Fotos', href: '#galeria', hoverClass: 'hover:text-primary-yellow hover:drop-shadow-[0_0_20px_rgba(255,209,0,0.6)]' },
    { name: 'Starvibe', href: '#starvibe', hoverClass: 'hover:text-[#ff007f] hover:drop-shadow-[0_0_20px_rgba(255,0,127,0.7)]' },
  ];

  const getGlowColor = () => {
    if (hoveredIndex === null) return 'rgba(255, 209, 0, 0.04)';
    const item = menuItems[hoveredIndex];
    if (item.name === 'Starvibe') return 'rgba(255, 0, 127, 0.15)'; // Starvibe neon pink
    if (item.name === 'Comités') return 'rgba(255, 255, 255, 0.12)'; // White
    return 'rgba(255, 209, 0, 0.12)'; // Yellow
  };

  return (
    <>
      {/* Floating Split Navigation - White Theme Controls */}
      <div className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
        <div className="container mx-auto px-6 pt-6 flex justify-between items-start">
          
          {/* Logos Capsule (Top Left) - Always Pure White */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`pointer-events-auto flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-white border border-gray-200 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-gray-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] ${
              scrolled ? 'translate-y-[-10px] scale-95 shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-gray-300' : ''
            }`}
          >
            <img 
              src="/lasalle.png" 
              alt="La Salle" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer filter brightness-100 drop-shadow-sm" 
              onClick={() => {
                if (menuOpen) toggleMenu();
                window.location.hash = '#home';
                window.dispatchEvent(new HashChangeEvent('hashchange'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <div className="w-[1px] h-8 bg-gray-200 rounded-full"></div>
            <img 
              src="/lasamun.png" 
              alt="Lasamun" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer filter brightness-100 drop-shadow-sm" 
              onClick={() => {
                if (menuOpen) toggleMenu();
                window.location.hash = '#home';
                window.dispatchEvent(new HashChangeEvent('hashchange'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>

          {/* Magnetic Menu Button (Top Right) - Always Pure White */}
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={toggleMenu} 
            className={`pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col justify-center items-center gap-[6px] bg-white border border-gray-200 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-gray-300 hover:scale-110 group ${
              scrolled ? 'translate-y-[-10px] scale-95 shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-gray-300' : ''
            }`}
          >
            <span className={`w-7 sm:w-8 h-[2.5px] rounded-full transition-all duration-400 ease-in-out ${menuOpen ? 'translate-y-[8.5px] rotate-45 bg-primary-yellow' : 'bg-[#0033A0] group-hover:bg-primary-yellow'}`}></span>
            <span className={`w-7 sm:w-8 h-[2.5px] rounded-full transition-all duration-400 ease-in-out ${menuOpen ? 'opacity-0' : 'bg-[#0033A0] group-hover:w-5'}`}></span>
            <span className={`w-7 sm:w-8 h-[2.5px] rounded-full transition-all duration-400 ease-in-out ${menuOpen ? '-translate-y-[8.5px] -rotate-45 bg-primary-yellow' : 'bg-[#0033A0] group-hover:bg-primary-yellow'}`}></span>
          </motion.button>
          
        </div>
      </div>

      {/* Fullscreen Interactive Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 bg-[#03030f] z-[999] flex items-center justify-center overflow-hidden"
          >
            {/* Drifting subtle cosmic background elements */}
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
            
            {/* Drifting blurred cosmic nebula background */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                x: [0, 40, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[450px] h-[450px] rounded-full bg-primary-blue/15 blur-[120px] pointer-events-none top-1/4 left-1/4 z-0 will-change-transform"
            />

            {/* Dynamic, interactive back-glow that shifts color on link hover */}
            <div 
              className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ease-out z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-[background-color]"
              style={{ backgroundColor: getGlowColor() }}
            />
            
            <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 pt-28 pb-12 overflow-y-auto md:overflow-hidden">
              
              {/* Left Pane (Artistic Editorial Block - Hidden on mobile for cleaner spacing) */}
              <div className="hidden md:flex flex-col items-start justify-center w-5/12 text-left relative h-full border-r border-white/10 pr-12">
                
                {/* Spinning constellation/universe wheel */}
                <div className="absolute -top-14 -left-14 w-80 h-80 opacity-15 pointer-events-none animate-[spin_100s_linear_infinite] will-change-transform">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-white">
                    <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                    <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 4" />
                    <path d="M15 100 H185 M100 15 V185" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />
                    <circle cx="100" cy="35" r="3" fill="#FFD100" />
                    <circle cx="165" cy="100" r="2.5" fill="#ff007f" />
                    <circle cx="100" cy="165" r="4" fill="currentColor" />
                    <line x1="35" y1="35" x2="165" y2="165" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                    <line x1="165" y1="35" x2="35" y2="165" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <span className="font-codec text-xs text-white/30 tracking-[0.3em] uppercase mb-1 block">Modelo de Naciones Unidas</span>
                  <h3 className="font-maison text-[2.8rem] lg:text-[3.5rem] leading-none font-bold text-white uppercase tracking-tight mb-6">
                    LASAMUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-white">2026</span>
                  </h3>
                  
                  {/* Metadata display table */}
                  <div className="border-t border-b border-white/10 py-6 my-6 w-full flex flex-col gap-3 font-codec text-xs text-white/50 tracking-wider min-w-[280px]">
                    <div className="flex justify-between">
                      <span className="text-white/20 uppercase tracking-widest">Ubicación:</span>
                      <span className="font-light">Barquisimeto, Venezuela</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/20 uppercase tracking-widest">Coordenadas:</span>
                      <span className="font-mono font-light">10.4806° N, 66.9036° W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/20 uppercase tracking-widest">Edición:</span>
                      <span className="font-light">II Aniversario</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/20 uppercase tracking-widest">Lema Vibe:</span>
                      <span className="text-primary-yellow font-bold uppercase tracking-widest">Expandiendo Límites</span>
                    </div>
                  </div>
                  
                  <p className="font-codec text-xs text-white/40 leading-relaxed font-light italic max-w-xs">
                    "El arte del diálogo constructivo y la diplomacia consiste en forjar puentes de entendimiento mutuo donde la mirada común solo percibe barreras insalvables."
                  </p>
                </div>
              </div>
              
              {/* Right Pane (Main Menu Links - Centers on Mobile for perfect breathing room) */}
              <div className="w-full md:w-7/12 flex flex-col justify-center items-center md:items-start h-full">
                <ul className="flex flex-col gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center md:items-start w-full pl-0 md:pl-12">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 + index * 0.07, duration: 0.5 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group flex items-center md:items-baseline justify-center md:justify-start gap-4 w-full py-1 md:py-1.5"
                    >
                      {/* Monospace Gold Serial Counter - Hidden on mobile to prevent squished layouts */}
                      <span className="hidden md:inline-block font-mono text-xs text-primary-yellow/40 group-hover:text-primary-yellow transition-all duration-300 select-none tracking-widest shrink-0 w-12 text-right">
                        [ 0{index + 1} ]
                      </span>
                      
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (menuOpen) toggleMenu();
                          window.location.hash = item.href;
                          window.dispatchEvent(new HashChangeEvent('hashchange'));
                        }}
                        className={`font-maison text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[2.75rem] leading-[1.1] font-bold uppercase block w-full text-center md:text-left transition-all duration-500 text-white/30 group-hover:text-white group-hover:translate-x-3 drop-shadow-none ${item.hoverClass}`}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

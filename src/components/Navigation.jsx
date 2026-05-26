import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    { name: 'Top Fotos', href: '#galeria', hoverClass: 'hover:text-primary-yellow hover:drop-shadow-[0_0_20px_rgba(255,209,0,0.6)]' },
    { name: 'Starvibe', href: '#starvibe', hoverClass: 'hover:text-[#ff007f] hover:drop-shadow-[0_0_20px_rgba(255,0,127,0.7)]' },
  ];

  return (
    <>
      {/* Innovative Split Navigation */}
      <div className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
        <div className="container mx-auto px-6 pt-6 flex justify-between items-start">
          
          {/* Logos Capsule (Top Left) - Pure White Stylized */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`pointer-events-auto flex items-center gap-4 px-5 py-2 rounded-2xl bg-white border border-gray-100 transition-all duration-500 shadow-xl shadow-primary-blue/5 ${
              scrolled ? 'translate-y-[-10px] scale-95 shadow-primary-blue/10' : ''
            }`}
          >
            <img 
              src="/lasalle.png" 
              alt="La Salle" 
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '#home');
              }}
            />
            <div className="w-[2px] h-10 bg-gray-200 rounded-full"></div>
            <img 
              src="/lasamun.png" 
              alt="Lasamun" 
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '#home');
              }}
            />
          </motion.div>

          {/* Magnetic Menu Button (Top Right) - Pure White Stylized */}
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={toggleMenu} 
            className={`pointer-events-auto relative w-16 h-16 rounded-full flex flex-col justify-center items-center gap-[6px] bg-white border border-gray-100 transition-all duration-500 shadow-xl shadow-primary-blue/5 hover:scale-110 group ${
              scrolled ? 'translate-y-[-10px] scale-95 shadow-primary-blue/10' : ''
            }`}
          >
            <span className={`w-8 h-[3px] rounded-full transition-all duration-400 ease-in-out ${menuOpen ? 'translate-y-[9px] rotate-45 bg-primary-yellow' : 'bg-primary-blue group-hover:bg-primary-yellow'}`}></span>
            <span className={`w-8 h-[3px] rounded-full transition-all duration-400 ease-in-out ${menuOpen ? 'opacity-0' : 'bg-primary-blue group-hover:w-6'}`}></span>
            <span className={`w-8 h-[3px] rounded-full transition-all duration-400 ease-in-out ${menuOpen ? '-translate-y-[9px] -rotate-45 bg-primary-yellow' : 'bg-primary-blue group-hover:bg-primary-yellow'}`}></span>
          </motion.button>
          
        </div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 bg-dark-blue z-[999] flex items-center justify-center"
          >
            {/* Subtle background dots for texture */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--primary-yellow) 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
            
            <ul className="text-center z-10 flex flex-col gap-8 w-full max-w-4xl px-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="w-full"
                >
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className={`font-maison text-5xl md:text-7xl font-bold uppercase block w-full text-center transition-all duration-300 text-white/40 hover:scale-110 drop-shadow-none ${item.hoverClass}`}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

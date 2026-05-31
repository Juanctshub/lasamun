import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-white text-neutral-950 pt-10 pb-8 overflow-visible">
      
      {/* Multi-layered Small Wave SVG Divider from dark Starvibe to white Footer (Made Smaller) */}
      <div className="absolute left-0 w-full z-20 text-white -top-6 md:-top-10 lg:-top-14 overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-6 md:h-10 lg:h-14">
          {/* Layer 1: Semi-transparent wave */}
          <path d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z" className="fill-current opacity-30"></path>
          {/* Layer 2: Semi-transparent wave with different phase */}
          <path d="M0,50 C200,20 400,80 700,40 C1000,0 1100,60 1200,30 L1200,120 L0,120 Z" className="fill-current opacity-55"></path>
          {/* Layer 3: Solid wave */}
          <path d="M0,60 C300,20 600,100 900,40 C1050,10 1150,50 1200,60 L1200,120 L0,120 Z" className="fill-current"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logos (Larger & Well-adapted) */}
        <div className="flex items-center justify-center gap-8 mb-6 md:mb-8">
          <img src="/lasalle.png" alt="La Salle Logo" className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]" />
          <div className="h-12 w-[1px] bg-neutral-200 hidden md:block"></div>
          <img src="/lasamun.png" alt="Lasamun Logo" className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]" />
        </div>
        
        {/* Editorial Text Blocks - Larger & Well-adapted */}
        <p className="font-codec text-lg md:text-2xl text-neutral-800 max-w-3xl mx-auto leading-relaxed font-semibold tracking-normal">
          Fomentando el pensamiento crítico, la diplomacia y el liderazgo global.
        </p>
        <span className="block text-xs md:text-sm text-neutral-400 mt-4 tracking-widest uppercase font-medium">&copy; 2026 Todos los derechos reservados.</span>
        <a 
          href="https://www.instagram.com/fotagreda/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xs md:text-sm text-neutral-400 hover:text-neutral-900 mt-3 tracking-widest uppercase font-bold transition-colors duration-300 group"
        >
          Creado por <span className="underline underline-offset-4 group-hover:text-primary-blue transition-colors">fotagreda</span>
        </a>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Sparkles, Plus } from 'lucide-react';

export default function SaveTheDate() {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent('LASAMUN II EDICIÓN');
    const details = encodeURIComponent('Prepárate para 3 días llenos de diálogo, academia y diplomacia en la segunda edición del Modelo de Naciones Unidas.');
    const location = encodeURIComponent('Colegio La Salle');
    const dates = '20260605T120000Z/20260607T220000Z'; // Format: YYYYMMDDTHHmmssZ

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="savethedate" className="pt-32 pb-48 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_#0033A0_0%,_#001B5E_100%)] flex items-center justify-center min-h-[80vh]">
      
      {/* Background Experimental Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ transform: 'translateZ(0)' }}>
        {/* Massive Yellow Orb */}
        <div 
          className="absolute -top-[30%] -right-[10%] w-[80vw] h-[80vw] bg-primary-yellow/30 rounded-full blur-[120px]"
        />
        {/* Massive Blue Orb */}
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px]"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        {/* Giant Watermark Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-center opacity-10">
          <h2 className="font-maison text-[30vw] font-bold leading-none whitespace-nowrap text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)', color: 'transparent' }}>
            2026
          </h2>
        </div>

        {/* Floating Abstract Crosses */}
        <Plus className="absolute top-20 left-20 text-white/20 w-8 h-8" />
        <Plus className="absolute bottom-20 right-32 text-primary-yellow/40 w-12 h-12" />
        <Plus className="absolute top-40 right-20 text-white/10 w-6 h-6" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Date Typography Block */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col justify-center relative"
        >
          <div className="mb-4">
            <h2 className="font-maison text-4xl sm:text-5xl md:text-[4rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-white uppercase drop-shadow-md">
              Save The Date
            </h2>
          </div>

          <div className="relative inline-block">
            <h3 className="font-maison text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.8] font-bold text-white mb-2 relative z-10 drop-shadow-2xl">
              5,6<span className="text-primary-yellow">.</span>7
            </h3>
            <h4 className="font-maison text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 absolute bottom-0 right-0 md:right-10 translate-y-[40%] uppercase z-0 pointer-events-none">
              Junio
            </h4>
            <div className="absolute -right-8 top-1/4 px-4 py-1 bg-primary-yellow text-secondary-black font-codec text-xs font-bold uppercase tracking-widest rounded-full rotate-12 shadow-lg">
              #LASAMUN
            </div>
          </div>
        </motion.div>

        {/* Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/2 relative"
        >
          {/* Decorative floating glass card behind */}
          <div className="absolute -right-4 -bottom-4 w-full h-full bg-primary-yellow/20 rounded-[2rem] sm:rounded-[3rem] -z-10 blur-xl"></div>

          <div className="bg-white/10 backdrop-blur-2xl p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden group">
            {/* Hover glow effect inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-primary-yellow/20 transition-colors duration-500"></div>

            <h3 className="font-maison text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4 flex items-center gap-3">
              LASAMUN II EDICIÓN
              <Sparkles className="text-primary-yellow w-5 h-5 sm:w-6 sm:h-6" />
            </h3>
            
            <p className="font-codec text-lg text-white/80 mb-8 leading-relaxed font-light">
              No olvides guardar la fecha en tu calendario. Prepárate para 3 días intensos llenos de diálogo, debate académico, alianzas estratégicas y verdadera diplomacia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center gap-3 text-white/90 font-codec text-sm bg-black/20 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-md">
                <CalendarDays className="w-5 h-5 text-primary-yellow" />
                <span>5-7 Junio, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 font-codec text-sm bg-black/20 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-primary-yellow" />
                <span>Colegio La Salle</span>
              </div>
            </div>

            <button 
              onClick={handleAddToCalendar}
              className="group/btn relative w-full overflow-hidden rounded-full bg-primary-yellow px-6 sm:px-8 py-3.5 sm:py-4 text-center font-maison font-bold text-base sm:text-lg md:text-xl text-secondary-black transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,209,0,0.4)] flex justify-center items-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                AGENDAR EN EL CALENDARIO
              </span>
              <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover/btn:w-full z-0"></div>
            </button>
          </div>
        </motion.div>

      </div>

      {/* Multi-layered Organic SVG Divider blending into Comites (#0a0a0a) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 text-[#0a0a0a]" style={{ transform: 'translateY(1px)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 lg:h-32">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.63,22.78,109.11,44.95,178.5,50.77,227.18,54.84,275.5,58.33,321.39,56.44Z" className="fill-current opacity-40"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}

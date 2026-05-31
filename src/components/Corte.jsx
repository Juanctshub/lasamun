import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, FileText, Globe, Gavel, Landmark, Users } from 'lucide-react';

const Block = ({ title, icon: Icon, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.6 }}
    className="bg-[#1A1814] border border-[#D4AF37]/20 rounded-xl p-8 relative overflow-hidden group shadow-xl"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon className="w-32 h-32 text-[#D4AF37]" />
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
          <Icon className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <h3 className="font-maison text-2xl uppercase tracking-widest text-[#E5D3B3]">{title}</h3>
      </div>
      <div className="font-codec text-[#E5D3B3]/70 leading-relaxed font-light text-sm md:text-base space-y-4">
        {children}
      </div>
    </div>
  </motion.div>
);

export default function Corte() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="corte" className="pt-24 pb-32 bg-[#0A0908] relative overflow-hidden min-h-screen text-[#E5D3B3] selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Majestic Imagery */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-top opacity-10 filter sepia-[.3] grayscale-[.8]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-[#0A0908]/90 to-[#0A0908]" />
      </div>

      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#8B7355]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* HERO SECTION */}
        <div className="flex flex-col items-center justify-center min-h-[55vh] text-center mb-16 mt-12 relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="p-5 border border-[#D4AF37]/30 rounded-full bg-[#1A1814] mb-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative">
              <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-full animate-ping" />
              <Scale className="w-12 h-12 text-[#D4AF37]" strokeWidth={1} />
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6 block border-b border-[#D4AF37]/30 pb-2 px-8">
              Corte Federal del Distrito Sur de Nueva York (2021)
            </span>

            <h1 className="font-maison text-[4rem] sm:text-[5.5rem] md:text-[7rem] font-extrabold tracking-tighter uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#D4AF37] drop-shadow-2xl mb-8 max-w-5xl">
              CASO GHISLAINE MAXWELL
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 items-center font-codec text-sm text-[#E5D3B3]/60 tracking-widest uppercase">
              <span className="flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-sm border border-[#D4AF37]/20">
                <Globe className="w-4 h-4 text-[#D4AF37]" /> Modalidad: Mixto / Individual
              </span>
            </div>
          </motion.div>
        </div>

        {/* MAIN CONTEXT BLOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Block title="El Epicentro Logístico" icon={Users} delay={0.2}>
            <p>
              Ghislaine Maxwell, socialité británica e hija del magnate de medios Robert Maxwell, se posiciona como la pieza ejecutiva y logística fundamental en la red de tráfico sexual de Jeffrey Epstein.
            </p>
            <p>
              Su rol fue determinante, no solo como reclutora de menores, a quienes captaba aprovechando su estatus y vulnerabilidad, sino también como la facilitadora que conectaba este sistema de abusos con figuras influyentes de la política y la realeza mundial.
            </p>
          </Block>

          <Block title="La Estructura Criminal" icon={Landmark} delay={0.4}>
            <p>
              El proceso ante la Corte Federal del Distrito Sur de Nueva York expone una estructura criminal de alta sofisticación que utilizó la legitimidad socioeconómica como un escudo operativo inquebrantable durante décadas.
            </p>
            <p>
              Tras años de impunidad y el polémico suicidio de Epstein, Maxwell fue capturada y condenada en el año 2021, marcando un hito judicial que destapó la cara más oscura, perversa y encubierta de la élite global.
            </p>
          </Block>
        </div>

        {/* THE CENTRAL DILEMMA */}
        <div className="bg-[#1A1814] border-y border-[#D4AF37]/30 py-20 px-8 relative overflow-hidden text-center shadow-[0_0_100px_rgba(212,175,55,0.05)]">
          <div className="max-w-4xl mx-auto relative z-10">
            <Gavel className="w-16 h-16 text-[#D4AF37]/30 mx-auto mb-8" />
            <h3 className="font-maison text-3xl md:text-5xl uppercase font-bold text-[#D4AF37] mb-8 leading-tight">
              ¿Prevalecerá la justicia sobre los privilegios de clase?
            </h3>
            <p className="font-codec text-lg md:text-xl text-[#E5D3B3]/80 leading-relaxed font-light mb-12">
              El problema central reside en el desafío histórico de romper el círculo de impunidad que protege a las figuras de alto estatus. El uso de recursos financieros ilimitados para influir en la narrativa y silenciar a las víctimas plantea la necesidad de que el sistema judicial establezca un precedente sobre la responsabilidad penal de los "colaboradores necesarios".
            </p>
            <div className="inline-block border-l-2 border-[#D4AF37] pl-6 py-2 text-left italic font-codec text-[#E5D3B3]/60">
              "¿Se convertirá el juicio contra Maxwell en el primer golpe real contra la infraestructura del tráfico de influencias, o terminará siendo una demostración de que el poder económico sigue siendo un refugio inexpugnable ante la ley?"
            </div>
          </div>
        </div>

        {/* DOCUMENTS & RESOURCES */}
        <div className="mt-24 mb-16 text-center">
          <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold block mb-4">Registro Oficial</span>
          <h2 className="font-maison text-4xl uppercase font-bold tracking-tight mb-12">Expedientes Judiciales</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setActiveModal('docs')}
              className="group bg-[#1A1814] border border-[#D4AF37]/20 hover:border-[#D4AF37] p-8 rounded-xl transition-all duration-300 w-full md:w-80 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText className="w-10 h-10 text-[#D4AF37] mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="font-maison text-xl font-bold uppercase mb-2 text-[#E5D3B3]">Dossier del Caso</h4>
              <span className="font-mono text-[9px] text-[#D4AF37]/50 uppercase tracking-[0.2em]">Archivos Clasificados</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL - Placeholder for docs */}
      <AnimatePresence>
        {activeModal === 'docs' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="max-w-md w-full bg-[#1A1814] border border-[#D4AF37]/40 rounded-xl p-10 text-center relative shadow-[0_0_100px_rgba(212,175,55,0.15)]"
            >
              <FileText className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-80" />
              <h3 className="font-maison text-2xl uppercase font-bold mb-4 tracking-wide text-[#E5D3B3]">Aviso de la Corte</h3>
              <p className="font-codec text-sm text-[#E5D3B3]/60 mb-10 leading-relaxed">
                Los expedientes, actas de testimonio y la guía académica del Distrito Sur de Nueva York estarán disponibles en esta terminal de consulta pública próximamente.
              </p>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-full py-4 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 font-mono text-xs uppercase tracking-[0.3em] transition-colors border border-[#D4AF37]/30 text-[#D4AF37] hover:text-[#FFF]"
              >
                Cerrar Expediente
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

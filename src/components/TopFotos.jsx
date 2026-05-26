import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera, Calendar, MapPin } from 'lucide-react';

const allPhotos = [
  "54749.jpg", "54750.jpg", "54751.jpg", "54752.jpg", "54757.jpg",
  "54758.jpg", "54760.jpg", "54761.jpg", "54762.jpg", "54765.jpg",
  "54781.jpg", "54782.jpg", "54783.jpg", "54784.jpg", "54785.jpg",
  "54786.jpg", "54787.jpg", "54790.jpg", "54795.jpg", "54796.jpg",
  "54797.jpg", "54798.jpg", "54799.jpg", "54800.jpg", "54801.jpg",
  "54802.jpg", "54804.jpg", "54805.jpg", "54806.jpg"
];

// Rich descriptive editorial mapping for the gallery photos to decorate the lightbox
const photoDetails = {
  "54749.jpg": { title: "Diálogo y Consenso", desc: "Delegados colaborando estrechamente durante la redacción de la resolución preliminar del comité.", camera: "SONY α7R V ✦ 85mm ✦ f/1.8", date: "26 Mayo, 2026" },
  "54750.jpg": { title: "Podio de la Convicción", desc: "Oratoria de alto impacto y fuerza argumentativa defendiendo los intereses del comité ante la asamblea general.", camera: "NIKON Z8 ✦ 70-200mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54751.jpg": { title: "Debate y Estrategia", desc: "El intercambio dinámico de posturas diplomáticas para dar respuesta a complejos desafíos transfronterizos.", camera: "CANON EOS R5 ✦ 50mm ✦ f/1.2", date: "26 Mayo, 2026" },
  "54752.jpg": { title: "Liderazgo Plenario", desc: "La Mesa Directiva coordinando las mociones parlamentarias e intervenciones de las delegaciones oficiales.", camera: "SONY α7R V ✦ 35mm ✦ f/1.4", date: "26 Mayo, 2026" },
  "54757.jpg": { title: "Alianzas Estratégicas", desc: "Negociaciones y diálogos informales construyendo bloques de votación y enmiendas conjuntas.", camera: "NIKON Z8 ✦ 50mm ✦ f/1.4", date: "26 Mayo, 2026" },
  "54758.jpg": { title: "Pasión Diplomática", desc: "El instante exacto en el que un delegado expone con pasión y elocuencia la postura nacional de su delegación.", camera: "CANON EOS R5 ✦ 85mm ✦ f/1.4", date: "26 Mayo, 2026" },
  "54760.jpg": { title: "Análisis Riguroso", desc: "Concentración total revisando minuciosamente las cláusulas del borrador de resolución final del foro.", camera: "SONY α7R V ✦ 70-200mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54761.jpg": { title: "Sinergia Plenaria", desc: "El debate constructivo y la diplomacia abierta convergen para forjar un consenso internacional sin precedentes.", camera: "NIKON Z8 ✦ 24-70mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54762.jpg": { title: "La Oratoria del Futuro", desc: "Fomentando el pensamiento crítico, la retórica fina y el liderazgo en la juventud de hoy.", camera: "CANON EOS R5 ✦ 35mm ✦ f/1.8", date: "26 Mayo, 2026" },
  "54765.jpg": { title: "Protocolo Parlamentario", desc: "Respeto solemne a las normas parlamentarias durante la sesión extraordinaria del foro.", camera: "SONY α7R V ✦ 85mm ✦ f/1.4", date: "26 Mayo, 2026" },
  "54781.jpg": { title: "Visión Global", desc: "Comprendiendo las diferentes aristas de las problemáticas mundiales con empatía y absoluto rigor intelectual.", camera: "NIKON Z8 ✦ 50mm ✦ f/1.8", date: "26 Mayo, 2026" },
  "54782.jpg": { title: "Elocuencia Estudiantil", desc: "Una presentación sobresaliente que captura la atención e interés de toda la asamblea presente.", camera: "CANON EOS R5 ✦ 70-200mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54783.jpg": { title: "Tratados Colectivos", desc: "El fruto de horas de debate y deliberación parlamentaria plasmado en un acuerdo multilateral robusto.", camera: "SONY α7R V ✦ 24-70mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54784.jpg": { title: "El Espíritu Lasallista", desc: "Fraternidad, respeto mutuo y excelencia académica brillando en las jornadas de debate.", camera: "NIKON Z8 ✦ 35mm ✦ h-1.4", date: "26 Mayo, 2026" },
  "54785.jpg": { title: "Forjando el Mañana", desc: "Desarrollando habilidades de negociación racional frente a crisis geopolíticas de alto impacto.", camera: "CANON EOS R5 ✦ 50mm ✦ f/1.2", date: "26 Mayo, 2026" },
  "54786.jpg": { title: "Foro de Inspiración", desc: "El espacio ideal para debatir soluciones transformadoras que inspiren cambios globales duraderos.", camera: "SONY α7R V ✦ 50mm ✦ f/1.8", date: "26 Mayo, 2026" },
  "54787.jpg": { title: "Pluralidad de Voces", desc: "Representar diversas culturas fomenta la empatía y enriquece nuestra visión en la mesa de diálogo.", camera: "NIKON Z8 ✦ 85mm ✦ f/1.4", date: "26 Mayo, 2026" },
  "54790.jpg": { title: "Gabinete en Alerta", desc: "Tomando decisiones bajo escenarios geopolíticos cambiantes y simulaciones de crisis extremas.", camera: "CANON EOS R5 ✦ 24-70mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54795.jpg": { title: "Negociación Activa", desc: "Aportando enfoques constructivos para romper el estancamiento de las comisiones de trabajo.", camera: "SONY α7R V ✦ 70-200mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54796.jpg": { title: "Lazos de Respeto", desc: "El debate es riguroso, pero la amistad surgida entre las delegaciones y colegios perdura en el tiempo.", camera: "NIKON Z8 ✦ 35mm ✦ f/1.8", date: "26 Mayo, 2026" },
  "54797.jpg": { title: "Retórica Intelectual", desc: "Exposiciones fundamentadas y sólidas para edificar políticas de bienestar común y derechos humanos.", camera: "CANON EOS R5 ✦ 85mm ✦ f/1.2", date: "26 Mayo, 2026" },
  "54798.jpg": { title: "Redacción y Lógica", desc: "Construyendo enmiendas claras y lógicas que sumen consensos mayoritarios en la votación plenaria.", camera: "SONY α7R V ✦ 50mm ✦ f/1.4", date: "26 Mayo, 2026" },
  "54799.jpg": { title: "El Momento de la Votación", desc: "La culminación exitosa de un proceso parlamentario transparente y sumamente enriquecedor.", camera: "NIKON Z8 ✦ 24-70mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54800.jpg": { title: "Compromiso Cívico", desc: "Jóvenes comprometidos con la búsqueda racional de la paz, la equidad y la diplomacia global.", camera: "CANON EOS R5 ✦ 35mm ✦ f/1.4", date: "26 Mayo, 2026" },
  "54801.jpg": { title: "Presidente de Comisión", desc: "Moderando el debate con absoluta imparcialidad, solidez protocolar y respeto mutuo constante.", camera: "SONY α7R V ✦ 85mm ✦ f/1.8", date: "26 Mayo, 2026" },
  "54802.jpg": { title: "Excelencia y Oratoria", desc: "La preparación académica y el análisis previo brillan con fuerza en cada réplica y oratoria.", camera: "NIKON Z8 ✦ 50mm ✦ f/1.2", date: "26 Mayo, 2026" },
  "54804.jpg": { title: "Rigor Intelectual", desc: "El análisis riguroso y académico de los documentos de postura eleva el estándar del modelo.", camera: "CANON EOS R5 ✦ 70-200mm ✦ f/2.8", date: "26 Mayo, 2026" },
  "54805.jpg": { title: "Liderazgo en Debate", desc: "Cuestionando posturas convencionales para dar cabida a resoluciones innovadoras e integrales.", camera: "SONY α7R V ✦ 35mm ✦ f/1.8", date: "26 Mayo, 2026" },
  "54806.jpg": { title: "Diplomacia Fraterna", desc: "Las sonrisas compartidas después del debate son el reflejo del aprendizaje y hermandad en LASAMUN.", camera: "NIKON Z8 ✦ 24-70mm ✦ f/2.8", date: "26 Mayo, 2026" }
};

// Divide into 3 distinct rows for the marquee
const row1 = allPhotos.slice(0, 10);
const row2 = allPhotos.slice(10, 20);
const row3 = allPhotos.slice(20, 29);

const MarqueeRow = ({ images, reverse, duration, onImageClick }) => {
  const content = [...images, ...images];
  
  return (
    <div className="flex overflow-hidden whitespace-nowrap w-full group relative z-10 py-2">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: duration }}
        className="flex gap-4 md:gap-6 w-max pr-4 md:pr-6"
      >
        {content.map((photo, idx) => (
          <motion.div 
            key={`${photo}-${idx}`} 
            whileHover={{ scale: 1.05, zIndex: 20 }}
            className="relative w-56 h-40 md:w-80 md:h-56 lg:w-[28rem] lg:h-[20rem] rounded-3xl overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 shrink-0"
            onClick={() => onImageClick(photo)}
          >
            <img 
              src={`/fotoslasa/${photo}`} 
              alt="Gallery Memory" 
              loading="lazy" 
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-500" 
            />
            {/* Interactive Hover Overlay */}
            <div className="absolute inset-0 bg-primary-blue/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl transform scale-50 hover:scale-100 transition-transform duration-300">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TopFotos() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeria" className="pt-20 pb-32 relative bg-gradient-to-b from-[#0b0b2b] via-[#1b2735] to-[#090a0f] overflow-hidden text-white min-h-screen flex flex-col justify-center">
      
      {/* Starry Night CSS Keyframe Animations with Triple Density */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.25; }
        }
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(25deg);
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(50vh) rotate(25deg);
            opacity: 0;
          }
        }
        .stars-background {
          width: 1.5px;
          height: 1.5px;
          position: absolute;
          background: white;
          box-shadow: 
            2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white,
            22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white,
            38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white,
            53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white,
            68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white,
            83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white,
            98vw 35vh 2px white, 5vw 60vh 1px white, 12vw 65vh 2px white,
            18vw 72vh 1px white, 25vw 78vh 2px white, 30vw 85vh 1px white,
            35vw 68vh 2px white, 40vw 82vh 1px white, 45vw 92vh 2px white,
            50vw 75vh 1px white, 55vw 88vh 2px white, 60vw 95vh 1px white,
            65vw 72vh 2px white, 70vw 85vh 1px white, 75vw 78vh 2px white,
            80vw 92vh 1px white, 85vw 82vh 2px white, 90vw 88vh 1px white,
            95vw 75vh 2px white,
            3vw 25vh 1px white, 14vw 12vh 2px white, 27vw 45vh 1px white,
            34vw 60vh 2px white, 41vw 10vh 1px white, 52vw 82vh 2px white,
            61vw 22vh 1px white, 72vw 58vh 2px white, 84vw 14vh 1px white,
            91vw 89vh 2px white, 8vw 38vh 1.5px white, 19vw 90vh 1px white,
            26vw 5vh 2px white, 33vw 72vh 1px white, 47vw 64vh 2px white,
            56vw 18vh 1px white, 69vw 77vh 2px white, 76vw 3vw 1.5px white,
            87vw 62vh 1px white, 94vw 11vh 2px white,
            12vw 92vh 1.5px white, 29vw 19vh 2px white, 43vw 50vh 1px white,
            59vw 6vh 2px white, 67vw 88vh 1px white, 81vw 27vh 1px white,
            86vw 95vh 2px white, 97vw 3vh 2px white, 2vw 88vh 1px white,
            15vw 41vh 2.5px white, 23vw 55vh 1px white, 37vw 8vh 2px white,
            49vw 33vh 1.5px white, 51vw 60vh 2px white, 62vw 49vh 1px white,
            78vw 15vh 2px white, 89vw 70vh 1.5px white, 99vw 82vh 1px white;
          animation: twinkle 8s infinite linear;
          pointer-events: none;
        }
        .stars-background::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          box-shadow: 
            8vw 12vh 2px white, 16vw 18vh 1px white, 24vw 25vh 2px white,
            33vw 15vh 1px white, 41vw 28vh 2px white, 49vw 35vh 1px white,
            57vw 22vh 2px white, 65vw 42vh 1px white, 73vw 28vh 2px white,
            81vw 48vh 1px white, 89vw 32vh 2px white, 97vw 45vh 1px white,
            3vw 68vh 2px white, 11vw 75vh 1px white, 19vw 82vh 2px white,
            27vw 88vh 1px white, 35vw 72vh 2px white, 43vw 85vh 1px white,
            51vw 92vh 2px white, 59vw 78vh 1px white,
            6vw 4vh 1.5px white, 17vw 30vh 1px white, 21vw 85vh 2px white,
            38vw 52vh 1.5px white, 46vw 12vh 2px white, 58vw 63vh 1px white,
            64vw 9vh 2px white, 71vw 82vh 1.5px white, 82vw 38vh 1px white,
            92vw 60vh 2px white, 96vw 18vh 2px white, 4vw 95vh 1px white,
            13vw 15vh 2.5px white, 28vw 68vh 1px white, 36vw 2vh 2px white,
            42vw 88vh 1.5px white, 55vw 50vh 2px white, 68vw 12vh 1px white,
            77vw 91vh 2px white, 85vw 23vh 1.5px white, 90vw 77vh 2px white;
          animation: twinkle 6s infinite linear reverse;
          pointer-events: none;
        }
        .shooting-star {
          position: absolute;
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.9), transparent);
          animation: shoot 4s infinite ease-in;
          pointer-events: none;
        }
      `}</style>

      {/* Starry Sky and Shooting Stars Layout */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="stars-background absolute inset-0"></div>
        <div className="shooting-star" style={{ top: '15%', left: '-120px', animationDelay: '0s', animationDuration: '3.5s' }}></div>
        <div className="shooting-star" style={{ top: '35%', left: '-120px', animationDelay: '1.2s', animationDuration: '4.5s' }}></div>
        <div className="shooting-star" style={{ top: '55%', left: '-120px', animationDelay: '2.8s', animationDuration: '3.8s' }}></div>
        <div className="shooting-star" style={{ top: '75%', left: '-120px', animationDelay: '0.8s', animationDuration: '4.8s' }}></div>
      </div>

      {/* Diffused Cosmic Nebulas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-[#0033A0]/15 blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]"></div>
        <div className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] rounded-full bg-[#FFD100]/8 blur-[160px] mix-blend-screen animate-pulse duration-[12000ms]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[#ff007f]/8 blur-[140px] mix-blend-screen animate-pulse duration-[8000ms]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mb-10">
        
        {/* Modern Futuristic Typographic Composition (Balanced, Borderless & Premium) */}
        <div className="relative w-full max-w-3xl mx-auto mb-10 py-6">
          
          {/* Geometric Cosmic Accent (Delicate floating elements behind raw text) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
            <div className="w-56 h-56 rounded-full border border-dashed border-[#FFD100]/40 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[20rem] h-[1px] bg-gradient-to-r from-transparent via-[#FFD100]/50 to-transparent"></div>
            <div className="absolute h-[20rem] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>

          {/* Elegant Modern Category Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs font-codec text-[#FFD100] tracking-[0.35em] uppercase font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,209,0,0.3)] relative z-10"
          >
            ✦ GALERÍA OFICIAL ✦
          </motion.div>

          {/* Main Title Stacked Style - PERFECTLY BALANCED SIZING, BORDERLESS & RAW */}
          <div className="flex flex-col items-center gap-1.5 relative z-10">
            {/* "TOP FOTOS" */}
            <motion.h1 
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="font-maison text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase text-white tracking-tight leading-none select-none bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
            >
              TOP FOTOS
            </motion.h1>

            {/* "LASAS" with thin clean cosmic line */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex items-center gap-4 w-full justify-center mt-2"
            >
              <div className="h-[1px] flex-grow max-w-[50px] md:max-w-[100px] bg-gradient-to-r from-transparent to-[#FFD100]/60"></div>
              <span className="font-codec text-2xl md:text-4xl lg:text-5xl font-black text-[#FFD100] tracking-[0.25em] uppercase leading-none drop-shadow-[0_0_20px_rgba(255,209,0,0.6)] select-none">
                LASAS
              </span>
              <div className="h-[1px] flex-grow max-w-[50px] md:max-w-[100px] bg-gradient-to-l from-transparent to-[#FFD100]/60"></div>
            </motion.div>
          </div>

          {/* Clean Monospace Metadata (Borderless & Elegant) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 font-mono text-[9px] md:text-xs text-white/40 tracking-[0.25em] uppercase flex items-center justify-center gap-3 relative z-10"
          >
            <span>[ ARCHIVE 2026 ]</span>
            <span className="h-1 w-1 rounded-full bg-[#FFD100]"></span>
            <span>[ RESOLUTION 4K ]</span>
          </motion.div>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 font-codec text-sm md:text-base text-gray-300 max-w-xl mx-auto font-normal leading-relaxed drop-shadow"
        >
          Desliza por los momentos más épicos y capturas exclusivas del evento.
        </motion.p>
      </div>

      {/* Infinite Scrolling Cinematic Rows */}
      <div className="flex flex-col gap-4 md:gap-6 relative z-10 my-8">
        {/* Gradients on the edges to fade out the photos smoothly into the deep space background */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#0b0b2b] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#090a0f] to-transparent z-20 pointer-events-none"></div>

        <MarqueeRow images={row1} duration={60} onImageClick={setSelectedImage} />
        <MarqueeRow images={row2} duration={50} reverse onImageClick={setSelectedImage} />
        <MarqueeRow images={row3} duration={70} onImageClick={setSelectedImage} />
      </div>

      {/* Interactive Lightbox Modal (Premium Dual-Pane Editorial Modal) */}
      <AnimatePresence>
        {selectedImage && (() => {
          const detail = photoDetails[selectedImage] || { 
            title: "Captura Oficial", 
            desc: "Un momento memorable capturando el espíritu diplomático y de liderazgo en LASAMUN 2026.", 
            camera: "CAPTURA OFICIAL ✦ 2026",
            date: "26 Mayo, 2026" 
          };
          return (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-2xl cursor-pointer overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative max-w-5xl w-full bg-[#090a18]/80 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl md:min-h-[480px] my-auto cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-all bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-2.5 z-50 shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Pane: Image Section */}
                <div className="w-full md:w-3/5 bg-black/40 flex items-center justify-center p-4 md:p-6 min-h-[280px] md:min-h-[480px] border-b md:border-b-0 md:border-r border-white/5 relative group">
                  <img 
                    src={`/fotoslasa/${selectedImage}`} 
                    alt={detail.title} 
                    className="max-w-full max-h-[50vh] md:max-h-[70vh] rounded-xl object-contain shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                {/* Right Pane: Editorial Info Section */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between text-left bg-gradient-to-br from-[#0c0d24]/50 to-transparent">
                  
                  {/* Top content */}
                  <div>
                    {/* Camera Info Badge */}
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-[#FFD100] tracking-widest uppercase mb-1">
                      <Camera className="w-3.5 h-3.5 text-[#FFD100]" />
                      <span>{detail.camera}</span>
                    </div>

                    <div className="h-[1px] w-12 bg-[#FFD100]/30 my-3"></div>

                    {/* Editorial Title */}
                    <h3 className="font-maison text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight">
                      {detail.title}
                    </h3>

                    {/* Editorial Description (Como para decorar) */}
                    <p className="font-codec text-sm md:text-base text-gray-300 font-light leading-relaxed tracking-normal mt-4 border-l-2 border-[#FFD100]/20 pl-3">
                      {detail.desc}
                    </p>
                  </div>

                  {/* Bottom stamp */}
                  <div className="border-t border-white/5 pt-5 mt-6 flex flex-col gap-2">
                    {/* Quick Metadata */}
                    <div className="flex items-center gap-4 text-[9px] font-mono text-white/30 tracking-wider">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#FFD100]/60" />
                        <span>{detail.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FFD100]/60" />
                        <span>COLEGIO LA SALLE</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[9px] text-white/20 tracking-[0.2em] mt-1">
                      <span>LASAMUN ARCHIVE © 2026</span>
                      <span className="text-[#FFD100]/40 uppercase">[ REGISTRO OFICIAL ]</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Organic SVG Divider blending into Starvibe (#000000) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 text-[#000000]" style={{ transform: 'translateY(1px)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 lg:h-32">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.63,22.78,109.11,44.95,178.5,50.77,227.18,54.84,275.5,58.33,321.39,56.44Z" className="fill-current opacity-40"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-current"></path>
        </svg>
      </div>

    </section>
  );
}

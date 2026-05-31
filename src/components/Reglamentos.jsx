import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Shirt, FileText, ChevronRight, Download, Briefcase, FileSignature } from 'lucide-react';

const sections = [
  {
    id: 'reglamento',
    title: 'Reglamento General',
    icon: BookOpen,
    content: (
      <div className="space-y-6">
        <h3 className="font-maison text-3xl font-bold text-[#0033A0] mb-6">Reglamento General del Modelo</h3>
        <p className="font-codec text-gray-600 leading-relaxed mb-8">
          El Reglamento General establece las bases y procedimientos formales bajo los cuales operarán todos los comités regulares. Consúltalo a detalle.
        </p>
        <a href="https://drive.google.com/file/d/1sBzDw4sb9jjzndyA2RJCBTNYKzCHaGlc/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white border border-[#0033A0]/20 rounded-2xl hover:border-[#0033A0] hover:shadow-lg transition-all group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#0033A0]/5 rounded-xl group-hover:bg-[#0033A0] transition-colors">
              <BookOpen className="w-6 h-6 text-[#0033A0] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-[#0033A0]">Reglamento General</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 block mt-1">Archivo PDF (Drive)</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0033A0] transform group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    )
  },
  {
    id: 'baremos',
    title: 'Directrices y Baremos',
    icon: Briefcase,
    content: (
      <div className="space-y-6">
        <h3 className="font-maison text-3xl font-bold text-[#0033A0] mb-6">Baremos de Evaluación</h3>
        <p className="font-codec text-gray-600 leading-relaxed mb-8">
          Conoce los criterios exactos bajo los cuales las Mesas Directivas evaluarán el desempeño, la oratoria y la diplomacia de las delegaciones para el proceso de premiación.
        </p>
        <a href="https://drive.google.com/file/d/1GrZWZbHPZjBafoljdWNLVfdnKH31Np8U/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white border border-primary-yellow/50 rounded-2xl hover:border-primary-yellow hover:shadow-lg transition-all group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary-yellow/10 rounded-xl group-hover:bg-primary-yellow transition-colors">
              <Briefcase className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-gray-800">Directrices y Baremos</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 block mt-1">Archivo PDF (Drive)</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-yellow transform group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    )
  },
  {
    id: 'documentos',
    title: 'Guía de Documentos',
    icon: FileText,
    content: (
      <div className="space-y-6">
        <h3 className="font-maison text-3xl font-bold text-[#0033A0] mb-6">Documentación Sustancial</h3>
        <p className="font-codec text-gray-600 leading-relaxed mb-8">
          Consulta la guía teórica para la elaboración de documentos (DPO y DPP), así como los distintos ejemplos prácticos redactados para que sirvan de orientación.
        </p>
        
        <a href="https://drive.google.com/file/d/1m9pHplbkw7PdIW4SoUOPzRnyRpPmWaFb/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-[#0033A0] text-white rounded-2xl hover:bg-[#002277] hover:shadow-xl transition-all group mb-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 rounded-xl">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold">Guía de Documentos</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mt-1">Manual de Redacción (Drive)</span>
            </div>
          </div>
          <Download className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        </a>

        <h4 className="font-codec text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200 pb-2">Ejemplos Prácticos Oficiales</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Ejemplo DPO/DPP 1", link: "https://drive.google.com/file/d/14kBwwh9x9e12GFl9g5drdfLYey3dexvC/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 2", link: "https://drive.google.com/file/d/1DYDqxYjE9gWZX3IcMw0p9gn9WQnr-QYN/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 3", link: "https://drive.google.com/file/d/1Q_Nwcp6_PVgJw1XgBr-DTnnlCvUjSNrv/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 4", link: "https://drive.google.com/file/d/1aO9noqZEA6IomxF4t5X52dvKqwsZpjEB/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 5", link: "https://drive.google.com/file/d/1iy8b6xvHUeEvzkU5XzlCA7k-Z1H-j0T9/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 6", link: "https://drive.google.com/file/d/1p2IEzBh1d_xZVYIz0QvRqUnxNZ5ZcHHp/view?usp=sharing" },
          ].map((ej, idx) => (
            <a key={idx} href={ej.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#0033A0]/30 hover:bg-[#0033A0]/5 transition-colors group">
              <FileSignature className="w-4 h-4 text-gray-400 group-hover:text-[#0033A0]" />
              <span className="font-codec text-sm font-medium text-gray-600 group-hover:text-[#0033A0]">{ej.name}</span>
            </a>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'vestimenta',
    title: 'Código de Vestimenta',
    icon: Shirt,
    content: (
      <div className="space-y-6">
        <h3 className="font-maison text-3xl font-bold text-[#0033A0] mb-6">Etiqueta y Protocolo</h3>
        <p className="font-codec text-gray-600 leading-relaxed mb-8">
          El código de vestimenta es "Formal Occidental". Se espera que todos los delegados mantengan una presentación pulcra que refleje la seriedad de Lasamun. Revisa a detalle los parámetros permitidos.
        </p>
        <a href="https://drive.google.com/file/d/1228J4wX-iJ7eFotIVVupjdSSKHZ4SbId/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white border border-[#0033A0]/20 rounded-2xl hover:border-[#0033A0] hover:shadow-lg transition-all group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#0033A0]/5 rounded-xl group-hover:bg-[#0033A0] transition-colors">
              <Shirt className="w-6 h-6 text-[#0033A0] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-[#0033A0]">Código de Vestimenta</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 block mt-1">Archivo PDF (Drive)</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0033A0] transform group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    )
  },
  {
    id: 'horarios',
    title: 'Horarios',
    icon: Clock,
    content: (
      <div className="space-y-6">
        <h3 className="font-maison text-3xl font-bold text-[#0033A0] mb-6">Cronograma Oficial</h3>
        <p className="font-codec text-gray-600 leading-relaxed mb-8">
          La puntualidad es estrictamente evaluada por las Mesas Directivas y afecta directamente al premio final. Consulta los horarios de cada bloque de debate.
        </p>
        <a href="https://drive.google.com/file/d/1vH3ROL0IDAjidXUnP43f96j7TZU85YxW/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white border border-[#0033A0]/20 rounded-2xl hover:border-[#0033A0] hover:shadow-lg transition-all group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#0033A0]/5 rounded-xl group-hover:bg-[#0033A0] transition-colors">
              <Clock className="w-6 h-6 text-[#0033A0] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-[#0033A0]">Cronograma de Horarios</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 block mt-1">Archivo PDF (Drive)</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0033A0] transform group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    )
  }
];

export default function Reglamentos() {
  const [activeSection, setActiveSection] = useState('reglamento');

  return (
    <div id="reglamentos" className="min-h-screen bg-[#F8F9FA] pt-32 pb-24 text-gray-900 selection:bg-[#0033A0] selection:text-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0033A0]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primary-yellow/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0033A0]/5 border border-[#0033A0]/10 text-[#0033A0] font-codec text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Documentación Oficial
          </span>
          <h1 className="font-maison text-5xl md:text-7xl font-extrabold text-[#0033A0] tracking-tighter uppercase mb-6 drop-shadow-sm">
            Reglamentos
          </h1>
          <p className="font-codec text-gray-500 text-lg leading-relaxed font-light">
            Consulta la documentación sustancial, normativas, y protocolos que rigen el desenvolvimiento de todas las delegaciones participantes en LASAMUN 2026.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="sticky top-32 flex flex-col gap-3">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 border ${
                      isActive 
                        ? 'bg-white border-transparent shadow-[0_20px_40px_rgba(0,51,160,0.08)] scale-[1.02]' 
                        : 'bg-transparent border-gray-200 hover:bg-white/50 hover:border-gray-300 text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-[#0033A0]/10' : 'bg-gray-100'}`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-[#0033A0]' : 'text-gray-400'}`} />
                      </div>
                      <span className={`font-maison text-xl uppercase font-bold tracking-wide ${isActive ? 'text-[#0033A0]' : ''}`}>
                        {section.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div layoutId="activeIndicator">
                        <ChevronRight className="w-5 h-5 text-[#0033A0]" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-gray-100 min-h-[500px]">
              <AnimatePresence mode="wait">
                {sections.map((section) => (
                  activeSection === section.id && (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {section.content}
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

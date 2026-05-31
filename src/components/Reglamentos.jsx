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
        <a href="https://drive.google.com/file/d/1sBzDw4sb9jjzndyA2RJCBTNYKzCHaGlc/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl hover:border-[#0033A0]/50 hover:shadow-[0_15px_40px_rgba(0,51,160,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-[#0033A0]/10 to-[#0033A0]/5 rounded-xl group-hover:from-[#0033A0] group-hover:to-[#002277] transition-all duration-500">
              <BookOpen className="w-6 h-6 text-[#0033A0] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-gray-800 group-hover:text-[#0033A0] transition-colors">Reglamento General</h4>
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
        <h3 className="font-maison text-3xl font-bold text-gray-800 mb-6">Baremos de Evaluación</h3>
        <p className="font-codec text-gray-600 leading-relaxed mb-8">
          Conoce los criterios exactos bajo los cuales las Mesas Directivas evaluarán el desempeño, la oratoria y la diplomacia de las delegaciones para el proceso de premiación.
        </p>
        <a href="https://drive.google.com/file/d/1GrZWZbHPZjBafoljdWNLVfdnKH31Np8U/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl hover:border-primary-yellow/50 hover:shadow-[0_15px_40px_rgba(255,209,0,0.15)] transition-all duration-300 group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-xl group-hover:from-primary-yellow group-hover:to-yellow-500 transition-all duration-500">
              <Briefcase className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">Directrices y Baremos</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 block mt-1">Archivo PDF (Drive)</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transform group-hover:translate-x-1 transition-all" />
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
        
        <a href="https://drive.google.com/file/d/1m9pHplbkw7PdIW4SoUOPzRnyRpPmWaFb/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-gradient-to-r from-[#0033A0] to-[#002277] text-white rounded-2xl hover:shadow-[0_20px_40px_rgba(0,51,160,0.3)] transition-all duration-500 group mb-8 border border-[#0033A0]">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-colors">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold">Guía de Documentos</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 block mt-1">Manual de Redacción (Drive)</span>
            </div>
          </div>
          <Download className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        </a>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
          <h4 className="font-codec text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Ejemplos Oficiales</h4>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-gray-200 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Ejemplo DPO/DPP 1", link: "https://drive.google.com/file/d/14kBwwh9x9e12GFl9g5drdfLYey3dexvC/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 2", link: "https://drive.google.com/file/d/1DYDqxYjE9gWZX3IcMw0p9gn9WQnr-QYN/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 3", link: "https://drive.google.com/file/d/1Q_Nwcp6_PVgJw1XgBr-DTnnlCvUjSNrv/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 4", link: "https://drive.google.com/file/d/1aO9noqZEA6IomxF4t5X52dvKqwsZpjEB/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 5", link: "https://drive.google.com/file/d/1iy8b6xvHUeEvzkU5XzlCA7k-Z1H-j0T9/view?usp=sharing" },
            { name: "Ejemplo DPO/DPP 6", link: "https://drive.google.com/file/d/1p2IEzBh1d_xZVYIz0QvRqUnxNZ5ZcHHp/view?usp=sharing" },
          ].map((ej, idx) => (
            <a key={idx} href={ej.link} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm border border-white rounded-xl hover:border-[#0033A0]/30 hover:bg-[#0033A0]/5 hover:shadow-lg transition-all duration-300 group">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#0033A0]/10 transition-colors">
                <FileSignature className="w-4 h-4 text-gray-400 group-hover:text-[#0033A0]" />
              </div>
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
        <a href="https://drive.google.com/file/d/1228J4wX-iJ7eFotIVVupjdSSKHZ4SbId/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl hover:border-[#0033A0]/50 hover:shadow-[0_15px_40px_rgba(0,51,160,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-[#0033A0]/10 to-[#0033A0]/5 rounded-xl group-hover:from-[#0033A0] group-hover:to-[#002277] transition-all duration-500">
              <Shirt className="w-6 h-6 text-[#0033A0] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-gray-800 group-hover:text-[#0033A0] transition-colors">Código de Vestimenta</h4>
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
        <a href="https://drive.google.com/file/d/1vH3ROL0IDAjidXUnP43f96j7TZU85YxW/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl hover:border-[#0033A0]/50 hover:shadow-[0_15px_40px_rgba(0,51,160,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-[#0033A0]/10 to-[#0033A0]/5 rounded-xl group-hover:from-[#0033A0] group-hover:to-[#002277] transition-all duration-500">
              <Clock className="w-6 h-6 text-[#0033A0] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-maison text-xl font-bold text-gray-800 group-hover:text-[#0033A0] transition-colors">Cronograma de Horarios</h4>
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
    <div id="reglamentos" className="min-h-screen pt-32 pb-24 text-gray-900 selection:bg-[#0033A0] selection:text-white relative overflow-hidden bg-[#F4F7F9]">
      
      {/* Premium Light Gradient & Glassmorphism Backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft atmospheric gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#0033A0]/10 to-transparent rounded-full blur-[120px] opacity-80" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-primary-yellow/15 to-transparent rounded-full blur-[130px] opacity-70" />
        <div className="absolute top-[40%] left-[60%] w-[500px] h-[500px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-[100px] opacity-50" />
        
        {/* Subtle Light Mode Texture Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,160,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-white shadow-sm text-[#0033A0] font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
            Documentación Oficial
          </span>
          <h1 className="font-maison text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-[#0033A0] to-gray-800 tracking-tighter uppercase mb-6 drop-shadow-sm">
            Reglamentos
          </h1>
          <p className="font-codec text-gray-500 text-lg leading-relaxed font-light">
            Consulta la documentación sustancial, normativas, y protocolos que rigen el desenvolvimiento de todas las delegaciones participantes en LASAMUN 2026.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="sticky top-32 flex flex-col gap-4">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-500 border backdrop-blur-xl ${
                      isActive 
                        ? 'bg-white border-white/60 shadow-[0_20px_50px_rgba(0,51,160,0.08)] scale-[1.02] ring-1 ring-[#0033A0]/10' 
                        : 'bg-white/40 border-white/40 hover:bg-white/80 hover:border-white hover:shadow-md text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-all duration-500 ${isActive ? 'bg-gradient-to-br from-[#0033A0] to-[#002277] text-white shadow-md' : 'bg-white border border-gray-100 text-gray-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-maison text-lg uppercase font-bold tracking-widest ${isActive ? 'text-[#0033A0]' : ''}`}>
                        {section.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div layoutId="activeIndicatorReglamentosLight">
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
            <div className="bg-white/60 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-white min-h-[500px] relative overflow-hidden">
              {/* Premium Top Line Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#0033A0]/80 to-transparent opacity-80" />
              
              <AnimatePresence mode="wait">
                {sections.map((section) => (
                  activeSection === section.id && (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                      transition={{ duration: 0.4 }}
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

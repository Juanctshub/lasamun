import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Shirt, FileText, ChevronRight, Download } from 'lucide-react';

const sections = [
  {
    id: 'reglamento',
    title: 'Reglamento General',
    icon: BookOpen,
    content: (
      <div className="space-y-6">
        <h3 className="font-maison text-3xl font-bold text-[#0033A0] mb-6">Reglamento General del Modelo</h3>
        <p className="font-codec text-gray-600 leading-relaxed">
          El Reglamento General establece las bases y procedimientos formales bajo los cuales operarán todos los comités (a excepción de los Comités de Crisis, que cuentan con normativas especializadas).
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <ul className="list-disc pl-5 space-y-4 text-gray-700 font-codec text-sm">
            <li><strong>Decoro:</strong> El decoro es el pilar de toda sesión. El uso de lenguaje inapropiado, falta de respeto o interrupciones indebidas están estrictamente prohibidas y podrán ser sancionadas.</li>
            <li><strong>Uso de la Primera Persona:</strong> Se prohíbe el uso de la primera persona ("yo", "mi") al momento de dirigirse al comité. Debe usarse la tercera persona (ej. "La delegación de... considera").</li>
            <li><strong>Tiempos de Oratoria:</strong> Los tiempos establecidos por la mesa son inviolables. Al terminar el tiempo, la delegación debe ceder la palabra a la Mesa inmediatamente.</li>
          </ul>
        </div>
        <button className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#0033A0] text-white px-8 py-4 rounded-xl font-codec font-bold tracking-widest text-xs uppercase hover:bg-[#002277] transition-colors mt-8 shadow-lg shadow-[#0033A0]/20">
          Descargar PDF <Download className="w-4 h-4" />
        </button>
      </div>
    )
  },
  {
    id: 'documentos',
    title: 'Guía de Documentos',
    icon: FileText,
    content: (
      <div className="space-y-6">
        <h3 className="font-maison text-3xl font-bold text-[#0033A0] mb-6">Documentos Sustanciales</h3>
        <p className="font-codec text-gray-600 leading-relaxed mb-8">
          Guía integral para la redacción y presentación de Documentos de Postura Oficial (DPO) y Documentos de Papel de Posición (DPP). Todo delegado debe dominar la redacción de estos textos para garantizar el éxito de sus políticas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-shadow duration-300">
            <h4 className="font-maison text-xl font-bold text-[#0033A0] mb-3">Documento de Postura Oficial (DPO)</h4>
            <p className="font-codec text-sm text-gray-500 mb-6 line-clamp-3">
              Resume la posición histórica y actual del país sobre el tópico a tratar. Debe entregarse previo al inicio de las sesiones.
            </p>
            <button className="text-[#0033A0] font-codec text-xs font-bold uppercase tracking-widest hover:text-primary-yellow transition-colors flex items-center gap-1">
              Ver Ejemplo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-shadow duration-300">
            <h4 className="font-maison text-xl font-bold text-[#0033A0] mb-3">Papel de Posición (DPP)</h4>
            <p className="font-codec text-sm text-gray-500 mb-6 line-clamp-3">
              Documentos de trabajo redactados durante las sesiones que proponen soluciones y cláusulas formales ante la problemática.
            </p>
            <button className="text-[#0033A0] font-codec text-xs font-bold uppercase tracking-widest hover:text-primary-yellow transition-colors flex items-center gap-1">
              Ver Plantilla <ChevronRight className="w-4 h-4" />
            </button>
          </div>
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
        <p className="font-codec text-gray-600 leading-relaxed">
          El código de vestimenta es "Formal Occidental". Se espera que todos los delegados mantengan una presentación pulcra que refleje la seriedad del evento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="font-maison text-lg font-bold mb-4 text-[#0033A0]">Permitido</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm font-codec text-gray-600">
              <li>Trajes sastre, corbatas, pajaritas.</li>
              <li>Vestidos formales (largo adecuado).</li>
              <li>Zapatos de vestir, tacones cerrados.</li>
              <li>Blusas sobrias, faldas formales.</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <h4 className="font-maison text-lg font-bold mb-4 text-red-700">No Permitido</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm font-codec text-red-900/70">
              <li>Pantalones de mezclilla (jeans).</li>
              <li>Zapatos deportivos (sneakers).</li>
              <li>Ropa ajustada o escotes profundos.</li>
              <li>Gorras, sombreros o gafas de sol oscuras en comité.</li>
            </ul>
          </div>
        </div>
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
        <p className="font-codec text-gray-600 leading-relaxed mb-6">
          La puntualidad es estrictamente evaluada por las Mesas Directivas y afecta directamente al premio. El registro cierra exactamente 10 minutos antes del inicio de la primera sesión.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <span className="font-maison font-bold text-[#0033A0] text-lg">07:30 AM</span>
            <span className="font-codec text-gray-600 text-sm">Registro General</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <span className="font-maison font-bold text-[#0033A0] text-lg">08:00 AM</span>
            <span className="font-codec text-gray-600 text-sm">Ceremonia de Apertura</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-primary-yellow/50 rounded-lg bg-yellow-50">
            <span className="font-maison font-bold text-[#0033A0] text-lg">09:30 AM</span>
            <span className="font-codec text-gray-800 text-sm font-bold">Primera Sesión de Comité</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <span className="font-maison font-bold text-[#0033A0] text-lg">01:00 PM</span>
            <span className="font-codec text-gray-600 text-sm">Almuerzo Delegados</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <span className="font-maison font-bold text-[#0033A0] text-lg">05:00 PM</span>
            <span className="font-codec text-gray-600 text-sm">Clausura del Día</span>
          </div>
        </div>
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

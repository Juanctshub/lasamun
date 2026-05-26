import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Interconexiones() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    { id: 1, label: 'Economía Global', top: '15%', left: '20%' },
    { id: 2, label: 'Derechos Humanos', top: '15%', left: '80%' },
    { id: 3, label: 'Innovación', top: '85%', left: '20%' },
    { id: 4, label: 'Seguridad', top: '85%', left: '80%' },
  ];

  return (
    <section id="interconexiones" className="min-h-screen py-32 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-codec text-xs tracking-[0.2em] mb-6 uppercase"
        >
          Ecosistema
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-maison text-5xl md:text-6xl text-white font-bold mb-6"
        >
          RED DE <span className="text-primary-yellow">EFECTOS</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-codec text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Cada decisión tiene un impacto. En Lasamun, la resolución de un comité genera consecuencias en todo el escenario geopolítico simulado.
        </motion.p>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] md:h-[450px] mx-auto z-10">
        {/* Clean Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {nodes.map(node => (
            <motion.line
              key={node.id}
              x1="50%" y1="50%"
              x2={node.left} y2={node.top}
              stroke={hoveredNode === node.id || hoveredNode === 'center' ? '#FFD100' : 'rgba(255,255,255,0.1)'}
              strokeWidth={hoveredNode === node.id || hoveredNode === 'center' ? "2" : "1"}
              strokeDasharray={hoveredNode === node.id || hoveredNode === 'center' ? "none" : "5,5"}
              animate={{
                opacity: hoveredNode === null || hoveredNode === node.id || hoveredNode === 'center' ? 1 : 0.2
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </svg>

        {/* Central Core Node */}
        <motion.div
          onMouseEnter={() => setHoveredNode('center')}
          onMouseLeave={() => setHoveredNode(null)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black font-maison font-bold text-2xl md:text-3xl px-10 py-5 rounded-full cursor-pointer z-20 flex flex-col items-center justify-center shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-[10px] font-codec text-gray-500 tracking-widest mb-1 uppercase">Núcleo</span>
          CRISIS
        </motion.div>

        {/* Orbiting Satellite Nodes */}
        {nodes.map(node => (
          <motion.div
            key={node.id}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute bg-[#111] text-white font-codec text-sm md:text-base px-6 py-3 rounded-full border border-white/10 cursor-pointer z-10 transition-colors whitespace-nowrap"
            style={{ 
              top: node.top, 
              left: node.left, 
              transform: 'translate(-50%, -50%)',
              borderColor: hoveredNode === node.id ? '#FFD100' : 'rgba(255,255,255,0.1)',
              color: hoveredNode === node.id ? '#FFD100' : 'white'
            }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            {node.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Heart, Users, Sparkles } from 'lucide-react';

export default function Tematica() {
  return (
    <section id="tematica" className="min-h-screen pt-32 pb-48 bg-[radial-gradient(ellipse_at_top,_#ffffff_0%,_#F9FAFB_100%)] relative overflow-hidden text-secondary-black">
      
      {/* Abstract Aesthetic Backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
        <div 
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-primary-yellow/20 rounded-full blur-[120px]"
        />
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-primary-blue/10 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section: Organized Flex Layout without overlaps */}
        <div className="w-full flex flex-col items-center mb-20 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-10"
          >
            <div className="w-12 h-[1px] bg-primary-blue"></div>
            <span className="font-codec text-primary-blue text-xs uppercase tracking-[0.3em] font-bold">Temática Central 2026</span>
            <div className="w-12 h-[1px] bg-primary-blue"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full relative">
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block w-72 xl:w-80 aspect-[3/4] bg-white p-3 pb-12 rounded-3xl shadow-xl rotate-[-8deg] hover:rotate-[-4deg] transition-all relative z-20"
            >
              <img src="/fotoslasa/54790.jpg" alt="Lasamun Memory" className="w-full h-full object-cover rounded-xl" />
              {/* Decoration Badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary-yellow text-secondary-black font-maison font-bold px-4 py-2 rounded-xl shadow-lg rotate-[-10deg]">
                #LASAMUN
              </div>
            </motion.div>

            {/* Central Title */}
            <div className="relative">
              {/* Floating Sparkles Decor */}
              <Sparkles className="absolute -top-8 -left-8 w-12 h-12 text-primary-yellow opacity-50 animate-pulse hidden md:block" />
              <Sparkles className="absolute -bottom-8 -right-8 w-8 h-8 text-primary-blue opacity-50 animate-pulse hidden md:block" />

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-maison text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.9] text-center text-secondary-black tracking-tight relative z-10"
              >
                LLEGADOS DEL PASADO, <br/>
                <span className="text-primary-blue relative inline-block mt-2">
                  URGENCIAS DEL FUTURO
                  <svg className="absolute -bottom-5 left-0 w-full h-5 text-primary-yellow opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,20 100,0" fill="none" stroke="currentColor" strokeWidth="5" />
                  </svg>
                </span>
              </motion.h2>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:block w-72 xl:w-80 aspect-[3/4] bg-white p-3 pb-12 rounded-3xl shadow-xl rotate-[8deg] hover:rotate-[4deg] transition-all relative z-20"
            >
              <img src="/fotoslasa/54804.jpg" alt="Lasamun Delegation" className="w-full h-full object-cover rounded-xl" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <div className="px-10 py-4 bg-white rounded-full shadow-lg shadow-primary-yellow/10 border border-primary-yellow/30 font-maison text-2xl md:text-3xl font-bold text-primary-yellow tracking-widest transform -translate-y-4">
              TODO ESTÁ CONECTADO
            </div>
          </motion.div>
        </div>

        {/* Content Section - Clean Grid Layout without overlaps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
          
          {/* Main Text Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white shadow-xl shadow-blue-900/5 relative h-full flex flex-col justify-center"
          >
            <p className="font-codec text-lg md:text-2xl text-gray-700 leading-relaxed font-light mb-8">
              Así como el lema de nuestra institución, la temática central de este modelo reside en la esencia de la <strong className="font-bold text-primary-blue">interconexión humana</strong>, reconociendo que ningún acto (por pequeño que sea), ocurre en el vacío.
            </p>
            <p className="font-codec text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-10">
              Es por esto que deseamos dejar un mensaje en cada participante, donde se deje entrever que cada ser humano se encuentra vinculado a nosotros por medio del concepto de la <span className="italic text-primary-yellow font-bold">casa común</span>, cuestionando la profundidad de la empatía y la responsabilidad de nuestras acciones.
            </p>

            {/* Clean Photo Gallery inside the text column (bottom) */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
               <img src="/fotoslasa/54760.jpg" alt="Detail 1" className="w-full h-40 object-cover rounded-2xl shadow-sm hover:scale-105 transition-transform" />
               <img src="/fotoslasa/54800.jpg" alt="Detail 2" className="w-full h-40 object-cover rounded-2xl shadow-sm hover:scale-105 transition-transform" />
            </div>
          </motion.div>

          {/* Aesthetic Icons & Large Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 h-full"
          >
            {/* Large feature photo */}
            <div className="w-full h-64 md:h-80 bg-white p-2 rounded-[2rem] shadow-lg relative group">
              <img src="/fotoslasa/54796.jpg" alt="Delegation" className="w-full h-full object-cover rounded-[1.5rem]" />
            </div>

            {/* Clean Icons */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Globe2, title: 'Casa Común', desc: 'Nuestro entorno compartido y la huella que dejamos.', color: 'text-primary-blue', bg: 'bg-primary-blue/10' },
                { icon: Users, title: 'Interconexión', desc: 'Ningún acto ocurre en el vacío.', color: 'text-primary-yellow', bg: 'bg-primary-yellow/20' },
                { icon: Heart, title: 'Empatía Profunda', desc: 'Responsabilidad y conciencia por el otro.', color: 'text-secondary-black', bg: 'bg-gray-100' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-maison font-bold text-2xl text-secondary-black mb-1">{item.title}</h4>
                    <p className="font-codec text-sm text-gray-500 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Multi-layered Organic SVG Divider blending into SaveTheDate (#0033A0) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 text-[#0033A0]" style={{ transform: 'translateY(1px)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 lg:h-32">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.63,22.78,109.11,44.95,178.5,50.77,227.18,54.84,275.5,58.33,321.39,56.44Z" className="fill-current opacity-40"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}

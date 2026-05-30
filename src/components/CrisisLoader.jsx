import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Shield, ChevronLeft, ChevronRight, RotateCw, Wand2, Menu, X } from 'lucide-react';

export default function CrisisLoader({ onComplete }) {
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState("typing"); // 'typing', 'searching', 'found'

  const targetText = "KRAKEN DARKNET MARKET";

  useEffect(() => {
    if (phase === "typing") {
      if (typedText.length < targetText.length) {
        const timeout = setTimeout(() => {
          setTypedText(targetText.slice(0, typedText.length + 1));
        }, Math.random() * 80 + 50); // random typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("searching"), 600);
        return () => clearTimeout(timeout);
      }
    } else if (phase === "searching") {
      const timeout = setTimeout(() => setPhase("found"), 2000);
      return () => clearTimeout(timeout);
    } else if (phase === "found") {
      const timeout = setTimeout(onComplete, 800);
      return () => clearTimeout(timeout);
    }
  }, [typedText, phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)", transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 bg-[#f0f0f5] z-[2000] flex flex-col items-center justify-center p-4 md:p-10 font-sans"
    >
      {/* Fake Browser Window */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl h-full max-h-[700px] bg-[#2A164B] rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
      >
        {/* Browser Top Bar - Native OS Look */}
        <div className="bg-[#e4e4e4] flex items-center pt-2 px-2 gap-2 text-[#4a4a4a]">
          {/* OS Buttons */}
          <div className="flex gap-2 ml-2 pb-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>
          
          {/* Active Tab */}
          <div className="bg-white px-4 py-1.5 rounded-t-lg ml-2 flex items-center justify-between w-64 text-xs font-semibold shadow-sm">
            <span className="truncate">New Tab</span>
            <X className="w-3 h-3 text-gray-400 hover:text-black cursor-pointer" />
          </div>
          <div className="text-gray-500 hover:bg-gray-300 p-1 rounded mb-1 cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
          </div>
        </div>

        {/* Browser URL Bar Layer */}
        <div className="bg-white flex items-center px-4 py-2 gap-4 border-b border-gray-200">
          <div className="flex gap-3 text-gray-400">
            <ChevronLeft className="w-5 h-5" />
            <ChevronRight className="w-5 h-5" />
            <RotateCw className="w-4 h-4 mt-0.5" />
          </div>
          
          {/* Address Bar */}
          <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4 py-1.5 gap-2 border border-transparent focus-within:border-blue-400 focus-within:bg-white transition-colors">
            <Search className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500 font-medium">Search with DuckDuckGo or enter address</span>
          </div>

          <div className="flex gap-4 text-gray-500 items-center">
            <Shield className="w-5 h-5" />
            <Wand2 className="w-5 h-5" />
            <Menu className="w-5 h-5" />
          </div>
        </div>

        {/* MAIN BROWSER VIEW (TOR ONION) */}
        <div className="flex-1 flex flex-col items-center justify-center relative px-6 bg-[#28134a]">
          
          <AnimatePresence mode="wait">
            {phase !== "found" && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center w-full max-w-2xl"
              >
                {/* Logo & Slogan */}
                <div className="flex items-center gap-4 mb-10">
                  {/* Purple Onion Logo Mimic */}
                  <div className="w-20 h-20 bg-[#8c35d1] rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(140,53,209,0.3)]">
                    <div className="absolute w-[80%] h-[80%] rounded-full border-4 border-[#ae5df0] right-[-10%]" />
                    <div className="absolute w-[60%] h-[60%] rounded-full border-4 border-[#d38bff] right-[0%]" />
                    <div className="absolute w-[40%] h-[40%] rounded-full border-4 border-white right-[10%]" />
                  </div>
                  <h1 className="text-5xl font-sans text-white font-medium tracking-tight">Explore. Privately.</h1>
                </div>

                {/* Central DuckDuckGo Search Bar */}
                <div className="w-full bg-white rounded-full flex items-center px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative">
                  {/* DuckDuckGo Logo Mock */}
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0 border border-orange-200">
                    <span className="text-lg leading-none">🦆</span>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <span className="text-gray-800 text-lg font-medium">
                      {typedText}
                      {phase === "typing" && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-0.5 h-5 bg-black ml-1 align-middle" />}
                    </span>
                    {!typedText && <span className="text-gray-400 text-lg absolute left-16">Search with DuckDuckGo</span>}
                  </div>

                  {/* Onionize Toggle */}
                  <div className="flex items-center gap-2 ml-4 shrink-0">
                    <span className="text-[#8c35d1] font-bold text-sm">Onionize</span>
                    <div className="w-10 h-5 bg-[#8c35d1] rounded-full relative shadow-inner flex items-center px-0.5">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-0.5" />
                    </div>
                  </div>
                </div>

                <p className="text-white/60 mt-8 text-sm tracking-wide">
                  You're ready for the world's most private browsing experience.
                </p>

                {/* Simulated search loading spinner */}
                {phase === "searching" && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="mt-8 flex flex-col items-center"
                  >
                    <div className="w-6 h-6 border-2 border-[#8c35d1] border-t-white rounded-full animate-spin" />
                    <span className="text-[#8c35d1] text-xs font-mono mt-3 tracking-widest uppercase">Fetching .onion descriptors</span>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </motion.div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Tematica from './components/Tematica';
import SaveTheDate from './components/SaveTheDate';
import Comites from './components/Comites';
import Staff from './components/Staff';
import StaffLoader from './components/StaffLoader';
import Crisis from './components/Crisis';
import CrisisLoader from './components/CrisisLoader';
import Reglamentos from './components/Reglamentos';
import ReglamentosLoader from './components/ReglamentosLoader';
import Corte from './components/Corte';
import CorteLoader from './components/CorteLoader';
import Nasa from './components/Nasa';
import NasaLoader from './components/NasaLoader';
import Voynich from './components/Voynich';
import VoynichLoader from './components/VoynichLoader';

import TopFotos from './components/TopFotos';
import Starvibe from './components/Starvibe';
import AlmeidasAd from './components/AlmeidasAd';
import Footer from './components/Footer';
import audioSystem from './utils/audioSystem';

function App() {
  const [loading, setLoading] = useState(true);
  const getInitialPage = () => {
    if (window.location.hash === '#staff') return 'staff';
    if (window.location.hash === '#crisis') return 'crisis';
    if (window.location.hash === '#reglamentos') return 'reglamentos';
    if (window.location.hash === '#corte') return 'corte';
    if (window.location.hash === '#nasa') return 'nasa';
    if (window.location.hash === '#voynich') return 'voynich';
    return 'landing';

  };
  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [staffLoading, setStaffLoading] = useState(false);
  const [crisisLoading, setCrisisLoading] = useState(false);
  const [reglamentosLoading, setReglamentosLoading] = useState(false);
  const [corteLoading, setCorteLoading] = useState(false);
  const [nasaLoading, setNasaLoading] = useState(false);
  const [voynichLoading, setVoynichLoading] = useState(false);


  // Handle entering the landing page and starting audio
  const handleEnterExperience = () => {
    // Initialize and start audio sweeps
    audioSystem.startExperience();
    
    // De-activate loader screen
    setLoading(false);

    // If starting directly on the staff, crisis, reglamentos, corte or nasa hash, trigger its loader immediately
    if (window.location.hash === '#staff') {
      setStaffLoading(true);
    } else if (window.location.hash === '#crisis') {
      setCrisisLoading(true);
      setTimeout(() => audioSystem.switchToCrisis(), 500);
    } else if (window.location.hash === '#reglamentos') {
      setReglamentosLoading(true);
      setTimeout(() => audioSystem.switchToReglamentos(), 500);
    } else if (window.location.hash === '#corte') {
      setCorteLoading(true);
      setTimeout(() => audioSystem.switchToCorte(), 500);
    } else if (window.location.hash === '#nasa') {
      setNasaLoading(true);
      setTimeout(() => audioSystem.switchToNasa(), 500);
    } else if (window.location.hash === '#voynich') {
      setVoynichLoading(true);
      setTimeout(() => audioSystem.switchToVoynich(), 500);
    }
  };


  // Hash-based router listener
  useEffect(() => {
    const handleHashChange = () => {
      const isStaff = window.location.hash === '#staff';
      const isCrisis = window.location.hash === '#crisis';
      const isReglamentos = window.location.hash === '#reglamentos';
      const isCorte = window.location.hash === '#corte';
      const isNasa = window.location.hash === '#nasa';
      const isVoynich = window.location.hash === '#voynich';

      
      if (isStaff) {
        setCurrentPage('staff');
        setStaffLoading(true);
        audioSystem.switchToMain();
      } else if (isCrisis) {
        setCurrentPage('crisis');
        setCrisisLoading(true);
        audioSystem.switchToCrisis();
      } else if (isReglamentos) {
        setCurrentPage('reglamentos');
        setReglamentosLoading(true);
        audioSystem.switchToReglamentos();
      } else if (isCorte) {
        setCurrentPage('corte');
        setCorteLoading(true);
        audioSystem.switchToCorte();
      } else if (isNasa) {
        setCurrentPage('nasa');
        setNasaLoading(true);
        audioSystem.switchToNasa();
      } else if (isVoynich) {
        setCurrentPage('voynich');
        setVoynichLoading(true);
        audioSystem.switchToVoynich();
      } else {
        setCurrentPage('landing');
        audioSystem.switchToMain();
      }

    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll transitions when switching pages
  useEffect(() => {
    if (loading) return;

    if (currentPage === 'landing') {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    } else if (currentPage === 'staff' || currentPage === 'crisis' || currentPage === 'reglamentos' || currentPage === 'corte' || currentPage === 'nasa' || currentPage === 'voynich') {
      window.scrollTo({ top: 0 });
    }

  }, [currentPage, loading]);

  // Scroll tracking to crossfade tracks when entering or exiting Starvibe
  useEffect(() => {
    if (loading || currentPage !== 'landing') return;

    let observer;
    let starvibeSection;
    let pollInterval;
    let maxTimeout;

    const attachObserver = () => {
      starvibeSection = document.getElementById('starvibe');
      if (!starvibeSection) return false;

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // triggers when 15% of Starvibe is visible
      };

      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Muffle & fade down frutiger, open up LMFAO
            audioSystem.switchToStarvibe();
          } else {
            // Muffle & fade down LMFAO, open up frutiger (Aclarando!)
            audioSystem.switchToMain();
          }
        });
      };

      observer = new IntersectionObserver(handleIntersection, observerOptions);
      observer.observe(starvibeSection);
      return true;
    };

    // Poll for the element until it exists (resolves exit animation delay)
    pollInterval = setInterval(() => {
      if (attachObserver()) {
        clearInterval(pollInterval);
      }
    }, 100);

    // Stop polling after 5 seconds to prevent infinite resource drain
    maxTimeout = setTimeout(() => {
      clearInterval(pollInterval);
    }, 5000);

    return () => {
      clearInterval(pollInterval);
      clearTimeout(maxTimeout);
      if (observer && starvibeSection) {
        observer.unobserve(starvibeSection);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [loading, currentPage]);

  return (
    <div className={`app-container min-h-screen transition-colors duration-500 ${currentPage !== 'landing' ? 'bg-[#050508]' : 'bg-white'}`} style={{ position: 'relative' }}>
      <AnimatePresence>
        {loading && <Loader onEnter={handleEnterExperience} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navigation />
          
          <AnimatePresence mode="wait">
            {currentPage === 'staff' ? (
              <React.Fragment key="staff-view">
                <AnimatePresence mode="wait">
                  {staffLoading ? (
                    <StaffLoader key="staff-loader" onComplete={() => setStaffLoading(false)} />
                  ) : (
                    <motion.div 
                      key="staff-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Staff />
                      <Footer />
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ) : currentPage === 'crisis' ? (
              <React.Fragment key="crisis-view">
                <AnimatePresence mode="wait">
                  {crisisLoading ? (
                    <CrisisLoader key="crisis-loader" onComplete={() => setCrisisLoading(false)} />
                  ) : (
                    <motion.div 
                      key="crisis-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Crisis />
                      <Footer />
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ) : currentPage === 'reglamentos' ? (
              <React.Fragment key="reglamentos-view">
                <AnimatePresence mode="wait">
                  {reglamentosLoading ? (
                    <ReglamentosLoader key="reglamentos-loader" onComplete={() => setReglamentosLoading(false)} />
                  ) : (
                    <motion.div 
                      key="reglamentos-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Reglamentos />
                      <Footer />
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ) : currentPage === 'corte' ? (
              <React.Fragment key="corte-view">
                <AnimatePresence mode="wait">
                  {corteLoading ? (
                    <CorteLoader key="corte-loader" onComplete={() => setCorteLoading(false)} />
                  ) : (
                    <motion.div 
                      key="corte-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Corte />
                      <Footer />
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ) : currentPage === 'nasa' ? (
              <React.Fragment key="nasa-view">
                <AnimatePresence mode="wait">
                  {nasaLoading ? (
                    <NasaLoader key="nasa-loader" onComplete={() => setNasaLoading(false)} />
                  ) : (
                    <motion.div 
                      key="nasa-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Nasa />
                      <Footer />
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ) : currentPage === 'voynich' ? (
              <React.Fragment key="voynich-view">
                <AnimatePresence mode="wait">
                  {voynichLoading ? (
                    <VoynichLoader key="voynich-loader" onComplete={() => setVoynichLoading(false)} />
                  ) : (
                    <motion.div 
                      key="voynich-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Voynich />
                      <Footer />
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ) : (

              <motion.div 
                key="landing-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <Tematica />
                <SaveTheDate />
                <Comites />
                <AlmeidasAd />
                <TopFotos />
                <Starvibe />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Tematica from './components/Tematica';
import SaveTheDate from './components/SaveTheDate';
import Comites from './components/Comites';
import TopFotos from './components/TopFotos';
import Starvibe from './components/Starvibe';
import Footer from './components/Footer';
import audioSystem from './utils/audioSystem';

function App() {
  const [loading, setLoading] = useState(true);

  // Handle entering the landing page and starting audio
  const handleEnterExperience = () => {
    // Initialize and start audio sweeps
    audioSystem.startExperience();
    
    // De-activate loader screen
    setLoading(false);
  };

  // Scroll tracking to crossfade tracks when entering or exiting Starvibe
  useEffect(() => {
    if (loading) return;

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

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const starvibeSection = document.getElementById('starvibe');
    if (starvibeSection) {
      observer.observe(starvibeSection);
    }

    return () => {
      if (starvibeSection) {
        observer.unobserve(starvibeSection);
      }
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <AnimatePresence>
        {loading && <Loader onEnter={handleEnterExperience} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navigation />
          <Hero />
          <Tematica />
          <SaveTheDate />
          <Comites />
          <TopFotos />
          <Starvibe />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

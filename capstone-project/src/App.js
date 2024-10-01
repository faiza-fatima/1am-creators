import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CodeEasyComponent from './components/CodeEasyComponent';
import CodingSection from './components/CodingSection';

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(scrollPosition / 500, 1);
      if (mainRef.current) {
        mainRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code-easy" element={<CodeEasyComponent />} />
        <Route path="/coding-section" element={<CodingSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
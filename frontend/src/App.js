import React, { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="background-image" />

      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="main-text-image">
        <img src="/lets-make-code.png" alt="Main Text" />
      </div>

      <div className="scroll-text-image">
        <img src="/scroll-to-explore.png" alt="Scroll to Explore" />
      </div>

      <div className="brain-image" />

      <div className="cute-cat-image" />
    </div>
  );
}

export default App;

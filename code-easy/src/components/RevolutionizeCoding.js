import React, { useEffect, useState } from 'react';

// Main component function
const RevolutionizeCoding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  // English text only
  const fullText = "Your go-to platform for mastering code is now in your pocket. With ";
  const highlightedText = "1AMcreators.com, ";
  const remainingText = "access world-class chatbot both free and premium, designed to elevate your skills, no matter where you are. Join a global community of passionate learners and start creating with confidence.";

  const combinedText = fullText + highlightedText + remainingText;

  // Handle scroll visibility
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typewriter effect for **English only**
  const startTypewriterEffect = () => {
    setTypewriterText(''); // Reset text on scroll
    let index = 0;

    const typewriterInterval = setInterval(() => {
      if (index < combinedText.length) {
        setTypewriterText((prev) => prev + combinedText.charAt(index));
        index++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 150);

    return () => clearInterval(typewriterInterval);
  };

  useEffect(() => {
    if (isVisible) {
      startTypewriterEffect(); // Trigger typewriter effect
    }
  }, [isVisible]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-height section with title */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center" style={{
        fontFamily: 'Handjet-Bold',
        backgroundColor: '#ffffff',
        backgroundImage: "linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent)",
        backgroundSize: '80px 80px',
      }}>
        <div className="h-48"></div>

        <h1 className="text-6xl text-orange-600 leading-tight">
          <img
            src="/Revolutionize Your Coding with.png"
            alt="Revolutionize Your Coding With"
            className="w-[897px] h-auto text-center"
          />
        </h1>

        <img src="/1am.png" alt="1AM Logo" className="w-64 h-auto mt-4" />

        <div className="mt-24">
          <p className="text-sm text-black">SCROLL TO EXPLORE</p>
          <div className="h-16 flex flex-col items-center">
            <div className="h-14 w-px bg-[#FF6600]"></div>
            <div className="animate-bounce">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16L0 8L2 6L8 12L14 6L16 8L8 16Z" fill="#FF6600"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="h-48"></div>
      </section>
      {/* Section that fades in on scroll */}
      <section className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} id="content-section">
        <div className="flex flex-col items-center p-6" style={{
          fontFamily: 'Fira Code, monospace',
          backgroundColor: '#ffffff',
          maxWidth: '90%',
          margin: '0 auto',
          backgroundImage: "linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: '80px 80px',
        }}>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <p className="text-xl mb-4 text-black">
                {typewriterText.split(highlightedText).map((part, index) => (
                  <span key={index}>
                    {part}
                    {index !== typewriterText.split(highlightedText).length - 1 && (
                      <span className="text-orange-600">{highlightedText}</span>
                    )}
                  </span>
                ))}
              </p>
              <div className="flex items-center">
                <button className="bg-black text-white py-2 px-4 rounded-full flex items-center"
                  style={{
                    fontFamily: '"MBJ Handwriting"',
                    fontSize: '26px',
                    textTransform: 'uppercase',
                  }}
                >
                  JOIN COMMUNITY
                  <img src="/Discord.png" alt="Bot Image" className="ml-4 w-12 h-12" />
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-between" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <img
                src="/image 3.png"
                alt="Person typing on a keyboard"
                className="rounded-lg w-[400px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extra space for further scrolling content */}
      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold">More content coming soon...</h2>
      </section>
    </div>
  );
};

export default RevolutionizeCoding;
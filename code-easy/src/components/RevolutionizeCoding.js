import React, { useEffect, useState } from 'react';
 // Assuming you added your custom fonts and styles here

const RevolutionizeCoding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Your go-to platform for mastering code is now in your pocket. With ";
  const highlightedText = "1AMcreators.com, ";
  const remainingText = "access world-class chatbot both free and premium, designed to elevate your skills, no matter where you are. Join a global community of passionate learners and start creating with confidence.";

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

  // Typewriter effect function
  const startTypewriterEffect = () => {
    setTypewriterText(''); // Reset text on scroll
    let index = 0;
    const combinedText = fullText + highlightedText + remainingText;
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
      startTypewriterEffect();
    }
  }, [isVisible]);

  return (
    <div>
      {/* Full-height section with title */}
      <section
        className="flex flex-col items-center justify-center min-h-screen text-center"
        style={{
          fontFamily: 'Handjet-Bold, cursive', // Using Handjet-Bold for this section
          backgroundColor: '#ffffff',
          backgroundImage: "linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: '50px 50px',
        }}
      >
        <h1 className="text-6xl text-orange-600 leading-tight">
          REVOLUTIONIZE<br />
          YOUR CODING WITH
        </h1>
        <img
          src="/1am.png"
          alt="1AM Logo"
          className="w-64 h-auto mt-4"
        />
        <div className="mt-24">
          <p className="text-sm text-black">SCROLL TO EXPLORE</p>
          <i className="fas fa-arrow-down text-orange-600 mt-2"></i>
        </div>
      </section>

      {/* Section that fades in on scroll */}
      <section
        className={`fade-in transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        id="content-section"
      >
        <div
          className="flex flex-col items-center p-6"
          style={{
            fontFamily: 'Fira Code-Regular, monospace', // Using Fira Code-Regular for the rest
            backgroundColor: '#ffffff',
            backgroundImage: "linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: '50px 50px',
          }}
        >
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
              <button
                className="button mt-4 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Add functionality if needed
                }}
              >
                JOIN COMMUNITY
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src="/public/image.png" // Updated with your image
                alt="Person typing on a keyboard"
                className="rounded-lg w-full h-auto object-cover"
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

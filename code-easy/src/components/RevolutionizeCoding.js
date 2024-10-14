import React, { useEffect, useState } from 'react';

const RevolutionizeCoding = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Trigger visibility when scrolled past 300px
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Full-height section with title */}
      <section
        className="flex flex-col items-center justify-center min-h-screen text-center"
        style={{
          fontFamily: "'Press Start 2P', cursive",
          backgroundColor: '#ffffff',
          backgroundImage: "linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: '50px 50px',
        }}
      >
        <h1 className="text-6xl text-orange-600 leading-tight">
          REVOLUTIONIZE<br />
          YOUR CODING WITH
        </h1>
        <h1 className="text-8xl text-orange-600 mt-4">1AM</h1>
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
        <div className="flex flex-col items-center p-6">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <p className="text-xl mb-4">
                YOUR GO-TO PLATFORM FOR MASTERING CODE IS NOW IN YOUR POCKET. WITH{' '}
                <span className="highlight">1AMCREATORS.COM</span>, ACCESS WORLD-CLASS CHATBOT BOTH FREE AND PREMIUM,
                DESIGNED TO ELEVATE YOUR SKILLS, NO MATTER WHERE YOU ARE. JOIN A GLOBAL COMMUNITY OF PASSIONATE LEARNERS
                AND START CREATING WITH CONFIDENCE.
              </p>
              <button
                className="button mt-4"
                onClick={() => {
                  // Add functionality if needed
                }}
              >
                JOIN COMMUNITY
                <i className="fab fa-discord ml-2"></i>
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src="https://placehold.co/368x150"
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

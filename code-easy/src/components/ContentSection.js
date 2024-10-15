import React from 'react';

const ContentSection = ({ isVisible }) => {
  return (
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
  );
};

export default ContentSection;

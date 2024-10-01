import React from 'react';
import Logo from './Logo';
import Heading from './Heading';
import ScrollIndicator from './ScrollIndicator';

function LandingPage() {
  return (
    <main className="flex overflow-hidden flex-col text-center uppercase bg-white rounded-3xl transition-opacity duration-300">
      <section className="flex relative flex-col items-center pt-10 pr-20 pb-6 pl-8 w-full min-h-[900px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32884c520d1db0b9bda9e5bff5e8af5f343991bb39ae7bf76ff2b5d2a6215433?placeholderIfAbsent=true&apiKey=YOUR_API_KEY"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <Logo />
        <Heading />
        <ScrollIndicator />
      </section>
    </main>
  );
}

export default LandingPage;
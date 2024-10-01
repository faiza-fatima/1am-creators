import React from 'react';
import ImageComponent from './ImageComponent';

function TextComponent() {
  return (
    <div className="flex flex-col text-9xl font-bold leading-none text-center text-orange-500 uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <h1 className="z-10 max-md:max-w-full max-md:text-4xl animate-pulse">
        Let's get coding{" "}
      </h1>
      <ImageComponent
        src=""
        alt="Decorative background image"
        className="object-contain self-center max-w-full bg-blend-luminosity aspect-[1.27] rounded-[117px] w-[624px] transition-transform duration-300 ease-in-out hover:rotate-3"
      />
    </div>
  );
}

export default TextComponent;
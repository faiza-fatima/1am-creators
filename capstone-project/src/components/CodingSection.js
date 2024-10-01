import React from 'react';
import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';

function CodingSection() {
  return (
    <main className="overflow-hidden pt-56 pr-20 bg-white rounded-3xl max-md:pt-24 max-md:pr-5 transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d4553143c0bbd6bab16e53e8e8c0b74b455ac6be978c7189118e464e9c1148d?placeholderIfAbsent=true&apiKey=YOUR_API_KEY"
            alt="Decorative image"
            className="object-contain grow shrink-0 max-w-full aspect-[0.94] mt-[503px] w-[170px] max-md:mt-10 transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </aside>
        <section className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
          <TextComponent />
        </section>
      </div>
    </main>
  );
}

export default CodingSection;
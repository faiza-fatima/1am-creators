import React from 'react';
import Logo from './Logo';
import Heading from './Heading';
import BottomImage from './BottomImage';

function CodeEasyComponent() {
  return (
    <main className="flex overflow-hidden flex-col text-9xl font-bold text-center text-orange-500 uppercase bg-white rounded-3xl leading-[116px] max-md:text-4xl max-md:leading-9">
      <section className="flex relative flex-col pt-10 pr-20 w-full min-h-[900px] max-md:pr-5 max-md:max-w-full max-md:text-4xl max-md:leading-9">
        <img
          loading="lazy"
          src=""
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col self-center max-w-full w-[615px] max-md:text-4xl max-md:leading-9">
          <Logo />
          <Heading />
        </div>
        <BottomImage />
      </section>
    </main>
  );
}

export default CodeEasyComponent;
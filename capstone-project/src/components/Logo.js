import React from 'react';

function Logo() {
  return (
    <img
      loading="lazy"
      src="logo.png"
      alt="Code Easy Logo"
      className="object-contain self-center max-w-full aspect-[2.06] w-[105px] animate-pulse"
    />
  );
}

export default Logo;
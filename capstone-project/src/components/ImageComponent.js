import React from 'react';

function ImageComponent({ src, alt, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300 ease-in-out hover:opacity-90`}
    />
  );
}

export default ImageComponent;
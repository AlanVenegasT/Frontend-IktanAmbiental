
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Imagen2en1 = () => {
  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'top',
      distance: '400px'

    });
  }, []);
  return (
    <>
    <div ref={revealRef}>
    <h2 className="font-medium text-base md:text-base lg:text-base xl:text-lg text-center mt-6 md:mt-6 lg:mt-6 xl:mt-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">DETECCIÓN Y CUANTIFICACIÓN</h2>
      <h2 className="text-black text-xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold text-center pt-4 pb-4 md:pb-8 lg:pb-8 xl:pb-12 ">
      Emisiones de Metano
      </h2>

      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src="Original.jpg" srcSet="Original.jpg" alt="Image one" />
        }
        itemTwo={
          <ReactCompareSliderImage src="Fuga.jpg" srcSet="Fuga.jpg" alt="Image two" />
        }
      />
      </div>
    </>
  );
};

export default Imagen2en1;

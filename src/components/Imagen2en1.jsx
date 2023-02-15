import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Imagen2en1 = () => {
  return (
    <>
    <h2 className="font-medium text-lg lg:text-base xl:text-lg text-center mt-12 lg:mt-6 xl:mt-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">WHO WE ARE</h2>
      <h2 className="text-black text-4xl lg:text-2xl xl:text-4xl font-semibold text-center pt-4 pb-12 lg:pb-8 xl:pb-12 ">
        Retrospectiva
      </h2>

      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src="Original.jpg" srcSet="Original.jpg" alt="Image one" />
        }
        itemTwo={
          <ReactCompareSliderImage src="Fuga.jpg" srcSet="Fuga.jpg" alt="Image two" />
        }
      />
    </>
  );
};

export default Imagen2en1;

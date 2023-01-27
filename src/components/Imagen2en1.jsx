import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Imagen2en1 = () => {
  return (
    <>
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

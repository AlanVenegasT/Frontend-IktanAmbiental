import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Imagen2en1 = () => {
  return (
    <>
      <h2 className="text-[#00963B] text-4xl font-semibold text-center py-12">
        Nuestro{" "}
        <span className="text-[#0C3858] border-b-4 border-[#9DCCB8] py-3">
          {" "}
          Trabajo{" "}
        </span>
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

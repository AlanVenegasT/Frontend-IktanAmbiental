import HeroSlider, { Overlay, Slide } from "hero-slider";

const bogliasco = "/VálvulasFO.png";
const countyClare = "/Cielo azulFO.png";
const craterRock = "/img8FO.png";

export default function Hero() {
  return (
    <>
     <HeroSlider className="pt-18 bg-black "
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>

      <div className="relative flex justify-center flex-col w-full h-full">
          <div className="p-0 uppercase w-full text-center  ">
            <h1 className=" text-white font-bold uppercase text-2xl md:text-3xl lg:text-5xl xl:text-7+xl">INSPECCIONES OGI</h1>
          </div>
          <div className="p-0 w-full text-center  "> 
            <h2 className="text-white font-semibold  md:px-64 lg:px-64 xl:px-64 text-base md:text-lg lg:text-2xl xl:text-4xl ">
            Prevención y Control Integral de Emisiones de Metano para el Sector Hidrocarburos
            </h2>
          </div>
        </div>


      </Overlay>

      <Slide
        
        shouldRenderMask
       
        background={{
          backgroundImageSrc: craterRock
          
        }}
        
        
        
      />

      <Slide
        
        shouldRenderMask
        
        background={{
          backgroundImageSrc: bogliasco
        }}

        
      /> 

      <Slide
      
        shouldRenderMask
        
        background={{
          backgroundImageSrc: countyClare
        }}
      />


      
    </HeroSlider>
    </>
  );
}

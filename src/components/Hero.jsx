import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";


const bogliasco = "/ambiental1.avif";
const countyClare = "/Cielo azul.jpg";
const craterRock = "/img8.jpg";

export default function Hero() {
  return (
    <HeroSlider className="pt-18"
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
        <div className="flex justify-center flex-col w-full h-full">
          <div className="p-0 uppercase w-full text-center text-5xl md:text-7xl">
            <h1 className=" text-black/90 font-bold uppercase">INSPECCIÓN OGI</h1>
            
          </div>
          <div className="p-0 w-full text-center text-4xl"> 
            <h2 className="text-black/90 font-semibold px-64">
              Cumplimiento Normativo con la ASEA
en materia de Gestión Integral de
Emisiones de Metano
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


      <MenuNav />
    </HeroSlider>
  );
}

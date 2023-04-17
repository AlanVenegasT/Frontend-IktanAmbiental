import "../css/EfectoImagen.css";

import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const NuestroTrabajo = () => {
  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'left',
      distance: '400px'

    });
  }, []);
  return (
    <>
    <div ref={revealRef}>
      <div className="bg-[#E7EDF8] ">
        <div className="mx-auto max-w-6xl -mb-20 pb-20 ">
          <div className="pt-14 md:pt-20 lg:pt-20 xl:pt-28 ">
            {/*Texto */}
            <h2 className="font-medium text-center text-base md:text-base lg:text-lg xl:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">
              CASOS DE ÉXITO 
            </h2>
            <h3 className="font-semibold text-xl md:text-2xl lg:text-2xl xl:text-4xl text-center md:px-52 lg:px-80 xl:px-80 pb-20 md:pb-12 lg:pb-12 xl:pb-20">
            Nuestros valores
            </h3>
          </div>

          <div className="">{/*Imagenes */}
            <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row pb-5">{/*Imagenes arriba */}
              <div className="basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/4 px-3 py-1 md:py-0 lg:py-0 xl:py-0 ">{/*Imagen arriba 1 */}
              <div class="hover">
              <h4> Integridad </h4>
                <img className="rounded-lg " src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/15.jpg" alt="" />
                </div>
              </div>
              <div className="basis-1/3 md:basis-2/4 lg:basis-2/4 xl:basis-2/4 px-3 py-1 md:py-0 lg:py-0 xl:py-0 ">{/*Imagen arriba 2 */}
              <div class="hovir">
                <h4> Innovación </h4>
               <img className="rounded-lg" src="valores/Innovacion.jpg" alt="" />
               </div>
              </div>
              <div className="basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/4 px-3 py-1 md:py-0 lg:py-0 xl:py-0">{/*Imagen arriba 3 */}
              <div class="hover">
                <h4> Responsabilidad social </h4>
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/3.jpg" alt="" />
               </div>
              </div>

            </div>
            <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row"> {/*Imagenes abajo */}
              <div className="basis-1/3  px-3  py-1 md:py-0 lg:py-0 xl:py-0 ">{/*Imagen abajo 1 */}
              <div class="hovor">
                <h4> Calidad </h4>
                <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/5.jpg" alt="" />
                </div>
              </div>
              <div className="basis-1/3 px-3 py-1 md:py-0 lg:py-0 xl:py-0 ">{/*Imagen abajo 2 */}
              <div class="hovor">
                <h4> Colaboración </h4>
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/7.jpg" alt="" />
               </div>
              </div>
              <div className="basis-1/3 px-3 py-1 md:py-0 lg:py-0 xl:py-0 ">{/*Imagen abajo 3 */}
              <div class="hovor">
                <h4> Orientación al cliente </h4>
                <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/8.jpg" alt="" />
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default NuestroTrabajo;

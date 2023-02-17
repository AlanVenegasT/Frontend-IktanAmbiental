import "../css/EfectoImagen.css";

import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const NuestroTrabajo = () => {
  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 12000,
      origin: 'left',
      distance: '-500px'

    });
  }, []);
  return (
    <>
    <div ref={revealRef}>
      <div className="bg-[#E7EDF8] ">
        <div className="mx-auto max-w-6xl -mb-20 pb-20 ">
          <div className="pt-28 lg:pt-20 xl:pt-28 ">
            {/*Texto */}
            <h2 className="font-medium text-center text-lg xl:text-base lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">
              CASOS DE EXITO 
            </h2>
            <h3 className="font-semibold text-4xl lg:text-2xl xl:text-4xl text-center px-80 pb-20 lg:pb-12 xl:pb-20">
            Nuestros clientes son la mejor recomendación
            </h3>
          </div>

          <div className="">{/*Imagenes */}
            <div className=" flex flex-row pb-5">{/*Imagenes arriba */}
              <div className="basis-1/4 px-3">{/*Imagen arriba 1 */}
              <div class="hover">
              <h4>IT Management</h4>
                <img className="rounded-lg " src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/15.jpg" alt="" />
                </div>
              </div>
              <div className="basis-2/4 px-2 ">{/*Imagen arriba 2 */}
              <div class="hovir">
                <h4>Cyber Security</h4>
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/13.jpg" alt="" />
               </div>
              </div>
              <div className="basis-1/4 px-3">{/*Imagen arriba 3 */}
              <div class="hover">
                <h4>Cloud Computing</h4>
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/3.jpg" alt="" />
               </div>
              </div>

            </div>
            <div className="flex flex-row"> {/*Imagenes abajo */}
              <div className="basis-1/3 px-3">{/*Imagen abajo 1 */}
              <div class="hovor">
                <h4>Software Dev</h4>
                <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/5.jpg" alt="" />
                </div>
              </div>
              <div className="basis-1/3 px-3">{/*Imagen abajo 2 */}
              <div class="hovor">
                <h4>Software Dev</h4>
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/7.jpg" alt="" />
               </div>
              </div>
              <div className="basis-1/3 px-3">{/*Imagen abajo 3 */}
              <div class="hovor">
                <h4>Software Dev</h4>
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

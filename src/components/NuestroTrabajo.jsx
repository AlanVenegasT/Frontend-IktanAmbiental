const NuestroTrabajo = () => {
  return (
    <>
      <div className="bg-[#E7EDF8] ">
        <div className="mx-auto max-w-6xl">
          <div className="pt-28">
            {/*Texto */}
            <h2 className="font-medium text-center text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">
              CASE STUDIES
            </h2>
            <h3 className="font-semibold text-4xl text-center px-80 pb-20">
              Latest showcase and solutions to our customers!
            </h3>
          </div>

          <div className="">{/*Imagenes */}
            <div className=" flex flex-row pb-5">{/*Imagenes arriba */}
              <div className="basis-1/4 px-3">{/*Imagen arriba 1 */}
                <img className="rounded-lg " src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/15.jpg" alt="" />
              </div>
              <div className="basis-2/4 px-2 ">{/*Imagen arriba 2 */}
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/13.jpg" alt="" />
              </div>
              <div className="basis-1/4 px-3">{/*Imagen arriba 3 */}
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/3.jpg" alt="" />
              </div>

            </div>
            <div className="flex flex-row"> {/*Imagenes abajo */}
              <div className="basis-1/3 px-3">{/*Imagen abajo 1 */}
                <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/5.jpg" alt="" />
              </div>
              <div className="basis-1/3 px-3">{/*Imagen abajo 2 */}
               <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/7.jpg" alt="" />
              </div>
              <div className="basis-1/3 px-3">{/*Imagen abajo 3 */}
                <img className="rounded-lg" src="https://validthemes.live/themeforest/crysa/assets/img/portfolio/8.jpg" alt="" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuestroTrabajo;

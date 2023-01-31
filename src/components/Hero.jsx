import React from "react";

const Hero = () => {
  return (
    <>
      
      <div className="relative ">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto ">
              <div className="relative shadow-xl sm:overflow-hidden ">
                <div className="absolute inset-0 bg-black">
                  <img
                    className="h-full w-full object-cover  brightness-100 opacity-40   " //object-cover
                    src="Hojasfondo.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0  mix-blend-multiply" />
                </div>
               
                <div className="relative h-screen w-screen ">
                  <div className="flex h-screen">
                    <div className="m-auto">
                      <h1 className=" text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ">
                        
                        <span className="block text-white -ml-36   py-2 pt-28  ">     
                        INSPECCIÓN  OGI
                        </span>
                      </h1>
                      <p className="mx-auto mt-6 max-w-lg -ml-40 text-justify text-xl text-white sm:max-w-3xl font-bold pr-96 pl-5   ">
                      Cumplimiento Normativo con la ASEA
en materia de Gestión Integral de
Emisiones de Metano
                      </p>
                      
                      <div className="absolute bottom-0 left-0 right-0  bg-black   text-white w-full opacity-80 ml-[900px] ">
                <h2 className="px-28 text-xl font-lightfont-light py-10 ">www.iktanstrategies.com</h2>
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

export default Hero;

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
                    src="Válvulas.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0  mix-blend-multiply" />
                </div>
               
                <div className="relative h-screen w-screen ">
                  <div className="flex h-screen">
                    <div className="m-auto">
                      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ">
                        
                        <span className="block text-white bg-red-600  px-4 py-2 rotate-2  ">     
                        INSPECCIÓN  OGI
                        </span>
                      </h1>
                      <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl font-bold px-28 animate-bounce  ">
                      Cumplimiento Normativo con la ASEA
en materia de Gestión Integral de
Emisiones de Metano
                      </p>
                      <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                        <div className="space-y-4 sm:mx-auto  sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                          <a
                            href="#"
                            className="flex  items-center justify-center rounded-md border-2 border-white bg-transparent  px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[#00963B] hover:border-transparent hover:duration-700 hover:scale-105 sm:px-8"
                          >
                            Conoce más...
                          </a>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0  bg-[#041629]   text-white w-full opacity-50 ">
                <h2 className="text-center text-xl font-lightfont-light py-10 ">www.iktanstrategies.com</h2>
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

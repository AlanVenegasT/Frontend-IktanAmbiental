import React from "react";

const Hero = () => {
  return (
    <>
      
      <div className="relative bg-gray-50">
        <div className="mx-auto  md:w-full max-w-7xl md:pt-16 pb-20 text-center lg:py-48 lg:text-left w-10/12 pt-5 pl-10">
          <div className="px-4 -ml-10 sm:px-8 lg:w-1/2 xl:pr-15">
            <h1 className="pb-8 mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-[#0C3858] sm:text-7xl"> INSPECCIÓN{' '}
              <span  ><h1 className="    mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-[#00963B]  sm:text-7xl ransition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 ">
              OGI
              </h1></span>
            </h1>
            <p className=" pr-32 mx-auto mt-3 max-w-md text-lg text-gray-500 border-l-8 pl-4 border-red-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Cumplimiento Normativo con la ASEA
en materia de Gestión Integral de
Emisiones de Metano
            </p>

            {/*<div className="mt-10 sm:flex sm:justify-center lg:justify-start">  
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#0C3858] px-8 py-3 text-base font-medium text-white hover:bg-[#e0a300] md:py-4 md:px-10 md:text-lg"
                >
                  CONOCENOS...
                </a>
              </div>
            </div>*/}
            
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0  bg-[#041629] text-white w-full opacity-90 ">
                <h2 className="text-center text-xl font-lightfont-light py-10">www.iktanstrategies.com</h2>
            </div>
    
        
    </div>

        
      
    </>
  );
};

export default Hero;

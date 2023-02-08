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
                  <h1 className=" text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl translate-x-60 -translate-y-32 ">

                    <span className="block text-white -ml-36   py-2   ">
                      INSPECCIÓN  OGI
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg -ml-40 text-justify text-xl text-white sm:max-w-3xl font-bold pr-96 pl-5 translate-x-72 -translate-y-36 ">
                    Cumplimiento Normativo con la ASEA
                    en materia de Gestión Integral de
                    Emisiones de Metano
                  </p>

              {/*<div className="absolute bottom-0 left-0 right-0     text-white w-full   ">
                    <div className="bg-transparent">
                      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale hover:grayscale-0 duration-700 ">
                            <img className="h-12" src="LOGO IKTAN TRAINING (1).png" alt="Tuple" />
                          </div>
                          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale hover:grayscale-0 duration-700 ">
                            <img className="h-12" src="LOGO IKTAN TRAINING (1).png" alt="Mirage" />
                          </div>
                          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale hover:grayscale-0 duration-700 ">
                            <img className="h-12" src="LOGO IKTAN TRAINING (1).png" alt="StaticKit" />
                          </div>
                          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 grayscale hover:grayscale-0 duration-700">
                            <img
                              className="h-12"
                              src="LOGO IKTAN TRAINING (1).png"
                              alt="Transistor"
                            />
                          </div>
                          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 grayscale hover:grayscale-0 duration-700">
                            <img
                              className="h-12"
                              src="LOGO IKTAN TRAINING (1).png"
                              alt="Workcation"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>*/}
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

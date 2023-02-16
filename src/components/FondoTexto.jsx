import React from "react";

const FondoTexto = () => {
  return (
    <>
      <div className="relative bg-[#091D3E] mt-20 lg:mt-12 xl:mt-20" id="PPCIEM">
        <div className="relative h-80 overflow-hidden bg-[#091D3E] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-[700px] translate-x-16 mt-0 object-cover  "
            src="camara.png"
            alt=""
          />
        </div>


        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-24 lg:px-8">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h3 className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">
              PPCIEM
            </h3>
            <p className="mt-2 text-3xl lg:text-2xl xl:text-3xl font-bold  text-white">
            ¿Cómo ayudamos a nuestros clientes a cumplir con la ASEA?
            </p>
            <p className="font-bold text-white pt-5">Elaboración e implementación del PPCIEM</p>
            <p className="mt-1  text-sm leading-6 text-gray-300 pr-16">
            Desarrollamos todo el proceso de elaboración del Programa para la Prevención y Control Integral de Emisiones de Metano (PPCIEM), Diagnóstico, Capacitación, Cuantificación, Reportes, PDRF, etc.
            </p>
            <p className="font-bold text-white pt-5">Emisiones de Metano</p>
            <p className="mt-1  text-sm leading-6 text-gray-300 pr-16">
            Contamos con técnicos altamente capacitados en tecnología y equipo medioambiental para brindar una respuesta inmediata en la detección y reparación de equipos y componentes con fugas.
            </p>
            <div className=" flex flex-row  mt-8 border-t-2 border-[#3A4A65] pt-6 ">
              <div className="flex flex-row basis-1/2 pl-2">
                <img className="basis-1/3 h-10 w-10" src="" alt="" />
                <p className="basis-2/3 text-xs text-white">
                Tienes dudas?{" "}
                  <span className="font-bold"> Rodolfo.castro@iktanst.com</span>{" "}
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FondoTexto;

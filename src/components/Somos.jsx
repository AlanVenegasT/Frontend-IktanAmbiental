import React from "react";


const Somos = () => {
  return (
    <>
      <div className="bg-white pt-12">
        {" "}
        {/*Div padre */}
                <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row   h-full mx-auto max-w-6xl overflow-hidden space-x-5  ">
          {/*Div hijo2 */}

          <div className="flex flex-col  basis-5/8 bg-transparent px-5 ">
            {" "}
            {/*Div parte izquierda */}
            <div className="  bg-white border-2 border-[#EAEBF0] mb-5 shadow-lg ">
              {/*div1*/}
              <h2 className=" text-4xl border-b-2 border-[#EAEBF0] mx-5 py-3 md:text-3xl ">
              Quienes somos?
              </h2>
              <h3 className="mx-5 py-4 text-base pr-20  md:text-base md:pr-32 lg:text-xl lg:pr-52 xl:text-xl xl:pr-52">
              IKTAN Ambiental

              </h3>
              <p className="mx-5 md:text-xs lg:text-base xl:text-base  text-justify">
              En IKTAN Ambiental, tenemos el compromiso de ofrecer a nuestros clientes la orientación
y los servicios necesarios para que logren el cumplimiento en tiempo y forma del Control
Integral de Emisiones de Metano.
              </p>
              <p className="mx-5 py-2 md:text-xs lg:text-base xl:text-base text-justify">
              Nos especializamos en la regulación de la ASEA para satisfacer las necesidades de nuestros
clientes, con los mayores estándares de calidad y competencia. 
              </p>
              <p className="mx-5 py-2 md:text-xs lg:text-base xl:text-base text-justify">
              Nuestra experiencia con los reguladores del sector y en campo nos permiten ofrecer soluciones
integrales y confiables al mejor costo-beneficio para cumplir con las obligaciones a lo largo del ciclo
de vida de un proyecto del sector hidrocarburos.
              </p>
            </div>
            <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row w-full border-2 border-[#EAEBF0] mb-5 shadow-lg ">
              {" "}
              {/*div2 Mision e imagen */}
              <div className=" bg-white basis-1/3">
                {/*iMAGEN */}
                <img
                  className="object-cover h-full w-full"
                  src="Inspector 1.jpg"
                  alt=""
                />
              </div>
              <div className=" bg-white basis-2/3  mx-5">
                {/*Texto */}
                <h2 className=" py-3 md:py-0 lg:py-0 xl:py-0 border-b-2 border-[#EAEBF0] text-3xl md:text-2xl"></h2>
                <p className="md:text-xs text:base lg:text-base xl:text-base py-2 text-justify pt-6">
                Nuestro técnicos realizan la identificación y
cuantificación de emisiones de metano,
utilizando la mejor tecnología disponible,
mientras que nuestros expertos en gestión
regulatoria se aseguran que todos los
requerimientos de ASEA se cumplan en el
momento y se prevean para el futuro.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row w-full border-2 mb-5 shadow-lg">
              {" "}
              {/*div3 Vision e imagen*/}
              
            </div>
          </div>

          <div className="flex flex-col basis-3/8 bg-white ">
            {" "}
            {/*Div parte derecha */}
            <div className="bg-white border-2 border-[#EAEBF0] mr-3 mb-5 shadow-lg  ">
              {" "}
              {/*Div parte derecha, primero */}
              <div>
                <img
                  className="object-cover w-full h-auto   "
                  src="Inspector 2.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className=" text-2xl px-2 pt-3 pb-3 md:pb-0 lg:pb-0 xl:pb-0 border-b-2 border-[#EAEBF0] mx-5 md:text-lg md:mx-2 ">
                IKTAN es una de las empresas pioneras en
el cumplimiento de la regulación de ASEA. {" "}
                </h3>
                <h4 className="text-md px-8  py-3 md:text-xs lg:text-base xl:text-base md:px-4 ">
                Entendemos que cada caso requiere una
estrategia puntual y completa para tener
éxito.
                </h4>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Somos;

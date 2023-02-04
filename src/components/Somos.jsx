import React from "react";


const Somos = () => {
  return (
    <>
      <div className=" flex flex-row "> {/*padre */}
        <div className=" basis-1/2 bg-[#AEC90A]  " >{/*hijo1 izquierda */}
              <img className="w-full h-full relative " src="Plantas3.png" alt="" />
              <h2 className="text-5xl font-medium text-white absolute translate-x-40 -translate-y-96  ">Quienes somos? </h2>
              <h2 className="text-6xl font-medium text-white absolute translate-x-40 -translate-y-80 ">IKTAN Ambiental</h2>
        </div>
        <h2></h2>
        <div className=" basis-1/2 bg-white text-justify text-sm px-20 py-20 ">{/*hijo2 derecha */}

        <img className="w-full h-full relative opacity-40" src="Hojas.png" alt="" />
        
        <p className="py-3 font-semibold shadow-sm absolute px-20 -translate-x-10 -translate-y-[500px] ">En IKTAN Ambiental, tenemos el compromiso de ofrecer a nuestros clientes la orientación
        y los servicios necesarios para que logren el cumplimiento en tiempo y forma del Control
        Integral de Emisiones de Metano.</p>
        
        <p className="py-3 font-semibold shadow-sm absolute px-20 -translate-x-10 -translate-y-[430px]  ">Nos especializamos en la regulación de la ASEA para satisfacer las necesidades de nuestros
        clientes, con los mayores estándares de calidad y competencia. </p>

        <p className="py-3 font-semibold shadow-sm absolute px-20 -translate-x-10 -translate-y-[370px] ">Nuestra experiencia con los reguladores del sector y en campo nos permiten ofrecer soluciones
        integrales y confiables al mejor costo-beneficio para cumplir con las obligaciones a lo largo del ciclo
        de vida de un proyecto del sector hidrocarburos.
        </p>

        <p className="py-3 font-semibold shadow-sm absolute px-20 -translate-x-10 -translate-y-[280px] ">IKTAN es una de las empresas pioneras en
        el cumplimiento de la regulación de ASEA.</p>

        <p className="py-3 font-semibold shadow-sm absolute  px-20 -translate-x-10 -translate-y-[220px]">Entendemos que cada caso requiere una
        estrategia puntual y completa para tener
        éxito.</p>

        <p className="py-3 font-semibold shadow-sm absolute px-20 -translate-x-10 -translate-y-[160px]">Nuestro técnicos realizan la identificación y
        cuantificación de emisiones de metano,
        utilizando la mejor tecnología disponible,
        mientras que nuestros expertos en gestión
        regulatoria se aseguran que todos los
        requerimientos de ASEA se cumplan en el
        momento y se prevean para el futuro.</p>
        </div>
        </div>

      
    </>
  );
};

export default Somos;

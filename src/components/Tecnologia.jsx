import React from "react";

const Tecnologia = () => {
  return (
    <>
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 " id="tecnologia">
        <h2 className="text-center text-5xl py-5 font-semibold text-[#0C3858] ">Tecnología</h2>
        <h3 className="text-center px-32 text-2xl pb-8  font-semibold  ">La tecnología OGI (Optical Gas Imaging) <span className="text-[#008C37]"> es considerada una de las mejores prácticas
          internacionales para la detección de emisiones de metano.</span></h3>

        <div className="flex flex-row bg-white  rounded-lg shadow-2xl ">
          <img className=" basis-auto h-44   " src="Foco.png" alt="" />
          <div className=" basis-2/3 pl-5">

            <p className="px-10 leading-7 pb-5 pt-10 " >Gracias a la tecnología OGI, el sector hidrocarburos puede incorporar un programas
              más seguros y eficientes. Los inspectores pueden detectar y señalar con absoluta
              certeza fugas en sus instalaciones, lo que acelera las reparaciones, reduce las
              emisiones y aumenta la conformidad con las normativas..</p>

          </div>
        </div>

        <div className="flex flex-row bg-white  mt-8 rounded-lg shadow-2xl ">
          <div className=" basis-2/3 pl-5">
            <h4 className="pr-16 pl-16  py-5 leading-7 text-center pt-10 text-xl font-semibold hover:text-[#00963B] " >La cámara termográfica FLIR GFX-320 <span className="text-[#00963E]"> Intrínsecamente Segura </span> es una solución de completa y confiable para detectar fugas.</h4>
            <p className="pr-5 leading-7 pb-5 text-end text-base " >En comparación con la tecnología tradicional, la utilización de la cámara OGI permite realizar hasta nueve veces más rápido el análisis de detección de fugas. </p>
            <p className="pr-5 leading-7 text-end text-base " >La cámara OGI es cualitativa por lo que debe vincularse conuna tecnología de acompañamiento para medir índices de fugas de masa (lb/h o g/h) o índices de fugas en volumen (cc/min o L/min).</p>
          </div>
          <img className=" basis-1/3 h-80   " src="camara.png" alt="" />

        </div>

        <div className="flex flex-row bg-white  mt-8 rounded-lg shadow-2xl mb-12 ">
          <img className=" basis-1/3 h-72 " src="Inspector 1.jpg" alt="" />
          <div className=" basis-2/3 pl-7 ">
            <h4 className="pr-16 pl-16 pt-10 py-5 leading-7 text-xl text-center font-semibold hover:text-[#00963B] " >Realizar <span className="text-[#00963E]"> inspecciones y verificaciones </span> mediante un equipo OGI asociado a un LDAR reduce significativamente las emisiones de metano.</h4>
            <p className="pr-5 leading-7 pb-5 text-base " >Permite detectar emisiones de gas desde una distancia segura, por lo que el inspector podrá realizar un escaneo inicial del área de trabajo principal para determinar si hay grandes fugas de gas visibles. </p>
            <p className="pr-5 leading-7  text-base" >La implementación de un LDAR mediante tecnología OGI no sólo resulta eficaz sino también rentable.</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Tecnologia;

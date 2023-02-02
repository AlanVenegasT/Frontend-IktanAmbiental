import React from "react";

const Tecnologia = () => {
  return (
    <>
     <div className="max-w-6xl mx-auto ">
          <h2 className="text-center text-5xl py-5 font-semibold ">Tecnología</h2>
          <h3 className="text-center px-32 text-2xl pb-8 ">La tecnología OGI (Optical Gas Imaging) es considerada una de las mejores prácticas
internacionales para la detección de emisiones de metano.</h3>

        <div className="flex flex-row bg-white border-2 border-[#ECECEC] mt-8">
        <img className=" basis-1/3 h-72   " src="camara.png" alt="" />/
        <div className=" basis-2/3 pl-5">
        
            <p className="pr-5 leading-7 pb-5 py-28 " >Gracias a la tecnología OGI, el sector hidrocarburos puede incorporar un programas
              más seguros y eficientes. Los inspectores pueden detectar y señalar con absoluta
              certeza fugas en sus instalaciones, lo que acelera las reparaciones, reduce las
              emisiones y aumenta la conformidad con las normativas..</p>
            
          </div>
        </div>

        <div className="flex flex-row bg-white border-2 border-[#ECECEC] mt-8 ">
        <img className=" basis-1/3 h-72   " src="camara.png" alt="" />/
        <div className=" basis-2/3 pl-5">
        <h4 className="pr-16 text-xl py-5 leading-7 " >La cámara termográfica FLIR GFX-320 <span className="text-[#00963E]"> Intrínsecamente Segura </span> es una solución de completa y confiable para detectar fugas.</h4>
            <p className="pr-5 leading-7 pb-5 " >En comparación con la tecnología tradicional, la utilización de la cámara OGI permite realizar hasta nueve veces más rápido el análisis de detección de fugas. </p>
            <p className="pr-5 leading-7 " >La cámara OGI es cualitativa por lo que debe vincularse conuna tecnología de acompañamiento para medir índices de fugas de masa (lb/h o g/h) o índices de fugas en volumen (cc/min o L/min).</p>
          </div>
        </div>

        <div className="flex flex-row bg-white border-2 border-[#ECECEC] mt-8 ">
        <img className=" basis-1/3 h-64 " src="Inspector 1.jpg" alt="" />
        <div className=" basis-2/3 pl-7 ">
        <h4 className="pr-16 text-xl py-5 leading-7 " >Realizar <span className="text-[#00963E]"> inspecciones y verificaciones </span> mediante un equipo OGI asociado a un LDAR reduce significativamente las emisiones de metano.</h4>
            <p className="pr-5 leading-7 pb-5 " >Permite detectar emisiones de gas desde una distancia segura, por lo que el inspector podrá realizar un escaneo inicial del área de trabajo principal para determinar si hay grandes fugas de gas visibles. </p>
            <p className="pr-5 leading-7 " >La implementación de un LDAR mediante tecnología OGI no sólo resulta eficaz sino también rentable.</p>
          
          </div>
        </div>      
     </div>
    </>
  );
};

export default Tecnologia;

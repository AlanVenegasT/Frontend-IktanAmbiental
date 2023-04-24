import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';



const Tecnologia = () => {

  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'left',
      distance: '400px'

    });
  }, []);

  return (
    <>
     <div ref={revealRef}> 
    <div className="w-full">

    
     <div className=" mx-auto md:max-w-2xl lg:max-w-7xl xl:max-w-7xl "> {/*Div general */}
      <div className=" flex flex-col md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row -translate-y-28 " > {/*Cuadros de texto */}
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row my-5 md:my-0 lg:my-0 xl:my-0  mt-28 md:mt-0 lg:mt-0 xl:mt-0 basis-1/2 bg-gradient-to-r from-[#0C6201] via-[#6FCC36] to-[#6FCC36] mx-3">
            <div className="basis-1/3 flex justify-center ">
              <img className="h-44 mt-4 md:h-44 md:mt-8 lg:h-44 lg:mt-8 xl:h-52 xl:mt-12" src="TerAu.png" alt="" />
            </div>
            <div className="basis-2/3">
              <h3 className="text-white font-semibold  pl-5 pt-6 pb-4 text-xl md:text-xl md:pl-5 md:pt-6 md:pb-3 lg:text-xl lg:pl-5 lg:pt-8 lg:pb-6 xl:text-2xl xl:pl-5 xl:pt-10 xl:pb-6 ">Tercero Autorizado ASEA</h3>
              <p className="text-white text-justify px-5 leading-5 pb-6  text-sm md:leading-8 md:pb-6 md:text-base lg:leading-8 lg:pb-6 lg:text-base xl:leading-8 xl:pb-12 xl:text-lg ">Somos Tercero Autorizados para emitir los Dictámenes Técnicos y realizar las Evaluaciones Técnicas, para las actividades de exploración y extracción de hidrocarburos en yacimientos convencionales y no convencionales. TA-D-A02/06-16/2021</p>
              
            </div>
        </div>
        <div className="basis-1/2 bg-gradient-to-r from-[#0C6201] via-[#0C6201] to-[#6FCC36] mx-3 py-4 md:mt-6 lg:mt-6 xl:mt-6 overflow-hidden ">
            <div className="relative">
            <img className="h-52 w-40 md:h-40 md:w-80 lg:h-48 lg:w-72 xl:h-72 xl:w-80 -translate-y-8 translate-x-60 md:-translate-y-8 md:translate-x-80 lg:translate-x-56 xl:translate-x-80" src="puntos.png" alt="" />
            </div>

            <div className="absolute -translate-y-56 md:-translate-y-44 lg:-translate-y-48 xl:-translate-y-72">
          <h2 className=" text-white font-semibold text-2xl pt-7 pl-8 md:text-3xl md:pt-4 md:pl-8 lg:text-4xl lg:pt-4 lg:pl-8 xl:text-6xl xl:pt-7 xl:pl-8">ACE-STPS</h2>
          <h3 className=" text-white font-semibold pl-5 py-3 text-xl md:pl-8 md:py-2 md:text-lg lg:pl-8 lg:py-3 lg:text-xl xl:pl-8 xl:py-3 xl:text-2xl">Capacitación Especializada</h3>
          <p className=" text-white pr-24 pl-5 leading-5 text-sm md:leading-7 md:text-base lg:leading-7 lg:text-base xl:leading-7 xl:text-lg">Agente Capacitador Externos ante la Secretaría del Trabajo y Previsión Social, para el cumplimiento de las obligaciones de la Ley Federal del Trabajo.</p>
          </div>
        </div>
      </div>



      <div className=" md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row "> {/*Seccion restante */}
          <div className="basis-1/2 pl-5 md:pl-12 lg:pl-12 xl:pl-0 ">
          <h2 className="font-medium text-base md:text-base lg:text-base xl:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">TU MEJOR ELECCIÓN</h2>
          <h3 className=" text-xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold pr-32 md:pr-52 lg:pr-52 xl:pr-60 py-3 md:lg:py-3 lg:py-3 xl:py-6">Somos la decisión correcta para resultados excepcionales.</h3>
          
          <div className="flex">
          <img className="h-6 mr-2 " src="comillasSF.png" alt="comillas" />
          <p className="pr-20 md:pr-60 lg:pr-32 italic text-justify leading-8 lg:leading-6 xl:leading-8 text-base lg:text-base xl:text-base ">Si crees que cumplir es caro, espera ver lo que cuesta una clausura...</p>
          </div>

          <div className="flex">
          <p className="pl-8 italic pr-20 md:pr-60 lg:pr-32 text-justify leading-8 lg:leading-6 xl:leading-8 text-base lg:text-base xl:text-base" >Y si crees que una clausura es cara, espera
               ver lo que cuesta un accidente. <img className="h-6 ml-56 -translate-y-8 lg:ml-48 lg:-translate-y-6 lg:translate-x-10 xl:ml-44 xl:-translate-y-8 " src="comillasSF.png" alt="" /> </p>
          
          </div>

          <p className="pl-8 pr-20 md:pr-60 lg:pr-32 text-justify leading-8 lg:leading-6 xl:leading-8 text-base lg:text-base xl:text-base">Siempre será más rentable cumplir
              a tiempo, la prevención es nuestro primer objetivo.</p>
        
        
        <a href="#faqs">
          <button type="button" className="inline-flex items-center rounded-md   px-12 py-4 my-8  mr-20 mb-[700px] md:mb-64 lg:mb-0 xl:mb-0 text-base font-medium bg-gradient-to-r from-[#0C6201] via-[#6FCC36] to-[#B7E163] text-white shadow-sm ">FAQs</button>
          </a>
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col absolute w-[250px] h-[320px] md:w-[250px]  md:h-[320px]  lg:w-[200px] lg:h-[280px] xl:w-[250px] xl:h-[320px] -translate-y-[630px] translate-x-16 md:-translate-y-56 md:translate-x-96 lg:translate-y-0 lg:translate-x-60 xl:translate-x-96 rounded-3xl bg-white border-2 border-[#E7E7E7] ">
              <div className="basis-1/2">
                  <img className=" h-32 pl-14 pt-6" src="Cohete.png" alt="" />
              </div>
              <div className="basis-1/2 ">
                  <h2 className="text-center text-sm">CONFIANZA</h2>
                  <h3 className="text-center font-bold text-lg md:text-sm lg:text-base xl:text-lg pt-2">Seguro de Responsabilidad </h3>
                  <h3 className="text-center font-bold text-lg md:text-sm lg:text-base xl:text-lg "> Profesional</h3>
                  <h4 className="text-center font-medium pt-4 ">READ MORE</h4>
              </div>
            </div>

            <div className="absolute w-[250px] h-[360px] md:w-[250px] md:h-[320px] lg:w-[200px] lg:h-[320px] xl:w-[250px] xl:h-[350px] -translate-y-72 translate-x-16 md:-translate-y-56 md:translate-x-10 lg:translate-y-10 lg:translate-x-0 xl:translate-x-24  rounded-3xl bg-[#F9F9F9] border-2 border-[#E7E7E7] ">
            <div className="basis-1/2">
                  <img className="h-32 pl-14 pt-6" src="Cohete.png" alt="" />
              </div>
              <div className="basis-1/2 ">
                  <h2 className="text-center text-sm pt-6">DESEMPEÑO</h2>
                  <h3 className="text-center font-bold text-lg md:text-sm lg:text-base xl:text-lg pt-2">Líderes en cumplimiento para actividades de Exploración y Extracción en ASEA</h3>
                  <h4 className="text-center font-medium pt-4 ">READ MORE</h4>
              </div>
            </div>
            <div>
            </div>
          </div>
      </div>



      <div className="bg-white border-t-2 border-[#E7E7E7] mt-32">
      <div className="mx-auto max-w-7xl py-8 md:py-12 lg:py-12 xl:py-12 px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-4 lg:col-span-1">
            <a href="https://iktanstrategies.com/">
            <img className=" h-12 md:h-16 lg:h-16 xl:h-16 grayscale hover:grayscale-0 duration-700 hover:scale-105" src="LOGO IKTAN STRATEGIES.jpg" alt="IKTAN STRATEGIES.jpg" />
            </a>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-10 md:h-14 lg:h-14 xl:h-14 grayscale hover:grayscale-0 duration-700 hover:scale-105" src="LOGO IKTAN TECHNOLOGIES.jpg" alt="IKTAN TECHNOLOGIES" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <a href="https://iktantraining.com/">
            <img className="h-12 md:h-16 lg:h-16 xl:h-16 grayscale hover:grayscale-0 duration-700 hover:scale-105" src="LOGO IKTAN TRAINING (1).png" alt="IKTAN TRAINING" />
            </a>
          </div>
          
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <a href="https://iktanprotect.com/" >
            <img
              className=" h-10 md:h-14 lg:h-14 xl:h-14 grayscale hover:grayscale-0 duration-700 hover:scale-105"
              src="undefined - Imgur.png"
              alt="Iktan Protect"
            />
            </a>
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

export default Tecnologia;

{/*import "../css/Letra28.css";*/}
import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; 



const Somos = () => {

  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'bottom',
      distance: '-100px'

    });
  }, []);

  return (
    <>
      <div ref={revealRef}>
      <div className=" mx-auto flex flex-col md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row max-w-7xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl  mt-20 md:mt-32 lg:mt-20 xl:mt-32 "> {/*Padre */}
        <div className=" basis-1/2 ">  {/*Imagen */}
          <img className="relative px-5 md:px-0 lg:px-0 xl:px-0 " src="Inspector 1.jpg" alt="" />
          <div className="absolute md:w-[12px] md:h-[400px] md:translate-x-80 md:-translate-y-[380px] lg:w-[12px] lg:h-[650px] lg:translate-x-48 lg:-translate-y-[380px] xl:w-[15px] xl:h-[650px] xl:translate-x-80 xl:-translate-y-[640px] bg-white  "></div>
          <div className="absolute md:w-[360px] md:h-[70px] md:translate-x-80 md:-translate-y-[450px] lg:w-[187px] lg:h-[70px] lg:translate-x-48 lg:-translate-y-[380px] xl:w-[320px] xl:h-[70px] xl:translate-x-80 xl:-translate-y-[640px] bg-white "></div>
          <div className="absolute md:w-[440px] md:h-[70px] md:-translate-x-[120px] md:-translate-y-16 lg:w-[320px] lg:h-[70px] lg:-translate-x-[120px] lg:-translate-y-16 xl:w-[320px] xl:h-[70px] xl:translate-x-0 xl:-translate-y-16 bg-white "></div>

          <div className="absolute flex flex-row h-[100px] w-[335px] translate-x-5 -translate-y-0 md:h-[100px] md:w-[380px] md:-translate-x-8 md:-translate-y-40 lg:h-[100px] lg:w-[300px] lg:-translate-x-8 lg:-translate-y-40 xl:h-[150px] xl:w-[420px] xl:-translate-x-6 xl:-translate-y-52 bg-gradient-to-r from-[#0C6201] via-[#6FCC36] to-[#B7E163] ">
            <div className="1/4 pt-4 pl-4">
           <img className=" h-16 w-36 -translate-y-0 md:h-20 md:w-40 md:-translate-y-0 lg:h-24 lg:w-40 lg:-translate-y-4  xl:h-28 xl:w-44 xl:-translate-y-0" src="Exp.png" alt="" />
            </div>
            <div className="3/4">
              <h3 className=" text-white font-semibold  px-3 pt-3 pb-1 text-xs md:pt-3 md:pb-1 md:text-sm  lg:pt-3 lg:pb-1 lg:text-sm xl:text-lg xl:pt-5 xl:pb-3 ">Experiencia y Conocimiento</h3>
              <p className=" text-white leading-4 md:leading-7 lg:leading-7 xl:leading-7 font-semibold px-3 text-xs md:text-xs lg:text-xs xl:text-sm ">Entendemos que cada caso requiere una estrategia puntual y completa para tener éxito.</p>

            </div>
          </div>

        </div>

        <div className=" basis-1/2  pl-6 pt-36 md:pl-12 md:pt-0 lg:pl-14 lg:pt-0 xl:pl-20 xl:pt-0  first-letter:"> {/*Texto */}
          <div>
            <h2 className=" md:mt-14 lg:mt-0 xl:mt-14 font-medium text-base md:text-base lg:text-base xl:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">CONOCENOS</h2>
            <h3 className="pr-32 md:pr-40 lg:pr-32 xl:pr-40 md:text-xl lg:text-2xl  xl:text-3xl font-bold py-2 md:py-2 lg:py-3 xl:py-5  leading-6 md:leading-10 lg:leading-8 xl:leading-10 text-[#232323] ">Consultoría especializada en el sector hidrocarburos</h3>
            <p className="text-[#66667F] leading-5 md:leading-7 lg:leading-5 xl:leading-7 text-sm md:text-base lg:text-xs xl:text-base text-justify pr-5 md:pr-0 lg:pr-0 xl:pr-0 ">En IKTAN Ambiental tenemos el compromiso de ofrecer a nuestros clientes la orientación
y los servicios necesarios para que logren el desarrollo exitoso de proyectos en el sector hidrocarburos.
</p>
          </div>

          <div className="flex flex-row pt-6 md:pt-6 lg:pt-6 xl:pt-10   ">
            <div className="basis-1/2">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 md:text-lg lg:text-lg xl:text-xl  font-bold text-[#232323] ">Misión</h3>
              </div>
              <p className="text-[#66667F] leading-5 md:leading-7 lg:leading-5 xl:leading-7 text-sm lg:text-xs xl:text-base pr-3 md:pr-3 lg:pr-3 xl:pr-3 text-justify ">Contribuir a la excelencia en el desarrollo de proyectos exitosos del sector hidrocarburos, con el cumplimiento de los objetivos de nuestros clientes, cuidando en todo momento la seguridad de las personas y la protección al medio ambiente.</p>
            </div>

            <div className=" basis-1/2">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 md:text-lg lg:text-lg xl:text-xl font-bold text-[#232323]">Visión</h3>
              </div>
              <p className="text-[#66667F] leading-5 md:leading-7 lg:leading-5 xl:leading-7 text-sm lg:text-xs xl:text-base pr-3 md:pr-3 lg:pr-3 xl:pr-3  text-justify ">Ser una referencia mundial en el desarrollo de proyectos del sector hidrocarburos.</p>
            </div>
          </div>

          <div className="flex">
            <h2 className="text-6xl md:text-7xl mt-10 lg:mt-5 xl:mt-10 font-bold text-green-600 ">95%</h2>
            <h3 className="pr-24 md:pr-72 lg:pr-40 xl:pr-40 pt-16 md:pt-16 lg:pt-10 xl:pt-14 pl-4 font-bold text-[#232323] lg:text-xs xl:text-lg  ">Satisfacción del Cliente 2022.</h3>
          </div>
          <p className="font-bold text-xs lg:text-[9px]  xl:text-xs mt-3 md:mt-5 lg:mt-0 xl:mt-0 ">*Datos de la encuesta digital de satisfacción a diciembre de 2022.*</p>

          </div>
        </div>
      </div>

    </>
  );
};

export default Somos;

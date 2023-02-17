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
      <div className=" mx-auto md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row max-w-7xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl  mt-32 lg:mt-24 xl:mt-32 "> {/*Padre */}
        <div className=" basis-1/2 ">  {/*Imagen */}
          <img className="relative " src="Inspector 1.jpg" alt="" />
          <div className="absolute md:w-[12px] md:h-[400px] md:translate-x-80 md:-translate-y-[380px] lg:w-[12px] lg:h-[650px] lg:translate-x-48 lg:-translate-y-[380px] xl:w-[15px] xl:h-[650px] xl:translate-x-80 xl:-translate-y-[640px] bg-white  "></div>
          <div className="absolute md:w-[360px] md:h-[70px] md:translate-x-80 md:-translate-y-[450px] lg:w-[187px] lg:h-[70px] lg:translate-x-48 lg:-translate-y-[380px] xl:w-[320px] xl:h-[70px] xl:translate-x-80 xl:-translate-y-[640px] bg-white "></div>
          <div className="absolute md:w-[440px] md:h-[70px] md:-translate-x-[120px] md:-translate-y-16 lg:w-[320px] lg:h-[70px] lg:-translate-x-[120px] lg:-translate-y-16 xl:w-[320px] xl:h-[70px] xl:translate-x-0 xl:-translate-y-16 bg-white "></div>

          <div className="absolute flex flex-row md:h-[100px] md:w-[380px] md:-translate-x-8 md:-translate-y-40 lg:h-[100px] lg:w-[300px] lg:-translate-x-8 lg:-translate-y-40 xl:h-[150px] xl:w-[420px] xl:-translate-x-8 xl:-translate-y-52 bg-gradient-to-r from-[#0C6201] via-[#6FCC36] to-[#B7E163] ">
            <div className="1/4 pt-4 pl-4">
           <img className=" h-28 w-44 md:h-20 md:w-40 lg:h-28 lg:w-44 xl:h-28 xl:w-44" src="Exp.png" alt="" />
            </div>
            <div className="3/4">
              <h3 className=" text-white font-semibold  px-3 md:pt-3 md:pb-1 md:text-sm  lg:pt-3 lg:pb-1 lg:text-sm xl:text-lg xl:pt-5 xl:pb-3 ">Experiencia y Conocimiento</h3>
              <p className=" text-white leading-7 font-semibold px-3 md:text-xs lg:text-xs xl:text-sm ">Entendemos que cada caso requiere una estrategia puntual y completa para tener éxito.</p>

            </div>
          </div>

        </div>

        <div className=" basis-1/2  pl-20 lg:pl-14 xl:pl-20  first-letter:"> {/*Texto */}
          <div>
            <h2 className="font-medium text-lg xl:text-lg lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">CONOCENOS</h2>
            <h3 className="pr-40 lg:pr-32 xl:pr-40 lg:text-2xl  xl:text-3xl font-bold lg:py-3 xl:py-5  leading-10 text-[#232323] ">Consultoría especializada en el sector hidrocarburos</h3>
            <p className="text-[#66667F] leading-7 lg:text-xs xl:text-base ">En IKTAN Ambiental tenemos el compromiso de ofrecer a nuestros clientes la orientación
y los servicios necesarios para que logren el desarrollo exitoso de proyectos en el sector hidrocarburos.
</p>
          </div>

          <div className="flex flex-row lg:pt-6 xl:pt-10   ">
            <div className="basis-1/2">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 lg:text-lg xl:text-xl  font-bold text-[#232323] ">Misión</h3>
              </div>
              <p className="text-[#66667F] leading-7 lg:text-xs xl:text-base lg:pr-3  ">Contribuir a la excelencia en el desarrollo de proyectos exitosos del sector hidrocarburos, con el cumplimiento de los objetivos de nuestros clientes, cuidando en todo momento la seguridad de las personas y la protección al medio ambiente.</p>
            </div>

            <div className=" basis-1/2">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 lg:text-lg xl:text-xl font-bold text-[#232323]">Visión</h3>
              </div>
              <p className="text-[#66667F] leading-7 lg:text-xs xl:text-base lg:pr-3 l ">Ser una referencia mundial en el desarrollo de proyectos del sector hidrocarburos.</p>
            </div>
          </div>

          <div className="flex">
            <h2 class="stroke lsize">95%</h2>
            <h3 className=" pr-40 lg:pt-16 xl:pt-28 pl-4 font-bold text-[#232323] lg:text-xs xl:text-lg  ">Satisfacción del Cliente 2022</h3>
          </div>
          <p className="font-bold text-xs lg:text-[9px]  xl:text-xs">*Datos de la encuesta digital de satisfacción a diciembre de 2022*</p>

          </div>
        </div>
      </div>

    </>
  );
};

export default Somos;

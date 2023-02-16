import React from "react";
import "../css/Letra28.css";


const Somos = () => {
  return (
    <>
      
      <div className=" mx-auto max-w-7xl xl:max-w-7xl lg:max-w-4xl flex flex-row mt-32 lg:mt-24 xl:mt-32 "> {/*Padre */}
        <div className=" basis-1/2 ">  {/*Imagen */}
          <img className="relative " src="Inspector 1.jpg" alt="" />
          <div className="absolute lg:w-[12px] lg:h-[650px] lg:translate-x-48 lg:-translate-y-[380px] xl:w-[15px] xl:h-[650px] xl:translate-x-80 xl:-translate-y-[640px] bg-white  "></div>
          <div className="absolute lg:w-[187px] lg:h-[70px] lg:translate-x-48 lg:-translate-y-[380px] xl:w-[320px] xl:h-[70px] xl:translate-x-80 xl:-translate-y-[640px] bg-white "></div>
          <div className="absolute lg:w-[320px] lg:h-[70px] lg:-translate-x-[120px] lg:-translate-y-16 xl:w-[320px] xl:h-[70px] xl:translate-x-0 xl:-translate-y-16 bg-white "></div>

          <div className="absolute flex flex-row lg:h-[100px] lg:w-[300px] lg:-translate-x-8 lg:-translate-y-40 xl:h-[150px] xl:w-[420px] xl:-translate-x-8 xl:-translate-y-52 bg-gradient-to-r from-[#022391] via-[#0747B6] to-[#0D6ADB] ">
            <div className="1/4 pt-4 pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
            </div>
            <div className="3/4">
              <h3 className=" text-white font-semibold xl:pt-5 xl:pb-3 px-3 lg:pt-3 lg:pb-1 lg:text-sm xl:text-lg ">Experiencia y Conocimiento</h3>
              <p className=" text-[#DDDDDD] leading-7 font-semibold px-3 lg:text-xs xl:text-sm ">Entendemos que cada caso requiere una estrategia puntual y completa para tener éxito.</p>

            </div>
          </div>

        </div>

        <div className=" basis-1/2  pl-20 first-letter:"> {/*Texto */}
          <div>
            <h2 className="font-medium text-lg xl:text-lg lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">CONOCENOS</h2>
            <h3 className="pr-40 lg:text-2xl  xl:text-3xl font-bold lg:py-3 xl:py-5  leading-10 text-[#232323] ">Consultoría especializada en el sector hidrocarburos</h3>
            <p className="text-[#66667F] leading-7 lg:text-sm xl:text-base ">En IKTAN Ambiental tenemos el compromiso de ofrecer a nuestros clientes la orientación
y los servicios necesarios para que logren el desarrollo exitoso de proyectos en el sector hidrocarburos.
</p>
          </div>

          <div className="flex flex-row lg:pt-6 xl:pt-10   ">
            <div className="basis-1/2">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 lg:text-lg xl:text-xl  font-bold text-[#232323] ">Misión</h3>
              </div>
              <p className="text-[#66667F] leading-7 lg:text-sm xl:text-base lg:pr-3  ">Contribuir a la excelencia en el desarrollo de proyectos exitosos del sector hidrocarburos, con el cumplimiento de los objetivos de nuestros clientes, cuidando en todo momento la seguridad de las personas y la protección al medio ambiente.</p>
            </div>

            <div className=" basis-1/2">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 lg:text-lg xl:text-xl font-bold text-[#232323]">Visión</h3>
              </div>
              <p className="text-[#66667F] leading-7 lg:text-sm xl:text-base lg:pr-3 l ">Ser una referencia mundial en el desarrollo de proyectos del sector hidrocarburos.</p>
            </div>
          </div>

          <div className="flex">
            <h2 class="stroke lsize">95%</h2>
            <h3 className=" pr-40 lg:pt-16 xl:pt-28 pl-4 font-bold text-[#232323] lg:text-base xl:text-lg  ">Satisfacción del Cliente 2022</h3>
          </div>
          <p className="font-bold text-xs">*Datos de la encuesta digital de satisfacción a diciembre de 2022*</p>


        </div>
      </div>

    </>
  );
};

export default Somos;

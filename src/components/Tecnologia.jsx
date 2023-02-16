import React from "react";

const Tecnologia = () => {
  return (
    <>
    <div className="w-full">

    <img className="absolute h-[550px] lg:h-[500px] xl:h-[550px] flex right-0 translate-y-72 lg:translate-y-52 xl:translate-y-72" src=" Lineas.png " alt="" />

     <div className=" mx-auto max-w-7xl"> {/*Div general */}
      <div className="flex flex-row -translate-y-28 " > {/*Cuadros de texto */}
        <div className="flex flex-row basis-1/2 bg-gradient-to-r from-[#022391] via-[#0747B6] to-[#0D6ADB] mx-3">
            <div className="basis-1/3">
              <img className="lg:h-44 lg:mt-8 xl:h-52 xl:mt-12" src="Libroverde.png" alt="" />
            </div>
            <div className="basis-2/3">
              <h3 className="text-white font-semibold text-2xl pl-5 pt-14 pb-6 lg:text-xl lg:pl-5 lg:pt-8 lg:pb-6 xl:text-2xl xl:pl-5 xl:pt-14 xl:pb-6 ">Tercero Autorizado ASEA</h3>
              <p className="text-white px-5 leading-8 pb-12 text-lg lg:pb-6 lg:text-base xl:pb-12 xl:text-lg ">Somos Tercero Autorizados para emitir los Dictámenes Técnicos y realizar las Evaluaciones Técnicas, para las actividades de exploración y extracción de hidrocarburos en yacimientos convencionales y no convencionales. TA-D-A02/06-16/2021</p>
              
            </div>
        </div>
        <div className="basis-1/2 bg-gradient-to-r from-[#00112E] via-[#0055F1] to-[#0059FC] mx-3 py-4 overflow-hidden ">
            <div className="relative">
            <img className="h-72 w-80 lg:h-48 lg:w-72 xl:h-72 xl:w-80 -translate-y-10 translate-x-80 lg:translate-x-56 xl:translate-x-80" src="puntos.png" alt="" />
            </div>

            <div className="absolute -translate-y-72 lg:-translate-y-48 xl:-translate-y-72">
          <h2 className=" text-white font-semibold text-6xl pt-7 pl-8 lg:text-4xl lg:pt-4 lg:pl-8 xl:text-6xl xl:pt-7 xl:pl-8">ACE-STPS</h2>
          <h3 className=" text-white font-semibold pl-8 py-3 text-2xl lg:pl-8 lg:py-3 lg:text-xl xl:pl-8 xl:py-3 xl:text-2xl">Capacitación Especializada</h3>
          <p className=" text-white pr-24 pl-8 leading-7 text-lg lg:text-base xl:text-lg">Agente Capacitador Externos ante la Secretaría del Trabajo y Previsión Social, para el cumplimiento de las obligaciones de la Ley Federal del Trabajo.</p>
          </div>
        </div>
      </div>



      <div className="flex flex-row"> {/*Seccion restante */}
          <div className="basis-1/2 lg:pl-12 xl:pl-0 ">
          <h2 className="font-medium text-lg lg:text-base xl:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">Tu mejor elección</h2>
          <h3 className=" text-4xl lg:text-2xl xl:text-4xl font-semibold pr-60 lg:pr-52 xl:pr-60 py-6 lg:py-3 xl:py-6">Somos la decisión correcta para resultados excepcionales.</h3>
          <p className="pr-32 text-justify leading-8 lg:leading-6 xl:leading-8 text-base lg:text-base xl:text-base ">“Si crees que cumplir es caro, espera a
ver lo que cuesta una clausura...

Y si crees que una clausura es cara, espera
a ver lo que cuesta un accidente”.

Siempre será más rentable cumplir
a tiempo, la prevención es nuestro primer objetivo.
</p>
          <button type="button" class="inline-flex items-center rounded-md border border-transparent  px-12 py-4 my-2  mr-20 text-base font-medium bg-gradient-to-r from-[#022391] via-[#0747B6] to-[#0D6ADB] text-white shadow-sm ">FAQs</button>
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col absolute w-[250px] h-[320px] lg:w-[200px] lg:h-[280px] xl:w-[250px] xl:h-[320px] xl:translate-x-96 lg:translate-x-60  rounded-3xl bg-white border-2 border-[#E7E7E7] ">
              <div className="basis-1/2">
                  <img className="h-32 pl-14 pt-6" src="Cohete.png" alt="" />
              </div>
              <div className="basis-1/2 ">
                  <h2 className="text-center text-sm">CONFIANZA</h2>
                  <h3 className="text-center font-bold text-lg pt-2">Seguro de Responsabilidad </h3>
                  <h3 className="text-center font-bold text-lg "> Profesional</h3>
                  <h4 className="text-center font-medium pt-4 ">READ MORE</h4>
              </div>
            </div>

            <div className="absolute w-[250px] h-[300px] lg:w-[200px] lg:h-[280px] xl:w-[250px] xl:h-[300px] translate-x-0 lg:translate-x-0 xl:translate-x-24 translate-y-16 rounded-3xl bg-[#F9F9F9] border-2 border-[#E7E7E7] ">
            <div className="basis-1/2">
                  <img className="h-32 pl-14 pt-6" src="Cohete.png" alt="" />
              </div>
              <div className="basis-1/2 ">
                  <h2 className="text-center text-sm pt-6">DESEMPEÑO</h2>
                  <h3 className="text-center font-bold text-lg pt-2">Líderes en cumplimiento para actividades de Exploración y Extracción en ASEA</h3>
                  <h4 className="text-center font-medium pt-4 ">READ MORE</h4>
              </div>
            </div>
            <div>
            </div>
          </div>
      </div>



      <div className="bg-white border-t-2 border-[#E7E7E7] mt-32">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-16 grayscale hover:grayscale-0 duration-700 hover:scale-105" src="LOGO IKTAN STRATEGIES.jpg" alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-14 grayscale hover:grayscale-0 duration-700 hover:scale-105" src="LOGO IKTAN TECHNOLOGIES.jpg" alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-16 grayscale hover:grayscale-0 duration-700 hover:scale-105" src="LOGO IKTAN TRAINING (1).png" alt="StaticKit" />
          </div>
          
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-16 grayscale hover:grayscale-0 duration-700 hover:scale-105"
              src="undefined - Imgur.png"
              alt="Workcation"
            />
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

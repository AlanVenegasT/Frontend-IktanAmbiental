import React from "react";

const Cumplimiento = () => {
  return (
    <>
    <div className="bg-green-50">
      <h1 className="text-[#00963B] text-4xl font-semibold text-center py-12">
        ASEA{" "}
        <span className="text-[#0C3858] border-b-4 border-[#9DCCB8] py-3">
          {" "}
          Cumplimiento{" "}
        </span>
      </h1>
      <div className=" max-w-4xl  mx-auto">
        <img className="relative pb-28 " src="Válvulas.jpg" alt="" />
        <div className="absolute bg-black h-[500px] w-[600px] -translate-x-40 -translate-y-[550px] shadow-lg">
          <p className="text-[#B7B7B7] text-lg px-12 text-justify pb-5 pt-12">
            Los Regulados que realizan actividades de Exploración y Extracción
            de hidrocarburos deben elaborar un Programa de Detección y
            Reparación de Fugas e implementarlo cada tres meses a todos los
            equipos y sus componentes, identificados como fuentes o posibles
            fuentes de emisiones de metano.{" "}
          </p>

          <p className="text-[#B7B7B7] text-lg px-12 text-justify py-5">
            El control de emisiones es fundamental para que la industria cumpla
            con los requisitos reglamentarios ambientales. Las instalaciones
            deben comprender las reglamentaciones específicas que se aplican a
            sus operaciones y diseñar de manera proactiva planes de acción que
            incluyan el control del cumplimiento, la auditoría y la aplicación.
          </p>
        </div>
      </div>

      <div className="flex flex-row max-w-4xl mx-auto ">

        
      </div>

      <div className="flex flex-row">
        
        <div className="basis-1/2  pl-48">
          <h2 className="text-[#383838] text-2xl pb-3 font-semibold  text-end pt-10 pl-48 ">
            Programa para la Detección y Reparación de Fugas (Por sus siglas en
            inglés, LDAR Leak Detection and Repair){" "}
          </h2>
          <p className="text-justify py-2 text-sm pt-5 pl-48 ">
            Es un proceso reconocido internacionalmente enfocado en localizar y
            reparar las fugas mediante el uso de tecnologías
          </p>

          <p className="text-justify py-2 text-sm pt-0 pl-48 ">
            Contamos con técnicos altamente capacitados en tecnología y equipo
            medioambiental para brindar una respuesta inmediata en la detección
            y reparación de equipos y componentes con fugas.
          </p>
        
          
        </div>
        <div className="basis-1/2">
          <img className="relative" src="Hojas22.png" alt="" />
          <h2 className="text-[#383838]  text-end text-3xl font-semibold -translate-y-[500px] -translate-x-[320px] ">
            Etapas LDAR
          </h2> 
          <div className="flex flex-col absolute bg-white border-2 border-[#F4F4F4] h-[340px] w-[270px] translate-x-40 -translate-y-[490px] shadow-lg">           
            <img className="basis-1/3 h-12  " src="img2.jpg" alt="" />
            <div className="basis-1/3 py-5 px-5">
              <div className="flex py-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
                <p className="px-2">Planeación y mejora.</p>
              </div>
              <div className="flex py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
                <p className="px-2">Visitas a campo.</p>
              </div>
              <div className="flex py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
                <p className="px-2">Reparación y monitoreo.</p>
              </div>
              <div className="flex py-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
                <p className="px-2">Reporteo y análisis de datos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cumplimiento;

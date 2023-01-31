import React from "react";

const Tecnologia = () => {
  return (
    <>
     <div className=" flex flex-row bg-black"> {/*Div padre */}

      <div className=" basis-3/3 flex flex-row bg-[url('img6.jpg')] bg-cover   ">   {/*Div hijo1 y hijo2 */}

      <div className=" basis-1/3  bg-black/50 "> {/*Div hijo1 */} 
          <h2 className=" text-2xl pb-5 pt-12 text-center text-white ">ASEA Cumplimiento</h2>
          <p className="text-base text-justify py-5 px-6 text-white">Los Regulados que realizan actividades de Exploración y Extracción de hidrocarburos deben elaborar un Programa de
Detección y Reparación de Fugas e implementarlo cada tres meses a todos los equipos y sus componentes, identificados
como fuentes o posibles fuentes de emisiones de metano. </p>

          <p className="text-base text-justify pt-5 pb-12 px-6 text-white">El control de emisiones es fundamental para que la industria cumpla con los requisitos reglamentarios ambientales. Las
instalaciones deben comprender las reglamentaciones específicas que se aplican a sus operaciones y diseñar de manera
proactiva planes de acción que incluyan el control del cumplimiento, la auditoría y la aplicación.</p>
      </div>

      <div className=" basis-1/3 bg-black/50"> {/*Div hijo2 */}
           <h2 className=" text-lg pb-5 pt-12 text-center px-6 text-white">Programa para la Detección y Reparación de Fugas (Por sus siglas en inglés, LDAR Leak Detection and Repair) </h2>
      
            <p className="px-6 text-justify text-base py-5 text-white"> Es un proceso reconocido internacionalmente
            enfocado en localizar y reparar las fugas mediante el
            uso de tecnologías.</p>

            <p className="px-6 text-justify text-base py-5 text-white"> Contamos con técnicos altamente capacitados en
            tecnología y equipo medioambiental para brindar
            una respuesta inmediata en la detección y
            reparación de equipos y componentes con fugas.</p>
      </div>
      

      <div className=" basis-1/3  "> {/*Div hijo3 */}
      <div className="bg-black/50 h-full">
          <h2 className=" text-white text-lg pb-5 pt-12 text-center px-6 ">Etapas LDAR.</h2>
          <ul className="list-disc list-inside px-6 text-justify text-base py-5 text-white">
            <li>Planeación y mejora.</li>
            <li>Visitas a campo.</li>
            <li>Reparación y monitoreo.</li>
            <li>Reporteo y análisis de datos.</li>
          </ul>
      </div>
      </div>
      </div>


     </div>
    </>
  );
};

export default Tecnologia;

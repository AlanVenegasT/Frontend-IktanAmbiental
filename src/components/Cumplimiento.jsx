import React from "react";


const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Desarrollo y Gestión de MIA, IP, LAU y Cambio de Uso de Suelo ",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Impacto Ambiental",
      href: "#",
      imageUrl:
        'Libroverde.png',
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
    "Detección y cuantificación de emisiones de metano – OGI",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "PPCIEM",
      href: "#",
      imageUrl:
        'Libroverde.png',
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    description:
    "Auditorías Internas y Externas; Protocolos de Respuesta a Emergencias",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "SASISOPA",
      href: "#",
      imageUrl:
        'Libroverde.png',
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
    "Planes de Manejo de Residuos – RP y RMA; Programa de Prevención de Accidentes (PPA)",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Residuos",
      href: "#",
      imageUrl:
        'Libroverde.png',
    },
  },
];

const Cumplimiento = () => {
  return (
    <>
      <div className="relative bg-[#EDF1FA] px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-56 mt-20 " id="servicios">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-[#E7EDF8] sm:h-2/4" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2  className="font-medium text-base lg:text-base xl:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">
            NUESTROS SERVICIOS
            </h2>
            <h2 className="text-3xl lg:text-2xl xl:text-3xl font-semibold tracking-tight text-[#202020] px-80 sm:text-4xl pt-6">
            Ofrecemos soluciones para el cumplimiento regulatorio con ASEA
            </h2>
          </div>
          <div className="mx-auto mt-12  grid max-w-lg gap-5 lg:mt-8 lg:max-w-none lg:grid-cols-4 xl:mt-12 ">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden   "
              >
                <div className="flex flex-1 flex-col justify-between rounded-xl relative overflow-hidden h-full bg-[400%] text-white mx-4 px-4  py-7   hover:before:scale-x-100 hover:text-[blue] before:content-[''] before:absolute before:origin-[0_50%] before:w-full before:h-[inherit] before:transition-all before:duration-[0.475s] before:rounded-[inherit] before:scale-x-0 before:left-0 before:top-0 bg-transparent before:bg-white ">
                  <div className="flex-1 relative z-[1]">

                  <img className="h-20 w-20 rounded-full ml-4" src={post.author.imageUrl} alt="" />

                    <a href={post.href} className="mt-2  block">
                      
                      <p className="mt-3  text-justify lg:text-sm xl:text-base text-gray-500 leading-7 lg:px-3  xl:px-5  ">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6  border-t-2 border-[#DDDDDD] pt-4 relative z-[1] ml-4 lg:mr-2 xl:mr-8 ">
                    <div className="ml-3">
                      <p className="text-xl font-medium text-gray-900 ">
                        <a
                          href={post.author.href}
                          className="hover:text-[#0D6ADB] duration-500 "
                        >
                          <div className="flex justify-between items-center text-base lg:text-sm xl:text-lg ">
                          {post.author.name}
                          <svg xmlns="http://www.w3.org/2000/svg" className="  " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F4FBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                          </div>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cumplimiento;

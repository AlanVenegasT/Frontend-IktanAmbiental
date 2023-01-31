import React from "react";
import {
  CheckIcon,
  UserIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { fa1, fa2, fa3, fa4, fa5, fa6 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const timeline = [
  {
    id: 1,
    content: "REPORTE ANUAL",
    target:
      " Elaboración y dictaminación por un Tercero Autorizado.",
    href: "#",
    date: "Paso 01",
    datetime: "Paso 01",
    icon: fa1,
    iconBackground: "bg-[#ED9B00] ",
  },
  {
    id: 2,
    content: " INFORME TRIMESTRAL",
    target:
      "Como resultado de la visita se integra el Anexo IV Informe Trimestral.",
    href: "#",
    date: "Paso 02",
    datetime: "Paso 02",
    icon: fa2,
    iconBackground: "bg-[#B02676] ",
  },
  {
    id: 3,
    content: "VERIFICACIÓN DE LA REPARACIÓN",
    target:
      "Se comprueba cada reparación, mediante una inspección técnica coordinada con mantenimiento.",
    href: "#",
    date: "Paso 03",
    datetime: "Paso 03",
    icon: fa3,
    iconBackground: "bg-[#7BA815] ",
  },
  {
    id: 4,
    content: "REPARACIÓN",
    target:
      "La reparación se coordina con el área de mantenimiento de acuerdo con la normativida de ASEA .",
    href: "#",
    date: "Paso 04",
    datetime: "Paso 04",
    icon: fa4,
    iconBackground: "bg-[#008CAF] ",
  },
  {
    id: 5,
    content: "CUANTIFICACIÓN",
    target: "Una vez que se detecta una fuga, se debe cuantificar. (concentración y volumen).",
    href: "#",
    date: "Paso 05",
    datetime: "Paso 05",
    icon: fa5,
    iconBackground: "bg-[#091359] ",
  },
  {
    id: 6,
    content: "DETECCIÓN",
    target: " Acorde al artículo 73, la detección de emisiones debe realizarse con equipos OGI u homólogos.",
    href: "#",
    date: "Paso 06",
    datetime: "Paso 06",
    icon: fa6,
    iconBackground: "bg-[#5E347C] ",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Avion = () => {
  return (
    <>
      <div className="flex justify-center bg-slate-50 pt-20 ">
        <div className="w-1/10 p-9 translate-x-[308px] -translate-y-32 ">
          <img
            src=" https://i.imgur.com/TEuzugD.png"
            alt="image"
            
            width="350"
            height="50"
          />
        </div>
        <div class="w-1/2 p-4">
          <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-3xl mx-auto">
              {/* Content goes here */}
              <div className="flow-root">
                <ul role="list" className="-mb-8">
                  {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8 ">
                        {eventIdx !== timeline.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span
                              className={classNames(
                                event.iconBackground,
                                "h-9 w-9 rounded-full   flex items-center justify-center ring-4 "
                              )}
                            >
                              <FontAwesomeIcon
                                icon={event.icon}
                                className="h-4 w-4 text-white   "
                                aria-hidden="true"
                              />
                            </span>
                          </div>



                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {event.content}{" "}
                                <a
                                  href={event.href}
                                  className="font-medium text-gray-900"
                                >
                                  {event.target}
                                </a>
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <time dateTime={event.datetime}>
                                {event.date}
                              </time>
                            </div>




                          </div>


                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avion;

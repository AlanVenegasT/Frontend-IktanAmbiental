import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const faqs = [
  {
    question: "1. ¿Por dónde comienzo a regularizarme?",
    answer:
      "Siempre recomendaré cumplir al 100%, pero si tiene que elegir, elija los trámites habilitantes: permisos, trámites ambientales y SASISOPA.",
  },
  {
    question: "2. ¿Existe una “Lista Negra” en ASEA?",
    answer:
      "Existe un seguimiento de acuerdo al nivel de riesgo de los Regulados, no lo describiría como una “lista negra”, más bien como el resultado lógico del seguimiento de la autoridad.",
  },
  {
    question: "3. ¿Cómo sé si estoy en la “Lista Negra”?",
    answer:
      "Reiterando que no existe una “Lista Negra”, si recibe un apercibimiento, una orden de inspección o alguna otra acción por parte del Regulador, es porque alguien se quiere asegurar que está cumpliendo las reglas.",
  },
  {
    question: "4. ¿Qué debo hacer ante una inspección?",
    answer:
      "Primero le diré que NO hacer, nunca le impida el paso a la autoridad. Después, atienda el proceso con la mayor atención. Los malos entendidos son la primera causa de incumplimiento. ",
  },
  {
    question: "5. ¿Se pueden acelerar los trámites?",
    answer:
      "En general, desconfíe si le ofrecen acelerar su trámite. Siempre elija una estrategia fundada y motivada, elija experiencia y profesionalismo. Lo barato sale caro.",
  },
  {
    question: "6. ¿Se puede hacer el trabajo en menos tiempo?",
    answer:
      "Sí, siempre se puede. Nos basamos en tres factores Calidad, Tiempo y Costo. Podemos mover los dos ultimos, pero no el primero",
  },
  {
    question: "7. ¿Qué hago si la autoridad no me responde?",
    answer:
      "Incista y agote todos los recursos, recuerde que la autoridad son personas y con las personas se puede hablar y se puede razonar",
  },
  {
    question: "8. ¿Son expertos en todo?",
    answer:
      "No, no existen los expertos en todo, somos expertos en cumplimiento regulatorio y trabajamos con expertos en muchas ramas.",
  },
  {
    question: "9. ¿Qué pasa si la autoridad me hace una prevención sobre alguno de sus servicios?",
    answer:
      "Las prevenciones son una práctica común, todos nuestros servicios incluyen el soporte y atención de éstas.",
  },
  {
    question: "10. ¿Pueden hacer las gestiones físicas ante los reguladores?",
    answer:
      "Sí, tenemos personal dedicado a esto en la CDMX.",
  },
  {
    question: "11. ¿Tienen experiencia en los trámites?",
    answer:
      "Tenemos experiencia en todos los aspectos y desde todos los puntos de vista de los trámites. Nuestro personal conoce de primera mano los procesos internos y los criterios de los reguladores.",
  },
  {
    question: "12. ¿Sus cursos tienen reconocimiento oficial?",
    answer:
      "Todos nuestros cursos están registrados en la STPS. Emitimos Constancia de Competencias Laborales DC-3 y contamos con un registro abierto en nuestro sitio: www.iktantraining.com",
  },
  
]

const Faqs = () => {
  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 12000,
      origin: 'bottom',
      distance: '400px'

    });
  }, []);
  return (
    <>
    <div ref={revealRef}>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-0 pb-20 md:pb-20 md:pt-0  lg:pt-0 lg:pb-20 lg:px-8 xl:pb-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-black text-center" id='faqs'>Preguntas frecuentes</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6 ">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-xl font-semibold leading-7 ">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Faqs
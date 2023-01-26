import React from "react";
const features = [
  {
    name: 'Durable',
    description: ' IKTAN es una de las empresas pioneras enel cumplimiento de la regulación de ASEA.Entendemos que cada caso requiere unaestrategia puntual y completa para tener éxito.',
  },
  {
    name: 'Refillable',
    description: 'Nuestro técnicos realizan la identificación y cuantificación de emisiones de metano, utilizando la mejor tecnología disponible, mientras que nuestros expertos en gestión regulatoria se aseguran que todos los requerimientos de ASEA se cumplan en el momento y se prevean para el futuro.',
  },
  
]

const Somos = () => {
  return (
    <>
      <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
            Quienes somos? <span>IKTAN Ambiental</span>
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">All in the Details</p>
            <p className="mt-4 text-gray-500">
            En IKTAN Ambiental, tenemos el compromiso de ofrecer a nuestros clientes la orientación
y los servicios necesarios para que logren el cumplimiento en tiempo y forma del Control
Integral de Emisiones de Metano.
            </p>

            <p className="mt-4 text-gray-500">
            Nos especializamos en la regulación de la ASEA para satisfacer las necesidades de nuestros
clientes, con los mayores estándares de calidad y competencia.
            </p>

            <p className="mt-4 text-gray-500">
            Nuestra experiencia con los reguladores del sector y en campo nos permiten ofrecer soluciones
integrales y confiables al mejor costo-beneficio para cumplir con las obligaciones a lo largo del ciclo
de vida de un proyecto del sector hidrocarburos.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Somos;

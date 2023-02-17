import { Link } from "react-router-dom";
import ArticuloBlog from "./ArticuloBlog";
import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const cards = [
  {
    url: "Como-elegir-el-tipo-de-balatas-adecuadas-para-tu-auto",
    image: "blog/blog3.jpg",
    titulo: "Programa para la Prevención y Control Integral de Emisiones de Metano",
    fecha: "Febrero, 2023",
    descripcion:
      "En primer instancia es necesario tener en consideración las diferencias entre los tipos de balata, al tener el conocimiento el usuarios podrá elegir...",
  },
  {
    url: "Como-funcionan-los-frenos-de-disco-y-de-tambor",
    image: "blog/blog2.jpg",
    titulo: "10 aspectos a considerar para el uso de tecnología OGI",
    fecha: "Enero, 2023",
    descripcion:
      "Los frenos de tambor funcionan según el mismo principio que los frenos de disco: dos elementos que actúan como componentes de fricción y un pistón...",
  },
  {
    url: "Tipos-de-balatas-y-sus-ventajas-y-desventajas",
    image: "blog/blog1.jpg",
    titulo: "Programas de Manejo de Residuos",
    fecha: "Diciembre, 2022",
    descripcion:
      "Al principio no se pude distinguir balatas de buena o mala calidad, por eso es importante adquirir una marca que cuente con pruebas de seguridad...",
  },
];

const Blog = () => {
  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 15000,
      origin: 'right',
      distance: '-500px'

    });
  }, []);
  return (
    <div ref={revealRef}>
    <section className="container mx-auto px-5 py-32 lg:py-20 xl:py-28 sm:px-6 lg:px-8" id="blog">
      <h2 className="font-medium text-lg text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">BLOG</h2>
      {/* Titulo */}
      <h1 className="text-[#232323] text-3xl font-bold text-center pb-12">
      Últimas noticias y artículos
      </h1>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8  ">
        {cards.map((card, i) => (
          <div
            className="flex flex-col overflow-hidden rounded-lg shadow-lg duration-700 hover:scale-105"
            key={i}
          >
            {/* Este div es de la imagen */}
            <div className="flex-shrink-0 ">
              <img
                className="h-48 w-full object-cover "
                src={card.image}
                alt={`imgBlogGrid${i}`}
              />
            </div>
            {/* este div es del titulo y la descripcion el complemento de la card */}
            <div className="flex flex-1 flex-col justify-between bg-white p-6 ">
              {/* titulo y descripcion de la card */}
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <span className="inline-block bg-gradient-to-r from-[#6FCC36] via-[#6FCC36] to-[#6FCC36] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    {card.fecha}
                  </span>
                </p>
                <div className="mt-2 flex flex-col">
                  <Link
                    // href="#"
                    to={`/blog/${card.url}`}
                    className="text-xl font-semibold hover:text-[#00963B] h-1/3 flex-grow"
                    onClick={<ArticuloBlog />}
                  >
                    {card.titulo}
                  </Link>
                  <p className="mt-3 text-base h-2/3 flex-grow">
                    {card.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Blog;

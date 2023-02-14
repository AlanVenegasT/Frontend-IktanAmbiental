import { Link } from "react-router-dom";
import ArticuloBlog from "./ArticuloBlog";

const cards = [
  {
    url: "Como-elegir-el-tipo-de-balatas-adecuadas-para-tu-auto",
    image: "blog/blog3.jpg",
    titulo: "Cómo elegir el tipo de balatas adecuadas para tu auto.",
    fecha: "Febrero, 2023",
    descripcion:
      "En primer instancia es necesario tener en consideración las diferencias entre los tipos de balata, al tener el conocimiento el usuarios podrá elegir...",
  },
  {
    url: "Como-funcionan-los-frenos-de-disco-y-de-tambor",
    image: "blog/blog2.jpg",
    titulo: "Cómo funcionan los frenos de disco y de ",
    fecha: "Enero, 2023",
    descripcion:
      "Los frenos de tambor funcionan según el mismo principio que los frenos de disco: dos elementos que actúan como componentes de fricción y un pistón...",
  },
  {
    url: "Tipos-de-balatas-y-sus-ventajas-y-desventajas",
    image: "blog/blog1.jpg",
    titulo: "Tipos de balatas y sus ventajas y desventajas.",
    fecha: "Diciembre, 2022",
    descripcion:
      "Al principio no se pude distinguir balatas de buena o mala calidad, por eso es importante adquirir una marca que cuente con pruebas de seguridad...",
  },
];

const Blog = () => {
  return (
    <section className="container mx-auto px-5 py-32 sm:px-6 lg:px-8" id="blog">
      <h2 className="font-medium text-lg text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">WHO WE ARE</h2>
      {/* Titulo */}
      <h1 className="text-[#232323] text-3xl font-bold text-center pb-12">
      Latest News & Articles
      </h1>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8  ">
        {cards.map((card, i) => (
          <div
            className="flex flex-col overflow-hidden rounded-lg shadow-2xl duration-700 hover:scale-105"
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
                  <span className="inline-block bg-[#00963B] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
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
  );
};

export default Blog;

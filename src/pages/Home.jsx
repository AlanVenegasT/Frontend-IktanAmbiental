import React from "react";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Contacto from "../components/Contacto";
import Cumplimiento from "../components/Cumplimiento";
import Faqs from "../components/Faqs";
import FondoTexto from "../components/FondoTexto";
import Imagen2en1 from "../components/Imagen2en1";
import NuestroTrabajo from "../components/NuestroTrabajo";
import Somos from "../components/Somos";
import Tecnologia from "../components/Tecnologia";


const Home = () => {
  return (
    <>
      <Hero />
       
       <Somos />

      <Cumplimiento />
      <Tecnologia />

      <Imagen2en1 />
      <NuestroTrabajo />
      <FondoTexto/>
      <Blog />
      <Faqs/>  
      <Contacto /> 
    </>
  );
};

export default Home;
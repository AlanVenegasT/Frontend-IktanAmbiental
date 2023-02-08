import React from "react";
import Avion from "../components/Avion";
import Blog from "../components/Blog";
import Contacto from "../components/Contacto";
import Cumplimiento from "../components/Cumplimiento";
import Hero from "../components/Hero";
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

      <Avion />
      <NuestroTrabajo />
      <Blog />
      <Contacto />
    </>
  );
};

export default Home;

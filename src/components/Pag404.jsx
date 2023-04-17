import React from "react";
import { Link } from "react-router-dom";

const Pag404 = () => {
  return (
    <div className="relative">
      <div>
        <img className="w-full h-full object-cover object-center brightness-50" src="Inspector 2.jpg" alt="" />
      </div>

      <div className="absolute flex flex-col top-1/3  md:top-1/2  md:right-32 lg:right-1/4 xl:right-1/3">
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-5xl">Página no encontrada</h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">Lo sentimos, no pudimos encontrar la página que estás buscando."</p>
        <div className="mt-10 flex justify-center">
    <a href="/" className="text-sm font-semibold leading-7 text-white">
      <span aria-hidden="true">&larr;</span> Volver al inicio
    </a>
  </div>

      </div>
      
    </div>

  );
};

export default Pag404;

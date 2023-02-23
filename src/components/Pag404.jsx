import React from "react";
import { Link } from "react-router-dom";

const Pag404 = () => {
  return (
    // <main className="h-screen w-full flex flex-col justify-center items-center">
    //   <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
    //   <div className="bg-[#009245] px-2 text-sm rounded rotate-12 absolute text-white">
    //     Página No Encontrada
    //   </div>
    //   <button className="mt-5">
    //     <a className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring">
    //       <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#009245] group-hover:translate-y-0 group-hover:translate-x-0"></span>

    //       <span className="relative block px-8 py-3 bg-[#009245] border border-current">
    //         <Link to="/">Ir al inicio</Link>
    //       </span>
    //     </a>
    //   </button>
    // </main>

<main className="relative h-full">
<img
  src="Inspector 2.jpg"
  alt=""
  className="absolute brightness-50 inset-0 -z-10 h-full w-full object-cover object-center"
/>
<div className="mx-auto max-w-7xl text-center  px-6 py-32 md:py-36 lg:py-48 lg:px-8 xl:py-60 ">
  <p className="text-base font-semibold leading-8 text-white">404</p>
  <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Página no encontrada</h1>
  <p className="mt-4 text-base text-white/70 sm:mt-6">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
  <div className="mt-10 flex justify-center">
    <a href="/" className="text-sm font-semibold leading-7 text-white">
      <span aria-hidden="true">&larr;</span> Volver al inicio
    </a>
  </div>
</div>
</main>

  );
};

export default Pag404;

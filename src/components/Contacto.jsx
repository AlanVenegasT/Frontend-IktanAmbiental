import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
// import ScrollReveal from "scrollreveal";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [terminos, setTerminos] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");

    if ([nombre, email, message].includes()) {
      console.log("alerta todos los campos son obligatorios");
    } else {
      sendEmail(e);
    }
  };



  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7lwe15",
        "template_lvk8xbm",
        form.current,
        "vXuFb78JyhLiy4xxw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setNombre("");
    setEmail("");
    setMessage("");
    setTerminos(false);
    form.current.reset();
  };

  const revealRef = useRef(null);

  // useEffect(() => {
  //   ScrollReveal().reveal(revealRef.current, {
  //     duration: 10000,
  //     origin: "top",
  //     distance: "-100px",
  //   });
  // }, []);

  return (
    <>
     {/*  <div ref={revealRef}> */}

        <section
          className="text-gray-600  bg-gradient-to-r from-[#00112F] via-[#0052EA] to-[#0059FC] overflow-hidden pb-96 pt-[550px] md:pb-44 md:pt-20 lg:pb-20 lg:pt-0 xl:pb-0 xl:pt-0 "
          id="contacto"
        >
          {/* Titulo */}
          <img
            className="relative w-full hidden md:block lg:block xl:block "
            src="curva.png"
            alt=""
          />

          <div className="absolute max-w-6xl px-5 pb-0 mx-auto flex sm:flex-nowrap flex-wrap overflowhiden -translate-y-[550px] translate-x-0 md:-translate-y-[340px] md:-translate-x-6  lg:-translate-y-[340px] lg:-translate-x-20 xl:-translate-y-[530px]   lg:left-28 xl:left-40  ">
            <div className="lg:w-2/3 md:w-1/2 bg-transparent rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <div className="bg-transparent relative flex flex-col pb-0 md:pb-28 lg:pb-28 xl:pb-28 ">
                <div className="lg:w-3/3 xl:w-2/3  px-0 ">
                  <h2 className="font-medium xl:text-lg text-lg text-white lg:text-base ">
                    ESCRIBENOS
                  </h2>
                  <p className="mt-1  text-2xl font-bold text-white lg:text-xl xl:text-2xl ">
                    Siempre hay alguien para ayudarte a responder todas tus
                    dudas.
                  </p>
                </div>
                <div className="lg:w-2/2 xl::w-1/2 px-0  mt-4 xl:mt-4 lg:mt-0">
                  <div className="flex">
                    <div className=" ">
                      <img
                        className="h-16 w-auto"
                        src="Email.png"
                        alt="Email"
                      />
                    </div>
                    <div>
                      <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4  ">
                        EMAIL
                      </h2>
                      <a className="text-white ">contacto@iktanst.com</a>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <img
                        className="h-16 w-auto mt-2"
                        src="Telefono1.png"
                        alt=""
                      />
                    </div>

                    <div>
                      <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        TELÉFONO
                      </h2>
                      <p className="text-white">55-8952-7032</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={(e) => handleSubmit(e)}>
              <div className="xl:mt-12 xl:w-full xl:px-0 xl:mr-12  lg:w-full lg:px-0 lg:mr-12 lg:mt-2 md:w-2/2  bg-transparent flex flex-col  w-full mt-8 ml-0 md:py-8 md:mt-0 md:ml-0 lg:ml-0 xl:ml-0  ">
                <div className="flex flex-row">
                  <div className="basis-1/2 relative mb-4 pr-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-white "
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Cristian Muños"
                      className="w-full bg-transparent rounded border border-[#80A9F4] text-xs lg:text-xs xl:text-xs outline-none text-white py-2 px-3 lg:py-3 lg:px-3  leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="basis-1/2 relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Cristianmuños@gmail.com"
                      className="w-full bg-transparent rounded border border-[#80A9F4] text-xs lg:text-xs xl:text-xs outline-none text-white py-2 px-3 lg:py-3 lg:px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="relative mb-4 lg:mb-2 xl:mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full caret-pink-500 bg-transparent rounded border border-[#80A9F4] h-32 lg:h-20 xl:h-32 text-base lg:text-sm xl:text-base outline-none text-white py-1 px-3 lg:py-0 lg:px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>

                <div className="mt-0 mb-5 lg:mb-2 xl:mb-5 flex items-center">
                  <input
                    id="terminos"
                    name="terminos"
                    type="checkbox"
                    onChange={(e) => setTerminos(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="ml-2">
                    <label
                      htmlFor="terminos"
                      className=" text-sm font-normal text-white md:text-xs lg:text-xs"
                    >
                      Al seleccionar esto, usted acepta las{" "}
                      <Link to="/Politicas">
                        {" "}
                        <span className="font-bold md:text-xs lg:text-xs underline ">
                          {" "}
                          Politicas de Privacidad
                        </span>{" "}
                      </Link>{" "}
                      y{" "}
                      <Link to="/Politicas">
                        {" "}
                        <span className="font-bold underline  md:text-xs lg:text-xs">
                          {" "}
                          Cookie Policy.
                        </span>
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className=" flex justify-center text-white bg-[#022391] border-0 py-2 px-6 lg:py-1 xl:py-2  focus:outline-none hover:bg-green-600 rounded text-lg lg:text-base xl:text-lg "
                >
                  Enviar{" "}
                  <svg
                    className="pt-1 ml-1 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                <div className="relative flex flex-row py-3">
                  <div className=" basis-1/2 ">
                    <a href="https://api.whatsapp.com/send?phone=5540478317&amp;text=%20Hola!%20Queria%20ponerme%20en%20contacto%20con%20un%20experto%20de%20IKTAN%20Ambiental!">
                      <img
                        className=" h-16 w-auto ml-20 md:ml-6 lg:ml-16 xl:ml-42 cursor-pointer"
                        src="WA.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className=" basis-1/2 cursor-pointer">
                    <p className="text-white md:text-xs lg:text-xs mt-2 ">
                      Asistente de WhatsApp
                    </p>
                    <a href="https://api.whatsapp.com/send?phone=5540478317&amp;text=%20Hola!%20Queria%20ponerme%20en%20contacto%20con%20un%20experto%20de%20IKTAN%20Ambiental!">
                      <p className=" text-white font-bold md:text-xs lg:text-xs xl:text-base ">
                        +5540478317
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
  {/* </div> */}
    </>
  );
};

export default Contacto;

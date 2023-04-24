import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <>
      <nav className="bg-white fixed z-50 shadow-lg navbar w-full ">
        <div className="hidden lg:block xl:block  w-full px-2 sm:px-6 lg:px-0 ">
          <div className="relative flex h-26 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-row w-full  items-center justify-center sm:items-stretch sm:justify-start">
              {" "}
              {/*Div padre */}
              <div class="basis-1/6 ">
                {" "}
                {/*Div hijo1 */}

                <img
                  class="block h-full w-auto lg:hidden py-6 px-4 lg:py-8 lg:px-4 xl:py-8 xl:px-4"
                  src="LOGO IKTAN AMBIENTAL.png"
                  alt="Your Company"
                />
            

           
                <img
                  class="hidden h-full w-auto  lg:block py-6 px-4 lg:py-8 lg:px-4 xl:py-8 xl:px-4"
                  src="LOGO IKTAN AMBIENTAL.png"
                  alt="Your Company"
                />
              
              </div>

              <div class="flex flex-col  sm:block basis-5/6">
                {/*Div hijo2 */}

                <div className="flex  justify-between w-full bg-[#091D3E] pb-2 pt-2">
                  <div className="text-white flex">
                    <h2 className=" pl-16 pr-10   ">
                    ¿Necesita ayuda?{" "}
                      <span className="font-semibold"> ¡Déjanos llamarte! </span>
                    </h2>

                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    

                    <h2 className=" pl-2">Horario de atención las 24 Horas.</h2>
                  </div>

                  <div className="flex  ">
                   {/*  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 ml-5"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg> */}
                     {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 ml-5"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg> */}
                    <a href="#contacto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 ml-5"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    </a>

                    <a href="#contacto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 ml-5 mr-20"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    </a>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div class="flex space-x-4 lg:py-6 xl:py-6">
                    <Link
                      to="/"
                      class="ml-20 text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 "
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <a
                      href="#PPCIEM"
                      class="text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1"
                    >
                      PPCIEM
                    </a>
                    <a
                      href="#servicios"
                      class="text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 "
                    >
                      Servicios
                    </a>
                    <a
                      href="#contacto"
                      class="text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 "
                    >
                      Contacto
                    </a>
                  </div>

                  <div className="pt-5 flex">
                    {/* 
                    <span class="hidden sm:block">
                      <a
                        href="/search"
                        class="block border-l-2 border-slate-200 mt-2 mr-8 py-4 lg:py-2 xl:py-4 pl-6  "
                      >
                        <svg
                          class="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <span class="sr-only"> Search </span>
                      </a>
                    </span> 
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md   px-6 py-0 my-2 mr-20 text-base font-medium bg-gradient-to-b from-[#0C6201] via-[#6FCC36] to-[#B7E163] text-white shadow-sm "
                    >
                      Button text
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>




      <Disclosure
        as="nav"
        className="bg-white shadow block lg:hidden xl:hidden "
      >
        {({ open }) => (
          <>

          <div className="flex flex-col">
            
          <div className="flex  justify-between w-full bg-[#091D3E] pb-2 pt-2">
                  <div className="text-white flex">
                    <h2 className=" pl-16 pr-10 hidden md:block  ">
                      Need Help?{" "}
                      <span className="font-semibold">  ¡Déjanos llamarte! </span>
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1   ml-10 md:ml-0 lg:ml-0 xl:ml-0  "
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <h2 className=" pl-2">Horario de atención las 24 Horas.</h2>
                  </div>

                </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                  
                    <img
                      className="block h-2/3 w-auto lg:hidden"
                      src="LOGO IKTAN AMBIENTAL.png"
                      alt="Your Company"
                    />
                  
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link
                      to="/"
                      className="inline-flex items-center  ml-12 text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4"
                    >
                      Home
                    </Link>
                    <Link
                      to="#PPCIEM"
                      className="inline-flex items-center text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4 "
                    >
                      PPCIEM
                    </Link>
                    <Link
                      href="#servicios"
                      className="inline-flex items-center  text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4"
                    >
                      Servicios
                    </Link>
                    <Link
                      href="#contacto"
                      className="inline-flex items-center text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4"
                    >
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 pt-2  pb-3">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block border-l-4 border-green-500 bg-slate-100 py-2 pl-3 pr-4 text-base font-medium text-green-700 sm:pl-5 sm:pr-6"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#PPCIEM"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  PPCIEM
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#servicios"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Servicios
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#contacto"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Contacto
                </Disclosure.Button>
              </div>
              
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;

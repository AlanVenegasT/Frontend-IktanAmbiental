import {Link} from 'react-router-dom';

const Header = () => {

  return (
    <>
     
      <nav class="bg-white fixed z-50 shadow-lg navbar">

        <div class="w-full px-2 sm:px-6 lg:px-0 ">
          <div class="relative flex h-26 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="flex flex-row w-full  items-center justify-center sm:items-stretch sm:justify-start"> {/*Div padre */}

              <div class="basis-1/6 "> {/*Div hijo1 */}
                <img class="block h-full w-auto lg:hidden py-6 px-4 lg:py-8 lg:px-4 xl:py-8 xl:px-4" src="LOGO IKTAN AMBIENTAL.png" alt="Your Company" />
                <img class="hidden h-full w-auto  lg:block py-6 px-4 lg:py-8 lg:px-4 xl:py-8 xl:px-4" src="LOGO IKTAN AMBIENTAL.png" alt="Your Company" />
              </div>

              <div class="flex flex-col  sm:block basis-5/6">{/*Div hijo2 */}

                <div className="flex  justify-between w-full bg-[#091D3E] pb-2 pt-2">
                  <div className="text-white flex">
                    <h2 className=" pl-16 pr-10   ">Need Help? <span className="font-semibold"> Request A Callback</span></h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <h2 className=" pl-2">Working Hours: 8:00 AM – 7:45 PM</h2>
                  </div>

                  <div className="flex  ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-5 mr-20" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>

                </div>

                <div className="flex justify-between">
                  <div class="flex space-x-4 lg:py-6 xl:py-6">
                    <Link to="/" class="ml-20 text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 " aria-current="page">Home</Link>
                    <a href="#PPCIEM" class="text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1">PPCIEM</a>
                    <a href="#servicios" class="text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 ">Servicios</a>
                    <a href="#contacto" class="text-[#232323] font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 ">Contacto</a>
                  </div>

                  <div className="pt-5 flex">
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <span class="sr-only"> Search </span>
                      </a>
                    </span>
                    <button type="button" class="inline-flex items-center rounded-md   px-6 py-0 my-2 mr-20 text-base font-medium bg-gradient-to-b from-[#0C6201] via-[#6FCC36] to-[#B7E163] text-white shadow-sm ">Button text</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>






        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Header;
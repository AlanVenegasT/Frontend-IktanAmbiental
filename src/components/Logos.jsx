import React from 'react'

const Logos = () => {
  return (
    <>
    <div className="bg-[#F0FDF4]">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale hover:grayscale-0 duration-700 ">
            <img className="h-12" src="LOGO IKTAN STRATEGIES.jpg" alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale hover:grayscale-0 duration-700 ">
            <img className="h-12" src="LOGO IKTAN TECHNOLOGIES.jpg" alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale hover:grayscale-0 duration-700 ">
            <img className="h-12" src="LOGO IKTAN TRAINING (1).png" alt="StaticKit" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Logos
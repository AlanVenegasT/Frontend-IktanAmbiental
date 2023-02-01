import React from 'react'
import {Link} from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/20/solid'

const Contacto = () => {
  return (
    <>
    <div className="bg-white lg:pt-32 lg:pb-20 md:pt-28 md:pb-16 pt-20 pb-8 overflow-hidden">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 md:max-w-3xl md:grid md:grid-cols-12 md:gap-x-8 md:py-12 md:px-8 lg:max-w-6xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:py-16 lg:px-8  bg-gradient-to-r from-[#FBF5F9] via-[#F0D6E0] to-[#C0A0CF] rounded-md">
        <div className="md:col-span-6 lg:col-span-5  col-span-6">
          <h2 className="text-6xl md:text-5xl font-bold tracking-tight text-[#1F2023] text-center">
            Ponte en contacto con nosotros
          </h2>
          <h4 className="text-xl md:text-base text-[#5A585B] py-8 pl-5 md:py-8 md:pl-5 lg:py-8 lg:pl-5">
          Nuestro compromiso es asesorar oportunamente a nuestros clientes para que tomen la mejor desición en seguros. Siempre la cobertura más completa al menor costo.
          </h4>

          <Link to="#">
          <button
        type="button" 
        className="inline-flex items-center rounded-md border border-transparent duration-700 hover:scale-110 bg-[#2B2C32] px-6 ml-10 py-3 md:px-5 md:ml-5 md:py-3 md:text-sm text-base font-medium text-[#EAFF6A] shadow-sm hover:bg-[#EAFF6A] focus:outline-none focus:ring-2 hover:text-[#2B2C32] focus:ring-[#2B2C32] focus:ring-offset-2"
      >
        <EnvelopeIcon className="-ml-1  h-5 w-10" aria-hidden="true" />
        Contactanos
      </button>
      </Link>

          </div>
        <div className="mt-16 md:col-span-7 md:col-start-6 md:mt-0 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>
          <div className="flow-root">
            <div className="absolute lg:-my-16 lg:pl-32 md:-my-72 md:pl-32 -my-32 pl-64  divide-y text-white divide-gray-200">
            <img className='object-cover lg:w-1/3 md:w-2/3 w-1/3  ' src="Celular.png" alt="" />
            </div>
          </div>
        </div> 
      </div>
    </div>
    </>
  )
}

export default Contacto
import React from 'react'
import Contacto from '../components/Contacto'
import Hero from '../components/Hero'
import Imagen2en1 from '../components/Imagen2en1'
import Somos from '../components/Somos'
import Tecnologia from '../components/Tecnologia'

const Home = () => {
  return (
    <>
      <Hero/>
      <Somos/>
      <Tecnologia/>  
      <Imagen2en1/>
      <Contacto/>  
    </>
  )
}

export default Home
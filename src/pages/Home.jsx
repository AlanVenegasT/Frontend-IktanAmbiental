import React from 'react'
import Avion from '../components/Avion'
import Contacto from '../components/Contacto'
import Cumplimiento from '../components/Cumplimiento'
import Hero from '../components/Hero'
import Imagen2en1 from '../components/Imagen2en1'
import Logos from '../components/Logos'
import Somos from '../components/Somos'
import Tecnologia from '../components/Tecnologia'

const Home = () => {
  return (
    <>
      <Hero/>
      <Logos/>  
      <Somos/>
      
      <Cumplimiento/>  
      <Tecnologia/> 
       
      <Avion/>  
      <Imagen2en1/>
       
      <Contacto/>  
    </>
  )
}

export default Home
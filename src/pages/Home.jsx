import React from 'react'
import Avion from '../components/Avion'
import Contacto from '../components/Contacto'
import Cumplimiento from '../components/Cumplimiento'
import Hero from '../components/Hero'
import Imagen2en1 from '../components/Imagen2en1'
import Somos from '../components/Somos'
import Tecnologia from '../components/Tecnologia'

const Home = () => {
  return (
    <>
      <Hero/>
      <Somos/>
      
      <Cumplimiento/>  
      <Tecnologia/> 
       
      <Avion/>  
      
       
      <Contacto/>  
    </>
  )
}

export default Home
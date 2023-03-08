import { useEffect } from "react"

import { Formulario } from "../components/PaginaContacto/Formulario"

import '../css'

export const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
    
      <Formulario />
         
    </>
  )
}

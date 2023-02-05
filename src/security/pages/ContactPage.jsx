import { useEffect } from "react"
import { Footer } from "../../ui/components/Footer"
import { Formulario } from "../components/Contacto/Formulario"

export const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
    
      <Formulario />
    

      <Footer />
    </>
  )
}

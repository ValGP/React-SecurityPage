import { Link } from "react-router-dom"
import { Footer } from "../../ui/components/Footer"
import { Alarmas } from "../components/Alarmas"
import { BannerDescuento } from "../components/BannerDescuento"
import { FAQs } from "../components/FAQs"
import { Inicio } from "../components/Inicio"
import { SeguridadCasas } from "../components/SeguridadCasas"




export const HomePage = () => {

  return (

    <>

    <div className="container">
        
        {/* INICIO Componente */}

        <Inicio /> 

        {/* ALARMAS*/}
        
        <Alarmas />

        {/* SECCION SEGURIDAD PARA TODOS */}
        <SeguridadCasas />
        
    </div>

    {/* BANNER DESCUENTO */}

    <BannerDescuento />

    {/* FAQs */}

    <FAQs />

    {/* Footer */}

    <Footer />

    </>
  )
}

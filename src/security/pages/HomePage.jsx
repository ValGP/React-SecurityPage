import { Link } from "react-router-dom"
import { Footer } from "../../ui/components/Footer"
import { Alarmas } from "../components/Alarmas"
import { BannerDescuento } from "../components/BannerDescuento"
import { BannerInicio } from "../components/BannerInicio"
import { FAQs } from "../components/FAQs"
import { SeguridadCasas } from "../components/SeguridadCasas"




export const HomePage = () => {

  return (

    <>

      <BannerInicio />

    <div className="container">
        
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

import { BannerDescuento } from "../components/BannerDescuento"
import { BannerFinal } from "../components/BannerFinal"
import { BannerInicio } from "../components/BannerInicio"
import { FAQs } from "../components/FAQs"
import { ListaAlarma } from "../components/ListaAlarma"
import { ProteccionComercios } from "../components/Reseñas/ProteccionComercios"
import { Reseñas } from "../components/Reseñas/Reseñas"
import { SeguridadCasas } from "../components/SeguridadCasas"




export const HomePage = () => {

  return (

    <>

      <BannerInicio />


      <ListaAlarma />
      
    <div className="container">
        
        <SeguridadCasas />
        
    </div>

    <div className="container">
      <BannerDescuento />
    </div>
    
    <ProteccionComercios />

    <Reseñas />

    <FAQs />

    <BannerFinal />
    

    </>
  )
}

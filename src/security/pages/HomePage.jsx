import { BannerInicio, 
         AlarmSlider, 
         EquiposSlider,
         SeguridadCasas,
         ProteccionComercios,
         Reseñas,
         FAQs,
         BannerFinal } from "../components/PaginaInicio"
import { BannerDescuento } from "../components/BannerDescuento"

import '../css'

export const HomePage = () => {

  return (

    <>
      
    <BannerInicio />

    <AlarmSlider/>
    
    <SeguridadCasas/>  
  
    <BannerDescuento /> 
    
    <EquiposSlider/>

    <ProteccionComercios />

    <Reseñas />

    <FAQs />

    <BannerFinal />
     
    </>
  )
}

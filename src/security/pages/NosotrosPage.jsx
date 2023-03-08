import { BannerNosotros,
         NuestrosClientes } from "../components/PaginaNosotros"
         
import { BannerDescuento } from "../components/BannerDescuento"
 
import "../css"

export const NosotrosPage = () => {
  return (
    
    <>

      <BannerNosotros />

      <NuestrosClientes />

      <BannerDescuento />

      
    </>

  )
}

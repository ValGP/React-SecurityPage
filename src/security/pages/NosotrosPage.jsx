import { useEffect } from 'react'

import { BannerNosotros,
         NuestrosClientes } from "../components/PaginaNosotros"
         
import { BannerDescuento } from "../components/BannerDescuento"
 
import "../css"

export const NosotrosPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    
    <>

      <BannerNosotros />

      <NuestrosClientes />

      <BannerDescuento />

      
    </>

  )
}

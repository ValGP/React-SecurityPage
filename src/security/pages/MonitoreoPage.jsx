import { useEffect } from 'react'
import { BannerMonitoreo,
         ComoFunciona,
         SmartPanics,
         PricingTable } from '../components/PaginaMonitoreo'

import { BannerDescuento } from "../components/BannerDescuento"

import '../css'


export const MonitoreoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <BannerMonitoreo />

      <ComoFunciona />

      <SmartPanics />

      <PricingTable />
      
      <BannerDescuento />
      
      

      
    </>
  )
}

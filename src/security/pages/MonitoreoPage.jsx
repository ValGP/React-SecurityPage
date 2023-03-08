import { BannerMonitoreo,
         ComoFunciona,
         SmartPanics,
         PricingTable } from '../components/PaginaMonitoreo'

import { BannerDescuento } from "../components/BannerDescuento"

import '../css'

export const MonitoreoPage = () => {
  return (
    <>

      <BannerMonitoreo />

      <ComoFunciona />

      <SmartPanics />

      <PricingTable />
      <div className="container">
        <BannerDescuento />
      </div>
      

      
    </>
  )
}

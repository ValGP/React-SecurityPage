import { Footer } from "../../ui/components/Footer"
import { BannerDescuento } from "../components/BannerDescuento"
import { BannerMonitoreo } from "../components/BannerMonitoreo"
import { ComoFunciona } from "../components/ComoFunciona"
import { SmartPanics } from "../components/SmartPanics"


export const MonitoreoPage = () => {
  return (
    <>

      <BannerMonitoreo />

      <ComoFunciona />

      <SmartPanics />

      <BannerDescuento />

      <Footer />
    
    </>
  )
}

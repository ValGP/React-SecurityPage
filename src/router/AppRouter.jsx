import { Route, Routes } from "react-router-dom"
import { HomePage, MonitoreoPage, ContactPage, NosotrosPage } from "../security/pages"
import { Footer } from "../ui/components/Footer"
import { Navbar } from "../ui/components/Navbar"


export const AppRouter = () => {
  return (
    <>

    <Navbar />

    
    
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="monitoreo" element={<MonitoreoPage />} />
            <Route path="nosotros" element={<NosotrosPage />} />
            <Route path="contacto" element={<ContactPage />} />
            

        </Routes>
      <Footer />
    </>

    

  )
}

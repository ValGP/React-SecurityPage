import { Link } from "react-router-dom"

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const BannerDescuento = () => {

  useEffect(() => {
    Aos.init({ duration: 750, once: 'true' });
  }, [])
 

  return (

    <div className="container">
        <div data-aos="fade-up" id="banner_container" className="banner-contrata">

          <h1 className="banner-titulo">Obtén asesoría gratuita para proteger tu hogar o tu negocio</h1>



              <Link  className="boton_contrata"
                              to="/contacto">
                          <b>Obtener un presupuesto GRATIS</b> 
              </Link>


        </div>
    </div>
    
  )
}
  
import { Link } from "react-router-dom"

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const BannerDescuento = () => {

  useEffect(() => {
    Aos.init({ duration: 750, once: 'true' });
  }, [])
 

  return (
    <div data-aos="fade-up" id="banner_container" className="banner-contrata mt-3 mb-3">

        <h1 className="banner-titulo">Contrata <b>HOY</b> y obtene un <b>30% de descuento</b></h1>
        <p className="banner-texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel accusantium quis tempore vitae nesciunt esse. Eos odit sint ducimus sapiente reprehenderit asperiores dicta excepturi.</p>
      
        
            <Link  className="boton_contrata"
                            to="/contacto">
                        <b>Obtener un presupuesto GRATIS</b> 
            </Link>
        

      </div>
  )
}
 
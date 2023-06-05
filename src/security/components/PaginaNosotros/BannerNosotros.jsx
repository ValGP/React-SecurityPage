import { Link } from "react-router-dom"

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const BannerNosotros = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, once: 'true' });
  }, [])

  return (
    
  <div className="container">
        <div className="row nosotros">
          <div className="col-xs-12 col-xl-6 row order-2">  
            
            <img src="/img/camara-nosotros.jpg" alt="" />
                 
          </div>

          <div className="col-xs-12 col-xl-6 order-1 order-xl-2">
            <h1 data-aos="fade-up" className="titulo">Confianza, integridad y experiencia</h1>  

            <p className="descripcion-nosotros">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat.</p>   

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad
            minim veniam.</p>

            <p className="mb-4">Guillermo Berardo</p>

            <Link   className="boton_principal"
                            to="/contacto">
                        Contratar
            </Link>

          </div>
        </div>


  </div>

  )
}


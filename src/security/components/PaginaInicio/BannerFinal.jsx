import { Link } from 'react-router-dom';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const BannerFinal = () => {

  useEffect(() => {
    Aos.init({ duration: 750, once: 'true' });
  }, [])

  return (

  <div className="container">
    <div className="banner-final">
      <div className="container-banner">
          <h1 data-aos="fade-up">Obtén asesoría gratuita para proteger tu hogar o tu negocio</h1>

      
          <div className="container_buttons botones-banner">
                    <Link   className="boton_principal"
                            to="/contacto">
                        Contratar
                    </Link>
                    <Link  className="boton_secundario"
                            to="/monitoreo">
                          Descubrir
            
                    </Link>
          </div>
      </div>
    </div>
  </div>
      
    
  )
}
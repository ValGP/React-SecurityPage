import { Link } from 'react-router-dom';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const BannerFinal = () => {

  useEffect(() => {
    Aos.init({ duration: 750, once: 'true' });
  }, [])

  return (
    <div className="banner-final">
        <div className="container-banner">
            <h1 data-aos="fade-up">Disfruta de la tranquilidad de estar seguro</h1>

            <p data-aos="fade-up">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>

            <div className="container_buttons justify-content-center">
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
  )
}
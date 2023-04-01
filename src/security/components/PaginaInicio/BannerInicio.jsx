import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const BannerInicio = () => {

  useEffect(() => {
    Aos.init({ duration: 750, once: 'true' });
  }, [])
  

  return (
    
    <div className="inicio"> 

        <div className="banner-inicio">
            <h1 data-aos="fade-up" className="titulo">Ofrecemos <span className="celeste">soluciones</span> <br /> 
                de acuerdo a sus <span className="celeste">necesidades</span></h1>

            <p className='texto-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
 
            <div className="container_buttons">
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

        <img className='imagen-inicio' src="/public/img/BannerInicioResponsive.png" alt="" />
    </div>


  )
}
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
            

            <p className='texto-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad </p>

            
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex ">
                    <Link   className="nav-link nav-item link-button"
                            to="/contacto">
                        Contratar
                    </Link>

                    <Link  className="nav-link nav-item"
                           to="/monitoreo">
                        Descubrir
          
                    </Link>
            </div>
            
            
        </div>

        <img className='imagen-inicio' src="/public/img/BannerInicioResponsive.png" alt="" />
    </div>


  )
}
import { Link } from 'react-router-dom'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const SeguridadCasas = () => {

    useEffect(() => {
        Aos.init({ duration: 750, once: 'true' });
      }, [])

  return (
    <div className="container">

        <div className="row">
            <div className="col-xs-12 col-sm-6 m-auto">
                <h1 data-aos="fade-up" className="titulo-casas">Seguridad para <span className="celeste">todos</span></h1>
                <p className='texto-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis. <br /> <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam.</p>
                

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex">
                    <Link   className="nav-link nav-item link-button"
                                to="/contacto">
                            Contratar
                    </Link>
                </div>
                
            </div>
            {/* Hacer componente de cada uno */}
            <div className="col-xs-12 col-sm-6 my-auto container-casas justify-content-between">
                <div className="row">
                    <div data-aos="fade-up" className="col-xs-12 col-sm-6 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                    <div data-aos="fade-up" className="col-xs-12 col-sm-6 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                </div>
                <div className="row">
                    <div data-aos="fade-up" className="col-xs-12 col-sm-3 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                    <div data-aos="fade-up" className="col-xs-12 col-sm-3 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                </div>
            </div>

        </div>

    </div>
    
  )
}

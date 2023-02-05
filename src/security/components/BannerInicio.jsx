import { Link } from 'react-router-dom';

export const BannerInicio = () => {
  return (
    
    <div className="inicio"> 

        <div className="container banner-inicio">
            <h1 className="titulo">Ofrecemos <span className="celeste">soluciones</span></h1>
            <h1 className="titulo">de acuerdo a sus <span className="celeste">necesidades</span></h1>

            <p className='texto-inicio'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad </p>

            
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex ">
                    <Link   className="nav-link nav-item link-button"
                            to="/contacto">
                        Contratar
                    </Link>

                    <Link  className="nav-link nav-item"
                           to="/monitoreo">
                        Descubrir
                        <img className='mouse' src="/public/img/mouse.png" alt="" />
                    </Link>
            </div>
            
            
        </div>

        <img className='imagen-inicio' src="/public/img/BannerInicioResponsive.png" alt="" />
    </div>


  )
}
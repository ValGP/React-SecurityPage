import { Link } from "react-router-dom"


export const BannerNosotros = () => {
  return (
    
    <div className="container">
        <div className="row nosotros">
          <div className="col-xs-12 col-sm-6 row nosotros-img">
            <div className="col-6">
              <img className="first-item" src="/public/img/camara-nosotros.jpg" alt="" />
            </div>
            <div className="col-6">
              <img className="second-item" src="/public/img/camara-nosotros.jpg" alt="" />
            </div>
            <div className="col-6">
              <img className="third-item" src="/public/img/camara-nosotros.jpg" alt="" />
            </div>  
            
            <div className="col-6">
              <h4><span>+10</span>Años</h4>  
            </div> 
                 
          </div>

          <div className="col-xs-12 col-sm-6">
            <h1 className="titulo">Confianza, integridad y experiencia</h1>  

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad.</p>   

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad
            minim veniam, quis nos.</p>

            <p>Guillermo Berardo</p>

            <div className="d-flex">
                    <Link   className="nav-link nav-item link-button"
                            to="/contacto">
                        Contratar
                    </Link>
            </div>
          </div>
        </div>


    </div>

  )
}


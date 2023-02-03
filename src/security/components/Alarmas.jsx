import { Link } from "react-router-dom"


// Hacer componente de cada alarma
export const Alarmas = () => {
  return (
    <div className="row lista-alarmas ">

            <div className="col-3 item-alarma">
                <img className="img" src="/public/img/celeste.png" alt="" />
                <h4 className="titulo-alarma">Alarma Monitoreada</h4>
                <p>Aumenta tu seguridad con nuestros sistemas de alarma</p>
                
                <Link   className="nav-link nav-item"
                            to="/contacto">
                        + INFO
                </Link>

            </div>

            <div className="col-3 item-alarma">
                <img className="img" src="/public/img/celeste.png" alt="" />
                <h4 className="titulo-alarma">Alarma Monitoreada</h4>
                <p>Aumenta tu seguridad con nuestros sistemas de alarma</p>

                <Link   className="nav-link nav-item"
                            to="/contacto">
                        + INFO
                </Link>
            </div>
            <div className="col-3 item-alarma">
                <img className="img" src="/public/img/celeste.png" alt="" />
                <h4 className="titulo-alarma">Alarma Monitoreada</h4>
                <p>Aumenta tu seguridad con nuestros sistemas de alarma</p>
                
                <Link   className="nav-link nav-item"
                            to="/contacto">
                        + INFO
                </Link>
            </div>
            <div className="col-3 item-alarma">
                <img className="img" src="/public/img/celeste.png" alt="" />
                <h4 className="titulo-alarma">Alarma Monitoreada</h4>
                <p>Aumenta tu seguridad con nuestros sistemas de alarma</p>
                
                <Link   className="nav-link nav-item"
                            to="/contacto">
                        + INFO
                </Link>
            </div>

    
        </div>
  )
}

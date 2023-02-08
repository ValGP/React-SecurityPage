import { Link } from "react-router-dom"


export const SmartPanics = () => {
  return (
    <div className="container">
       
        <div className="row container-phone">
            <div className="col-xs-12 col-sm-7">
                <img className="phone" src="/public/img/phone.png" alt="app-smartpanic" />
            </div>

            <div className="col-xs-12 col-sm-5 container-smartpanic">
                <h1 className="smartpanic-title"><span className="celeste">Smartpanics</span>, <br />
                Control al alcance de tu mano. </h1>

                <p className="smartpanic-text">SmartPanics es una aplicación que te permite asociar la alarma a tu celular y
                    tener el control de lo que sucede en tu propiedad desde tu smartphone. Podes
                    conectar y desconectar el sistema, recibir notificaciones de su actividad y
                    muchas cosas más.</p>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex">
                    <Link   className="nav-link nav-item link-button smartpanic-button"
                                to="/contacto">
                            Contratar
                    </Link>
                </div>
            </div>


        </div>

        
    </div>
  )
}

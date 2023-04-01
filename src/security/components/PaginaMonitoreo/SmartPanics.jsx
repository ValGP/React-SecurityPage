import { Link } from "react-router-dom"

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const SmartPanics = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once: 'true' });
      }, [])

  return (
    <div className="container">
       
        <div className="row container-phone">
            <div className="col-xs-12 col-sm-7">
                <img className="phone" src="/public/img/phone.png" alt="app-smartpanic" />
            </div>

            <div className="col-xs-12 col-sm-5 container-smartpanic">
                <h1 data-aos="fade-up" className="smartpanic-title"><span className="celeste">Smartpanics</span>, <br />
                Control al alcance de tu mano. </h1>

                <p className="smartpanic-text">SmartPanics es una aplicación que te permite asociar la alarma a tu celular y
                    tener el control de lo que sucede en tu propiedad desde tu smartphone. Podes
                    conectar y desconectar el sistema, recibir notificaciones de su actividad y
                    muchas cosas más.</p>

                    <Link   className="boton_principal"
                            to="/contacto">
                        Contratar
                    </Link>
            </div>


        </div>

        
    </div>
  )
}

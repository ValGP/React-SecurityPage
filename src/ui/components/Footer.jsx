import { Link } from "react-router-dom"


export const Footer = () => {
  return (
    <footer className="footer">

        <div className="container">
            <div className="row">

                <div className="col-xs-12 col-sm-3">

                    <h4 className="footer-title mt-4">Empresa</h4>
                    <hr className="footer-hr"/>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Nosotros
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Nuestros Sevicios
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        FAQs
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Politica de privacidad
                    </Link>

                </div>

                <div className="col-xs-12 col-sm-3">

                    <h4 className="footer-title mt-4">Información</h4>
                    <hr className="footer-hr"/>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Inicio
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Monitoreo
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Smartpanics
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Contratar
                    </Link>

                </div>

                <div className="col-xs-12 col-sm-4">

                    <h4 className="footer-title mt-4">Contacto</h4>
                    <hr className="footer-hr"/>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Urquiza 64 | 4to Piso | Oficina B | Córdoba
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        ventas1@berardost.com.ar
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        +54 9 351 3428585
                    </Link>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Lunes a viernes de 09:00 a 18:00 horas
                    </Link>
                </div>

                <div className="col-xs-12 col-sm">

                    <h4 className="footer-title mt-4">Seguinos</h4>
                    <hr className="footer-hr"/>

                    <Link className="footer-link"
                          to="/nosotros"
                            >
                        Iconos de Redes
                    </Link>
                </div>

            </div>
        </div>
        

    </footer>
  )
}

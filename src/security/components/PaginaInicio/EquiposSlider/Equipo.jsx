import { Link } from "react-router-dom"


export const Equipo = () => {
  return (
    <div className="equipo">
        <img src="/public/img/white-circle.png" alt="" />
        <h5>Servicio Técnico</h5>
        <p>Servicio</p>
        <Link   className="nav-link nav-item"
                            to="/contacto">
                        + INFO
        </Link>
    </div>
  )
}
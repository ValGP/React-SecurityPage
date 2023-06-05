import { Link } from "react-router-dom"



export const AlarmCard = ({title, description}) => {
  return (
    <div className="item-alarma">
                <img className="img" src="/public/img/circle.png" alt="" />
                <h4 className="titulo-alarma">{title}</h4>
                {/* <p>Aumenta tu seguridad con nuestros sistemas de alarma</p> */}
                
                {/* <Link   className="nav-link nav-item"
                            to="/contacto">
                        + INFO
                </Link> */}
    </div>
  )
}
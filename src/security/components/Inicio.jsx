import { Link } from "react-router-dom"


export const Inicio = () => {
  return (
    <div className="row">

            <div className="col-6 m-auto">
                <h1 className="titulo-inicio">Ofrecemos <span className="celeste">soluciones</span></h1>
                <h1 className="titulo-inicio">de acuerdo a sus <span className="celeste">necesidades</span></h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil optio eveniet fugiat doloribus, natus quibusdam ut repellendus esse facilis quod numquam labore consequuntur, quis, sit consectetur illo corrupti nobis?</p>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex ">
                    <Link   className="nav-link nav-item link-button"
                            to="/contacto">
                        Contratar
                    </Link>

                    <Link  className="nav-link nav-item celeste"
                           to="/monitoreo">
                        Descubrir 0
                    </Link>
                </div>

            </div>
            <div className="col-6">
               <img src='/public/img/camara_inicio.jpg' alt="" />
            </div>
            

        </div>
  )
}

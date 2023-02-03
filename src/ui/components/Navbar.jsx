import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-sm p-4 mt-2 mb-2 container">
              
        <Link 
            className="navbar-brand" 
            to="/"
        >
            Seguridad 
        </Link>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <div className="navbar-nav">

                <NavLink 
                    className='nav-item nav-link' 
                    to="/"
                >
                    Inicio
                </NavLink>

                <NavLink 
                    className="nav-item nav-link" 
                    to="/monitoreo"
                >
                    Monitoreo
                </NavLink>

                <NavLink 
                    className="nav-item nav-link" 
                    to="/nosotros"
                >
                    Nosotros
                </NavLink>

                <NavLink 
                    id='llamanos'
                    //className={ ({isActive}) => `nav-item nav-link nav-button ${ isActive ? '':'' }` }
                    className='nav-item nav-link nav-button'
                    to="/contacto"
                >
                    Llamanos
                </NavLink>
            </div>
        </div>

    </nav>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

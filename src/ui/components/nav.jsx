
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
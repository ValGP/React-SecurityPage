import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    const ref = React.createRef();

    const handleClick = () => {
        console.log(ref.current)
        console.log(ref.current.classList.contains("show"))
    }

  return (
    <>
    
    <nav className="navbar navbar-expand-sm p-4 mt-2 mb-2 container ">
        
            <Link 
                className="navbar-brand" 
                to="/"
                >
                <img className='logo' src="/public/img/logo.png" alt="" /> 
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse nav-items`} id="navbarNav" ref={ref}>
                <div className="animate__animated animate__fadeInDown">
                    <div className="navbar-nav mt-3">
                        
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
                            className='nav-item nav-link nav-button px-3'
                            to="/contacto"
                        >
                            Llamanos
                        </NavLink>
                    </div>
                </div>
            
            </div>
        
    </nav>
    </>
  )
}

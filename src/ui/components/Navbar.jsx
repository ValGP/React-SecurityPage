import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ui.css'

export const Navbar = () => {

   const [isActive, setActive] = useState("false");

   const handleToggle = () => {
    setActive(!isActive);
   };
   

  return (
    <>
        
        <header className='header-nav'>
             <NavLink
                to='/'
                onClick={handleToggle}
                ><img className='logo' src="/public/img/logo.png" alt="" /></NavLink>
            
            <div className="hamburger" onClick={handleToggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={ isActive ? "nav-bar" : "active nav-bar"}>
                <ul> 
                    <li>
                        <NavLink
                        to='/'
                        onClick={handleToggle}
                        className="link"
                        >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/monitoreo'
                        onClick={handleToggle}
                        className="link"
                        >Monitoreo</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/nosotros'
                        onClick={handleToggle}
                        className="link"
                        >Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink id='boton_contacto'
                        to='/contacto'
                        onClick={handleToggle}
                        >Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    
    </>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'

export const SeguridadCasas = () => {
  return (
    <div className="row">
            <div className="col-xs-12 col-sm-6 m-auto">
                <h1 className="titulo-casas">Seguridad para <span className="celeste">todos</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, molestias corrupti in consequuntur voluptate facilis mollitia ratione fuga nulla praesentium repellendus incidunt, aspernatur optio nostrum corporis, perferendis soluta quia delectus.</p>
                
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex">
                    <Link   className="nav-link nav-item link-button"
                                to="/contacto">
                            Contratar
                    </Link>
                </div>
                
            </div>
            {/* Hacer componente de cada uno */}
            <div className="col-xs-12 col-sm-6 my-auto container-casas justify-content-between">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                    <div className="col-xs-12 col-sm-6 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                    <div className="col-xs-12 col-sm-3 item-casa">
                        
                        <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus odio dolor culpa placeat aliquam Officiis voluptatibus odio dolor culpa placeat aliquam</p>

                    </div>
                </div>
            </div>

        </div>
  )
}

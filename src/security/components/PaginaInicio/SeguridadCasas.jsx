import { Link } from 'react-router-dom'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const SeguridadCasas = () => {

    // useEffect(() => {
    //     Aos.init({ duration: 750, once: 'true' });
    //   }, [])

  return (
    <div className="container">

        <div className="row container-seguridad">
            <div className="col">
                <p className='titulo'>Seguridad para <span className='celeste'>todos</span></p>
                <p className='texto-casas'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis.</p>

                <div className="container_buttons">
                    <Link   className="boton_principal"
                            to="/contacto">
                        Contratar
                    </Link>
                </div>

            </div>
            <div className="col container-casas">
                <div className="">
                    <div className=" item-casa">
                    <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut laoreet
                            dolore magna aliquam erat
                            volutpat.</p>
                    </div>
                    <div className=" item-casa">
                    <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut laoreet
                            dolore magna aliquam erat
                            volutpat.</p>
                    </div>
                </div>
                <div className="">
                <div className=" item-casa">
                    <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut laoreet
                            dolore magna aliquam erat
                            volutpat.</p>
                    </div>
                    <div className=" item-casa">
                    <img src="/public/img/hogar-azul.png" alt="" />
                        <h4 className="item-casa-titulo">Hogares</h4>
                        <p className="item-casa-texto">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut laoreet
                            dolore magna aliquam erat
                            volutpat.</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
    
  )
}

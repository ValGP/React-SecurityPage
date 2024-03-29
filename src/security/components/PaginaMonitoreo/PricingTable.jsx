import {Link} from 'react-router-dom';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const PricingTable = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once: 'true' });
      }, [])
    
  return (
    <div className="pricing-table-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title text-center">
                        <h2  data-aos="fade-up">¿Listo para proteger tu hogar? <br /> Contrata ahora</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 order-1 order-xl-2">
                    <div className="single-table">
                        <img src="/public/img/circle.png" alt="" />
                        <h4>Esencial</h4>
                        <h2>$7.499,50</h2>
                        <ul>
                            <li>Central DSC</li>
                            <li>Teclado LED</li>
                            <li>Sirena interior psicoacustica</li>
                            <li>1 sensor de movimiento</li>
                            <li>1 sensor magnetico</li>
                            <li>Batería de respaldo</li>
                            <li>Placa disuasiva</li>
                        </ul>
                        <Link className="" to="/contacto">Contratar</Link>
                    </div>
                </div>

                <div className="col-md-4 order-sm-1 order-xl-2">
                    <div data-aos="fade-up" className="single-table popular">
                        <div className="popular-price">---------------</div>
                            <img src="/public/img/circle.png" alt="" />
                            <h4>Inteligente</h4>
                            <h2>$7.499,50</h2>
                            <ul>
                                <li>Central DSC</li>
                                <li>Teclado LED</li>
                                <li>Sirena interior psicoacustica</li>
                                <li>Sirena exterior</li>
                                <li>2 sensor de movimiento</li>
                                <li>2 sensor magnetico</li>
                                <li>1 pulsador de panico</li>
                                <li>Batería de respaldo</li>
                                <li>Placa disuasiva</li>
                            </ul>
                            <Link className="" to="/contacto">Contratar</Link>
                    </div>
                </div>
                    
                <div className="col-md-4 order-sm-3">
                    <div className="single-table">
                        <img src="/public/img/circle.png" alt="" />
                        <h4>Premium</h4>
                        <h2>$7.499,50</h2>
                        <ul>
                            <li>Central DSC</li>
                            <li>Teclado LED</li>
                            <li>Sirena interior psicoacustica</li>
                            <li>1 sensor de movimiento</li>
                            <li>1 sensor magnetico</li>
                            <li>Batería de respaldo</li>
                            <li>Placa disuasiva</li>
                        </ul>
                        <Link className="" to="/contacto">Contratar</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

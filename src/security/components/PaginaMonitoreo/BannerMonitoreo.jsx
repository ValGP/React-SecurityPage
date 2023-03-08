import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const BannerMonitoreo = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, once: 'true' });
  }, [])


  return (
    <div className="banner-monitoreo">
        <div className="container">
        <div className="row pt-5 pb-5">

            <div data-aos="fade-up" className="col-xs-12 col-sm-6 m-auto">
                <h1 className="titulo"><span className="celeste">Siempre protegido.</span> <br /> 
                Alarmas monitoreadas</h1>
                <h1 className="titulo"></h1>

                <p className="mt-4">En Berardo contamos con un sistema de alarmas y Monitoreo durante las 24 hs y los 365 dias del año que actúa desde la prevención de posibles intrusiones a la respuesta operativa de eventos</p>


            </div>
            <div className="col-xs-12 col-sm-6">
            <img className="w-100" src='/public/img/camaras-monitoreo.png' alt="" />
            </div>


        </div>
        </div>
    </div>
    
  )
}

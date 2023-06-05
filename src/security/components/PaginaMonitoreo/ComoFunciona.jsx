import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ComoFunciona = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once: 'true' });
      }, [])
    
    

  return (
    <>
        <div className="container container-func">

        <div className="row ">
            <div className="col func-monitoreo size-mon">
                <h1 data-aos="fade-up" className="funcionamiento-title">¿Como funciona el monitoreo?</h1>
            </div>

            <div className="col desc-monitoreo size-mon">
                <img className="circulo-blanco" src="/public/img/white-circle.png" alt="" />

                <h2 className="desc-title">Disuación</h2>

                <p className="desc-texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum</p>

            </div>

            <div className="col desc-monitoreo size-mon">
                <img className="circulo-blanco" src="/public/img/white-circle.png" alt="" />

                <h2 className="desc-title">Evento</h2>

                <p className="desc-texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum</p>

            </div>
        </div>

        <div className="row">
            <div className="col desc-monitoreo size-mon">
                <img className="circulo-blanco" src="/public/img/white-circle.png" alt="" />

                <h2 className="desc-title">Confirmación</h2>

                <p className="desc-texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum</p>

            </div>

            <div className="col desc-monitoreo size-mon">
                <img className="circulo-blanco" src="/public/img/white-circle.png" alt="" />

                <h2 className="desc-title">Acción</h2>

                <p className="desc-texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum</p>

            </div>

            <div className="col desc-monitoreo size-mon">
                <img className="circulo-blanco" src="/public/img/white-circle.png" alt="" />

                <h2 className="desc-title">Seguimiento</h2>

                <p className="desc-texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum</p>

            </div>
            </div>

        </div>


    </>
    
  )
}

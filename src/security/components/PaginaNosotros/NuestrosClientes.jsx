import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const NuestrosClientes = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, once: 'true' });
  }, [])

  return (
  <div className="container">
      <div className="row nuestros-clientes">
            <div className="col-xs-12 col-xl-6 clientes">
                <h1 data-aos="fade-up" className="titulo">Nuestros clientes</h1>
              

                <p>Berardo cuenta con clientes de diversos sectores como supermercados, comercios, escuelas, industrias e instituciones publicas.</p>
                <p>Su índice de fidelizacion es alto, debido al compromiso y seriedad de Berardo en el manejo de la inversion de sus clientes con seguridad y respeto.</p>
            </div>
            <div className="col-xs-12 col-xl-6">
                <img src="/img/nuestrosClientes.jpg" alt="" />
            </div>
      </div>
  </div>
  )
}
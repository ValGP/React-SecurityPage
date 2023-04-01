import { FAQ } from "../../../ui/components/FAQ"

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const FAQs = () => {

  useEffect(() => {
    Aos.init({ duration: 750, once: 'true' });
  }, [])

  return (
    <div data-aos="fade-up" className="container faqs-info">
 
        <h1 className="faqs-title">Preguntas Frecuentes</h1>

        <p className="faqs-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptates unde a sapiente veritatis eos iure expedita.</p>

        <div className="question">
            <FAQ question={"¿Puedo poner el sistema de alarma si tengo mascotas?"} answer={"Respuesta de ejemplo"}/>
        </div>

        <div className="question">
            <FAQ question={"¿Pregunta de ejemplo?"} answer={"Respuesta de ejemplo"}/>
        </div>

        <div className="question">
            <FAQ question={"¿Pregunta de ejemplo?"} answer={"Respuesta de ejemplo"}/>
        </div>
        

    </div>
  )
}

import { FAQ } from "../../ui/components/FAQ"


export const FAQs = () => {
  return (
    <div className="container faqs-info">

        <h1 className="faqs-title">Preguntas Frecuentes</h1>

        <p className="faqs-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptates unde a sapiente veritatis eos iure expedita. Placeat repellat vitae dicta ipsa velit iusto eaque aut at facere, quo fugit.</p>


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

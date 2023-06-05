import { useForm } from "../../../hooks/useForm"

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import nodemailer from 'nodemailer';


export const Formulario = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once: 'true' });
      }, [])
    

    const { formState, onInputChange } = useForm({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    })

    const {nombre, email, telefono, mensaje} = formState;

    const handleSubmit = async (e) => { }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     // Configurar el servicio de correo electrónico
    //     const transporter = nodemailer.createTransport({
    //       host: "smtp.gmail.com",
    //       port: 465,
    //       secure: true,
    //       auth: {
    //         user: "tu_correo_electronico@gmail.com",
    //         pass: "tu_contraseña",
    //       },
    //     });
    
    //     try {
    //       // Enviar el correo electrónico
    //       const info = await transporter.sendMail({
    //         from: "Remitente <tu_correo_electronico@gmail.com>",
    //         to: "Destinatario <destinatario@gmail.com>",
    //         subject: "Nuevo mensaje desde el formulario de contacto",
    //         html: `
    //           <p>Nombre: ${nombre}</p>
    //           <p>Email: ${email}</p>
    //           <p>Teléfono: ${telefono}</p>
    //           <p>Mensaje: ${mensaje}</p>
    //         `,
    //       });
    
    //       console.log("Mensaje enviado: %s", info.messageId);
    //     } catch (error) {
    //       console.error(error);
    //     }
    // };
    
  return (
    
    <div data-aos="fade-up" className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <form id="form" action="" className="form" onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="">Nombre Completo</label>
                    <input  className="form-control form-input" 
                            type="text" 
                            name="nombre"
                            autoComplete="on"
                            value={nombre}
                            onChange={onInputChange}
                            />

                    <label className="form-label" htmlFor="">Email</label>
                    <input  className="form-control form-input" 
                            type="email" 
                            name="email"
                            autoComplete="on"
                            value={email}
                            onChange={onInputChange}
                            />

                    <label className="form-label" htmlFor="">Teléfono</label>
                    <input  className="form-control form-input" 
                            type="text" 
                            name="telefono"
                            autoComplete="on"
                            value={telefono}
                            onChange={onInputChange}
                            />

                    <label className="form-label" htmlFor="">Mensaje</label>
                    <textarea  className="form-control form-input" 
                            type="text" 
                            name="mensaje"
                            autoComplete="on"
                            value={mensaje}
                            onChange={onInputChange}
                            />

                    <button type="submit" className="btn btn-submit">
                        Enviar Mensaje
                    </button>
                </form>
            </div>

            <div className="col-xs-12 col-sm-6">
                <h3 className="title-pasos">¿Como es trabajar con nosotros?</h3>

                <div className="container">
                    <div className="pasos row">
                        <div className="d-flex mb-2">
                            <img className="paso1" src="/public/img/paso1.png" alt="" />
                            <h3 className="title-paso">Paso 1</h3>
                        </div>
                        <div className="col-sm col-xs-6">
                            
                            <p className="text-paso">Lo contactaremos y nos contara acerca de sus problemas y necesidades.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pasos row">
                        <div className="d-flex mb-2">
                            <img src="/public/img/paso2.png" alt="" />
                            <h3 className="title-paso">Paso 2</h3>
                        </div>
                        <div className="col-sm col-xs-6">
                            
                            <p className="text-paso">Un experto visitará su lugar, lo asesorará y le dirá cuales son las zonas vulnerables.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="pasos row">
                        <div className="d-flex mb-2">
                            <img src="/public/img/paso3.png" alt="" />
                            <h3 className="title-paso">Paso 3</h3>
                        </div>
                        <div className="col-sm col-xs-6">
                            
                            <p className="text-paso">Lo contactaremos y nos contara acerca de sus problemas y necesidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

  )
}

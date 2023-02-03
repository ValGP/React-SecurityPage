

export const Formulario = () => {
  return (
    
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <form action="" className="form">
                    <label className="form-label" htmlFor="">Nombre Completo</label>
                    <input className="form-control form-input" type="text" />

                    <label className="form-label" htmlFor="">Email</label>
                    <input className="form-control form-input" type="email" />

                    <label className="form-label" htmlFor="">Teléfono</label>
                    <input className="form-control form-input" type="text" />

                    <label className="form-label" htmlFor="">Mensaje</label>
                    <textarea className="form-control form-input" type="text" />

                    <button className="btn btn-submit">
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

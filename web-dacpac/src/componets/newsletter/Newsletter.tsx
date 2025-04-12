import './Newsletter.css'

const Newsletter = () => {
    return (
        <center className="slide-in-right" id='form'>
            <div className="form-container">
                <div className="titulo">
                    <h3 className="titulo2">Newsletter</h3>
                    <h1 className="titulo1">¡Enterate de todas las novedades!</h1>
                </div>
                <div className="divtexto container-size">
                    <div className="form-container">
                        <form id="waitlistForm" className="space-y-4">
                            <div className="form-group">
                                <input id="email" name="email" type="email" placeholder="Introduce tu correo electrónico" required
                                    aria-describedby="email-error" />
                                <button type="submit" id="submitButton">Unirse</button>
                                
                            </div>
                            <p className='aviso'>AVISO: La newsletter no funciona en estos momentos. Sentimos las molestias</p>
                            <p className='acepto'>Al unirte a la newsletters, aceptas recibir correos relacionados con el campamento DacPac</p>
                        </form>
                    </div>
                </div>

            </div>
        </center>
    );
};

export default Newsletter;
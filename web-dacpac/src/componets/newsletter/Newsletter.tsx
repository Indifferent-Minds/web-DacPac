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
                                    aria-describedby="email-error" className='textoinput' />
                                <button type="submit" id="submitButton" className='boton'>Unirse</button>
                                
                            </div>
                            <p className='aviso'>AVISO: La newsletter no funciona en estos momentos. Sentimos las molestias</p>
                            <p className='acepto'>Al unirte a la newsletters, aceptas recibir correos relacionados con el campamento DacPac</p>
                        </form>
                    </div>
                </div>
                <div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdU9meNlIm-Hd8kSGmtB97XB5VE0DP1qrqm2ajZXyN0xkYUwQ/viewform" className='iframegoogle'></iframe></div>

            </div>
        </center>
    );
};

export default Newsletter;
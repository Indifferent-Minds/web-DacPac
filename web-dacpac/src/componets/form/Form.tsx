import './Form.css'


const Form = () => {
    return (
        <center className="slide-in-right" id='form'>
            <div className="form-container">
                <div className="titulo">
                    <h3 className="titulo2">Formulario de inscripción</h3>
                    <h1 className="titulo1">¡Ven al campamento!</h1>
                </div>
                <div className="divtexto container-size">
                    <p className="texto">Para poder entrar al campamento es necesario que rellenes el siguiente formulario, haciendo click en el siguiente enlace</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaSO1NOJNvksjyiRye1teWs6-0r9Z5Ro0fpJWZCeIY6A1pEA/viewform" className='form-link'>
                        ➡️ Formulario de inscripción ⬅️
                    </a>
                </div>
            </div>
        </center>
    );
};

export default Form;
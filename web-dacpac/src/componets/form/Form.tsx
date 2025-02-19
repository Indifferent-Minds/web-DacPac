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
                    <button 
                        className="form-button" 
                        onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdaSO1NOJNvksjyiRye1teWs6-0r9Z5Ro0fpJWZCeIY6A1pEA/viewform", "_blank")}
                    >
                        📝 Ir al formulario
                    </button>
                </div>
            </div>
        </center>
    );
};

export default Form;
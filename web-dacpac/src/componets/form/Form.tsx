import './Form.css'


const Form = () => {
    return (
        <center className="slide-in-right">
            <div className="form-container">
                <div className="titulo">
                    <h3 className="titulo2">Formulario de inscripción</h3>
                    <h1 className="titulo1">¡Ven al campamento!</h1>
                </div>
                <iframe
                    id="enrollment-form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf0IUJwsRQh8eiwHOFxxpbl2Cjb1qPbXVEae1_EUUr8F-JyAg/viewform?embedded=true">
                    Cargando formulario 🔄️
                </iframe>
            </div>
        </center>
    );
};

export default Form;
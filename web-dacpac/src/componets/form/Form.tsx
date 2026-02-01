import './Form.css'


interface FromProp {
    title?: string;
    subTitle?: string;
    buttonText?: string;
}


const Form = ({title, subTitle, buttonText}: FromProp) => {
    return (
        <center className="slide-in-right" id='form'>
            <div className="form-container">
                <div className="titulo">
                    <h3 className="titulo2">{title ?? 'Abierto tramo 2 inscripciones'}</h3>
                    <h1 className="titulo1">{subTitle ?? '¡Súmate a la newsletter para entrar en el tramo 2!'}</h1>
                </div>
                <div className="divtexto container-size">
                    <button 
                        className="form-button" 
                        onClick={() => window.open("https://indifferentminds.org/colabora/", "_blank")}
                    >
                        {buttonText ?? '📝 Newsletter'}
                    </button>
                </div>
            </div>
        </center>
    );
};

export default Form;
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
                    <h3 className="titulo2">{title ?? 'Formulario de inscripción'}</h3>
                    <h1 className="titulo1">{subTitle ?? '¡Ven al campamento!'}</h1>
                </div>
                <div className="divtexto container-size">
                    <button 
                        className="form-button" 
                        onClick={() => window.open("https://forms.gle/N9ucCGvo58nKDu4a8", "_blank")}
                    >
                        {buttonText ?? '📝 Ir al formulario'}
                    </button>
                </div>
            </div>
        </center>
    );
};

export default Form;
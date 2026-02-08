import './Form.css'
// const base = import.meta.env.VITE_BASE; 


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
                
                {/* <img src={base + 'soldout.png'} alt="soldout" className="soldout"/> */}
                <div className="divtexto container-size">
                    <button 
                        className="form-button" 
                        onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfOSRqZ9-HPEsNvhX1EFNwjP4tKZDs_9RosJo9JJYFMDLWBhA/viewform?usp=publish-editor", "_blank")}
                    >
                        {buttonText ?? '📝 Ir al formulario'}
                    </button>
                </div>
                
            </div>
        </center>
    );
};

export default Form;
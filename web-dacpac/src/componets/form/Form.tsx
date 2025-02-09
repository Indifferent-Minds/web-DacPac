import Card from '../card/Card'
import './Form.css'

export default function Form() {
    return <Card id="form" className='slide-in-left' title="✏️ Solicitud de inscripción">
        <div className="form-container">
            <iframe 
                id="enrollment-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSf0IUJwsRQh8eiwHOFxxpbl2Cjb1qPbXVEae1_EUUr8F-JyAg/viewform?embedded=true">
                    Cargando formulario 🔄️
            </iframe>
        </div>
    </Card>
}
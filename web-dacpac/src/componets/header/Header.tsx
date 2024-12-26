import './Header.css'

const base = import.meta.env.VITE_BASE;

export default function Header() {
    return <header className='d-flex drop-shadow-vertical'>
        <div className="logo-container d-none d-sm-block">
            <img src={base+'logo.svg'} alt="Logo DacPac" id="logo-dacpac" className='' draggable="false" />
        </div>
        <div className='w-100 pt-2 headers-container'>
            <h1>CAMPAMENTO DAC-PAC</h1>
            <h2>De Alta Capacidad Para Alta Capacidad</h2>
        </div>
    </header>
}
import './Header.css';
const base = import.meta.env.VITE_BASE; 
import ReactIcon from '../../assets/react.svg'

const NavBar = () => {
  return (
    <div className="barranavegacion row">
      <div className="barranavegacion-social-icons col-4 d-none d-lg-block">
        <a href="https://www.instagram.com/dacpac.campamento/" target='_blank' rel='noreferrer'>
          <img src={ReactIcon} alt="Instagram" draggable="false" />
        </a>
        {/* <a href="https://x.com">
        <img src={base+'x.svg'} alt="x" draggable="false" />
        </a>
        <a href="https://threads.net">
          <img src={base+'threads.svg'} alt="Threads" draggable="false" />
        </a> */}
      </div>

      <div className="barranavegacion-logo col-12 col-lg-4">
        <div className="logo-container">
          <img src={base+'logo.svg'} />
          <p>De Alta Capacidad Para Alta Capacidad</p>
        </div>
      </div>

      <div className="barranavegacion-links col-4 d-none d-lg-block">
        <div className="d-flex justify-content-end">
          <a href="#" className='mx-2'>Inicio</a>
          <a href="#" className='mx-2'>Actividades</a> 
          <a href="#" className='mx-2'>AACC</a>
          <a href="#" className='mx-2'>Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

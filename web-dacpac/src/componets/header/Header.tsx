import './Header.css';
const base = import.meta.env.VITE_BASE;     

const NavBar = () => {
  return (
    <div className="barranavegacion">
      <div className="barranavegacion-social-icons">
        <a href="https://instagram.com">
          <img src={base+'instagram.svg'} alt="Instagram" draggable="false" />
        </a>
        <a href="https://x.com">
        <img src={base+'x.svg'} alt="x" draggable="false" />
        </a>
        <a href="https://threads.net">
          <img src={base+'threads.svg'} alt="Threads" draggable="false" />
        </a>
      </div>

      <div className="barranavegacion-logo">
        <div className="logo-container">
          <img src={base+'logo.svg'} />
          <p>De Alta Capacidad Para Alta Capacidad</p>
        </div>
      </div>

      <div className="barranavegacion-links">
        <a href="#" className='enlace'>Inicio</a>
        <a href="#">Actividades</a> 
        <a href="#">AACC</a>
        <a href="#">Contacto</a>
      </div>
    </div>
  );
};

export default NavBar;

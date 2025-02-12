import './Team.css';

const base = import.meta.env.VITE_BASE;
const image = 'image_04.jpg';

const Team = () => {
  return (
    <center className="slide-in-right">
      <div className="teams">
        <div className="titulo">
          <h3 className="titulo2">Conoce al equipo</h3>
          <h1 className="titulo1">¡Mira quienes somos!</h1>
        </div>
        <div className="img">
          <img
            src={base + image}
            className="imgteam"
            alt="Foto del campamento"
            draggable="false"
          />
        </div>
      </div>
    </center>
  );
};

export default Team;
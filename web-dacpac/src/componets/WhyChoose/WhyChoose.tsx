import './WhyChoose.css';

const base = import.meta.env.VITE_BASE;
const img = "whychoose.png";

export const WhyChoose = () => {
  return (
    <center className="slide-in-right">
      <div className="whythis">
        <div className="titulo">
          <h3 className="titulo2">¿Por qué elegir este campamento?</h3>
          <h1 className="titulo1">Diversión asegurada</h1>
        </div>
        <div className="divtexto container-size">
          <p className="texto">El campamento Dac-Pac es una experiencia diseñada exclusivamente para niños con altas capacidades, con un equipo que entiende sus necesidades y crea un entorno enriquecedor. A través de actividades variadas y estimulantes, fomenta el desarrollo intelectual, social y emocional en un ambiente donde pueden conectar con personas afines.
            </p>
        </div>
        <div className="img">
          <img src={base + img} draggable="false" alt="Imagenes de campamento" className="imagen-whychoose drop-shadow" />
        </div>
      </div>
    </center>
  );
};

export default WhyChoose;
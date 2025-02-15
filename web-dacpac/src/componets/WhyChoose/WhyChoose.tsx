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
        <div className="divtexto">
          <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dignissim risus. Mauris iaculis justo ac ex dignissim aliquam. Quisque leo nisl, semper a dictum ac, ultrices vitae mauris. Sed quis lacus neque.</p>
        </div>
        <div className="img">
          <img src={base + img} draggable="false" alt="Imagenes de campamento" className="imgen-whychoose" />
        </div>
      </div>
    </center>
  );
};

export default WhyChoose;
import './Paragraph.css';


interface ParagraphProp {
  title?: string;
  subTitle?: string;
  paragraphText?: string;
}


export const Paragraph = ({title, subTitle, paragraphText}: ParagraphProp) => {
  return (
    <center className="slide-in-right">
      <div className="whythis">
        <div className="titulo">
          <h3 className="titulo2">{title ?? '¿Por qué elegir este campamento?'}</h3>
          <h1 className="titulo1">{subTitle ?? 'Diversión asegurada'}</h1>
        </div>
        <div className="divtexto container-size">
          <p className="texto">{paragraphText ?? 'El campamento Dac-Pac busca crear un espacio de comfort y descanso, con un equipo de monitores que entiende sus necesidades y crea un entorno enriquecedor y estimulante. Con actividades para todos, desde scape rooms,    charlas con expertos, actividades artísticas o deportivas hasta los juegos más clásicos de campamento.'}
            </p>
        </div>
      </div>
    </center>
  );
};

export default Paragraph;
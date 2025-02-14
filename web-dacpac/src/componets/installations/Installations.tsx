import './Installations.css';

interface ImagesCarouselProps {
  images: string[];
}

function simpleHash(arr: string[]) {
  return arr
    .join(',')
    .split('')
    .reduce((hash, char) => hash + char.charCodeAt(0), 0)
    .toString(16);
}

const Installations: React.FC<ImagesCarouselProps> = ({ images }) => {
  const id = simpleHash(images);
  const base = "";

  return (
    <main>
      <div id={"carousel_" + id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((img, idx) => (
            <div className={'carousel-item' + (idx === 0 ? ' active' : '')} key={idx}>
              <img src={base + img} className="d-block w-100" alt="Imagen" draggable="false" />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={"#carousel_" + id} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={"#carousel_" + id} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </main>
  );
};

export default Installations;

import Card from '../card/Card';
import './ImagesCarousel.css'

interface ImagesCarouselProp {
    title: string;
    images: string[];
}

// Simple hashing function to produce unique ids
function simpleHash(arr: string[]) {
    return arr
        .join(",") // Convert array to string
        .split("") // Split into characters
        .reduce((hash, char) => hash + char.charCodeAt(0), 0) // Sum char codes
        .toString(16); // Convert to hex
}

const base = import.meta.env.VITE_BASE;

export default function ImagesCarousel({title, images}: ImagesCarouselProp) {
    const id = simpleHash(images);

    return <Card className='slide-in-right' title={title}>
        <div className='images-container'>
            <div id={"carousel_" + id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    images.map((img, idx) => 
                        <div className={'carousel-item' + (idx === 0 ? ' active' : '')} key={idx}>
                            <img src={base + img} className="d-block w-100" alt="Foto del campa" draggable="false" />
                        </div>
                    )
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={"#carousel_" + id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#carousel_" + id} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </Card>
}
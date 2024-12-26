import Card from '../card/Card';
import './ImagesCarousel.css'

interface ImagesCarouselProp {
    images: string[];
}

const base = import.meta.env.VITE_BASE;

export default function ImagesCarousel({images}: ImagesCarouselProp) {
    return <Card className='slide-in-right' title="👀 Campamentos pasados">
        <div className='images-container'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    images.map((img, idx) => 
                        <div className={'carousel-item' + (idx === 0 ? ' active' : '')} key={idx}>
                            <img src={base + img} className="d-block w-100" alt="Foto del campa" draggable="false" />
                        </div>
                    )
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </Card>
}
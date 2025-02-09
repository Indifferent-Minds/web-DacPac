import Card from '../card/Card';
import './GoogleMaps.css'

export default function GoogleMaps() {
    return <Card className='slide-in-left' title="📍 Ubicación">
        <iframe
            height="450"
            loading="lazy"
            className='google-maps-iframe'
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcTcZcfhpQw0RLo0bnrJeeEw&key=AIzaSyDIuGYYbacZc0sOla0a313XuqqzOSw6zy4">
        </iframe>
    </Card>
}
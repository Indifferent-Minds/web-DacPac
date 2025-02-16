import './GoogleMaps.css'


const GoogleMaps = () => {
    return (
        <center className="slide-in-right">
            <div className="mapsframe">
                <div className="whythis">
                    <div className="titulo">
                        <h3 className="titulo2">Localización</h3>
                        <h1 className="titulo1">¡Mira donde nos encontramos!</h1>
                    </div>
                    <iframe
                        height="450"
                        loading="lazy"
                        className='google-maps-iframe'
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcTcZcfhpQw0RLo0bnrJeeEw&key=AIzaSyCy0oaspf9nHXUBmZJpSvy4PMzRYZ1sl2A">
                    </iframe>
                </div>
            </div>
        </center>
    );
};

export default GoogleMaps;
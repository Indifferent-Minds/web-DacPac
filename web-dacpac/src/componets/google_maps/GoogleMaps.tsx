import './GoogleMaps.css'


const GoogleMaps = () => {
    return (
        <center className="slide-in-right">
            <div className="mapsframe">
                <div className="whythis">
                    <div className="titulo">
                        <h3 className="titulo2">Localización</h3>
                        <h1 className="titulo1">¡Mira donde disfrutamos!</h1>
                    </div>
                    <iframe
                        height="450"
                        loading="lazy"
                        className='google-maps-iframe'
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcTcZcfhpQw0RLo0bnrJeeEw&key=AIzaSyDIuGYYbacZc0sOla0a313XuqqzOSw6zy4">
                    </iframe>
                </div>
            </div>
        </center>
    );
};

export default GoogleMaps;
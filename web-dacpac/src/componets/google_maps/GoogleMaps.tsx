import "./GoogleMaps.css";

const GoogleMaps = () => {
  return (
    <center className="slide-in-right" id="location">
      <div className="mapsframe">
        <div className="whythis">
          <div className="titulo">
            <h3 className="titulo2">Localización</h3>
            <h1 className="titulo1">¡Mira dónde nos encontramos!</h1>
          </div>

          <iframe
            className="google-maps-iframe drop-shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17644.808821873117!2d-3.4847406944438495!3d41.339858268661985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd440d17c999b70d%3A0x3acf1f1f4db283e6!2sALBERGUE%20LA%20MADRIGUERA%20DE%20AKELA!5e1!3m2!1ses-419!2ses!4v1769290407716!5m2!1ses-419!2ses"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </center>
  );
};

export default GoogleMaps;

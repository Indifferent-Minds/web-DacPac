import './Footer.css'

const base = import.meta.env.VITE_BASE;

export default function Footer() {
    return <footer className='row py-2'>
      <div className='col-12 col-sm-4 text-center text-sm-start ps-sm-5'>
          <strong>Contacto:</strong><br/>
          <a href="mailto:molestar.a.dani@mentes.indiferentes.org">molestar.a.dani@mentes.indiferentes.org</a>
      </div>
      <div className='col-12 col-sm-4 text-center my-2 my-sm-0'>
        &copy; Loh chavaleh 2024🤘
      </div>
      <div className='col-12 col-sm-4 text-center text-sm-end pe-sm-5'><strong><img src={base+'indifferentminds.png'} alt="logoindifferentminds" className="logoindifferentminds" draggable="false" /></strong></div>
    </footer>
}
import './Footer.css'
import ReactIcon from "../../assets/react.svg"

export default function Footer() {
  return <footer className='row py-2'>
    <div className='col-12 col-sm-4 text-center text-sm-start ps-sm-5'>
      <strong>Contacto:</strong><br/>
      <a href="mailto:campamentodacpac@gmail.com">campamentodacpac@gmail.com</a>
    </div>
    <div className='col-12 col-sm-4 text-center my-2 my-sm-0'>
      Campamento DacPac
    </div>
    <div className='col-12 col-sm-4 text-center text-sm-end pe-sm-5'>
      <a href="https://www.instagram.com/dacpac.campamento/" target='_blank' rel='noreferrer'>
        <img src={ReactIcon} alt="instagram" height={16} />
      </a>
    </div>
  </footer>
}
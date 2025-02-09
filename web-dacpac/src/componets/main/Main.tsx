import Banner from '../banner/Banner';
import Faq from '../faq/Faq';
import Form from '../form/Form'
import ImagesCarousel from '../images_carousel/ImagesCarousel'
import './Main.css'

const images = [
  'image_01.jpg',
  'image_02.jpg',
  'image_03.jpg',
  'image_04.jpg',
];

const faqs = [
  {
    question: "¿Cuántas veces se va a lavar las manos mi niño?",
    answer: <><strong>CERO.</strong> No porque no nos lavemos las manos, sino porque si eso es lo que te preocupa tu niño no va ni a pisar el campamento 💖</>
  },
  {
    question: "¿Vais a tener cuiraro con mi niño?",
    answer: <><strong>NO.</strong> Tu hijo aprenderá a cuirarse solo 🤯</>
  },
  {
    question: "¿Cuántas veces puedo ir a ver a mi niño durante el campamento?",
    answer: <><strong>LAS QUE QUIERAS.</strong> Pero a la segunda os echamos a los dos 😘</>
  },
  {
    question: "¿Cuántos jabones puede llevar mi bebé como máximo?",
    answer: <><strong>50.</strong> Le daremos uno a él y repartiremos el resto, compartir es vivir ✨</>
  },
];

export default function Main() {
    return <main className='pb-4'>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Banner />
        <Faq faqs={faqs}/>
        <Form />
        <ImagesCarousel images={images} />
      </div>
    </main>
}
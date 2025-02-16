import Banner from '../banner/Banner';
import WhyChoose from '../WhyChoose/WhyChoose';
import Faq from '../faq/Faq';
import Form from '../form/Form'
import GoogleMaps from '../google_maps/GoogleMaps';
import ImagesCarousel from '../images_carousel/ImagesCarousel'
import Team from '../team/Team'
import Installations from '../installations/Installations'
import './Main.css'



const past_camps_images = [
  'image_01.jpg',
  'image_02.jpg',
  'image_03.jpg',
];

const facilities_images = [
  'image_02.jpg',
  'image_03.jpg',
  'image_04.jpg',
];

const faqs = [
  {
    question: "¿Qué hace distinto el campamento DAC-PAC?",
    answer: <>Es un campamento pensado por y para personas con altas capacidades. Todo el enfoque de este campamento está creado con el objetivo de generar el mayor confort para los participantes. Esto es posible ya que todo el equipo involucrado en el desarrollo de este campamento tiene alta capacidad, por lo que es más sencillo conectar con las necesidades de los camper.</>
  },
  {
    question: "¿En qué fechas y lugar se desarrollará el campamento?",
    answer: <>En el albergue El Molino, en Huérmeces del Cerro, Guadalajara. Desde el día 14 de Julio hasta el día 26.</>
  },
  {
    question: "¿Qué requisitos debo cumplir para ir al campamento?",
    answer: <>Tener entre 8 y 18 años, y una evaluación de alta capacidad.</>
  },
  {
    question: "¿Qué precio tiene el campamento? ¿Qué incluye?",
    answer: <>El campamento tiene un precio de 1.290€ IVA incluido, incluye alojamiento y pensión completa, durante los 12 días de campamento en los cuáles también incluirá gran variedad de actividades.</>
  },
  {
    question: "¿Qué tipo de actividades se llevan a cabo?",
    answer: <>Se realizan actividades para todos los gustos, desde juegos clásicos de campamento, actividades artísticas, excursiones al campo hasta charlas con expertos o “scape rooms”.</>
  },
  {
    question: "¿Cuántos participantes tiene el campamento?",
    answer: <>El campamento tendrá un aforo máximo de 60 participantes, de diferentes grupos de edades.</>
  },
  {
    question: "¿Durante el campamento la familia podrá ponerse en contacto con el asistente?",
    answer: <>Si, siempre que se necesite. Desde el campamento recomendamos restringir este contacto en la medida de lo posible para que pueda vivir la experiencia al máximo.</>
  },
  {
    question: "¿El desplazamiento hasta el campamento cómo se realiza?",
    answer: <>El desplazamiento se realiza por parte de las familias, hasta las instalaciones del albergue, y la recogida de igual manera.</>
  },
];

export default function Main() {
  return <main className='pb-4'>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Banner />
      <WhyChoose />
      <Form />
      <Faq faqs={faqs} />
      <GoogleMaps />
      <ImagesCarousel id='images' title="👀 Campamentos pasados" images={past_camps_images} />
      <Team />
      <Installations images={facilities_images} />

    </div>
  </main>
}
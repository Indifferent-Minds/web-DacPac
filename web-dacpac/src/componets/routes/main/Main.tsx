import Banner from '../../banner/Banner';
import Paragraph from '../../paragraph/Paragraph';
import Faq from '../../faq/Faq';
import Form from '../../form/Form'
import GoogleMaps from '../../google_maps/GoogleMaps';
import Team from '../../team/Team'
import Installations from '../../installations/Installations'
import Newsletter from '../../newsletter/Newsletter'
import './Main.css';
import { useEffect } from 'react';



const past_camps_images = [
  'otros_1.jpg',
  'otros_2.jpg',
  'otros_3.jpg',
  'otros_4.jpg',
  'otros_5.jpg',
  'otros_6.jpg',
  'otros_7.jpg',
  'otros_8.jpg',
  'otros_9.jpg',
  'otros_10.jpg',
  'otros_11.jpg',
  'otros_12.jpg',
  'otros_13.jpg',
  'otros_14.jpg',
  'otros_15.jpg',
  'otros_16.jpg',
  'otros_17.jpg',
];

const facilities_images = [
  'instalaciones_1.jpg',
  'instalaciones_2.jpg',
  'instalaciones_3.jpg',
  'instalaciones_4.jpg',
  'instalaciones_5.png',
  'instalaciones_6.jpg',
  'instalaciones_7.jpg',
  'instalaciones_8.jpg',
  'instalaciones_9.jpg',
  'instalaciones_10.jpg',
  'instalaciones_11.jpg',
  'instalaciones_12.jpg',
  'instalaciones_13.jpg',
  'instalaciones_14.jpg',
];

const faqs = [
  {
    question: "¿Qué hace distinto el campamento DAC-PAC?",
    answer: <>Es un campamento pensado por y para personas con altas capacidades. Todo el enfoque de este campamento está creado con el objetivo de generar el mayor confort para los participantes. Esto es posible ya que todo el equipo involucrado en el desarrollo de este campamento tiene alta capacidad, por lo que es más sencillo conectar con las necesidades de los camper.</>
  },
  {
    question: "¿En qué fechas y lugar se desarrollará el campamento?",
    answer: <>En el albergue La Madriguera de Akela, en Riaza, Segovia. Desde el día 20 de Julio hasta el día 31.</>
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
  const theme = "main-theme";
  useEffect(
    () => document.body.setAttribute("data-theme", theme),
    []
  )
  document.body.setAttribute("data-theme", theme);

  return <main className='pb-4'>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Banner />
      <Paragraph />
      <Form />
      <Faq faqs={faqs} />
      <GoogleMaps />
      <Installations component_id='images' title='Instalaciones' subtitle='¡Mira el albergue!' images={facilities_images} />
      <Team />
      <Installations title='Otras ediciones' subtitle='¡Mira campamentos pasados!' images={past_camps_images} />
      <Newsletter />
    </div>
  </main>
}
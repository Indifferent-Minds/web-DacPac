import Paragraph from '../../paragraph/Paragraph';
import Faq from '../../faq/Faq';
import Form from '../../form/Form'
import GoogleMaps from '../../google_maps/GoogleMaps';
import Team from '../../team/Team'
import Installations from '../../installations/Installations'
import './Adults.css';
import { useEffect } from 'react';


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
    question: "¿Por qué DAC-PAC adultos?",
    answer: <>Dac-Pac adultos surge a petición vuestra, como espacio en el que compartir experiencias y disfrutar de la ironía y el sarcasmo.</>
  },
  {
    question: "¿En qué fechas y lugar se desarrollará el campamento?",
    answer: <>En el albergue El Molino, en Huérmeces del Cerro, Guadalajara. Desde el día 14 de Julio hasta el día 25.</>
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
    answer: <>Tenemos un aforo mínimo de 20 participantes y un máximo de 25.</>
  },
];

export default function Main() {
  const theme = "adult-theme";
  useEffect(
    () => document.body.setAttribute("data-theme", theme),
    []
  )
  document.body.setAttribute("data-theme", theme);

  return <main className='pb-4'>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Paragraph title='¿Qué haremos en el fin de semana?' subTitle='Un fin de semana de retos y pasar tiempo entre iguales' paragraphText='Buenas convesaciones, scape-rooms, juegos de mesa y muchas risas'/>
      <Form subTitle='¡Ven a al mejor evento del año!' />
      <Faq faqs={faqs} />
      <GoogleMaps />
      <Installations component_id='images' title='Instalaciones' subtitle='¡Mira el albergue!' images={facilities_images} />
      <Team />
      {/* <Installations title='Otras ediciones' subtitle='¡Mira campamentos pasados!' images={past_camps_images} /> */}
    </div>
  </main>
}


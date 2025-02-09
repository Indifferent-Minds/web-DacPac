import Card from '../card/Card';

interface BigImageProp {
    title: string;
    image: string;
}

const base = import.meta.env.VITE_BASE;

export default function BigImage({title, image}: BigImageProp) {
    return <Card className='slide-in-right' title={title}>
        <img src={base + image} className="d-block w-100" alt="Foto del campa" draggable="false" />
    </Card>
}
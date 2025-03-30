import './Banner.css'

interface BannerProp {
    title?: string;
    subTitles?: string;
    extraText?: string;
}

export default function Banner({title, subTitles, extraText}: BannerProp) {
    return <section className='banner'>
        <div className="bg"></div>
        <h1>Campamento Dac-Pac</h1>
        <h2>Del 12 al 24 julio</h2>
        <h3 className='color-white'>¡Vente, te esperamos!</h3>
    </section>
}
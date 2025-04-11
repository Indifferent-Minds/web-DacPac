import './Banner.css'

interface BannerProp {
    title?: string;
    subTitles?: string;
    extraText?: string;
}

export default function Banner({title, subTitles, extraText}: BannerProp) {
    return <section className='banner'>
        <div className="bg"></div>
        <h1>{title ?? 'Campamento Dac-Pac'}</h1>
        <h2>{subTitles ?? 'Del 14 al 25 de julio'}</h2>
        <h3>{extraText ?? '¡Vente, te esperamos!'}</h3>
    </section>
}

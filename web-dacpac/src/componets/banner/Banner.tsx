import './Banner.css'

/*interface BannerProp {
    title?: string;
    subTitles?: string;
    extraText?: string;
}*/

export default function Banner(/*{title, subTitles, extraText}: BannerProp*/) {
    return <section className='banner'>
        <div className="bg"></div>
        <h1>{title ?? 'Campamento Dac-Pac'}</h1>
        <h2>{subTitles ?? 'Del 20 al 31 de julio'}</h2>
        <h3 className='color-white'>{extraText ?? '¡Vente, te esperamos!'}</h3>
    </section>
}
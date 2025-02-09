import './Card.css'

interface CardProp {
    className?: string;
    title: string;
    id?: string;
    children: React.ReactNode;
}

export default function Card({className, title, id, children}: CardProp) {
    return <div id={id ?? ''} className="card-container">
        <div className={"titled-card drop-shadow " + className}>
            <h3 className="card-title py-3">{title}</h3>
            <div className="card-children">{children}</div>
        </div>
    </div>
}
import Image from "next/image";

import cardHover from "/public/assets/portfolio/card_hover.png";

interface CardImage {
    card: any
    fitCarrousel?: boolean
    cardHover?: boolean
}

export default function Card(props: CardImage) {
    return (
        <figure className="card_image" style={{ width: `${props.fitCarrousel && '100%'}`, height: `${props.fitCarrousel && '27.375rem'}` }}>
            <Image
                className="card_source"
                src={props.card}
                alt="Imagem de Demonstração de Projeto"
                style={{ width: '100%' }}
            />
            <Image
                className="card_hover"
                src={cardHover}
                alt="Imagem Selecionada"
                style={{ display: `${props.cardHover && 'none'}` }}
            />
        </figure>
    )
}
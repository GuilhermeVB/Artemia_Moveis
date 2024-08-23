import Image from "next/image";

interface CardImage {
    card: any
    fitCarrousel?: boolean
}

export default function Card(props: CardImage) {
    return (
        <figure className="card_image" style={{width: `${props.fitCarrousel && '100%'}`}}>
            <Image
                src={props.card}
                alt="Imagem de Demonstração de Projeto"
                style={{width: '100%'}}
            />
        </figure>
    )
}
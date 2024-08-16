import Image from "next/image";

interface CardImage {
    card: any
}

export default function Card(props: CardImage) {
    return (
        <figure>
            <Image
                className="card_image"
                src={props.card}
                alt="Imagem de Demonstração de Projeto"
            />
        </figure>
    )
}
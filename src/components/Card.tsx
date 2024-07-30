import Image from "next/image";

interface CardImage {
    card: any
}

export default function Card(props: CardImage) {
    return (
        <figure>
            <Image
                src={props.card}
                alt="Imagem de Demonstração de Projeto"
                style={{width: "450px", height:"438px"}}
            />
        </figure>
    )
}
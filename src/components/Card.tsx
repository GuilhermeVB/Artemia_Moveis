import Image from "next/image";

interface CardInput {
    card: any
}

export default function Card(props: CardInput) {
    return (
        <figure>
            <Image
                src={props.card}
                alt="Imagem Exemplo de Projeto"
                style={{width: "450px", height:"438px"}}
            />
        </figure>
    )
}
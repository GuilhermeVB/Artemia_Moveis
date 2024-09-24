'use client'

import Image from "next/image";

import cardHover from "/public/assets/portfolio/card_hover.png";

import { useState } from "react";
interface CardImage {
    card: any
    fitCarrousel?: boolean
    cardHover?: boolean
}

export default function Card(props: CardImage) {
    const [mouseStatus, setMouseStatus] = useState<boolean>(false)

    function mouseOn() {
        setMouseStatus(true)
    }

    function mouseOff() {
        setMouseStatus(false)
    }

    return (
        <figure
            onMouseEnter={mouseOn}
            onMouseLeave={mouseOff}
            className="card_image"
            style={{ width: `${props.fitCarrousel && '100%'}`, height: `${props.fitCarrousel && '27.375rem'}` }}
        >
            <Image
                className="card_source"
                src={props.fitCarrousel ? props.card : props.card}
                alt="Imagem de Demonstração de Projeto"
                style={{ width: '100%' }}
            />
            <Image
                className="card_hover"
                src={cardHover}
                alt="Imagem Selecionada"
                style={{ display: `${props.cardHover && 'none'}`, opacity: `${mouseStatus ? '1' : '0'}`, transition: `${mouseStatus ? '.5s' : '.5s'}` }}
            />
        </figure>
    )
}
'use client'

import { useState } from "react";
import Image from "next/image"

import profileHover from "/public/assets/feedback/profile_hover.png";

interface FeedbackProfile {
    source: any
    comment: string
}

export default function FeedbackBox(props: FeedbackProfile) {
    const [mouseStatus, setMouseStatus] = useState<boolean>(false)

    function mouseOn() {
        setMouseStatus(true)
    }

    function mouseOff() {
        setMouseStatus(false)
    }

    return (
        <div className="comment_box">
            <Image
                className="profile"
                src={props.source}
                alt="Imagem de Perfil"
            />
            <Image
                onMouseEnter={mouseOn}
                onMouseLeave={mouseOff}
                className="profile_hover"
                src={profileHover}
                alt="Imagem de Perfil Selecionada"
                style={{ opacity: `${mouseStatus ? '1' : '0'}`, transition: `${mouseStatus ? '.5s' : '.5s'}` }}
            />
            <p className="comment">{props.comment}</p>
        </div>
    )
}
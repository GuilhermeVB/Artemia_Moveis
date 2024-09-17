'use client'

import Image from "next/image"

import profileHover from "/public/assets/feedback/profile_hover.png";

interface FeedbackProfile {
    source: any
    comment: string
}

export default function FeedbackBox(props: FeedbackProfile) {
    return (
        <div className="comment_box">
            <Image
                className="profile"
                src={props.source}
                alt="Imagem de Perfil"
            />
            <Image
                className="profile_hover"
                src={profileHover}
                alt="Imagem de Perfil Selecionada"
            />
            <p className="comment">{props.comment}</p>
        </div>
    )
}
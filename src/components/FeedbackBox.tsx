import Image from "next/image"

interface FeedbackProfile {
    source: any
    comment: string
}

export default function FeedbackBox(props: FeedbackProfile) {
    return (
        <figure className="comment_box">
            <Image
                className="profile"
                src={props.source}
                alt="Imagem de Perfil"
                style={{width: '15.625rem', height: '15.625rem'}}
            />
            <figcaption className="comment">{props.comment}</figcaption>
        </figure>
    )
}
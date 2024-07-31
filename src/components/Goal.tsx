import Image from "next/image"

interface GoalContent {
    icon: any
    alt: string
    title: string
    paragraph: string
}

export default function Goal(props: GoalContent) {
    return (
        <div className="goal">
            <Image
                src={props.icon}
                alt={props.alt}
                style={{ width: "50px", height: "50px" }}
            />
            <h3 className="goal_heading">{props.title}</h3>
            <p className="goal_paragraph">{props.paragraph}</p>
        </div>
    )
}
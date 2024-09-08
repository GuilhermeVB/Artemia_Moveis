import Image from "next/image"

interface GoalContent {
    icon: any
    title: string
    paragraph: string
}

export default function Goal(props: GoalContent) {
    return (
        <div className="goal">
            <figure className="w-[3.125rem] h-[3.125rem]" style={{backgroundImage: `url('${props.icon.src}')`}}></figure>
            <h3 className="goal_heading">{props.title}</h3>
            <p className="goal_paragraph">{props.paragraph}</p>
        </div>
    )
}
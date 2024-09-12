'use client'

import { useState } from "react"

interface GoalContent {
    icon: any
    title: string
    paragraph: string
}

export default function Goal(props: GoalContent) {
    const [mouseStatus, setMouseStatus] = useState<boolean>(false)

    function mouseOn() {
        setMouseStatus(true)
    }

    function mouseOff() {
        setMouseStatus(false)
    }

    return (
        <div className="animation_goal">
            <div
                onMouseEnter={mouseOn}
                onMouseLeave={mouseOff}
                className="goal"
                style={{ opacity: `${mouseStatus ? '1' : '0.8'}`, transition: `${mouseStatus ? '.5s' : '.5s'}` }}
            >
                <figure className="w-[3.125rem] h-[3.125rem]" style={{ backgroundImage: `url('${props.icon.src}')` }}></figure>
                <h3 className="goal_heading" style={{ fontSize: `${mouseStatus ? '28px' : ''}`, transition: `${mouseStatus ? '.5s' : '.5s'}` }}>
                    {props.title}
                </h3>
                <p className="goal_paragraph">{props.paragraph}</p>
            </div>
        </div>
    )
}
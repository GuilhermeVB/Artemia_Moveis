'use client'

import { useState } from "react"

interface ButtonStyles {
    class: string
    text: string
    maxWidth?: boolean
}

export default function Button(props: ButtonStyles) {
    const [mouseStatus, setMouseStatus] = useState<boolean>(false)

    function mouseOn() {
        setMouseStatus(true)
    }

    function mouseOff() {
        setMouseStatus(false)
    }

    return (
        <button
            onMouseEnter={mouseOn}
            onMouseLeave={mouseOff}
            className={`button ${props.class} ${props.maxWidth && 'max_width'}`}
            style={{fontSize: `${mouseStatus ? '16px': '14px'}`, transition: `${mouseStatus ? '.5s' : '.5s'}`}}
            >
            {props.text}
        </button>
    )
}
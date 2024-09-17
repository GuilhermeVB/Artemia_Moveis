interface ButtonStyles {
    class: string
    maxWidth?: boolean
    smallHover?: boolean
    text: string
}

export default function Button(props: ButtonStyles) {

    return (
        <button className={`button ${props.class} ${props.maxWidth && 'max_width'}`}>
            {props.text}
        </button>
    )
}
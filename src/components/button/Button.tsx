interface ButtonStyles {
    class: string
    text: string
    maxWidth?: boolean
}

export default function Button(props: ButtonStyles) {
    return (
        <button className={`button ${props.class} ${props.maxWidth && 'max_width'}`}>
            {props.text}
        </button>
    )
}
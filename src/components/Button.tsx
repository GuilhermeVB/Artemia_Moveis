interface ButtonStyles {
    backgroundColor?: string
    border?: string
    borderRadius: string
    color?: string
    text: string
}

export default function Button(props: ButtonStyles) {
    return (
        <button
            className="button"
            style={{
                backgroundColor: `${props.backgroundColor}`,
                color: `${props.color}`,
                border: `${props.border}`,
                borderRadius: `${props.borderRadius}`
            }}>
            {props.text}
        </button>
    )
}
export default function StarEmpty(props){
    let width = props.width ? props.width : "18"
    let height = props.height ? props.height : "18"
    let color = props.color ? props.color : "black"
    let strokeWidth = props.strokeWidth ? props.strokeWidth:"3"
    let strokeLinejoin = props.strokeLinejoin ? props.strokeLinejoin:"round"

    return(
        <svg width={width} height={height} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M52 21.2308H32.8036L27 2L21.1964 21.2308H2L17.625 32.7692L11.5982 52L27 39.9808L42.4018 52L36.375 32.7692L52 21.2308Z"
                stroke={color} stroke-width={strokeWidth} stroke-linejoin={strokeWidth}/>
        </svg>
    )
}
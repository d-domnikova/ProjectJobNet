export default function Info(props)
{
    let width = props.width ? props.width : "18"
    let height = props.height ? props.height : "18"
    let color = props.color ? props.color : "black"

    return (
        <svg width={width} height={height} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M28 14.1389V14.1112M28 41.8889V22.4444M53 28C53 41.8072 41.8072 53 28 53C14.1929 53 3 41.8072 3 28C3 14.1929 14.1929 3 28 3C41.8072 3 53 14.1929 53 28Z"
                stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}
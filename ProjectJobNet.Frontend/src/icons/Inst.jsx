export default function Inst(props){
    let width = props.width ? props.width : "28"
    let height = props.height ? props.height : "28"
    let color = props.color ? props.color : "black"
    return(
        <svg width={width} height={height} viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8 2H11.12C6.08316 2 2 6.08316 2 11.12V24.8C2 29.8367 6.08316 33.92 11.12 33.92H24.8C29.8367 33.92 33.92 29.8367 33.92 24.8V11.12C33.92 6.08316 29.8367 2 24.8 2Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9601 24.8001C14.1824 24.8001 11.1201 21.7378 11.1201 17.9601C11.1201 14.1824 14.1824 11.1201 17.9601 11.1201C21.7378 11.1201 24.8001 14.1824 24.8001 17.9601C24.8001 19.7741 24.0794 21.514 22.7967 22.7967C21.514 24.0794 19.7741 24.8001 17.9601 24.8001Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27.0798 6.56012C25.8206 6.56012 24.7998 7.58091 24.7998 8.84012C24.7998 10.0993 25.8206 11.1201 27.0798 11.1201C28.339 11.1201 29.3598 10.0993 29.3598 8.84012C29.3598 7.58091 28.339 6.56012 27.0798 6.56012Z" fill={color}/>
            <path d="M27.0795 7.69998C26.4498 7.69998 25.9395 8.21038 25.9395 8.83998C25.9395 9.46959 26.4498 9.97998 27.0795 9.97998C27.7091 9.97998 28.2195 9.46959 28.2195 8.83998C28.2195 8.21038 27.7091 7.69998 27.0795 7.69998Z" stroke={color} stroke-width="3" stroke-linecap="round"/>
        </svg>
    )
}
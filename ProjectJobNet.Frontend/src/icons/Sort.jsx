export default function Sort(props){
    let width = props.width ? props.width : "18"
    let height = props.height ? props.height : "18"
    let color = props.color ? props.color : "black"
 return(
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
        <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"/>
    </svg>
 )
}
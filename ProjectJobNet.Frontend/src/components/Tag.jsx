export default function Tag(props){
    return(
        <a href={props.url} className="text-gray-900 text-center text-sm/3 bg-gray-400 px-3 py-2 rounded-full hover:bg-gray-500 w-fit">{props.text}</a>
    )
}
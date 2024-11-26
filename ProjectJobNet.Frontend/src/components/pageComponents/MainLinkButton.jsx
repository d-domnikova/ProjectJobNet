export default function MainButton(props){
    let text = props.text;
    let url = props.url

    return (
        <a href={url} className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-xl px-5 py-2.5 text-center">{text}</a>
    )
}
export default function FormField(props){
    let id = props.id;
    let name = props.name;
    let type = props.type;
    let placeholder = props.placeholder ? props.placeholder : props.name;
    let style = props.className;

 return(
        <div className={style}>
            <label for={id} className="block mb-2 text-sm font-medium text-gray-900 ml-1">{name}</label>
            <input type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2" placeholder={placeholder} required />
        </div>
    )
}